/* eslint no-console:0 */
const WebSocket = require('ws');
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/3.2.json');
const Table = require('easy-table');
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
  await qix.configureReload(true, true, false);
  console.log('Session opened.\n');
  return { session, qix, app };
}

async function readScript(scriptPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(scriptPath, 'utf8', async (err, script) => {
      if (err) reject(err);
      resolve(script);
    });
  });
}

async function createConnection(app, name, connectionString, type) {
  await app.createConnection({
    qName: name,
    qConnectionString: connectionString,
    qType: type,
  });
}

async function setScriptAndDoReload(qix, app, script) {
  await app.setScript(script);
  const reloadOk = await app.doReload();
  const progress = await qix.getProgress(0);
  if (progress.qErrorData.length !== 0) {
    const result = await app.checkScriptSyntax();
    if (result.length !== 0) {
      console.log(result[0]);
    } 
    console.log(progress.qErrorData[0]);
  }
}

async function getTables(app) {
  const tablesAndKeys = await app.getTablesAndKeys(
    { qcx: 1000, qcy: 1000 },
    { qcx: 0, qcy: 0 },
    30,
    true,
    false);
  return tablesAndKeys.qtr;
}

async function printTable(app, table) {
  const easyTable = new Table();
  console.log('==========');
  console.log(table.qName);
  console.log('----------');
  const data = await app.getTableData(0, 100, true, table.qName);
  for (let index = 0; index < data.length; index += 1) {
    const row = data[index];
    table.qFields.forEach((field, idx) => {
      easyTable.cell(field.qName, row.qValue[idx].qText);
    });
    easyTable.newRow();
  }
  console.log(easyTable.toString());
}

async function printTables(app) {
  const tables = await getTables(app);

  const results = [];

  tables.forEach((table) => {
    results.push(printTable(app, table));
  });

  await Promise.all(results);
}

async function closeSession(session) {
  await session.close();
  console.log('Session closed.');
}

(async () => {
  const scriptPath = `${path.dirname(__filename)}/scripts/${process.argv[2]}`;
  const script = await readScript(scriptPath);
  const { session, qix, app } = await openSessionApp();
  await createConnection(app, 'data', '/data/', 'folder');
  await setScriptAndDoReload(qix, app, script);
  await printTables(app);
  await closeSession(session);
})();
