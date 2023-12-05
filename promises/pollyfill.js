const promiseAllPollyFill = (promiseArr) => {
  let results = []
  let promisesCompleted = 0
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      if (typeof promise === 'object') {
        promise
          .then((data) => {
            results.push(data)
            promisesCompleted++
            if (promisesCompleted === promiseArr.length) {
              console.log('if**')
              resolve(results)
            }
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        results.push(promise)
        if (promisesCompleted === promiseArr.length) {
          resolve(results)
        }
      }
    })
  })
}

const r = promiseAllPollyFill(['gopal b', Promise.resolve('failure')])
r.then((data) => {
  console.log(data, 'data')
})
