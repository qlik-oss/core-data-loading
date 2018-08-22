# Qlik Core Load Script Examples

This repository contains examples load scripts used to load data in different ways into Qlik Associative Engine.

The examples provide a good starting point to explore for anyone with the need to write load scripts specific to their
use and applications built with Qlik Core.

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
named `csv-file.qvs', run:

```sh
npm start scripts/csv-file.qvs
```

This should print the table content loaded into Qlik Associative Engine to the console.

## List of examples

The table below lists all load script examples and what main topics of writing load script they cover. All load script
examples are located in the [scripts/](./scripts/) folder.

Load script | Key topics
----------- | ----------
[csv-file.qvs](./scripts/csv-file.qvs) | <ul><li>Loading data from a CSV file.</ul>
[xlsx-file.qvs](./scripts/xlsx-file.qvs) | <ul><li>Loading data from an Excel file.</ul>
[inline-table.qvs](./scripts/inline-table.qvs) | <ul><li>Loading an inline table.</ul>
[subset-of-fields.qvs](./scripts/subset-of-fields.qvs) | <ul><li>Loading a subset of fields.</ul>
[rename-fields.qvs](./scripts/rename-fields.qvs) | <ul><li>Renaming fields.</ul>
[field-functions.qvs](./scripts/field-functions.qvs) | <ul><li>Change fields values with string functions.</ul>
[formating-functions.qvs](./scripts/formating-functions.qvs) | <ul><li>Format input and display formats of date fields.</ul>
[split-field.qvs](./scripts/split-field.qvs) | <ul><li>Splitting a field into several fields.<li>Using the `subfield` function.</ul>
[compound-field.qvs](./scripts/compound-field.qvs) | <ul><li>Creating a compound field from other fields.<li>String concatenation.</ul>
[resident-load.qvs](./scripts/resident-load.qvs) | <ul><li>Loading data from previously loaded table.</ul>
[preceding-calc-field.qvs](./scripts/preceding-calc-field.qvs) | <ul><li>Using preceding LOAD to calculate a new field in single pass.</ul>
[preceding-reuse-calc.qvs](./scripts/preceding-reuse-calc.qvs) | <ul><li>Using preceding LOAD to avoid duplicate calculations.<li>Usage of the `AUTOGENERATE` statement and the `RecNo` function.</ul>
[concat-tables-auto.qvs](./scripts/concat-tables.qvs) | <ul><li>Automatic concatenation into one table.</ul>
[concat-tables-forced.qvs](./scripts/concat-tables.qvs) | <ul><li>Forced concatenation into one table.</ul>
[crosstable.qvs](./scripts/crosstable.qvs) | <ul><li>Turn a wide table into a tall table.</ul>
