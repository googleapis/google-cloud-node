#!/bin/bash
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

echo "All arguments: $@"
PACKAGE_DIR="$1"
shift
DEFAULT_VERSION="$1"
shift
TEMPLATES_EXCLUDES="$1"
shift
PKG_PATH="$1"
shift
COMPILE_PROTOS_PATH="$1"
shift
COMBINE_LIBRARIES_PATH="$1"
shift
RELEASE_LEVEL="$1"
shift
# The rest of arguments are source tars
SRCS=("$@")
# Unpack each library version if we're not in a test
if [ -z "$TEST_ENV_DESTINATION_PATH" ]; then
    mkdir "$PACKAGE_DIR" 

    for src in "${SRCS[@]}"; do
        tar -xf "$src" -C "$PACKAGE_DIR"
    done
fi

# Get full paths to refer to throughout the script given Bazel
# puts things in weird spots
echo $PACKAGE_DIR
LIBRARY_DIR=$(realpath "$PACKAGE_DIR")
echo $LIBRARY_DIR
PROCESS_LIBRARIES=$(realpath "$COMBINE_LIBRARIES_PATH")
echo $PROCESS_LIBRARIES
COMPILE_PROTOS=$(realpath "$COMPILE_PROTOS_PATH")
echo $COMPILE_PROTOS
CWD=$(pwd)

# Go into the library directory and figure out if it's an ESM
# library; if it is, then set values for later on
cd $LIBRARY_DIR
ESM_FLAG=""
DIR="src"
FLAG=""

# Check if any nested path contains esm/src
FOUND_ESM_SRC=$(find . -type d -path '*/esm/src' -print -quit 2>/dev/null)
if [ -n "$FOUND_ESM_SRC" ]; then
    ESM_FLAG="--isEsm=true"
    DIR="esm/src"
    FLAG=" --esm"
fi
echo "Library is ESM: $FOUND_ESM_SRC"

# Go back into main directory to run gapic-node-processing
cd $CWD

DESTINATION_FLAG=""
SOURCE_FLAG_FOR_README=$LIBRARY_DIR
echo "$TEST_ENV_DESTINATION_PATH"
if [[ -n "$TEST_ENV_DESTINATION_PATH" ]]; then
    rm -rf $TEST_ENV_DESTINATION_PATH
    mkdir $TEST_ENV_DESTINATION_PATH
    DESTINATION_FLAG="--destination-path $TEST_ENV_DESTINATION_PATH"
    SOURCE_FLAG_FOR_README=$TEST_ENV_DESTINATION_PATH
fi

$PROCESS_LIBRARIES combine-library --source-path $LIBRARY_DIR --default-version "$DEFAULT_VERSION" $ESM_FLAG $DESTINATION_FLAG
$PROCESS_LIBRARIES generate-readme --initial-generation true --source-path $SOURCE_FLAG_FOR_README --release-level "$RELEASE_LEVEL" --replacement-string-samples '[//]: # "samples"' --replacement-string-release-level '[//]: # "releaseLevel"' $DESTINATION_FLAG

# We're calling $COMPILE_PROTOS from the LIBRARY_DIR or else the script can't find the protos
if [[ -n "$TEST_ENV_DESTINATION_PATH" ]]; then
    cd $TEST_ENV_DESTINATION_PATH
else 
    cd $LIBRARY_DIR
fi
# Execute the common command
echo "$COMPILE_PROTOS $DIR $FLAG"
$COMPILE_PROTOS $DIR $FLAG


# Here we are removing any handwritten templates we don't want
# the generator to clobber over.
echo "EXCLUDING THE FOLLOWING TEMPLATES:"
echo "$TEMPLATES_EXCLUDES"
if [ -n "$TEMPLATES_EXCLUDES" ]; then
    echo -e "$TEMPLATES_EXCLUDES" | while read template; do
        # Added an extra check for empty lines in case of trailing newline
        if [ -n "$template" ]; then
            echo "rm -rf $template";
            rm -rf "$template";
        fi
    done
fi

cd $CWD

if [ -z "$TEST_ENV_DESTINATION_PATH" ]; then 
    # Rezip package
    tar cfz "$PKG_PATH" -C "$LIBRARY_DIR/.." "$PACKAGE_DIR"
fi
