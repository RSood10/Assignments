let fn = require("fs");
console.log("Starting it!!");

const data = "This must be written in a.txt.";
fn.writeFile("write.txt", data, fn);

fn();
{
  console.log("Done Adding!!");
}
//writeFile takes -> "Path", data/value, function(error),
