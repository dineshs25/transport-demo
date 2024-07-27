const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    if (!req.cookies?.["*"]) return res.status(400).send('No token found, Please Login!');
    const token = req.cookies?.["*"];
    if (token == null) return res.status(401).send('No token found, Please Login!');

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Invalid token, Please Login!');
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;