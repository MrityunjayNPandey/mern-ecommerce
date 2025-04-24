# Use official Node.js 14 as base image
FROM node:16.20.2-buster-slim AS builder
WORKDIR /app
RUN npm install -g esbuild
COPY package*.json ./
RUN npm install
COPY . .
RUN esbuild index.js --bundle --platform=node --outfile=dist/index.js

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist/index.js .
CMD ["node", "index.js"]
