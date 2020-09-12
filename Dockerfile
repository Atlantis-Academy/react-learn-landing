FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY . .

RUN yarn install

COPY . .
