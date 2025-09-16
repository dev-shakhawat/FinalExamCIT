const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (req, res, next) => {
  try {
    // token আসবে cookie থেকে
    const token = req.cookies.FinalExamCIT;

    if (!token) return res.status(401).json({ message: 'No token, please login' });

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.id).select('-password');
    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {

    if (!req.user) return res.status(401).json({ message: 'Not authenticated , please login' });

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
