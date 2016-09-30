var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: '记账本--Sign Up' });
});

module.exports = router;
