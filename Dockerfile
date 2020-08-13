FROM node:13.12.0-alpine
WORKDIR /app
COPY landing/app/package.json yarn.lock ./
RUN yarn install
COPY . .
