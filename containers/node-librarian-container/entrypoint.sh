#!/bin/sh
set -e

# This script executes any command passed to the docker container.
# For example, `docker run my-container ls -l` will execute `ls -l`.
exec "$@"