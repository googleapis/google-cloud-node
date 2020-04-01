import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location="build/src")
s.copy(templates)
