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

const letterPositions = function(sentence)  {
  const results = {};
  for (let ind in sentence)  {
    let letter = sentence[ind]
    if (typeof results[letter] == 'undefined')  {
      results[letter] = [Number(ind)]
    } else  {
      results[letter].push(Number(ind))
    }
  }
  delete results[' ']
  return results;
};

const ans = {
  h:[0],
  e:[1],
  l:[2,3],
  o:[4]
}

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);