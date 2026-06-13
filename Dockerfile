FROM node:22-alpine

# Install necessary tools
RUN apk add --no-cache git curl

WORKDIR /workspace
RUN chown node:node /workspace

USER node

# Keep framework-generated files writable when Docker Compose mounts .next as a volume.
RUN mkdir -p .next

# Copy package.json
COPY --chown=node:node package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY --chown=node:node . .
EXPOSE 3000

CMD ["npm", "run", "dev"]
