const eqArrays = function(arr1, arr2) { 
  for (let i = 0; i <arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};

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



//tests
const dogObject = { color: "red", size: "medium" };
Object.keys(dogObject)
const catObject= { size: "medium", color: "red" };
Object.keys(catObject)
eqObjects(dogObject , catObject); // => true
//Use assertEquals as well to test if the function is working correctly.
assertEquals(eqObjects(dogObject , catObject), true);

const puppyObject= { size: "medium", color: "red", hight: "tall" };
eqObjects(dogObject , puppyObject); // => false
assertEquals(eqObjects(dogObject , puppyObject), false);
