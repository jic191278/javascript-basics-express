const express = require('express');

const app = express();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

app.get('/strings/hello/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).send({ result: sayHello(name) });
});

app.get('/strings/upper/:str', (req, res) => {
  const { str } = req.params;
  res.status(200).send({ result: uppercase(str) });
});

app.get('/strings/lower/:str', (req, res) => {
  const { str } = req.params;
  res.status(200).send({ result: lowercase(str) });
});

app.get('/strings/first-characters/:str', (req, res) => {
  const { str } = req.params;
  const { length } = req.query;
  const fn = length ? firstCharacters : firstCharacter;

  res.status(200).send({ result: fn(str, length) });
});

module.exports = app;
