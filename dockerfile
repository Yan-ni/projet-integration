FROM node

WORKDIR /app

COPY . .

RUN cd client/ && npm install && npm run build

RUN cd server/ && npm install

WORKDIR /app/server

CMD ["npm", "start"]
