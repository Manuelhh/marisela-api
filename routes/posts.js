var express = require("express");
var router = express.Router();
const postsController = require("../controllers/posts");

const upload = require("../middleware/multer");

/* GET users listing. */
router.get("/", postsController.posts);
router.get("/allposts", postsController.allPosts);
router.get("/:id", postsController.onePost);
router.post("/create", upload.single("media"), postsController.createPost);
router.delete("/:id", postsController.deletePost);

module.exports = router;
