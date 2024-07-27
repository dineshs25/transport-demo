require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const FormOne = require('./models/formOne');
const FormTwo = require('./models/formTwo');
const authenticateToken = require('./middleware/authenticateToken');
const cookieParser = require('cookie-parser');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174', 'https://mr-piligrim.netlify.app', 'https://stunning-salmiakki-e904b4.netlify.app'];

app.use(
    cors({
        origin: function (origin, callback) {
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

mongoose.connect(process.env.MONGODB_API)
    .then(() => {
        console.log('DB_Connected');
    })
    .catch(() => {
        console.log('DB Connection failed');
    });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.use('/admin', adminRoutes);

app.post(
    '/formOne',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('services').isIn(['Local temple packages', 'Hotel booking', 'Cab booking', 'Only Freshup', 'Tour Guide']).withMessage('Invalid service'),
        body('locations').isIn(['Tirupati ', 'Tiruvannamalai ', 'Madurai ', 'Srikalahasthi', 'Kanipakam', 'Kanchipuram', 'Rameswaram', 'Srirangam']).withMessage('Invalid Location'),
        body('travellingDate').isDate().withMessage('Travelling date must be a valid date'),
        body('numberOfAdults').isInt({ min: 0 }).withMessage('Number of adults must be a positive integer'),
        body('numberOfKids').isInt({ min: 0 }).withMessage('Number of kids must be a positive integer'),
        body('email').isEmail().withMessage('Email must be valid'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const formOne = new FormOne(req.body);
            await formOne.save();

            const mailOptions = {
                from: `"Travel Booking Demo" <${process.env.EMAIL_USER}>`,
                to: req.body.email,
                subject: 'New Model1 Entry',
                text: `New entry: ${JSON.stringify(req.body)}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send('Error sending email');
                } else {
                    console.log('Email sent: ' + info.response);
                    return res.status(201).send(formOne);
                }
            });
        } catch (error) {
            console.log(error)
            return res.status(400).send(error.message);
        }
    }
);

app.post(
    '/formTwo',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('phone').notEmpty().withMessage('Phone is required'),
        body('email').isEmail().withMessage('Email must be valid'),
        body('locations').isIn(['Tirupati ', 'Tiruvannamalai ', 'Madurai ', 'Srikalahasthi', 'Kanipakam', 'Kanchipuram', 'Rameswaram', 'Srirangam']).withMessage('Invalid Location'),
        body('services').isIn(['Local temple packages', 'Hotel booking', 'Cab booking', 'Only Freshup', 'Tour Guide']).withMessage('Invalid service'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const formTwo = new FormTwo(req.body);
            await formTwo.save();

            const mailOptions = {
                from: `"Travel Booking Demo" <${process.env.EMAIL_USER}>`,
                to: req.body.email,
                subject: 'New Model2 Entry',
                text: `New entry: ${JSON.stringify(req.body)}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send('Error sending email');
                } else {
                    console.log('Email sent: ' + info.response);
                    return res.status(201).send(formTwo);
                }
            });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
);

app.get("/", (req, res) => {
    res.redirect('https://mr-piligrim.netlify.app')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
