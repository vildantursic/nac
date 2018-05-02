const fs = require('fs');
const files = require('./files');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  generateProject: async (answers) => {
    fs.mkdirSync(answers.name);

    base = `${files.getCurrentDirectoryBase()}/${answers.name}`

    fs.writeFile(`${base}/package.json`, `
      {
        "name": "nac",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "bin": {
          "nac": "./index.js"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
          "chalk": "^2.4.1",
          "clear": "^0.1.0",
          "clui": "^0.3.6",
          "configstore": "^3.1.2",
          "figlet": "^1.2.0",
          "inquirer": "^5.2.0",
          "lodash": "^4.17.10",
          "minimist": "^1.2.0",
          "touch": "^3.1.0"
        }
      }
      `, (err) => {
      if (err) throw err;

      // move to next
    });
    return 'Project finished';
  },
  install: async () => {
    const { stdout, stderr } = await exec('npm i', ['cd', '/test']);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  }
};
