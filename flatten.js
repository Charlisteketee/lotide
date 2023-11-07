// iterate through the arrays and compare each element
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//implements the eqArray function to check if arrays are equal
const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal!");
  } else {
    console.log("❌ Arrays are not equal.");
  }
};

//iterate through the array using a for..of loop
const flatten = function(arr) {
  const flattenedArray = []; // create empty array 

  for (const item of arr) { // loops through each elements 'item' in the array
    if (Array.isArray(item)) { // determine if item is an array or not
      for (const nestedItem of item) {
        flattenedArray.push(nestedItem); // (add item individually to flattenedArray) -push the 'nestedItem' into the 'flattenedArray' 
      }
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};

// Example usage:
const nestedArray = [1, 2, [3, 4], 5, [6]];
const flattened = flatten(nestedArray);
console.log(flattened);

module.exports = flatten;