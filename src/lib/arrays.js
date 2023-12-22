const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((item, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => string[0].match(/[aeiou]/i));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  // reduce((accumulator, currentValue)=>{});
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
