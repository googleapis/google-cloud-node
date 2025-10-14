#!/bin/sh
set -e

echo "Entrypoint script executed with arguments: $@"
if [ "$1" = 'generate' ]; then
  echo "Running generate command"
  node /usr/local/bin/generate.cjs
else
  exec "$@"
fi
