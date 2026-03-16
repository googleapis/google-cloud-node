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
const {PubSub} = require('../build/src');

const argv = require('yargs')
  .option('port', {
    description: 'The port that the Node.js benchwrapper should run on.',
    type: 'number',
    demand: true,
  })
  .parse();

const PROTO_PATH = __dirname + '/pubsub.proto';
// Suggested options for similarity to existing grpc.load behavior.
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const pubsubBenchWrapper = protoDescriptor.pubsub_bench;

const client = new PubSub();

function recv(call, callback) {
  const subName = call.request.sub_name;

  const sub = client.subscription(subName);

  sub.setOptions({
    streamingOptions: {
      maxStreams: 1,
    },
  });

  sub.on('message', message => {
    message.ack();
  });

  sub.on('error', () => {
    // We look for an error here since we expect the server
    // the close the stream with an grpc "OK" error, which
    // indicates a successfully closed stream.
    callback(null, null);
  });
}

const server = new grpc.Server();

server.addService(pubsubBenchWrapper['PubsubBenchWrapper']['service'], {
  Recv: recv,
});
console.log(`starting on localhost:${argv.port}`);
server.bindAsync(
  `0.0.0.0:${argv.port}`,
  grpc.ServerCredentials.createInsecure(),
  err => {
    if (err) {
      throw err;
    } else {
      server.start();
    }
  },
);
