const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};

const findKeyByValue = function(genre, tvShow) { // function to find a key by the value
  // how to handle cases where there is no corresponding key to the value
  let noKey = true;

  for (const key in genre) {
    if (genre[key] === tvShow) {
      noKey = false;
      return key;
    }
  }
  // if there is no key associated with the value it needs to return undefined
  if (noKey) {
    return undefined;
  };
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