const express = require('express');


const registration = require('../controllers/auth/register');
const login = require('../controllers/auth/login');
const getuserData = require('../controllers/auth/getUser');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Signup
router.post('/register', registration);

// Login
router.post('/login', login);


// get user data
router.get('/me' , authenticate , getuserData)


module.exports = router;
