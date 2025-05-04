const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const connectdb = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const taskRouter = require("./routers/taskRouter");

// db connection
connectdb();

dotenv.config();
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routers
app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/tasks", taskRouter);

// app.get("/login", (req, res) => {
//   return res.json("login");
// });
// app.get("/register", (req, res) => {
//   return res.render("signup");
// });
// app.get("/api/user/user", (req, res) => {
//   return res.render("user");
// });
// app.get("/admin", (req, res) => {
//   return res.render("admin");
// });

// server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server started"));
