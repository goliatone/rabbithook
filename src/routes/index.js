'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RabbitHook' });
});

router.get('/health', function(req, res, next){
    res.send({status: true, timestamp: Date.now()});
});

router.post('/test/payload', function(req, res){
    console.log('-------------------------------');
    console.log('TESTING PAYLOAD');
    console.log(req.body);
    console.log(req.query);
    console.log(req.headers);
    console.log('-------------------------------');
    res.send(200);
});

module.exports = function(app, config){
    app.use('/', router);
};
