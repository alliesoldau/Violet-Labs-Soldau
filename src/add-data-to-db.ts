import fetch from 'node-fetch';

// Pull in office quotes json so we can use it to post into our sql database
var data = require('./data/office_quotes.json')

// This is where I fetch from my server

const url = 'http://localhost:3000/quotes'

for (const quote of data) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(quote),
        headers: {'Content-Type': 'application/json'},
        })
        .then(result => result.json())
        //the posted contents to the website in json format is displayed as the output on the screen
        .catch(error => console.error(error))
    }


