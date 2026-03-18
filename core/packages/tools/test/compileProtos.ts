/**
 * Copyright 2020 Google LLC
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

import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import {ncp} from 'ncp';
import * as util from 'util';
import * as path from 'path';
import * as protobuf from 'protobufjs';
import * as compileProtos from '../src/compileProtos';

const ncpp = util.promisify(ncp);
const readFile = util.promisify(fs.readFile);
const mkdir = util.promisify(fs.mkdir);

const cwd = process.cwd();
const testDir = path.join(cwd, '.compileProtos-test');
const resultDir = path.join(testDir, 'protos');
const fixturesDir = path.join(cwd, 'build', 'test', 'fixtures');

const expectedJsonResultFile = path.join(resultDir, 'protos.json');
const expectedJSResultFile = path.join(resultDir, 'protos.js');
const expectedTSResultFile = path.join(resultDir, 'protos.d.ts');
const expectedCommonJSResultFile = path.join(resultDir, 'protos.cjs');

describe('compileProtos tool', () => {
  beforeEach(async () => {
    if (fs.existsSync(testDir)) {
      await fsp.rm(testDir, {recursive: true, force: true});
    }
    await mkdir(testDir);
    await mkdir(resultDir);
    const fixturesContent = await fsp.readdir(fixturesDir);
    for (const fixture of fixturesContent) {
      await ncpp(path.join(fixturesDir, fixture), path.join(testDir, fixture));
    }

    process.chdir(testDir);
  });

  afterEach(() => {
    process.chdir(cwd);
  });

  it('fetches gax from the appropriate place', async () => {
    assert.deepStrictEqual(fs.readdirSync(compileProtos.gaxProtos), [
      'compute_operations.d.ts',
      'compute_operations.js',
      'compute_operations.json',
      'google',
      'http.d.ts',
      'http.js',
      'iam_service.d.ts',
      'iam_service.js',
      'iam_service.json',
      'locations.d.ts',
      'locations.js',
      'locations.json',
      'operations.d.ts',
      'operations.js',
      'operations.json',
      'status.json',
    ]);
  });
  it('compiles protos to JSON, JS, TS', async function () {
    this.timeout(20000);
    await compileProtos.main(['protoLists']);
    assert(fs.existsSync(expectedJsonResultFile));
    assert(fs.existsSync(expectedJSResultFile));
    assert(fs.existsSync(expectedTSResultFile));

    const json = await readFile(expectedJsonResultFile);
    const root = protobuf.Root.fromJSON(JSON.parse(json.toString()));
    assert(root.lookup('TestMessage'));
    assert(root.lookup('LibraryService'));

    const js = await readFile(expectedJSResultFile);
    assert(js.toString().includes('TestMessage'));
    assert(js.toString().includes('LibraryService'));
    assert(
      js.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      js
        .toString()
        .includes('require("google-gax/build/src/protobuf").protobufMinimal'),
    );
    assert(!js.toString().includes('require("protobufjs/minimal")'));

    // check that it uses proper root object; it's taken from fixtures/package.json
    assert(js.toString().includes('$protobuf.roots._org_fake_package'));

    const ts = await readFile(expectedTSResultFile);
    assert(ts.toString().includes('TestMessage'));
    assert(ts.toString().includes('LibraryService'));
    assert(ts.toString().includes('import Long = require'));
    assert(!ts.toString().includes('import * as Long'));
    assert(
      ts.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      ts
        .toString()
        .includes('import type {protobuf as $protobuf} from "google-gax"'),
    );
    assert(!ts.toString().includes('import * as $protobuf from "protobufjs"'));
  });

  it('compiles protos to CJS and ES6 if --esm is specified', async function () {
    this.timeout(20000);
    await compileProtos.main(['--esm', 'esm']);
    assert(fs.existsSync(expectedJsonResultFile));
    assert(fs.existsSync(expectedJSResultFile));
    assert(fs.existsSync(expectedTSResultFile));
    assert(fs.existsSync(expectedCommonJSResultFile));

    const json = await readFile(expectedJsonResultFile);
    const root = protobuf.Root.fromJSON(JSON.parse(json.toString()));
    assert(root.lookup('TestMessage'));
    assert(root.lookup('LibraryService'));

    const cjs = await readFile(expectedCommonJSResultFile);
    assert(cjs.toString().includes('TestMessage'));
    assert(cjs.toString().includes('LibraryService'));
    assert(
      cjs.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      cjs
        .toString()
        .includes('require("google-gax/build/src/protobuf").protobufMinimal'),
    );
    assert(!cjs.toString().includes('require("protobufjs/minimal")'));

    // check that it uses proper root object; it's taken from fixtures/package.json
    assert(cjs.toString().includes('$protobuf.roots._org_fake_package'));

    const js = await readFile(expectedJSResultFile);
    assert(js.toString().includes('TestMessage'));
    assert(js.toString().includes('LibraryService'));
    assert(
      js.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      js
        .toString()
        .includes(
          'import {protobufMinimal  as $protobuf} from "google-gax/build/src/protobuf"',
        ),
    );
    assert(!js.toString().includes('require("protobufjs/minimal")'));
    assert(
      !js
        .toString()
        .includes('import * as $protobuf from "protobufjs/minimal"'),
    );

    // check that it uses proper root object; it's taken from fixtures/package.json
    assert(js.toString().includes('$protobuf.roots._org_fake_package'));

    const ts = await readFile(expectedTSResultFile);
    assert(ts.toString().includes('TestMessage'));
    assert(ts.toString().includes('LibraryService'));
    assert(ts.toString().includes('import Long = require'));
    assert(!ts.toString().includes('import * as Long'));
    assert(
      ts.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      ts
        .toString()
        .includes('import type {protobuf as $protobuf} from "google-gax"'),
    );
    assert(!ts.toString().includes('import * as $protobuf from "protobufjs"'));
  });

  it('compiles protos to JS, TS, skips JSON if asked', async function () {
    this.timeout(20000);
    await compileProtos.main(['--skip-json', 'protoLists']);
    assert(!fs.existsSync(expectedJsonResultFile));
    assert(fs.existsSync(expectedJSResultFile));
    assert(fs.existsSync(expectedTSResultFile));

    const js = await readFile(expectedJSResultFile);
    assert(js.toString().includes('TestMessage'));
    assert(js.toString().includes('LibraryService'));
    assert(
      js.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      js
        .toString()
        .includes('require("google-gax/build/src/protobuf").protobufMinimal'),
    );
    assert(!js.toString().includes('require("protobufjs/minimal")'));

    // check that it uses proper root object; it's taken from fixtures/package.json
    assert(js.toString().includes('$protobuf.roots._org_fake_package'));

    const ts = await readFile(expectedTSResultFile);
    assert(ts.toString().includes('TestMessage'));
    assert(ts.toString().includes('LibraryService'));
    assert(ts.toString().includes('import Long = require'));
    assert(!ts.toString().includes('import * as Long'));
    assert(
      ts.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(
      ts
        .toString()
        .includes('import type {protobuf as $protobuf} from "google-gax"'),
    );
    assert(!ts.toString().includes('import * as $protobuf from "protobufjs"'));
  });

  it('writes an empty object if no protos are given', async () => {
    await compileProtos.main(['protoLists/empty']);
    assert(fs.existsSync(expectedJsonResultFile));
  });

  it('fixes types in the TS file', async () => {
    await compileProtos.main(['dts-update']);
    assert(fs.existsSync(expectedTSResultFile));
    const ts = await readFile(expectedTSResultFile);

    assert(ts.toString().includes('import Long = require'));
    assert(!ts.toString().includes('import * as Long'));
    assert(
      ts.toString().includes('http://www.apache.org/licenses/LICENSE-2.0'),
    );
    assert(ts.toString().includes('longField?: (number|Long|string|null);'));
    assert(
      ts.toString().includes('bytesField?: (Uint8Array|Buffer|string|null);'),
    );
    assert(
      ts
        .toString()
        .includes(
          'enumField?: (google.TestEnum|keyof typeof google.TestEnum|null);',
        ),
    );
    assert(
      ts
        .toString()
        .includes(
          '"case"?: (google.TestEnum|keyof typeof google.TestEnum|null);',
        ),
    );
    assert(ts.toString().includes('public longField: (number|Long|string);'));
    assert(
      ts.toString().includes('public bytesField: (Uint8Array|Buffer|string);'),
    );
    assert(
      ts
        .toString()
        .includes(
          'public enumField: (google.TestEnum|keyof typeof google.TestEnum);',
        ),
    );
    assert(
      ts
        .toString()
        .includes(
          'public case: (google.TestEnum|keyof typeof google.TestEnum);',
        ),
    );
  });

  it('proposes the name for protobuf root', async () => {
    const rootName = await compileProtos.generateRootName(['dts-update']);
    assert.strictEqual(rootName, '_org_fake_package_protos');
  });

  it('uses the nearest package.json to guess the root name', async () => {
    const rootName = await compileProtos.generateRootName([
      path.join(__dirname, 'protoLists', 'empty'),
    ]);
    assert.strictEqual(rootName, 'gapic_tools_protos');
  });

  it('falls back to the default name for protobuf root if unable to guess', async () => {
    const rootName = await compileProtos.generateRootName([
      '/nonexistent/empty',
    ]);
    assert.strictEqual(rootName, 'default_371767bb');
  });

  it('reformat the JSDOC link in the JS and TS file', async function () {
    this.timeout(20000);
    await compileProtos.main(['protoLists']);
    assert(fs.existsSync(expectedJSResultFile));
    assert(fs.existsSync(expectedTSResultFile));
    const js = await readFile(expectedJSResultFile);
    const ts = await readFile(expectedTSResultFile);
    const links = [
      '{@link google.example.library.v1.LibraryService#createShelf}',
      '{@link google.example.library.v1.LibraryService#getShelf}',
      '{@link google.example.library.v1.LibraryService#listShelves}',
      '{@link google.example.library.v1.LibraryService#deleteShelf}',
      '{@link google.example.library.v1.LibraryService#mergeShelves}',
      '{@link google.example.library.v1.LibraryService#createBook}',
      '{@link google.example.library.v1.LibraryService#getBook}',
      '{@link google.example.library.v1.LibraryService#listBooks}',
      '{@link google.example.library.v1.LibraryService#deleteBook}',
      '{@link google.example.library.v1.LibraryService#updateBook}',
      '{@link google.example.library.v1.LibraryService#moveBook}',
    ];
    for (const link of links) {
      const reformate = link.replace('#', '|');
      assert(js.toString().includes(reformate));
      assert(ts.toString().includes(reformate));
      assert.equal(js.toString().includes(link), false);
    }
  });

  it('converts names to camelCase and uses Long by default', async function () {
    this.timeout(20000);
    const dirName = path.join(testDir, 'protoLists', 'parameters');
    await compileProtos.main([dirName]);
    const jsonBuf = await readFile(expectedJsonResultFile);
    const json = JSON.parse(jsonBuf.toString());
    const js = await readFile(expectedJSResultFile);
    assert(json.nested.test.nested.Test.fields.snakeCaseField);
    assert(js.includes('@property {number|Long|null} [checkForceNumber]'));
  });

  it('understands --keep-case', async function () {
    this.timeout(20000);
    const dirName = path.join(testDir, 'protoLists', 'parameters');
    await compileProtos.main(['--keep-case', dirName]);
    const jsonBuf = await readFile(expectedJsonResultFile);
    const json = JSON.parse(jsonBuf.toString());
    const js = await readFile(expectedJSResultFile);
    assert(json.nested.test.nested.Test.fields.snake_case_field);
    assert(js.includes('@property {number|Long|null} [check_force_number]'));
  });

  it('understands --force-number', async function () {
    this.timeout(20000);
    const dirName = path.join(testDir, 'protoLists', 'parameters');
    await compileProtos.main(['--force-number', dirName]);
    const jsonBuf = await readFile(expectedJsonResultFile);
    const json = JSON.parse(jsonBuf.toString());
    const js = await readFile(expectedJSResultFile);
    assert(json.nested.test.nested.Test.fields.snakeCaseField);
    assert(js.includes('@property {number|null} [checkForceNumber]'));
  });

  it('understands both --keep-case and --force-number', async function () {
    this.timeout(20000);
    const dirName = path.join(testDir, 'protoLists', 'parameters');
    await compileProtos.main(['--keep-case', '--force-number', dirName]);
    const jsonBuf = await readFile(expectedJsonResultFile);
    const json = JSON.parse(jsonBuf.toString());
    const js = await readFile(expectedJSResultFile);
    assert(json.nested.test.nested.Test.fields.snake_case_field);
    assert(js.includes('@property {number|null} [check_force_number]'));
  });
});
