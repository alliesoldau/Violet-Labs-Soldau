import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';

interface Quote {
    quote_id: number;
    quote: string;
    character: string;
  }

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
  
  async function main() {
    try {
      const jsonData = await readJsonFile('./data/office_quotes.json');
  
      const db = new sqlite3.Database('../db.sqlite');
  
      insertDataIntoDatabase(jsonData, db);
  
      db.close((err) => {
        if (err) {
          console.error('Error closing the database:', err);
        } else {
          console.log('Data insertion completed.');
        }
      });
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
  
  main();