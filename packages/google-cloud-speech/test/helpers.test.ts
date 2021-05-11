/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

'use strict';

import * as assert from 'assert';
import {afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import * as stream from 'stream';
import * as speech from '../src';

describe('Speech helper methods', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  describe('streamingRecognize', () => {
    const CONFIG: speech.protos.google.cloud.speech.v1.IStreamingRecognitionConfig =
      {
        config: {encoding: 'LINEAR16', languageCode: 'en-us'},
      };
    const OPTIONS = {timeout: Infinity};

    it('writes the config to the resulting stream', done => {
      const client = new speech.v1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();

      // Stub the underlying _streamingRecognize method to just return
      // a bogus stream.
      const requestStream = new stream.PassThrough({objectMode: true});
      const sr = sandbox
        .stub(client.innerApiCalls, 'streamingRecognize')
        .returns(requestStream);

      // Call the new helper method and establish that the config was
      // forwarded as expected.
      const userStream = client.streamingRecognize(CONFIG, OPTIONS);

      // Establish that the underlying streamingRecognize was called with
      // the options.
      assert(sr.calledOnce);
      assert(sr.calledWithExactly(OPTIONS));

      requestStream._write = (data, enc, next) => {
        assert.deepStrictEqual(data, {
          streamingConfig: CONFIG,
        });
        setImmediate(done);
        next(null);
      };

      userStream.write(undefined);
    });

    it('does not require options', () => {
      const client = new speech.v1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();

      // Stub the underlying _streamingRecognize method to just return
      // a bogus stream.
      const requestStream = new stream.PassThrough({objectMode: true});
      const sr = sandbox
        .stub(client.innerApiCalls, 'streamingRecognize')
        .returns(requestStream);

      const userStream = client.streamingRecognize(CONFIG);

      userStream.emit('writing');

      assert(sr.calledOnce);
      assert(sr.calledWithExactly({}));
    });

    it('destroys the user stream when the request stream errors', done => {
      const client = new speech.v1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();

      // Stub the underlying _streamingRecognize method to just return
      // a bogus stream.
      const requestStream = new stream.PassThrough({objectMode: true});
      sandbox
        .stub(client.innerApiCalls, 'streamingRecognize')
        .returns(requestStream);

      const userStream = client.streamingRecognize(CONFIG, OPTIONS);

      const error = new Error('Request stream error');

      userStream.once('error', (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });

      requestStream.emit('error', error);
    });

    it('re-emits response from the request stream', done => {
      const client = new speech.v1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();

      // Stub the underlying _streamingRecognize method to just return
      // a bogus stream.
      const requestStream = new stream.PassThrough({objectMode: true});
      sandbox
        .stub(client.innerApiCalls, 'streamingRecognize')
        .returns(requestStream);

      const userStream = client.streamingRecognize(CONFIG, OPTIONS);

      const response = {};

      userStream.on('response', (_response: {}) => {
        assert.strictEqual(_response, response);
        done();
      });

      userStream.emit('writing');
      requestStream.emit('response', response);
    });

    it('wraps incoming audio data', done => {
      const client = new speech.v1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();

      // Stub the underlying _streamingRecognize method to just return
      // a bogus stream.
      const requestStream = new stream.PassThrough({objectMode: true});

      sandbox
        .stub(client.innerApiCalls, 'streamingRecognize')
        .returns(requestStream);

      const userStream = client.streamingRecognize(CONFIG, OPTIONS);
      const audioContent = Buffer.from('audio content');

      let count = 0;
      requestStream._write = (data, enc, next) => {
        if (count === 0) {
          assert.deepStrictEqual(data, {
            streamingConfig: CONFIG,
          });
        } else if (count === 1) {
          assert.deepStrictEqual(data, {
            audioContent,
          });
          setImmediate(done);
        }
        count++;
        next(null);
      };

      userStream.end(audioContent);
    });
  });
});
