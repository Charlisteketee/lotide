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

//takes a source array and an itemsToRemove array, then filters out unwanted elements to return a new array.
const without = function(source, itemsToRemove) {
  const result = [];
  //loops through each element of source array to find a match from 'itemsToRemove'
  for (const item of source) {
    let shouldRemove = false;
    for (const removeItem of itemsToRemove) {
      if (item === removeItem) {
        shouldRemove = true;
        break;
      }
    }

    if (!shouldRemove) {
      result.push(item);
    }
  }
  // result array contains the filtered values and is returned as the output of the without function
  return result;
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [1, 2]);

const sourceArray = [1, 2, 3, 4, 5];
const itemsToRemoveArray = [3, 4];
const newArray = without(sourceArray, itemsToRemoveArray);
console.log(newArray);

