const mongoose = require('mongoose');

const activeUserSchema = mongoose.Schema({

    uid: {
        type: String,
        required: true,
        unique: true
    },
    activeChats: [{
        recieverId: {
            type: String,
            required: true,
            unique: true
        }, 
        name: {type: String}
    }]
});

module.exports = mongoose.model('usersactivechats',activeUserSchema);