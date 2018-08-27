/* eslint no-await-in-loop:0 */
const fs = require('fs');
const setupAndReload = require('../index.js');

const scriptFolder = '../scripts/';

(async () => {
  let anyErrors = false;
  fs.readdir(scriptFolder, async (err, files) => {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      try {
        const result = await setupAndReload(scriptFolder + file, false);

        if (result) {
          console.log(file, ' - Success');
        } else {
          console.log(file, ' - Fail');
          anyErrors = true;
        }
      } catch (e) {
        console.log(file, ' - Fail');
        console.log(e);
        anyErrors = true;
      }
    }
    process.exit(anyErrors ? 1 : 0);
  });
})();

