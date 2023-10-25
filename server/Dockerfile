FROM node:14

WORKDIR /server

COPY package*.json ./

RUN npm install
RUN npm install node-fetch@2

COPY . .

EXPOSE 5000

CMD ["./entrypoint.sh"]