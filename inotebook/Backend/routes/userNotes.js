const express = require('express');
const router = express.Router();
const fetchUser = require('../Middleware/fetchUser');
const Notes = require('../models/Notes');
const { body , validationResult } = require('express-validator');

// Route 1: Get all notes using: GET ".api/notes" and Login required

router.get('/getAllNotes', fetchUser , async (req,res) => {
    
    try{

        const notes = await Notes.find({user: req.id});
        res.json(notes);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

});

// Route 2: Add new note using: POST ".api/notes/addNote" and Login required

router.post('/addNote', fetchUser , [

    body('title','Enter vaild title').isLength({min:3}),
    body('description','Enter atleast 5 characters').isLength({min:5}) 
    
    ], 
    async (req,res) => {

        try{

            const { title , description , tag } = req.body;
                
            //If there are errors then return bad request and the errors.
            const errors = validationResult(req);
            if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
            }

            const note = new Notes({title,description,tag, user: req.id});
            const savedNote = await note.save();
            res.json(savedNote);
        }
        catch(error){
            console.error(error.message);
            res.status(500).send("Internal server error occured");
        }

        
});

// Route 3: Update existing note using: PUT ".api/notes/updateNote" and Login required

router.put('/updateNote/:id', fetchUser , async (req,res) => {

    try{

        const { title , description , tag } = req.body;
        const newNote = {};     //Empty note object

        if(title) {newNote.title = title};
        if(description) {newNote.description = description};
        if(tag) {newNote.tag = tag};
        

        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        //If note is not there in DB
        if(!note) 
        return res.status(404).send("Not Found!");
        
        if(note.user.toString() !== req.id) 
        return res.status(401).send("Not Allowed!");

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});

        res.json(note);
    
    }  
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

});


// Route 4: Deleting existing note using: DEL ".api/notes/deleteNote" and Login required

router.delete('/deleteNote/:id', fetchUser , async (req,res) => {

    try{   

        //Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        
        //If note is not there in DB
        if(!note) 
        return res.status(404).send("Not Found!");
        
        // Allow deletion only when user owns this note
        if(note.user.toString() !== req.id) 
        return res.status(401).send("Not Allowed!");

        note = await Notes.findByIdAndDelete(req.params.id);    //Deleting note

        res.json({"Success": "Note has been deleted", note: note});

    }  
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
});

module.exports = router;