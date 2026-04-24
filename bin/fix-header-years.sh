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

# This script updates all copyright headers in the packages/ directory to 2026.
# It excludes .proto files and common ignored directories.

PACKAGES_DIR="packages"

if [ ! -d "$PACKAGES_DIR" ]; then
  echo "Error: Could not find 'packages' directory."
  exit 1
fi

echo "Updating copyright headers in $PACKAGES_DIR to 2026..."

# Regex pattern to match "Copyright", optional "(c)", and any year or range of years.
# Examples: 
# Copyright 2020
# Copyright (c) 2018
# Copyright 2018-2022
# Copyright 2018, 2019
# We want to capture the space/punctuation after Copyright to preserve it.
# Note: Using [[:space:][:punct:]] might be too broad, let's stick to the plan's recommendation or similar.
# The plan suggested: Copyright([ (cC)]+)[0-9]{4}([- ,]+[0-9]{4})*

FIND_CMD=(
  find "$PACKAGES_DIR" -type f
  -not -path "*/node_modules/*"
  -not -path "*/.git/*"
  -not -path "*/.coverage/*"
  -not -path "*/dist/*"
  -not -path "*/build/*"
  -not -name "*.proto"
  -not -name "LICENSE"
  -not -name "CHANGELOG.md"
  -not -name "package.json"
  -not -name "package-lock.json"
  -not -name "pnpm-lock.yaml"
)

# Use perl for more robust regex across different platforms if needed, 
# but sed -E should work for GNU sed.
# The pattern should be applied to any line containing "Copyright".

while IFS= read -r -d '' file; do
  # Check if file contains "Copyright" before attempting to edit
  if grep -q "Copyright" "$file"; then
    # We use perl for more advanced regex support (like non-greedy matching or easier capturing)
    # The pattern matches "Copyright", then any sequence of spaces, (c), (C), 
    # then a 4-digit year, potentially followed by ranges or lists of years.
    perl -pi -e 's/(Copyright[ (cC)]+)\d{4}(?:[- ,]+\d{4})*/${1}2026/gi' "$file"
  fi
done < <("${FIND_CMD[@]}" -print0)

echo "Header update complete."
