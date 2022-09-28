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
rm -rf /tmp/${SPLIT_REPO}
git clone git@github.com:googleapis/${SPLIT_REPO}.git /tmp/${SPLIT_REPO}

cd /tmp/${SPLIT_REPO}

git checkout -b 'removeOwlBotAndUpdateREADME'

IGNORE_README_TXT="# Copyright 2021 Google LLC
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
README.md'
])"

# Delete the owlbot.py, if any, and replace it with just ignoring the README 
OWLBOT_PY=/tmp/${SPLIT_REPO}/owlbot.py

rm $OWLBOT_PY

echo "$IGNORE_README_TXT" >> $OWLBOT_PY
README_MD=/tmp/${SPLIT_REPO}/README.md

# Update the README
echo -e "'**_THIS REPOSITORY IS DEPRECATED. ALL OF ITS CONTENT AND HISTORY HAS BEEN MOVED TO [GOOGLE-CLOUD-NODE](https://github.com/googleapis/google-cloud-node/tree/main/packages/${ARTIFACT_NAME})_**'\n$(cat $README_MD)" > $README_MD

# Delete the .OwlBot.yaml file
rm /tmp/${SPLIT_REPO}/.github/.OwlBot.yaml

git add .
git commit -m 'build: update README for deprecation notice and delete .OwlBot.yaml'

git push -f --set-upstream origin removeOwlBotAndUpdateREADME

gh pr create --title "build: update README for deprecation notice and delete .OwlBot.yaml"