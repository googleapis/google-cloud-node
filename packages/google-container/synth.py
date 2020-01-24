import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

# Run the gapic generator
gapic = gcp.GAPICMicrogenerator()
version = 'v1'
library = gapic.typescript_library(
    'container',
    generator_args={
            "grpc-service-config": f"google/container/{version}/container_grpc_service_config.json",
            "package-name": f"@google-cloud/container"
            },
            proto_path=f'/google/container/{version}',
            version=version)
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.ts'],
)

# Copy templated files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

# fix broken doc links

s.replace("src/v1/doc/google/container/v1/doc_cluster_service.js",
        "https:\/\/cloud\.google\.com\/kubernetes-engine\/docs\/reference\/rest\/v1\/projects\.zones\.clusters\.nodePool",
        "https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.zones.clusters.nodePools#resource-nodepool")

s.replace('src/v1/*.ts',
        '/compute/docs/zones',
        'https://cloud.google.com/compute/docs/regions-zones/')

s.replace('src/v1/*.ts',
        '/compute/docs/networks-and-firewalls',
        'https://cloud.google.com/vpc/docs/firewalls')

s.replace('src/v1/*.ts',
        "/container-engine/reference/rest/v1/projects.zones.clusters",
        "https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.zones.clusters")

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'compile-protos'])
subprocess.run(['npm', 'run', 'fix'])
