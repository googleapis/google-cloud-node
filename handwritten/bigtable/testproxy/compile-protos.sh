#!/usr/bin/env bash

# Run from the project root.
echo "Running from $(pwd)"

# If protos already exist, skip unless explicitly forced
if [ -f testproxy/protos/protos.d.ts ] && [ -f testproxy/protos/protos.js ] && [ -f testproxy/protos/protos.json ] && [ "$FORCE_COMPILE_PROTOS" != "true" ]; then
  echo "testproxy protos already exist, skipping regeneration."
  exit 0
fi

# Remove previous generated files and make sure the directory exists.
rm -f testproxy/protos/protos.d.ts testproxy/protos/protos.js testproxy/protos/protos.json
mkdir -p testproxy/protos

# Build the full protos with the proxy.
npx compileProtos src testproxy

# Move them to the testproxy.
mv protos/protos.d.ts protos/protos.js protos/protos.json testproxy/protos/
