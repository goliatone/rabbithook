'use strict';


var ascoltatori = require('ascoltatori');


module.exports = function(app, config){

    ascoltatori.build(config, function (ascoltatore) {
        console.log('===> AMQP client CONNECTED');
        app.on('webhook.github.*', function(data){
            console.log('publish event');
            ascoltatore.publish('webhook-github', data);
        });


        /*
         * If clients are up then let's say hello
         */
        ascoltatore.publish('rabbithook/initialize', {time: new Date()});

        ascoltatore.subscribe('rabbithook/amqp/ping', function(){
            ascoltatore.publish('rabbithook/amqp/pong', {time: new Date()});
        });
    });
};
