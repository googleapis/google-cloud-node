import synthtool as s
import synthtool.gcp as gcp
import logging
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

versions = ['v1beta']

for version in versions:
    library = gapic.node_library(
        'os-login', version,
        config_path="/google/cloud/oslogin/"
                    f"artman_oslogin_{version}.yaml")

    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.js'],
    )

#
# Node.js specific cleanup
#
subprocess.run(['npm', 'ci'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
