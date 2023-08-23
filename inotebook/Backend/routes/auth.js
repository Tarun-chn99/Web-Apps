const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = 'HelloUser';
const fetchUser = require('../Middleware/fetchUser')

//  Route 1: End point to create user and send authToken as response
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
        console.log("Inside create user route");
        try{

            let user = await User.findOne({email: req.body.email});
            
            if(user)
            return res.status(400).json({error: "Sorry! User with this mail exists"});
            

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password,salt);

            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email
            });        
            
            const data = {
                    id: user.id 
            };
            const authToken = jwt.sign(data,jwt_secret);
            res.json({authToken});

        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal server error occured");
        }

    });

//  Route 2: End point to login user and send authToken as response
    router.post('/login', [

        body('email','Enter valid email').isEmail(),
        body('password','Password cannot be blank').exists()
    ], 
        async (req,res) => {
            
            const errors = validationResult(req);
            if(!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});

            const { email , password } = req.body;    
            try{

                let user = await User.findOne({email});
                
                if(!user)
                return res.status(400).json({error: "Sorry! Invalid credentials, Please try again"});
            
                const passwordCompare = await bcrypt.compare(password,user.password);
                if(!passwordCompare)
                return res.status(400).json({error: "Sorry! Invalid credentials, Please try again"});

                const data = {
                        id: user.id 
                };
                const authToken = jwt.sign(data,jwt_secret);
                res.json({authToken});
    
            }catch(error){
                console.error(error.message);
                res.status(500).send("Internal server error occured");
            }
    
        });

//  Route 3: Check whether the token given by user to authenticate exist under our database or not
router.post('/getUser', fetchUser, async (req,res) => {
        
        try{
            const userId = req.id;
            console.log(userId);
            const user = await User.findById(userId).select("-password");
            res.send(user);

        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal server error occured");
        }

    }); 


module.exports = router;