#!/bin/bash

# Usage: ./transfer_issues.sh source-owner/repo dest-owner/repo team-slug
SOURCE_REPO=$1
DEST_REPO=$2
TEAM=$3 # Optional: e.g., "my-org/engineering-team"

if [ -z "$SOURCE_REPO" ] || [ -z "$DEST_REPO" ]; then
    echo "Usage: $0 <source-owner/repo> <dest-owner/repo> [team-slug]"
    exit 1
fi

# Prepare the assignee flag if a team is provided
ASSIGNEE_FLAG=""
if [ -n "$TEAM" ]; then
    ASSIGNEE_FLAG="--assignee $TEAM"
    echo "Assigning issues to team: $TEAM"
fi

echo "Fetching issues from $SOURCE_REPO..."

# Get list of open issues (numbers only)
ISSUE_NUMBERS=$(gh issue list -R "$SOURCE_REPO" --state open --json number --jq '.[].number')

for NUMBER in $ISSUE_NUMBERS; do
    echo "Processing Issue #$NUMBER..."

    # Extract title and body
    DATA=$(gh issue view "$NUMBER" -R "$SOURCE_REPO" --json title,body)
    TITLE=$(echo "$DATA" | jq -r '.title')
    BODY=$(echo "$DATA" | jq -r '.body')

    ENHANCED_BODY=$(printf "%s\n\n---\n*Originally authored in $SOURCE_REPO as Issue #$NUMBER*")

    # Create the issue with the optional assignee flag
    gh issue create -R "$DEST_REPO" \
        --title "$TITLE" \
        --body "$ENHANCED_BODY" \
        $ASSIGNEE_FLAG
    
    echo "Successfully transferred: $TITLE"
done

echo "Transfer complete."
