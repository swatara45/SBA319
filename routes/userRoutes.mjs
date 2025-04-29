import express from 'express';
import User from '../model/userSchema.mjs';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  // Specify Action
  const newUser = await User.create(req.body);

  // Return Result
  res.json(newUser);
});

// Read
router.get('/', async (req, res) => {
  // Specify Action
  const allUsers = await User.find({});

  // Return Result
  res.json(allUsers);
});


// Update
router.put('/:id', async (req, res) => {
  // Specify Action
  const editUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editUser) res.status(400).json({ msg: 'User not found' });

  // Return Result
  res.json(editUser);
});

// Delete
router.delete('/:id', async (req, res) => {
  // Specify Action
  const deleteUser = await User.findByIdAndDelete(req.params.id);

  if (!deleteUser) res.status(400).json({ msg: 'User not found' });

  // Return Result
  res.json(deleteUser);
});
export default router;