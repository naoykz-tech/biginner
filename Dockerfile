FROM node:22-alpine

# Install necessary tools
RUN apk add --no-cache git curl

WORKDIR /workspace

# Copy package.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
