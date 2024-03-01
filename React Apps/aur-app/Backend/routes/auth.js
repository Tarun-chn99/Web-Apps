const express = require('express');
const router = express.Router();
const users = require('../models/User');
const chats = require('../models/userChat');
const usersactivechats = require('../models/usersactivechats');
const multer = require('multer');

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const ext = file.mimetype.split("/")[0];
        if (ext === "image") {
            // if type is image then store in images folder
          cb(null, "Backend/uploads/images");
        } else {
            // In case of not an image store in others
          cb(null, "Backend/uploads/others");
        }

    //   cb(null, 'Backend/uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });


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

router.post('/saveMessage',async (req,res) => {

    try{

        const {senderId, recieverId, msgType,data, side, time } = req.body;
        const {name,path,type} = data;
        console.log('Array Buffer : ',data);
        let chat = await chats.findOne({recieverId: recieverId});

        if(chat){

            if(msgType === 'text')
            await chats.findOneAndUpdate(
                { recieverId: recieverId },
                { $push: {
                        msg: {  
                            msgType: msgType,
                            message: data,
                            side: side,
                            time: time
                        }
                    }
                }
            );
            else
            await chats.findOneAndUpdate(
                { recieverId: recieverId },
                { $push: {
                        msg: {  
                            msgType: msgType,
                            file: {
                                name: name,
                                path: path,
                                type: type
                            },
                            side: side,
                            time: time
                        }
                    }
                }
            );

            res.json({Success:"True",Message:"New message saved"}); 
        }
        else{

            if(msgType === 'text')
            await chats.create({
                senderId: senderId,
                recieverId: recieverId,
                msg: [{
                    message: data,
                    side: side,
                    time: time
                }]
            });  
            else
            await chats.create({
                senderId: senderId,
                recieverId: recieverId,
                msg: [{
                    msgType: msgType,
                    file: {
                        name: name,
                        path: path,
                        type: type
                    },
                    side: side,
                    time: time
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


router.post('/uploadFile',upload.single('data'),async (req,res) => {

    try{

        const {senderId, recieverId, side, time } = req.body;
        const {originalname,path,mimetype} = req.file;
        let chat = await chats.findOne({recieverId: recieverId});

        if(chat)
            await chats.findOneAndUpdate(
                { recieverId: recieverId },
                { $push: {
                        msg: {  
                            msgType: mimetype,
                            file: {
                                name: originalname,
                                path: path,
                                type: mimetype
                            },
                            side: side,
                            time: time
                        }
                    }
                }
            );

        else
            await chats.create({
                senderId: senderId,
                recieverId: recieverId,
                msg: [{
                    msgType: mimetype,
                    file: {
                        name: originalname,
                        path: path,
                        type: mimetype
                    },
                    side: side,
                    time: time
                }]
            }); 

        res.json({Success:"True",Message:"New message saved"}); 

    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    }
})


//Route 5: End Point to get all the messages for the activeReciever

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