const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(200).json({
        err: "Unauthorized",
        msg: "",
      });
    }

    const token = req.headers.authorization;
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = userId;
    next();
  } catch (error) {
    return res.status(500).json({
      err: "Server Error",
      msg: `Something went wrong @ userSignup ~ ${err.message}`,
    });
  }
};

module.exports = authUser;
