/*!
 * Copyright 2020 Google LLC. All Rights Reserved.
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

import * as path from 'path';
import {google} from '../../protos/protos';
import {grpc} from 'google-gax';
import * as protoLoader from '@grpc/proto-loader';
import {createUnimplementedError, now} from './mockspanner';
import v1 = google.spanner.admin.instance.v1;
import iam = google.iam.v1;
import longrunning = google.longrunning;
import Any = google.protobuf.Any;
import Empty = google.protobuf.Empty;

const PROTO_PATH = 'spanner_instance_admin.proto';
const IMPORT_PATH = __dirname + '/../../../protos';
const PROTO_DIR =
  __dirname + '/../../../protos/google/spanner/admin/instance/v1';
const GAX_PROTO_DIR = path.join(
  path.dirname(require.resolve('google-gax')),
  '..',
  'protos',
);

/**
 * Load the Spanner Instance Admin service proto.
 */
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [IMPORT_PATH, PROTO_DIR, GAX_PROTO_DIR],
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const instanceAdminProtoDescriptor =
  protoDescriptor['google']['spanner']['admin']['instance']['v1'];
export const TEST_INSTANCE_CONFIG_NAME =
  'projects/mock-project/instanceConfigs/test-instance-config';
export const TEST_INSTANCE_NAME = 'projects/mock-project/instances/test';
export const PROD_INSTANCE_NAME = 'projects/mock-project/instances/prod';

export class MockInstanceAdmin {
  private static TEST_INSTANCE_CONFIG = v1.InstanceConfig.create({
    name: TEST_INSTANCE_CONFIG_NAME,
    displayName: 'Test Instance Config',
    replicas: [
      v1.ReplicaInfo.create({
        type: v1.ReplicaInfo.ReplicaType.READ_WRITE,
        location: 'local',
        defaultLeaderLocation: true,
      }),
    ],
  });

  private static TEST_INSTANCE = v1.Instance.create({
    config: TEST_INSTANCE_CONFIG_NAME,
    name: TEST_INSTANCE_NAME,
    displayName: 'Test Instance',
    nodeCount: 1,
    state: v1.Instance.State.READY,
    labels: {purpose: 'Test'},
  });

  private static PROD_INSTANCE = v1.Instance.create({
    config: TEST_INSTANCE_CONFIG_NAME,
    name: PROD_INSTANCE_NAME,
    displayName: 'Production Instance',
    nodeCount: 6,
    state: v1.Instance.State.READY,
    labels: {purpose: 'Production'},
  });

  private constructor() {}

  /**
   * Creates a MockInstanceAdmin.
   */
  static create(): MockInstanceAdmin {
    return new MockInstanceAdmin();
  }

  private static createNotFoundError(msg: string): grpc.ServiceError {
    const error = new Error(msg);
    return Object.assign(error, {
      code: grpc.status.NOT_FOUND,
    }) as grpc.ServiceError;
  }

  private static createServiceError(msg: string, code: grpc.status) {
    const error = new Error(msg);
    return Object.assign(error, {
      code,
    });
  }

  listInstanceConfigs(
    call: grpc.ServerUnaryCall<
      v1.ListInstanceConfigsRequest,
      v1.ListInstanceConfigsResponse
    >,
    callback: v1.InstanceAdmin.ListInstanceConfigsCallback,
  ) {
    callback(
      null,
      v1.ListInstanceConfigsResponse.create({
        instanceConfigs: [MockInstanceAdmin.TEST_INSTANCE_CONFIG],
      }),
    );
  }

  getInstanceConfig(
    call: grpc.ServerUnaryCall<v1.GetInstanceConfigRequest, v1.Instance>,
    callback: v1.InstanceAdmin.GetInstanceConfigCallback,
  ) {
    if (call.request!.name === TEST_INSTANCE_CONFIG_NAME) {
      callback(null, MockInstanceAdmin.TEST_INSTANCE_CONFIG);
    } else {
      callback(
        MockInstanceAdmin.createNotFoundError(
          `InstanceConfig not found: ${call.request!.name}`,
        ),
      );
    }
  }

  listInstances(
    call: grpc.ServerUnaryCall<
      v1.ListInstancesRequest,
      v1.ListInstancesResponse
    >,
    callback: v1.InstanceAdmin.ListInstancesCallback,
  ) {
    let instances: google.spanner.admin.instance.v1.IInstance[] = [];
    if (
      !call.request!.filter ||
      call.request!.filter.includes(
        `name:${MockInstanceAdmin.TEST_INSTANCE.name}`,
      )
    ) {
      instances.push(MockInstanceAdmin.TEST_INSTANCE);
    }
    if (
      !call.request!.filter ||
      call.request!.filter.includes(
        `name:${MockInstanceAdmin.PROD_INSTANCE.name}`,
      )
    ) {
      instances.push(MockInstanceAdmin.PROD_INSTANCE);
    }
    if (call.request!.pageToken) {
      const beginIndex = Number.parseInt(call.request!.pageToken, 10);
      instances = instances.slice(beginIndex);
    }
    if (call.request!.pageSize && call.request!.pageSize < instances.length) {
      instances = instances.slice(0, call.request!.pageSize);
    }
    callback(
      null,
      v1.ListInstancesResponse.create({
        instances,
      }),
    );
  }

