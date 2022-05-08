const eqArrays = function(arr1, arr2) {
  let bool = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      bool = false;
  }
  return bool;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(arr1,arr2) {
  let actual = eqArrays(arr1,arr2)
  assertEqual(actual, true)
}

const middle = function(arr)  {
  if (arr.length > 2)  {
    if (arr.length % 2 === 0) {
      let midIndLow = arr.length / 2 - 1;
      let midIndHigh = midIndLow + 1;
      return arr.slice(midIndLow, midIndHigh + 1)
    } else  {
      let midInd = Math.ceil(arr.length / 2) - 1;
      return [arr[midInd]]
    }
  }
  return [];
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]
