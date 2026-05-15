#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGE_REPO="${IMAGE_REPO:-us-central1-docker.pkg.dev/span-cloud-testing/gargsurbhi-images}"
SPANNER_VERSION="${SPANNER_VERSION:-8.17.1}"
PUSH="${PUSH:-true}"
PLATFORM="${PLATFORM:-linux/amd64}"
CONTAINER_TOOL="${CONTAINER_TOOL:-podman}"

# Build Node Raw gRPC image
$CONTAINER_TOOL build --platform linux/amd64 -f issue/Dockerfile.node-raw -t $IMAGE_REPO/issue-raw-grpc-node:latest .
# Build Go Raw gRPC image
$CONTAINER_TOOL build --platform linux/amd64 -f issue/Dockerfile.go-raw -t $IMAGE_REPO/issue-raw-grpc-go:latest .

# Build Go image
"$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.go" \
  -t "$IMAGE_REPO/issue-insert-go:latest" \
  "$ROOT"

# Build Node image
"$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node" \
  --build-arg "SPANNER_VERSION=$SPANNER_VERSION" \
  -t "$IMAGE_REPO/issue-insert-node:release-${SPANNER_VERSION}" \
  -t "$IMAGE_REPO/issue-insert-node:latest" \
  "$ROOT"

# Build Node image with current code changes
"$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-current" \
  -t "$IMAGE_REPO/issue-insert-node:current" \
  "$ROOT"


if [[ "$PUSH" == "true" ]]; then
  $CONTAINER_TOOL push $IMAGE_REPO/issue-raw-grpc-node:latest
  $CONTAINER_TOOL push $IMAGE_REPO/issue-raw-grpc-go:latest
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-go:latest"
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node:release-${SPANNER_VERSION}"
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node:latest"
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node:current"
fi
