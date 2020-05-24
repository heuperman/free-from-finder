# Free From Finder

Find allergen free food in your area.

## Project goals

For people with food allergies, finding food on the go that is safe to eat can often be difficult.
This app aims to make it easier to find allergen free food by providing information on it's availability
at local shops, cafes and restaurants.

To collect this information users can record the availability of allergen free food at shops and restaurants.
This app will then provide access to these records in a user-friendly way. The long-term goal is to create a
Progressive Web App that anyone can use on their phone to easily find safe food nearby.

Initially this project will focus on providing information on the availability of gluten-free food only. Once
the basic infrastructure and records are in place the project will expand to include information about all
[the 14 main allergens](https://www.food.gov.uk/sites/default/files/media/document/top-allergy-types.pdf).

## Setup

This project requires [node and npm](https://nodejs.org/en/) to be installed on your computer.

- Clone the project by typing `git clone https://github.com/heuperman/free-from-finder.git` in your terminal.
- Install the required dependencies: `npm install`.
- Open the project in your favourite editor. If you don't have an editor installed
  try [VSCode](https://code.visualstudio.com/), it's free and very capable.

## Running tests

This app comes with a full suite of unit tests using Jest.

To start the unit tests: `npm run test`. This will start the test suite in watch mode, meaning it will automatically
rerun and the results will be updated if you make any changes. If you just want to run the test once you can use
`npm run test:once` instead.

## Linting & formatting

This app uses ESLint and Prettier to help spot errors and to enforce coding style rules.

To run the linter: `npm run lint`.

Ton run the formatter: `npm run format`.

## Running the app

To run the app on a local server for development purposes: `npm run start`.

## Contributing

Free From Finder is currently in the very early development stage and not yet open to contributions.
