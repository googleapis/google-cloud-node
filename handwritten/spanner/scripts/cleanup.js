/*!
 * Copyright 2018 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {Spanner} = require('../');
const pLimit = require('p-limit');
const {describe, it} = require('mocha');
const spanner = new Spanner({projectId: process.env.GCLOUD_PROJECT});

// Delete instances that are 1 hour old.
const STALE_THRESHOLD = 60 * 60;

const CURRENT_DATE = new Date();

async function deleteStaleInstances(labelFilter) {
  const [instances] = await spanner.getInstances({});

  const filtered = instances.filter(instance => {
    return labelFilter(instance.metadata.labels);
  });

  const limit = pLimit(5);
  await Promise.all(
    filtered.map(instance =>
      limit(() =>
        setTimeout(() => {
          instance.delete();
        }, 500),
      ),
    ),
  );
}

describe('Clean up', () => {
  it('should clean up stale instances', async () => {
    // Remove instances with label { created: Date } that's older than STALE_THRESHOLD
    const labelFilter = labels => {
      if (labels.created) {
        const creationDate = new Date(labels.created * 1000);
        return (
          CURRENT_DATE.valueOf() - creationDate.valueOf() >
          STALE_THRESHOLD * 1000
        );
      }
      return false;
    };

    await deleteStaleInstances(labelFilter);
  });
});
