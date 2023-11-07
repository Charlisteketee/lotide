const tail = require('../tail');
const { assert } = require('chai');


//test
describe("#tail", () => {
  it("should return 'Labs' from ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["lighthouse", "Labs"]), ['Labs']);
  });

  it("should return 'Lighthouse', 'Labs] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

/*
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
*/