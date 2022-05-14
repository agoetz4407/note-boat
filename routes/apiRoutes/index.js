const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json')

router.get('/notes', (req, res) => { 
    res.json(notes);
})

router.post('/notes', (req, res) => {
    const notesArr = notes;
    const newId = notesArr[notesArr.length - 1].id + 1;
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

module.exports = router;