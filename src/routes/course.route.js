const express = require("express");
const asyncHandler = require("../utils/asyncHandler.js");
const {
  createCourses,
  getAllCourse,
  getOneCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller.js");

const router = express.Router();

router.post("/", asyncHandler(createCourses));
router.get("/", asyncHandler(getAllCourse));
router.get("/:id", asyncHandler(getOneCourse));
router.patch("/:id", asyncHandler(updateCourse));
router.delete("/:id", asyncHandler(deleteCourse));

module.exports = router;
