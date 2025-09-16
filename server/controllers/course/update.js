// controllers/courses/updateCourse.js
const Course = require("../../models/Course");
const fs = require("fs");
const path = require("path");

async function updateCourse(req, res) {
  try {
    const courseId = req.params.id;

    // find existing course
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // update fields
    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    course.price = req.body.price || course.price;
    course.instructor = req.body.instructor || course.instructor;
    course.category = req.body.category || course.category;

    // handle thumbnail image
    if (req.file) {
      // remove old image if exists
      if (course.thumbnailImage) {
        const oldImagePath = path.join(__dirname, "../../uploads", path.basename(course.thumbnailImage));
        fs.unlink(oldImagePath, (err) => {
          if (err) console.log("Old image deletion error:", err.message);
        });
      }
      // set new image URL
      course.thumbnailImage = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    await course.save();
    res.status(200).json(course);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = updateCourse;
