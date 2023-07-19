
import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';

// interface for a quote object --> this matches up with the columns in my sqlite quote table
interface Quote {
    quote_id: number;
    quote: string;
    character: string;
  }

  // this reads the data from the json and returns an array of the quotes
  async function readJsonFile(filePath: string): Promise<Quote[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const parsedData = JSON.parse(data) as Quote[];
            resolve(parsedData);
          } catch (parseError) {
            reject(parseError);
          }
        }
      });
    });
  }

  // this inserts the data into my pre-existing database. 
  // for dev purposes, I have it INSERT or REPLACE any duplicates so that I more easily run trials on it
  async function insertDataIntoDatabase(data: Quote[], db: sqlite3.Database): Promise<void> {
    const insertQuery = 'INSERT or REPLACE INTO quote (quote_id, quote, character) VALUES (?, ?, ?)';
  
    for (const item of data) {
      db.run(insertQuery, [item.quote_id, item.quote, item.character], (err) => {
        if (err) {
          console.error('Error inserting data:', err);
        }
      });
    }
  }
  
  // this reads the quotes from the JSON and inserts them into the pre-existing database by calling insertDataIntoDatabase
  async function readQuotes() {
    try {
        // read the quotes from the provided json file
      const jsonData = await readJsonFile('./data/office_quotes.json');
  
        // create a connection with my pre-existing database
      const db = new sqlite3.Database('../db.sqlite');
  
        // call upon the function to insert data into database
      insertDataIntoDatabase(jsonData, db);
  
      // close the database
      db.close((err) => {
        if (err) {
          console.error('Uh oh, there was an error closing the database:', err);
        } else {
          console.log('All your office quotes have been inserted into the database. Wahoo!');
        }
      });
      // handle any errors
    } catch (error) {
      console.error(`Yikes, there's an error:`, error);
    }
  }
  
  readQuotes();


