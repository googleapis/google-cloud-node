import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

# Run the gapic generator
gapic = gcp.GAPICBazel()
version = 'v1'
library = gapic.node_library('container', version, proto_path=f'google/container/{version}')
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.ts'],
)

# Copy templated files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=['v1'], default_version='v1')
s.copy(templates)

node.postprocess_gapic_library()
