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

now=$(date -u -d "-25 min" +"%Y-%m-%dT%H:%M:%SZ")
gcloud builds list --format="value(id)" --filter="substitutions.REF_NAME="$REF_NAME" AND status="WORKING" AND create_time<"$now"" | while IFS= read -r line ; do
    echo "gcloud builds cancel "$line""
    gcloud builds cancel "$line"
done
