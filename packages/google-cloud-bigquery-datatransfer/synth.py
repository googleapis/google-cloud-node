import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICBazel()

# tasks has two product names, and a poorly named artman yaml
version = 'v1'

library = gapic.node_library('bigquery-datatransfer', version, proto_path=f'google/cloud/bigquery/datatransfer/{version}')

# skip index, protos, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md'])

# Copy over templated files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=['v1'], default_version='v1')
s.copy(templates)

node.postprocess_gapic_library()
