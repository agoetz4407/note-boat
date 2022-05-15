const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let notes = require('../../db/db.json');


router.get('/notes', (req, res) => { 
    res.json(notes);
})

router.post('/notes', (req, res) => {
    const notesArr = notes;
    if (notesArr.length) {
        var newId = notesArr[notesArr.length - 1].id + 1;
    } else {
        var newId = 1
    }
    const newNote = req.body;
    newNote.id = newId;
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
    const newNotesArr = notes.filter(note => {
        if (note.id != req.params.id) {
            return note
        }
    });
    notes = newNotesArr
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newNotesArr)
    )
    res.json({
        message:'Note deleted!',
    })
})

module.exports = router;