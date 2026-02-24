import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging
import os
import subprocess
from pathlib import Path
from synthtool import _tracked_paths
import shutil
from synthtool import shell
from synthtool.log import logger

logging.basicConfig(level=logging.DEBUG)

staging = Path("owl-bot-staging")
if staging.is_dir():
  try:
    v1_admin_library = staging / "admin/v1"
    v1beta1_library = staging / "v1beta1"
    v1_library = staging / "v1"

    _tracked_paths.add(v1_admin_library)
    _tracked_paths.add(v1beta1_library)
    _tracked_paths.add(v1_library)

    # skip index, protos, package.json, and README.md
    s.copy(v1_admin_library, "dev", excludes=["package.json", "README.md", "src/index.ts", "src/v1/index.ts",
        "tsconfig.json", "linkinator.config.json", "webpack.config.js"])
    s.copy(v1beta1_library, "dev", excludes=["package.json", "README.md", "src/index.ts", "src/v1beta1/index.ts",
        "tsconfig.json", "linkinator.config.json", "webpack.config.js"])
    s.copy(v1_library, "dev", excludes=["package.json", "README.md", "src/index.ts", "src/v1/index.ts",
        "tsconfig.json", "linkinator.config.json", "webpack.config.js"])

    # Fix dropping of google-cloud-resource-header
    # See: https://github.com/googleapis/nodejs-firestore/pull/375
    s.replace(
        "dev/src/v1beta1/firestore_client.ts",
        "return this\.innerApiCalls\.listen\(options\);",
        "return this.innerApiCalls.listen({}, options);",
    )
    s.replace(
        "dev/src/v1/firestore_client.ts",
        "return this\.innerApiCalls\.listen\(options\);",
        "return this.innerApiCalls.listen({}, options);",
    )
    s.replace(
        "dev/test/gapic_firestore_v1beta1.ts",
        "calledWithExactly\(undefined\)",
        "calledWithExactly({}, undefined)",
    )
    s.replace(
        "dev/src/v1beta1/firestore_client.ts",
        "return this\.innerApiCalls\.write\(options\);",
        "return this.innerApiCalls.write({}, options);",
    )
    s.replace(
        "dev/src/v1/firestore_client.ts",
        "return this\.innerApiCalls\.write\(options\);",
        "return this.innerApiCalls.write({}, options);",
    )
    s.replace(
        "dev/test/gapic_firestore_v1.ts",
        "calledWithExactly\(undefined\)",
        "calledWithExactly({}, undefined)",
    )

    # use the existing proto .js / .d.ts files
    s.replace(
      "dev/src/v1/firestore_client.ts",
      "/protos/protos'",
      "/protos/firestore_v1_proto_api'"
    )
    s.replace(
      "dev/test/gapic_firestore_v1.ts",
      "/protos/protos'",
      "/protos/firestore_v1_proto_api'"
    )
    s.replace(
      "dev/test/gapic_firestore_v1.ts",
      "import \* as firestoreModule from '\.\./src';",
      "import * as firestoreModule from '../src/v1';"
    )
    s.replace(
      "dev/test/gapic_firestore_v1.ts",
      "firestoreModule\.v1",
      "firestoreModule"
    )
    s.replace(
      "dev/src/v1/firestore_admin_client.ts",
      "/protos/protos'",
      "/protos/firestore_admin_v1_proto_api'"
    )
    s.replace(
      "dev/test/gapic_firestore_admin_v1.ts",
      "/protos/protos'",
      "/protos/firestore_admin_v1_proto_api'"
    )
    s.replace(
      "dev/test/gapic_firestore_admin_v1.ts",
      "import \* as firestoreadminModule from '\.\./src';",
      "import * as firestoreadminModule from '../src/v1';"
    )
    s.replace(
      "dev/test/gapic_firestore_admin_v1.ts",
      "firestoreadminModule\.v1",
      "firestoreadminModule"
    )
    s.replace(
      "dev/src/v1beta1/firestore_client.ts",
      "/protos/protos'",
      "/protos/firestore_v1beta1_proto_api'"
    )
    s.replace(
      "dev/test/gapic_firestore_v1beta1.ts",
      "/protos/protos'",
      "/protos/firestore_v1beta1_proto_api'"
    )
    s.replace(
      "dev/test/gapic_firestore_v1beta1.ts",
      "import \* as firestoreModule from \'../src\';",
      "import * as firestoreModule from '../src/v1beta1';"
    )
    s.replace(
      "dev/test/gapic_firestore_v1beta1.ts",
      "firestoreModule\.v1beta1",
      "firestoreModule"
    )
    s.replace(
       "dev/src/v1/firestore_client.ts",
       "\.\./\.\./protos/protos.json",
       "../../protos/v1.json"
    )
    s.replace(
       "dev/src/v1/firestore_admin_client.ts",
       "\.\./\.\./protos/protos.json",
       "../../protos/admin_v1.json"
    )
    s.replace(
       "dev/src/v1beta1/firestore_client.ts",
       "\.\./\.\./protos/protos.json",
       "../../protos/v1beta1.json"
    )
    s.replace(
       "dev/test/gapic_firestore_v1.ts",
       "\.\./protos/protos.json",
       "../protos/v1.json"
    )
    s.replace(
       "dev/test/gapic_firestore_admin_v1.ts",
       "\.\./protos/protos.json",
       "../protos/admin_v1.json"
    )
    s.replace(
       "dev/test/gapic_firestore_v1beta1.ts",
       "\.\./protos/protos.json",
       "../protos/v1beta1.json"
    )

    # Mark v1beta1 as deprecated
    s.replace(
      "dev/src/v1beta1/firestore_client.ts",
      "@class",
      "@class\n * @deprecated Use v1/firestore_client instead."
    )
    s.replace(
      "dev/src/v1beta1/firestore_client.ts",
      "const version",
      "// tslint:disable deprecation\n\nconst version",
      1
    )

    os.rename("dev/.gitignore", ".gitignore")
    os.rename("dev/.eslintignore", ".eslintignore")
    os.rename("dev/.mocharc.js", ".mocharc.js")
    os.rename("dev/.jsdoc.js", ".jsdoc.js")
    os.rename("dev/.prettierrc.js", ".prettierrc.js")
    os.unlink("dev/.eslintrc.json")

    s.replace(".jsdoc.js", "protos", "build/protos", 1)

    # Remove auto-generated packaging tests
    os.system('rm -rf dev/system-test/fixtures dev/system-test/install.ts')

    os.chdir("dev")
    node.compile_protos()
    os.chdir("protos")
    os.unlink('protos.js')
    os.unlink('protos.d.ts')
    os.unlink('protos.json')
    subprocess.run('./update.sh', shell=True)
    os.chdir("../../")

    # Copy types into types/
    logger.debug("Running compile...")
    shell.run(["npm", "run", "compile"], hide_output=True)
    s.copy("build/src/v1/firestore*.d.ts", "types/v1")
    s.copy("build/src/v1beta1/firestore_client.d.ts", "types/v1beta1")
    s.copy("build/protos/firestore*.d.ts", "types/protos")
    s.replace(
        "types/v1/firestore_client.d.ts",
        "../../protos",
        "../protos"
    )
    s.replace(
        "types/v1/firestore_admin_client.d.ts",
        "../../protos",
        "../protos"
    )
    s.replace(
        "types/v1beta1/firestore_client.d.ts",
        "../../protos",
        "../protos"
    )
    s.replace(
        "types/protos/firestore_admin_v1_proto_api.d.ts",
        'import Long = require\("long"\);',
        ""
    )
    s.replace(
        "types/protos/firestore_v1_proto_api.d.ts",
        'import Long = require\("long"\);',
        ""
    )
    s.replace(
        "types/protos/firestore_v1beta1_proto_api.d.ts",
        'import Long = require\("long"\);',
        ""
    )

  finally:
    # The staging directory should never be merged into the main branch.
    shutil.rmtree(staging)


# Copy template files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location="build/src", test_project="node-gcloud-ci"
)

s.copy(templates, excludes=[".eslintrc.json", ".kokoro/**/*", ".github/CODEOWNERS"])

# Remove generated samples from veneer library:
shell.run(('rm', '-rf', 'dev/samples/generated'), hide_output = False)

shell.run(('node', 'scripts/license.js', 'dev/protos'), hide_output = False)
shell.run(('node', 'scripts/license.js', 'types'), hide_output = False)

node.fix()  # fix formatting


