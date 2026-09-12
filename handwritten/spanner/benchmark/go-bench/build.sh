#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "Building standalone Go Spanner benchmark & profiling binaries..."
go mod tidy
go build -o spanner_go_bench main.go
go build -o spanner_go_profile profile.go
echo "Built ${SCRIPT_DIR}/spanner_go_bench and ${SCRIPT_DIR}/spanner_go_profile successfully."
