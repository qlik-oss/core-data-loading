/* eslint no-await-in-loop:0 */
const fs = require('fs');
const setupAndReload = require('../index.js');

const scriptFolder = './scripts/';

(async () => {
  fs.readdir(scriptFolder, async (err, files) => {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const result = await setupAndReload(scriptFolder + file, false);
      if (result) { console.log(file, ' - Success'); } else { console.log(file, ' - Fail'); }
    }
  });
})();

