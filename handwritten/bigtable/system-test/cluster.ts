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

import {afterEach, beforeEach, describe, it} from 'mocha';
import {generateId} from './common';
import {Bigtable, ClusterInfo, Instance, Cluster} from '../src';
import assert = require('assert');
import {ClusterUtils} from '../src/utils/cluster';
import {SetClusterMetadataOptions} from '../src/cluster';

export interface ValidationError {
  message: string;
}

function isValidationError(err: any): err is ValidationError {
  return (err as ValidationError).message !== undefined;
}

describe('Cluster', () => {
  const bigtable = new Bigtable();
  let instance: Instance;

  async function checkMetadata(
    cluster: Cluster,
    compareValues: SetClusterMetadataOptions,
    isConfigDefined: boolean,
  ): Promise<void> {
    const metadata = await cluster.getMetadata({});
    const {clusterConfig, serveNodes} = metadata[0];
    assert.strictEqual(serveNodes, compareValues.nodes);
    if (clusterConfig) {
      assert.equal(isConfigDefined, true);
      assert.equal(
        clusterConfig.clusterAutoscalingConfig?.autoscalingLimits
          ?.minServeNodes,
        compareValues.minServeNodes,
      );
      assert.equal(
        clusterConfig.clusterAutoscalingConfig?.autoscalingLimits
          ?.maxServeNodes,
        compareValues.maxServeNodes,
      );
      assert.equal(
        clusterConfig.clusterAutoscalingConfig?.autoscalingTargets
          ?.cpuUtilizationPercent,
        compareValues.cpuUtilizationPercent,
      );
    } else {
      assert.equal(isConfigDefined, false);
    }
  }

  async function createNewInstance(clusters: ClusterInfo[]): Promise<void> {
    const instanceId: string = generateId('instance');
    instance = bigtable.instance(instanceId);
    const [, operation] = await instance.create({
      clusters,
      labels: {
        time_created: Date.now(),
      },
    });
    await operation.promise();
  }
  async function createStandardNewInstance(
    clusterId: string,
    nodes: number,
  ): Promise<void> {
    return await createNewInstance(standardCreationClusters(clusterId, nodes));
  }
  function standardCreationClusters(
    clusterId: string,
    nodes: number,
  ): ClusterInfo[] {
    return [
      {
        id: clusterId,
        location: 'us-east1-c',
        nodes,
      },
    ];
  }
  afterEach(async () => {
    await instance.delete();
  });
  describe('Create cluster', () => {
    describe('With manual scaling', () => {
      let clusterId: string;
      let cluster: Cluster;
      beforeEach(async () => {
        clusterId = generateId('cluster');
        await createStandardNewInstance(clusterId, 2);
        cluster = instance.cluster(clusterId);
      });
      it('should create an instance with clusters for manual scaling', async () => {
        await checkMetadata(cluster, {nodes: 2}, false);
      });
      it('should create an instance and then create a cluster for manual scaling', async () => {
        const clusterId2: string = generateId('cluster');
        const cluster2 = instance.cluster(clusterId2);
        const [, operation] = await cluster2.create({
          location: 'us-west1-c',
          nodes: 3,
        });
        await operation.promise();
        await checkMetadata(cluster2, {nodes: 3}, false);
      });
      describe('Using an incorrect configuration', () => {
        let cluster2: Cluster;
        beforeEach(async () => {
          const clusterId2: string = generateId('cluster');
          cluster2 = instance.cluster(clusterId2);
        });
        it('should throw an error when providing no cluster configuration', async () => {
          try {
            const [, operation] = await cluster2.create({
              location: 'us-west1-c',
            });
            await operation.promise();
            assert.fail();
          } catch (e) {
            assert.ok(isValidationError(e));
            assert.equal(e.message, ClusterUtils.noConfigError);
          }
        });
        it('should throw an error when providing manual and autoscaling configurations', async () => {
          try {
            const [, operation] = await cluster2.create({
              location: 'us-west1-c',
              nodes: 2,
              minServeNodes: 3,
            });
            await operation.promise();
            assert.fail();
          } catch (e) {
            assert.ok(isValidationError(e));
            assert.equal(e.message, ClusterUtils.allConfigError);
          }
        });
        it('should throw an error when missing all autoscaling configurations', async () => {
          try {
            const [, operation] = await cluster2.create({
              location: 'us-west1-c',
              minServeNodes: 3,
              cpuUtilizationPercent: 51,
            });
            await operation.promise();
            assert.fail();
          } catch (e) {
            assert.ok(isValidationError(e));
            assert.equal(e.message, ClusterUtils.incompleteConfigError);
          }
        });
      });
    });
    describe('With automatic scaling', () => {
      const minServeNodes = 2;
      const maxServeNodes = 4;
      const cpuUtilizationPercent = 50;

      const createClusterOptions = {
        location: 'us-west1-c',
        minServeNodes,
        maxServeNodes,
        cpuUtilizationPercent,
      };
      it('should create an instance with clusters for automatic scaling', async () => {
        const clusterId = generateId('cluster');
        await createNewInstance([
          Object.assign({id: clusterId}, createClusterOptions),
        ]);
        const cluster: Cluster = instance.cluster(clusterId);
        await checkMetadata(
          cluster,
          {
            ...createClusterOptions,
            nodes: minServeNodes,
          },
          true,
        );
      });
      it('should create an instance and then create clusters for automatic scaling', async () => {
        const clusterId: string = generateId('cluster');
        await createStandardNewInstance(clusterId, 2);
        const clusterId2: string = generateId('cluster');
        const cluster: Cluster = instance.cluster(clusterId2);
        const [, operation] = await cluster.create(createClusterOptions);
        await operation.promise();
        await checkMetadata(
          cluster,
          {
            ...createClusterOptions,
            nodes: minServeNodes,
          },
          true,
        );
      });
    });
  });
  describe('Update cluster', () => {
    describe('Updating manual scaling for a cluster', () => {
      let cluster: Cluster;
      const startingNodes = 2;

      beforeEach(async () => {
        const clusterId = generateId('cluster');
        await createStandardNewInstance(clusterId, startingNodes);
        cluster = instance.cluster(clusterId);
      });

      it('should change nodes for manual scaling', async () => {
        const updateNodes = 5;
        const [operation] = await cluster.setMetadata({nodes: updateNodes});
        await operation.promise();
        await checkMetadata(
          cluster,
          {
            nodes: updateNodes,
          },
          false,
        );
      });
      it('should change cluster to autoscaling', async () => {
        const minServeNodes = 3;
        const maxServeNodes = 4;
        const cpuUtilizationPercent = 50;
        const [operation] = await cluster.setMetadata({
          minServeNodes,
          maxServeNodes,
          cpuUtilizationPercent,
        });
        await operation.promise();
        await checkMetadata(
          cluster,
          {
            nodes: startingNodes,
            minServeNodes,
            maxServeNodes,
            cpuUtilizationPercent,
          },
          true,
        );
      });
      describe('Using an incorrect configuration', () => {
        it('should throw an error when providing no cluster configuration', async () => {
          try {
            const [operation] = await cluster.setMetadata({});
            await operation.promise();
            assert.fail();
          } catch (e) {
            assert.ok(isValidationError(e));
            assert.equal(e.message, ClusterUtils.noConfigError);
          }
        });
        it('should throw an error when providing manual and autoscaling configurations', async () => {
          try {
            const [operation] = await cluster.setMetadata({
              nodes: 2,
              minServeNodes: 3,
            });
            await operation.promise();
            assert.fail();
          } catch (e) {
            assert.ok(isValidationError(e));
            assert.equal(e.message, ClusterUtils.allConfigError);
          }
        });
        it('should throw an error when missing some autoscaling configurations', async () => {
          try {
            const [operation] = await cluster.setMetadata({
              minServeNodes: 3,
              cpuUtilizationPercent: 51,
            });
            await operation.promise();
            assert.fail();
          } catch (e) {
            assert.ok(isValidationError(e));
            assert.equal(e.message, ClusterUtils.incompleteConfigError);
          }
        });
      });
    });
    describe('Starting from autoscaling', () => {
      let cluster: Cluster;

      const minServeNodes = 3;
      const maxServeNodes = 4;
      const cpuUtilizationPercent = 50;
      const createClusterOptions = {
        location: 'us-west1-c',
        minServeNodes,
        maxServeNodes,
        cpuUtilizationPercent,
      };

      beforeEach(async () => {
        const clusterId = generateId('cluster');
        await createNewInstance([
          Object.assign({id: clusterId}, createClusterOptions),
        ]);
        cluster = instance.cluster(clusterId);
      });

      it('should change cluster to manual scaling', async () => {
        const updateNodes = 5;
        const [operation] = await cluster.setMetadata({
          nodes: updateNodes,
        });
        await operation.promise();
        await checkMetadata(
          cluster,
          {
            nodes: updateNodes,
          },
          false,
        );
      });
      it('should change autoscaling properties', async () => {
        const newMinServeNodes = 5;
        const newMaxServeNodes = 6;
        const newCpuUtilizationPercent = 53;
        assert.notEqual(minServeNodes, newMinServeNodes);
        assert.notEqual(maxServeNodes, newMaxServeNodes);
        assert.notEqual(cpuUtilizationPercent, newCpuUtilizationPercent);
        const [operation] = await cluster.setMetadata({
          minServeNodes: newMinServeNodes,
          maxServeNodes: newMaxServeNodes,
          cpuUtilizationPercent: newCpuUtilizationPercent,
        });
        await operation.promise();
        await checkMetadata(
          cluster,
          {
            nodes: minServeNodes,
            minServeNodes: newMinServeNodes,
            maxServeNodes: newMaxServeNodes,
            cpuUtilizationPercent: newCpuUtilizationPercent,
          },
          true,
        );
      });
    });
  });
});
