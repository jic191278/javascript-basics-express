const express = require('express');

const router = express.Router();

const { add, subtract, multiply, divide } = require('../lib/numbers');

router.get('/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: add(a, b) });
});

router.get('/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: subtract(b, a) });
});

router.post('/multiply', (req, res) => {
  const { a, b } = req.body;

  if (a && b) {
    if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
      return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
    return res.status(200).send({ result: multiply(a, b) });
  }
  return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});

router.post('/divide', (req, res) => {
  const { a, b } = req.body;

  if ((a && b) || (a === 0 && b) || (a && b === 0)) {
    if (b === 0) return res.status(400).send({ error: 'Unable to divide by 0.' });
    if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
      return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
    return res.status(200).send({ result: divide(a, b) });
  }
  return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
});

module.exports = router;
