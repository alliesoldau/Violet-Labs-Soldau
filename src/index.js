"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
// import * as quotes from './data/office_quotes.json'
var data = require('./data/office_quotes.json');
console.log(data);
// This is where I fetch from my server
(0, node_fetch_1["default"])('http://localhost:3000/quotes')
    .then(function (data) {
    return data.json();
})
    .then(function (quotes) {
    // console.log(quote)
    return quotes;
});
