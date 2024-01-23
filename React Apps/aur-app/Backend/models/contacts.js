const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    uid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model("contacts",contactSchema);