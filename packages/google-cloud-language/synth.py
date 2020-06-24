import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICBazel()
versions = ['v1', 'v1beta2']
for version in versions:
    library = gapic.node_library(
        'language',
        version,
    )
    s.copy(
        library,
        excludes=['package.json', 'README.md'])

# Update common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=versions, default_version='v1')
s.copy(templates)

node.postprocess_gapic_library()
