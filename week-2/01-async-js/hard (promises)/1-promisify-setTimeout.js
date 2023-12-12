/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
<<<<<<< HEAD
  console.log("Inside function!!");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("After n seconds");
      resolve("Done");
    }, n);
  });
}

console.log("**going to call wait**");
let p = wait(5000);
p.then(() => {
  console.log("Promise was fulfilled!!😎");
  console.log("p (inside then)", p);
});

console.log("p (outside then)", p);
console.log("**After calling wait**");
=======
}

module.exports = wait;
>>>>>>> 0ad4e259c609d35b91caa1d6295f5e519e1ca181
