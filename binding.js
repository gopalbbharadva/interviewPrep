// POLYFILL for i starts ***********************

// const sample = {
//   name: 'gopal',
// }

// function returnName(city, age) {
//   console.log(this, 'this')
//   return `${this.name} ${city} ${age}`
// }

// Edge case 1: what if user don't call polyfill on function, so check for that.
// Edge case 2: what if the property name that we are giving will actually be part of
// the This reference object.

// Function.prototype.myApply = function (thisArg, args) {
//   const fun = this
//   if (typeof fun !== 'function') {
//     throw new Error('Invalid function provided for binding')
//   }
//   let randomNum = Math.random()
//   if (thisArg[randomNum] !== 'undefined') {
//     randomNum = Math.random()
//   }
//   console.log(this, 'this')
//   thisArg[randomNum] = fun
//   const res = thisArg[randomNum](...args)
//   delete thisArg.db
//   return res
// }

// returnName.myApply(sample, ['surat', 22])

// POLYFILL for apply ends ***********************

// POLYFILL for call starts ***********************

// Edge case 1: what if user don't call polyfill on function, so check for that.
// Edge case 2: what if the property name that we are giving will actually be part of
// the This reference object.

// const demo = {
//   name: 'gopal',
//   printName: function () {
//     console.log('sdksd')
//   },
// }

// function printName(city, age) {
//   return `${this.name} lived in ${city}, ${age}`
// }

// Function.prototype.myCall = function (thisObj, ...args) {
//   const fun = this
//   // Edge case 1 soln
//   if (typeof fun !== 'function') {
//     throw new Error('Invalid function provided for binding')
//   }
//   // Edge case 2 soln
//   let randomNum = Math.random()
//   console.log(randomNum, 'random')
//   if (thisObj[randomNum] !== 'undefined') {
//     randomNum = Math.random()
//   }

//   thisObj[randomNum] = this
//   const result = thisObj[randomNum](...args)
//   delete thisObj[randomNum]
//   return result
// }

// console.log(printName.myCall(demo, 'surat', 23))

// POLYFILL for call ends ***********************

// POLYFILL for bind starts *********************
// const obj = {
//   name: 'gopal',
//   fav_sport: 'badminton',
// }

// function greet(city, age, country) {
//   console.log(
//     `${this.name} lived in ${city}, country ${country},
//     his favorite sport is ${this.fav_sport}, his age is ${age}`
//   )
// }

// Function.prototype.myBind = function (ctx, ...args) {
//   callBack = this
//   return function (country) {
//     const finalArguments = [...args, country]
//     callBack.apply(ctx, finalArguments)
//   }
// }

// const fun = greet.myBind(obj, 'surat', '23')
// fun('india')

// POLYFILL for bind ends ***************************
