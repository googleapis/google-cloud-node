# Copyright 2018 Google LLC
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

import synthtool.languages.node_mono_repo as node
import synthtool as s

node.owlbot_main(relative_dir="packages/google-cloud-securitycenter",
    staging_excludes=['package.json', 'README.md'],
    templates_excludes=['.kokoro/samples-test.sh', '.kokoro/samples-test.sh']
)

s.replace("packages/google-cloud-securitycenter/protos/protos.d.ts", r"Kubernetes\.object", "Kubernetes.Object")
s.replace("packages/google-cloud-securitycenter/build/protos/protos.d.ts", r"Kubernetes\.object", "Kubernetes.Object")
