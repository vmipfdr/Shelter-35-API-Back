const express = require("express");
const router = express.Router();
const postController = require("../controllers/blogController");

router.get("/", postController.index);
router.get("/:author", postController.showAuthor);
router.get("/courseWeek/:courseWeek", postController.showCourseWeek);
router.get("/id/:_id", postController.showId);
router.post("/", postController.create);
router.put("/:_id", postController.edit);
router.delete("/:_id", postController.delete);

module.exports = router;
