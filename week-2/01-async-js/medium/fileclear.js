let fn = require("fs");
console.log("Starting it!!");

let dataRead = "";
let d = "";

fn.readFile("readwrite.txt", "utf8", (err, data) => {
  console.log(data);
  dataRead = data;
  dataRead.trim();
  for (let i = 0; i < dataRead.length; i++) {
    if (dataRead.charAt(i) != " ") d += dataRead.charAt(i);
    else if (dataRead.charAt(i - 1) != " " && dataRead.charAt(i) == " ")
      d += " ";
  }
  fn.writeFile("readwrite.txt", d, () => {
    console.log("Data Addedd After Modification.");
  });
});

//as readfile is an asyn function we wrote full logic inside of it.

let date = new Date();

console.log(date.toLocaleString());
