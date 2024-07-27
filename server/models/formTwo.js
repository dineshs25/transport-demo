const mongoose = require('mongoose');

const formTwoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    services: {
        type: String,
        enum: ['Local temple packages', 'Hotel booking', 'Cab booking', 'Only Freshup', 'Tour Guide'],
        required: true
    },
    locations: {
        type: String,
        enum: ['Tirupati ', 'Tiruvannamalai ', 'Madurai ', 'Srikalahasthi', 'Kanipakam', 'Kanchipuram', 'Rameswaram', 'Srirangam'],
        required: true
    }
});

module.exports = mongoose.model('FormTwo', formTwoSchema);