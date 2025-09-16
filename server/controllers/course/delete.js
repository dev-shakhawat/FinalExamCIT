const Course = require("../../models/Course");
const fs = require('fs');
const path = require('path');

async function deleteCourse(req, res) {
  try {

    console.log("hi");
    
    // fiend course
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // image delete
    if (course.thumbnailImage) {
      const imagePath = path.join(__dirname, '../../uploads', path.basename(course.thumbnailImage));
      fs.unlink(imagePath, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    // delete from database
    await Course.findByIdAndDelete(req.params.id);

    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = deleteCourse;
