FROM node:22-alpine

# Install necessary tools
RUN apk add --no-cache git curl vim

WORKDIR /workspace

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
