const mongoose = require('mongoose');

const formTwoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    services: {
        type: String,
        enum: ['packages', 'cabs', 'hotels', 'freshup', 'personal guide'],
        required: true
    },
});

module.exports = mongoose.model('FormTwo', formTwoSchema);