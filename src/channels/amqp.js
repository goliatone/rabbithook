'use strict';


var ascoltatori = require('ascoltatori');


module.exports = function(app, config){

    ascoltatori.build(config, function (_, ascoltatore) {
        console.log('===> AMQP client CONNECTED');
        app.on('webhook.github.*', function(data){
            console.log('github: publish event');
            ascoltatore.publish('rabbithook/github', data);
        });

        app.on('webhook.dockerhub.*', function(data){
            console.log('dockerhub: publish event');
            ascoltatore.publish('rabbithook/dockerhub', data);
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
