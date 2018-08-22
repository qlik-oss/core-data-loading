# Qlik Core Load Script Examples

This repository contains examples load scripts used to load data in different ways into Qlik Associative Engine.

The examples provide a good starting point to explore for anyone with the need to write load scripts specific to their
use and applications built with Qlik Core.

TODO: Mention and provide link to some of the examples covered by tutorials on the Qlik Core website.

## Running the examples

Docker and Node.js must be installed on the machine running the examples. The Qlik Core EULA needs to be accepted by
setting the `ACCEPT_EULA` environment variable to `yes`.

All examples run towards a single instance of Qlik Associative Engine. Change the value of `ACCEPT_EULA` accordingly and
start it with:

```sh
ACCEPT_EULA=<yes/no> docker-compose up -d
```

This mounts all necessary sample data into the engine container.

Next, install dependencies:

```sh
npm install
```

You can now run each script example by providing it as an argument to `npm start`. For example, to run the load script
named `csv-file', run:

```sh
npm start csv-file
```

This should print the table content loaded into Qlik Associative Engine to the console.

## List of examples

The table below lists all load script examples and what main topics of writing load script they cover. All load script
examples are located in the [scripts/](./scripts/) folder.

Load script | Key topics
----------- | ----------
[csv-file](./scripts/csv-file) | <ul><li>Loading data from a CSV file.</ul>
[xlsx-file](./scripts/xlsx-file) | <ul><li>Loading data from an Excel file.</ul>
[inline-table](./scripts/inline-table) | <ul><li>Loading an inline table.</ul>
[subset-of-fields](./scripts/subset-of-fields) | <ul><li>Loading a subset of fields.</ul>
[rename-fields](./scripts/rename-fields) | <ul><li>Renaming fields.</ul>
[field-functions](./scripts/field-functions) | <ul><li>Change fields values with string functions.</ul>
[formating-functions](./scripts/formating-functions) | <ul><li>Format input and display formats of date fields.</ul>
[split-field](./scripts/split-field) | <ul><li>Splitting a field into several fields.<li>Using the `subfield` function.</ul>
[compound-field](./scripts/compound-field) | <ul><li>Creating a compound field from other fields.<li>String concatenation.</ul>
[resident-load](./scripts/resident-load) | <ul><li>Loading data from previously loaded table.</ul>
[preceding-calc-field](./scripts/preceding-calc-field) | <ul><li>Using preceding LOAD to calculate a new field in single pass.</ul>
[preceding-reuse-calc](./scripts/preceding-reuse-calc) | <ul><li>Using preceding LOAD to avoid duplicate calculations.<li>Usage of the `AUTOGENERATE` statement and the `recno` function.</ul>
[concat-tables-auto](./scripts/concat-tables) | <ul><li>Automatic concatenation into one table.</ul>
[concat-tables-forced](./scripts/concat-tables) | <ul><li>Forced concatenation into one table.</ul>
[crosstable](./scripts/crosstable) | <ul><li>Turn a wide table into a tall table.</ul>
