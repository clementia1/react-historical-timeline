
const express = require('express');
const events = require('./events.js');
let router = express.Router();

router.get('/api/getevents', events.getEvents);

module.exports = router;