FROM node:22-alpine

# Install necessary tools
RUN apk add --no-cache git curl vim

WORKDIR /workspace

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json
COPY package.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
