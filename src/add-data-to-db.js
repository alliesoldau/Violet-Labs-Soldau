"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
// Pull in office quotes json so we can use it to post into our sql database
var data = require('./data/office_quotes.json');
// This is where I fetch from my server
var url = 'http://localhost:3000/quotes';
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var quote = data_1[_i];
    (0, node_fetch_1["default"])(url, {
        method: 'POST',
        body: JSON.stringify(quote),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (result) { return result.json(); })
        //the posted contents to the website in json format is displayed as the output on the screen
        .then(function (data) { return console.log(data); })["catch"](function (error) { return console.error(error); });
}
