#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "Building Go Spanner QPS benchmark binary..."
go mod tidy
go build -o spanner_go_qps_bench qps_bench.go
echo "Built ${SCRIPT_DIR}/spanner_go_qps_bench successfully."
