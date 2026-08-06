#!/usr/bin/env bash

set -e

# ═══════════════════════════════════════════════════════════════════════════
# GOOGLE CLOUD SPANNER NODE.JS SHARED CORE BENCHMARK ORCHESTRATOR
# (NODE.JS BASELINE vs RUST SHARED CORE vs GO SHARED CORE)
# ═══════════════════════════════════════════════════════════════════════════

echo "========================================================================"
echo "Starting Spanner Shared Native Core (Rust & Go) Setup & Benchmark"
echo "========================================================================"

# 1. Check Node.js 18+ installation
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js is not installed. Node 18+ is required."
  exit 1
fi

NODE_VER=$(node -e "console.log(process.versions.node.split('.')[0])")
echo "Node.js major version detected: $NODE_VER"
if [ "$NODE_VER" -lt 18 ]; then
  echo "ERROR: Node.js version is $NODE_VER. Node 18+ is required."
  exit 1
fi

# 2. Install Rust toolchain if missing
if ! command -v rustc &> /dev/null; then
  echo "Rust compiler not detected. Installing Rust toolchain via rustup..."
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
  source "$HOME/.cargo/env"
else
  echo "Rust toolchain detected: $(rustc --version)"
fi

# 3. Install Go toolchain if missing
if ! command -v go &> /dev/null; then
  echo "Go compiler not detected. Installing Go 1.22..."
  UNAME_S=$(uname -s | tr '[:upper:]' '[:lower:]')
  UNAME_M=$(uname -m)
  if [ "$UNAME_M" = "x86_64" ]; then
    GO_ARCH="amd64"
  elif [ "$UNAME_M" = "aarch64" ] || [ "$UNAME_M" = "arm64" ]; then
    GO_ARCH="arm64"
  else
    GO_ARCH="amd64"
  fi
  GO_TARBALL="go1.22.4.${UNAME_S}-${GO_ARCH}.tar.gz"
  echo "Downloading https://go.dev/dl/${GO_TARBALL}..."
  curl -fsSL "https://go.dev/dl/${GO_TARBALL}" -o "/tmp/${GO_TARBALL}"
  mkdir -p "$HOME/.go"
  tar -C "$HOME/.go" -xzf "/tmp/${GO_TARBALL}"
  export PATH="$HOME/.go/go/bin:$PATH"
  echo "Go toolchain installed: $(go version)"
else
  echo "Go toolchain detected: $(go version)"
fi

# 3.5 Check C++ compiler
if ! command -v g++ &> /dev/null && ! command -v clang++ &> /dev/null; then
  echo "WARNING: Neither g++ nor clang++ was detected. Please ensure a C++ compiler is installed (e.g., sudo apt update && sudo apt install -y build-essential)."
fi

# 4. Clone googleapis protos if missing (used for Rust prost/tonic code generation)
if [ ! -d "/tmp/googleapis" ]; then
  echo "Cloning googleapis Protobuf definitions to /tmp/googleapis..."
  git clone --depth=1 https://github.com/googleapis/googleapis.git /tmp/googleapis
else
  echo "/tmp/googleapis already exists, skipping clone."
fi

# 5. Navigate to the native extension workspace root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 6. Install npm dependencies
echo "Installing Node.js dependencies..."
npm install

# 7. Build the Rust native extension in release mode
echo "Compiling Rust napi-rs extension in --release mode..."
npx napi build --platform --release

# 8. Build the Go shared core extension in release mode
echo "Compiling Go c-shared core and Node-API addon..."
cd "$SCRIPT_DIR/spanner-go"
./build.sh
cd "$SCRIPT_DIR"

# 9. Verify compiled binary outputs
echo "Verifying compiled binary outputs..."
if [ ! -f "./index.js" ]; then
  echo "ERROR: Rust napi build succeeded but failed to produce index.js entry point!"
  exit 1
fi

RUST_BIN_EXISTS=false
for f in *.node; do
  if [ "$f" != "spanner_go.node" ] && [ -e "$f" ]; then
    RUST_BIN_EXISTS=true
    break
  fi
done

if [ "$RUST_BIN_EXISTS" = false ]; then
  echo "ERROR: No compiled Rust .node binary was found in $(pwd)!"
  exit 1
fi
echo "Compiled Rust .node native binary verified."

if [ ! -f "./spanner_go.node" ]; then
  echo "ERROR: Go spanner_go.node binary was not found in $(pwd)!"
  exit 1
fi
echo "Compiled Go .node native binary verified."

# 10. Execute 3-way comparative performance benchmark
echo "========================================================================"
echo "Launching 3-Way Comparative Benchmark: Pure JS vs Rust Core vs Go Core"
echo "========================================================================"
node __test__/benchmark.js
