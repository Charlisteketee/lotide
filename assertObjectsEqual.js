// Returns true if both objects keys and values are identical.
// Otherwise you get back a big fat false! plagarism but I love it lol
const eqObjects = function(object1, object2) {
  //look for same number of keys by creating an array of the objects
  const obj1Keys = Object.keys(object1); //Object.keys turns object's keys into an array
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) { // if length of the keys from obj1 doesn't equal length of keys from obj2
    return false;
  }
//determine if key+value are the same by looping through the keys of obj1
for (const key of obj1Keys) {
  if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //checks if the values are arrays
    if (!eqArrays(object1[key], object2[key])) {  //uses eqArrays function to compare array values, checking if the comparison fails to return 'false' 
    return false;
    }
  } else {
    if (object1[key] !== object2[key]) { //if keys don't match up
      return false;
    }
  }
}

return true;
};

// Function
const assertObjectsEqual = function(actual, expected) {
//import the util library so we can use it
  const inspect = require('util').inspect;
// compare and display objects using .inspect (similar code to assertArraysEqual)
  if (eqObjects(actual, expected)) {
    console.log(`✅ Arrays are equal!: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Arrays are not equal.: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//tests

const obj1 = { hour: '12', min: 2 };
const obj2 = { min: 2, hour: '12' };
const obj3 = { hour: '1', min: 3 };

assertObjectsEqual(obj1, obj2); 
assertObjectsEqual(obj2, obj3);