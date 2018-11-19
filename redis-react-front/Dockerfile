FROM node:11
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]