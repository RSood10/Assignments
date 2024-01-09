const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rsood:jaWaadPHYv4sKAbw@cluster10.i2xeb8f.mongodb.net/reacttododata" //first_use is the database name
);

const User = mongoose.model("User", {
  name: String,
  desc: String,
  interest: String,
});

//Middleware Functions
app.use(cors());
app.use(bodyParser.json());

//getting data from the react client
app.post("/data", (req, res) => {
  const jsonData = req.body;
  console.log("Received JSON:", jsonData);
  addData(jsonData);
  // findUse();
  // console.log(jsonData.name);
  res.json({ message: "JSON received successfully!" });
});

//app working on.
app.listen("3000", () => {
  console.log("working on 3000");
});

function addData(tododata) {
  const man = new User({
    // for single operations of insertion
    name: tododata.name,
    desc: tododata.desc,
    interest: tododata.interest,
  });
  man.save().then(() => {
    //obj save in data base
    console.log("Data Added");
  });
}
// addData();

app.get("/users", async (req, res) => {
  //always returns an array of obj
  const users = await User.find();

  res.json({ users });
  // console.log(users);
});

// async function findOneUse() {
//   //find one always returns first occurance of an obj
//   const users = await User.findOne({ name: "kk" });

//   console.log(users);
// }
