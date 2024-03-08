const express = require("express");
const { getBlogs, createBlog, getBlog, updateBlog, deleteBlog } = require("../controllers/blogControllers");

const router = express.Router()

router.get("/all-blogs", getBlogs)
router.post("/create-blog", createBlog)
router.get("/get-blog/:id", getBlog)
router.put("/update-blog/:id", updateBlog);
router.delete("/delete-blog/:id", deleteBlog);

module.exports = router;