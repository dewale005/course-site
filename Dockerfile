FROM node:12-alpine
LABEL olagunju adewale

ENV NODE_VERSION 12.8.0

COPY ./package.json /package.json
RUN npm i --save

RUN mkdir /src
WORKDIR /src
COPY . /src

EXPOSE 3000

RUN adduser -D adewale
USER adewale

