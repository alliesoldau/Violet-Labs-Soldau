// import fetch to allow for fetching
import fetch from 'node-fetch';
// import readline to allow interaction with the user
import * as readline from 'readline';

// save the url as a variable
const url = 'http://localhost:3000/quotes'
// min is 0 because index starts at 0
const min: number = 0
let max: number = 0

// fetch the length of the db to determine what the max (aka length of db) is
fetch(`${url}`)
    .then((response) => response.json())
    .then((json) => {
        max = json.length - 1
        // function to generate a random index number
        const randomId = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min

        // call function to generate a random number and assign it to variable
        let randomNumber = randomId(min, max)
        // perform the fetch to get the random quote, and console log it out to be viewed in the terminal
        fetch(`${url}/${randomNumber}`)
        .then((result: { json: () => any; }) => result.json())
        .then((quote: { quote_id: any; quote: any; character: any; }) => {
            const quoteObject = {
                quote_id: quote.quote_id,
                quote: quote.quote,
                character: quote.character,
            };
            console.log(`Here's an office quote for you:`)
            console.log(`${quoteObject.quote}' -- ${quoteObject.character}`)
            console.log('\n')
            deleteObject(quoteObject);
        })
    })

function deleteObject(obj: any): void {
    // create a readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    // prompt the user to save the object
    rl.question('Do you want to delete this quote from the database? (Y/n): ', (answer) => {
        // close the readline interface
        rl.close();
    
        // check the user's response
        if (answer.trim().toLowerCase() === 'y') {
        // save the object
        fetch(`${url}/${obj.quote_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Content-Type': 'application/json',
            },
            })
            .then((response) => {
                if (response.ok) {
                    console.log(`Alighty it's been deleted.`);
                } else {
                    console.error('Failed to delete resource:', response.status, response.statusText);
                }
            })
            .catch((error) => {
                console.error('Error deleting resource:', error);
            });  
        } else {
            console.log('Mkay');
        }
    });
    }
