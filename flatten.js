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

const flatten = function(arr) {
  let flatArr = []
  for (ind in arr)  {
    if (Array.isArray(arr[ind]))  {
      for (item of arr[ind])  {
        flatArr.push(item)
      }
    } else  {
      flatArr.push(arr[ind])
    }
  }
  console.log(flatArr)
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]