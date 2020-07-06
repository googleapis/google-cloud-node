import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

gapic = gcp.GAPICBazel()
common_templates = gcp.CommonTemplates()

versions = ["v1", "v1beta2", "v1p1beta1", "v1p2beta1", "v1p3beta1"]
default_version = "v1"

# Rearrange the default version to the last item in the array, to generate appropriate system-test
order_versions = versions.copy()
order_versions.append(order_versions.pop(
    order_versions.index(default_version)))

for version in order_versions:
    library = gapic.node_library("videointelligence", version)

    # skip index, protos, package.json, and README.md
    s.copy(library, excludes=["package.json", "README.md"])

templates = common_templates.node_library(
    source_location="build/src", versions=versions, default_version=default_version)
s.copy(templates)

node.postprocess_gapic_library()
