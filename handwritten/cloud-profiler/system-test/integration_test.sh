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

git config --global --add safe.directory /tmpfs/src/github/cloud-profiler-nodejs

SERVICE_KEY="${KOKORO_KEYSTORE_DIR}/72935_cloud-profiler-e2e-service-account-key"
COMMIT=$(git rev-parse HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REPO=$(git config --get remote.origin.url)
export GCLOUD_TESTS_NODEJS_PROJECT_ID="cloud-profiler-e2e"
export GCLOUD_TESTS_NODEJS_ZONE="us-east4-b"
export GOOGLE_APPLICATION_CREDENTIALS="${SERVICE_KEY}"

# Run test.
cd "system-test"

go version

# Ensure a newer version of Go is used so it is compatible with newer libraries.
# The current Go version in the VM is 1.18.4, however we explicitly set it to
# pin the Go dependency to v1.18.4 for consistency.
retry sudo apt-get install -y wget

wget https://go.dev/dl/go1.18.4.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && tar -C /usr/local -xzf go1.18.4.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin

# Initializing go modules allows our dependencies to install versions of their
# dependencies specified by their go.mod files. This reduces the likelihood of
# dependencies breaking this test.
go version
go mod init e2e
retry go get cloud.google.com/go/profiler/proftest@HEAD
retry go test -c -tags=integration .

if [ "$KOKORO_GITHUB_PULL_REQUEST_NUMBER" = "" ]; then
  ./e2e.test -commit="$COMMIT" -branch="$BRANCH" -repo="$REPO" -run_backoff_test=true
else
  ./e2e.test -commit="$COMMIT" -pr="$KOKORO_GITHUB_PULL_REQUEST_NUMBER"
fi
