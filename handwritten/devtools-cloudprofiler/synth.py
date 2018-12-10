import synthtool as s
import synthtool.gcp as gcp
import logging

common_templates = gcp.CommonTemplates()
logging.basicConfig(level=logging.DEBUG)
templates = common_templates.node_library()
s.copy(templates / ".kokoro")
