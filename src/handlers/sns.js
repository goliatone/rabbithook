'use strict';
var extend = require('gextend');

var DEFAULTS = {
    path: '/webhook/sns',
    secret: 'secret'
};

module.exports = function(app, config){
    config = extend({}, DEFAULTS, config);
    console.log('- config github', JSON.stringify(config, null, 4));

    // TopicArn: 'arn:aws:sns:<REGION>:<ACCOUNT>:<TOPIC>',
    var auth = {
        region: config.auth.region,
        account: config.auth.account,
        topic: config.auth.topic //TODO: We want to subscribe to ALL topics
    };

    var client = require('aws-snsclient')(auth, function(err, message) {
        if(err) return console.error('SNS CLIENT ERROR', err);
        app.emit('webhook.sns.*', {
            topic: message.TopicArn,
            message: message
        });
    });

    webhookHandler.on('error', function(err, req, res){
        console.log('webhookHandler github ERROR', err.message);
        console.log('BODY:', req.body);
    });

    console.log('- register github webhook handler');
    app.post(config.path, client);
};
