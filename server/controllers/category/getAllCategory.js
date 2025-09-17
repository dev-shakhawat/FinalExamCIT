const Course = require("../../models/Course");


async function getAllCategory (req, res){
    try {
        const allCategory = []
        const Courses = await Course.find(); 

        if(!Courses) return res.status(404).json({ allCategory  });

        for (let course of Courses) {
            if (!allCategory.includes(course.category)) {
                allCategory.push(course.category);
            }
        } 

        return res.status(200).json({ allCategory });


    } catch (err) { res.status(500).json({ error: err.message }); }
}


module.exports = getAllCategory