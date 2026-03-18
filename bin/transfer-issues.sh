#!/bin/bash

# Usage: ./transfer_issues.sh source-owner/repo dest-owner/repo label
SOURCE_REPO=$1
DEST_REPO=$2
LABEL=$3

if [ -z "$SOURCE_REPO" ] || [ -z "$DEST_REPO" ] || [ -z "$LABEL" ]; then
    echo "Usage: $0 <source-owner/repo> <dest-owner/repo> <label>"
    exit 1
fi




# Create the label if it doesn't exist
echo "Checking for label '$LABEL' in $DEST_REPO..."
gh label list -R "$DEST_REPO" | grep -q -F "$LABEL" || gh label create "$LABEL" -R "$DEST_REPO" --description "Issues transferred from another repository"

echo "Fetching issues from $SOURCE_REPO..."

# Get list of open issues (numbers only)
ISSUE_NUMBERS=$(gh issue list -R "$SOURCE_REPO" --state open --json number --jq '.[].number')

for NUMBER in $ISSUE_NUMBERS; do
    echo "Processing Issue #$NUMBER..."

    TRANSFER_OUTPUT=$(gh issue transfer "$NUMBER" -R "$SOURCE_REPO" "$DEST_REPO")
    NEW_ISSUE_NUMBER=$(echo "$TRANSFER_OUTPUT" | grep -o -E '\/issues\/[0-9]+' | tail -1 | grep -o -E '[0-9]+')

    if [ -z "$NEW_ISSUE_NUMBER" ]; then
        echo "Error: Could not determine new issue number after transfer for Issue #$NUMBER. Skipping labeling."
        echo "$TRANSFER_OUTPUT"
        continue
    fi

    echo "Issue #$NUMBER transferred to $DEST_REPO as #$NEW_ISSUE_NUMBER. Adding label '$LABEL'..."
    gh issue edit "$NEW_ISSUE_NUMBER" -R "$DEST_REPO" --add-label "$LABEL"
    echo "Successfully transferred and labeled Issue #$NUMBER (new #$NEW_ISSUE_NUMBER) with '$LABEL'"
done

echo "Transfer complete."
