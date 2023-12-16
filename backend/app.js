const express = require("express");
const app = express();
const cors = require("cors");

// cors config
app.use(cors());
app.use(express.json());

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./backend/config/.env",
  });
}

module.exports = app;