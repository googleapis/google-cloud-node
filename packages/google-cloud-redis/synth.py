import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

# tasks has two product names, and a poorly named artman yaml
versions = ['v1beta1', 'v1']

for version in versions:
    library = gapic.node_library('redis', version)
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.js'])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

# [START fix-dead-link]
s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'https:\/\/cloud\.google\.com[\s\*]*http:\/\/(.*)[\s\*]*\)',
        r"https://\1)")

s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'toISOString\]',
        'toISOString)')
# [END fix-dead-link]

subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
