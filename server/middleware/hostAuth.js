// // server/middleware/hostAuth.js
// const jwt = require('jsonwebtoken');

// function hostAuth(req, res, next) {
//   const authHeader = req.headers.authorization; // "Bearer token"
//   if (!authHeader) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== 'host') {
//       return res.status(403).json({ message: 'Not allowed' });
//     }
//     req.host = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// }

// module.exports = hostAuth;


// server/middleware/hostAuth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = header.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.hostEmail = decoded.email;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
