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

'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {spawnSync} = require('child_process');
const {describe, it, beforeEach, afterEach} = globalThis;

const repoRoot = path.resolve(__dirname, '../../..');
const ciDir = path.join(repoRoot, 'ci');

const isWindows = process.platform === 'win32';

function writeFile(filePath, content, mode) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, content, 'utf8');
  if (mode !== undefined && !isWindows) {
    fs.chmodSync(filePath, mode);
  }
}

function runCommand(cmd, args, options = {}) {
  const res = spawnSync(cmd, args, {
    encoding: 'utf8',
    ...options,
  });
  if (res.error) {
    throw res.error;
  }
  return res;
}

function git(cwd, args) {
  const res = runCommand('git', args, {cwd});
  assert.strictEqual(
    res.status,
    0,
    `git ${args.join(' ')} failed: ${res.stderr || res.stdout}`,
  );
  return res.stdout;
}

/**
 * Creates a self-contained temporary git repository that mirrors the layout
 * expected by ci/run_conditional_tests.sh and ci/run_single_test.sh, with
 * stubbed run_single_test / pnpm / turbo binaries so tests execute in <1s.
 */
function createMockRepo(tmpDir, {useRealRunSingleTest = false} = {}) {
  const repoDir = path.join(tmpDir, 'repo');
  const binDir = path.join(tmpDir, 'bin');
  const logFile = path.join(tmpDir, 'events.log');
  const gitDiffCountFile = path.join(tmpDir, 'git-diff-count.log');

  fs.mkdirSync(repoDir, {recursive: true});
  fs.mkdirSync(binDir, {recursive: true});
  fs.writeFileSync(logFile, '', 'utf8');
  fs.writeFileSync(gitDiffCountFile, '', 'utf8');

  // Copy scripts under test into the mock repo's ci/ directory.
  for (const scriptName of [
    'run_conditional_tests.sh',
    'run_single_test.sh',
    'deletecloudbuild.sh',
    'export_triggers.sh',
    'import_triggers.sh',
    'cloudbuild_with_credentials.yaml',
  ]) {
    const src = path.join(ciDir, scriptName);
    const dst = path.join(repoDir, 'ci', scriptName);
    const mode = scriptName.endsWith('.sh') ? 0o755 : 0o644;
    writeFile(dst, fs.readFileSync(src, 'utf8'), mode);
  }

  // Sentinel ci/run_interdependent_tests.sh that fails loudly if ever called.
  writeFile(
    path.join(repoDir, 'ci', 'run_interdependent_tests.sh'),
    '#!/bin/bash\necho "INTERDEPENDENT_CALLED $*" >> "$TEST_LOG_FILE"\nexit 99\n',
    0o755,
  );

  if (!useRealRunSingleTest) {
    // Replace run_single_test.sh with a fast recorder when testing dispatch logic.
    writeFile(
      path.join(repoDir, 'ci', 'run_single_test.sh'),
      [
        '#!/bin/bash',
        'set -e',
        'rel_dir="${PWD#"${PROJECT_ROOT}/"}"',
        'echo "TESTED:${rel_dir}:RUN_INTERDEPENDENT=${RUN_INTERDEPENDENT_TESTS:-unset}" >> "${TEST_LOG_FILE}"',
      ].join('\n') + '\n',
      0o755,
    );
  }

  // Stub pnpm so batch compile and package test execution stay hermetic.
  writeFile(
    path.join(binDir, 'pnpm'),
    ['#!/bin/bash', 'echo "PNPM:$*" >> "${TEST_LOG_FILE}"', 'exit 0'].join(
      '\n',
    ) + '\n',
    0o755,
  );

  // Wrap real git to count every `git diff` invocation.
  const realGit = runCommand('which', ['git']).stdout.trim();
  writeFile(
    path.join(binDir, 'git'),
    [
      '#!/bin/bash',
      'for arg in "$@"; do',
      '  if [[ "$arg" == "diff" ]]; then',
      '    echo "diff $*" >> "${GIT_DIFF_COUNT_FILE}"',
      '    break',
      '  fi',
      'done',
      `exec "${realGit}" "$@"`,
    ].join('\n') + '\n',
    0o755,
  );

  // Create node_modules/.pnpm marker so scripts skip workspace install.
  fs.mkdirSync(path.join(repoDir, 'node_modules', '.pnpm'), {recursive: true});

  // Create representative monorepo packages and ci/export triggers.
  const packages = [
    'handwritten/pkg-a',
    'packages/pkg-1',
    'packages/pkg-2',
    'core/common',
    'core/packages/pkg-core',
    'core/packages/google-auth-library-nodejs',
    'core/dev-packages/pkg-dev',
  ];
  for (const pkg of packages) {
    writeFile(
      path.join(repoDir, pkg, 'package.json'),
      JSON.stringify({name: pkg, version: '1.0.0', scripts: {test: 'echo ok'}}),
    );
    writeFile(path.join(repoDir, pkg, 'CHANGELOG.md'), '# Changelog\n');
    writeFile(
      path.join(repoDir, pkg, 'src', 'index.js'),
      'module.exports = 1;\n',
    );
    if (pkg.startsWith('core/packages/')) {
      writeFile(
        path.join(repoDir, pkg, 'samples', 'package.json'),
        JSON.stringify({name: `${pkg}-samples`, version: '1.0.0'}),
      );
    }
  }
  writeFile(
    path.join(repoDir, 'ci', 'export', 'packages-system-continuous-node.yaml'),
    'name: packages-system-continuous-node\n',
  );
  writeFile(
    path.join(repoDir, 'ci', 'export', 'core-system-presubmit-node.yaml'),
    'name: core-system-presubmit-node\n',
  );
  writeFile(path.join(repoDir, '.release-please-manifest.json'), '{}\n');
  writeFile(path.join(repoDir, 'changelog.json'), '{}\n');
  writeFile(path.join(repoDir, 'release-notes.md'), '# Notes\n');

  git(repoDir, ['init', '-b', 'main']);
  git(repoDir, ['config', 'user.email', 'test@example.com']);
  git(repoDir, ['config', 'user.name', 'Test User']);
  git(repoDir, ['add', '-A']);
  git(repoDir, ['commit', '-m', 'initial commit']);

  return {repoDir, binDir, logFile, gitDiffCountFile};
}

