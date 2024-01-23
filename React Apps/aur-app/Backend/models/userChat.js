const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    
    senderId: {
        type: String,
        required: true,
        unique: true
    },    
    RecieverId: {
        type: String,
        required: true,
        unique: true
    },
    msgId: {
        type: Number,
        required: true,
        unique: true
    },
    msg: {
        type: String,
        require: true
    }
},  {timestamps: true});

module.exports = mongoose.model('chats',chatSchema);