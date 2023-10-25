const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};

const countLetters = function(string) {
  const results = {} //results in an object 
 
  for (const letter of string) {
    if (letter !== ' ') { // takes out empty spaces
      if (results[letter]) {
        results[letter] += 1; // add 1 for each instance of a letter
       } else {
         results[letter] = 1;
       }
    }
  }
  return results;
}

const result = countLetters("Charli is so cool");
console.log(result);