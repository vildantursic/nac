const fs = require('fs');
const files = require('./files');
const util = require('util');
const git = require('simple-git')();
const CLI = require('clui')
const Spinner = CLI.Spinner;
const exec = util.promisify(require('child_process').exec);

module.exports = {
  generateProject: async (answers) => {
    // fs.mkdirSync(answers.name);

    const status = new Spinner('Creating project...');
    status.start();

    try {
      const response = await git.clone('https://github.com/adnanrahic/boilerplate-api.git', answers.name)
      return 'Project creation finished';
    } catch(err) {
      throw err;
    } finally {
      status.stop();
    }
    // base = `${files.getCurrentDirectoryBase()}/${answers.name}`

    // fs.writeFile(`${base}/package.json`, `{}`, (err) => {
    //   if (err) throw err;

    //   // move to next
    // });
  },
  install: async () => {
    const { stdout, stderr } = await exec('npm i', ['cd', '/test']);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  }
};
