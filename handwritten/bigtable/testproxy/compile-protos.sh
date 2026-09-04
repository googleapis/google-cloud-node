#!/usr/bin/env bash

# Run from the project root.
echo "Running from $(pwd)"

# Remove previous generated files and make sure the directory exists.
rm -f testproxy/protos/protos.d.ts testproxy/protos/protos.js testproxy/protos/protos.json
mkdir -p testproxy/protos

# Build the full protos with the proxy.
npx compileProtos src testproxy

# Move them to the testproxy.
mv protos/protos.d.ts protos/protos.js protos/protos.json testproxy/protos/
