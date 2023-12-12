let fn = require("fs");
console.log("Starting it!!");

fn.readFile("3-read-from-file.md", "utf8", (err, data) => {
  console.log(data);
  //   fn.wrieFile("3-read-from-file.md", () => {
  //     console.log("added");
  //   });
});

console.log("out of file called!!");
