const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};

//function to return the first key that the callback returns as a truthy value
const findKey = function(object, callback) { // takes 2 parameters; object and callback
  for (const key in object) { // for in loop
    if (callback(object[key])) { // check each key if it returns a truthy value specified by the callback
      return key; // if it does, return the key
    }
  }
  return undefined; // if not, return undefined
};

// Test cases
const hotels = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const result1 = findKey(hotels, x => x.stars === 2); //=> "noma"
assertEqual(result1, "noma"); // Should pass

const result2 = findKey(hotels, x => x.stars === 3); //=> "Akaleri"
assertEqual(result2, "Akaleri"); // Should pass

const result3 = findKey(hotels, x => x.stars === 4); // nothing!
assertEqual(result3, undefined); // Should pass