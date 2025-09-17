require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// db connect
const dbConnect = require("./configs/dbConfig");
 
// models import
const User = require("./models/User");
const Course = require("./models/Course");
const SuccessStory = require("./models/SuccessStory");

 

// connect db
 dbConnect();

// seed function
async function seedData() {
  try {
    // remove old data
    await User.deleteMany();
    await Course.deleteMany();
    await SuccessStory.deleteMany();

    // User create
    const admin = await User.create({
      name: "Admin User",
      email: "admin@demo.com",
      password: await bcrypt.hash('123456', 10), // hash model pre-save hook 
      role: "admin"
    });

    const student = await User.create({
      name: "Student User",
      email: "student@demo.com",
      password: await bcrypt.hash('123456', 10),
      role: "student"
    });

    // Course create
    const courses = await Course.insertMany([
      {
        title: "Web Development Bootcamp",
        description: "Learn MERN stack from scratch",
        price: 200,
        instructor: admin._id,
        thumbnailImage: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1280,q_auto",
        isPopular: true ,
        category: "Programming",
        creator: admin._id
      },
      {
        title: "Graphic Design Mastery",
        description: "Photoshop, Illustrator, and more",
        price: 150,
        instructor: admin._id,
        thumbnailImage: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/11/IIMK-ASMP-768x432.jpg.optimal.jpg",
        isPopular: true,
        category: "Marketting",
        creator: admin._id
      },
      {
        title: "Digital Marketing Essentials",
        description: "SEO, SEM, Social Media Marketing",
        price: 100,
        instructor: admin._id,
        thumbnailImage: "https://ethz.ch/en/studies/bachelor/beginning-your-studies/subject-related-preparation/programming-beginners/_jcr_content/par/fullwidthimage/image.imageformat.1286.1887369971.jpg",
        category: "Programming",
        creator: admin._id
      }
    ]);

    // Success Stories create
    const stories = await SuccessStory.insertMany([
      { 
        author: admin._id,
        studentName: "Rakib Hasan",
        storyText: "I learned MERN and got a remote job!",
        courseName: "Web Development Bootcamp",
        image: "https://previews.123rf.com/images/valiza/valiza1909/valiza190900095/129352213-portrait-of-teen-boy-making-thumb-up-gesture-isolated-on-white-background-handsome-caucasian-young.jpg"
      },
      {
        author: admin._id,
        studentName: "Mitu Akter",
        storyText: "Designing became my career after this course.",
        courseName: "Graphic Design Mastery",
        image: "https://st2.depositphotos.com/1252160/11834/i/950/depositphotos_118343822-stock-photo-cute-boy-with-text-of.jpg"
      }
    ]);

    console.log("Seeding Complete");
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedData();
