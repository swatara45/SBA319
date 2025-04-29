import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
    minlength: 5, // Optional: minimum length for a comment
  },
}, { timestamps: true }); // Optional: adds createdAt and updatedAt fields automatically

export default mongoose.model('Feedback', feedbackSchema);