function commitFiles(repoDir, files, message = 'test change') {
  for (const [relPath, content] of Object.entries(files)) {
    writeFile(path.join(repoDir, relPath), content);
  }
  git(repoDir, ['add', '-A']);
  git(repoDir, ['commit', '-m', message]);
}

function runConditionalTests(mock, extraEnv = {}, args = ['--strict']) {
  const env = {
    ...process.env,
    PATH: `${mock.binDir}:${process.env.PATH}`,
    TEST_LOG_FILE: mock.logFile,
    GIT_DIFF_COUNT_FILE: mock.gitDiffCountFile,
    BUILD_TYPE: 'presubmit',
    TEST_TYPE: 'units',
    RUN_TESTS_MODE: 'RUN_UNIT_TESTS',
    SHARD_TOTAL: '1',
    SHARD_INDEX: '0',
    GIT_DIFF_ARG: 'HEAD^1',
    ...extraEnv,
  };
  // Clear inherited GitHub Actions / Cloud Build env vars unless explicitly set.
  for (const key of [
    'GITHUB_HEAD_REF',
    'GITHUB_OUTPUT',
    'HEAD_BRANCH',
    'REF_NAME',
    'IS_CORE',
    'GOOGLE_APPLICATION_CREDENTIALS',
    'JS_RUNTIME',
    'TEST_CMD',
    'RUN_INTERDEPENDENT_TESTS',
  ]) {
    if (!(key in extraEnv)) {
      delete env[key];
    }
  }
  fs.writeFileSync(mock.logFile, '', 'utf8');
  fs.writeFileSync(mock.gitDiffCountFile, '', 'utf8');
  const res = runCommand('bash', ['ci/run_conditional_tests.sh', ...args], {
    cwd: mock.repoDir,
    env,
  });
  const events = fs
    .readFileSync(mock.logFile, 'utf8')
    .split('\n')
    .filter(Boolean);
  const tested = events
    .filter(line => line.startsWith('TESTED:'))
    .map(line => line.split(':')[1]);
  const gitDiffLines = fs
    .readFileSync(mock.gitDiffCountFile, 'utf8')
    .split('\n')
    .filter(Boolean);
  return {res, events, tested, gitDiffLines};
}

