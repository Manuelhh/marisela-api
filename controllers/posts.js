const Post = require("../models/post");

const posts = async (req, res) => {
  res.send("Marisela L Fierro's blog API");
};

const allPosts = async (req, res) => {
  await Post.find({})
    .then((response) => {
      const allPosts = response;
      res.status(200).json(allPosts);
    })
    .catch((error) => {
      console.log("Something went wrong. This is the error:");
      console.log(error);
      console.log("Something went wrong. This is the end of the error:");
    });
};

const onePost = async (req, res) => {
  const { id } = req.params;
  await Post.findById(id)
    .then((response) => {
      const post = response;
      res.status(200).json(post);
    })
    .catch((error) => {
      console.log("Something went wrong. This is the error:");
      console.log(error);
      console.log("Something went wrong. This is the end of the error:");
    });
};

// need to finish this
const createPost = async (req, res) => {
  const data = req.body;

  const newPost = await new Post({
    user: data.user,
    title: data.title,
    text: data.text,
    description: data.description,
    likes: data.likes,
  });
  if (req.file) {
    newPost.media = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }
  newPost
    .save()
    .then((response) => {
      const post = response;
      res.status(200).json(post);
    })
    .catch((error) => {
      console.log("Something went wrong. This is the error:");
      console.log(error);
      console.log("Something went wrong. This is the end of the error:");
    });
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id)
    .then((response) => {
      const deletedPost = response;
      res.status(200).json(deletedPost);
    })
    .then((error) => {
      console.log("Something went wrong. This is the error:");
      console.log(error);
      console.log("Something went wrong. This is the end of the error:");
    });
};

// need to create edit post

module.exports = {
  posts,
  allPosts,
  onePost,
  createPost,
  deletePost,
};
