#!/bin/sh

### Start script that is an entry point for a Docker image.

# Dump the version of the current code to stderr
echo "gapic-generator-typescript: https://github.com/googleapis/gapic-generator-typescript" 1>&2
echo "Latest commit: " 1>&2
cat /gitlog.txt 1>&2
echo 1>&2

# Change directory to the input directory.
# Make it easier to pass gRPC service config relative to it, e.g.
# --grpc-service-config google/cloud/texttospeech/v1/texttospeech_grpc_service_config.json

cd /in
gapic-generator-typescript \
  --gapic-validator_out=. \
  --common-proto-path /protos \
  -I /in \
  --output-dir /out \
  $* \
  `find /in -name '*.proto'`

exit 0
