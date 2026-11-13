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

const async = require('async');

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

    // Remove the early-abort uncaughtException handler from test-helper.cjs
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
          name: this.currentTest.name,
          stack: stackStr,
        });
        this.cases.push({
          name: this.currentTest.name,
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

    const writeResults = () => {
      try {
        // If there are unrun tasks in the queue, mark them as skipped/failed
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
        console.log('\n__TEST_RESULTS_JSON__' + JSON.stringify({name: this.name, cases: this.cases}));
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

// Bind helper methods onto Suite prototype for suite.test.only and suite.test.skip syntax
Suite.prototype.test.only = function (name, cb) {
  if (this && this.only) {
    this.only(name, cb);
  }
};
Suite.prototype.test.skip = function (name, cb) {
  if (this && this.skip) {
    this.skip(name, cb);
  }
};

module.exports = Suite;
