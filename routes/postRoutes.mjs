import express from 'express';
import Post from '../model/postSchema.mjs';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  // Specify Action
  const newPost = await Post.create(req.body);

  // Return Result
  res.json(newPost);
});

// Read
router.get('/', async (req, res) => {
  // Specify Action
  const posts = await Post.find({});

  // Return Result
  res.json(posts);
});


// Update
router.put('/:id', async (req, res) => {
  // Specify Action
  const editPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editPost) res.status(400).json({ msg: 'User not found' });

  // Return Result
  res.json(editPost);
});

// Delete
router.delete('/:id', async (req, res) => {
  // Specify Action
  const deletePost = await Post.findByIdAndDelete(req.params.id);

  if (!deletePost) res.status(400).json({ msg: 'User not found' });

  // Return Result
  res.json(deletePost);
});

export default router;