#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Set the default Project ID
PROJECT_ID="long-door-651"

# Function to display script usage
usage() {
  echo "Usage: $0 -l <library_name> [-p <project_id>]"
  echo "  -l  The name of the library (e.g., bigtable, spanner) [Required]"
  echo "  -p  The Google Cloud project ID [Default: long-door-651]"
  exit 1
}

# Parse command-line arguments using getopts
while getopts "l:p:h" opt; do
  case "${opt}" in
    l) LIBRARY_NAME="${OPTARG}" ;;
    p) PROJECT_ID="${OPTARG}" ;;
    h) usage ;;
    *) usage ;;
  esac
done

# Validate that the required library name was provided
if [[ -z "${LIBRARY_NAME}" ]]; then
  echo "Error: Library name (-l) is required."
  usage
fi

echo "Creating Cloud Build trigger for '${LIBRARY_NAME}' in project '${PROJECT_ID}'..."

# Execute the gcloud command with variable substitutions
gcloud builds triggers create github \
  --project="${PROJECT_ID}" \
  --name="${LIBRARY_NAME}-system-tests" \
  --region="global" \
  --description="CI build trigger for ${LIBRARY_NAME} system tests" \
  --repo-owner="googleapis" \
  --repo-name="google-cloud-node" \
  --pull-request-pattern="^main$" \
  --comment-control="COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY" \
  --included-files="handwritten/${LIBRARY_NAME}/**" \
  --build-config="handwritten/${LIBRARY_NAME}/cloudbuild.yaml"

echo "Trigger creation command executed."
