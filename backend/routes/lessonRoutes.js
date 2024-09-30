const express = require("express");
const lessonController = require("./../controllers/lessonController");

const router = express.Router();

router.route("/").get(lessonController.getAllLessons);

module.exports = router;
