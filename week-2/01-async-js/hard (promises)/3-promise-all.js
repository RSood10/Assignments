/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("One Sec");
      resolve("One Sec");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("two Sec");
      resolve("two Sec");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("three Sec");
      resolve("three Sec");
    }, 3000);
  });
}

function calculateTime() {
  console.log("Promise all");
  let d = new Date();
  const startTime = d.getMilliseconds();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (values) => {
      console.log("All promise resolved💲💲");
      let d = new Date();

      const endTime = d.getMilliseconds();
      const elapsedTime = endTime - startTime;

      console.log("Time used in millisec : ", elapsedTime);
      values.map((value) => {
        console.log(value);
      });
    }
  );
}
calculateTime();
