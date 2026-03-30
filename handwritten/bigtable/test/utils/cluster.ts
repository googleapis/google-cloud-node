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

import {describe, it} from 'mocha';
import {ClusterUtils} from '../../src/utils/cluster';
import * as assert from 'assert';

describe('Bigtable/Utils/Cluster', () => {
  describe('getRequestFromMetadata', () => {
    it('should translate metadata for a full set of parameters', () => {
      const metadata = {
        nodes: 1,
        location: 'projects/{{projectId}}/locations/us-east4-b',
        minServeNodes: 2,
        maxServeNodes: 3,
        cpuUtilizationPercent: 50,
      };
      const name = 'cluster1';
      const reqOpts = ClusterUtils.getRequestFromMetadata(metadata, name);
      assert.deepStrictEqual(reqOpts, {
        cluster: {
          name,
          location: metadata.location,
          serveNodes: metadata.nodes,
          clusterConfig: {
            clusterAutoscalingConfig: {
              autoscalingLimits: {
                minServeNodes: metadata.minServeNodes,
                maxServeNodes: metadata.maxServeNodes,
              },
              autoscalingTargets: {
                cpuUtilizationPercent: metadata.cpuUtilizationPercent,
              },
            },
          },
        },
        updateMask: {
          paths: [
            'serve_nodes',
            'cluster_config.cluster_autoscaling_config.autoscaling_limits.min_serve_nodes',
            'cluster_config.cluster_autoscaling_config.autoscaling_limits.max_serve_nodes',
            'cluster_config.cluster_autoscaling_config.autoscaling_targets.cpu_utilization_percent',
          ],
        },
      });
    });
    it('should translate metadata for autoscaling parameters', () => {
      const metadata = {
        location: 'projects/{{projectId}}/locations/us-east4-b',
        minServeNodes: 2,
        maxServeNodes: 3,
        cpuUtilizationPercent: 50,
      };
      const name = 'cluster1';
      const reqOpts = ClusterUtils.getRequestFromMetadata(metadata, name);
      assert.deepStrictEqual(reqOpts, {
        cluster: {
          name,
          location: metadata.location,
          clusterConfig: {
            clusterAutoscalingConfig: {
              autoscalingLimits: {
                minServeNodes: metadata.minServeNodes,
                maxServeNodes: metadata.maxServeNodes,
              },
              autoscalingTargets: {
                cpuUtilizationPercent: metadata.cpuUtilizationPercent,
              },
            },
          },
        },
        updateMask: {
          paths: [
            'cluster_config.cluster_autoscaling_config.autoscaling_limits.min_serve_nodes',
            'cluster_config.cluster_autoscaling_config.autoscaling_limits.max_serve_nodes',
            'cluster_config.cluster_autoscaling_config.autoscaling_targets.cpu_utilization_percent',
          ],
        },
      });
    });
  });
});
