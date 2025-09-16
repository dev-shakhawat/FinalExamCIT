const Course = require("../../models/Course");



async function getSingleCourse (req, res){
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'name email role');
    if (!course) return res.status(404).json({ message: 'Not found' });
    res.json(course);
  } catch (err) { res.status(500).json({ error: err.message }); }
}


module.exports = getSingleCourse