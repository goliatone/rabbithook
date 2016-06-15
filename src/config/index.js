'use strict';


var config = {
    amqp: require('./amqp'),
    github: require('./github'),
    travisci: require('./travisci'),
    dockerhub: require('./dockerhub')
};

module.exports = config;
