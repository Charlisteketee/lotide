const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u{1F60A}");
  } else {
    console.log("\u{1F641}");
  }
};
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, "one");