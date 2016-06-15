'use strict';
var extend = require('gextend');

var DEFAULTS = {
    path: '/github-hook',
    secret: 'secret'
};

module.exports = function(app, config){
    config = extend({}, DEFAULTS, config);
    console.log('- config github', JSON.stringify(config, null, 4));

    var webhookHandler = require('express-github-webhook')(config);

    webhookHandler.on('error', function(err, req, res){
        console.log('webhookHandler github ERROR', err.message);
        console.log('BODY:', req.body);
    });

    webhookHandler.on('*', function (event, repo, data) {
        console.log('webhookHandler github event handler', event, repo/*, data*/);
        app.emit('webhook.github.*', {
            repo: repo,
            data: data,
            event: event,
        });
    });

    console.log('- register github webhook handler');
    app.use(webhookHandler);
};
