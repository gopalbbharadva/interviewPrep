// Question
// https://leetcode.com/problems/array-prototype-last/

// Solution
const arr = [1, 2, 3, 4]

Array.prototype.last = function () {
  const arr = this
  if (arr.length === 0) return -1
  return arr[arr.length - 1]
}

const res = arr.last()
console.log(res, 'res')
