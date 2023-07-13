import PostMessage from "../model/postsMessage.js";

export const getPostsController = async (req, res) => {
  try {
    const postMessages = await PostMessage.findOne();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
export const createPostsController = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(2001).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
export const updatePostsController = async (req, res) => {
  const { id: _id } = body.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No such post is existing");
  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};
export const deletePostsController = async (req, res) => {
  const { id } = body.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No such post is existing");
  await PostMessage.findByIdAndRemove(_id, post);
  res.json("Message Deleted");
};
export const likePostsController = async (req, res) => {
  const { id } = body.params; //got the client action
  // validating the id of the post
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No such post is existing");
  const post = await PostMessage.findById(id);
  //updating the likeCount
  const updatePost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatePost);
};
