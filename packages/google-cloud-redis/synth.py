import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

# tasks has two product names, and a poorly named artman yaml
version = 'v1beta1'
library = gapic.node_library('redis', version)

# skip index, protos, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js',
              f'src/{version}/index.js'])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
