const express = require("express");
const {
  getAllBlogs,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs);

module.exports = router;
