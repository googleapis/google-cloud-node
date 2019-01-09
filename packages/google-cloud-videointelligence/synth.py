import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()
common_templates = gcp.CommonTemplates()

versions = ["v1", "v1beta1", "v1beta2", "v1p1beta1", "v1p2beta1"]

for version in versions:
    library = gapic.node_library(
        "video-intelligence",
        version,
        config_path="/google/cloud/videointelligence/"
        f"artman_videointelligence_{version}.yaml",
    )

    # skip index, protos, package.json, and README.md
    s.copy(library, excludes=["package.json", "README.md", "src/index.js"])

#
# Generator emitted unused helper mockSimpleGrpcMethod, add a temporary
# s.replace to remove that function.
# ref: https://github.com/googleapis/gapic-generator/issues/2120
#
s.replace("test/gapic-*.js", "function mockSimpleGrpcMethod.*\n(.*\n)*?}\n", "")

templates = common_templates.node_library()
s.copy(templates)

# [START fix-dead-link]
s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'https:\/\/cloud\.google\.com[\s\*]*http:\/\/(.*)[\s\*]*\)',
        r"https://\1)")

s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'toISOString\]',
        'toISOString)')
# [END fix-dead-link]

# Node.js specific cleanup
subprocess.run(["npm", "install"])
subprocess.run(["npm", "run", "fix"])
