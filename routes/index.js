var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Ronni' })
});

/* GET sub page. */
router.get('/subpage', function(req, res, next) {
  res.render('sub', { title: 'the Subpage', signature: 'Now you know' })
});

module.exports = router;
