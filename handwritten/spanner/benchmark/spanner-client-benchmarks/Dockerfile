# Stage 0: Build the Go sidecar generator
FROM golang:1.27-alpine AS generator-build
WORKDIR /build
COPY generator/ .
RUN CGO_ENABLED=0 go build -o workload-generator .

# Stage 1: Build application against latest Spanner client source
FROM node:22 AS build
WORKDIR /app

# Install git for cloning
RUN apt-get update && apt-get install -y git

# Copy build scripts and sources
COPY build_app.sh .
COPY package.json .
COPY tsconfig.json .
COPY index.ts .
COPY src/ ./src/

ARG USE_RELEASED_VERSION=false
ARG CLIENT_BRANCH=main
ARG CLIENT_REPO=""
ENV USE_RELEASED_VERSION=$USE_RELEASED_VERSION
ENV CLIENT_BRANCH=$CLIENT_BRANCH
ENV CLIENT_REPO=$CLIENT_REPO

# Run the build script (clones google-cloud-node, compiles Spanner, installs it, and compiles TypeScript)
RUN chmod +x build_app.sh && ./build_app.sh

# Stage 2: Production runtime image
FROM node:22-slim
WORKDIR /app

# Copy the compiled JavaScript from the build stage
COPY --from=build /app/dist ./dist
# Copy the node_modules (which contains the compiled local Spanner client and all dependencies)
COPY --from=build /app/node_modules ./node_modules
# Copy package.json
COPY --from=build /app/package.json ./package.json

COPY --from=generator-build /build/workload-generator /usr/local/bin/workload-generator
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh", "node", "dist/index.js"]
