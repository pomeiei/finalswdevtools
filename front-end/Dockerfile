#BUILD VUE PROJECT
FROM node:16-alpine3.14 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# CREATE NGINX SERVER
FROM nginx:1.21.6-alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html


RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz