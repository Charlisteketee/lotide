const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//tester
const result = middle([1, 2, 3, 4, 5, 6])
assertArraysEqual(result, [3, 4]);
