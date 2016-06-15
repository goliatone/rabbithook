FROM node:5.9.1
MAINTAINER goliatone <hello@goliatone.com>

ENV TARGET_DIR /opt/rabbithook

#Timeout to 60 seconds
RUN \
    mkdir $TARGET_DIR && \
    mkdir $TARGET_DIR/logs && \
    chmod 775 $TARGET_DIR/logs

ENV DEBIAN_FRONTEND noninteractive

WORKDIR $TARGET_DIR

ENV DEBUG rabbithook

#Fix, we npm instll every time :/ 
COPY src $TARGET_DIR
RUN npm install --quiet --production

EXPOSE 3000

CMD ["/opt/rabbithook/bin/www"]
