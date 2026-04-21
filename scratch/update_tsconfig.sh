#!/bin/bash
# Run this script from the repository root

for dir in packages/*; do
  if [ -d "$dir" ]; then
    tsconfig="$dir/tsconfig.json"
    if [ -f "$tsconfig" ]; then
      echo "Updating $tsconfig"
      # Use sed to replace the extends path
      sed -i '' 's|"extends": "./node_modules/gts/tsconfig-google.json"|"extends": "../../node_modules/gts/tsconfig-google.json"|g' "$tsconfig"
    fi
  fi
done
