var express = require('express');
var client = require('../controllers/client');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  client.query('SELECT * FROM users', function(err , result) {
    res.send(err || result.rows);
  });
});

module.exports = router;
