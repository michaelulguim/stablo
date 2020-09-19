FROM node:12-alpine

WORKDIR /www/api

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD npm run start
