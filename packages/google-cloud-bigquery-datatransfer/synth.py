import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICMicrogenerator()

# tasks has two product names, and a poorly named artman yaml
version = 'v1'

library = gapic.typescript_library(
    'bigquerydatatransfer', version,
    generator_args={
            "grpc-service-config": f"google/cloud/bigquery/datatransfer/{version}/bigquerydatatransfer_grpc_service_config.json",
            "package-name": f"@google-cloud/bigquery-data-transfer"
            },
            proto_path=f'/google/cloud/bigquery/datatransfer/{version}',
            extra_proto_files=['google/cloud/common_resources.proto'],
            )

# skip index, protos, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.ts',
              f'src/{version}/index.ts'])

# Copy over templated files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

node.postprocess_gapic_library()
