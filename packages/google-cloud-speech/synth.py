import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

versions = ['v1', 'v1p1beta1']

for version in versions:
    library = gapic.node_library('speech', version)

    # skip index, protos, package.json, and README.md
    # Skip tests as they are handedited until the Generator is fixed.
    # https://github.com/googleapis/gapic-generator/issues/2129
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.js',
                  f'test/gapic-{version}.js']
    )

#
# Node.js specific cleanup
#
subprocess.run(['npm', 'ci'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
