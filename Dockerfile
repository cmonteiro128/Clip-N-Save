#This is a Dockerfile to run QSave in production

#Node 10 for our app
FROM node:10

# Create app directory inside the image
WORKDIR /usr/src/app

# Install app dependencies for sails
COPY package*.json ./

RUN npm install --only=production

# Bundle app source
COPY . .

#Lets move into the client folder
WORKDIR ./client

#Install yarn, since that is preferred for our create-react-app application. We can build the client app here as well
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn cache clean

#Move back to the root folder
WORKDIR /usr/src/app

#Start the application
CMD [ "npm", "start" ]

EXPOSE 1337


