/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitOneSecond(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("One Sec");
      resolve("One Sec");
    }, t * 1000);
  });
}

function waitTwoSecond(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("two Sec");
      resolve("two Sec");
    }, t * 1000);
  });
}

function waitThreeSecond(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("three Sec");
      resolve("three Sec");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  console.log("Promise all");
  const startTime = Date.now();
  return new Promise((resolve) => {
    Promise.all([
      waitOneSecond(t1),
      waitTwoSecond(t2),
      waitThreeSecond(t3),
    ]).then((values) => {
      // console.log("All promise resolved💲💲");

      const endTime = Date.now();
      console.log(endTime, " ", startTime);
      const elapsedTime = endTime - startTime;
      // console.log(elapsedTime);
      resolve(elapsedTime);
      // console.log("Time used in millisec : ", elapsedTime);
      // values.map((value) => {
      //   console.log(value);
      // });
    });
  });
}
// calculateTime(10, 1, 1);
module.exports = calculateTime;
