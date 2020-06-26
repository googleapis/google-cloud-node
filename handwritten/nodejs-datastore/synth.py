import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

gapic = gcp.GAPICMicrogenerator()
version = 'v1'
v1_library = gapic.typescript_library(
    'datastore', version,
    generator_args={
        "grpc-service-config": f"google/datastore/{version}/datastore_grpc_service_config.json",
        "package-name": "@google-cloud/datastore",
        "main-service": "datastore"
    },
    proto_path=f'/google/datastore/{version}',
    extra_proto_files=['google/cloud/common_resources.proto'],
)

# Copy everything except for top level index, package.json, and README.md
s.copy(
    v1_library,
    excludes=['package.json', 'README.md', 'src/index.ts'])

adminv1_library = gapic.typescript_library(
    'datastore_admin', version,
    generator_args={
        "grpc-service-config": f"google/datastore/admin/{version}/datastore_admin_grpc_service_config.json",
        "package-name": "@google-cloud/datastore",
        "main-service": "datastore"
    },
    proto_path=f'/google/datastore/admin/{version}',
    extra_proto_files=['google/cloud/common_resources.proto'],
)

# copy over the protos, but leave out the skeleton stuff
s.copy(
    adminv1_library,
    excludes=['package.json', 'README.md', 'src/index.ts', 'src/v1/index.ts', 'tsconfig.json', 'tslint.json',
              'system-test/fixtures/sample/src/index.ts', 'system-test/fixtures/sample/src/index.js']
)

system_test_files = ['system-test/fixtures/sample/src/index.ts', 'system-test/fixtures/sample/src/index.js']
for file in system_test_files:
    s.replace(file, 'DatastoreClient', 'Datastore')
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location="build/src")
s.copy(templates)

node.postprocess_gapic_library()
