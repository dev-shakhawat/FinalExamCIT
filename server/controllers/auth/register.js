const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function registration(req, res) {
  try {
    const { name,email,password, role } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email already used' });

    const hashed = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashed, role: role || 'student' });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // set cookie
  res.cookie("FinalExamCIT", token, {
    httpOnly: true, // JS access নেই
    secure: false, // HTTPS only
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  
   return res.status(201).json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = registration;