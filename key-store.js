const fs = require('fs');
const shortid = require('shortid');
// // To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;
const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res) {
    const apiKey = shortid.generate();
    fs.appendFileSync(VALID_KEYS_PATH, apiKey + LINE_ENDING);
    res.json({ apiKey, });
};