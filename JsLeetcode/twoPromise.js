// Question : https://leetcode.com/problems/add-two-promises/description/

// Input:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively.
// The returned promise should resolve with a value of 2 + 5 = 7.
// The time the returned promise resolves is not judged for this problem.

// Solution:

const TwoPromise = async (promise1, promise2) => {
  const p1 = await promise1
  const p2 = await promise2
  return p1 + p2
}
TwoPromise(promise1, promise2)
