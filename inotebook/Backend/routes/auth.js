const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator');

router.get('/', [
    body('name','Enter atleast 3 characters').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body('password','Enter atleast 5 characters').isLength({min:5})
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => res.json(user))
    .catch(err => {
        console.log(err)
        res.json({error: 'Please enter uniquer value for email', message:err.message})
    });
    });

module.exports = router;