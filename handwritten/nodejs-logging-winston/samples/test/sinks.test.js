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
var filter = 'severity > ALERT';
var sinkName = 'bar';

function getSample () {
  var apiResponseMock = {};
  var bucketMock = {};
  var metadataMock = {};
  var sinksMock = [
    {
      name: sinkName
    }
  ];
  var sinkMock = {
    create: sinon.stub().callsArgWith(1, null, sinksMock[0], apiResponseMock),
    delete: sinon.stub().callsArgWith(0, null, apiResponseMock),
    getMetadata: sinon.stub().callsArgWith(0, null, metadataMock),
    setMetadata: sinon.stub().callsArgWith(1, null, apiResponseMock)
  };
  var loggingMock = {
    sink: sinon.stub().returns(sinkMock),
    getSinks: sinon.stub().callsArgWith(0, null, sinksMock)
  };
  var storageMock = {
    bucket: sinon.stub().returns(bucketMock)
  };
  var LoggingMock = sinon.stub().returns(loggingMock);
  var StorageMock = sinon.stub().returns(storageMock);

  return {
    program: proxyquire('../sinks', {
      '@google-cloud/logging': LoggingMock,
      '@google-cloud/storage': StorageMock,
      yargs: proxyquire('yargs', {})
    }),
    mocks: {
      Logging: LoggingMock,
      Storage: StorageMock,
      logging: loggingMock,
      storage: storageMock,
      bucket: bucketMock,
      metadata: metadataMock,
      sink: sinkMock,
      sinks: sinksMock,
      apiResponse: apiResponseMock
    }
  };
}

describe('logging:sinks', function () {
  describe('createSink', function () {
    it('should create a new sink to a bucket', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.createSink(sinkName, bucketName, filter, callback);

      assert(sample.mocks.sink.create.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.create.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.sink.create.firstCall.args[0], {
        filter: filter,
        destination: sample.mocks.bucket
      }, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 3, 'callback received 3 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.sinks[0], 'callback received result');
      assert.strictEqual(callback.firstCall.args[2], sample.mocks.apiResponse, 'callback received result');
      assert(console.log.calledWith('Created sink %s to %s', sinkName, bucketName));
    });

    it('should handle error', function () {
      var error = new Error('error');
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.create = sinon.stub().callsArgWith(1, error);

      sample.program.createSink(sinkName, bucketName, filter, callback);

      assert.equal(callback.calledOnce, true);
      assert.deepEqual(callback.firstCall.args, [error]);
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
      var error = new Error('error');
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.getMetadata = sinon.stub().callsArgWith(0, error);

      sample.program.getSinkMetadata(sinkName, callback);

      assert.equal(callback.calledOnce, true);
      assert.deepEqual(callback.firstCall.args, [error]);
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
      var error = new Error('error');
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.logging.getSinks = sinon.stub().callsArgWith(0, error);

      sample.program.listSinks(callback);

      assert.equal(callback.calledOnce, true);
      assert.deepEqual(callback.firstCall.args, [error]);
    });
  });

  describe('updateSink', function () {
    it('should update metadata for a sink', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.updateSink(sinkName, filter, callback);

      assert(sample.mocks.sink.setMetadata.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.setMetadata.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.sink.setMetadata.firstCall.args[0], {
        filter: filter
      }, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.apiResponse, 'callback received result');
      assert(console.log.calledWith('Updated sink: %s', sinkName));
    });

    it('should handle error', function () {
      var error = new Error('error');
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.setMetadata = sinon.stub().callsArgWith(1, error);

      sample.program.updateSink(sinkName, filter, callback);

      assert.equal(callback.calledOnce, true);
      assert.deepEqual(callback.firstCall.args, [error]);
    });
  });

  describe('deleteSink', function () {
    it('should delete a sink', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.deleteSink(sinkName, callback);

      assert(sample.mocks.sink.delete.calledOnce, 'method called once');
      assert.equal(sample.mocks.sink.delete.firstCall.args.length, 1, 'method received 1 argument');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.apiResponse, 'callback received result');
      assert(console.log.calledWith('Deleted sink: %s', sinkName));
    });

    it('should handle error', function () {
      var error = new Error('error');
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.sink.delete = sinon.stub().callsArgWith(0, error);

      sample.program.deleteSink(sinkName, callback);

      assert.equal(callback.calledOnce, true);
      assert.deepEqual(callback.firstCall.args, [error]);
    });
  });

  describe('main', function () {
    it('should call createSink', function () {
      var program = getSample().program;

      sinon.stub(program, 'createSink');
      program.main(['create', sinkName, bucketName, filter]);
      assert.equal(program.createSink.calledOnce, true);
      assert.deepEqual(program.createSink.firstCall.args.slice(0, -1), [sinkName, bucketName, filter]);
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
      program.main(['update', sinkName, filter]);
      assert.equal(program.updateSink.calledOnce, true);
      assert.deepEqual(program.updateSink.firstCall.args.slice(0, -1), [sinkName, filter]);
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
