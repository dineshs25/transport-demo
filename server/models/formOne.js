const mongoose = require('mongoose');

const formOneSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    services: {
        type: String,
        enum: ['local temple packages', 'hotel booking', 'personal guide', 'local cab', 'only freshup'],
        required: true
    },
    travellingDate: { type: Date, required: true },
    numberOfAdults: { type: Number, required: true },
    numberOfKids: { type: Number, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('FormOne', formOneSchema);