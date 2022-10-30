var express = require("express");
var router = express.Router();
const postsController = require("../controllers/posts");

/* GET users listing. */
router.get("/", postsController.posts);
router.get("/allposts", postsController.allPosts);
router.get("/:id", postsController.onePost);
router.post("/create", postsController.createPost);
router.delete("/:id", postsController.deletePost);

module.exports = router;
