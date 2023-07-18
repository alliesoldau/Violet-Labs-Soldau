"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
// Pull in office quotes json so we can use it to post into our sql database
// var data = require('./data/office_quotes.json')
// This is where I fetch from my server
// const url = 'http://localhost:3000/quotes'
// for (const quote of data) {
//     // if (quote.quote.length == 0 || quote.character.length == 0) {
//     //     console.log(quote)
//     // }
//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(quote),
//         headers: {'Content-Type': 'application/json'},
//         })
//         .then(result => result.json())
//         //the posted contents to the website in json format is displayed as the output on the screen
//         // .then(data => console.log(data))
//         .catch(error => console.error(error))
//     }
(0, node_fetch_1["default"])('./data/office_quotes.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); })["catch"](function (error) { return console.log(error); });
