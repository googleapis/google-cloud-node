#!/usr/bin/env node
/*!
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Builds the Go shared core at install time.
 *
 * This runs as the package `postinstall`. It exists because the published
 * artifact deliberately contains only SOURCE for the native core, never a
 * prebuilt binary: a `.so` produced on a developer machine links against that
 * machine's glibc and will fail to load on a different base image. Building
 * here guarantees the binary matches the environment that will run it.
 *
 * The build is REQUIRED, not best-effort. If it cannot be completed this
 * script exits non-zero and fails the install. That is deliberate: this branch
 * exists to measure the Go shared core, and an install that silently produced a
 * pure-JS client would yield a benchmark that looks valid but measures nothing.
 *
 * Escape hatch: set SPANNER_NATIVE_SKIP_BUILD=1 to skip the build entirely.
 * The client then transparently falls back to the pure-JS implementation.
 */

'use strict';

const {execFileSync, spawnSync} = require('child_process');
const fs = require('fs');
const https = require('https');
const os = require('os');
const path = require('path');

const NATIVE_DIR = __dirname;
const GO_DIR = path.join(NATIVE_DIR, 'spanner-go');
const ADDON = path.join(NATIVE_DIR, 'spanner_go.node');

// Used only if go.dev cannot be reached to resolve the current stable release.
const FALLBACK_GO_VERSION = 'go1.25.0';

// Go 1.25 is the first release whose runtime derives GOMAXPROCS from the
// cgroup CPU limit. Older runtimes size the scheduler from the HOST core count,
// so inside a CPU-limited container (e.g. a 2-vCPU Cloud Run instance on a
// many-core host) they spin up far too many Ps. Measured CPU-per-operation was
// ~2.9x higher as a result. Anything older is rejected in favour of a
// downloaded toolchain so that benchmark numbers mean what they appear to.
const MIN_GO_MINOR = 25;

function log(msg) {
  console.log(`[spanner-native] ${msg}`);
}

function fail(msg) {
  console.error('');
  console.error(
    '[spanner-native] =============================================================',
  );
  console.error('[spanner-native] FAILED to build the Go shared core.');
  console.error(`[spanner-native] ${msg}`);
  console.error('[spanner-native]');
  console.error(
    '[spanner-native] This package is a prototype whose entire purpose is the native',
  );
  console.error(
    '[spanner-native] core, so the install fails rather than silently degrading to',
  );
  console.error('[spanner-native] the pure-JS client.');
  console.error('[spanner-native]');
  console.error(
    '[spanner-native] To install anyway (pure-JS behaviour, no native core):',
  );
  console.error('[spanner-native]     SPANNER_NATIVE_SKIP_BUILD=1 npm install');
  console.error(
    '[spanner-native] =============================================================',
  );
  console.error('');
  process.exit(1);
}

/** Resolves the latest stable Go version, e.g. "go1.23.4". */
function latestGoVersion() {
  return new Promise(resolve => {
    const req = https.get(
      'https://go.dev/VERSION?m=text',
      {timeout: 15000},
      res => {
        if (res.statusCode !== 200) {
          res.resume();
          return resolve(FALLBACK_GO_VERSION);
        }
        let body = '';
        res.setEncoding('utf8');
        res.on('data', c => (body += c));
        res.on('end', () => {
          const first = body.split('\n')[0].trim();
          resolve(/^go\d+\.\d+/.test(first) ? first : FALLBACK_GO_VERSION);
        });
      },
    );
    req.on('timeout', () => {
      req.destroy();
      resolve(FALLBACK_GO_VERSION);
    });
    req.on('error', () => resolve(FALLBACK_GO_VERSION));
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const get = target => {
      https
        .get(target, res => {
          if (
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            res.resume();
            return get(res.headers.location);
          }
          if (res.statusCode !== 200) {
            res.resume();
            return reject(
              new Error(`HTTP ${res.statusCode} while fetching ${target}`),
            );
          }
          res.pipe(file);
          file.on('finish', () => file.close(resolve));
        })
        .on('error', reject);
    };
    get(url);
  });
}

