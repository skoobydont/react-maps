#use node image
FROM node:13.12.0-alpine

#create app work directory
WORKDIR /

#copy json files to working directory
COPY package.json ./

#install app dependencies
RUN npm install --verbose

#bundle app source
COPY . .

#expose port 8080 and map to docker daemon
EXPOSE 3000

#run react app
CMD ["npm", "start"]