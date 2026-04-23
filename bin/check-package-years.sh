#!/bin/bash

# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# This script ensures that all the headers in any given folder under packages
# all have the same Copyright year in their header.

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Assume packages is a sibling of the bin directory where this script lives
# or in the current directory if run from root.
if [ -d "$SCRIPT_DIR/../packages" ]; then
  PACKAGES_DIR="$SCRIPT_DIR/../packages"
elif [ -d "$SCRIPT_DIR/packages" ]; then
  PACKAGES_DIR="$SCRIPT_DIR/packages"
else
  echo "Error: Could not find 'packages' directory."
  exit 1
fi

EXIT_CODE=0

# Iterate through each package folder
# Using find -print0 and read -d '' is the most robust way to handle any filename
while IFS= read -r -d '' pkg_path; do
  pkg=$(basename "$pkg_path")
  echo "Scanning package $pkg..."

  first_year=""
  first_file=""

  # Find all files that are likely to have copyright headers
  # This addresses the request to ensure all files in the folder have a copyright year.
  # We focus on source files and configuration files that should have headers.
  while IFS= read -r -d '' file; do
    if [ -z "$file" ]; then continue; fi

    # Extract the year from the first copyright line found in the file
    # We use grep -i to be case-insensitive. awk will exit with 0 even if no input is found.
    year=$(grep -iohE "Copyright [0-9]{4}" "$file" | head -n 1 | awk '{print $2}')

    if [ -z "$year" ]; then
      # If the file is missing a copyright year, report it
      # Note: We only report this if it's a file type we expect to have it
      echo "Error: Missing copyright year in file: $file"
      EXIT_CODE=1
      continue
    fi

    if [ -z "$first_year" ]; then
      first_year="$year"
      first_file="$file"
    elif [ "$year" != "$first_year" ]; then
      echo "Error: Copyright year mismatch in package: $pkg"
      echo "  $first_file: $first_year"
      echo "  $file: $year"
      EXIT_CODE=1
      # We don't break here to allow finding all issues in this package
    fi
  done < <(find "$pkg_path" -type f \
    \( -name "*.ts" -o -name "*.js" -o -name "*.cjs" -o -name "*.mjs" \) \
    -not -path "*/node_modules/*" \
    -not -path "*/.git/*" \
    -not -path "*/.coverage/*" \
    -not -path "*/dist/*" \
    -not -path "*/build/*" \
    -not -name "LICENSE" \
    -not -name "CHANGELOG.md" \
    -not -name "package.json" \
    -not -name "package-lock.json" \
    -not -name "pnpm-lock.yaml" \
    -print0)
done < <(find "$PACKAGES_DIR" -maxdepth 1 -mindepth 1 -type d -print0 | sort -z)

if [ $EXIT_CODE -eq 0 ]; then
  echo "Success: All package copyright years match."
else
  echo "Failure: Some packages have mismatched or missing copyright years."
fi

exit $EXIT_CODE
