#client setup
#use node image
FROM node:13.12.0-alpine as client

#create app work directory
WORKDIR /usr/app/client/
#copy json files to working directory
COPY client/package*.json ./
#install app dependencies
RUN npm install -qy
#bundle app source
COPY client/ ./
#run react app
RUN npm run build

#setup server
FROM node:13.12.0-alpine as server
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm","start"]