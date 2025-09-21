FROM node:22

RUN groupadd -r app && useradd -r -g app app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
