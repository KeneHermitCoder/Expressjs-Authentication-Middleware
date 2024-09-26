const express = require('express');
const keyStore = require('../key-store');

const router = express.Router();

router.get('/', keyStore);

module.exports = router;