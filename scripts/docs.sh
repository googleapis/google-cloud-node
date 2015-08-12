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

./node_modules/.bin/dox < lib/bigquery/dataset.js > docs/json/master/bigquery/dataset.json &
./node_modules/.bin/dox < lib/bigquery/index.js > docs/json/master/bigquery/index.json &
./node_modules/.bin/dox < lib/bigquery/job.js > docs/json/master/bigquery/job.json &
./node_modules/.bin/dox < lib/bigquery/table.js > docs/json/master/bigquery/table.json &

./node_modules/.bin/dox < lib/compute/address.js > docs/json/master/compute/address.json &
./node_modules/.bin/dox < lib/compute/disk.js > docs/json/master/compute/disk.json &
./node_modules/.bin/dox < lib/compute/firewall.js > docs/json/master/compute/firewall.json &
./node_modules/.bin/dox < lib/compute/index.js > docs/json/master/compute/index.json &
./node_modules/.bin/dox < lib/compute/network.js > docs/json/master/compute/network.json &
./node_modules/.bin/dox < lib/compute/operation.js > docs/json/master/compute/operation.json &
./node_modules/.bin/dox < lib/compute/region.js > docs/json/master/compute/region.json &
./node_modules/.bin/dox < lib/compute/snapshot.js > docs/json/master/compute/snapshot.json &
./node_modules/.bin/dox < lib/compute/vm.js > docs/json/master/compute/vm.json &
./node_modules/.bin/dox < lib/compute/zone.js > docs/json/master/compute/zone.json &

./node_modules/.bin/dox < lib/dns/change.js > docs/json/master/dns/change.json &
./node_modules/.bin/dox < lib/dns/index.js > docs/json/master/dns/index.json &
./node_modules/.bin/dox < lib/dns/record.js > docs/json/master/dns/record.json &
./node_modules/.bin/dox < lib/dns/zone.js > docs/json/master/dns/zone.json &

./node_modules/.bin/dox < lib/datastore/dataset.js > docs/json/master/datastore/dataset.json &
./node_modules/.bin/dox < lib/datastore/index.js > docs/json/master/datastore/index.json &
./node_modules/.bin/dox < lib/datastore/query.js > docs/json/master/datastore/query.json &
./node_modules/.bin/dox < lib/datastore/request.js > docs/json/master/datastore/request.json &
./node_modules/.bin/dox < lib/datastore/transaction.js > docs/json/master/datastore/transaction.json &

./node_modules/.bin/dox < lib/pubsub/index.js > docs/json/master/pubsub/index.json &
./node_modules/.bin/dox < lib/pubsub/subscription.js > docs/json/master/pubsub/subscription.json &
./node_modules/.bin/dox < lib/pubsub/topic.js > docs/json/master/pubsub/topic.json &
./node_modules/.bin/dox < lib/pubsub/iam.js > docs/json/master/pubsub/iam.json &

./node_modules/.bin/dox < lib/search/index.js > docs/json/master/search/index.json &
./node_modules/.bin/dox < lib/search/index-class.js > docs/json/master/search/index-class.json &
./node_modules/.bin/dox < lib/search/document.js > docs/json/master/search/document.json &
./node_modules/.bin/dox < lib/search/field.js > docs/json/master/search/field.json &

./node_modules/.bin/dox < lib/storage/acl.js > docs/json/master/storage/acl.json &
./node_modules/.bin/dox < lib/storage/bucket.js > docs/json/master/storage/bucket.json &
./node_modules/.bin/dox < lib/storage/file.js > docs/json/master/storage/file.json &
./node_modules/.bin/dox < lib/storage/index.js > docs/json/master/storage/index.json
