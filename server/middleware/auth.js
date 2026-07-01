const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  try {
    // step 1 - get token from request header
    const authHeader = req.headers.authorization;

    // step 2 - check if token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // step 3 - extract the actual token
    // header looks like: "Bearer eyJhbGc..." 
    // we split by space and take the second part
    const token = authHeader.split(' ')[1];

    // step 4 - verify the token using our secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // step 5 - attach decoded user info to the request
    // so any controller after this can access req.user
    req.user = decoded;

    // step 6 - move on to the actual controller
    next();

  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// role based protection
// checks if logged in user has the correct role
const authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Role ${req.user.role} is not authorized to access this route` 
      });
    }
    next();
  };
};

module.exports = { protect, authorizeRole };