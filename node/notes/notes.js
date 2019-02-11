console.log('Starting notes.js');
const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () =>{
  try{
    var notesString = fs.readFileSync('notes-data.json')
    return _.uniqBy(JSON.parse(notesString), 'title');
    
  }catch(e){
    return [];
  }
}

var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
}

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
      title,
      body
  }

  var foundNote = notes.find((note) => note.title === title);
	console.log('TCL: addNote -> foundNote', foundNote)
  if(!foundNote){
    notes.push(note);
    saveNotes(notes);
    return note;
  }else{
    return `note already exists with title ${note.title}`;
  }
  
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
    var notes = fetchNotes();
    var foundNote = notes.find((note) => note.title === title);
    return foundNote;

};

var removeNote = (title) => {
  console.log('Removing note', title);
  var notes = fetchNotes();
  var notesToKeep = notes.filter((note) => note.title !== title)
  saveNotes(notesToKeep);
  return notes.length !== notesToKeep.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
