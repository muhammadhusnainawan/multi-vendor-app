const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./utils/ErrorHandler");
const userController = require("./controllers/userController");

// cors config
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use("/test", (req, res) => {
  res.send("Hello World");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./backend/config/.env",
  });
}

app.use("/user", userController);

//  error handling
app.use(ErrorHandler);
module.exports = app;
