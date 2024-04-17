// Question: https://leetcode.com/problems/function-composition/description/

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Solution
const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x]

const compose = function (functions) {
  let result = null
  return function curried(value) {
    result = value
    functions.reverse().forEach((element) => {
      result = element(result)
    })
    return result
  }
}

const fun = compose(functions)
console.log(fun(4))
