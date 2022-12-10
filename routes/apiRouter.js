// requirements set out, so code from other files can be pulled in to run this code
const apis = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
//this will create the random id number for each note
const { v4: uuidv4 } = require('uuid');

// reads the notes from the db.json file
apis.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
// POST Route for a new note to be created
apis.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
        title,
        text,
        id: uuidv4(),
        };
// reads the current db.json file and appends it to add the new note to it
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
}
});

// deletes the selected note by using the note ID to verify the note to be deleted from the db.json file
apis.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const output = json.filter((note) => note.id !== noteId);

        writeToFile('./db/db.json', output);

        res.json(`Item ${noteId} has been deleted`);
    });

});

module.exports = apis;