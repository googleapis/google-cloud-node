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

# This script verifies that all copyright headers in the packages/ directory are set to 2026.
# It excludes .proto files and common ignored directories.

PACKAGES_DIR="packages"

if [ ! -d "$PACKAGES_DIR" ]; then
  echo "Error: Could not find 'packages' directory."
  exit 1
fi

echo "Verifying copyright headers in $PACKAGES_DIR are 2026..."

EXIT_CODE=0

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

while IFS= read -r -d '' file; do
  # Find lines with "Copyright [Year]" where [Year] is NOT 2026
  # This avoids false positives from the Apache License text which uses "copyright" as a noun.
  mismatches=$(grep -iohE "Copyright [0-9]{4}" "$file" | grep -v "2026")
  
  if [ -n "$mismatches" ]; then
    echo "Error: Non-2026 copyright year found in $file:"
    echo "$mismatches"
    EXIT_CODE=1
  fi
done < <("${FIND_CMD[@]}" -print0)

if [ $EXIT_CODE -eq 0 ]; then
  echo "Success: All copyright headers are 2026."
else
  echo "Failure: Some files have incorrect copyright years."
fi

exit $EXIT_CODE
