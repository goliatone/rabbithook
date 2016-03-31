rabbithook:
  build: .
  hostname: rabbithook-{{NODE_ENV}}
  command: /opt/rabbithook/node_modules/.bin/pm2 start /opt/rabbithook/bin/www --name "rabbithook" --no-daemon
  environment:
    - DEBUG={{NODE_DEBUG}}
    - NODE_ENV={{NODE_ENV}}
    - NODE_AMQP_ENDPOINT={{NODE_AMQP_ENDPOINT}}
    - NODE_AMQP_EXCHANGE=wework.{{NODE_ENV}}
  restart: always
  log_opt:
      max-size: "1g"
      max-file: "4"
  ports:
{% if NODE_ENV === 'local' %}
    - "3000:3000"
{% else %}
    - "80:3000"
{% endif %}
