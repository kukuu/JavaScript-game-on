var fs = require('fs');
const util = require('util');

export const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');