const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    audio: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    gif: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
