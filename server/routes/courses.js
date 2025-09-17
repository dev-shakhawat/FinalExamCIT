const express = require('express'); 
const { authenticate, authorizeRoles } = require('../middleware/auth');
const create = require('../controllers/course/create'); 
const deleteCourse = require('../controllers/course/delete');
const read = require('../controllers/course/read'); 
const popularList = require('../controllers/course/popularList');
const upload = require('../helpers/multer');
const updateCourse = require('../controllers/course/update');
const getCourseByCategory = require('../controllers/course/getCourseByCategory');
const all = require('../controllers/course/allCourse');
const getSingleCourse = require('../controllers/course/getSingleCourse');

const router = express.Router();

// Create (admin)
router.post('/create', authenticate, authorizeRoles('admin') , upload.single('thumbnailImage') , create);

// Update (admin)
router.put('/update/:id', authenticate, authorizeRoles('admin') , upload.single('thumbnailImage') , updateCourse );

// Delete (admin)
router.delete('/delete/:id', authenticate , authorizeRoles('admin'), deleteCourse);

// Get all  by user
router.get('/getAll', authenticate , authorizeRoles('admin') , read);


// get all
router.get('/all', all);


// get single course by id
router.get('/single/:id', getSingleCourse);

 

// Popular
router.get('/popular/list', popularList );

// get course by category
router.get('/category/:category', getCourseByCategory);







module.exports = router;
