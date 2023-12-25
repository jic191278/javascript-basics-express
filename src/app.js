const express = require('express');

const app = express();

app.use(express.json());

const stringsRoute = require('./routes/strings.route');
const numbersRoute = require('./routes/numbers.route');
const arraysRoute = require('./routes/arrays.route');

app.use('/strings', stringsRoute);
app.use('/numbers', numbersRoute);
app.use('/arrays', arraysRoute);

module.exports = app;
