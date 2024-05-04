// const dotEnv = require("dotenv");
// dotEnv.config();
require("dotenv").config();
const express = require("express");
const Post = require("./models/Post/Post");
const connectDB = require("./utils/connectDB");
const app = express();
// create PORT
const PORT = 5000;
//middlewares
app.use(express.json()); //pass the JSON Data
//DB Connection
connectDB();
// Routes
app.post("/api/v1/posts/create", async (req, res) => {
  try {
    const postData = req.body;
    const createPost = await Post.create(postData);
    res.json({
      status: "success",
      message: "Post created successfully",
      createPost,
    });
  } catch (error) {
    res.json(error);
  }
});
// start  server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
