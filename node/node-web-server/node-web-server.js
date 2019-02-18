const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) =>{
    console.log(' made it here!');

    res.send({hello: "world"})
})

app.get('/help', (req, res) =>{
    console.log('here')
})

app.listen(3000, () =>{
    console.log('listening on 3000');
});