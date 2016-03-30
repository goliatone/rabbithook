'use strict';


module.exports = {
    type: 'amqp',
    json: true,
    amqp: require('amqp'),
    channel: 'webhook.github.*',
    exchange: process.env.NODE_AMQP_EXCHANGE || ('wework.' + process.env.NODE_ENV),
    client: {
        url: 'amqp://nxhoolpl:AMfZKA7AvgsdAWPn-NyEDjlAiXo2-tFO@owl.rmq.cloudamqp.com/nxhoolpl'
    }
};
