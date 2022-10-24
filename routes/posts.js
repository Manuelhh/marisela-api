var express = require("express");
var router = express.Router();
const postsController = require("../controllers/posts");

/* GET users listing. */
router.get("/", postsController.posts);
router.get("/allposts", postsController.allPosts);

module.exports = router;
