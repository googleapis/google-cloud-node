# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

load("@rules_gapic//:gapic.bzl", "proto_custom_library")

def typescript_gapic_library(
  name,
  src,
  deps,
  grpc_service_config = None,
  package_name = None,
  main_service = None,
  bundle_config = None,
  service_yaml = None,
  metadata = None,
  transport = None,
  diregapic = None,
  handwritten_layer = None,
  legacy_proto_load = None,
  rest_numeric_enums = None,
  mixins = None,
  format = None,
  extra_protoc_parameters = [],
  extra_protoc_file_parameters = {},
  **kwargs):

  plugin_args_dict = {}
  if package_name:
    plugin_args_dict["package-name"] = package_name
  if main_service:
    plugin_args_dict["main-service"] = main_service
  if metadata:
    plugin_args_dict["metadata"] = "true"
  if transport:
    plugin_args_dict["transport"] = transport
  if format:
    plugin_args_dict["format"] = format
  if diregapic:
    plugin_args_dict["diregapic"] = "true"
  if handwritten_layer:
    plugin_args_dict["handwritten-layer"] = "true"
  if legacy_proto_load:
    plugin_args_dict["legacy-proto-load"] = "true"
  if rest_numeric_enums:
    plugin_args_dict["rest-numeric-enums"] = "true"
  if mixins:
    plugin_args_dict["mixins"] = mixins

  file_args = {} # note: keys are filenames, values are parameter name, aligned with the prior art
  for key, value in extra_protoc_file_parameters:
    file_args[key] = value
  if grpc_service_config:
    file_args[grpc_service_config] = "grpc-service-config"
  if bundle_config:
    file_args[bundle_config] = "bundle-config"
  if service_yaml:
    file_args[service_yaml] = "service-yaml"


  plugin_args = []
  for parameter in extra_protoc_parameters:
    plugin_args.append(parameter)
  for key, value in plugin_args_dict.items():
    plugin_args.append("{}={}".format(key, value))

  output_suffix = ".srcjar"

  proto_custom_library(
    name = name,
    deps = [src],
    plugin = Label("//:protoc_plugin"),
    plugin_args = plugin_args,
    plugin_file_args = file_args,
    output_type = "typescript-gapic",
    output_suffix = output_suffix,
  )
