const express = require('express');
const router = express.Router();
const fetchUser = require('../Middleware/fetchUser');
const Notes = require('../models/Notes')

// Route 1: Get all notes using: GET ".api/notes/fetchNotes" and Login required

router.get('/', fetchUser , async (req,res) => {
    const notes = await Notes.find({user: req.id});
    res.json(notes);
});

module.exports = router;