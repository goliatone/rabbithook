## RabbitHook
Transform WebHooks from services like GitHub, Dockerhub, or Travis into AMQP events.

Used with [rabbithook-client][rabbithook-client] to put together a build pipeline.
Build docker images after pushing to a Github repo, push image to Dockerhub. On Dockerhub updates, update container.

### Handlers

#### GitHub

To read more about how to set up a webhook in Github, read [this documentation page][github-doc].

Configuration needs an environment variable with the github secret:
* NODE_GITHUB_SECRET

Generates the following AMQP topic:
`rabbithook.github`

If you are using ascoltatore, the topic is `rabbithook/github`.

#### Dockerhub

To read more about how to set up a webhook in Dockerhub, read [this documentation page][dockerhub-doc].

Generates the following AMQP topic:
`rabbithook.dockerhub`

If you are using ascoltatore, the topic is `rabbithook/dockerhub`.

#### TravisCI

To read more about how to set up a webhook in TravisCI, read [this documentation page][travisci-doc].

Configuration needs an environment variable with the github secret:
* NODE_TRAVISCI_TOKEN

Generates the following AMQP topic:
`rabbithook.travisci`

If you are using ascoltatore, the topic is `rabbithook/travisci`.

### Configuration

The application is dependent on two environment variables to connect to AMQP:

* NODE_AMQP_ENDPOINT
* NODE_AMQP_EXCHANGE

### TODO:
Build up AMQP topics to be more descriptive and easier to route
Integrate TravisCI

https://www.npmjs.com/package/travisci-webhook/
https://github.com/chrisjaure/travisci-webhook-handler


[rabbithook-client]:https://github.com/goliatone/rabbithook-client
[github-doc]:https://developer.github.com/webhooks/creating/
[dockerhub-doc]:https://docs.docker.com/docker-hub/webhooks/
[travisci-doc]:https://docs.travis-ci.com/user/notifications/#Webhook-notification
