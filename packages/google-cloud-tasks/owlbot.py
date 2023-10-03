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

"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.languages.node_mono_repo as node
import pathlib


def patch(library: pathlib.Path):
    s.replace(library / 'esm/src/*/cloud_tasks_client_config.json',
            '"initial_rpc_timeout_millis": 60000',
            '"initial_rpc_timeout_millis": 20000')
    s.replace(library / 'esm/src/*/cloud_tasks_client_config.json',
            '"max_rpc_timeout_millis": 60000',
            '"max_rpc_timeout_millis": 20000')


node.owlbot_main(relative_dir="packages/google-cloud-tasks",
    staging_excludes=["README.md", "package.json", 'esm/src/index.ts'],
    patch_staging=patch
)

# Add beta version GrafeasClient to export
s.replace('packages/google-cloud-tasks/esm/src/index.ts',
        r"""
import * as v2 from './v2/index.js';
const CloudTasksClient = v2.CloudTasksClient;
type CloudTasksClient = v2.CloudTasksClient;
export {v2, CloudTasksClient};
export default {v2, CloudTasksClient};
// @ts-ignore
import type * as protos from '../../protos/protos.js';
export {protos};
""",
"import * as v2 from './v2';"+
"import * as v2beta2 from './v2beta2';"+
"import * as v2beta3 from './v2beta3';"+

"const CloudTasksClient = v2.CloudTasksClient;"+
"type CloudTasksClient = v2.CloudTasksClient;"+

"export {v2, v2beta2, v2beta3, CloudTasksClient};"+
"export default {v2, v2beta2, v2beta3, CloudTasksClient};"+
"import * as protos from '../../protos/protos.js';"+
"export {protos};")
