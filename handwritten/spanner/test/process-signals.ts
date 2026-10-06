// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {spawn} from 'child_process';
import {before, describe, it} from 'mocha';
import * as path from 'path';

// The compiled tests run from build/test, so these resolve to build/src.
const SPANNER_ENTRY_POINT = path.resolve(__dirname, '..', 'src');
const METRICS_TRACER_FACTORY = path.resolve(
  __dirname,
  '..',
  'src',
  'metrics',
  'metrics-tracer-factory',
);

// How long the library waits for the metrics flush before it lets the process
// exit anyway (SHUTDOWN_FLUSH_TIMEOUT_MS in src/index.ts).
const FLUSH_TIMEOUT_MS = 5000;

// How long the child gets to exit after a signal before it is killed with
// SIGKILL, so that a regression fails the test instead of hanging.
const KILL_AFTER_MS = FLUSH_TIMEOUT_MS + 5000;

// Loads the library and keeps the event loop alive the way a server would.
// The metrics flush is replaced with a fake one, so that the test does not
// depend on Cloud Monitoring and can see when the flush happens. Progress is
// reported with synchronous writes, so that nothing is lost when the process
// is terminated by a signal.
const CHILD_SCRIPT = `
  const fs = require('fs');
  const options = JSON.parse(process.argv[1]);
  const report = line => fs.writeSync(1, line + '\\n');
  const appHandler = () => {
    report('APP_HANDLER');
    setTimeout(() => process.exit(0), 1000);
  };

  if (options.appHandler === 'once-before-load') {
    process.once('SIGTERM', appHandler);
  }

  const {Spanner} = require(${JSON.stringify(SPANNER_ENTRY_POINT)});
  const {MetricsTracerFactory} = require(${JSON.stringify(METRICS_TRACER_FACTORY)});

  MetricsTracerFactory.resetInstance = () => {
    report('FLUSH_STARTED');
    if (options.flush === 'never') {
      return new Promise(() => {});
    }
    return new Promise(resolve => {
      setTimeout(() => {
        report('FLUSHED');
        resolve();
      }, 200);
    });
  };

  if (options.appHandler === 'on-after-load') {
    process.on('SIGTERM', appHandler);
  }

  new Spanner({projectId: 'test-project'});
  setInterval(() => {}, 1000);
  report('READY');
`;

// The ways the application can add its own SIGTERM handler, which exits with
// code 0 a second after the signal.
const APP_HANDLERS = [
  {
    appHandler: 'on-after-load',
    description: 'added with process.on() after loading the library',
  },
  {
    appHandler: 'once-before-load',
    description: 'added with process.once() before loading the library',
  },
] as const;

interface ChildOptions {
  // 'quick' finishes the metrics flush after a short delay, 'never' never does.
  flush: 'quick' | 'never';
  // How the application adds its own SIGTERM handler, if it has one.
  appHandler?: (typeof APP_HANDLERS)[number]['appHandler'];
}

interface Step {
  // Send `signal` once the child has reported this line.
  after: string;
  signal: NodeJS.Signals;
}

interface ChildResult {
  // The lines the child reported, in order.
  reported: string[];
  exitCode: number | null;
  exitSignal: NodeJS.Signals | null;
  // Time between the last signal and the exit of the child.
  msAfterLastSignal: number;
}

/**
 * Runs CHILD_SCRIPT in a new process, sends it the signals described by
 * `steps`, and reports how the process exited.
 */
