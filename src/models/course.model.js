const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be atleast of 3 characters"],
      maxlength: [60, "Title cannot exceed 60 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [20, "Description must be atleast of 20 characters"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Web Development", "Programming", "Database", "Cloud"],
    },

    level: {
      type: String,
      required: [true, "Level is required"],
      enum: ["Beginner", "Intermediate", "Advanced"],
    },

    durationMonths: {
      type: Number,
      required: [true, "Duration is required"],
      min: [1, "Duration must be atleast of 1 Month"],
      max: [24, "Duration cannot exceed 24 Months"],
    },

    fees: {
      type: Number,
      required: [true, "Fees is required"],
      min: [0, "Fees cannot be negative"],
      max: [200000, "Fees cannot exceed 200000"],
    },

    trainerName: {
      type: String,
      required: [true, "Trainer Name is required"],
      minlength: [2, "Trainer Name must be atleast of 2 characters"],
      trim: true,
    },

    mode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
      default: "Online",
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
