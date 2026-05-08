#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGE_REPO="${IMAGE_REPO:-us-central1-docker.pkg.dev/span-cloud-testing/gargsurbhi-images}"
SPANNER_VERSION="${SPANNER_VERSION:-8.7.1}"
PUSH="${PUSH:-true}"
PLATFORM="${PLATFORM:-linux/amd64}"
BUILD_CURRENT="${BUILD_CURRENT:-false}"
CONTAINER_TOOL="${CONTAINER_TOOL:-podman}"

# Build Node Raw gRPC image
$CONTAINER_TOOL build --platform linux/amd64 -f issue/Dockerfile.node-raw -t $IMAGE_REPO/issue-raw-grpc-node:latest .
# Build Go Raw gRPC image
$CONTAINER_TOOL build --platform linux/amd64 -f issue/Dockerfile.go-raw -t $IMAGE_REPO/issue-raw-grpc-go:latest .



"$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.go" \
  -t "$IMAGE_REPO/issue-insert-go:latest" \
  "$ROOT"

"$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node" \
  --build-arg "SPANNER_VERSION=$SPANNER_VERSION" \
  -t "$IMAGE_REPO/issue-insert-node:release-${SPANNER_VERSION}" \
  -t "$IMAGE_REPO/issue-insert-node:latest" \
  "$ROOT"

# "$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-cluster" \
#   --build-arg "SPANNER_VERSION=$SPANNER_VERSION" \
#   -t "$IMAGE_REPO/issue-insert-node-cluster:release-${SPANNER_VERSION}" \
#   "$ROOT"

# if [[ "$BUILD_CURRENT" == "true" ]]; then
#   "$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-current" \
#     -t "$IMAGE_REPO/issue-insert-node:current" \
#     "$ROOT"
#   "$CONTAINER_TOOL" build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-cluster-current" \
#     -t "$IMAGE_REPO/issue-insert-node-cluster:current" \
#     -t "$IMAGE_REPO/issue-insert-node-cluster:latest" \
#     "$ROOT"
# else
#   "$CONTAINER_TOOL" tag "$IMAGE_REPO/issue-insert-node-cluster:release-${SPANNER_VERSION}" \
#     "$IMAGE_REPO/issue-insert-node-cluster:latest"
# fi

if [[ "$PUSH" == "true" ]]; then
# Push Raw gRPC images
  $CONTAINER_TOOL push $IMAGE_REPO/issue-raw-grpc-node:latest
  $CONTAINER_TOOL push $IMAGE_REPO/issue-raw-grpc-go:latest
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-go:latest"
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node:release-${SPANNER_VERSION}"
  "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node:latest"
  # "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node-cluster:release-${SPANNER_VERSION}"
  # if [[ "$BUILD_CURRENT" == "true" ]]; then
  #   "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node:current"
  #   "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node-cluster:current"
  #   "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node-cluster:latest"
  # else
  #   "$CONTAINER_TOOL" push "$IMAGE_REPO/issue-insert-node-cluster:latest"
  # fi
fi
