const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://rsood:jaWaadPHYv4sKAbw@cluster10.i2xeb8f.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [CourseSchema],
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Middleware for parsing request bodies
app.use(bodyParser.json());
async function userMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  username = req.headers.username;
  // password = req.header.password;

  const r = await User.findOne({ username: username });
  if (r) next();
  else res.status(404).send("Not found");
}

// Admin Routes
app.post("/admin/signup", (req, res) => {
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

app.post("/admin/courses", (req, res) => {
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
  res.json({ message: "Courrse created success " });
});

app.get("/admin/courses", (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  });
});

// User Routes
app.post("/users/signup", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "User created successfully",
  });
});

app.get("/users/courses", userMiddleware, (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  });
});

app.post("/users/courses/", userMiddleware, async (req, res) => {
  const title = req.body.title;
  const username = req.headers.username;
  console.log(username);

  const user = await User.findOne({ username: username });
  const course = await Course.findOne({ title: title });
  console.log(course);
  user.purchasedCourses.push(course);
  user.save();
  res.status(200).send({ message: "Course purchased successfully" });
});

app.get("/users/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const courses = await User.findOne({ username: req.headers.username });
  console.log(courses);
  res.send("found");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
