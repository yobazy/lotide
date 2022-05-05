const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let bool = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      bool = false;
  }
  return bool;
};

const eqObjects = function(obj1, obj2)  {
  for (let key in obj1) {
    let objOneLen = Object.keys(obj1).length
    let objTwoLen = Object.keys(obj2).length
    // if length of objects is not equal
    if (objOneLen !== objTwoLen)  {
      return false;
    }
    // if both key-pairs are arrays
    let objOneArrLen = obj1[key].length
    let objTwoArrLen = obj2[key].length

    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key]) && objOneArrLen === objTwoArrLen) {
      for (let ind in obj1[key])
        if (obj1[key][ind] !== obj2[key][ind])  {
          return false;
        }
    }
    // if neither object key pair is an array
    else if (!(Array.isArray(obj1[key]) && Array.isArray(obj2[key])))  {
      if (obj1[key] !== obj2[key])  {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
