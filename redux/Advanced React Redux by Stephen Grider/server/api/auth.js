const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//http://localhost:3001/auth/signup
//body= {"email": "this@that.com, "password": "password"}
const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res.status(422).json({
        err: "Unprocessable Entity",
        msg: "please enter valid credentials",
      });

    let user = await userModel.findOne({ email });

    if (user)
      return res
        .status(422)
        .json({ err: "Unprocessable Entity", msg: "Email already taken" });

    user = new userModel({ email, password });
    user.password = await bcrypt.hash(user.password, 10);
    user = await user.save();

    const payload = { userId: user._id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        else res.status(200).json(token);
      }
    );
  } catch (err) {
    return res.status(500).json({
      err: "Server Error",
      msg: `Something went wrong @ userSignup ~ ${err.message}`,
    });
  }
};

//http://localhost:3001/auth/this@that.com
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res.status(422).json({
        err: "Unprocessable Entity",
        msg: "please enter valid credentials",
      });

    let user = await userModel.findOne({ email });
    if (!user)
      return res
        .status(200)
        .json({ err: "Not Found", msg: "no user with that email" });

    const isPass = await bcrypt.compare(password, user.password);

    if (!isPass)
      return res.status(401).json({
        err: "Unauthorized",
        msg: "Incorrect Password",
      });

    const payload = { userId: user._id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        else res.status(200).json(token);
      }
    );
  } catch (err) {
    return res.status(500).json({
      err: "Server Error",
      msg: `Something went wrong @ userLogin ~ ${err.message}`,
    });
  }
};

router.route("/signup").post(userSignup);
router.route("/login").post(loginUser);

module.exports = router;
