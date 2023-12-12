let i = 1;

function call() {
  console.log(i++);
  ``;
  setTimeout(call, 1000);
}
call();
// function call2() {
//   console.log("hi");
//   setTimeout(call2, 5000);
// }
// call2();
//some random setTimeout checks
