const Lesson = require("./../models/lessonModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllLessons = catchAsync(async (req, res, next) => {
  const tours = await Lesson.find();

  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});
