'use strict';


var config = {
    amqp: require('./amqp'),
    github: require('./github'),
    dockerhub: require('./dockerhub')
};

module.exports = config;
