const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return process.cwd();
  },
  directoryExists: (filePath) => {
    try {
      let file = process.cwd() + '/' + filePath;
      return fs.existsSync(file);
    } catch (err) {
      return false;
    }
  }
};
