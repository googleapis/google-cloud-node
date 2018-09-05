import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

# Run the gapic generator
gapic = gcp.GAPICGenerator()
version = 'v1'
library = gapic.node_library(
    'container', version,
    config_path="/google/container/"
                "artman_container.yaml")
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'],
)

# Copy templated files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
