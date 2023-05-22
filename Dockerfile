# node environment in the container
FROM node
# creates a directory app and switches to that directory
WORKDIR /app 
# copies package.json file to the /app directory
COPY package.json . 
# runs "npm install" to create node_modules for the app
RUN npm i 
# copies the source code to /app directory
COPY . .
# exposes the port to access the app from outside the container
EXPOSE 5173 
# executes npm run dev to start the server
CMD ["npm", "run", "dev"]