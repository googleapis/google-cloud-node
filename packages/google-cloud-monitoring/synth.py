import synthtool as s
import synthtool.gcp as gcp
import logging
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

version = 'v3'

library = gapic.node_library(
    'monitoring', version,
    config_path="/google/monitoring/"
                "artman_monitoring.yaml")

# skip index, protos, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'],
)

#
# Node.js specific cleanup
#
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
