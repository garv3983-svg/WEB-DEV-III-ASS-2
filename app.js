// app.js
// Entry point of the Student Management REST API

const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// parse incoming JSON bodies
app.use(express.json());

// custom logger middleware (logs method, url, time for every request)
app.use(logger);

// serve a small frontend so the API can be tested from the browser too
app.use(express.static(path.join(__dirname, "public")));

// all student related routes are handled here
app.use("/students", studentRoutes);

// fallback for routes that don't exist
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// basic error handler (catches anything that gets thrown/next(err))
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
