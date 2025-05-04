const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/users-db");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectdb;
