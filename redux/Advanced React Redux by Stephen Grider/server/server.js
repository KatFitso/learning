const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

//database
const connectDB = require("./db");
connectDB();

//middleware
app.use(express.json({ extended: false }));
app.use(morgan("short"));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("API RUNNING");
});

//
app.listen(PORT, () => {
  console.log(`Server Listening @ ${PORT}`);
});
