const express = require('express'); 
const { authenticate, authorizeRoles } = require('../middleware/auth');
const addStory = require('../controllers/story/addStory');
const getStory = require('../controllers/story/getSotry');
const upload = require('../helpers/multer');
const all = require('../controllers/story/all');
const deleteStory = require('../controllers/story/delete');

const router = express.Router();



// Add story (admin)
router.post('/add', authenticate, authorizeRoles('admin') , upload.single('image') , addStory);



// Get all by user
router.get('/get', authenticate , getStory);



// Get all
router.get('/all', all);



// delete story (admin)
router.delete('/delete/:id', authenticate , authorizeRoles('admin'), deleteStory);




module.exports = router;
