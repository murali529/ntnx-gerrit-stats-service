const { Router } = require('express');

const { test } = require('../controllers/gerritcontroller');

const app = Router();

app.get('/members', test)

module.exports = app;