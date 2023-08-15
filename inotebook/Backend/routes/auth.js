const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/', [

    body('name','Enter atleast 3 characters').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body('password','Enter atleast 5 characters').isLength({min:5})
], 
    async (req,res) => {
    
        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
        }

        try{

            let user = await User.findOne({email: req.body.email});
            if(user){
            return res.status(400).json({error: "Sorry! User with this mail exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);

        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });        
        
        res.json(user);
        }catch(error){
            console.error(error.message);
            res.status(500).send("Some error occured");
        }

    });

module.exports = router;