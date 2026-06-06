FROM node:22-alpine

# Install necessary tools
RUN apk add --no-cache git curl

WORKDIR /workspace
RUN chown node:node /workspace

USER node

# Copy package.json
COPY --chown=node:node package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
