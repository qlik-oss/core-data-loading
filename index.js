/* eslint no-console:0 */
const WebSocket = require('ws');
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/3.2.json');
const Table = require('easy-table')
const fs = require('fs');
const path = require('path');

async function openSessionApp() {
  const session = enigma.create({
    schema,
    url: 'ws://localhost:19076/app/',
    createSocket: url => new WebSocket(url),
  });
  const qix = await session.open();
  const app = await qix.createSessionApp();
  return { session, qix, app };
}

async function readScript(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', async (err, script) => {
      if (err) reject(err);
      resolve(script);
    });
  });
}

async function createConnection(app, name, connectionString, type) {
  await app.createConnection({
    qName: name,
    qConnectionString: connectionString,
    qType: type
  });
}

async function setScriptAndDoReload(app, script) {
  await app.setScript(script);
  await app.doReload();
}

async function getTables(app) {
  let tablesAndKeys = await app.getTablesAndKeys(
    { "qcx": 1000, "qcy": 1000 },
    { "qcx": 0, "qcy": 0 },
    30,
    true,
    false);
  return tablesAndKeys.qtr;
}

async function printTables(app) {
  let tables = await getTables(app)
  for (let ti = 0; ti < tables.length; ti++) {
    const table = tables[ti];
    const easyTable = new Table;
    console.log('==========');
    console.log(table.qName);
    console.log('----------');
    let data = await app.getTableData(0, 100, true, table.qName);
    for (let index = 0; index < data.length; index++) {
      const row = data[index];
      table.qFields.forEach((field, index) => {
        easyTable.cell(field.qName, row.qValue[index].qText)
      });
      easyTable.newRow();
    } 
    console.log(easyTable.toString());
  }
}

async function closeSession(session) {
  await session.close();
  console.log("Session closed.")
}

(async () => {
  let scriptPath = path.dirname(__filename) + '/scripts/' + process.argv[2]
  let script = await readScript(scriptPath);
  let { session, qix, app } = await openSessionApp();
  await createConnection(app, 'data', '/data/', 'folder');
  await setScriptAndDoReload(app, script);
  await printTables(app);
  await closeSession(session);
})();
