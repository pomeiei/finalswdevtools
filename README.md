# Docker file ของ frontend
```bash
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
```

# Docker compose สำหรับ build
```bash
version: "3"  # optional since v1.27.0
services:
frontend:
  image: pomeiei/swdevtools-62070143-frontend:1.0.0
  build: ./front-end
```
