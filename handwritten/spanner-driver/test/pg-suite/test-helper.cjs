// Copyright 2026 Google LLC
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

'use strict';

const assert = require('assert');
const sys = require('util');
const path = require('path');
const async = require('async');
const {Client} = require('../../build/cjs/src/index.js');
const pg = require('../../build/cjs/src/index.js');

// -----------------------------------------------------------------------------
// 1. Assertion and Global Test Utilities
// -----------------------------------------------------------------------------

const expect = function (callback, timeout) {
  const executed = false;
  timeout = timeout || parseInt(process.env.TEST_TIMEOUT, 10) || 120000;
  const id = setTimeout(function () {
    assert.ok(
      executed,
      'Expected execution of function to be fired within ' +
        timeout +
        ' milliseconds ' +
        ' (hint: export TEST_TIMEOUT=<timeout in milliseconds>' +
        ' to change timeout globally)' +
        callback.toString()
    );
  }, timeout);

  if (callback.length < 3) {
    return function (err, queryResult) {
      clearTimeout(id);
      if (err) {
        assert.ok(
          err instanceof Error,
          'Expected errors to be instances of Error: ' + sys.inspect(err)
        );
      }
      callback.apply(this, arguments);
    };
  } else if (callback.length === 3) {
    return function (err, arg1, arg2) {
      clearTimeout(id);
      if (err) {
        assert.ok(
          err instanceof Error,
          'Expected errors to be instances of Error: ' + sys.inspect(err)
        );
      }
      callback.apply(this, arguments);
    };
  } else {
    throw new Error('Unsupported arity ' + callback.length);
  }
};

const getTimezoneOffset = Date.prototype.getTimezoneOffset;

const setTimezoneOffset = function (minutesOffset) {
  Date.prototype.getTimezoneOffset = function () {
    return minutesOffset;
  };
};

const resetTimezoneOffset = function () {
  Date.prototype.getTimezoneOffset = getTimezoneOffset;
};

global.test = global.test || function (name, cb) {
  cb();
};

if (Object.isExtensible(assert)) {
  assert.lengthIs = function (actual, expected, message) {
    const actualLen = actual ? actual.length : 0;
    const msg = message || `Expected length to be ${expected}, but got ${actualLen}`;
    assert.strictEqual(actualLen, expected, msg);
  };

  assert.same = function (actual, expected, message) {
    for (const key in expected) {
      const msg = message || `Expected property ${key} to match`;
      assert.strictEqual(actual ? actual[key] : undefined, expected[key], msg);
    }
  };

  assert.emits = function (item, eventName, callback, message) {
    let called = false;
    const id = setTimeout(function () {
      test("Should have called '" + eventName + "' event", function () {
        assert.ok(called, message || "Expected '" + eventName + "' to be called.");
      });
    }, 5000);

    item.once(eventName, function () {
      if (eventName === 'error') {
        assert.ok(
          arguments[0] instanceof Error,
          'Expected error events to throw instances of Error but found: ' +
            sys.inspect(arguments[0])
        );
      }
      called = true;
      clearTimeout(id);
      assert.ok(true, 'called ' + eventName);
      if (callback) {
        callback.apply(item, arguments);
      }
    });
  };

  assert.calls = function (cb) {
    let called = 0;
    return function () {
      called++;
      return cb.apply(this, arguments);
    };
  };

  assert.success = function (callback) {
    return function (err) {
      assert.ifError(err);
      if (callback) {
        const args = Array.prototype.slice.call(arguments, 1);
        callback.apply(this, args);
      }
    };
  };

  assert.raises = function (cb, message) {
    let raised = false;
    try {
      cb();
    } catch (err) {
      raised = true;
    }
    assert.ok(raised, message || 'Expected block to raise error, but it did not.');
  };

  assert.isNull = function (val, message) {
    const msg = message || `Expected ${val} to be null`;
    assert.strictEqual(val, null, msg);
  };

  assert.isNotNull = function (val, message) {
    const msg = message || `Expected value not to be null`;
    assert.notStrictEqual(val, null, msg);
  };

  assert.empty = function (val, message) {
    const len = val ? val.length : 0;
    const msg = message || `Expected collection to be empty, but got length ${len}`;
    assert.strictEqual(len, 0, msg);
  };

  assert.notEmpty = function (val, message) {
    const len = val ? val.length : 0;
    const msg = message || 'Expected collection not to be empty';
    assert.notStrictEqual(len, 0, msg);
  };

  assert.equalBuffers = function (actual, expected, message) {
    const msg = message || 'Expected buffers to be equal';
    assert.strictEqual(
      Buffer.compare(Buffer.from(actual), Buffer.from(expected)),
      0,
      msg
    );
  };
}

