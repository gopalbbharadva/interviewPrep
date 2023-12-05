const p = new Promise((res, rej) => setTimeout(() => res('promise 1'), 1000))
const p2 = new Promise((res, rej) => setTimeout(() => res('promise 2'), 1500))

// normal scenario
// const scenario1 = Promise.race([p, p2])
// console.log(scenario1, 'scenario1')

//race with empty array
// const scenario2 = Promise.race([]).then((data) => console.log(data, '***'))
// console.log(scenario2, 'scenario2')

// array with non promise value
// const scenario3 = Promise.race([1]).then((data) => console.log(data, '***'))
// console.log(scenario3, 'scenario3')

// Request timeout example
const data = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(fetch('https://api.github.com/users/gopalbbharadva')),
      2000
    )
  }),
  new Promise((resolve, reject) => {
    // Reject after 5 seconds
    setTimeout(() => reject(new Error('Request timed out')), 5000)
  }),
])
  .then((res) => res.json())
  .then((data) => console.log(data, 'data**'))
//   .catch((err) => displayError(err))

// console.log(data, 'data')
