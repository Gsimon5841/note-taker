const express = require('express')
const { createNote, deleteNote } = require('../../lib/note.js');
const router = express.Router()
let { notes } = require('../../db/db.json')


router.get('/notes', (req, res) =>{
    res.json('notes')
});

router.post('/notes', (req, res) => {
   req.body.id = notes.length +1
   const note =createNote(req.body, notes);
   res.json(notes);

});

router.delete('/notes/:id', (res, req) => {
    const id = req.params.id;
    notes = deleteNote(id, notes)
    res.json(notes);
})

module.exports = router

