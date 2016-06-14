'use strict';
var extend = require('gextend');

var DEFAULTS = { path:
    '/github-hook', secret: 'secret'
};

module.exports = function(app, config){
    config = extend({}, DEFAULTS, config);
    console.log('config github', JSON.stringify(config, null, 4));

    var webhookHandler = require('express-github-webhook')(config);

    app.use(webhookHandler);

    webhookHandler.on('error', function(err, req, res){
        console.log('webhookHandler ERROR', err.message);
        console.log('BODY:', req.body);
    });

    webhookHandler.on('*', function (event, repo, data) {
        console.log('github event handler', event, repo/*, data*/);
        app.emit('webhook.github.*', {
            event: event,
            repo: repo,
            data: data
        });
    });
};
