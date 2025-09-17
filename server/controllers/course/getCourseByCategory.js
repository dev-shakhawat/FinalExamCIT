const Course = require("../../models/Course");


async function getCourseByCategory(req, res) {
    try {
        const category = req.params.category;
        const courses = await Course.find({ category: category }); 

        if (!courses) return res.status(404).json({ data: [] });
        
        return res.status(200).json({ data: courses });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = getCourseByCategory