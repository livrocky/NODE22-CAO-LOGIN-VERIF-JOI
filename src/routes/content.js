const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../middleware');

router.get('/', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send('Route');
});

module.exports = router;
