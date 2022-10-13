#!/bin/bash
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

if [ $# -lt 2 ]
then
  echo "Usage: $0 <split-repo-name> <target-path>"
  exit 1
fi

# repo name (e.g. nodejs-asset)
SPLIT_REPO=$1
# destination directory (e.g. google-cloud-asset)
ARTIFACT_NAME=$2

rm -rf "/tmp/${SPLIT_REPO}"
git clone "git@github.com:googleapis/${SPLIT_REPO}.git" "/tmp/${SPLIT_REPO}"

cd "/tmp/${SPLIT_REPO}"

git checkout -b 'tryGrepSyntax'


# Delete everything first that's not the samples, README.md, .kokoro folder, and git folder
ls | grep -v 'samples\|README.md\|.git|.|..' | xargs rm -rf
rm -rf "/tmp/${SPLIT_REPO}/.[!.git]*"
rm -rf "/tmp/${SPLIT_REPO}/.github"
rm -rf "/tmp/${SPLIT_REPO}/.kokoro"

git checkout "/tmp/${SPLIT_REPO}/.kokoro/presubmit/node12/common.cfg"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/presubmit/node12/samples-test.cfg"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/presubmit/node12/system-test.cfg"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/presubmit/node12/test.cfg"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/common.cfg"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/populate-secrets.sh"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/trampoline.sh"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/trampoline_v2.sh"
git checkout "/tmp/${SPLIT_REPO}/.kokoro/.gitattributes"

IGNORE_README_TXT="# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an \"AS IS\" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import synthtool.languages.node as node

node.owlbot_main(templates_excludes=[
'README.md'
])"

OWLBOT_PY="/tmp/${SPLIT_REPO}/owlbot.py"

echo "$IGNORE_README_TXT" >> "$OWLBOT_PY"

SAMPLES_CFG_TXT="#!/bin/bash
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an \"AS IS\" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
set -eo pipefail
export NPM_CONFIG_PREFIX=\${HOME}/.npm-global
# Setup service account credentials.
export GOOGLE_APPLICATION_CREDENTIALS=\${KOKORO_GFILE_DIR}/service-account.json
export GCLOUD_PROJECT=long-door-651
cd \$(dirname \$0)/..
# Run a pre-test hook, if a pre-samples-test.sh is in the project
if [ -f .kokoro/pre-samples-test.sh ]; then
    set +x
    . .kokoro/pre-samples-test.sh
    set -x
fi
if [ -f samples/package.json ]; then
    # Install and link samples
    cd samples/
    npm install
    # If tests are running against main branch, configure flakybot
    # to open issues on failures:
    if [[ \$KOKORO_BUILD_ARTIFACTS_SUBDIR = *\"continuous\"* ]] || [[ \$KOKORO_BUILD_ARTIFACTS_SUBDIR = *\"nightly\"* ]]; then
      export MOCHA_REPORTER_OUTPUT=test_output_sponge_log.xml
      export MOCHA_REPORTER=xunit
      cleanup() {
        chmod +x \$KOKORO_GFILE_DIR/linux_amd64/flakybot
        \$KOKORO_GFILE_DIR/linux_amd64/flakybot
      }
      trap cleanup EXIT HUP
    fi
    npm run test
fi
# codecov combines coverage across integration and unit tests. Include
# the logic below for any environment you wish to collect coverage for:
COVERAGE_NODE=12
if npx check-node-version@3.3.0 --silent --node \$COVERAGE_NODE; then
  NYC_BIN=./node_modules/nyc/bin/nyc.js
  if [ -f \"\$NYC_BIN\" ]; then
    \$NYC_BIN report || true
  fi
  bash \$KOKORO_GFILE_DIR/codecov.sh
else
  echo \"coverage is only reported for Node \$COVERAGE_NODE\"
fi"

SYSTEM_TEST_CFG_TXT="#!/bin/bash
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the \"License\");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an \"AS IS\" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
set -eo pipefail
echo \"no-op\"
"

echo "$SAMPLES_CFG_TXT" >> "/tmp/${SPLIT_REPO}/.kokoro/samples-test.sh"
echo "$SYSTEM_TEST_CFG_TXT" >> "/tmp/${SPLIT_REPO}/.kokoro/system-test.sh"
chmod u+x "/tmp/${SPLIT_REPO}/.kokoro/samples-test.sh"
chmod u+x "/tmp/${SPLIT_REPO}/.kokoro/system-test.sh"

# Update the README
README_MD="/tmp/${SPLIT_REPO}/README.md"

echo -e "**_THIS REPOSITORY IS DEPRECATED. ALL OF ITS CONTENT AND HISTORY HAS BEEN MOVED TO [GOOGLE-CLOUD-NODE](https://github.com/googleapis/google-cloud-node/tree/main/packages/${ARTIFACT_NAME})_**\n\n$(cat $README_MD)" > "$README_MD"

git add .
git commit -m 'build: update README for deprecation notice and delete all files except samples'

git push -f --set-upstream origin tryGrepSyntax

# create pull request
if gh --help > /dev/null
then
  gh pr create --title "build: update README for deprecation notice and delete all files except samples"
else
  hub pull-request -m "build: update README for deprecation notice and delete all files except samples"
fi

rm -rf "/tmp/${SPLIT_REPO}"
