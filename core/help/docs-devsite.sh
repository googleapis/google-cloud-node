#!/bin/bash

# Usage: ./docs-devsite.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$SCRIPT_DIR/docs"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"

# Copy root README.md to getting-started.md
mkdir -p $DOCS_DIR
echo "Copying root README.md to help/docs/getting-started.md..."
cp "$ROOT_DIR/README.md" "$DOCS_DIR/getting-started.md"

# Generate toc.yaml
echo "Generating toc.yaml in $ABS_DIR..."
TOC_FILE="$DOCS_DIR/toc.yaml"

# Write the top-level structure
echo "-" > "$TOC_FILE"
echo "  uid: product-neutral-guides" >> "$TOC_FILE"
echo "  name: 'Client library help'" >> "$TOC_FILE"
echo "  items:" >> "$TOC_FILE"
echo "    -" >> "$TOC_FILE"
echo "      name: 'Getting started'" >> "$TOC_FILE"
echo "      href: getting-started.md" >> "$TOC_FILE"

# Find .md files and append to TOC
for f in $(ls "$ROOT_DIR"/docs/*.md | sort); do
  if [ -f "$f" ]; then
    filename=$(basename "$f")
    echo "Copying $filename to help/docs/$filename..."
    cp $f $DOCS_DIR
    case "$filename" in
      "authentication.md")
        name="Authentication"
        ;;
      "faq.md")
        name="FAQ"
        ;;
      "troubleshooting.md")
        name="Troubleshooting"
        ;;
      "getting-started.md")
        name="Getting Started"
        ;;
      *)
        name="${filename%.md}" # Fallback
        name="$(echo "$name" | awk '{print toupper(substr($0,1,1))substr($0,2)}')"
        ;;
    esac
    echo "    -" >> "$TOC_FILE"
    echo "      name: '$name'" >> "$TOC_FILE"
    echo "      href: $filename" >> "$TOC_FILE"
  fi
done

