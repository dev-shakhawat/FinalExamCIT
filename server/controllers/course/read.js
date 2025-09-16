const Course = require("../../models/Course");




async function read (req, res){
  try {

 

const courses = await Course.find({ creator: req.user._id });
 
    
    if (!courses) return res.status(404).json({ data: [] });
    
    return res.status(200).json({ data: courses });
 
  } catch (err) { res.status(500).json({ error: err.message }); }
}


module.exports = read