// -----------------------------------------------------------------------------
// 2. Test and Suite Execution Framework
// -----------------------------------------------------------------------------

class Test {
  constructor(name, cb) {
    this.name = name;
    this.action = cb;
    this.timeout = parseInt(process.env.TEST_TIMEOUT, 10) || 120000;
  }

  run(cb) {
    try {
      this._run(cb);
    } catch (e) {
      cb(e);
    }
  }

  _run(cb) {
    if (!this.action) {
      return cb();
    }
    if (!this.action.length) {
      const result = this.action.call(this);
      if (!(result || 0).then) {
        return cb();
      }
      result
        .then(() => cb())
        .catch(err => cb(err || new Error('Unhandled promise rejection')));
    } else {
      this.action(cb);
    }
  }
}

class Suite {
  constructor(name) {
    console.log('');
    this.name = name;
    this.passed = 0;
    this.failed = 0;
    this.skipped = 0;
    this.errors = [];
    this.cases = [];
    this.currentTest = null;
    this.currentCallback = null;
    this.currentTimeoutId = null;

    process.removeAllListeners('uncaughtException');

    process.on('uncaughtException', err => {
      process.stdout.write('❌ UNCAUGHT EXCEPTION\n');
      const stackStr = err.stack || err.message || err.toString();
      console.error(stackStr);

      if (this.currentCallback) {
        if (this.currentTimeoutId) {
          clearTimeout(this.currentTimeoutId);
          this.currentTimeoutId = null;
        }
        this.failed++;
        this.errors.push({
          name: this.currentTest ? this.currentTest.name : 'uncaughtException',
          stack: stackStr,
        });
        this.cases.push({
          name: this.currentTest ? this.currentTest.name : 'uncaughtException',
          status: 'FAILED',
          error: stackStr,
        });

        const done = this.currentCallback;
        this.currentTest = null;
        this.currentCallback = null;
        done();
      } else {
        process.exit(255);
      }
    });

    this._queue = async.queue(this.run.bind(this), 1);

    let resultsWritten = false;
    const writeResults = () => {
      if (resultsWritten) return;
      resultsWritten = true;
      try {
        const runTestNames = new Set(this.cases.map(c => c.name));
        this._queue.workersList().forEach(w => {
          const t = w.data;
          if (!runTestNames.has(t.name)) {
            this.cases.push({
              name: t.name,
              status: 'FAILED',
              error: 'Process crashed before this test could execute.',
            });
          }
        });
        const payload = JSON.stringify({name: this.name || '', cases: this.cases});
        process.stdout.write(`\n__TEST_RESULTS_JSON__${payload}__TEST_RESULTS_JSON__\n`);
      } catch (err) {
        console.error('Failed to output JSON results:', err);
      }
    };

    process.on('exit', writeResults);

    this._afterHooks = [];

    this._queue.drain = async () => {
      if (this._afterHooks && this._afterHooks.length > 0) {
        for (const hook of this._afterHooks) {
          try {
            if (hook.length) {
              await new Promise(resolve => hook(resolve));
            } else {
              await hook();
            }
          } catch (e) {
            console.error('Error in after hook:', e);
          }
        }
      }
      console.log(
        `\nFile Summary: ${this.passed} passed, ${this.failed} failed, ${this.skipped} skipped`
      );
      writeResults();
      if (this.errors.length > 0) {
        console.log('\nErrors inside this file:');
        this.errors.forEach(e => {
          console.log(`- ${e.name}:\n${e.stack}\n`);
        });
        process.exit(1);
      } else {
        process.exit(0);
      }
    };
  }

