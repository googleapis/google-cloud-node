#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "Building Go Spanner QPS benchmark binary..."

# 1. Locate Go binary across common installation paths
GO_BIN=""
CANDIDATES=(
    "$(command -v go 2>/dev/null || true)"
    "/usr/local/go/bin/go"
    "/snap/bin/go"
    "/usr/bin/go"
    "$HOME/go/bin/go"
)

# Also check any toolchain previously downloaded by install.js
for d in /tmp/spanner-go-toolchain-*/go/bin/go; do
    if [ -f "$d" ]; then
        CANDIDATES+=("$d")
    fi
done

for cand in "${CANDIDATES[@]}"; do
    if [ -n "$cand" ] && [ -x "$cand" ]; then
        GO_BIN="$cand"
        break
    fi
done

# 2. If Go is not found, download a portable standalone toolchain to /tmp
if [ -z "$GO_BIN" ]; then
    echo "Go is not found in standard system paths ($PATH, /usr/local/go/bin)."
    ARCH="$(uname -m)"
    if [ "$ARCH" = "x86_64" ]; then
        GO_ARCH="amd64"
    elif [ "$ARCH" = "aarch64" ]; then
        GO_ARCH="arm64"
    else
        GO_ARCH="amd64"
    fi

    GO_VERSION="go1.23.4"
    TOOLCHAIN_DIR="/tmp/spanner-go-toolchain"
    mkdir -p "${TOOLCHAIN_DIR}"
    TAR_FILE="/tmp/${GO_VERSION}.linux-${GO_ARCH}.tar.gz"

    echo "Downloading ${GO_VERSION} for linux-${GO_ARCH} to ${TOOLCHAIN_DIR}..."
    if command -v curl &>/dev/null; then
        curl -fsSL "https://go.dev/dl/${GO_VERSION}.linux-${GO_ARCH}.tar.gz" -o "${TAR_FILE}"
    elif command -v wget &>/dev/null; then
        wget -q "https://go.dev/dl/${GO_VERSION}.linux-${GO_ARCH}.tar.gz" -O "${TAR_FILE}"
    else
        echo "ERROR: Neither 'go', 'curl', nor 'wget' is available."
        echo "Please install Go via: sudo apt update && sudo apt install -y golang-go"
        exit 1
    fi

    tar -C "${TOOLCHAIN_DIR}" -xzf "${TAR_FILE}"
    rm -f "${TAR_FILE}"
    GO_BIN="${TOOLCHAIN_DIR}/go/bin/go"
fi

export PATH="$(dirname "$GO_BIN"):$PATH"
echo "Using Go compiler: $("$GO_BIN" version)"

"$GO_BIN" mod tidy
"$GO_BIN" build -o spanner_go_qps_bench qps_bench.go
echo "Built ${SCRIPT_DIR}/spanner_go_qps_bench successfully."
