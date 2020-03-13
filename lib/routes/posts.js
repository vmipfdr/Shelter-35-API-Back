const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//remember we are inside of the posts collection, so everything will be posts/
router.get("/", postController.index);
router.get("/:postTitle", postController.showTitle);
router.get("/date/:date", postController.showDate);
router.get("/id/:_id", postController.showId);
router.post("/", postController.create);
router.put("/:_id", postController.edit);
router.delete("/:_id", postController.delete);

module.exports = router;
