//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs'
import userRoutes from "./routes/userRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs"
import feedbackRoutes from "./routes/feedbackRoutes.mjs"
import allUsers from './utilities/userData.mjs';
import allPosts from './utilities/postData.mjs';
import allFeedback from './utilities/feedbackData.mjs';

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001 ;

connectDB();


//Middleware
app.use(express.json());

//Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/feedback', feedbackRoutes);

// seed route
app.get('/seed', async (req, res) => {
  // await users.deleteMany({}); //Delete all data

  await User.create(allUsers); //reseed all data

  res.send('seeded data');
});

app.get('/seed', async (req, res) => {
  // await posts.deleteMany({}); //Delete all data

  await Post.create(allPosts); //reseed all data

  res.send('seeded data');
});

app.get('/seed', async (req, res) => {
  // await feedback.deleteMany({}); //Delete all data

  await feedback.create(allFeedback); //reseed all data

  res.send('seeded data');
});


// ErrMiddleware
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: err.message });
  });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});