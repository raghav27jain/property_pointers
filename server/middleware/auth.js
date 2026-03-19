export const authMiddleware = (req, res, next) => {
  // existing JWT verify logic here, sets req.user
  next();
};

export const onlyRoles = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};
