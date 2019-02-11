const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  console.log('note submitted ==>', note);
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`${allNotes.length}, note(s).`);
  allNotes.forEach((note) => {
    console.log(`title: ${note.title} + body: ${note.body}`);
    
  })
  

} else if (command === 'read') {
  var foundNote = notes.getNote(argv.title);
  var message = foundNote ? `note ${foundNote.title} was found` : `note not found`
  console.log(message);
  
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Note ${argv.title} was removed` : 'note not found';
	console.log('TCL: message', message)
  
} else {
  console.log('Command not recognized');
}

//nodemon --inspect-brk filename
