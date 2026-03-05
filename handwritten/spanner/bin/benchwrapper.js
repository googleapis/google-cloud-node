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

const {grpc} = require('google-gax');
const protoLoader = require('@grpc/proto-loader');
const {Spanner} = require('../build/src');

const argv = require('yargs')
  .option('port', {
    description: 'The port that the Node.js benchwrapper should run on.',
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

// The benchwrapper should only be executed against an emulator.
if (!process.env.SPANNER_EMULATOR_HOST) {
  throw new Error(
    'This benchmarking server only works when connected to an emulator. Please set SPANNER_EMULATOR_HOST.',
  );
}
// This will connect the Spanner client to an emulator, as SPANNER_EMULATOR_HOST has been set.
const spannerClient = new Spanner();

// Implementation of SpannerBenchWrapper.Read method.
function Read(call, callback) {
  const instance = spannerClient.instance('someinstance');
  const database = instance.database('somedatabase');
  let tx;
  database
    .getSnapshot()
    .then(data => {
      tx = data[0];
      return tx.run(call.request.query);
    })
    .then(data => {
      const [rows] = data;
      // Just iterate over all rows.
      rows.forEach(() => {});
    })
    .finally(() => {
      if (tx) {
        tx.end();
      }
      callback(null, {});
    });
}

// Implementation of SpannerBenchWrapper.Insert method.
function Insert(call, callback) {
  const instance = spannerClient.instance('someinstance');
  const database = instance.database('somedatabase');
  database.runTransaction((err, transaction) => {
    if (err) {
      callback(err);
      return;
    }
    call.request.singers.forEach(singer => {
      transaction.insert('Singers', {
        SingerId: singer.id,
        FirstName: singer.first_name,
        LastName: singer.last_name,
      });
    });
    transaction.commit(err => {
      if (err) {
        callback(err);
      } else {
        callback(null, {});
      }
    });
  });
}

// Implementation of SpannerBenchWrapper.Insert method.
function Update(call, callback) {
  const instance = spannerClient.instance('someinstance');
  const database = instance.database('somedatabase');
  database.runTransaction((err, transaction) => {
    if (err) {
      callback(err);
      return;
    }
    transaction.batchUpdate(call.request.queries, (err, rowCounts) => {
      if (err) {
        callback(
          new grpc.StatusBuilder()
            .withCode(err.code)
            .withDetails(err.details || err.message)
            .withMetadata(err.metadata)
            .build(),
        );
        transaction.rollback().then(() => {});
        return;
      }
      // Iterate over all rowCounts.
      rowCounts.forEach(() => {});
      transaction.commit(err => {
        if (err) {
          callback(err);
        } else {
          callback(null, {});
        }
      });
    });
  });
}

// Create and start a benchwrapper server.
const server = new grpc.Server();
server.addService(spannerBenchWrapper['SpannerBenchWrapper']['service'], {
  Read: Read,
  Insert: Insert,
  Update: Update,
});
console.log('starting benchwrapper for Spanner on localhost:' + argv.port);
server.bindAsync(
  '0.0.0.0:' + argv.port,
  grpc.ServerCredentials.createInsecure(),
  err => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
  },
);
