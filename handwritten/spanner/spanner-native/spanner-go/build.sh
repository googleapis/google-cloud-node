#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PARENT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$SCRIPT_DIR"

echo "=== Building Go Spanner Shared Core ==="

# 1. Check Go compiler
if ! command -v go &> /dev/null; then
    echo "ERROR: Go is not installed. Please ensure Go 1.21+ is in PATH."
    exit 1
fi

GO_VER=$(go version)
echo "Go compiler detected: $GO_VER"

# Download Go dependencies if needed
echo "Downloading Go module dependencies..."
go mod download || true

# 2. Determine OS platform
UNAME_S=$(uname -s)
echo "Platform detected: $UNAME_S"

# 3. Locate or download Node.js N-API header files
NODE_INCLUDE=""
CANDIDATE_PATHS=(
    "$(node -e 'const p = require("path"); console.log(p.resolve(process.execPath, "../../include/node"));' 2>/dev/null || true)"
    "/usr/include/node"
    "/usr/local/include/node"
    "$HOME/.cache/node-gyp/$(node -e 'console.log(process.versions.node)')/include/node"
    "/tmp/node_headers/include/node"
)

for cand in "${CANDIDATE_PATHS[@]}"; do
    if [ -n "$cand" ] && [ -f "$cand/node_api.h" ]; then
        NODE_INCLUDE="$cand"
        break
    fi
done

if [ -z "$NODE_INCLUDE" ]; then
    NODE_VERSION=$(node -v)
    echo "Node headers not found in standard system paths. Downloading headers for ${NODE_VERSION}..."
    mkdir -p /tmp/node_headers
    curl -fsSL "https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-headers.tar.gz" -o /tmp/node_headers.tar.gz
    tar -C /tmp/node_headers --strip-components=1 -xzf /tmp/node_headers.tar.gz
    NODE_INCLUDE="/tmp/node_headers/include/node"
fi

echo "Using Node include directory: $NODE_INCLUDE"

# 4. Compile Go shared library and C++ Node-API addon
if [ "$UNAME_S" = "Darwin" ]; then
    LIB_OUT="libspanner_go.dylib"
    echo "Building Go shared library for macOS ($LIB_OUT)..."
    go build -buildmode=c-shared -o "$LIB_OUT" .
    
    echo "Compiling spanner_go.node using clang++..."
    clang++ -O3 -std=c++17 -shared -fPIC -undefined dynamic_lookup \
        -DNODE_GYP_MODULE_NAME=spanner_go \
        -I"$NODE_INCLUDE" -I"$SCRIPT_DIR" \
        "$PARENT_DIR/spanner_go_napi.cc" \
        -L"$SCRIPT_DIR" -lspanner_go \
        -Wl,-rpath,@loader_path/spanner-go -Wl,-rpath,@loader_path \
        -o "$PARENT_DIR/spanner_go.node"
    
    cp "$SCRIPT_DIR/$LIB_OUT" "$PARENT_DIR/"
else
    LIB_OUT="libspanner_go.so"
    echo "Building Go shared library for Linux ($LIB_OUT)..."
    go build -buildmode=c-shared -o "$LIB_OUT" .
    
    # Ensure g++ / build-essential is used
    CXX_COMPILER="g++"
    if ! command -v g++ &> /dev/null && command -v clang++ &> /dev/null; then
        CXX_COMPILER="clang++"
    fi
    
    echo "Compiling spanner_go.node using ${CXX_COMPILER}..."
    $CXX_COMPILER -O3 -std=c++17 -shared -fPIC \
        -DNODE_GYP_MODULE_NAME=spanner_go \
        -I"$NODE_INCLUDE" -I"$SCRIPT_DIR" \
        "$PARENT_DIR/spanner_go_napi.cc" \
        -L"$SCRIPT_DIR" -lspanner_go \
        -Wl,-rpath,'$ORIGIN/spanner-go' -Wl,-rpath,'$ORIGIN' \
        -o "$PARENT_DIR/spanner_go.node"
    
    cp "$SCRIPT_DIR/$LIB_OUT" "$PARENT_DIR/"
fi

echo "=== Go Spanner Shared Core build complete ==="
