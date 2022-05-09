const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let arrMod = arr.slice(1);
  return arrMod;
};

module.exports = tail;