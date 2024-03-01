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
        
        msgType: {
            type: String,
            required: true
        },
        message: {
            type: String,
        },
        file:{
            name: {
                type: String,
                required: true
            },
            path: {
                type: String,
                required: true
            },
            type: {
                type: String
            }
        },
        side: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }]
},  {timestamps: true});

module.exports = mongoose.model('chats',chatSchema);



