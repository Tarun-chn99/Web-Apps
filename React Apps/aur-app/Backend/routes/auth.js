const express = require('express');
const router = express.Router();
const users = require('../models/User');
const chats = require('../models/userChat');
const usersactivechats = require('../models/usersactivechats');

// Route 1: End point to create user in db

router.post('/',async (req,res) => {
    
    let success = "true";  
    try{

        let user = await users.findOne({uid: req.body.uid});

        if(user)
        return res.json({success: success, message: "Welcome Back!"});
        
        user = await users.create({
            uid: req.body.uid,
            name: req.body.name,
            contact: req.body.contact
        });       

        res.json({success, message: "New account login!"});

    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
});

// Route 2: End point to get all active chats of the client

router.get('/getActiveChats', async(req,res) => {

    try{
        let user = await usersactivechats.findOne({uid: req.headers.uid});
        res.json(user.activeChats);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("internal server error occured");
    }
 

});

// Route 3: End point to save users chats

router.post('/saveMessage', async (req,res) => {

    try{

        let chat = await chats.findOne({recieverId: req.body.reciever});

        if(chat){

            await chats.findOneAndUpdate(
                { recieverId: req.body.reciever },
                { $push: {
                        msg: {  
                            message: req.body.msg,
                            side: req.body.side
                        }
                    }
                }
            );
            res.json({Success:"True",Message:"New message saved"}); 
        }
        else{

            await chats.create({
                senderId: req.body.sender,
                recieverId: req.body.reciever,
                msg: [{
                    message: req.body.msg,
                    side: req.body.side
                }]
            });  
            res.json({Success:"True",Message:"New message saved"}); 
        }

    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    }
})

//Route 4: End Point to get all the messages for the activeReciever

router.get('/getChatMessages', async(req,res) => {

    try{
        const activeRecieverChat = await chats.findOne({recieverId: req.headers.recieverid});
        if(activeRecieverChat)
        res.json(activeRecieverChat.msg);
        else
        res.json([]);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    }

})

module.exports = router;