# Use official Node.js LTS version
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]     

# test CI-CD
