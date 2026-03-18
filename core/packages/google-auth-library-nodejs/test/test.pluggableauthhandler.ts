// Copyright 2022 Google LLC
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

import * as sinon from 'sinon';
import * as child_process from 'child_process';
import * as fs from 'fs';
import {
  ExecutableResponse,
  ExecutableResponseError,
  ExecutableResponseJson,
  InvalidSuccessFieldError,
} from '../src/auth/executable-response';
import {beforeEach} from 'mocha';
import * as events from 'events';
import * as stream from 'stream';
import {
  PluggableAuthHandler,
  PluggableAuthHandlerOptions,
} from '../src/auth/pluggable-auth-handler';
import * as assert from 'assert';
import {ExecutableError} from '../src/auth/pluggable-auth-client';
import {TestUtils} from './utils';

const OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
const SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';

describe('PluggableAuthHandler', () => {
  const defaultHandlerOptions = {
    command: './command/path/file.exe -opt',
    outputFile: 'output',
    timeoutMillis: 1000,
  } as PluggableAuthHandlerOptions;

  describe('Constructor', () => {
    it('should not throw error with valid options', () => {
      const client = new PluggableAuthHandler(defaultHandlerOptions);

      assert(client instanceof PluggableAuthHandler);
    });

    it('should throw when options is missing command', () => {
      const expectedError = new Error('No command provided.');
      const invalidOptions = {
        outputFile: 'output.txt',
        timeoutMillis: 1000,
      };

      assert.throws(() => {
        return new PluggableAuthHandler(
          invalidOptions as unknown as PluggableAuthHandlerOptions,
        );
      }, expectedError);
    });

    it('should throw when options is missing timeoutMillis', () => {
      const expectedError = new Error('No timeoutMillis provided.');
      const invalidOptions = {
        command: './command -opt',
        outputFile: 'output.txt',
      };

      assert.throws(() => {
        return new PluggableAuthHandler(
          invalidOptions as unknown as PluggableAuthHandlerOptions,
        );
      }, expectedError);
    });

    it('should throw when command cannot be parsed', async () => {
      const expectedError = new Error(
        'Provided command: " " could not be parsed.',
      );
      const invalidHandlerOptions = {
        command: ' ',
        timeoutMillis: 10000,
      } as PluggableAuthHandlerOptions;

      assert.throws(() => {
        return new PluggableAuthHandler(invalidHandlerOptions);
      }, expectedError);
    });
  });

  describe('RetrieveResponseFromExecutable', () => {
    const sandbox = sinon.createSandbox();
    let clock: sinon.SinonFakeTimers;
    const referenceTime = Date.now();
    let spawnEvent: child_process.ChildProcess;
    let spawnStub: sinon.SinonStub<
      [
        command: string,
        args: readonly string[],
        options: child_process.SpawnOptions,
      ],
      child_process.ChildProcess
    >;
    let defaultResponseJson: ExecutableResponseJson;
    const expectedEnvMap = new Map();
    expectedEnvMap.set(
      'GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE',
      SAML_SUBJECT_TOKEN_TYPE,
    );
    expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE', '0');
    const expectedOpts = {
      env: {
        ...process.env,
        ...Object.fromEntries(expectedEnvMap),
      },
    };

    beforeEach(() => {
      // Stub environment variables
      sandbox.stub(process, 'env').value(process.env);
      clock = TestUtils.useFakeTimers(sinon, referenceTime);
      defaultResponseJson = {
        success: true,
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 + 10,
      } as ExecutableResponseJson;

      // Stub child_process.spawn to return an event emitter.
      spawnEvent = new events.EventEmitter() as child_process.ChildProcess;
      spawnEvent.stdout = new events.EventEmitter() as stream.Readable;
      spawnEvent.stderr = new events.EventEmitter() as stream.Readable;
      spawnStub = sandbox.stub(child_process, 'spawn').returns(spawnEvent);
    });

    afterEach(() => {
      sandbox.restore();
      if (clock) {
        clock.restore();
      }
    });

    it('should return error from child process up the stack', async () => {
      const expectedError = new Error('example error');
      spawnStub.throws(new Error('example error'));
      const handler = new PluggableAuthHandler(defaultHandlerOptions);

      await assert.rejects(
        handler.retrieveResponseFromExecutable(new Map<string, string>()),
        expectedError,
      );
    });

    it('should return SAML executable response when successful', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);

      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);

      assert.deepEqual(
        await response,
        new ExecutableResponse(defaultResponseJson),
      );
    });

    it('should return OIDC executable response when successful', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      defaultResponseJson.saml_response = undefined;
      defaultResponseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      defaultResponseJson.id_token = 'subject token';
      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);

      assert.deepEqual(
        await response,
        new ExecutableResponse(defaultResponseJson),
      );
    });

    it('should return SAML executable response when successful and no expiration_time', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      defaultResponseJson.expiration_time = undefined;
      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);

      assert.deepEqual(
        await response,
        new ExecutableResponse(defaultResponseJson),
      );
    });

    it('should return OIDC executable response when successful and no expiration_time', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      defaultResponseJson.expiration_time = undefined;
      defaultResponseJson.saml_response = undefined;
      defaultResponseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      defaultResponseJson.id_token = 'subject token';
      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);

      assert.deepEqual(
        await response,
        new ExecutableResponse(defaultResponseJson),
      );
    });

    it('should call executable with correct command and env variables', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const components = defaultHandlerOptions.command.split(' ');
      const expectedCommand = components[0];
      const expectedArgs = components.slice(1);

      const response = handler.retrieveResponseFromExecutable(expectedEnvMap);
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);
      await response;

      sandbox.assert.calledOnceWithMatch(
        spawnStub,
        expectedCommand,
        expectedArgs,
        expectedOpts,
      );
    });

    it('should call executable with correct command with spaces', async () => {
      const handlerOptions = {
        command: '"./command with/spaces.exe" -opt arg',
        outputFile: 'output',
        timeoutMillis: 1000,
      } as PluggableAuthHandlerOptions;
      const handler = new PluggableAuthHandler(handlerOptions);
      const expectedCommand = './command with/spaces.exe';
      const expectedArgs = ['-opt', 'arg'];

      const response = handler.retrieveResponseFromExecutable(expectedEnvMap);
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);
      await response;

      sandbox.assert.calledOnceWithMatch(
        spawnStub,
        expectedCommand,
        expectedArgs,
        expectedOpts,
      );
    });

    it('should call executable with correct arguments with spaces', async () => {
      const handlerOptions = {
        command: './command/with/path.exe -opt "arg with spaces"',
        outputFile: 'output',
        timeoutMillis: 1000,
      } as PluggableAuthHandlerOptions;
      const handler = new PluggableAuthHandler(handlerOptions);
      const expectedCommand = './command/with/path.exe';
      const expectedArgs = ['-opt', 'arg with spaces'];

      const response = handler.retrieveResponseFromExecutable(expectedEnvMap);
      spawnEvent.stdout!.emit('data', JSON.stringify(defaultResponseJson));
      spawnEvent.emit('close', 0);
      await response;

      sandbox.assert.calledOnceWithMatch(
        spawnStub,
        expectedCommand,
        expectedArgs,
        expectedOpts,
      );
    });

    it('should throw ExecutableError when executable fails', async () => {
      const expectedError = new ExecutableError('test error', '1');
      const handler = new PluggableAuthHandler(defaultHandlerOptions);

      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stderr!.emit('data', 'test error');
      spawnEvent.emit('close', 1);

      await assert.rejects(response, expectedError);
    });

    it('should throw error when executable times out', async () => {
      const expectedError = new Error(
        'The executable failed to finish within the timeout specified.',
      );
      spawnEvent.kill = () => {
        return true;
      };
      const handler = new PluggableAuthHandler(defaultHandlerOptions);

      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      clock.tick(10001);

      await assert.rejects(response, expectedError);
    });

    it('should throw error when non-json text is returned', async () => {
      const expectedError = new ExecutableResponseError(
        'The executable returned an invalid response: THIS_IS_NOT_JSON',
      );
      const handler = new PluggableAuthHandler(defaultHandlerOptions);

      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stdout!.emit('data', 'THIS_IS_NOT_JSON');
      spawnEvent.emit('close', 0);

      await assert.rejects(response, expectedError);
    });

    it('should throw ExecutableResponseError', async () => {
      const expectedError = new InvalidSuccessFieldError(
        "Executable response must contain a 'success' field.",
      );
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const invalidResponse = {
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 + 10,
      };

      const response = handler.retrieveResponseFromExecutable(
        new Map<string, string>(),
      );
      spawnEvent.stdout!.emit('data', JSON.stringify(invalidResponse));
      spawnEvent.emit('close', 0);

      await assert.rejects(response, expectedError);
    });
  });

  describe('retrieveCachedResponse', () => {
    const sandbox = sinon.createSandbox();
    let clock: sinon.SinonFakeTimers;
    const referenceTime = Date.now();
    let realPathStub: sinon.SinonStub<
      [
        path: fs.PathLike,
        options?: fs.ObjectEncodingOptions | BufferEncoding | null | undefined,
      ],
      Promise<string | Buffer>
    >;
    let statStub: sinon.SinonStub<
      [path: fs.PathLike, opts?: fs.StatOptions | undefined],
      Promise<fs.Stats | fs.BigIntStats>
    >;
    let defaultResponseJson: ExecutableResponseJson;

    beforeEach(() => {
      clock = TestUtils.useFakeTimers(sinon, referenceTime);
      defaultResponseJson = {
        success: true,
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 + 10,
      } as ExecutableResponseJson;

      // Stub fs methods, so we don't have to read a real file.
      realPathStub = sandbox.stub(fs.promises, 'realpath').returnsArg(0);
      const fakeStat = Promise.resolve({isFile: () => true} as fs.Stats);
      statStub = sandbox.stub(fs.promises, 'lstat').returns(fakeStat);
    });

    afterEach(() => {
      sandbox.restore();
      if (clock) {
        clock.restore();
      }
    });

    it('should return cached file SAML response when successful', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const response = handler.retrieveCachedResponse();
      sandbox
        .stub(fs.promises, 'readFile')
        .resolves(JSON.stringify(defaultResponseJson));

      assert.deepEqual(
        await response,
        new ExecutableResponse(defaultResponseJson),
      );
    });

    it('should return cached file OIDC response when successful', async () => {
      defaultResponseJson.saml_response = undefined;
      defaultResponseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      defaultResponseJson.id_token = 'subject token';
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const response = handler.retrieveCachedResponse();
      sandbox
        .stub(fs.promises, 'readFile')
        .resolves(JSON.stringify(defaultResponseJson));

      assert.deepEqual(
        await response,
        new ExecutableResponse(defaultResponseJson),
      );
    });

    it('should reject if error returned from output file stream', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const expectedError = new Error('error');
      const response = handler.retrieveCachedResponse();
      sandbox.stub(fs.promises, 'readFile').rejects(expectedError);

      await assert.rejects(response, expectedError);
    });

    it('should return undefined if file response is expired', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      defaultResponseJson.expiration_time = referenceTime / 1000 - 10;
      const response = handler.retrieveCachedResponse();
      sandbox
        .stub(fs.promises, 'readFile')
        .resolves(JSON.stringify(defaultResponseJson));

      assert.equal(await response, undefined);
    });

    it('should return undefined if path cannot be resolved', async () => {
      realPathStub.throws(new Error('ENOENT'));
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const response = handler.retrieveCachedResponse();

      assert.equal(await response, undefined);
    });

    it('should return undefined if outputFile is undefined', async () => {
      const invalidOptions = {
        command: './command.sh',
        timeoutMillis: 1000,
      };
      const handler = new PluggableAuthHandler(invalidOptions);
      const response = handler.retrieveCachedResponse();

      assert.equal(await response, undefined);
    });

    it('should return undefined if output file does not exist', async () => {
      const fakeStat = {isFile: () => false} as fs.Stats;
      statStub.resolves(fakeStat);
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const response = handler.retrieveCachedResponse();
      sandbox
        .stub(fs.promises, 'readFile')
        .resolves(JSON.stringify(defaultResponseJson));

      assert.equal(await response, undefined);
    });

    it('should return undefined if output file is empty', async () => {
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const response = handler.retrieveCachedResponse();
      sandbox.stub(fs.promises, 'readFile').resolves('');

      assert.equal(await response, undefined);
    });

    it('should throw error when non-json text is returned', async () => {
      const expectedError = new ExecutableResponseError(
        'The output file contained an invalid response: THIS_IS_NOT_JSON',
      );
      const handler = new PluggableAuthHandler(defaultHandlerOptions);

      const response = handler.retrieveCachedResponse();
      sandbox.stub(fs.promises, 'readFile').resolves('THIS_IS_NOT_JSON');

      await assert.rejects(response, expectedError);
    });

    it('should throw ExecutableResponseError', async () => {
      const expectedError = new InvalidSuccessFieldError(
        "Executable response must contain a 'success' field.",
      );
      const handler = new PluggableAuthHandler(defaultHandlerOptions);
      const invalidResponse = {
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 + 10,
      };

      const response = handler.retrieveCachedResponse();
      sandbox
        .stub(fs.promises, 'readFile')
        .resolves(JSON.stringify(invalidResponse));

      await assert.rejects(response, expectedError);
    });
  });
});
