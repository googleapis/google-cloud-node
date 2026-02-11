#!/bin/bash

# Usage: ./transfer_issues.sh source-owner/repo dest-owner/repo assignee label
SOURCE_REPO=$1
DEST_REPO=$2
LABEL=$3
ASSIGNEE=$4

if [ -z "$SOURCE_REPO" ] || [ -z "$DEST_REPO" ] || [ -z "$LABEL" ]; then
    echo "Usage: $0 <source-owner/repo> <dest-owner/repo> <label> [assignee]"
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

    # Extract title and body
    DATA=$(gh issue view "$NUMBER" -R "$SOURCE_REPO" --json title,body)
    TITLE=$(echo "$DATA" | jq -r '.title')
    BODY=$(echo "$DATA" | jq -r '.body')

    ENHANCED_BODY=$(printf "%s\n\n---\n*Originally authored in $SOURCE_REPO as Issue #$NUMBER*")

    # Create the issue with the assignee and label
    # Build arguments for gh issue create
    CREATE_ARGS=(
        -R "$DEST_REPO"
        --title "$TITLE" \
        --body "$ENHANCED_BODY" \
        --label "$LABEL" \
    )
    if [ -n "$ASSIGNEE" ]; then
        CREATE_ARGS+=(--assignee "$ASSIGNEE")
    fi

    # Create the issue
    gh issue create "${CREATE_ARGS[@]}"
        
    
    echo "Successfully transferred: $TITLE"
done

echo "Transfer complete."
