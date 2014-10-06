#!/bin/bash

# Copyright 2014 Google Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

./node_modules/.bin/dox < lib/index.js > docs/json/master/index.json &

./node_modules/.bin/dox < lib/datastore/dataset.js > docs/json/master/datastore/dataset.json &
./node_modules/.bin/dox < lib/datastore/index.js > docs/json/master/datastore/index.json &
./node_modules/.bin/dox < lib/datastore/query.js > docs/json/master/datastore/query.json &
./node_modules/.bin/dox < lib/datastore/request.js > docs/json/master/datastore/request.json &
./node_modules/.bin/dox < lib/datastore/transaction.js > docs/json/master/datastore/transaction.json &

./node_modules/.bin/dox < lib/pubsub/index.js > docs/json/master/pubsub/index.json &
./node_modules/.bin/dox < lib/pubsub/subscription.js > docs/json/master/pubsub/subscription.json &
./node_modules/.bin/dox < lib/pubsub/topic.js > docs/json/master/pubsub/topic.json &

./node_modules/.bin/dox < lib/storage/index.js > docs/json/master/storage/index.json
