#!/usr/bin/env bash

# Usage: -c to report coverage

while true; do
  case $1 in
    -c)
      cover=1
      ;;

    *)
      break
  esac

  shift
done

# Lint
$(npm bin)/jshint . || exit 1

# Get test/coverage command
counter=0
function run {
  C="$(npm bin)/istanbul test"
  if [ "$cover" ]; then
    C="$(npm bin)/istanbul cover --dir ./coverage/${counter}"
    ((counter++))
  fi
  ($C "$(npm bin)/_mocha" -- $* --timeout 4000 --R spec) || exit 1
}

# Run test/coverage
run test

# Conditionally publish coverage
if [ "$cover" ]; then
  $(npm bin)/istanbul report lcovonly
  ./node_modules/coveralls/bin/coveralls.js < ./coverage/lcov.info
  rm -rf ./coverage
fi

if [ -z "${TRAVIS_PULL_REQUEST}" ] || [ "${TRAVIS_PULL_REQUEST}" = "false" ]
then
  if [ -z "${GCLOUD_PROJECT}" ]; then
    echo "============================================================"
    echo "Unable to run system and e2e tests. Provide valid project id"
    echo "via GCLOUD_PROJECT and ensure auth credentials are available"
    echo "============================================================"
    exit 1
  else
    npm run system-test
  fi
fi
