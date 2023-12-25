const express = require('express');

const router = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

router.post('/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;

  res.status(200).send({ result: getNthElement(index, array) });
});

router.post('/to-string', (req, res) => {
  const { array } = req.body;

  res.status(200).send({ result: arrayToCSVString(array) });
});

router.post('/append', (req, res) => {
  const { array, value } = req.body;

  res.status(200).send({ result: addToArray2(value, array) });
});

router.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).send({ result: elementsStartingWithAVowel(array) });
});

router.post('/remove-element', (req, res) => {
  const { array } = req.body;
  const index = req.query.index ? parseInt(req.query.index, 10) : 0;

  res.status(200).send({ result: removeNthElement2(index, array) });
});

module.exports = router;
