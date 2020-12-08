FROM node:15.3.0-buster-slim

RUN apt-get update && \
    apt-get -y install vim git curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

USER node

ENV PORT 3000

EXPOSE 3000

ENTRYPOINT /bin/bash
