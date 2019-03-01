#!/bin/bash

retry() {
  for i in {1..3}; do
    "${@}" && return 0
  done
  return 1
}

# Fail on any error.
set -eo pipefail

# Display commands being run.
set -x

cd $(dirname $0)/..

SERVICE_KEY="${KOKORO_KEYSTORE_DIR}/72935_cloud-profiler-e2e-service-account-key"
COMMIT=$(git rev-parse HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REPO=$(git config --get remote.origin.url)
RUN_ONLY_V8_CANARY_TEST="${RUN_ONLY_V8_CANARY_TEST:-false}"
echo "$RUN_ONLY_V8_CANARY_TEST"
export GCLOUD_TESTS_NODEJS_PROJECT_ID="cloud-profiler-e2e"
export GCLOUD_TESTS_NODEJS_ZONE="us-east1-b"
export GOOGLE_APPLICATION_CREDENTIALS="${SERVICE_KEY}"

# Move test to go path.
export GOPATH="$HOME/go"
mkdir -p "$GOPATH/src"
cp -R "testing" "$GOPATH/src/proftest"

# Run test.
cd "$GOPATH/src/proftest"
retry go get -t -d -tags=integration .
if [ "$KOKORO_GITHUB_PULL_REQUEST_NUMBER" = "" ]; then
  go test -timeout=30m -tags=integration -run TestAgentIntegration -commit="$COMMIT" -branch="$BRANCH" -repo="$REPO" -run_only_v8_canary_test="$RUN_ONLY_V8_CANARY_TEST"
else
  go test -timeout=30m -tags=integration -run TestAgentIntegration -commit="$COMMIT" -pr="$KOKORO_GITHUB_PULL_REQUEST_NUMBER" -run_only_v8_canary_test="$RUN_ONLY_V8_CANARY_TEST"
fi

