const SuccessStory = require("../../models/SuccessStory");


async function all(req, res){

    try {
        const stories = await SuccessStory.find().sort({createdAt: -1}); 
        if(!stories) return res.status(404).json({ story: [] }); 

        return res.status(200).json({ story: stories });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}


module.exports = all