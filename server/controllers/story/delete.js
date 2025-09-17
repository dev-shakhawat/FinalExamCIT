const SuccessStory = require("../../models/SuccessStory");
const fs = require("fs");


async function deleteStory(req, res) {
    try {
        const story = await SuccessStory.findById(req.params.id);
        if (!story) return res.status(404).json({ message: "Story not found" });
        await SuccessStory.findByIdAndDelete(req.params.id);

        // delete image
        if (story.image) {
            const imageName = story.image.split("/").pop();
            const imagePath = `./uploads/${imageName}`;
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }
        return res.json({ message: "Story deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = deleteStory