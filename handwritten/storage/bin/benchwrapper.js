const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const {Storage} = require('../build/src');

const argv = require('yargs')
  .option('port', {
    description: 'The port that the Node.js benchwrapper should run on.',
    type: 'number',
    demand: true,
  })
  .parse();

const PROTO_PATH = __dirname + '/storage.proto';
// Suggested options for similarity to existing grpc.load behavior.
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const storageBenchWrapper = protoDescriptor.storage_bench;

const storageClient = new Storage();

function read(call, callback) {
  const bucketName = call.request.bucketName;
  const objectName = call.request.objectName;

  storageClient
    .bucket(bucketName)
    .file(objectName)
    .download({validation: false})
    .then(function(data) {
      // Do nothing with contents.
    });

  callback(null, null);
}

function write(call, callback) {
  // TODO(deklerk)
  callback(null, null);
}

const server = new grpc.Server();

server.addService(storageBenchWrapper['StorageBenchWrapper']['service'], {
  read: read,
  write: write,
});
console.log('starting on localhost:' + argv.port);
server.bind('0.0.0.0:' + argv.port, grpc.ServerCredentials.createInsecure());
server.start();
