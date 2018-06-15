import synthtool as s
import synthtool.gcp as gcp
import logging
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator(private=True)

# automl has two product names, and a poorly named artman yaml
v1beta1_library = gapic._generate_code(
    'automl', 'v1beta1', 'nodejs'
)

# Copy all files except for 'README.md' and 'package.json'
s.copy(v1beta1_library / 'protos')
s.copy(v1beta1_library / 'src')
s.copy(v1beta1_library / 'test')
s.copy(v1beta1_library / 'package.json')
s.copy(v1beta1_library / 'README.md')

'''
Node.js specific cleanup
'''
# Repo Cleanup/Setup
subprocess.run(['npm', 'install'])

# Generates scaffolding, enters contributors names
subprocess.run(['npm', 'run', 'generate-scaffolding'])

# prettify and lint
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
