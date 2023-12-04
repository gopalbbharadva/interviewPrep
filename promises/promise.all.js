// promise.all()

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('success promise p1')
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

const result = Promise.all([p1, p2, p3])
console.log(result, 'result')

const resolvedPromises = [1, Promise.resolve('123')]

const p = Promise.all(resolvedPromises)

console.log(p, 'res')

setTimeout(() => {
  console.log('change it')
  console.log(p, 'in timer')
})