  run(test, cb) {
    process.stdout.write('  ' + test.name + ' ');
    if (!test.action) {
      process.stdout.write('? - SKIPPED\n');
      this.skipped++;
      this.cases.push({name: test.name, status: 'SKIPPED'});
      return cb();
    }

    this.currentTest = test;

    let called = false;
    const done = () => {
      if (called) return;
      called = true;
      if (this.currentTimeoutId) {
        clearTimeout(this.currentTimeoutId);
        this.currentTimeoutId = null;
      }
      this.currentTest = null;
      this.currentCallback = null;
      cb();
    };
    this.currentCallback = done;

    const tid = setTimeout(() => {
      this.currentTimeoutId = null;
      const err = Error(
        `test: ${test.name} did not complete within ${test.timeout}ms`
      );
      process.stdout.write('❌ TIMEOUT\n');
      this.failed++;
      this.errors.push({name: test.name, stack: err.stack});
      this.cases.push({name: test.name, status: 'FAILED', error: err.stack});
      done();
    }, test.timeout);
    this.currentTimeoutId = tid;

    test.run(err => {
      if (this.currentTimeoutId) {
        clearTimeout(this.currentTimeoutId);
        this.currentTimeoutId = null;
      }
      if (err) {
        process.stdout.write('❌ FAILED\n');
        this.failed++;
        const stackStr = err.stack || err.message || err.toString();
        this.errors.push({
          name: test.name,
          stack: stackStr,
        });
        this.cases.push({name: test.name, status: 'FAILED', error: stackStr});
        done();
      } else {
        process.stdout.write('✔\n');
        this.passed++;
        this.cases.push({name: test.name, status: 'PASSED'});
        done();
      }
    });
  }

  test(name, cb) {
    if (this._hasOnly && !this._onlyNames.has(name)) {
      return;
    }
    const test = new Test(name, cb);
    this._queue.push(test);
  }

  only(name, cb) {
    if (!this._hasOnly) {
      this._hasOnly = true;
      this._onlyNames = new Set();
      this._queue.kill();
      this._queue = async.queue(this.run.bind(this), 1);
    }
    this._onlyNames.add(name);
    const test = new Test(name, cb);
    this._queue.push(test);
  }

  skip(name, cb) {
    const test = new Test(name, null);
    this._queue.push(test);
  }

  after(fn) {
    this._afterHooks = this._afterHooks || [];
    this._afterHooks.push(fn);
  }
}

// -----------------------------------------------------------------------------
// 3. Database Connection and Table Fixture Helpers
// -----------------------------------------------------------------------------

const connect = function (callback) {
  const client = new Client();
  client.connect(
    expect(function (err) {
      if (err) return callback(err);
      callback(null, client, function () {
        client.end();
      });
    })
  );
};

const names = [
  'Aaron',
  'Brian',
  'Chad',
  'Dan',
  'Eddie',
  'Fred',
  'Guy',
  'Harry',
  'Ivan',
  'Jones',
  'Kitty',
  'Luke',
  'Mary',
  'Ned',
  'Otto',
  'Peter',
  'Quinn',
  'Ryan',
  'Sal',
  'Tom',
  'Uri',
  'Vic',
  'Wayne',
  'Xavier',
  'Yoyo',
  'Zanzabar',
];

const createPersonTable = async client => {
  await client.query(
    'CREATE TABLE IF NOT EXISTS person (id bigint generated by default as identity (bit_reversed_positive) primary key, name varchar(10), age integer)'
  );
  await client.query('DELETE FROM person WHERE 1=1');
  await client.query(
    'INSERT INTO person (name, age) VALUES' +
      names.map((name, i) => ` ('${name}', ${(i + 1) * 10})`).join(',')
  );
};

const client = function (cb) {
  const c = new Client();
  c.connect(cb);
  return c;
};

const versionGTE = function (cl, testVersion, callback) {
  cl.query(
    'SHOW server_version_num',
    assert.calls(function (err, result) {
      if (err) return callback(err);
      const version = parseInt(result.rows[0].server_version_num, 10);
      return callback(null, version >= testVersion);
    })
  );
};

module.exports = {
  Suite,
  Test,
  pg,
  Client,
  connect,
  client,
  versionGTE,
  expect,
  setTimezoneOffset,
  resetTimezoneOffset,
  createPersonTable,
  names,
  sys,
  args: {native: false},
  config: {
    native: false,
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || '',
    database: process.env.PGDATABASE || 'postgres',
  },
};
