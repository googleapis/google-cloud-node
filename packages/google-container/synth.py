import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()
common_templates = gcp.CommonTemplates()

version = 'v1'

library = gapic.node_library(
    'container', version,
    config_path="/google/container/"
                "artman_container.yaml")

# skip index, protos, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'],
)

templates = common_templates.node_library()
s.copy(templates)

#
# Node.js specific cleanup
#
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
