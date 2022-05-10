const assert = require('chai').assert;
const tail = require('../tail');

const tailResult = tail([5, 6, 7])

describe("#tail", () => {
  it('returns [6, 7] for [5, 6, 7]', () => {
    assert.deepEqual(tailResult, [6, 7])
  })
})