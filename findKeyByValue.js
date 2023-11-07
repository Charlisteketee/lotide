const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};

const findKeyByValue = function(genre, tvShow) { // function to find a key by the value
  const results = (genre);

  for (const key in genre) {
    if (genre[key] === tvShow) {
      return key;
    }
  }
return results;
};  

//tests
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  mystery: "Lupin"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;