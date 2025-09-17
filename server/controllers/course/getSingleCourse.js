const Course = require("../../models/Course");


async function getSingleCourse(req , res ){
    try{

        const course = await Course.findById(req.params.id).populate('creator'); ;
        if (!course) return res.status(404).json({ message: 'Not found' });
        return res.json({course});

    }catch(err){
        console.log(err);
    }
}


module.exports = getSingleCourse