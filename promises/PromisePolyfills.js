const promiseAllPollyFill = (promiseArr) => {
  let results = []
  let promisesCompleted = 0
  return new Promise((resolve, reject) => {
    // if passed array is not empty then only we will go into forEach method
    if (promiseArr.length > 0) {
      promiseArr.forEach((promise) => {
        // If array item is non-promise value then we will convert that value into resolved promise value
        if (typeof promise !== 'object') {
          promise = new Promise((res, _) => res(promise))
        }
        promise
          .then((data) => {
            results.push(data)
            promisesCompleted++
            if (promisesCompleted === promiseArr.length) {
              resolve(results)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    } else {
      // directly resolve the empty array
      resolve(promiseArr)
    }
  })
}

const r = promiseAllPollyFill([
  Promise.resolve('ksdk'),
  1,
  2,
  Promise.reject('failure'),
])
console.log(r, 'r')
r.then((data) => {
  console.log(data, 'data')
})
