const jwt = require('jsonwebtoken');

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const user = jwt.verify(token, 'abc123');
      console.log(user);
      next();
    } catch (err) {
      console.log(err);
      res.status(401).send({ err: 'Invalid Token' });
    }
  },
};
