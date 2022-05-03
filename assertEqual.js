// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + [actual] + '===' + [expected]);
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + [actual] + '!==' + [expected]);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual('Banana', 'Banana');
assertEqual('Apple', 'Banana');
assertEqual(5,5);
assertEqual(5,4);