const express = require('express');
const getAllCategory = require('../controllers/category/getAllCategory');

  

const router = express.Router();



// get all category
router.get('/getAll', getAllCategory);


module.exports = router;
