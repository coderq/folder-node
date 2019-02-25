const path = require('path');
const allFile = require('../lib/all-file');
const folderPath = path.resolve(__dirname, 'folder');

test('allFile(folderPath).length to equal 5', () => {
  expect(allFile(folderPath).length).toBe(5);
})
