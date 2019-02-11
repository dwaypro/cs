// var obj = {
//     name: 'Andrew',
// };
// var stringObj = JSON.stringify(obj);
// console.log('TCL: stringObj', stringObj)


// var personString = '{"name": "Andrew", "age": 25}';

// var person = JSON.parse(personString);
// console.log('TCL: person', person)
// console.log(typeof person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
}

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log('note', note);