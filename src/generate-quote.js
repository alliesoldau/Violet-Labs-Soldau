var data = require('./data/office_quotes.json');
var max = Object.keys(data).length - 1;
var min = 3;
var randomId = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomId(min, max));
