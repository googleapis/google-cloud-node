// Copyright 2022 Google LLC
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

import * as uuid from 'uuid';
import {Cluster} from '../src/cluster';
import * as inst from '../src/instance';

import {Bigtable, Instance} from '../src';

export const PREFIX = 'gt-';

export function generateId(resourceType: string) {
  const newUuid = uuid.v1().substr(4, 4);
  return `${PREFIX}${resourceType}-${newUuid}-${Date.now()}`;
}

export async function reapBackups(instance: Instance) {
  try {
    const [backups] = await instance.getBackups();
    for (const backup of backups) {
      try {
        await backup.delete({timeout: 50 * 1000});
      } catch (e) {
        console.log(`Error deleting backup: ${backup.id}: ${e}`);
      }
    }
  } catch (e) {
    console.error(`Error listing backups from ${instance.name}: ${e}`);
  }
}

export async function reapInstances(
  bigtable: Bigtable,
  maxAgeMs = 15 * 60 * 1000,
) {
  try {
    const [instances] = await bigtable.getInstances();
    const testInstances = instances
      .filter(i => i.id.match(PREFIX))
      .filter(i => {
        const timeCreated = i.metadata!.labels!.time_created as {} as Date;
        // Only delete stale resources.
        const staleThreshold = new Date(Date.now() - maxAgeMs);
        return !timeCreated || timeCreated <= staleThreshold;
      });

    // need to delete backups first due to instance deletion precondition
    const deleteBackupPromises = testInstances.map(instance =>
      reapBackups(instance),
    );
    for (const backupPromise of deleteBackupPromises) {
      await backupPromise;
    }
    for (const instance of testInstances) {
      try {
        await instance.delete();
      } catch (e) {
        console.log(`Error deleting instance: ${instance.id}: ${e}`);
      }
    }
  } catch (e) {
    console.error(`Error reaping instances: ${e}`);
  }
}

export async function logActiveResources(tag: string, testName?: string) {
  const bigtable = new Bigtable();
  try {
    const [instances] = await bigtable.getInstances();
    let totalNodes = 0;
    const instanceSummaries: string[] = [];

    for (const instance of instances) {
      try {
        const [clusters] = await instance.getClusters();
        let instanceNodes = 0;
        const clusterDetails: string[] = [];

        for (const cluster of clusters) {
          const nodes = cluster.metadata?.serveNodes || 0;
          instanceNodes += nodes;
          clusterDetails.push(`${cluster.id}:${nodes}n`);
        }

        totalNodes += instanceNodes;
        instanceSummaries.push(
          `${instance.id}(${instanceNodes}n: [${clusterDetails.join(', ')}])`,
        );
      } catch (err: any) {
        instanceSummaries.push(`${instance.id}(err:${err.message || err})`);
      }
    }

    const testLabel = testName ? `"${testName}"` : 'Suite';
    console.log(
      `[RESOURCE AUDIT] [${tag}] [${testLabel}] Active Instances: ${instances.length} | Total Nodes: ${totalNodes}`,
    );
    if (instanceSummaries.length > 0) {
      console.log(`   -> Instances: ${instanceSummaries.join(', ')}`);
    }
  } catch (err: any) {
    console.log(
      `[RESOURCE AUDIT] [${tag}] Failed to query Bigtable resources: ${err.message || err}`,
    );
  }
}

export class FakeCluster extends Cluster {
  calledWith_: Array<{}>;
  constructor(...args: [inst.Instance, string]) {
    super(args[0], args[1]);
    this.calledWith_ = args;
  }
}
