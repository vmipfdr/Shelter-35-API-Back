const express = require("express");
const router = express.Router();

router.use("/posts", require("./posts"));
router.use("/blogs", require("./blog"));

module.exports = router;
