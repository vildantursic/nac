#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const generator = require('./lib/generator');

clear();

console.log(
  chalk.cyan(
    figlet.textSync('NAC', {
        horizontalLayout: 'full',
        verticalLayout: 'full'
    })
  )
);
console.log(
  chalk.greenBright('Node API CLI')
)

const run = async () => {
  const answers = await inquirer.askProjectConfig();
  if (answers.name) {
    const response = await generator.generateProject(answers);
    await generator.install();
    console.log(response);
  } else {
    console.log('Something went wrong');
  }
}

run();
