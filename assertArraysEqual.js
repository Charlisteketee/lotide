const eqArrays = require('./eqArrays');


const assertArrayEqual = function(arr1, arr2) { 
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal!");
  } else {
    console.log("❌ Arrays are not equal.");
  }
}

module.exports = assertArrayEqual;
