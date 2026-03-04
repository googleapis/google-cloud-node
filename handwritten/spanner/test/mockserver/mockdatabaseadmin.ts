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
import {createUnimplementedError} from './mockspanner';
import v1 = google.spanner.admin.database.v1;
import iam = google.iam.v1;
import longrunning = google.longrunning;
import Any = google.protobuf.Any;

const PROTO_PATH = 'spanner_database_admin.proto';
const IMPORT_PATH = __dirname + '/../../../protos';
const PROTO_DIR =
  __dirname + '/../../../protos/google/spanner/admin/database/v1';
const GAX_PROTO_DIR = path.join(
  path.dirname(require.resolve('google-gax')),
  '..',
  'protos',
);

/**
 * Load the Spanner Database Admin service proto.
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
const databaseAdminProtoDescriptor =
  protoDescriptor['google']['spanner']['admin']['database']['v1'];
const TEST_DATABASE_NAME =
  'projects/mock-project/instances/test/databases/test';
const PROD_DATABASE_NAME =
  'projects/mock-project/instances/prod/databases/prod';

export class MockDatabaseAdmin {
  private static TEST_DATABASE = v1.Database.create({
    name: TEST_DATABASE_NAME,
    state: v1.Database.State.READY,
  });

  private static PROD_DATABASE = v1.Database.create({
    name: PROD_DATABASE_NAME,
    state: v1.Database.State.READY,
  });

  private static CREATE_TEST_DATABASE_OPERATION = longrunning.Operation.create({
    name: `${TEST_DATABASE_NAME}/operations/1`,
    done: true,
    response: Any.create({
      value: v1.Database.encode(MockDatabaseAdmin.TEST_DATABASE).finish(),
    }),
    metadata: Any.create({
      value: v1.CreateDatabaseMetadata.encode(
        v1.CreateDatabaseMetadata.create({
          database: MockDatabaseAdmin.TEST_DATABASE.name,
        }),
      ).finish(),
    }),
  });

  private static CREATE_PROD_DATABASE_OPERATION = longrunning.Operation.create({
    name: `${PROD_DATABASE_NAME}/operations/1`,
    done: true,
    response: Any.create({
      value: v1.Database.encode(MockDatabaseAdmin.PROD_DATABASE).finish(),
    }),
    metadata: Any.create({
      value: v1.CreateDatabaseMetadata.encode(
        v1.CreateDatabaseMetadata.create({
          database: MockDatabaseAdmin.PROD_DATABASE.name,
        }),
      ).finish(),
    }),
  });

  private constructor() {}

  /**
   * Creates a MockDatabaseAdmin.
   */
  static create(): MockDatabaseAdmin {
    return new MockDatabaseAdmin();
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

  listDatabases(
    call: grpc.ServerUnaryCall<
      v1.ListDatabasesRequest,
      v1.ListDatabasesResponse
    >,
    callback: v1.DatabaseAdmin.ListDatabasesCallback,
  ) {
    callback(
      null,
      v1.ListDatabasesResponse.create({
        databases: [
          MockDatabaseAdmin.TEST_DATABASE,
          MockDatabaseAdmin.PROD_DATABASE,
        ],
      }),
    );
  }

  listDatabaseOperations(
    call: grpc.ServerUnaryCall<
      v1.ListDatabaseOperationsRequest,
      v1.ListDatabaseOperationsResponse
    >,
    callback: v1.DatabaseAdmin.ListDatabaseOperationsCallback,
  ) {
    callback(
      null,
      v1.ListDatabaseOperationsResponse.create({
        operations: [
          MockDatabaseAdmin.CREATE_TEST_DATABASE_OPERATION,
          MockDatabaseAdmin.CREATE_PROD_DATABASE_OPERATION,
        ],
      }),
    );
  }

  createDatabase(
    call: grpc.ServerUnaryCall<v1.CreateDatabaseRequest, longrunning.Operation>,
    callback: v1.DatabaseAdmin.CreateDatabaseCallback,
  ) {
    let name = call.request!.createStatement.replace('CREATE DATABASE ', '');
    name = name.substring(1, name.length - 1);
    const database = v1.Database.create({
      name: `${call.request!.parent}/databases/${name}`,
      state: v1.Database.State.READY,
    });
    const metadataBuffer = v1.CreateDatabaseMetadata.encode(
      v1.CreateDatabaseMetadata.create({
        database: database.name,
      }),
    ).finish();
    const databaseBuffer = v1.Database.encode(database).finish();
    callback(
      null,
      longrunning.Operation.create({
        name: 'projects/mock-project/operations/mock-operation',
        done: true,
        metadata: Any.create({
          value: metadataBuffer,
        }),
        response: Any.create({
          value: databaseBuffer,
        }),
      }),
    );
  }

  getDatabase(
    call: grpc.ServerUnaryCall<v1.GetDatabaseRequest, {}>,
    callback: v1.DatabaseAdmin.GetDatabaseCallback,
  ) {
    callback(createUnimplementedError('GetDatabase is not yet implemented'));
  }

  updateDatabaseDdl(
    call: grpc.ServerUnaryCall<v1.UpdateDatabaseDdlRequest, {}>,
    callback: v1.DatabaseAdmin.UpdateDatabaseDdlCallback,
  ) {
    callback(
      createUnimplementedError('UpdateDatabaseDdl is not yet implemented'),
    );
  }

  dropDatabase(
    call: grpc.ServerUnaryCall<v1.DropDatabaseRequest, {}>,
    callback: v1.DatabaseAdmin.DropDatabaseCallback,
  ) {
    callback(createUnimplementedError('DropDatabase is not yet implemented'));
  }

  getDatabaseDdl(
    call: grpc.ServerUnaryCall<v1.GetDatabaseDdlRequest, {}>,
    callback: v1.DatabaseAdmin.GetDatabaseDdlCallback,
  ) {
    callback(createUnimplementedError('GetDatabaseDdl is not yet implemented'));
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
 * Creates and adds a MockDatabaseAdmin instance to the given server. The mock contains the following data by default:
 * 1. Two Databases: 'projects/mock-project/instances/test/databases/test' and 'projects/mock-project/instances/prod/databases/prod'.
 */
export function createMockDatabaseAdmin(
  server: grpc.Server,
): MockDatabaseAdmin {
  const mock = MockDatabaseAdmin.create();
  server.addService(databaseAdminProtoDescriptor.DatabaseAdmin.service, {
    listDatabases: mock.listDatabases,
    createDatabase: mock.createDatabase,
    getDatabase: mock.getDatabase,
    updateDatabaseDdl: mock.updateDatabaseDdl,
    dropDatabase: mock.dropDatabase,
    getDatabaseDdl: mock.getDatabaseDdl,
    listDatabaseOperations: mock.listDatabaseOperations,
    setIamPolicy: mock.setIamPolicy,
    getIamPolicy: mock.getIamPolicy,
    testIamPermissions: mock.testIamPermissions,
  });
  return mock;
}
