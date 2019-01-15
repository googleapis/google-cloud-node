import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

# Run the gapic generator
gapic = gcp.GAPICGenerator()
version = 'v1'
library = gapic.node_library(
    'container', version,
    config_path="/google/container/"
                "artman_container_v1.yaml")
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'],
)

# Copy templated files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

s.replace("src/v1/doc/google/container/v1/doc_cluster_service.js",
        "<a href=\"\/compute\/docs\/resource-quotas\">resource quota<\/a>",
        r"[resource quota](https://cloud.google.com/compute/docs/resource-quotas)")

s.replace("src/v1/doc/google/container/v1/doc_cluster_service.js",
        "https:\/\/cloud\.google\.com\/kubernetes-engine\/docs\/reference\/rest\/v1\/projects\.zones\.clusters\.nodePool",
        "https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.zones.clusters.nodePools#resource-nodepool")

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
