"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var data = require('./data/office_quotes.json');
var url = 'http://localhost:3000/quotes';
var max = Object.keys(data).length - 1;
console.log(max);
var min = 0;
var randomId = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var randomNumber = randomId(min, max);
(0, node_fetch_1["default"])("".concat(url, "/").concat(randomNumber))
    .then(function (result) { return result.json(); })
    //the posted contents to the website in json format is displayed as the output on the screen
    .then(function (quote) { return console.log(quote.quote, "- ".concat(quote.character)); });
