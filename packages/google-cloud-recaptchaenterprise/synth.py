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
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


# run the gapic generator
gapic = gcp.GAPICMicrogenerator()
versions = ['v1', 'v1beta1']
for version in versions:
    library = gapic.typescript_library(
        'recaptchaenterprise', version,
        generator_args={
            "grpc-service-config": f"google/cloud/recaptchaenterprise/{version}/recaptchaenterprise_grpc_service_config.json",
            "package-name": f"@google-cloud/recaptcha-enterprise",
        },
        proto_path=f'/google/cloud/recaptchaenterprise/{version}',
        extra_proto_files=['google/cloud/common_resources.proto']
    )
    s.copy(library, excludes=['package.json'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=versions, default_version='v1')
s.copy(templates)

node.postprocess_gapic_library()
