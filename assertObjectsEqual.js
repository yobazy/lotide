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

const assertObjectsEqual = function(obj1,obj2) {
  const inspect = require('util').inspect;
  let actual = eqObjects(obj1,obj2)
  if (actual === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc)