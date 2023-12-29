function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  username = req.header.username;
  password = req.header.password;

  const res = User.findOne(username);
  if (res) next();
  else res.status(404).send("Not found");
}

module.exports = userMiddleware;
