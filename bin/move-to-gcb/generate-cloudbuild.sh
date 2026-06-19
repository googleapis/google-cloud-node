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

# Get the project root directory
PROJECT_ROOT=$(git rev-parse --show-toplevel)

# Correctly resolve the script's directory
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
TEMPLATE_FILE="${SCRIPT_DIR}/cloudbuild.yaml.template"
OUTPUT_DIR="${PROJECT_ROOT}/handwritten/${LIBRARY_NAME}"
OUTPUT_FILE="${OUTPUT_DIR}/cloudbuild.yaml"

if [ -f "${OUTPUT_FILE}" ]; then
  echo "File ${OUTPUT_FILE} already exists."
  exit 0
fi

if [ ! -f "${TEMPLATE_FILE}" ]; then
  echo "Error: Template file not found at ${TEMPLATE_FILE}"
  exit 1
fi

# Create the directory if it doesn't exist
mkdir -p "${OUTPUT_DIR}"

# Replace placeholder and create the new YAML file
sed "s/{{LIBRARY_NAME}}/${LIBRARY_NAME}/g" "${TEMPLATE_FILE}" > "${OUTPUT_FILE}"

echo "Generated ${OUTPUT_FILE} successfully."
