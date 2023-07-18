"use strict";
// import * as quotes from '../src/data/office_quotes.json'
exports.__esModule = true;
// console.log(quotes)
var node_fetch_1 = require("node-fetch");
(0, node_fetch_1["default"])('http://localhost:3000/quotes')
    .then(function (data) {
    return data.json();
})
    .then(function (quote) {
    console.log(quote);
});
