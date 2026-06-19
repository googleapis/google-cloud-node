#!/usr/bin/env bash

set -e

usage() {
  echo "Usage: $0 -l <library_name>"
  echo "  -l  The name of the library (e.g., bigtable, spanner) [Required]"
  exit 1
}

while getopts "l:h" opt; do
  case "${opt}" in
    l) LIBRARY_NAME="${OPTARG}" ;;
    h) usage ;;
    *) usage ;;
  esac
done

if [[ -z "${LIBRARY_NAME}" ]]; then
  echo "Error: Library name (-l) is required."
  usage
fi

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Generate the cloudbuild.yaml file
"${SCRIPT_DIR}/generate-cloudbuild.sh" -l "${LIBRARY_NAME}"

# Create the build trigger
"${SCRIPT_DIR}/create_trigger.sh" -l "${LIBRARY_NAME}"
