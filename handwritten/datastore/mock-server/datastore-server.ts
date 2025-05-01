// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const {dirname, resolve} = require('node:path');

const PROTO_PATH = __dirname + '/../protos/google/datastore/v1/datastore.proto';
const DATASTORE_PROTOS = __dirname + '/../protos';
const GAX_PROTOS_DIR = resolve(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line n/no-extraneous-require
  dirname(require.resolve('google-gax')),
  '../protos',
);

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [DATASTORE_PROTOS, GAX_PROTOS_DIR],
});
const descriptor = grpc.loadPackageDefinition(packageDefinition);

/**
 * Implements the runQuery RPC method.
 */
function grpcEndpoint(
  call: {},
  callback: (arg1: string | null, arg2: {}) => {},
) {
  // SET A BREAKPOINT HERE AND EXPLORE `call` TO SEE THE REQUEST.
  callback(null, {message: 'Hello'});
}

/**
 * Starts an RPC server that receives requests for datastore
 */
export function startServer(cb: () => void) {
  const server = new grpc.Server();
  const service = descriptor.google.datastore.v1.Datastore.service;
  // On the next line, change runQuery to the grpc method you want to investigate
  server.addService(service, {runQuery: grpcEndpoint});
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log('server started');
      cb();
    },
  );
}
