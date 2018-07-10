import synthtool as s
import synthtool.gcp as gcp
import logging
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

# tasks has two product names, and a poorly named artman yaml
version = 'v1'
library = gapic.node_library(
    'datastore', version, 
    config_path='/google/datastore/artman_datastore.yaml')

# Copy everything except for top level index, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'])

# Node.js specific cleanup
subprocess.run(['npm', 'ci'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
