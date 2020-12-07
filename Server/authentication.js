const secret = 'secret'
const jwt = require('jsonwebtoken');

const withAuth = function(req, res, next) {
  const token = req.cookies.token;
  console.log(token)
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.userid = decoded.userid;
    console.log('from image,js userid is ',req.userid)
        next();
      }
    });
  }
}

module.exports = {secret, withAuth}