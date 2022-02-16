#!/bin/bash

retry() {
  for i in {1..3}; do
  [ $i == 1 ] || sleep 10  # Backing off after a failed attempt.
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
export GCLOUD_TESTS_NODEJS_PROJECT_ID="cloud-profiler-e2e"
export GCLOUD_TESTS_NODEJS_ZONE="us-east4-b"
export GOOGLE_APPLICATION_CREDENTIALS="${SERVICE_KEY}"

# Run test.
cd "system-test"

# Ensure a newer version of Go is used so it is compatible with newer libraries.
# Here we install v1.17.7 which is the current version as of when this code
# was written, following instructions from https://go.dev/doc/manage-install.
# Go modules might not be on for previous versions of Go, so we also have to
# enable the module system explicitly.
export GO111MODULE=on
go install golang.org/dl/go1.17.7
go1.17.7 download

# Initializing go modules allows our dependencies to install versions of their
# dependencies specified by their go.mod files. This reduces the likelihood of
# dependencies breaking this test.
go1.17.7 version
go1.17.7 mod init e2e
retry go1.17.7 get cloud.google.com/go/profiler/proftest@HEAD
retry go1.17.7 test -c -tags=integration .

if [ "$KOKORO_GITHUB_PULL_REQUEST_NUMBER" = "" ]; then
  ./e2e.test -commit="$COMMIT" -branch="$BRANCH" -repo="$REPO" -run_backoff_test=true
else
  ./e2e.test -commit="$COMMIT" -pr="$KOKORO_GITHUB_PULL_REQUEST_NUMBER"
fi
