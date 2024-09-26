const fs = require('fs');
const path = require('path');
const VALID_KEYS_PATH = '/valid-keys.txt';

module.exports = function (req, res, next) {
    const apiKey = req.header('x-api-key');

    fs.readFile(path.join(__dirname, VALID_KEYS_PATH), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Internal Server Error');

        const validKeys = data.split('\n').map(key => key.trim()).filter(Boolean);
        if (validKeys.includes(apiKey)) return next();

        return res.status(401).send('Unauthorized');
    });
};