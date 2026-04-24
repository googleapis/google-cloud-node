#!/bin/bash
# This script finds and deletes all .proto files in the packages directory.

set -e

# Get the root directory of the project (parent of bin/)
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

PACKAGES_DIR="${ROOT_DIR}/packages"

if [ ! -d "$PACKAGES_DIR" ]; then
  echo "Error: packages directory not found at $PACKAGES_DIR"
  exit 1
fi

echo "Searching for .proto files in $PACKAGES_DIR..."

# Count files before deletion
COUNT=$(find "$PACKAGES_DIR" -name "*.proto" | wc -l)

if [ "$COUNT" -eq 0 ]; then
  echo "No .proto files found."
  exit 0
fi

echo "Found $COUNT .proto files. Deleting..."

find "$PACKAGES_DIR" -name "*.proto" -delete

echo "Deletion complete."
