const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')

const assertArraysEqual = function(arr1,arr2) {
  let actual = eqArrays(arr1,arr2)
  assertEqual(actual, true)
}

module.exports = assertArraysEqual;