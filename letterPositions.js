
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

const letterPositions = function(sentence) { // function to return an object with each key representing a letter in the input string
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    
    if (letter !== ' ') { // Exclude spaces from counting
      if (!results[letter]) { // checks if there's already an array for the letter
        results[letter] = [i]; // if no array yet, create one in the results object with current position [i]
      } else {
        results[letter].push(i); // if letter already has an array, add the current position [i] to the results array
      }
    }
  }

  return results;
};

//test
assertArrayEqual(letterPositions("hello").e, [1]); // compares the 4 letters and their expected positions
const result = letterPositions("hello"); // gives a string to the results to log
console.log(result);