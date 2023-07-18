delete db.sqlite and migrations folder
npm run build
npm run start:dev
npm run migration:generate -- db/migrations/NewMigration     
npm run migration:run
sqlite3 db.sqlite
INSERT INTO quotes SELECT json_extract(value, '$.quote_id'), json_extract(value, '$.quote'), json_extract(value, '$.character') FROM json_each(readfile('./src/data/office_quotes.json'));

sqlite3 db.sqlite
INSERT INTO quote SELECT json_extract(value, '$.quote_id'), json_extract(value, '$.quote'), json_extract(value, '$.cha FROM json_each(readfile('office_quotes.json'));

# Random Quote Generator

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

### Resources I referenced:
- (PrommaningKnowledge's NestJS Tutorial for Beginners)[https://www.youtube.com/watch?v=oU5Di3be-Sk&ab_channel=ProgrammingKnowledge]
- (TypeORM Migrations)[https://www.youtube.com/watch?v=5G81_VIjaO8&ab_channel=MariusEspejo]
** 23ish min for migrations stuff
- (TypeScript Tutorial for Beginners)[https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh]
- (Loading JSON Data into TypeScript)[https://stackoverflow.com/questions/49481934/fetching-local-json]
- (nest-api-example)[https://github.com/Emethium/nest-api-example]

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
