// Copyright 2019 Google LLC
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

// This is a simple test client for the Spanner benchwrapper.

const {grpc} = require('google-gax');
const protoLoader = require('@grpc/proto-loader');

const argv = require('yargs')
  .option('port', {
    description: 'The port that the benchwrapper client should connect to.',
    type: 'number',
    demand: true,
  })
  .parse();

const PROTO_PATH = __dirname + '/spanner.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const spannerBenchWrapper = protoDescriptor.spanner_bench;

console.log(`connecting to localhost:${argv.port}`);
const client = new spannerBenchWrapper.SpannerBenchWrapper(
  `localhost:${argv.port}`,
  grpc.credentials.createInsecure(),
);
const readReq = {
  Query: 'SELECT 1 AS COL1 UNION ALL SELECT 2 AS COL1',
};
const insertReq = {
  singers: [
    {id: '1', firstName: 'Lana', lastName: 'Del Rey'},
    {id: '2', firstName: 'Taylor', lastName: 'Swift'},
  ],
};
const updateReq = {
  Queries: [
    'UPDATE sometable SET foo=1 WHERE bar=2',
    'UPDATE sometable SET foo=2 WHERE bar=1',
  ],
};
client.read(readReq, (err, result) => {
  callback('read', err, result);
});
client.insert(insertReq, (err, result) => {
  callback('insert', err, result);
});
client.update(updateReq, (err, result) => {
  callback('update', err, result);
});

function callback(method, err, result) {
  if (err) {
    console.log(`${method} failed with error ${err}`);
    return;
  }
  console.log(`${method} executed with result ${result}`);
}
