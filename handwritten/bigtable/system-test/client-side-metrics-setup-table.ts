// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Bigtable} from '../src';
export async function setupBigtable(
  bigtable: Bigtable,
  columnFamilyId: string,
  instanceId: string,
  tableIds: string[],
) {
  const instance = bigtable.instance(instanceId);
  const [instanceInfo] = await instance.exists();
  while (!instanceInfo) {
    const [, operation] = await instance.create({
      clusters: {
        id: 'fake-cluster3',
        location: 'us-west1-c',
        nodes: 1,
      },
    });
    await operation.promise();
    /**
     * For whatever reason, even after waiting for an operation.promise()
     * call to complete, the instance still doesn't seem to be ready yet so
     * we do another check to ensure the instance is ready.
     */
    const [instanceInfoAgain] = await instance.exists();
    if (instanceInfoAgain) {
      break;
    }
  }
  const tables = tableIds.map(tableId => instance.table(tableId));
  for (const currentTable of tables) {
    const [tableExists] = await currentTable.exists();
    if (!tableExists) {
      await currentTable.create({families: [columnFamilyId]}); // Create column family
    } else {
      // Check if column family exists and create it if not.
      const [families] = await currentTable.getFamilies();

      if (
        !families.some((family: {id: string}) => family.id === columnFamilyId)
      ) {
        await currentTable.createFamily(columnFamilyId);
      }
    }
    // Add some data so that a firstResponseLatency is recorded.
  }
}

export async function setupBigtableWithInsert(
  bigtable: Bigtable,
  columnFamilyId: string,
  instanceId: string,
  tableIds: string[],
) {
  await setupBigtable(bigtable, columnFamilyId, instanceId, tableIds);
  const instance = bigtable.instance(instanceId);
  const tables = tableIds.map(tableId => instance.table(tableId));
  for (const currentTable of tables) {
    await currentTable.insert([
      {
        key: 'rowId',
        data: {
          [columnFamilyId]: {
            gwashington: 1,
            tjefferson: 1,
          },
        },
      },
    ]);
  }
}
