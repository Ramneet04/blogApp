const express = require("express");
const router = express.Router();
const {dummyroute} = require("../controllers/likeBlog");
const {createComment} = require("../controllers/commentBlog");

router.get("/dummy",dummyroute);
router.post("/comment/create",createComment);

module.exports = router;