  getInstance(
    call: grpc.ServerUnaryCall<v1.GetInstanceRequest, v1.Instance>,
    callback: v1.InstanceAdmin.GetInstanceCallback,
  ) {
    if (call.request!.name === TEST_INSTANCE_NAME) {
      callback(null, MockInstanceAdmin.TEST_INSTANCE);
    } else if (call.request!.name === PROD_INSTANCE_NAME) {
      callback(null, MockInstanceAdmin.PROD_INSTANCE);
    } else {
      callback(
        MockInstanceAdmin.createNotFoundError(
          `Instance not found: ${call.request!.name}`,
        ),
      );
    }
  }

  createInstance(
    call: grpc.ServerUnaryCall<v1.CreateInstanceRequest, longrunning.Operation>,
    callback: v1.InstanceAdmin.CreateInstanceCallback,
  ) {
    const instance = v1.Instance.create({
      name: `${call.request!.parent}/instances/${call.request!.instanceId}`,
      displayName: call.request!.instance
        ? call.request!.instance.displayName
        : undefined,
      config: call.request!.instance
        ? call.request!.instance.config
        : undefined,
      nodeCount: call.request!.instance
        ? call.request!.instance.nodeCount
        : undefined,
      processingUnits: call.request!.instance
        ? call.request!.instance.processingUnits
        : undefined,
      labels: call.request!.instance
        ? call.request!.instance.labels
        : undefined,
      state: v1.Instance.State.READY,
    });
    const metadataBuffer = v1.CreateInstanceMetadata.encode(
      v1.CreateInstanceMetadata.create({
        instance,
        startTime: now(),
        endTime: now(),
      }),
    ).finish();
    const instanceBuffer = v1.Instance.encode(instance).finish();
    callback(
      null,
      longrunning.Operation.create({
        name: 'projects/mock-project/operations/mock-operation',
        done: true,
        metadata: Any.create({
          value: metadataBuffer,
        }),
        response: Any.create({
          value: instanceBuffer,
        }),
      }),
    );
  }

  updateInstance(
    call: grpc.ServerUnaryCall<v1.UpdateInstanceRequest, longrunning.Operation>,
    callback: v1.InstanceAdmin.UpdateInstanceCallback,
  ) {
    if (call.request!.instance) {
      if (
        call.request!.instance.name === PROD_INSTANCE_NAME ||
        call.request!.instance.name === TEST_INSTANCE_NAME
      ) {
        const metadataBuffer = v1.CreateInstanceMetadata.encode(
          v1.CreateInstanceMetadata.create({
            instance: call.request!.instance,
            startTime: now(),
            endTime: now(),
          }),
        ).finish();
        callback(
          null,
          longrunning.Operation.create({
            name: 'projects/mock-project/operations/mock-operation',
            done: true,
            metadata: Any.create({
              value: metadataBuffer,
            }),
            response: Any.create({
              value: v1.Instance.encode(call.request!.instance).finish(),
            }),
          }),
        );
      } else {
        callback(
          MockInstanceAdmin.createNotFoundError(
            `Instance not found: ${call.request!.instance.name}`,
          ),
        );
      }
    } else {
      callback(
        MockInstanceAdmin.createServiceError(
          'Missing instance in UpdateInstance request',
          grpc.status.INVALID_ARGUMENT,
        ),
      );
    }
  }

  deleteInstance(
    call: grpc.ServerUnaryCall<v1.DeleteInstanceRequest, Empty>,
    callback: v1.InstanceAdmin.DeleteInstanceCallback,
  ) {
    if (
      call.request!.name === PROD_INSTANCE_NAME ||
      call.request!.name === TEST_INSTANCE_NAME
    ) {
      callback(null, Empty.create({}));
    } else {
      callback(
        MockInstanceAdmin.createNotFoundError(
          `Instance not found: ${call.request!.name}`,
        ),
      );
    }
  }

  setIamPolicy(
    call: grpc.ServerUnaryCall<iam.SetIamPolicyRequest, {}>,
    callback: iam.IAMPolicy.SetIamPolicyCallback,
  ) {
    callback(createUnimplementedError('SetIamPolicy is not yet implemented'));
  }

  getIamPolicy(
    call: grpc.ServerUnaryCall<iam.GetIamPolicyRequest, {}>,
    callback: iam.IAMPolicy.GetIamPolicyCallback,
  ) {
    callback(createUnimplementedError('GetIamPolicy is not yet implemented'));
  }

  testIamPermissions(
    call: grpc.ServerUnaryCall<iam.TestIamPermissionsRequest, {}>,
    callback: iam.IAMPolicy.TestIamPermissionsCallback,
  ) {
    callback(
      createUnimplementedError('TestIamPermissions is not yet implemented'),
    );
  }
}

/**
 * Creates and adds a MockInstanceAdmin instance to the given server. The mock contains the following data by default:
 * 1. One InstanceConfig with the name 'projects/mock-project/instanceConfigs/test-instance-config'.
 * 2. Two Instances: 'projects/mock-project/instances/test' and 'projects/mock-project/instances/prod'.
 */
export function createMockInstanceAdmin(
  server: grpc.Server,
): MockInstanceAdmin {
  const mock = MockInstanceAdmin.create();
  server.addService(instanceAdminProtoDescriptor.InstanceAdmin.service, {
    listInstanceConfigs: mock.listInstanceConfigs,
    getInstanceConfig: mock.getInstanceConfig,
    listInstances: mock.listInstances,
    getInstance: mock.getInstance,
    createInstance: mock.createInstance,
    updateInstance: mock.updateInstance,
    deleteInstance: mock.deleteInstance,
    setIamPolicy: mock.setIamPolicy,
    getIamPolicy: mock.getIamPolicy,
    testIamPermissions: mock.testIamPermissions,
  });
  return mock;
}
