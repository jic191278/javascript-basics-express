const express = require('express');

const router = express.Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

router.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).send({ result: sayHello(name) });
});

router.get('/upper/:str', (req, res) => {
  const { str } = req.params;
  res.status(200).send({ result: uppercase(str) });
});

router.get('/lower/:str', (req, res) => {
  const { str } = req.params;
  res.status(200).send({ result: lowercase(str) });
});

router.get('/first-characters/:str', (req, res) => {
  const { str } = req.params;
  const { length } = req.query;
  const fn = length ? firstCharacters : firstCharacter;

  res.status(200).send({ result: fn(str, length) });
});

module.exports = router;
