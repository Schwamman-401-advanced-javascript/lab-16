'use strict';

const eventHub = require('./eventHub');
const fs = require('fs');

/**
 * Writes text to file
 * @param {*} file - path to the file
 * @param {*} text - text to be written to file
 */
function writeFile(file, text) {
  fs.writeFile( file, Buffer.from(text), (err, data) => {
    if(err) { return eventHub.emit('error', 'Unable to write file!'); }
    eventHub.emit('save', file);
  });
}

module.exports = writeFile;