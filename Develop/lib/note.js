const fs = require('fs');
const path = require('path');

function findById(id, notes) {
    const result = notes.filter((note) => note.id === id)[0];
    return result;
  };
  
  function createNote(body, notes) {
    const note = body;
    notes.push(note);
  
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notes }, null, 2)
    );
    return note;
  }
  
  function deleteNote(id, notes) {
    const deletedNote = notes.filter((note) => note.id !== id);
    fs.writeFile(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: deletedNote }, null, 2),
      (err) => {
        if (err) throw err;
      }
    );
    return deletedNote;
  }
  
  module.exports = { findById, createNote, deleteNote };
