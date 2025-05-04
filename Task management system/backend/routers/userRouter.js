const express = require("express");
const { userInfo } = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/admin", protect, isAdmin, (req, res) => {
  return res.json({ message: "Welcome Admin" });
});

router.get("/user", protect, userInfo);

module.exports = router;
