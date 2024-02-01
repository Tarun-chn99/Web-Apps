const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    
    senderId: {
        type: String,
        required: true
        },    
    recieverId: {
        type: String,
        required: true,
    },
    msg: [{
        type: String,
        require: true
    }]
},  {timestamps: true});

module.exports = mongoose.model('chats',chatSchema);