const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCopy)  {
  let finalObj = {}
  // for each key
  for (let item in itemsToCopy) {
    // if key == true look for items in allItems
    if (itemsToCopy[item] === true)
      for (let name of allItems)  {
        if (name === item)  {
          if (typeof finalObj[item] == 'undefined') {
            finalObj[item] = 1
          } else {
          finalObj[item] += 1
          }
        }
      }
    } 
  return finalObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);