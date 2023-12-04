// Promise.any

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('success promise p1')
    rej('failure promise p1')
  }, 5000)
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('success promise p2')
    rej('failure promise p2')
  }, 4000)
})

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('success promise p3')
    rej('failure promise p3')
  }, 3000)
})

// normal case
const scenario1 = Promise.any([p1, p2, p3]).then((data) =>
  console.log(data, 'data')
)

// Empty array
const scenario2 = Promise.any([]).then((data) => console.log(data, 'data'))

// Normal promise with 2 fulfilled and one rejected.
const scenario3 = Promise.any([1, 2, Promise.reject('failure')]).then((data) =>
  console.log(data, 'data**')
)
// console.log(scenario1, 'scenario1')
