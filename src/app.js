const express = require("express");
const courseRoutes = require("./routes/course.route.js");
const errorMiddleware = require("./middlewares/error.middleware.js");
const logRequest = require("./middlewares/logger.middleware.js");

const app = express();

app.use(express.json());
app.use(logRequest);

app.use("/api/v1/courses", courseRoutes);

app.use(errorMiddleware);

module.exports = app;
