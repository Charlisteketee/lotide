//Add elements of the array to find median
const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[middleIndex]];
  } else {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

module.exports = middle;



