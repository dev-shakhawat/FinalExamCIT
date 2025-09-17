const Course = require("../../models/Course");


async function all(req, res) {
    try { 
        const courses = await Course.find(); 

        if (!courses) return res.status(404).json({ data: [] });
        
        return res.status(200).json({ data: courses });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = all