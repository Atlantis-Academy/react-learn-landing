FROM node:13.12.0-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
