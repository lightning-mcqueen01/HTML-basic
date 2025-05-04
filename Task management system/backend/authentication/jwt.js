const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, "abhisecr34", {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };
