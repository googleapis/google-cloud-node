import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

gapic = gcp.GAPICBazel()
version = 'v1'
v1_library = gapic.node_library('datastore', version, proto_path=f'google/datastore/{version}')

# Copy everything except for top level index, package.json, and README.md
s.copy(
    v1_library,
    excludes=['package.json', 'README.md', 'src/index.ts', 'src/v1/index.ts'])

adminv1_library = gapic.node_library('datastore-admin', version, proto_path=f'google/datastore/admin/{version}')

# copy over the protos, but leave out the skeleton stuff
s.copy(
    adminv1_library,
    excludes=['package.json', 'README.md', 'src/index.ts', 'src/v1/index.ts', 'tsconfig.json', 'tslint.json',
              'system-test/fixtures/sample/src/index.ts', 'system-test/fixtures/sample/src/index.js',
              '.jsdoc.js', 'webpack.config.js']
)

system_test_files = ['system-test/fixtures/sample/src/index.ts', 'system-test/fixtures/sample/src/index.js']
for file in system_test_files:
    s.replace(file, 'DatastoreClient', 'Datastore')
    s.replace(file, 'client.close', '// client.close'); # does not work with the manual layer
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location="build/src")
s.copy(templates)

node.postprocess_gapic_library()
