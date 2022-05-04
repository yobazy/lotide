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

const without = function(source, itemsToRemove)  {
  let removedArr = [...source];
  for (item of itemsToRemove) {
    for( var i = 0; i < removedArr.length; i++){ 
      if ( removedArr[i] === item) { 
          removedArr.splice(i, 1); 
      }
    };
  };
  return removedArr
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

assertArraysEqual((without([1, 2, 3], [1])),[2,3])
assertArraysEqual((without(['1', '2', '3'], [1,2,'3'])),['1','2'])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

