// import fetch to allow for fetching
import fetch from 'node-fetch';

// need to grab the json data here to get the full length of the data to put in as the max for our random number picker
// we could also do this with a fetch to be positive we know how many quotes are in that table, but this sufficient for now
var data = require('./data/office_quotes.json')

// create a variable for the localhost to simplify the fetch code
const url = 'http://localhost:3000/quotes'

// get our max from the json data
const max = Object.keys(data).length  - 1
// min is 0 because index starts at 0
const min: number = 0

// function to generate a random index number
const randomId = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

// call function to generate a random number and assign it to variable
let randomNumber = randomId(min, max)

// perform the fetch to get the random quote, and console log it out to be viewed in the terminal
fetch(`${url}/${randomNumber}`)
    .then((result: { json: () => any; }) => result.json())
    .then((quote: { quote: any; character: any; }) => console.log(`Here's an office quote for you: '${quote.quote}' -- ${quote.character}`))