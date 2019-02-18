const request = require('request');

request({
    url: 'test',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body))
})

//encoding