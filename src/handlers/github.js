'use strict';

var webhookHandler = require('express-github-webhook')({ path: '/github-hook', secret: 'secret' });

module.exports = function(app){
    app.use(webhookHandler);

    webhookHandler.on('*', function (event, repo, data) {
        console.log('event handler', event, repo/*, data*/);
        app.emit('webhook.github.*', {
            event: event,
            repo: repo,
            data: data
        });
    });
};
