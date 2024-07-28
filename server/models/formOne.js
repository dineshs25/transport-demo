const mongoose = require('mongoose');

const formOneSchema = new mongoose.Schema({
    name: { type: String, required: true },
    services: {
        type: String,
        enum: ['Local temple packages', 'Hotel booking', 'Cab booking', 'Only Freshup', 'Tour Guide'],
        required: true
    },
    travellingDate: { type: Date, required: true },
    numberOfAdults: { type: Number, required: true },
    numberOfKids: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: {
        type: String,
        enum: ['Tirupati', 'Tiruvannamalai', 'Madurai', 'Srikalahasthi', 'Kanipakam', 'Kanchipuram', 'Rameswaram', 'Srirangam'],
        required: true
    }
});

module.exports = mongoose.model('FormOne', formOneSchema);