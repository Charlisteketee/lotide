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

//Add elements of the array to find median
const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[middleIndex]];
  } else {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

//tester
const result = middle([1, 2, 3, 4, 5, 6])
assertArrayEqual(result, [3, 4]);


