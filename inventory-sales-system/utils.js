const fs = require('fs');
const path = require('path');

function readJSON(filePath) {
    return JSON.parse(fs.readFileSync(path.join(__dirname, filePath), 'utf8'));
}

function writeJSON(filePath, data) {
    fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(data, null, 2));
}

module.exports = { readJSON, writeJSON };
