const express = require('express');
const SuccessStory = require('../models/SuccessStory');
const { authenticate, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Add story (admin)
router.post('/', authenticate, authorizeRoles('admin'), async (req, res) => {
  try {
    const story = new SuccessStory(req.body);
    await story.save();
    res.json(story);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Get all
router.get('/', async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
