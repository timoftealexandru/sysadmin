var express = require('express');
var redis = require('redis');

var router = express.Router();

/* redis */
var host = process.env.REDIS_PORT_6379_TCP_ADDR || 'locahost';
var port = process.env.REDIS_PORT_6379_TCP_PORT || 6379;
var client = redis.createClient(6379, 'redis')

/* GET home page. */
router.get('/', function(req, res, next) {
  client.incr('counter', function(err, result) {
    if (err) {
      return next(err);
    }

    res.render('index', { title: 'Express', counter: result });
  });
});

module.exports = router;
