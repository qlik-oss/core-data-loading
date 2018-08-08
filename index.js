const Util = require('./src/util.js');
const path = require('path');

function loadScriptFile(scriptFilePath){
  Util.createSessionAppAndDoReload(scriptFilePath);
}

loadScriptFile(path.dirname(__filename) + '/scripts/' + process.argv[2]);



