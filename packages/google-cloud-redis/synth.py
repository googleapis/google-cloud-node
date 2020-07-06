import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICBazel()

# tasks has two product names, and a poorly named artman yaml
versions = ['v1', 'v1beta1']
name = 'redis'
for version in versions:
    library = gapic.node_library(name, version)
    s.copy(
        library,
        excludes=['package.json', 'README.md'])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=versions, default_version='v1')
s.copy(templates)

# fix for broken link in docs
s.replace('src/v*/*_client.ts', '/compute/docs/',
          'https://cloud.google.com/compute/docs/')

node.postprocess_gapic_library()
