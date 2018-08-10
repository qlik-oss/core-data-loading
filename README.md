# core-data-loading
This repository contains the load script examples running on Qlik Core

- [load-csv-file](./scripts/load-csv-file)
- [load-xlsx-file](./scripts/load-xlsx-file)
- [load-subset-of-fields](./scripts/load-subset-of-fields)
- [rename-fields](./scripts/rename-fields)

The requirements are that Docker and Node.js are installed.

## Run the examples

Before running the examples the Qlik Core EULA needs to be accepted by setting the ACCEPT_EULA environment variable to yes.

```sh
ACCEPT_EULA=yes docker-compose up -d

npm install

npm start load-csv-file
```
