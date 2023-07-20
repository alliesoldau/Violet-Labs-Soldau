# Random Quote Generator

_Allie's Notes are in Italics_

# _Instructions for How to Run the Code_

1. _Starting from the root directory, run installation to install dependancies_
	* _$  npm  install_

2. _Ensure you have Sqlite installed on your local enviornment. Use Sqlite version 3.39.5. I can't gauruntee it works with the latest version._

	* _[Link for How to Check Your Sqlite Version](https://database.guide/check-sqlite-version/)_
	* _[Link to Sqlite Download Instructions](https://www.sqlitetutorial.net/download-install-sqlite/)_

3. _Run the build to compile your TypeScript code into JavaScript and output the compiled files into the dist directory_
	* _$ npm run build_

4. _Generate the migration that will build our sqlite3 data table_
	* _$ npm run migration:generate -- db/migrations/NewMigration_

5. _Run the migration to build our quote table in the sqlite3 database. The database file,_ `db.sqlite`,  _will be located in the root directory if you want to take a peek_
	* _$ npm run migration:run_
	
6. _Start the program_
	* _$ npm run start_

7.  _Move into the src directory NOTE: this step is crucial. If you skip it the next commands won't run_
	* _$ cd src_

8.  _Compile the file_`populate-data.ts`
	* _$ tsc populate-data.ts_
	
9. _Run_`populate-data.js`. _This file takes the data from the_ `office_quotes.json` _file and programmatically inputs it into our quote table in the sqlite3 database_
	* _$ node populate-data.js_

10. _Compile the file_ `generate-quote.ts`
	* _$ tsc generate-quote.ts_

11. _Run_ `generate-quote.js`. _This file will fetch you a random quote from the backend and display it in the CLI_ 
	* _$ node generate-quote.js_

**_To show my enthusiasm for the role I included some additional features. These can be explored through the steps below:_**

12. _After your first quote is fetched, the CLI will generate questions for you to answer Y/n to_
	* _It will ask you if you want to fetch another quote and if you want to delete your current quote from the database. If you check the index of the_ ` db.sqlite` _database you can see that a quote has been deleted (don't forget to refresh the table by clicking the refresh button in the upper left hand corner of the table)_

13. _In addition to being able to fetch and delete quotes from the CLI, you can open up a frontend to fetch and delete quotes_
	* _Start by opening up a Google Chrome browser window, then right click on the file_ `frontend/html` _in the root directory and select_ `Open with Live Server`. _Now refer back to your Google Chrome browser to see the frontend_
	* _Click the_ **Fetch Me a Quote** _button to get a random quote. Once you have the quote displayed on the screen, you can chose to delete it by clicking on the_ **I don't like this quote.  Please delete it from the database** _button; or you can fetch another quote_

## _Referenced Resources_

_Before this project I did not have experience in TypeScript, TypeORM, NestJS, or writing unit tests. I can study hard and learn quickly, hence why I was able to accomplish this project. Below are some of the resources I used along the way:_
* [PrommaningKnowledge's NestJS Tutorial for Beginners](https://www.youtube.com/watch?v=oU5Di3be-Sk&ab_channel=ProgrammingKnowledge)
* [TypeORM Migrations](https://www.youtube.com/watch?v=5G81_VIjaO8&ab_channel=MariusEspejo)
* [TypeScript Tutorial](https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh)
* [Loading JSON Data into TypeScript](https://github.com/Emethium/nest-api-example)
* [nest-api-example](https://github.com/Emethium/nest-api-example)
* [JSON and SQLite](https://stackoverflow.com/questions/46407770/how-to-convert-a-json-file-to-an-sqlite-database)
* [NestJS Testing Tutorial](https://www.youtube.com/watch?v=dXOfOgFFKuY&ab_channel=MariusEspejo)



## Introduction

Your task is to build a backend application that acts as a RESTful API Server for displaying random quotes.

The application should be written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

The NestJS starter code and [quotes file](src/data/office_quotes.json) can be found in this repository.

The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## What We Expect From You

1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given quotes [dataset](src/data/office_quotes.json). This application does not need to be deployed or hosted anywhere- just something you can run locally.

2. Add tests to your newly created application.

3. Add any additional feature of your choice.

4. Update the README with any information you want to include that will help us understand and run your project.

5. Upload your completed code to your own github account and share it with us. If the repo is private please share it with `violet-hiring`.

## Need Help?

Feel free to consult any NestJS or TypeScript documentation as necessary. For any other further questions or issues that arise, reach out to your hiring manager.

## Time Estimate

We expect this to take you 2-4 hours to complete. This isn’t a hard limit- it is just for you to plan your time!

## Installation

```bash

$  npm  install

```

## Running the app

```bash

# development

$  npm  run  start

# watch mode

$  npm  run  start:dev

# production mode

$  npm  run  start:prod

```

## Test

```bash

# unit tests

$  npm  run  test

# e2e tests

$  npm  run  test:e2e

# test coverage

$  npm  run  test:cov

```