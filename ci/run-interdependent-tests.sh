#!/bin/bash
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

# This script is used to run tests on all of the interdependent libraries
# in this monorepo. It will:
#
# 1. Build a dependency graph of all the libraries in the monorepo
# 2. Run the tests for each library in the correct order
# 3. Make sure that there are no conflicting dependencies in the monorepo
#
# This script is meant to be run in a CI environment.

# Get the root directory of the monorepo
ROOT_DIR=${ROOT_DIR:-$(pwd)}

# Get the test type from the first argument, default to "test"
TEST_COMMAND="${1:-test}"

# An array of all the packages in the monorepo
if [ -d "$ROOT_DIR/packages/" ]; then
    PACKAGE_DIRS=$(ls -d "$ROOT_DIR/packages/"*/)
else
    PACKAGE_DIRS=()
fi

# Two arrays to hold the dependency graph
PACKAGE_NAMES=()
PACKAGE_DEPS=()
# Arrays to simulate an associative array mapping package name to its directory name
PKG_NAME_TO_DIR_MAP_KEYS=()
PKG_NAME_TO_DIR_MAP_VALUES=()

# A function to get the package name from package.json
get_package_name() {
    local package_dir=$1
    local package_json="$package_dir/package.json"
    if [ -f "$package_json" ]; then
        cat "$package_json" | jq -r '.name'
    fi
}

# A function to get the dependencies of a package
get_dependencies() {
    local package_dir=$1
    local package_json="$package_dir/package.json"
    if [ -f "$package_json" ]; then
        local dependencies=$(cat "$package_json" | jq -r '(.dependencies // {}) | keys | .[]' | tr '\n' ' ')
        local dev_dependencies=$(cat "$package_json" | jq -r '(.devDependencies // {}) | keys | .[]' | tr '\n' ' ')
        echo "$dependencies $dev_dependencies"
    fi
}

# A function to build the dependency graph
build_dependency_graph() {
    for package_dir in ${PACKAGE_DIRS[@]}; do
        package_dir=${package_dir%/}
        package_name=$(get_package_name "$package_dir")
        if [ -z "$package_name" ]; then
            echo "Warning: could not get package name from $package_dir/package.json. Skipping."
            continue
        fi
        dependencies=$(get_dependencies "$package_dir")
        PACKAGE_NAMES+=("$package_name")
        PACKAGE_DEPS+=("$dependencies")
        PKG_NAME_TO_DIR_MAP_KEYS+=("$package_name")
        PKG_NAME_TO_DIR_MAP_VALUES+=("$(basename "$package_dir")")
    done
}

# Build the dependency graph
build_dependency_graph

# A function toposort the dependency graph
toposort() {
    local -a visited
    local -a recursion_stack
    local -a sorted_packages

    for i in "${!PACKAGE_NAMES[@]}"; do
        visited[$i]=0
        recursion_stack[$i]=0
    done

    for i in "${!PACKAGE_NAMES[@]}"; do
        if [ "${visited[$i]}" -eq 0 ]; then
            toposort_util "$i"
        fi
    done

    echo "${sorted_packages[@]}"
}

toposort_util() {
    local package_index=$1
    visited[$package_index]=1
    recursion_stack[$package_index]=1

    local dependencies=${PACKAGE_DEPS[$package_index]}
    for dependency in $dependencies; do
        # We only care about dependencies that are in our monorepo
        local is_in_monorepo=0
        local dependency_index=-1
        for i in "${!PACKAGE_NAMES[@]}"; do
            if [ "${PACKAGE_NAMES[$i]}" = "$dependency" ]; then
                is_in_monorepo=1
                dependency_index=$i
                break
            fi
        done

        if [ "$is_in_monorepo" -eq 1 ]; then
            if [ "${recursion_stack[$dependency_index]}" -eq 1 ]; then
                echo "Error: cyclic dependency detected"
                exit 1
            fi
            if [ "${visited[$dependency_index]}" -eq 0 ]; then
                toposort_util "$dependency_index"
            fi
        fi
done

    recursion_stack[$package_index]=0
    sorted_packages+=("${PACKAGE_NAMES[$package_index]}")
}

# Get the sorted packages
SORTED_PACKAGES=($(toposort))

# Arrays to map package name to its tarball path
PKG_TARBALL_MAP_KEYS=()
PKG_TARBALL_MAP_VALUES=()

# Build, pack, and test all packages in a single loop
for package_name in "${SORTED_PACKAGES[@]}"; do
    package_dir_name=""
    for i in "${!PKG_NAME_TO_DIR_MAP_KEYS[@]}"; do
        if [ "${PKG_NAME_TO_DIR_MAP_KEYS[$i]}" = "$package_name" ]; then
            package_dir_name="${PKG_NAME_TO_DIR_MAP_VALUES[$i]}"
            break
        fi
    done

    if [ -z "$package_dir_name" ]; then
        echo "Warning: could not find directory for package $package_name. Skipping."
        continue
    fi

    echo "Processing $package_name..."
    cd "$ROOT_DIR/packages/$package_dir_name"

    # Install dependencies from registry first.
    npm install --ignore-scripts

    # Find monorepo dependencies and install their packed versions
    current_package_index=-1
    for i in "${!PACKAGE_NAMES[@]}"; do
        if [ "${PACKAGE_NAMES[$i]}" = "$package_name" ]; then
            current_package_index=$i
            break
        fi
    done
    
    dependencies=${PACKAGE_DEPS[$current_package_index]}
    for dependency in $dependencies; do
        # Check if the dependency is a monorepo package that has been packed
        tarball_path=""
        for i in "${!PKG_TARBALL_MAP_KEYS[@]}"; do
            if [ "${PKG_TARBALL_MAP_KEYS[$i]}" = "$dependency" ]; then
                tarball_path="${PKG_TARBALL_MAP_VALUES[$i]}"
                break
            fi
        done

        if [ -n "$tarball_path" ]; then
            echo "Installing monorepo dependency $dependency from $tarball_path"
            # Use --no-save to avoid adding the file path to package.json
            npm install "$tarball_path" --no-save
        fi
    done

    if grep -q '"compile":' package.json; then
    echo "Compiling $package_name..."
    
    # 🌟 ADDED: Explicitly delete the build directory before compilation
    rm -rf ./build
    
    tsc -p . --skipLibCheck
    fi

    # Pack the current package for downstream dependencies
    # The `npm pack` command outputs the filename of the tarball. We capture it.
    # The output might have other warnings, so we take the last line.
    tarball_filename=$(npm pack | tail -n 1)
    tarball_path="$ROOT_DIR/packages/$package_dir_name/$tarball_filename"
    PKG_TARBALL_MAP_KEYS+=("$package_name")
    PKG_TARBALL_MAP_VALUES+=("$tarball_path")
    echo "Packed $package_name to $tarball_path"

    # Run tests for this package
    echo "Running tests for $package_name with command: npm run $TEST_COMMAND"
    npm run "$TEST_COMMAND"

    cd "$ROOT_DIR"
done
