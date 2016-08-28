// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var proxyquire = require('proxyquire').noCallThru();
var bucketName = 'foo';
var datasetName = 'other-foo';
var filter = 'severity > ALERT';
var sinkName = 'bar';
var topicName = 'other-bar';

function getSample () {
  var bucketMock = {};
  var datasetMock = {};
  var metadataMock = {};
  var sinksMock = [
    {
      name: sinkName
    }
  ];
  var sinkMock = {
    create: sinon.stub().callsArgWith(1, null, sinksMock[0]),
    delete: sinon.stub().callsArgWith(0, null),
    getMetadata: sinon.stub().callsArgWith(0, null, metadataMock),
    setMetadata: sinon.stub().callsArgWith(1, null)
  };
  var topicMock = {};
  var bigqueryMock = {
    dataset: sinon.stub().returns(datasetMock)
  };
  var loggingMock = {
    sink: sinon.stub().returns(sinkMock),
    getSinks: sinon.stub().callsArgWith(0, null, sinksMock)
  };
  var pubsubMock = {
    topic: sinon.stub().returns(topicMock)
  };
  var storageMock = {
    bucket: sinon.stub().returns(bucketMock)
  };
  var GcloudMock = {
    bigquery: sinon.stub().returns(bigqueryMock),
    logging: sinon.stub().returns(loggingMock),
    pubsub: sinon.stub().returns(pubsubMock),
    storage: sinon.stub().returns(storageMock)
  };

  return {
    program: proxyquire('../sinks', {
      'google-cloud': GcloudMock,
      yargs: proxyquire('yargs', {})
    }),
    mocks: {
      gcloud: GcloudMock,
      bigquery: bigqueryMock,
      logging: loggingMock,
      storage: storageMock,
      pubsub: pubsubMock,
      bucket: bucketMock,
      dataset: datasetMock,
      metadata: metadataMock,
      sink: sinkMock,
      sinks: sinksMock,
      topic: topicMock
    }
  };
}

describe('logging:sinks', function () {
  describe('createSink', function () {
    it('should create a new sink to a bucket', function () {
      var sample = getSample();
      var callback = sinon.stub();
      var options = {
        name: sinkName,
        destination: bucketName,
        type: 'bucket'
      };

      sample.program.createSink(options, callback);

      assert(sample.mocks.sink.create.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.create.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.sink.create.firstCall.args[0], {
        destination: sample.mocks.bucket
      }, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.sinks[0], 'callback received result');
      assert(console.log.calledWith('Created sink: %s', sinkName));
    });

    it('should create a new sink to a dataset', function () {
      var sample = getSample();
      var callback = sinon.stub();
      var options = {
        name: sinkName,
        destination: datasetName,
        type: 'dataset'
      };

      sample.program.createSink(options, callback);

      assert(sample.mocks.sink.create.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.create.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.sink.create.firstCall.args[0], {
        destination: sample.mocks.dataset
      }, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.sinks[0], 'callback received result');
      assert(console.log.calledWith('Created sink: %s', sinkName));
    });

    it('should create a new sink to a topic', function () {
      var sample = getSample();
      var callback = sinon.stub();
      var options = {
        name: sinkName,
        destination: topicName,
        type: 'topic'
      };

      sample.program.createSink(options, callback);

      assert(sample.mocks.sink.create.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.create.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.sink.create.firstCall.args[0], {
        destination: sample.mocks.topic
      }, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.sinks[0], 'callback received result');
      assert(console.log.calledWith('Created sink: %s', sinkName));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.create = sinon.stub().callsArgWith(1, error);

      sample.program.createSink({}, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('getSinkMetadata', function () {
    it('should get metadata for a sink', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.getSinkMetadata(sinkName, callback);

      assert(sample.mocks.sink.getMetadata.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.getMetadata.firstCall.args.length, 1, 'method received 1 argument');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.metadata, 'callback received result');
      assert(console.log.calledWith('Got metadata for sink: %s', sinkName));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.getMetadata = sinon.stub().callsArgWith(0, error);

      sample.program.getSinkMetadata(sinkName, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('listSinks', function () {
    it('should list sinks', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.listSinks(callback);

      assert(sample.mocks.logging.getSinks.calledOnce, 'method called once');
      assert.equal(sample.mocks.logging.getSinks.firstCall.args.length, 1, 'method received 1 argument');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.sinks, 'callback received result');
      assert(console.log.calledWith('Found %d sink(s)!', sample.mocks.sinks.length));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.logging.getSinks = sinon.stub().callsArgWith(0, error);

      sample.program.listSinks(callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('updateSink', function () {
    it('should update metadata for a sink', function () {
      var sample = getSample();
      var callback = sinon.stub();
      var options = {
        name: sinkName,
        metadata: {
          filter: filter
        }
      };

      sample.program.updateSink(options, callback);

      assert(sample.mocks.sink.setMetadata.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.setMetadata.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.sink.setMetadata.firstCall.args[0], options.metadata, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert(console.log.calledWith('Updated sink: %s', sinkName));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.setMetadata = sinon.stub().callsArgWith(1, error);

      sample.program.updateSink({}, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('deleteSink', function () {
    it('should get metadata for a sink', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.deleteSink(sinkName, callback);

      assert(sample.mocks.sink.delete.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.delete.firstCall.args.length, 1, 'method received 1 argument');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert(console.log.calledWith('Deleted sink: %s', sinkName));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.delete = sinon.stub().callsArgWith(0, error);

      sample.program.deleteSink(sinkName, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('main', function () {
    it('should call createSink', function () {
      var program = getSample().program;

      sinon.stub(program, 'createSink');
      program.main(['create', sinkName, bucketName, '-t', 'bucket']);
      assert.equal(program.createSink.calledOnce, true);
      assert.deepEqual(program.createSink.firstCall.args.slice(0, -1), [{
        name: sinkName,
        destination: bucketName,
        type: 'bucket',
        filter: undefined
      }]);
    });

    it('should call getSinkMetadata', function () {
      var program = getSample().program;

      sinon.stub(program, 'getSinkMetadata');
      program.main(['get', sinkName]);
      assert.equal(program.getSinkMetadata.calledOnce, true);
      assert.deepEqual(program.getSinkMetadata.firstCall.args.slice(0, -1), [sinkName]);
    });

    it('should call listSinks', function () {
      var program = getSample().program;

      sinon.stub(program, 'listSinks');
      program.main(['list']);
      assert.equal(program.listSinks.calledOnce, true);
      assert.deepEqual(program.listSinks.firstCall.args.slice(0, -1), []);
    });

    it('should call updateSink', function () {
      var program = getSample().program;

      sinon.stub(program, 'updateSink');
      program.main(['update', sinkName, '{}']);
      assert.equal(program.updateSink.calledOnce, true);
      assert.deepEqual(program.updateSink.firstCall.args.slice(0, -1), [{
        name: sinkName,
        metadata: {}
      }]);
    });

    it('should validate metadata and call updateSink', function () {
      var program = getSample().program;

      sinon.stub(program, 'updateSink');
      program.main(['update', sinkName, '"{"invalid']);
      assert.equal(program.updateSink.called, false);
      assert.equal(console.error.calledOnce, true);
      assert.deepEqual(console.error.firstCall.args, ['"metadata" must be a valid JSON string!']);
    });

    it('should call deleteSink', function () {
      var program = getSample().program;

      sinon.stub(program, 'deleteSink');
      program.main(['delete', sinkName]);
      assert.equal(program.deleteSink.calledOnce, true);
      assert.deepEqual(program.deleteSink.firstCall.args.slice(0, -1), [sinkName]);
    });
  });
});
