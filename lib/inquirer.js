const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {
  askProjectConfig: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter your project name:',
        validate: function( value ) {
          if (value.length) {
            if (files.directoryExists(value)) {
              return 'Project name already exists.';
            }
            return true;
          }
          return 'Please enter your project name.';
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select project type you want:',
        choices: ['simple', 'advanced', 'custom'],
        default: ['simple']
      },
      {
        type: 'confirm',
        name: 'docker',
        message: 'Include docker:',
        default: ['Y']
      },
      {
        type: 'confirm',
        name: 'tests',
        message: 'Include tests:',
        default: ['Y']
      }
    ];
    return inquirer.prompt(questions);
  },
}
