const express = require('express');

const app = express();

const stringsRoute = require('./routes/strings.route');

app.use('/strings', stringsRoute);

module.exports = app;
