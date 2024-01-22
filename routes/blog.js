const express = require("express");
const router = express.Router();
const {dummyroute} = require("../controllers/likeBlog");
const {createLike} = require("../controllers/likeBlog");
const {removeLike} = require("../controllers/likeBlog");
const {createComment} = require("../controllers/commentBlog");
const {createPost} = require("../controllers/postBlog");
const {getAllposts} = require("../controllers/postBlog");

router.get("/dummy",dummyroute);
router.post("/comment/create",createComment);
router.post("/like/create",createLike);
router.post("/like/remove",removeLike);
router.post("/post/create",createPost);
router.get("/post/get",getAllposts);

module.exports = router;