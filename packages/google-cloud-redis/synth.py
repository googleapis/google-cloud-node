import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICMicrogenerator()

# tasks has two product names, and a poorly named artman yaml
versions = ['v1beta1', 'v1']
name = 'redis'
for version in versions:
    library = gapic.typescript_library(
            name, 
            generator_args={
                "package-name": f"@google-cloud/{name}"
            },
            proto_path=f'google/cloud/{name}/{version}',
            extra_proto_files=["google/cloud/common_resources.proto"],
            version=version,
    )
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.ts'])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

# fix for broken link in docs
s.replace('src/v*/*_client.ts', '/compute/docs/', 'https://cloud.google.com/compute/docs/')

subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npx', 'compileProtos', 'src'])
