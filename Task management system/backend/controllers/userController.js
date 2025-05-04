const bcrypt = require("bcryptjs");
const { generateToken } = require("../authentication/jwt");
const User = require("../models/user");
const Task = require("../models/task");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("req.body----------------", req.body);

  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();
  const token = generateToken(user);
  return res.status(201).json({ message: "User registered successfully" });
  // return res.redirect("/user");
};

exports.login = async (req, res) => {
  // console.log("req----------", req.body);
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  // console.log("searched user---------", user);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);
  return res.json({ token });

  // return res.redirect("/api/user");
};

exports.getUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
};

exports.userInfo = async (req, res) => {
  const userId = req.user.id; // this should come from decoded token
  console.log("userId ---------- ", userId);
  try {
    const user = await User.findById(userId).select("-password"); // exclude password
    const tasks = await Task.find({ user: userId }); // assuming tasks have userId field
    console.log("tasks-------", tasks);
    return res.json({ user, tasks });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
