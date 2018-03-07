#!/bin/bash

# Fail on any error.
set -eo pipefail

# Display commands being run.
set -x

cd github/cloud-profiler-nodejs

SERVICE_KEY="${KOKORO_KEYSTORE_DIR}/72935_cloud-profiler-e2e-service-account-key"
COMMIT=$(git rev-parse HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REPO=$(git config --get remote.origin.url)


export GCLOUD_TESTS_NODEJS_PROJECT_ID="cloud-profiler-e2e"
export GCLOUD_TESTS_NODEJS_ZONE="us-east1-a"
export GOOGLE_APPLICATION_CREDENTIALS="${SERVICE_KEY}"

# Move test to go path.
export GOPATH="$HOME/go"
mkdir -p "$GOPATH/src"
cp -R "testing" "$GOPATH/src"

# Run test.
cd "$GOPATH/src/testing"
go get -d -t ./
go test -timeout=30m -parallel=3 -run TestAgentIntegration -commit="$COMMIT" -branch="$BRANCH" -repo="$REPO"
