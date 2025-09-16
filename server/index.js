require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const storyRoutes = require('./routes/successStories');
const dbConnect = require('./configs/dbConfig');


const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,               // cookie set
  })
);
app.use(express.json());

// upload image static
app.use('/uploads', express.static('uploads'));


dbConnect()

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/success-stories', storyRoutes);
 


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port  ${process.env.PORT || 8080}`);
});