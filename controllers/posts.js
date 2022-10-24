const Post = require("../models/post");

const posts = async (req, res) => {
  res.send("Marisela's blog API");
};

const allPosts = async (req, res) => {
  await Post.find({})
    .then((response) => {
      const allPosts = response;
      res.status(200).json(allPosts);
    })
    .catch((error) => {
      console.log("Wrong!");
      console.log(error);
    });
};

module.exports = {
  posts,
  allPosts,
};
