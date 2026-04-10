// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {BigQuery} from '@google-cloud/bigquery';

// Only delete a resource if it is older than 4 hours. That will prevent
// collisions with parallel CI test runs.
function isResourceStale(creationTime: number) {
  const windowMs = 4 * 60 * 60 * 1000;
  const now = new Date();
  const created = new Date(creationTime);
  return now.getTime() - created.getTime() >= windowMs;
}

export async function cleanupDatasets(client: BigQuery, datasetPrefix: string) {
  let [datasets] = await client.getDatasets();
  datasets = datasets.filter(dataset => dataset.id?.includes(datasetPrefix));

  for (const dataset of datasets) {
    let isDatasetStable = false;
    try {
      const [metadata] = await dataset.getMetadata();
      const creationTime = Number(metadata.creationTime);
      isDatasetStable = isResourceStale(creationTime);
    } catch (e) {
      console.log(`dataset(${dataset.id}).getMetadata() failed`);
      console.log(e);
      return;
    }
    if (isDatasetStable) {
      try {
        await dataset.delete({force: true});
      } catch (e) {
        console.log(`dataset(${dataset.id}).delete() failed`);
        console.log(e);
      }
    }
  }
}
