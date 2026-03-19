const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// POST /api/auth/host/login
router.post('/host/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.HOST_EMAIL ||
      password !== process.env.HOST_PASSWORD
    ) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Host login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
