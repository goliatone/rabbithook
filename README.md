### RabbitHook
Transform WebHooks from services like GitHub, Dockerhub, or Travis into AMQP events.

Used with [rabbithook-client] to put together a build pipeline.
Build docker images after pushing to a Github repo, push image to Dockerhub. On Dockerhub updates, update container.

### TODO:
Build up AMQP topics to be more descriptive and easier to route
Integrate TravisCI

https://www.npmjs.com/package/travisci-webhook/
https://github.com/chrisjaure/travisci-webhook-handler
