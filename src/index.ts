import fetch from 'node-fetch';

// This is where I fetch from my server

fetch('http://localhost:3000/quotes')
.then(data => {
    return data.json()
})
.then(quote => {
    console.log(quote)
})

// import * as quotes from '../src/data/office_quotes.json'

// console.log(quotes)
