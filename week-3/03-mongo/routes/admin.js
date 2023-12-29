const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

app.use(bodyParser.json());

// Admin Routes
app.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({ username: req.Body.username, password: req.Body.password });
  res.json({
    message: "Admin created successfully",
  });
});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.Body.title,
    description: req.Body.description,
    price: req.Body.price,
    imageLink: req.Body.imageLink,
  });
  res.json({
    message: "Course created successfully",
    courseId: "new course id",
  });
});

app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((req, res) => {
    res.json(courses);
  });
});

module.exports = router;
