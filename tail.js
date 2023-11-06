const assertEqual = require('./assertEqual');

function tail(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
}

module.exports = tail;
