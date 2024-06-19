/** FEEDBACK: Great job getting all test cases to pass! */
const resolvedWrapper = (any) => {
  const promise = new Promise((resolve, reject) => {
    resolve(any)
  })
  return promise
};

//console.log(resolvedWrapper('jellpo'))

const rejectedWrapper = (any) => {
  const promise = new Promise((resolve, reject) => {
    reject(new Error(any))
  })
  return promise
};

//console.log(rejectedWrapper('Uh oh!'))


const handleResolvedPromise = (promise) => {
  return promise.then((val) => {
    console.log(val)
    return val
  })
};

// console.log(handleResolvedPromise('hi'))


const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then((val) => {
    console.log(val)
    return val
  })
    .catch((reject) => {
      console.error('Your error message was: ' + reject.message)
      return null
    })
};


const pauseForMs = (num) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, num)
  })
  return promise
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
