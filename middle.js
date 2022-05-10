const middle = function(arr)  {
  if (arr.length > 2)  {
    if (arr.length % 2 === 0) {
      let midIndLow = arr.length / 2 - 1;
      let midIndHigh = midIndLow + 1;
      return arr.slice(midIndLow, midIndHigh + 1)
    } else  {
      let midInd = Math.ceil(arr.length / 2) - 1;
      return [arr[midInd]]
    }
  }
  return [];
}

module.exports = middle;