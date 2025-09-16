
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  try {
    const { email,password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role }});
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = login;