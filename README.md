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

Next, install dependencies:

```sh
npm install
```




npm start load-csv-file
```



## List of examples

- [load-csv-file](./scripts/load-csv-file)
- [load-xlsx-file](./scripts/load-xlsx-file)
- [load-subset-of-fields](./scripts/load-subset-of-fields)
- [rename-fields](./scripts/rename-fields)
