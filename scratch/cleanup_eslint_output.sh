#!/bin/bash
# Run this script from the repository root

failed_packages=(
  "google-cloud-functions"
  "google-cloud-metastore"
  "google-cloud-notebooks"
  "google-cloud-recaptchaenterprise"
  "google-cloud-redis-cluster"
  "typeless-sample-bot"
)

for dir in packages/*; do
  if [ -d "$dir" ]; then
    pkg_name=$(basename "$dir")
    json_file="$dir/eslint-output.json"
    
    if [ -f "$json_file" ]; then
      # Check if this package is in the failed list
      is_failed=false
      for failed in "${failed_packages[@]}"; do
        if [ "$pkg_name" == "$failed" ]; then
          is_failed=true
          break
        fi
      done
      
      if [ "$is_failed" = false ]; then
        echo "Deleting $json_file"
        rm "$json_file"
      else
        echo "Keeping $json_file for investigation"
      fi
    fi
  fi
done
