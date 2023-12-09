// const promiseAllPollyFill = (promiseArr) => {
//   let results = []
//   let promisesCompleted = 0
//   return new Promise((resolve, reject) => {
//     // if passed array is not empty then only we will go into forEach method
//     if (promiseArr.length > 0) {
//       promiseArr.forEach((promise) => {
//         // If array item is non-promise value then we will convert that value into resolved promise value
//         if (typeof promise !== 'object') {
//           promise = new Promise((res, _) => res(promise))
//         }
//         promise
//           .then((data) => {
//             results.push(data)
//             promisesCompleted++
//             if (promisesCompleted === promiseArr.length) {
//               resolve(results)
//             }
//           })
//           .catch((err) => {
//             reject(err)
//           })
//       })
//     } else {
//       // directly resolve the empty array
//       resolve(promiseArr)
//     }
//   })
// }

// const r = promiseAllPollyFill([
//   Promise.resolve('ksdk'),
//   1,
//   2,
//   Promise.reject('failure'),
// ])
// console.log(r, 'r')
// r.then((data) => {
//   console.log(data, 'data')
// })

// PROMISE.ALL()
const promiseAllSettledPollyFill = (promiseArr) => {
  const results = []
  return new Promise((res, rej) => {
    // check for empty array
    if (promiseArr.length > 0) {
      promiseArr.forEach((promise) => {
        if (promise instanceof Promise) {
          promise.then(
            (value) => results.push({ status: 'fulfilled', value }),
            (reason) => results.push({ status: 'rejected', reason })
          )
        } else {
          // if non-promise item comes, it will directly fulfill
          results.push({ status: 'fulfilled', value: promise })
        }
        // by using catch block we are not getting expected output, don't know why.
        // .catch((reason) => results.push({ status: 'rejected', reason }))
      })
      res(results)
    } else {
      // resolve empty array
      res([])
    }
  })
}

const r = promiseAllSettledPollyFill([
  new Promise((res, rej) => res('123')),
  new Promise((res, rej) => rej('failure')),
  new Promise((res, rej) => rej('failure2')),
])
console.log(
  r.then((data) => console.log(data, 'data')),
  'r'
)
