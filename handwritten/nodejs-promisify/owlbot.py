import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging
logging.basicConfig(level=logging.DEBUG)

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

node.postprocess_gapic_library_hermetic()
