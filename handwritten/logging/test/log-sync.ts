// Copyright 2021 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import {Entry, Logging} from '../src';
import {LogSync} from '../src/log-sync';
import {LABELS_KEY} from '../src/entry';
import {WriteOptions} from '../src/utils/log-common';
import * as logCommon from '../src/utils/log-common';
import * as stream from 'stream';
import * as extend from 'extend';
import * as fs from 'fs';

describe('LogSync', () => {
  const PROJECT_ID = 'project-id';
  const LOG_NAME = 'escaping/required/for/this/log-name';
  const LOG_NAME_ENCODED = encodeURIComponent(LOG_NAME);
  const LOG_NAME_FORMATTED = [
    'projects',
    PROJECT_ID,
    'logs',
    LOG_NAME_ENCODED,
  ].join('/');

  let LOGGING: Logging;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let log: any;

  describe('instantiation', () => {
    before(() => {
      log = createLogger();
    });

    function createLogger() {
      LOGGING = {
        projectId: '{{project-id}}',
        entry: sinon.stub(),
      } as {} as Logging;

      return new LogSync(LOGGING, LOG_NAME);
    }

    it('should localize the escaped name', () => {
      assert.strictEqual(log.name, LOG_NAME_ENCODED);
    });

    it('should localize the formatted name', () => {
      const log = new LogSync(LOGGING, LOG_NAME);
      assert.strictEqual(
        log.formattedName_,
        logCommon.formatLogName('{{project-id}}', LOG_NAME)
      );
    });

    it('should localize the Logging instance', () => {
      assert.strictEqual(log.logging, LOGGING);
    });

    it('should localize the name', () => {
      assert.strictEqual(log.name, LOG_NAME_FORMATTED.split('/').pop());
    });

    it('should localize a custom transport', () => {
      const fakeStream = new stream.Writable();
      const log = new LogSync(LOGGING, LOG_NAME, fakeStream);
      assert(log.transport instanceof stream.Writable);
      assert.notStrictEqual(log.transport, process.stdout);
    });

    it('should default to process.stdout transport', () => {
      assert.strictEqual(log.transport, process.stdout);
    });
  });

  describe('write', () => {
    let ENTRY: Entry;
    let ENTRIES: Entry[];
    let OPTIONS: WriteOptions;
    const TEST_FILE = './output';

    // For ease of testing, we write to a filestream instead of stdout.
    let buffer: stream.Writable;

    beforeEach(() => {
      ENTRY = new Entry(undefined, 'testlog');
      ENTRIES = [ENTRY] as Entry[];
      OPTIONS = {} as WriteOptions;
      log = createLogger();
    });

    afterEach(() => {
      fs.unlink(TEST_FILE, e => {
        console.log(e);
      });
    });

    function createLogger() {
      LOGGING = {
        projectId: '{{project-id}}',
        entry: sinon.stub(),
      } as {} as Logging;
      buffer = fs.createWriteStream(TEST_FILE);
      return new LogSync(LOGGING, LOG_NAME, buffer);
    }

    it('should use projectId from Logging for log name', done => {
      log.write(ENTRIES);
      buffer.end(() => {
        const result = JSON.parse(fs.readFileSync(TEST_FILE, 'utf8'));
        assert.strictEqual(
          result.logName,
          'projects/{{project-id}}/logs/escaping%2Frequired%2Ffor%2Fthis%2Flog-name'
        );
        done();
      });
    });

    it('should detect and transform resource from WriteOptions', done => {
      const VALUE = 'camel-case-key-val';
      const CUSTOM_RESOURCE = {
        labels: {
          camelCaseKey: 'camel-case-key-val',
        },
      };
      const optionsWithResource = extend({}, OPTIONS, {
        resource: CUSTOM_RESOURCE,
      });
      log.write(ENTRIES, optionsWithResource);
      buffer.end(() => {
        const result = JSON.parse(fs.readFileSync(TEST_FILE, 'utf8'));
        assert.strictEqual(result.resource.camel_case_key, VALUE);
        done();
      });
    });

    it('should detect resource from LogEntry next', done => {
      log.write(new Entry({resource: {type: 'sometype'}}));
      buffer.end(() => {
        const result = JSON.parse(fs.readFileSync(TEST_FILE, 'utf8'));
        assert.strictEqual(result.resource.type, 'sometype');
        done();
      });
    });

    it('should detect resource from Logging last', done => {
      LOGGING.detectedResource = {type: 'fake resource'};
      log.write(ENTRIES);
      buffer.end(() => {
        const result = JSON.parse(fs.readFileSync(TEST_FILE, 'utf8'));
        assert.strictEqual(result.resource.type, 'fake resource');
        done();
      });
    });

    it('should not require options', done => {
      log.write(ENTRY);
      buffer.end(() => {
        const result = fs.readFileSync(TEST_FILE, 'utf8');
        assert.ok(result.length > 0);
        done();
      });
    });

    it('should clobber with labels from WriteOptions', done => {
      log.write(ENTRY, {labels: {foo: 'bar'}});
      buffer.end(() => {
        const result = JSON.parse(fs.readFileSync(TEST_FILE, 'utf8'));
        assert.strictEqual(result[LABELS_KEY].foo, 'bar');
        done();
      });
    });
  });

  describe('severity shortcuts', () => {
    let ENTRY: Entry;
    let LABELS: WriteOptions;
    let assignSeverityStub: sinon.SinonStub;
    let writeStub: sinon.SinonStub;

    beforeEach(() => {
      ENTRY = {} as Entry;
      LABELS = [] as WriteOptions;
      assignSeverityStub = sinon.stub(logCommon, 'assignSeverityToEntries');
      writeStub = sinon.stub(log, 'write');
    });

    afterEach(() => {
      assignSeverityStub.restore();
      writeStub.restore();
    });

    [
      'alert',
      'critical',
      'debug',
      'emergency',
      'error',
      'info',
      'notice',
      'warning',
    ].forEach(severityMethodName => {
      describe(severityMethodName, () => {
        let severityMethod: Function;

        beforeEach(() => {
          severityMethod = log[severityMethodName].bind(log);
        });

        it('should format the entries', async () => {
          const severity = severityMethodName.toUpperCase();
          severityMethod(ENTRY, LABELS);
          assert(assignSeverityStub.calledOnceWith(ENTRY, severity));
        });

        it('should pass correct arguments to write', async () => {
          const assignedEntries: Entry[] = [];
          assignSeverityStub.returns(assignedEntries);
          severityMethod(ENTRY, LABELS);
          assert(writeStub.calledOnceWith(assignedEntries));
        });
      });
    });
  });
});
