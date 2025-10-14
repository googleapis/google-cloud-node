#!/bin/sh
set -e

echo "Entrypoint script executed with arguments: $@"
if [ "$1" = 'generate' ]; then
  echo "Running generate command"
else
  exec "$@"
fi
