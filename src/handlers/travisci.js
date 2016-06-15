'use strict';
var extend = require('gextend');

var DEFAULTS = {
    path: '/webhook/travisci'
};

/*
 * To add a webhook:
 * https://docs.travis-ci.com/user/notifications/#Webhook-notification
 */
module.exports = function(app, config){
    config = extend({}, DEFAULTS, config);
    console.log('- config travisci', JSON.stringify(config, null, 4));

    var webhookHandler = require('travisci-webhook-handler')(config);

    webhookHandler.on('error', function(err, req, res){
        console.log('travisci ERROR', err.message);
        console.log('BODY:', req.body);
    });

    webhookHandler.on('start', emit.bind(null, 'success'));
    webhookHandler.on('failure', emit.bind(null, 'success'));
    webhookHandler.on('success', emit.bind(null, 'success'));

    function emit(status, event){

        console.log('travisci event handler', event);

        app.emit('webhook.travisci.*', {
            status: status,
            event: event,
        });
    }

    console.log('- register travisci webhook handler');
    app.use(webhookHandler);
};
