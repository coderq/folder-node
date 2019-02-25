const fs = require('fs');
const path = require('path');

function readFolder(folder) {
  try {
    return fs.readdirSync(folder).reduce((files, obj) => {
      const objPath = path.resolve(folder, obj);
      if (fs.statSync(objPath).isDirectory()) {
        files = files.concat(readFolder(objPath));
      } else {
        files = files.concat([objPath]);
      }
      return files;
    }, []);
  } catch (e) {
    return [];
  }
}

module.exports = readFolder;