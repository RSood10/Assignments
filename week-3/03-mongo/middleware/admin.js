// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  username = req.header.username;
  password = req.header.password;

  const res = Admin.findOne(username);
  if (res) next();
  else res.status(404).send("Not found");
}

module.exports = adminMiddleware;
