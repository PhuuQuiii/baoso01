FROM node:18-alpine 

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm install -D @swc/cli @swc/core

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "dev"]
