FROM node:16-alpine

#RUN apt-get update

#RUN apt-get install nano -y

RUN mkdir /home/node/app

WORKDIR  /home/node/app

COPY . .

RUN npm install

RUN npm run build

RUN npm start

EXPOSE 3000

