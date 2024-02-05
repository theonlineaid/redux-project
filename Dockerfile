FROM node:16-alpine


# Set the working directory in the container
# WORKDIR /usr/src/app

# Clear npm cache
RUN npm cache clean --force

# Remove existing node_modules
RUN rm -rf node_modules

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container
COPY . .

COPY public/ /app/public/ 
COPY src/ /app/src/ 
 
# Expose port 3000 (or the port your app runs on)
EXPOSE 3000

# Build the application
RUN npm run build

 
# Define the command to run your application
CMD [ "npm", "run", "dev" ]