"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var sqlite3 = require("sqlite3");
// this reads the data from the json and returns an array of the quotes
function readJsonFile(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.readFile(filePath, 'utf8', function (err, data) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            try {
                                var parsedData = JSON.parse(data);
                                resolve(parsedData);
                            }
                            catch (parseError) {
                                reject(parseError);
                            }
                        }
                    });
                })];
        });
    });
}
// this inserts the data into my pre-existing database. 
// for dev purposes, I have it INSERT or REPLACE any duplicates so that I more easily run trials on it
function insertDataIntoDatabase(data, db) {
    return __awaiter(this, void 0, void 0, function () {
        var insertQuery, _i, data_1, item;
        return __generator(this, function (_a) {
            insertQuery = 'INSERT or REPLACE INTO quote (quote_id, quote, character) VALUES (?, ?, ?)';
            for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                item = data_1[_i];
                db.run(insertQuery, [item.quote_id, item.quote, item.character], function (err) {
                    if (err) {
                        console.error('Error inserting data:', err);
                    }
                });
            }
            return [2 /*return*/];
        });
    });
}
// this reads the quotes from the JSON and inserts them into the pre-existing database by calling insertDataIntoDatabase
function readQuotes() {
    return __awaiter(this, void 0, void 0, function () {
        var jsonData, db, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readJsonFile('./data/office_quotes.json')];
                case 1:
                    jsonData = _a.sent();
                    db = new sqlite3.Database('../db.sqlite');
                    // call upon the function to insert data into database
                    insertDataIntoDatabase(jsonData, db);
                    // close the database
                    db.close(function (err) {
                        if (err) {
                            console.error('Uh oh, there was an error closing the database:', err);
                        }
                        else {
                            console.log('All your office quotes have been inserted into the database. Wahoo!');
                        }
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Yikes, there's an error:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
readQuotes();
