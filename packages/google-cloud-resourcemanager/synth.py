import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
  package_name="@google-cloud/resource",
  repo_name="googleapis/nodejs-resource"
)
s.copy(templates)
