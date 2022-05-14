const router = require('express').Router();
const fs = require('fs');
let notes;

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function (err, data) {
        notes = JSON.parse(data);
    });
    res.json(notes.savedNotes)
})

module.exports = router;