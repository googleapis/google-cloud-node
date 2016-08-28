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
var filter = 'severity > ALERT';
var logName = 'bar';

function getSample () {
  var entriesMock = [{}];
  var entryMock = {};
  var logMock = {
    entry: sinon.stub().returns(entryMock),
    write: sinon.stub().callsArgWith(1, null),
    delete: sinon.stub().callsArgWith(0, null)
  };
  var loggingMock = {
    log: sinon.stub().returns(logMock),
    getEntries: sinon.stub().callsArgWith(1, null, entriesMock)
  };
  var LoggingMock = sinon.stub().returns(loggingMock);

  return {
    program: proxyquire('../logs', {
      '@google-cloud/logging': LoggingMock,
      yargs: proxyquire('yargs', {})
    }),
    mocks: {
      Logging: LoggingMock,
      logging: loggingMock,
      log: logMock,
      entries: entriesMock,
      entry: entryMock
    }
  };
}

describe('logging:entries', function () {
  describe('listLogEntries', function () {
    it('should list log entries', function () {
      var sample = getSample();
      var callback = sinon.stub();
      var options = {
        filter: filter,
        limit: 1,
        sort: 'field'
      };

      sample.program.listLogEntries(options, callback);

      assert(sample.mocks.logging.getEntries.calledOnce, 'method called once');
      assert.equal(sample.mocks.logging.getEntries.firstCall.args.length, 2, 'method received 2 arguments');
      assert.deepEqual(sample.mocks.logging.getEntries.firstCall.args[0], {
        pageSize: options.limit,
        filter: options.filter,
        orderBy: options.sort
      }, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 2, 'callback received 2 arguments');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.entries, 'callback received result');
      assert(console.log.calledWith('Found %d entries!', sample.mocks.entries.length));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.logging.getEntries = sinon.stub().callsArgWith(1, error);

      sample.program.listLogEntries({}, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('writeLogEntry', function () {
    it('should write a log entry', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.writeLogEntry({
        name: logName
      }, callback);

      assert(sample.mocks.log.write.calledOnce, 'method called once');
      assert.equal(sample.mocks.log.write.firstCall.args.length, 2, 'method received 2 arguments');
      assert.strictEqual(sample.mocks.log.write.firstCall.args[0], sample.mocks.entry, 'method received options');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert(console.log.calledWith('Wrote entry to log: %s', logName));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.log.write = sinon.stub().callsArgWith(1, error);

      sample.program.writeLogEntry({}, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('deleteLog', function () {
    it('should delete a log', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.deleteLog(logName, callback);

      assert(sample.mocks.log.delete.calledOnce, 'method called once');
      assert.equal(sample.mocks.log.delete.firstCall.args.length, 1, 'method received 1 argument');
      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert.ifError(callback.firstCall.args[0], 'callback did not receive error');
      assert(console.log.calledWith('Deleted log: %s', logName));
    });

    it('should handle error', function () {
      var error = 'error';
      var sample = getSample();
      var callback = sinon.stub();
      sample.mocks.log.delete = sinon.stub().callsArgWith(0, error);

      sample.program.deleteLog(logName, callback);

      assert(callback.calledOnce, 'callback called once');
      assert.equal(callback.firstCall.args.length, 1, 'callback received 1 argument');
      assert(callback.firstCall.args[0], 'callback received error');
      assert.equal(callback.firstCall.args[0].message, error.message, 'error has correct message');
    });
  });

  describe('main', function () {
    it('should call listLogEntries', function () {
      var program = getSample().program;

      sinon.stub(program, 'listLogEntries');
      program.main(['list', '-f', '"' + filter + '"', '-l', 1, '-s', 'field']);
      assert.equal(program.listLogEntries.calledOnce, true);
      assert.deepEqual(program.listLogEntries.firstCall.args.slice(0, -1), [{
        filter: '"' + filter + '"',
        limit: 1,
        sort: 'field'
      }]);
    });

    it('should call writeLogEntry', function () {
      var program = getSample().program;

      sinon.stub(program, 'writeLogEntry');
      program.main(['write', logName, '{}', '{}']);
      assert.equal(program.writeLogEntry.calledOnce, true);
      assert.deepEqual(program.writeLogEntry.firstCall.args.slice(0, -1), [{
        name: logName,
        resource: {},
        entry: {}
      }]);
    });

    it('should validate args and call writeLogEntry', function () {
      var program = getSample().program;

      sinon.stub(program, 'writeLogEntry');
      program.main(['write', logName, '"{"invalid', '"{"invalid']);
      assert.equal(program.writeLogEntry.called, false, 'writeLogEntry should not have been called');
      assert.equal(console.error.calledTwice, true);
      assert.deepEqual(console.error.firstCall.args, ['"resource" must be a valid JSON string!']);
      assert.deepEqual(console.error.secondCall.args, ['"entry" must be a valid JSON string!']);
    });

    it('should call deleteLog', function () {
      var program = getSample().program;

      sinon.stub(program, 'deleteLog');
      program.main(['delete', logName]);
      assert.equal(program.deleteLog.calledOnce, true);
      assert.deepEqual(program.deleteLog.firstCall.args.slice(0, -1), [logName]);
    });
  });
});
