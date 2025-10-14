#!/bin/sh
set -e

if [ "$1" = 'generate' ]; then
  echo "Running generate command"
else
  exec "$@"
fi
