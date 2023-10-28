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

//function to keep collecting items in an array until callback returns a truthy value
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) { // if item doesn't match the callback function, ex. a negative number
      results.push(item);  // then add item to results array
    } else {
      break; // else stop the loop
    }
  }
  return results;
}

//tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // takes elements from array until it gets to a negative number
console.log(results1);
const expectedResults1 = [ 1, 2, 5, 7, 2 ];

console.log('---'); //space

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // takes elements from array until it gets to a comma
console.log(results2); 
const expectedResults2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

assertArrayEqual(results1, expectedResults1); //are array and results1 array equal? should pass
assertArrayEqual(data2, expectedResults2); //should fail