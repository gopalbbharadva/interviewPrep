// PROMISE.ALL() polyfill
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

// PROMISE.ALLSETTLED()
// const promiseAllSettledPollyFill = (promiseArr) => {
//   const results = []
//   return new Promise((res, rej) => {
//     // check for empty array
//     if (promiseArr.length > 0) {
//       promiseArr.forEach((promise) => {
//         if (promise instanceof Promise) {
//           promise.then(
//             (value) => results.push({ status: 'fulfilled', value }),
//             (reason) => results.push({ status: 'rejected', reason })
//           )
//         } else {
//           // if non-promise item comes, it will directly fulfill
//           results.push({ status: 'fulfilled', value: promise })
//         }
//         // by using catch block we are not getting expected output, don't know why.
//         // .catch((reason) => results.push({ status: 'rejected', reason }))
//       })
//       res(results)
//     } else {
//       // resolve empty array
//       res([])
//     }
//   })
// }

// const r = promiseAllSettledPollyFill([
//   new Promise((res, rej) => res('123')),
//   new Promise((res, rej) => rej('failure')),
//   new Promise((res, rej) => rej('failure2')),
// ])
// console.log(
//   r.then((data) => console.log(data, 'data')),
//   'r'
// )

// PROMISE.ANY()

const promiseAnyPolyfill = (promiseArr) => {
  let errors = []
  // checking for empty array case
  if (promiseArr.length === 0) {
    throw new AggregateError(errors, 'All promises were rejected')
  }

  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      // if array item is non-promise value then resolve it by default
      if (typeof promise !== 'object') {
        promise = Promise.resolve(promise)
      }
      promise
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          errors.push(err)
          if (promiseArr.length === errors.length) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        })
    })
  })
}

const result = promiseAnyPolyfill([
  // 1, 2,
  // Promise.resolve('promise 1'),
  // Promise.resolve('promise 2'),
  new Promise((res, rej) => setTimeout(() => res('success'), 2000)),
  new Promise((res, rej) => setTimeout(() => res('success2'), 1000)),
])

console.log(
  result.then((data) => console.log(data)),
  'result'
)
// *******Description of promiseAnyPolyfill
// it will wait for first promise to be fulfilled, once it's done it will simply return a promise with its data
// if there is no any promise that will resolve then it will throw aggregate error same for empty array
