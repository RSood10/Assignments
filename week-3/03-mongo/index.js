const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

<<<<<<< HEAD
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
=======
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> df0238708f43edf4893786aa32898587eb61140c
});
