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
  const flattenedArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const nestedItem of item) {
        flattenedArray.push(nestedItem);
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