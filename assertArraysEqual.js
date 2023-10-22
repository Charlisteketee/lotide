const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, "one");

// iterate through the arrays and compare each element
const eqArrays = function(arr1, arr2) { 
  for (let i = 0; i <arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)

const assertArrayEqual = function(arr1, arr2) { 
  for (let i = 0; i <arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("false");
  } else {
    console.log("true");
  }
  } 
}