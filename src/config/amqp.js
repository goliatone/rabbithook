'use strict';


module.exports = {
    type: 'amqp',
    json: true,
    amqp: require('amqp'),
    channel: 'webhook.github.*',
    exchange: process.env.NODE_AMQP_EXCHANGE,
    client: {
        url: process.env.NODE_AMQP_ENDPOINT
    }
};
