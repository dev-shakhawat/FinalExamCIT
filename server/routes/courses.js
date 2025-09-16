const express = require('express'); 
const { authenticate, authorizeRoles } = require('../middleware/auth');
const create = require('../controllers/course/create'); 
const deleteCourse = require('../controllers/course/delete');
const read = require('../controllers/course/read');
const getSingleCourse = require('../controllers/course/getSingle');
const popularList = require('../controllers/course/popularList');
const upload = require('../helpers/multer');
const updateCourse = require('../controllers/course/update');

const router = express.Router();

// Create (admin)
router.post('/create', authenticate, authorizeRoles('admin') , upload.single('thumbnailImage') , create);

// Update (admin)
router.put('/update/:id', authenticate, authorizeRoles('admin') , upload.single('thumbnailImage') , updateCourse );

// Delete (admin)
router.delete('/delete/:id', authenticate , authorizeRoles('admin'), deleteCourse);

// Get all  
router.get('/getAll', authenticate , authorizeRoles('admin') , read);

// Get single
router.get('/:id', getSingleCourse);

// Popular
router.get('/popular/list', popularList );

module.exports = router;
