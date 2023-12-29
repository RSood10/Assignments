const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
app.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({ username: req.Body.username, password: req.Body.password });
  res.json({
    message: "User created successfully",
  });
});

app.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((req, res) => {
    res.json(courses);
  });
});

app.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.param.query;
  const res = Course.findOne(courseId);
  if (res) res.json({ message: "Course purchased successfully" });
  else res.status(404).send("Not found");
});

app.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});
