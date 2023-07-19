"use strict";
exports.__esModule = true;
// import fetch to allow for fetching
var node_fetch_1 = require("node-fetch");
// need to grab the json data here to get the full length of the data to put in as the max for our random number picker
// we could also do this with a fetch to be positive we know how many quotes are in that table, but this sufficient for now
var data = require('./data/office_quotes.json');
// create a variable for the localhost to simplify the fetch code
var url = 'http://localhost:3000/quotes';
// get our max from the json data
var max = Object.keys(data).length - 1;
// min is 0 because index starts at 0
var min = 0;
// function to generate a random index number
var randomId = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// call function to generate a random number and assign it to variable
var randomNumber = randomId(min, max);
// perform the fetch to get the random quote, and console log it out to be viewed in the terminal
(0, node_fetch_1["default"])("".concat(url, "/").concat(randomNumber))
    .then(function (result) { return result.json(); })
    .then(function (quote) { return console.log("Here's an office quote for you: '".concat(quote.quote, "' -- ").concat(quote.character)); });
