FROM node:22-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
