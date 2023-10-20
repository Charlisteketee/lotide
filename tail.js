const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: \u{1F60A}`);
  } else {
    console.log(`Assertion Failed: \u{1F641}`);
  }
};
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, "one");

function tail(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//test
const words = ["yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);