describe('ci/ dispatch and Cloud Build scripts', function () {
  this.timeout(30000);
  let tmpDir;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ci-scripts-test-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, {recursive: true, force: true});
  });

  if (isWindows) {
    return;
  }

  describe('ci/run_conditional_tests.sh', () => {
    it('excludes ci/export/ from triggering full-repo test sweeps', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'ci/export/packages-system-continuous-node.yaml':
          'name: packages-system-continuous-node\ndescription: updated\n',
      });

      const {res, tested} = runConditionalTests(mock);
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, []);
      assert.ok(res.stdout.includes('no change detected in ci'));
    });

    it('tests only affected packages when ci/export/ and a package change together', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'ci/export/packages-system-continuous-node.yaml': 'updated: true\n',
        'handwritten/pkg-a/src/index.js': 'module.exports = 2;\n',
      });

      const {res, tested} = runConditionalTests(mock);
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, ['handwritten/pkg-a']);
    });

    it('still triggers full-repo tests when non-export ci/ scripts (including ci/export_triggers.sh) change', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'ci/export_triggers.sh':
          fs.readFileSync(
            path.join(mock.repoDir, 'ci', 'export_triggers.sh'),
            'utf8',
          ) + '# touch\n',
      });

      const {res, tested} = runConditionalTests(mock);
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.ok(res.stdout.includes('change detected in ci'));
      assert.ok(tested.includes('handwritten/pkg-a'));
      assert.ok(tested.includes('packages/pkg-1'));
      assert.ok(tested.includes('core/packages/pkg-core'));
    });

    it('uses a single git diff --name-only pass instead of per-directory git diff subprocesses', () => {
      const mock = createMockRepo(tmpDir);
      // Add extra packages to ensure O(1) git diff invocations regardless of package count.
      const extraFiles = {};
      for (let i = 3; i <= 15; i++) {
        extraFiles[`packages/pkg-${i}/package.json`] = JSON.stringify({
          name: `pkg-${i}`,
          version: '1.0.0',
        });
        extraFiles[`packages/pkg-${i}/src/index.js`] = 'module.exports = 1;\n';
      }
      commitFiles(mock.repoDir, extraFiles, 'add packages');
      commitFiles(mock.repoDir, {
        'packages/pkg-2/src/index.js': 'module.exports = 42;\n',
      });

      const {res, tested, gitDiffLines} = runConditionalTests(mock);
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, ['packages/pkg-2']);
      assert.strictEqual(
        gitDiffLines.length,
        1,
        `expected 1 git diff call, got ${gitDiffLines.length}: ${gitDiffLines.join('; ')}`,
      );
      assert.ok(gitDiffLines[0].includes('--name-only'));
      assert.ok(gitDiffLines[0].includes('--no-renames'));
    });

    it('tests both source and destination packages when a file is moved across packages', () => {
      const mock = createMockRepo(tmpDir);
      writeFile(
        path.join(mock.repoDir, 'packages/pkg-1/src/shared.js'),
        'module.exports = "unique-content-for-rename-detection-1234567890";\n',
      );
      git(mock.repoDir, ['add', '-A']);
      git(mock.repoDir, ['commit', '-m', 'add shared file']);

      git(mock.repoDir, [
        'mv',
        'packages/pkg-1/src/shared.js',
        'packages/pkg-2/src/shared.js',
      ]);
      git(mock.repoDir, ['commit', '-m', 'move file across packages']);

      const {res, tested} = runConditionalTests(mock);
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, ['packages/pkg-1', 'packages/pkg-2']);
    });

    it('short-circuits metadata-only release-please--* PRs and still outputs shard matrix', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        '.release-please-manifest.json': '{"handwritten/pkg-a": "1.0.1"}\n',
        'changelog.json': '{"entries": []}\n',
        'release-notes.md': '# Release Notes\n- updated\n',
        'handwritten/pkg-a/CHANGELOG.md': '# Changelog\n## 1.0.1\n',
        'core/packages/pkg-core/CHANGELOG.md': '# Changelog\n## 1.0.1\n',
      });

      const githubOutput = path.join(tmpDir, 'github_output.txt');
      const matrixRun = runConditionalTests(mock, {
        RUN_TESTS_MODE: 'CALCULATE_SHARD_MATRIX',
        GITHUB_HEAD_REF: 'release-please--branches--main--release-notes',
        GITHUB_OUTPUT: githubOutput,
      });
      assert.strictEqual(
        matrixRun.res.status,
        0,
        matrixRun.res.stderr || matrixRun.res.stdout,
      );
      assert.ok(
        matrixRun.res.stdout.includes('Metadata-only release-please PR'),
      );
      const outputContents = fs.readFileSync(githubOutput, 'utf8');
      assert.ok(outputContents.includes('shard_matrix=[0]'));
      assert.ok(outputContents.includes('shard_total=1'));

      const unitRun = runConditionalTests(mock, {
        GITHUB_HEAD_REF: 'release-please--branches--main',
      });
      assert.strictEqual(
        unitRun.res.status,
        0,
        unitRun.res.stderr || unitRun.res.stdout,
      );
      assert.deepStrictEqual(unitRun.tested, []);
    });

    it('still tests packages whose package.json changes on release-please--* PRs while skipping CHANGELOG-only packages', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        '.release-please-manifest.json': '{"packages/pkg-2": "1.0.1"}\n',
        'packages/pkg-1/CHANGELOG.md': '# Changelog\n## 1.0.1\n',
        'packages/pkg-2/CHANGELOG.md': '# Changelog\n## 1.0.1\n',
        'packages/pkg-2/package.json': JSON.stringify({
          name: 'packages/pkg-2',
          version: '1.0.1',
          scripts: {test: 'echo ok'},
        }),
      });

      const {res, tested} = runConditionalTests(mock, {
        GITHUB_HEAD_REF: 'release-please--branches--main',
      });
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, ['packages/pkg-2']);
    });

    it('does not skip nested fixture files named CHANGELOG.md inside a package', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'packages/pkg-1/test/fixtures/CHANGELOG.md': '# Fixture\n',
      });

      const {res, tested} = runConditionalTests(mock);
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, ['packages/pkg-1']);
    });

    it('does not export RUN_INTERDEPENDENT_TESTS for core system tests', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'core/packages/pkg-core/src/index.js': 'module.exports = 99;\n',
      });

      const {res, events, tested} = runConditionalTests(
        mock,
        {
          IS_CORE: 'true',
          TEST_TYPE: 'system',
          RUN_TESTS_MODE: '',
        },
        [],
      );
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, ['core/packages/pkg-core']);
      assert.ok(
        events.includes(
          'TESTED:core/packages/pkg-core:RUN_INTERDEPENDENT=unset',
        ),
        `unexpected events: ${events.join(', ')}`,
      );
    });

    it('routes google-auth-library-nodejs samples only to credentials trigger and drops dead packages/* entries', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'core/packages/google-auth-library-nodejs/src/index.js':
          'module.exports = 2;\n',
        'core/packages/pkg-core/src/index.js': 'module.exports = 2;\n',
      });

      const withCreds = runConditionalTests(
        mock,
        {
          IS_CORE: 'true',
          TEST_TYPE: 'samples',
          GOOGLE_APPLICATION_CREDENTIALS: '/tmp/creds.json',
          RUN_TESTS_MODE: '',
        },
        [],
      );
      assert.strictEqual(withCreds.res.status, 0, withCreds.res.stderr);
      assert.deepStrictEqual(withCreds.tested, [
        'core/packages/google-auth-library-nodejs',
      ]);

      const withoutCreds = runConditionalTests(
        mock,
        {
          IS_CORE: 'true',
          TEST_TYPE: 'samples',
          RUN_TESTS_MODE: '',
        },
        [],
      );
      assert.strictEqual(withoutCreds.res.status, 0, withoutCreds.res.stderr);
      assert.deepStrictEqual(withoutCreds.tested, ['core/packages/pkg-core']);

      const scriptSource = fs.readFileSync(
        path.join(ciDir, 'run_conditional_tests.sh'),
        'utf8',
      );
      assert.ok(!scriptSource.includes('RUN_INTERDEPENDENT_TESTS'));
      assert.ok(!scriptSource.includes('packages/google-analytics-admin/'));
      assert.ok(
        !scriptSource.includes('packages/google-cloud-developerconnect/'),
      );
    });

    it('fails in --strict mode when GIT_DIFF_ARG references a nonexistent commit', () => {
      const mock = createMockRepo(tmpDir);
      const {res} = runConditionalTests(mock, {
        GIT_DIFF_ARG: 'nonexistent-ref-12345',
      });
      assert.notStrictEqual(res.status, 0);
      assert.ok(res.stderr.includes('git diff --name-only'));
    });

    it('handles core/dev-packages edits cleanly when JS_RUNTIME=bun omits core/dev-packages', () => {
      const mock = createMockRepo(tmpDir);
      commitFiles(mock.repoDir, {
        'core/dev-packages/pkg-dev/src/index.js': 'module.exports = 7;\n',
      });

      const {res, tested} = runConditionalTests(mock, {
        JS_RUNTIME: 'bun',
      });
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      assert.deepStrictEqual(tested, []);
      assert.ok(
        res.stdout.includes('No affected test directories found in diff'),
        res.stdout,
      );
      assert.ok(!res.stdout.includes('Metadata-only'));
    });
  });

  describe('ci/run_single_test.sh', () => {
    it('never invokes ci/run_interdependent_tests.sh even when RUN_INTERDEPENDENT_TESTS=true', () => {
      const mock = createMockRepo(tmpDir, {useRealRunSingleTest: true});
      const pkgDir = path.join(mock.repoDir, 'core/packages/pkg-core');
      const res = runCommand(
        'bash',
        [path.join(mock.repoDir, 'ci/run_single_test.sh')],
        {
          cwd: pkgDir,
          env: {
            ...process.env,
            PATH: `${mock.binDir}:${process.env.PATH}`,
            TEST_LOG_FILE: mock.logFile,
            BUILD_TYPE: 'presubmit',
            TEST_TYPE: 'system',
            RUN_INTERDEPENDENT_TESTS: 'true',
          },
        },
      );
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      const events = fs
        .readFileSync(mock.logFile, 'utf8')
        .split('\n')
        .filter(Boolean);
      assert.ok(!events.some(e => e.startsWith('INTERDEPENDENT_CALLED')));
      assert.ok(events.includes('PNPM:system-test'));
    });
  });

  describe('ci/cloudbuild_with_credentials.yaml', () => {
    it('fails loudly when gcloud secret fetch fails or returns empty payload', () => {
      const yaml = require('js-yaml');
      const config = yaml.load(
        fs.readFileSync(
          path.join(ciDir, 'cloudbuild_with_credentials.yaml'),
          'utf8',
        ),
      );
      const fetchStep = config.steps.find(s => s.id === 'Fetch Credentials');
      assert.ok(fetchStep, 'Fetch Credentials step must exist');
      assert.strictEqual(fetchStep.entrypoint, 'bash');
      const bashCmd = fetchStep.args[1];
      assert.ok(
        bashCmd.includes('pipefail'),
        'Fetch Credentials must enable pipefail',
      );

      const credsOut = path.join(tmpDir, 'creds.json');
      const testCmd = bashCmd.replace(
        /\/workspace\/google_application_credentials\.json/g,
        credsOut,
      );
      const binDir = path.join(tmpDir, 'gcloud-bin');

      // Case 1: gcloud exits non-zero (e.g. secret access denied)
      writeFile(path.join(binDir, 'gcloud'), '#!/bin/bash\nexit 1\n', 0o755);
      const failRes = runCommand('bash', ['-c', testCmd], {
        env: {...process.env, PATH: `${binDir}:${process.env.PATH}`},
      });
      assert.notStrictEqual(
        failRes.status,
        0,
        'pipeline must fail when gcloud exits non-zero',
      );

      // Case 2: gcloud exits 0 with empty stdout
      writeFile(path.join(binDir, 'gcloud'), '#!/bin/bash\nexit 0\n', 0o755);
      const emptyRes = runCommand('bash', ['-c', testCmd], {
        env: {...process.env, PATH: `${binDir}:${process.env.PATH}`},
      });
      assert.notStrictEqual(
        emptyRes.status,
        0,
        'command must fail when credentials file is empty',
      );

      // Case 3: gcloud returns base64url-encoded JSON
      const payload = Buffer.from('{"type":"service_account"}')
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
      writeFile(
        path.join(binDir, 'gcloud'),
        `#!/bin/bash\nprintf '%s\\n' '${payload}'\n`,
        0o755,
      );
      const okRes = runCommand('bash', ['-c', testCmd], {
        env: {...process.env, PATH: `${binDir}:${process.env.PATH}`},
      });
      assert.strictEqual(okRes.status, 0, okRes.stderr);
      assert.strictEqual(
        fs.readFileSync(credsOut, 'utf8'),
        '{"type":"service_account"}',
      );
    });
  });

  describe('ci/deletecloudbuild.sh', () => {
    function setupFakeGcloud(listOutput = '', listExitCode = 0) {
      const binDir = path.join(tmpDir, 'delete-bin');
      const callLog = path.join(tmpDir, 'gcloud-calls.log');
      const listOutFile = path.join(tmpDir, 'gcloud-list-output.txt');
      fs.writeFileSync(callLog, '', 'utf8');
      fs.writeFileSync(listOutFile, listOutput, 'utf8');
      writeFile(
        path.join(binDir, 'gcloud'),
        [
          '#!/bin/bash',
          'printf "%s\\n" "$*" >> "${GCLOUD_CALL_LOG}"',
          'if [[ "$1" == "builds" && "$2" == "list" ]]; then',
          `  cat "${listOutFile}"`,
          `  exit ${listExitCode}`,
          'fi',
          'exit 0',
        ].join('\n') + '\n',
        0o755,
      );
      return {binDir, callLog};
    }

    it('skips cancellation without calling gcloud when REF_NAME is main, refs/heads/main, or unset', () => {
      const {binDir, callLog} = setupFakeGcloud('build-1\n');
      for (const refName of [undefined, '', 'main', 'refs/heads/main']) {
        fs.writeFileSync(callLog, '', 'utf8');
        const env = {
          ...process.env,
          PATH: `${binDir}:${process.env.PATH}`,
          GCLOUD_CALL_LOG: callLog,
        };
        if (refName === undefined) {
          delete env.REF_NAME;
        } else {
          env.REF_NAME = refName;
        }
        const res = runCommand(
          'bash',
          [path.join(ciDir, 'deletecloudbuild.sh')],
          {
            env,
          },
        );
        assert.strictEqual(res.status, 0, res.stderr || res.stdout);
        assert.strictEqual(
          fs.readFileSync(callLog, 'utf8').trim(),
          '',
          `expected no gcloud calls for REF_NAME=${String(refName)}`,
        );
      }
    });

    it('quotes --filter values, escapes quotes, and passes --project=long-door-651 to list and cancel', () => {
      const {binDir, callLog} = setupFakeGcloud('build-aaa\nbuild-bbb\n');
      const res = runCommand(
        'bash',
        [path.join(ciDir, 'deletecloudbuild.sh')],
        {
          env: {
            ...process.env,
            PATH: `${binDir}:${process.env.PATH}`,
            GCLOUD_CALL_LOG: callLog,
            REF_NAME: 'fix/branch"with-quote',
          },
        },
      );
      assert.strictEqual(res.status, 0, res.stderr || res.stdout);
      const calls = fs
        .readFileSync(callLog, 'utf8')
        .split('\n')
        .filter(Boolean);
      assert.strictEqual(calls.length, 3);
      assert.ok(calls[0].includes('--project=long-door-651'));
      assert.ok(
        calls[0].includes(
          '--filter=substitutions.REF_NAME="fix/branch\\"with-quote" AND status="WORKING" AND create_time<"',
        ),
        `unexpected list call: ${calls[0]}`,
      );
      assert.strictEqual(
        calls[1],
        'builds cancel --project=long-door-651 build-aaa',
      );
      assert.strictEqual(
        calls[2],
        'builds cancel --project=long-door-651 build-bbb',
      );
    });

    it('exits non-zero if gcloud builds list fails', () => {
      const {binDir, callLog} = setupFakeGcloud('', 1);
      const res = runCommand(
        'bash',
        [path.join(ciDir, 'deletecloudbuild.sh')],
        {
          env: {
            ...process.env,
            PATH: `${binDir}:${process.env.PATH}`,
            GCLOUD_CALL_LOG: callLog,
            REF_NAME: 'feat/test-branch',
          },
        },
      );
      assert.notStrictEqual(res.status, 0);
    });
  });

  describe('ci/export_triggers.sh and ci/import_triggers.sh', () => {
    it('passes --project=long-door-651 for every trigger YAML in ci/export/', () => {
      const mock = createMockRepo(tmpDir);
      const callLog = path.join(tmpDir, 'trigger-gcloud.log');
      fs.writeFileSync(callLog, '', 'utf8');
      writeFile(
        path.join(mock.binDir, 'gcloud'),
        '#!/bin/bash\nprintf "%s\\n" "$*" >> "${GCLOUD_CALL_LOG}"\nexit 0\n',
        0o755,
      );

      const env = {
        ...process.env,
        PATH: `${mock.binDir}:${process.env.PATH}`,
        GCLOUD_CALL_LOG: callLog,
      };

      const exportRes = runCommand(
        'bash',
        [path.join(mock.repoDir, 'ci', 'export_triggers.sh')],
        {env},
      );
      assert.strictEqual(
        exportRes.status,
        0,
        exportRes.stderr || exportRes.stdout,
      );
      const exportCalls = fs
        .readFileSync(callLog, 'utf8')
        .split('\n')
        .filter(Boolean);
      assert.strictEqual(exportCalls.length, 2);
      assert.ok(
        exportCalls.includes(
          'beta builds triggers export core-system-presubmit-node --project=long-door-651 --destination ci/export/core-system-presubmit-node.yaml',
        ),
        exportCalls.join('\n'),
      );
      assert.ok(
        exportCalls.includes(
          'beta builds triggers export packages-system-continuous-node --project=long-door-651 --destination ci/export/packages-system-continuous-node.yaml',
        ),
        exportCalls.join('\n'),
      );

      fs.writeFileSync(callLog, '', 'utf8');
      const importRes = runCommand(
        'bash',
        [path.join(mock.repoDir, 'ci', 'import_triggers.sh')],
        {env},
      );
      assert.strictEqual(
        importRes.status,
        0,
        importRes.stderr || importRes.stdout,
      );
      const importCalls = fs
        .readFileSync(callLog, 'utf8')
        .split('\n')
        .filter(Boolean);
      assert.strictEqual(importCalls.length, 2);
      assert.ok(
        importCalls.includes(
          'beta builds triggers import --project=long-door-651 --source ci/export/core-system-presubmit-node.yaml',
        ),
        importCalls.join('\n'),
      );
      assert.ok(
        importCalls.includes(
          'beta builds triggers import --project=long-door-651 --source ci/export/packages-system-continuous-node.yaml',
        ),
        importCalls.join('\n'),
      );
    });
  });
});
