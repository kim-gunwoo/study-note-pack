FROM node:latest

WORKDIR /Users/gun/Desktop

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 8000
CMD ["node","server.js"]