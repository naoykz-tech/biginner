FROM node:22-alpine

# Install necessary tools
RUN apk add --no-cache git curl vim

WORKDIR /workspace

# Install pnpm globally
RUN npm install -g pnpm

EXPOSE 3000

CMD ["pnpm", "dev"]
