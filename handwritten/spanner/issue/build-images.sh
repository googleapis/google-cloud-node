#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGE_REPO="${IMAGE_REPO:-us-central1-docker.pkg.dev/span-cloud-testing/irahul-images}"
SPANNER_VERSION="${SPANNER_VERSION:-8.6.0}"
PUSH="${PUSH:-true}"
PLATFORM="${PLATFORM:-linux/amd64}"
BUILD_CURRENT="${BUILD_CURRENT:-true}"

docker build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.go" -t "$IMAGE_REPO/issue-insert-go:latest" "$ROOT"

docker build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node" \
  --build-arg "SPANNER_VERSION=$SPANNER_VERSION" \
  -t "$IMAGE_REPO/issue-insert-node:release-${SPANNER_VERSION}" \
  -t "$IMAGE_REPO/issue-insert-node:latest" \
  "$ROOT"

if [[ "$BUILD_CURRENT" == "true" ]]; then
  docker build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-current" \
    -t "$IMAGE_REPO/issue-insert-node:current" \
    "$ROOT"
  docker build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-cluster-current" \
    -t "$IMAGE_REPO/issue-insert-node-cluster:current" \
    -t "$IMAGE_REPO/issue-insert-node-cluster:latest" \
    "$ROOT"
else
  docker build --platform "$PLATFORM" -f "$ROOT/issue/Dockerfile.node-cluster" \
    --build-arg "SPANNER_VERSION=$SPANNER_VERSION" \
    -t "$IMAGE_REPO/issue-insert-node-cluster:release-${SPANNER_VERSION}" \
    -t "$IMAGE_REPO/issue-insert-node-cluster:latest" \
    "$ROOT"
fi

if [[ "$PUSH" == "true" ]]; then
  docker push "$IMAGE_REPO/issue-insert-go:latest"
  docker push "$IMAGE_REPO/issue-insert-node:release-${SPANNER_VERSION}"
  docker push "$IMAGE_REPO/issue-insert-node:latest"
  if [[ "$BUILD_CURRENT" == "true" ]]; then
    docker push "$IMAGE_REPO/issue-insert-node:current"
    docker push "$IMAGE_REPO/issue-insert-node-cluster:current"
    docker push "$IMAGE_REPO/issue-insert-node-cluster:latest"
  else
    docker push "$IMAGE_REPO/issue-insert-node-cluster:release-${SPANNER_VERSION}"
    docker push "$IMAGE_REPO/issue-insert-node-cluster:latest"
  fi
fi
