#!/usr/bin/env bash

set -e

# ════════════════════════════════════════════════════════════════
# GOOGLE CLOUD SPANNER NODE.JS POC SETUP & EXECUTION ORCHESTRATOR
# ════════════════════════════════════════════════════════════════

echo "========================================================================"
echo "Starting Spanner Node.js Native Extension POC Orchestration"
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

# 3. Use npx to run the local @napi-rs/cli package dependency
echo "Local @napi-rs/cli dependency will be managed via npx."

# 4. Clone googleapis protos if missing
if [ ! -d "/tmp/googleapis" ]; then
  echo "Cloning googleapis Protobuf definitions to /tmp/googleapis..."
  git clone --depth=1 https://github.com/googleapis/googleapis.git /tmp/googleapis
else
  echo "/tmp/googleapis already exists, skipping clone."
fi

# 5. Navigate to the native extension workspace root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 6. Install npm dependencies (napi-rs dev-dependency, etc.)
echo "Installing Node.js dependencies..."
npm install

# 7. Build the Rust native extension with release optimizations
echo "Compiling Rust napi-rs extension in --release mode using npx..."
npx napi build --platform --release

# 8. Verify the platform-specific .node binary was produced
echo "Verifying compiled binary outputs..."
if [ ! -f "./index.js" ]; then
  echo "ERROR: napi build succeeded but failed to produce index.js entry point!"
  exit 1
fi

# Check that at least one .node file exists
NODE_BIN_EXISTS=false
for f in *.node; do
  [ -e "$f" ] && NODE_BIN_EXISTS=true && break
done

if [ "$NODE_BIN_EXISTS" = false ]; then
  echo "ERROR: No compiled .node binary was found in $(pwd)!"
  exit 1
fi
echo "Compiled .node native binary verified successfully."


# 10. Execute comparative performance benchmark
echo "Launching Spanner Performance Benchmark..."
node __test__/benchmark.js
