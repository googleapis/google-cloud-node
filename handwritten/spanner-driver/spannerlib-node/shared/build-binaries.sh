#!/bin/bash
set -e

# Builds the shared library binaries and copies the binaries to OS/arch specific folders.
# Binaries can be built for linux/x64, linux/arm64, darwin/arm64, darwin/amd64, and windows/x64.
#
# Environment Variables:
# SKIP_MACOS: If set, will skip all macOS builds.
# SKIP_LINUX: If set, will skip all Linux builds.
# SKIP_WINDOWS: If set, will skip all Windows builds.
# SKIP_LINUX_CROSS_COMPILE: If set, will skip the Linux x64 cross-compile (useful when running on Linux).
# BUILD_MACOS_AMD64: If set, will build for macOS AMD64.
# BUILD_LINUX_ARM64: If set, will build for Linux ARM64.
# CC_LINUX_ARM64: Compiler for Linux ARM64 (default: aarch64-linux-gnu-gcc).

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

build_artifact() {
    local os=$1
    local arch=$2
    local output_dir=$3
    local output_file=$4
    local cc=$5

    log "Building for $os/$arch..."
    mkdir -p "$output_dir"
    
    if [ -n "$cc" ]; then
        export CC="$cc"
    else
        unset CC
    fi

    GOOS="$os" GOARCH="$arch" CGO_ENABLED=1 go build -o "$output_dir/$output_file" -buildmode=c-shared shared_lib.go
    log "Successfully built $output_dir/$output_file"
}

# Detect current OS to set smart defaults
CURRENT_OS=$(uname -s)

log "Current OS: $CURRENT_OS"
log "Skip macOS: ${SKIP_MACOS:-false}"
log "Skip Linux: ${SKIP_LINUX:-false}"
log "Skip Linux cross compile: ${SKIP_LINUX_CROSS_COMPILE:-false}"
log "Skip Windows: ${SKIP_WINDOWS:-false}"

# --- MacOS Builds ---
if [ -z "$SKIP_MACOS" ]; then
    # MacOS ARM64 (Apple Silicon)
    build_artifact "darwin" "arm64" "binaries/osx-arm64" "spannerlib.dylib" ""

    # MacOS AMD64 (Intel)
    if [ -n "$BUILD_MACOS_AMD64" ]; then
        build_artifact "darwin" "amd64" "binaries/osx-x64" "spannerlib.dylib" ""
    fi
fi

# --- Linux Builds ---
if [ -z "$SKIP_LINUX" ] || [ -z "$SKIP_LINUX_CROSS_COMPILE" ]; then
    # Linux x64
    # Logic: If we are on Linux, we prefer native build. 
    # If we are NOT on Linux (e.g. Mac), we try cross-compile unless skipped.
    
    if [ "$CURRENT_OS" == "Linux" ]; then
        # Native Linux build
        build_artifact "linux" "amd64" "binaries/linux-x64" "spannerlib.so" ""
    else
        # Cross-compile for Linux x64 (e.g. from Mac)
        if [ -z "$SKIP_LINUX_CROSS_COMPILE" ]; then
             # Check for cross-compiler
             if command -v x86_64-unknown-linux-gnu-gcc >/dev/null 2>&1; then
                build_artifact "linux" "amd64" "binaries/linux-x64" "spannerlib.so" "x86_64-unknown-linux-gnu-gcc"
             else
                log "WARNING: x86_64-unknown-linux-gnu-gcc not found. Skipping Linux x64 cross-compile."
             fi
        elif [ -z "$SKIP_LINUX" ]; then
             # Fallback to standard build if cross-compile explicitly skipped but Linux not skipped
             # This might fail if no suitable compiler is found, but we'll try.
             build_artifact "linux" "amd64" "binaries/linux-x64" "spannerlib.so" ""
        fi
    fi

    # Linux ARM64
    if [ -n "$BUILD_LINUX_ARM64" ]; then
        CC_ARM64=${CC_LINUX_ARM64:-aarch64-linux-gnu-gcc}
        if command -v "$CC_ARM64" >/dev/null 2>&1; then
            build_artifact "linux" "arm64" "binaries/linux-arm64" "spannerlib.so" "$CC_ARM64"
        else
             log "WARNING: $CC_ARM64 not found. Skipping Linux ARM64 build."
        fi
    fi
fi

# --- Windows Builds ---
if [ -z "$SKIP_WINDOWS" ]; then
    # Windows x64
    CC_WIN="x86_64-w64-mingw32-gcc"
    
    # If running on Windows (Git Bash/MSYS2), we might not need the cross-compiler prefix or it might be different.
    # But usually 'gcc' on Windows targets Windows.
    if [[ "$CURRENT_OS" == *"MINGW"* ]] || [[ "$CURRENT_OS" == *"CYGWIN"* ]] || [[ "$CURRENT_OS" == *"MSYS"* ]]; then
        # Native Windows build
        build_artifact "windows" "amd64" "binaries/win-x64" "spannerlib.dll" ""
    else
        # Cross-compile for Windows
        if command -v "$CC_WIN" >/dev/null 2>&1; then
            build_artifact "windows" "amd64" "binaries/win-x64" "spannerlib.dll" "$CC_WIN"
        else
            log "WARNING: $CC_WIN not found. Skipping Windows x64 build."
        fi
    fi
fi

log "Build process completed."
