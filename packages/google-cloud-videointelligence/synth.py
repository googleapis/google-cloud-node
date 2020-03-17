import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

gapic = gcp.GAPICMicrogenerator()
common_templates = gcp.CommonTemplates()

versions = ["v1", "v1beta2", "v1p1beta1", "v1p2beta1", "v1p3beta1"]

for version in versions:
    library = gapic.typescript_library(
        "video-intelligence",
        version,
        generator_args={
            "grpc-service-config": f"google/cloud/videointelligence/{version}/videointelligence_grpc_service_config.json",
            "package-name": f"@google-cloud/video-intelligence",
            "main-service": f"videointelligence",
        },
        proto_path=f'/google/cloud/videointelligence/{version}',
    )

    # skip index, protos, package.json, and README.md
    s.copy(library, excludes=["package.json", "README.md", "src/index.ts",
                              "smoke-test/video_intelligence_service_smoke_test.ts"])

templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

# Node.js specific cleanup
subprocess.run(["npm", "install"])
subprocess.run(["npm", "run", "fix"])
subprocess.run(['npx', 'compileProtos', 'src'])
