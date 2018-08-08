/* eslint no-console:0 */
const WebSocket = require('ws');
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/3.2.json');
const fs = require('fs');

async function createSessionAppAndDoReload(scriptPath){
  fs.readFile(scriptPath, 'utf8', async (err, script) => {

    if(err) throw err;
    try {
      const session = enigma.create({
        schema,
        url: 'ws://localhost:19076/app/',
        createSocket: url => new WebSocket(url),
      });
      const qix = await session.open();
      const app = await qix.createSessionApp();

      await app.createConnection({
        qName: 'data',
        qConnectionString: '/data/',
        qType: 'folder'
      });

      await app.setScript(script);
      await app.doReload();


      let res = await app.getTablesAndKeys({
          "qcx": 1000,
          "qcy": 1000
        },
        {
          "qcx": 0,
          "qcy": 0
        },
        30,
        true,
        false);

      tables = res.qtr;

      tables.forEach((table) => {
        console.log('-------------');
        console.log(table.qName);
        console.log('-------------');

        table.qFields.forEach((field) => {
          console.log(field.qName);
        });
      });

      console.log('-------------\n');

      res = await app.getTableData(0,100, true, 'Airports');

      const tableDataAsString = res
        .map(row =>
          row.qValue
            .map(value => value.qText)
            .reduce((left, right) => `${left}\t${right}`),
        )
        .reduce((row1, row2) => `${row1}\n${row2}`);

      console.log(tableDataAsString);

      await session.close();
      console.log('Session closed.');
    } catch (err) {
      console.log('Woops! An error occurred.', err);
      process.exit(1);
    }
  });
}

module.exports.createSessionAppAndDoReload = createSessionAppAndDoReload;