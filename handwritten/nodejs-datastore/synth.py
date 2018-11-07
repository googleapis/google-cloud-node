import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()
version = 'v1'
library = gapic.node_library(
    'datastore', version,
    config_path='/google/datastore/artman_datastore.yaml')

# Copy everything except for top level index, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'])

# Update path discovery due to build/ dir and TypeScript conversion.
s.replace("src/v1/datastore_client.js", "../../package.json", "../../../package.json")

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location="build/src")
s.copy(templates)

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
