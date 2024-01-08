const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

app.use(bodyParser.json());

// Admin Routes
<<<<<<< HEAD
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
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> df0238708f43edf4893786aa32898587eb61140c
});

module.exports = router;
