const express = require('express');

const router = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

router.post('/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

router.post('/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

router.get('/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (Number.isNaN(number)) return res.status(400).send({ error: 'Parameter must be a number.' });

  return res.status(200).send({ result: isOdd(number) });
});

router.get('/:str/starts-with/:char', (req, res) => {
  const { str, char } = req.params;

  if (char.length !== 1)
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });

  return res.status(200).send({ result: startsWith(char, str) });
});

module.exports = router;
