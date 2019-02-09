const fs = require('fs');
const os = require('os');
var user = os.userInfo();
const notes = require('./notes.js')


notes.log();
// console.log('notes', notes.log());
var add = notes.add(1, 2);
console.log('TCL: add', add)


