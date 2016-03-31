'use strict';

module.exports = function(app, config){

    app.post('/webhook/dockerhub', function(req, res){

        if(!req.body){
            return res.status(400).send();
        }

        console.log('Dockerhub', req.body);

        app.emit('webhook.dockerhub.*', req.body);
    });
};
