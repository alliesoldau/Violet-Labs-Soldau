import fetch from 'node-fetch';

var data = require('./data/office_quotes.json')

const url = 'http://localhost:3000/quotes'

const max = Object.keys(data).length  - 1
const min = 3



const randomId = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

let randomNumber = randomId(min, 300)

fetch(`${url}/${randomNumber}`)
    .then(result => result.json())
    //the posted contents to the website in json format is displayed as the output on the screen
    .then(quote=>console.log(quote.quote, `- ${quote.character}`))