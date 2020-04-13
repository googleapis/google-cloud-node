import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

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

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'lint'])
subprocess.run(['npm', 'run', 'compile-protos'])
