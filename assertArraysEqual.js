const eqArrays = function(arr1, arr2) {
  let bool = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      bool = false;
  }
  return bool;
};