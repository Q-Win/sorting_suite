const assert = require('chai').assert
const bubbleSort = require('../bubble')

describe('bubble sort functionality', function() {
  it('it can sort', function(){
    assert.deepEqual(bubbleSort([5,3,2]),[2,3,5])
    assert.deepEqual(bubbleSort([1,2,3,4]),[1,2,3,4])
    assert.deepEqual(bubbleSort([9,7,8]),[7,8,9])
  })
})
