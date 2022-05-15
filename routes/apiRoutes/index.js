const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid'); 
// const notes = require('../../db/db.json')
let notes;

router.get('/notes', (req, res) => { 
    fs.readFile('../../db/db.json', 'utf-8', (err, data) => {
        notes = data;
    })
    res.json(notes)
})

router.post('/notes', (req, res) => {
    const notesArr = notes;
    const newNote = req.body;
    newNote.id = uniqid();
    notesArr.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArr)
    )
    res.json({
        message:'Note saved!',
        savedNote: newNote
    })
})

router.delete('/notes/:id', (req, res) => {
    const notesArr = notes;
    const noteId = req.params.id;
    const newNotesArr = notesArr.filter(note => {
        if (note.id != noteId) {
            return note
        }
    });

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newNotesArr)
    )
    res.json({
        message:'Note deleted!',
    })
})

module.exports = router;