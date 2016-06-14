'use strict';

var DEFAULTS = { path:
    '/github-hook', secret: 'secret'
};

module.exports = function(app, config){
    config = extend({}, DEFAULTS, config);

    var webhookHandler = require('express-github-webhook')(config);

    app.use(webhookHandler);

    webhookHandler.on('*', function (event, repo, data) {
        console.log('github event handler', event, repo/*, data*/);
        app.emit('webhook.github.*', {
            event: event,
            repo: repo,
            data: data
        });
    });
};
