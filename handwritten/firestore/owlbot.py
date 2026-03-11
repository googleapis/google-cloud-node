import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node_mono_repo as node
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
    v1beta1_library = staging / "firestore" / "v1beta1"
    v1_library = staging / "firestore" / "v1"

    _tracked_paths.add(v1_admin_library)
    _tracked_paths.add(v1beta1_library)
    _tracked_paths.add(v1_library)

    # skip index, protos, package.json, and README.md
    s.copy(v1_admin_library, "handwritten/firestore/dev", excludes=["package.json", "README.md", "src/index.ts", "src/v1/index.ts",
        "tsconfig.json", "linkinator.config.json", "webpack.config.js"])
    s.copy(v1beta1_library, "handwritten/firestore/dev", excludes=["package.json", "README.md", "src/index.ts", "src/v1beta1/index.ts",
        "tsconfig.json", "linkinator.config.json", "webpack.config.js"])
    s.copy(v1_library, "handwritten/firestore/dev", excludes=["package.json", "README.md", "src/index.ts", "src/v1/index.ts",
        "tsconfig.json", "linkinator.config.json", "webpack.config.js"])

    # Fix dropping of google-cloud-resource-header
    # See: https://github.com/googleapis/nodejs-firestore/pull/375
    s.replace(
        "handwritten/firestore/dev/src/v1beta1/firestore_client.ts",
        r"return this\.innerApiCalls\.listen\(options\);",
        "return this.innerApiCalls.listen({}, options);",
    )
    s.replace(
        "handwritten/firestore/dev/src/v1/firestore_client.ts",
        r"return this\.innerApiCalls\.listen\(options\);",
        "return this.innerApiCalls.listen({}, options);",
    )
    s.replace(
        "handwritten/firestore/dev/test/gapic_firestore_v1.ts",
        r"calledWithExactly\(undefined\)",
        "calledWithExactly({}, undefined)",
    )
    s.replace(
        "handwritten/firestore/dev/src/v1beta1/firestore_client.ts",
        r"return this\.innerApiCalls\.write\(options\);",
        "return this.innerApiCalls.write({}, options);",
    )
    s.replace(
        "handwritten/firestore/dev/src/v1/firestore_client.ts",
        r"return this\.innerApiCalls\.write\(options\);",
        "return this.innerApiCalls.write({}, options);",
    )
    s.replace(
        "handwritten/firestore/dev/test/gapic_firestore_v1.ts",
        r"calledWithExactly\(undefined\)",
        "calledWithExactly({}, undefined)",
    )

    # use the existing proto .js / .d.ts files
    s.replace(
      "handwritten/firestore/dev/src/v1/firestore_client.ts",
      r"/protos/protos'",
      "/protos/firestore_v1_proto_api'"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_v1.ts",
      r"/protos/protos'",
      "/protos/firestore_v1_proto_api'"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_v1.ts",
      r"import \* as firestoreModule from '\.\./src';",
      "import * as firestoreModule from '../src/v1';"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_v1.ts",
      r"firestoreModule\.v1",
      "firestoreModule"
    )
    s.replace(
      "handwritten/firestore/dev/src/v1/firestore_admin_client.ts",
      r"/protos/protos'",
      "/protos/firestore_admin_v1_proto_api'"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_admin_v1.ts",
      r"/protos/protos'",
      "/protos/firestore_admin_v1_proto_api'"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_admin_v1.ts",
      r"import \* as firestoreadminModule from '\.\./src';",
      "import * as firestoreadminModule from '../src/v1';"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_admin_v1.ts",
      r"firestoreadminModule\.v1",
      "firestoreadminModule"
    )
    s.replace(
      "handwritten/firestore/dev/src/v1beta1/firestore_client.ts",
      r"/protos/protos'",
      "/protos/firestore_v1beta1_proto_api'"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_v1beta1.ts",
      r"/protos/protos'",
      "/protos/firestore_v1beta1_proto_api'"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_v1beta1.ts",
      r"import \* as firestoreModule from \'../src\';",
      "import * as firestoreModule from '../src/v1beta1';"
    )
    s.replace(
      "handwritten/firestore/dev/test/gapic_firestore_v1beta1.ts",
      r"firestoreModule\.v1beta1",
      "firestoreModule"
    )
    s.replace(
       "handwritten/firestore/dev/src/v1/firestore_client.ts",
       r"\.\./\.\./protos/protos.json",
       "../../protos/v1.json"
    )
    s.replace(
       "handwritten/firestore/dev/src/v1/firestore_admin_client.ts",
       r"\.\./\.\./protos/protos.json",
       "../../protos/admin_v1.json"
    )
    s.replace(
       "handwritten/firestore/dev/src/v1beta1/firestore_client.ts",
       r"\.\./\.\./protos/protos.json",
       "../../protos/v1beta1.json"
    )
    s.replace(
       "handwritten/firestore/dev/test/gapic_firestore_v1.ts",
       r"\.\./protos/protos.json",
       "../protos/v1.json"
    )
    s.replace(
       "handwritten/firestore/dev/test/gapic_firestore_admin_v1.ts",
       r"\.\./protos/protos.json",
       "../protos/admin_v1.json"
    )
    s.replace(
       "handwritten/firestore/dev/test/gapic_firestore_v1beta1.ts",
       r"\.\./protos/protos.json",
       "../protos/v1beta1.json"
    )

    # Mark v1beta1 as deprecated
    s.replace(
      "handwritten/firestore/dev/src/v1beta1/firestore_client.ts",
      r"@class",
      "@class\n * @deprecated Use v1/firestore_client instead."
    )
    s.replace(
      "handwritten/firestore/dev/src/v1beta1/firestore_client.ts",
      r"const version",
      "// tslint:disable deprecation\n\nconst version",
      1
    )

    os.rename("handwritten/firestore/dev/.gitignore", "handwritten/firestore/.gitignore")
    os.rename("handwritten/firestore/dev/.eslintignore", "handwritten/firestore/.eslintignore")
    os.rename("handwritten/firestore/dev/.mocharc.js", "handwritten/firestore/.mocharc.js")
    os.rename("handwritten/firestore/dev/.jsdoc.js", "handwritten/firestore/.jsdoc.js")
    os.rename("handwritten/firestore/dev/.prettierrc.js", "handwritten/firestore/.prettierrc.js")
    os.unlink("handwritten/firestore/dev/.eslintrc.json")

    s.replace(".jsdoc.js", r"protos", "build/protos", 1)

    # Remove auto-generated packaging tests
    os.system('rm -rf handwritten/firestore/dev/system-test/fixtures handwritten/firestore/dev/system-test/install.ts')

    node.compile_protos_hermetic(relative_dir="handwritten/firestore")
    os.unlink('handwritten/firestore/dev/protos.js')
    os.unlink('handwritten/firestore/dev/protos.d.ts')
    os.unlink('handwritten/firestore/dev/protos.json')
    subprocess.run('handwritten/firestore/dev/protos/update.sh', shell=True)

    # Copy types into types/
    logger.debug("Running compile...")
    shell.run(["npm", "run", "compile"], cwd="handwritten/firestore", hide_output=True)
    s.copy("handwritten/firestore/build/src/v1/firestore*.d.ts", "handwritten/firestore/types/v1")
    s.copy("handwritten/firestore/build/src/v1beta1/firestore_client.d.ts", "handwritten/firestore/types/v1beta1")
    s.copy("handwritten/firestore/build/protos/firestore*.d.ts", "handwritten/firestore/types/protos")
    s.replace(
        "handwritten/firestore/types/v1/firestore_client.d.ts",
        r"../../protos",
        "../protos"
    )
    s.replace(
        "handwritten/firestore/types/v1/firestore_admin_client.d.ts",
        r"../../protos",
        "../protos"
    )
    s.replace(
        "handwritten/firestore/types/v1beta1/firestore_client.d.ts",
        r"../../protos",
        "../protos"
    )
    s.replace(
        "handwritten/firestore/types/protos/firestore_admin_v1_proto_api.d.ts",
        'import Long = require\("long"\);',
        ""
    )
    s.replace(
        "handwritten/firestore/types/protos/firestore_v1_proto_api.d.ts",
        r'import Long = require\("long"\);',
        ""
    )
    s.replace(
        "handwritten/firestore/types/protos/firestore_v1beta1_proto_api.d.ts",
        r'import Long = require\("long"\);',
        ""
    )

  finally:
    # The staging directory should never be merged into the main branch.
    shutil.rmtree(staging)


# Copy template files
common_templates = gcp.CommonTemplates()
templates = common_templates.node_mono_repo_library(relative_dir="handwritten/firestore",
    source_location="build/src", test_project="node-gcloud-ci"
)

s.copy(templates, destination="handwritten/firestore", excludes=[".eslintrc.json", ".kokoro/**/*", ".github/CODEOWNERS", "README.md"])

# Remove generated samples from veneer library:
shell.run(('rm', '-rf', 'handwritten/firestore/dev/samples/generated'), hide_output = False)

shell.run(('node', 'handwritten/firestore/scripts/license.js', 'handwritten/firestore/dev/protos'), hide_output = False)
shell.run(('node', 'handwritten/firestore/scripts/license.js', 'handwritten/firestore/types'), hide_output = False)

node.fix_hermetic(relative_dir="handwritten/firestore")  # fix formatting