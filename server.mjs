//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs'
import userRoutes from "./routes/userRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs"
import feedbackRoutes from "./routes/feedbackRoutes.mjs"


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

// ErrMiddleware
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: err.message });
  });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});