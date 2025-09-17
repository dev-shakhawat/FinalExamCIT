const Course = require("../../models/Course");


async function create (req, res)  {
try {
  
    const course = new Course({
      creator: req.user._id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      instructor: req.body.instructor,
      category: req.body.category,
      isPopular: req.body.isPopular,
      thumbnailImage: req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null,
    });
    await course.save();
    return res.status(201).json(course);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}


module.exports = create;