// Copyright 2025 Google LLC
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

import {ESM_SRC_PATH, LibraryConfig} from '../src/library';
import {describe, it} from 'mocha';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as fs from 'fs';
import * as path from 'path';

const FAKE_DIRECTORY = 'sometestdir';
const FAKE_DEST_DIRECTORY = 'sometestdestdir';

describe('LibraryConfig', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('constructor', () => {
    it('should set directory and destDirectory', () => {
      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
      });
      assert.strictEqual(libraryConfig.sourcePath, FAKE_DIRECTORY);
      assert.strictEqual(libraryConfig.destinationPath, FAKE_DEST_DIRECTORY);
    });

    it('should set whether isEsm and the appropriate srcPath', () => {
      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
        isEsm: true,
      });
      assert.strictEqual(libraryConfig.isEsm, true);
      assert.strictEqual(libraryConfig.srcPath, ESM_SRC_PATH);
    });
  });
  describe('getHighestVersionWithPrecedence', () => {
    it('should return the highest major version', () => {
      const versions = ['v1', 'v2', 'v3'];
      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
      });
      const highestVersion =
        libraryConfig.getHighestVersionWithPrecedence(versions);
      assert.strictEqual(highestVersion, 'v3');
    });

    it('should return the stable version over beta or alpha', () => {
      const versions = ['v1beta1', 'v1', 'v1alpha1'];
      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
      });
      const highestVersion =
        libraryConfig.getHighestVersionWithPrecedence(versions);
      assert.strictEqual(highestVersion, 'v1');
    });

    it('should return the highest beta version', () => {
      const versions = ['v1beta1', 'v1beta2', 'v1alpha1'];
      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
      });
      const highestVersion =
        libraryConfig.getHighestVersionWithPrecedence(versions);
      assert.strictEqual(highestVersion, 'v1beta2');
    });

    it('should throw an error if no versions are provided', () => {
      const versions: string[] = [];
      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
      });
      assert.throws(
        () => libraryConfig.getHighestVersionWithPrecedence(versions),
        Error,
        'No versions found in library; cannot generate index.ts',
      );
    });
  });

  describe('initialize', () => {
    it('should correctly initialize versions and clients if no default version is provided', async () => {
      const readdirStub = sinon.stub(fs.promises, 'readdir');
      readdirStub.withArgs(path.join(FAKE_DIRECTORY)).resolves([
        {name: 'v1', isDirectory: () => true},
        {name: 'v2', isDirectory: () => true},
      ] as any);
      readdirStub
        .withArgs(path.join(FAKE_DIRECTORY, 'v1', 'src'))
        .resolves([{name: 'v1', isDirectory: () => true}] as any);
      readdirStub
        .withArgs(path.join(FAKE_DIRECTORY, 'v2', 'src'))
        .resolves([{name: 'v2', isDirectory: () => true}] as any);
      const statStub = sinon.stub(fs.promises, 'stat');
      statStub.resolves({} as any);
      const readFileStub = sinon.stub(fs.promises, 'readFile');
      readFileStub
        .withArgs(
          path.join(FAKE_DIRECTORY, 'v1', 'src', 'v1', 'index.ts'),
          'utf8',
        )
        .resolves("export { V1Client } from './v1_client';");
      readFileStub
        .withArgs(
          path.join(FAKE_DIRECTORY, 'v2', 'src', 'v2', 'index.ts'),
          'utf8',
        )
        .resolves("export { V2Client } from './v2_client';");

      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
      });
      await libraryConfig.initialize();

      assert.deepStrictEqual(libraryConfig.versions, ['v1', 'v2']);
      assert.deepStrictEqual(libraryConfig.clientsAndVersions, [
        {version: 'v1', clients: ['V1Client']},
        {version: 'v2', clients: ['V2Client']},
      ]);
      assert.strictEqual(libraryConfig.defaultVersion, 'v2');
    });

    it('should correctly initialize versions and clients if a default version is provided', async () => {
      const readdirStub = sinon.stub(fs.promises, 'readdir');
      readdirStub.withArgs(path.join(FAKE_DIRECTORY)).resolves([
        {name: 'v1', isDirectory: () => true},
        {name: 'v2', isDirectory: () => true},
      ] as any);
      readdirStub
        .withArgs(path.join(FAKE_DIRECTORY, 'v1', 'src'))
        .resolves([{name: 'v1', isDirectory: () => true}] as any);
      readdirStub
        .withArgs(path.join(FAKE_DIRECTORY, 'v2', 'src'))
        .resolves([{name: 'v2', isDirectory: () => true}] as any);
      const statStub = sinon.stub(fs.promises, 'stat');
      statStub.resolves({} as any);
      const readFileStub = sinon.stub(fs.promises, 'readFile');
      readFileStub
        .withArgs(
          path.join(FAKE_DIRECTORY, 'v1', 'src', 'v1', 'index.ts'),
          'utf8',
        )
        .resolves("export { V1Client } from './v1_client';");
      readFileStub
        .withArgs(
          path.join(FAKE_DIRECTORY, 'v2', 'src', 'v2', 'index.ts'),
          'utf8',
        )
        .resolves("export { V2Client } from './v2_client';");

      const libraryConfig = new LibraryConfig({
        sourcePath: FAKE_DIRECTORY,
        destinationPath: FAKE_DEST_DIRECTORY,
        defaultVersion: 'v1',
      });
      await libraryConfig.initialize();

      assert.deepStrictEqual(libraryConfig.versions, ['v1', 'v2']);
      assert.deepStrictEqual(libraryConfig.clientsAndVersions, [
        {version: 'v1', clients: ['V1Client']},
        {version: 'v2', clients: ['V2Client']},
      ]);
      assert.deepStrictEqual(libraryConfig.defaultVersionAndClients, {
        version: 'v1',
        clients: ['V1Client'],
      });
    });
  });
});
