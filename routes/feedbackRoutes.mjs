import express from 'express';
import Feedback from '../model/feedbackSchema.mjs';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  // Specify Action
  const newFeedback = await Feedback.create(req.body);

  // Return Result
  res.json(newFeedback);
});

// Read
router.get('/', async (req, res) => {
  // Specify Action
  const Feedbacks = await Feedback.find({});

  // Return Result
  res.json(Feedbacks);
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
  const deleteFeedback = await Feedback.findByIdAndDelete(req.params.id);

  if (!deleteFeedback) res.status(400).json({ msg: 'User not found' });

  // Return Result
  res.json(deleteFeedback);
});
export default router;