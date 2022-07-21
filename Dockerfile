FROM node:16-alpine AS builder
RUN npm i --location=global pnpm

# Install dev dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm i

# Build
COPY . .
RUN pnpm run build

FROM node:16-alpine
USER node:node
WORKDIR /app
COPY --chown=node:node --from=builder /app/build ./build
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node package.json .

# Expose
ENV PORT 5050
EXPOSE ${PORT}

# Run you fools
CMD ["node", "build"]