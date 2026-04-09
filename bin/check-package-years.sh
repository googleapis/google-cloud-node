#!/bin/bash

# Copyright 2025 Google LLC
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

set -e

PACKAGES_DIR="packages"
EXIT_CODE=0

# Iterate through each package folder
for pkg in "$PACKAGES_DIR"/*; do
  if [ ! -d "$pkg" ]; then
    continue
  fi

  first_year=""
  first_file=""

  # Find all files with a Copyright year, excluding common non-source files
  # We use -l to get the list of files to avoid issues with multiple matches in one file
  # Use process substitution to avoid subshell issues with EXIT_CODE
  while IFS= read -r file; do
    if [ -z "$file" ]; then continue; fi

    # Extract the year from the first copyright line found in the file
    year=$(grep -ohE "Copyright [0-9]{4}" "$file" | head -n 1 | awk '{print $2}')
    
    if [ -n "$year" ]; then
      if [ -z "$first_year" ]; then
        first_year="$year"
        first_file="$file"
      elif [ "$year" != "$first_year" ]; then
        echo "Error: Copyright year mismatch in package: $(basename "$pkg")"
        echo "  $first_file: $first_year"
        echo "  $file: $year"
        EXIT_CODE=1
        # Stop checking this package and move to the next
        break
      fi
    fi
  done < <(grep -rlE "Copyright [0-9]{4}" "$pkg" \
    --exclude-dir=node_modules \
    --exclude-dir=.git \
    --exclude=LICENSE \
    --exclude=CHANGELOG.md \
    --exclude=package.json \
    --exclude=package-lock.json \
    --exclude=pnpm-lock.yaml \
    2>/dev/null || true)
done

if [ $EXIT_CODE -eq 0 ]; then
  echo "Success: All package copyright years match."
else
  echo "Failure: Some packages have mismatched copyright years."
fi

exit $EXIT_CODE
