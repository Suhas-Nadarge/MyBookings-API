var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>Hey Socket.io</h1>');
console.log('Hey Socket')
  res.render('index', { title: 'Express' });
});

module.exports = router;

