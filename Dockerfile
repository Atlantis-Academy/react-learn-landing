FROM node:14-alpine

WORKDIR /app

COPY . /app
RUN yarn install
RUN yarn run lerna:link


CMD "yarn" "run" "landing:dev"
