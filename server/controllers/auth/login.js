const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

    // JWT তৈরি
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Cookie set
    res.cookie('FinalExamCIT', token, {
      httpOnly: true,      // JS থেকে access না হয়
      secure: false,       // dev mode, production এ true
      sameSite: 'strict',     // frontend cross-site issues কমাতে
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 দিন
    });

    return res.json({
      message: 'Login successful',
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = login;
