# Step 1: Start from a Node.js environment
FROM node:22

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the code
COPY . .

# Step 5: Expose the port your backend uses 
EXPOSE 3501

# Step 6: Start your app
CMD ["node", "server.mjs"]
