const eqArrays = function(arr1, arr2) { 
  for (let i = 0; i <arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function(arr1, arr2) { 
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal!");
  } else {
    console.log("❌ Arrays are not equal.");
  }
}

const words = ["ground", "control", "to", "major", "tom"];

/* create a map function:
* takes in 2 arguments: an array to map, and a callback function
* it will return a new array based on what the callback results are
*/
  /*debugging statements:
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  */  
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // pushes item of array into our results array
  }
  return results;
}

// takes array of 'words' from above and pushes index[0] into resutls array
const results1 = map(words, word => word[0]);
console.log(results1);

// takes array of 'words' and pushes the length of the word into the results2 array
const results2 = map(words, word => word.length);
console.log(results2)

// takes new numbers array and times by 2
const numbers = [1, 2, 3, 4, 5, 6]; // new array of numbers to use
const doubleNumbers = map(numbers, number => number * 2)
console.log(doubleNumbers);
const expectedNumbers = [2, 4, 6, 8, 10, 12]; // expected output

assertArrayEqual(words, results1); //are words array and results1 array equal? should fail
assertArrayEqual(doubleNumbers, expectedNumbers); //should pass

module.exports = map;