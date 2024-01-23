const express = require('express');
const router = express.Router();
const users = require('../models/User');

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


module.exports = router;