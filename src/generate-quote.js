"use strict";
exports.__esModule = true;
// import fetch to allow for fetching
var node_fetch_1 = require("node-fetch");
// import readline to allow interaction with the user
var readline = require("readline");
// save the url as a variable
var url = 'http://localhost:3000/quotes';
// min is 0 because index starts at 0
var min = 0;
var max = 0;
// fetch the length of the db to determine what the max (aka length of db) is
function grabMeAQuote() {
    (0, node_fetch_1["default"])("".concat(url))
        .then(function (response) { return response.json(); })
        .then(function (json) {
        max = json.length - 1;
        // function to generate a random index number
        var randomId = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        // call function to generate a random number and assign it to variable
        var randomNumber = randomId(min, max);
        // perform the fetch to get the random quote, and console log it out to be viewed in the terminal
        (0, node_fetch_1["default"])("".concat(url, "/").concat(randomNumber))
            .then(function (result) { return result.json(); })
            .then(function (quote) {
            var quoteObject = {
                quote_id: quote.quote_id,
                quote: quote.quote,
                character: quote.character
            };
            console.log("Here's an office quote for you: \n");
            console.log("".concat(quoteObject.quote, "' -- ").concat(quoteObject.character));
            console.log('\n');
            deleteObject(quoteObject);
        });
    });
}
grabMeAQuote();
function anotherQuote() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // prompt the user to save the object
    rl.question('\nYou want another quote? (Y/n): ', function (answer) {
        // close the readline interface
        rl.close();
        // check the user's response
        if (answer.trim().toLowerCase() === 'y') {
            grabMeAQuote();
        }
        else {
            console.log('Ok no more quotes for you.');
        }
    });
}
function deleteObject(obj) {
    // create a readline interface
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // prompt the user to save the object
    rl.question('Do you want to delete this quote from the database? (Y/n): ', function (answer) {
        // close the readline interface
        rl.close();
        // check the user's response
        if (answer.trim().toLowerCase() === 'y') {
            // save the object
            (0, node_fetch_1["default"])("".concat(url, "/").concat(obj.quote_id), {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                if (response.ok) {
                    console.log("Alighty it's been deleted.");
                    anotherQuote();
                }
                else {
                    console.error('Failed to delete resource:', response.status, response.statusText);
                }
            })["catch"](function (error) {
                console.error('Error deleting resource:', error);
            });
        }
        else {
            console.log('Mkay');
            anotherQuote();
        }
    });
}