function runChild(options: ChildOptions, steps: Step[]): Promise<ChildResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ['-e', CHILD_SCRIPT, JSON.stringify(options)],
      {
        // Real metrics are not needed, the flush is faked.
        env: {...process.env, SPANNER_DISABLE_BUILTIN_METRICS: 'true'},
        stdio: ['ignore', 'pipe', 'pipe'],
      },
    );
    const reported: string[] = [];
    let partialLine = '';
    let stderr = '';
    let nextStep = 0;
    let lastSignalAt = 0;
    let killTimer: NodeJS.Timeout | undefined;

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', chunk => (stderr += chunk));
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', chunk => {
      const lines = (partialLine + chunk).split('\n');
      partialLine = lines.pop() ?? '';
      for (const line of lines) {
        reported.push(line);
        if (nextStep < steps.length && line === steps[nextStep].after) {
          child.kill(steps[nextStep++].signal);
          lastSignalAt = Date.now();
          clearTimeout(killTimer);
          killTimer = setTimeout(() => child.kill('SIGKILL'), KILL_AFTER_MS);
        }
      }
    });
    child.on('error', reject);
    // 'close' rather than 'exit', so that all of the output has been read.
    child.on('close', (exitCode, exitSignal) => {
      clearTimeout(killTimer);
      if (nextStep < steps.length) {
        reject(
          new Error(
            `Child process exited before reporting ${steps[nextStep].after} (code=${exitCode}, signal=${exitSignal}). Reported: ${reported.join(', ')}\n${stderr}`,
          ),
        );
        return;
      }
      resolve({
        reported,
        exitCode,
        exitSignal,
        msAfterLastSignal: Date.now() - lastSignalAt,
      });
    });
  });
}

// Regression tests for https://github.com/googleapis/google-cloud-node/issues/9513.
// Node.js only exits on SIGINT/SIGTERM by default while nothing is listening
// for the signal, so the listeners that flush the built-in metrics must not
// keep the process alive.
describe('process signal handling', () => {
  before(function () {
    // Windows has no POSIX signals: ChildProcess.kill() always terminates the
    // process forcefully, so this behavior cannot be observed there.
    if (process.platform === 'win32') {
      this.skip();
    }
  });

  for (const signal of ['SIGTERM', 'SIGINT'] as const) {
    it(`should flush metrics and then exit on ${signal}`, async function () {
      this.timeout(30000);

      const {reported, exitCode, exitSignal} = await runChild(
        {flush: 'quick'},
        [{after: 'READY', signal}],
      );

      assert.ok(
        reported.includes('FLUSHED'),
        `Expected metrics to be flushed. Reported: ${reported.join(', ')}`,
      );
      assert.strictEqual(
        exitSignal,
        signal,
        `Expected the process to be terminated by ${signal}, but it exited with code=${exitCode}, signal=${exitSignal}`,
      );
    });
  }

  for (const {appHandler, description} of APP_HANDLERS) {
    it(`should leave exiting to an application handler ${description}`, async function () {
      this.timeout(30000);

      const {reported, exitCode, exitSignal} = await runChild(
        {flush: 'quick', appHandler},
        [{after: 'READY', signal: 'SIGTERM'}],
      );

      assert.ok(
        reported.includes('APP_HANDLER') && reported.includes('FLUSHED'),
        `Expected the application handler to run and metrics to be flushed. Reported: ${reported.join(', ')}`,
      );
      assert.deepStrictEqual(
        {exitCode, exitSignal},
        {exitCode: 0, exitSignal: null},
        'Expected the application to decide when the process exits',
      );
    });
  }

  it('should exit right away on a second signal while flushing metrics', async function () {
    this.timeout(30000);

    const {exitCode, exitSignal, msAfterLastSignal} = await runChild(
      {flush: 'never'},
      [
        {after: 'READY', signal: 'SIGINT'},
        {after: 'FLUSH_STARTED', signal: 'SIGINT'},
      ],
    );

    assert.strictEqual(
      exitSignal,
      'SIGINT',
      `Expected the process to be terminated by SIGINT, but it exited with code=${exitCode}, signal=${exitSignal}`,
    );
    assert.ok(
      msAfterLastSignal < FLUSH_TIMEOUT_MS / 2,
      `Expected the process to exit right after the second signal, but it took ${msAfterLastSignal}ms`,
    );
  });

  it('should exit even if flushing metrics never finishes', async function () {
    this.timeout(30000);

    const {reported, exitCode, exitSignal} = await runChild({flush: 'never'}, [
      {after: 'READY', signal: 'SIGTERM'},
    ]);

    assert.ok(
      reported.includes('FLUSH_STARTED'),
      `Expected a metrics flush to be started. Reported: ${reported.join(', ')}`,
    );
    assert.strictEqual(
      exitSignal,
      'SIGTERM',
      `Expected the process to be terminated by SIGTERM, but it exited with code=${exitCode}, signal=${exitSignal}`,
    );
  });
});
