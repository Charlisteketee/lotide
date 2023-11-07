const { countLetters } = require(".");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}; // helps us define the properties of the array as though it were an object
  //count how many instances of each string were found in allItems
  for (const item of allItems) { // loops over all items in the array
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
       results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
    return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;