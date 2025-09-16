require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Course = require('./models/Course');
const SuccessStory = require('./models/SuccessStory');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected');

  await User.deleteMany({});
  await Course.deleteMany({});
  await SuccessStory.deleteMany({});

  const adminPass = await bcrypt.hash('admin123', 10);
  const studentPass = await bcrypt.hash('student123', 10);

  const admin = await User.create({ name: 'Admin User', email: 'admin@lms.com', password: adminPass, role: 'admin' });
  const author = await User.create({ name: 'Instructor One', email: 'instructor@lms.com', password: studentPass, role: 'student' });

  const c1 = await Course.create({
    title: 'MERN Stack Bootcamp',
    description: 'Full MERN stack practical bootcamp',
    price: 95000,
    instructor: admin._id,
    thumbnailImage: 'https://via.placeholder.com/400x250',
    isPopular: true,
    enrollCount: 120
  });
  const c2 = await Course.create({
    title: 'React for Beginners',
    description: 'Learn React from scratch',
    price: 35000,
    instructor: author._id,
    thumbnailImage: 'https://via.placeholder.com/400x250',
    isPopular: true,
    enrollCount: 80
  });
  const c3 = await Course.create({
    title: 'Graphic Design Essentials',
    description: 'Photoshop & Illustrator basics',
    price: 25000,
    instructor: author._id,
    thumbnailImage: 'https://via.placeholder.com/400x250',
    isPopular: false,
    enrollCount: 8
  });

  await SuccessStory.create({
    studentName: 'Arif Rahman',
    storyText: 'This course changed my career. I got a job within 2 months!',
    courseName: c1.title
  });
  await SuccessStory.create({
    studentName: 'Sumaiya Khatun',
    storyText: 'Loved the hands-on approach, great instructor support.',
    courseName: c2.title
  });

  console.log('Seed done');
  process.exit(0);
}

seed().catch(err => console.error(err));
