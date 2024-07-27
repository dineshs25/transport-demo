const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticateToken');

// Register
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const existingAdmin = await Admin.findOne({ email });
            if (existingAdmin) {
                return res.status(400).send('Admin already exists');
            }

            const admin = new Admin({ email, password });
            await admin.save();
            return res.status(201).send('Admin registered successfully');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
);

// Login
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const admin = await Admin.findOne({ email });
            if (!admin) {
                return res.status(400).send('Invalid credentials');
            }

            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(400).send('Invalid credentials');
            }
            const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' });
            return res.status(200).send('Login successful');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
);

// Update Password
router.patch(
    '/update-password',
    authenticateToken,
    [
        body('currentPassword').notEmpty().withMessage('Current password is required'),
        body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        try {
            const admin = await Admin.findById(userId);
            if (!admin) return res.status(404).send('User not found');

            const match = await admin.comparePassword(currentPassword);
            if (!match) return res.status(401).send('Current password is incorrect');

            admin.password = newPassword;
            await admin.save();

            res.status(200).send('Password updated successfully');
        } catch (error) {
            console.error('Update password error:', error);
            res.status(500).send('An error occurred while updating the password');
        }
    }
);


// Logout route
router.post('/logout', authenticateToken, (req, res) => {
    try {
        res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'None' });
        res.status(200).send('Logged out successfully');
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).send('An error occurred during logout');
    }
});

module.exports = router;
