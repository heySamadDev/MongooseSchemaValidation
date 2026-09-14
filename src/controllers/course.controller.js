const Course = require("../models/course.model.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");

const createCourses = async (req, res) => {
  const data = req.body;

  const course = await Course.create(data);

  return res
    .status(201)
    .json(new ApiResponse(201, course, "Course Created Successfully"));
};

const getAllCourse = async (req, res) => {
  const courses = await Course.find();

  return res
    .status(200)
    .json(new ApiResponse(200, courses, "Courses Fetched Successfully"));
};

const getOneCourse = async (req, res) => {
  const { id } = req.params;

  const course = await Course.findById(id);

  if (!course) {
    throw new ApiError(404, "Course Not Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, course, "Course Fetched Successfully"));
};

const updateCourse = async (req, res) => {
  const { id } = req.params;

  const allowedFields = [
    "title",
    "description",
    "category",
    "level",
    "durationMonths",
    "fees",
    "trainerName",
    "mode",
    "active",
  ];

  const data = {};

  for (const field of allowedFields) {
    if (req.body[field] !== undefined) {
      data[field] = req.body[field];
    }
  }

  const course = await Course.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!course) {
    throw new ApiError(404, "Course Not Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, course, "Course Updated Successfully"));
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  const course = await Course.findByIdAndDelete(id);

  if (!course) {
    throw new ApiError(404, "Course Not Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, course, "Data Deleted Successfully"));
};

module.exports = {
  createCourses,
  getAllCourse,
  getOneCourse,
  updateCourse,
  deleteCourse,
};
