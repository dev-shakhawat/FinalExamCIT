const SuccessStory = require("../../models/SuccessStory");



async function addStory(req, res) {
    try { 

        const story = new SuccessStory({
            author: req.user._id,
            studentName: req.body.studentName,
            storyText: req.body.storyText,
            courseName: req.body.courseName,
            image: req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null,
        });
        await story.save();
        return res.status(201).json({story});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = addStory