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

for pkg in "${failed_packages[@]}"; do
  echo "----------------------------------------"
  echo "Processing package: $pkg"
  echo "----------------------------------------"
  
  # Generate ESLint output
  node packages/run-eslint-root.mjs "$pkg"
  
  # Apply baselines if output exists
  if [ -f "packages/$pkg/eslint-output.json" ]; then
    node packages/baseline-from-output.mjs "$pkg"
  else
    echo "No eslint-output.json found for $pkg (likely failed to generate)"
  fi
done
