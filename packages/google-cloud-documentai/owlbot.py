# Copyright 2021 Google LLC
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

import os
import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import json
import logging
from pathlib import Path

node.owlbot_main()

## Note: this API only supports regional endpoints and does not support default scopes.
s.replace(f"src/*/document_*_service_client.ts",
          "servicePath !== staticMembers.servicePath && ",
          ""
         )
s.replace(f"src/*/document_*_service_client.ts",
          "and we're connecting to a non-default endpoint, set scopes just in case",
          "set scopes"
         )
s.replace(f"src/*/document_*_service_client.ts",
          r"// Set the default scopes in auth client if needed(.|\n)*?}",
          ""
         )
