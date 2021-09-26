FROM node:14.17.6-alpine3.13

EXPOSE 3000

WORKDIR /usr/src/client

RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev python

COPY . .
RUN npm install
RUN npm run-script build

CMD npm start
