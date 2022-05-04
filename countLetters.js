const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  lettersCount = {}
  const noSpaces = string.split(' ').join('')
  for (let item of noSpaces)  {
    if (typeof lettersCount[item] == 'undefined') {
      lettersCount[item] = 1
    } else  {
      lettersCount[item] += 1
    }
  }
  console.log(lettersCount)
}

countLetters('lighthouse in the house')