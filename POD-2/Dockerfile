FROM node:14.3.0-alpine3.10

WORKDIR /myapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]