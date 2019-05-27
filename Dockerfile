FROM node:8
WORKDIR /api
COPY package.json /api
RUN npm install -g nodemon
RUN npm install
ADD . /api
CMD ["node", "src/index.js"]