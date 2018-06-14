import synthtool as s
import synthtool.gcp as gcp
import logging
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

# tasks has two product names, and a poorly named artman yaml
v2beta2_library = gapic._generate_code(
    'tasks', 'v2beta2', 'nodejs',
    config_path='artman_cloudtasks.yaml',
    artman_output_name='cloud-tasks-v2beta2')

# Copy all files except for 'README.md' and 'package.json'
s.copy(v2beta2_library / 'protos')
s.copy(v2beta2_library / 'src')
s.copy(v2beta2_library / 'test')


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
