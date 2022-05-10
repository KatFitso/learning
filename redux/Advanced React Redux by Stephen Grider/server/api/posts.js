const express = require("express");
const router = express.Router();

const testRoute = (req, res) => {
  res.send("test route");
};

router.route("/").get(testRoute);

module.exports = router;
