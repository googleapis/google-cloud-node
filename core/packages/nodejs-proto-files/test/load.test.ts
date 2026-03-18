// Copyright 2020 Google LLC
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

import assert from 'assert';
import {describe, it} from 'mocha';
import * as path from 'path';
import * as protobuf from 'protobufjs';

import * as googleProtoFiles from '../src';

describe('load', () => {
  const TEST_FILE = path.join(
    __dirname,
    '../../test',
    'fixtures',
    'library.proto',
  );
  it('should not be able to load test file using protobufjs directly', done => {
    protobuf
      .load(TEST_FILE)
      .then(() => {
        done(Error('should not get here'));
      })
      .catch(() => {
        done();
      });
  });

  // note: this test uses downloaded protos that should be installed
  // before running the test. Please make sure to run
  // `npm run prepublishOnly`
  // before running `npm test`.
  it('should load a test file that relies on common protos', done => {
    googleProtoFiles
      .load(TEST_FILE)
      .then(root => {
        assert(root instanceof protobuf.Root);
        assert(
          root.lookup('google.example.library.v1.LibraryService') instanceof
            protobuf.Service,
        );
        assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
        done();
      })
      .catch(done);
  });
});

describe('loadSync', () => {
  const TEST_FILE = path.join(
    __dirname,
    '../../test/fixtures',
    'library.proto',
  );

  it('should load a test file that relies on common protos', () => {
    const root = googleProtoFiles.loadSync(TEST_FILE);
    assert(root instanceof protobuf.Root);
    assert(
      root.lookup('google.example.library.v1.LibraryService') instanceof
        protobuf.Service,
    );
    assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
  });
});

describe('load real proto file', () => {
  it('should load speech.v1', async () => {
    const root = await googleProtoFiles.load(googleProtoFiles.speech.v1);
    assert(
      root.lookup('google.cloud.speech.v1.RecognizeRequest') instanceof
        protobuf.Type,
    );
  });

  it('should load embeddedAssistant.v1alpha2', async () => {
    const root = await googleProtoFiles.load(
      googleProtoFiles.embeddedAssistant.v1alpha2,
    );
    assert(
      root.lookup('google.assistant.embedded.v1alpha2.AssistRequest') instanceof
        protobuf.Type,
    );
  });
});
