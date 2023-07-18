var data = require('./data/office_quotes.json')

const max = Object.keys(data).length  - 1
const min = 3

const randomId = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomId(min, max))