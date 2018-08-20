# Qlik Core Load Script Examples

This repository contains examples load scripts used to load data in different ways into Qlik Associative Engine.

The examples provide a good starting point to explore for anyone with the need to write load scripts specific to their
use and applications built with Qlik Core.

TODO: Mention and provide link to some of the examples covered by tutorials on the Qlik Core website.

## Running the examples

Docker and Node.js must be installed on the machine running the examples. The Qlik Core EULA needs to be accepted by
setting the `ACCEPT_EULA` environment variable to `yes`.

All examples run towards a single instanve of Qlik Associative Engine. You start it with:

```sh
ACCEPT_EULA=<yes> docker-compose up -d
```

This mounts all necessary sample data into the engine container.

Next, install dependencies:

```sh
npm install
```

You can now run each script example by providing it as an argument to `npm start`. For example, to run the load script
named `load-csv-file', run:

```sh
npm start load-csv-file
```

This should print the table content loaded into Qlik Associative Engine to the console.

## List of examples

The table below lists all load script examples and what main topics of writing load script they cover. All load script
examples are located in the [scripts/](./scripts/) folder.

Load script | Key topics
----------- | ----------
[load-csv-file](./scripts/load-csv-file) | Loading data from a CSV file.
[load-xlsx-file](./scripts/load-xlsx-file) | Loading data from an Excel file.
[load-subset-of-fields](./scripts/load-subset-of-fields) | Loading a subset of fields.
[rename-fields](./scripts/rename-fields) | Renaming fields.
[load-field-functions](./scripts/load-field-functions)
[concat-tables-auto](./scripts/concat-tables) | Automatic concatenation into one table.
[concat-tables-forced](./scripts/concat-tables) | Forced concatenation into one table.
