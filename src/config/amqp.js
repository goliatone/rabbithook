'use strict';


module.exports = {
    type: 'amqp',
    json: true,
    amqp: require('amqp'),
    channel: 'webhook.github.*',
    exchange: process.env.NODE_AMQP_EXCHANGE || ('wework.' + process.env.NODE_ENV),
    client: {
        url: process.env.NODE_AMQP_EXCHANGE
    }
};
