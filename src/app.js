const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { PORT } = require("./config/serverConfig");
const { DATABASE_URL } = require("./config/serverConfig");

// API ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// DATABASE CONNECTION
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Failed to connect database:", err));

// SERVER RUNNER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
