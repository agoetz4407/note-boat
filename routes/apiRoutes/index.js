const router = require('express').Router();
const notes = require('../../db/db.json')

router.get('/notes', (req, res) => {
    res.json(notes)
})

// router.post('/notes', (req, res) => {
//     req.body.id = animals.length.toString()
    
//     if (!validateAnimal(req.body)) {
//         res.status(400).send('The animal sent is not properly formatted')
//     } else {
//         const animal = createNewAnimal(req.body, animals)
//         res.json(animal)
//     }
// })

//TODO: add delete route
// router.delete('/notes/:id', (req, res) => {

// })

module.exports = router;