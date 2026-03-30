#!/usr/bin/env bash

# Run from the project root.
echo "Running from $(pwd)"

# Remove previous generated files and make sure the directory exists.
rm -f testproxy/protos/protos.d.ts testproxy/protos/protos.js testproxy/protos/protos.json
mkdir -p testproxy/protos

# We have to move the existing main files out of the way to build the version
# with the proxy interface. The reason for this is that the standard
# compileProtos script can't currently set a destination location, and owlbot will
# just overwrite our updated protos if we do include the proxy protos
# (and realistically, we don't want it in there anyway).
#
# This whole shuffle should be removed when we add destination support to
# the compileProtos util.
mkdir tmp
mv protos/protos.* tmp/

# Build the full protos with the proxy.
npx compileProtos src testproxy

# Move them to the testproxy and put the originals back.
mv protos/protos.d.ts protos/protos.js protos/protos.json testproxy/protos/
mv tmp/* protos/
rmdir tmp
