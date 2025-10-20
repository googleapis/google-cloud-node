#!/bin/bash
#
# A script to install dependencies for specified packages in order.

# Exit on any error.
set -eo pipefail

echo "Installing dependencies in order..."

# Define the packages to install in the desired order.
# These will be installed from the npm registry.
declare -a packages=(
    "jsdoc-fresh"
    "pack-n-play"
    "jsdoc-region-tag"
    "gcp-metadata"
)

for package in "${packages[@]}"; do
    echo "--- Installing $package ---"
    npm install --workspace="$package"
done

echo "All specified dependencies installed successfully."