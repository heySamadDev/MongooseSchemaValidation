const errorMiddleware = (err, req, res, next) => {
  console.error("Error Trace:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid Course ID";
  }

  if (err.name === "ValidationError") {
    ((statusCode = 400), (message = "Course validation failed"));
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

module.exports = errorMiddleware;
