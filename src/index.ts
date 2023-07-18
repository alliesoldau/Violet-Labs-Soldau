import fetch from 'node-fetch';

// Pull in office quotes json so we can use it to post into our sql database
var data = require('./data/office_quotes.json')

// This is where I fetch from my server

fetch('http://localhost:3000/quotes')
.then(data => {
    return data.json()
})
.then(quotes => {
    // console.log(quote)
    return quotes
})


