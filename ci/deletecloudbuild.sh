#!/bin/bash
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -eo pipefail

if [[ -z "${REF_NAME:-}" || "${REF_NAME}" == "main" || "${REF_NAME}" == "refs/heads/main" ]]; then
    echo "Skipping Cloud Build cancellation for REF_NAME='${REF_NAME:-}'"
    exit 0
fi

now=$(date -u -d "-25 min" +"%Y-%m-%dT%H:%M:%SZ")
escaped_ref_name="${REF_NAME//\\/\\\\}"
escaped_ref_name="${escaped_ref_name//\"/\\\"}"

build_ids="$(gcloud builds list \
    --project=long-door-651 \
    --format="value(id)" \
    --filter="substitutions.REF_NAME=\"${escaped_ref_name}\" AND status=\"WORKING\" AND create_time<\"${now}\"")"

while IFS= read -r line; do
    [[ -z "${line}" ]] && continue
    echo "gcloud builds cancel --project=long-door-651 ${line}"
    gcloud builds cancel --project=long-door-651 "${line}"
done <<< "${build_ids}"

