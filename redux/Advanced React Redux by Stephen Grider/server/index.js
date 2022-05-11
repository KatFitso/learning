const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

//database
const connectDB = require("./db/db");
const authUser = require("./middleware/authMiddleware");
connectDB();

//middleware
app.use(express.json({ extended: false }));
app.use(morgan("short"));
//solution to cors error, this is a really easy to use lib
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.use("/api/auth", require("./api/auth"));
//added authUser for the token checking middleware
app.use("/api/comments", authUser, require("./api/comments"));

//server startup
app.listen(PORT, () => {
  console.log(`Server Listening @ ${PORT}`);
});