/** Returns the `go` binary to use, downloading a toolchain if necessary. */
async function ensureGo() {
  const probe = spawnSync('go', ['version'], {encoding: 'utf8'});
  if (probe.status === 0) {
    const m = /go(\d+)\.(\d+)/.exec(probe.stdout || '');
    if (m && (Number(m[1]) > 1 || Number(m[2]) >= MIN_GO_MINOR)) {
      log(`using system Go: ${probe.stdout.trim()}`);
      return 'go';
    }
    log(
      `system Go is too old (${(probe.stdout || '').trim()}), need >= 1.${MIN_GO_MINOR}`,
    );
  }

  const platform = process.platform; // linux | darwin
  const archMap = {x64: 'amd64', arm64: 'arm64'};
  const arch = archMap[process.arch];
  if (!arch || (platform !== 'linux' && platform !== 'darwin')) {
    fail(
      `No Go toolchain available and no prebuilt download for ${process.platform}/${process.arch}.`,
    );
  }

  const version = process.env.SPANNER_GO_VERSION || (await latestGoVersion());
  const root = path.join(os.tmpdir(), `spanner-go-toolchain-${version}`);
  const goBin = path.join(root, 'go', 'bin', 'go');
  if (fs.existsSync(goBin)) {
    log(`reusing downloaded Go toolchain at ${root}`);
    return goBin;
  }

  const tarName = `${version}.${platform}-${arch}.tar.gz`;
  const url = `https://go.dev/dl/${tarName}`;
  const tarPath = path.join(os.tmpdir(), tarName);

  log(`no usable Go found; downloading ${url}`);
  try {
    await download(url, tarPath);
  } catch (e) {
    fail(`Could not download the Go toolchain: ${e.message}`);
  }

  fs.mkdirSync(root, {recursive: true});
  try {
    execFileSync('tar', ['-C', root, '-xzf', tarPath], {stdio: 'inherit'});
  } catch (e) {
    fail(`Could not extract the Go toolchain: ${e.message}`);
  }
  fs.rmSync(tarPath, {force: true});

  if (!fs.existsSync(goBin)) {
    fail(`Go toolchain extracted but ${goBin} is missing.`);
  }
  log(`downloaded Go toolchain to ${root}`);
  return goBin;
}

/**
 * Pre-stages the Node N-API headers so build.sh does not have to shell out to
 * curl, which is absent from some slim base images.
 */
async function ensureNodeHeaders() {
  const bundled = path.resolve(process.execPath, '../../include/node');
  if (fs.existsSync(path.join(bundled, 'node_api.h'))) {
    return;
  }
  const target = path.join(os.tmpdir(), 'node_headers');
  if (fs.existsSync(path.join(target, 'include', 'node', 'node_api.h'))) {
    return;
  }
  const v = process.version;
  const url = `https://nodejs.org/dist/${v}/node-${v}-headers.tar.gz`;
  const tarPath = path.join(os.tmpdir(), `node-${v}-headers.tar.gz`);
  log(`fetching Node headers for ${v}`);
  try {
    await download(url, tarPath);
    fs.mkdirSync(target, {recursive: true});
    execFileSync('tar', ['-C', target, '--strip-components=1', '-xzf', tarPath], {
      stdio: 'inherit',
    });
    fs.rmSync(tarPath, {force: true});
  } catch (e) {
    log(`could not pre-fetch Node headers (${e.message}); build.sh will retry`);
  }
}

async function main() {
  if (process.env.SPANNER_NATIVE_SKIP_BUILD === '1') {
    log('SPANNER_NATIVE_SKIP_BUILD=1 -- skipping native build (pure-JS client).');
    return;
  }

  if (!fs.existsSync(path.join(GO_DIR, 'main.go'))) {
    fail(`Native sources are missing (expected ${GO_DIR}/main.go).`);
  }

  if (fs.existsSync(ADDON)) {
    try {
      require(ADDON);
      log('native core already built and loadable -- nothing to do.');
      return;
    } catch (e) {
      log(`existing addon is not loadable (${e.message}); rebuilding.`);
      fs.rmSync(ADDON, {force: true});
    }
  }

  const go = await ensureGo();
  await ensureNodeHeaders();

  const goBinDir = go === 'go' ? null : path.dirname(go);
  const env = Object.assign({}, process.env, {
    // Keep the module/build caches inside the build sandbox.
    GOCACHE: process.env.GOCACHE || path.join(os.tmpdir(), 'spanner-go-cache'),
    GOFLAGS: process.env.GOFLAGS || '',
  });
  if (goBinDir) {
    env.PATH = `${goBinDir}${path.delimiter}${env.PATH}`;
    env.GOROOT = path.dirname(goBinDir);
  }

  log('building the Go shared library and the N-API addon...');
  const build = spawnSync('bash', [path.join(GO_DIR, 'build.sh')], {
    stdio: 'inherit',
    env,
    cwd: GO_DIR,
  });
  if (build.status !== 0) {
    fail(`build.sh exited with status ${build.status}.`);
  }

  if (!fs.existsSync(ADDON)) {
    fail(`build.sh reported success but ${ADDON} was not produced.`);
  }

  // Load it here rather than discovering at the first query that, say, the
  // shared library needs a newer glibc than this image provides.
  try {
    require(ADDON);
  } catch (e) {
    fail(`The built addon could not be loaded: ${e.message}`);
  }

  log('Go shared core built successfully.');
}

main().catch(e => fail(e && e.stack ? e.stack : String(e)));
