/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
import * as TransportStream from 'winston-transport';

import * as types from '../src/types/core';

const inject = require('require-inject');

describe('logging-winston', () => {
  let fakeLoggingOptions_: types.Options|null;
  // tslint:disable-next-line:no-any
  let lastFakeLoggingArgs: IArguments|any[] = [];

  class FakeLogging {
    constructor(options: {}) {
      fakeLoggingOptions_ = options;
    }
    log(level: string, message: string, metadata: {}|undefined,
        callback: () => void): void {
      lastFakeLoggingArgs = arguments;
      if (callback) setImmediate(callback);
    }
  }

  class FakeTransport {
    // transportCalledWith_ takes arguments which cannot be determined type.
    // tslint:disable-next-line:no-any
    transportCalledWith_: any;
    constructor() {
      this.transportCalledWith_ = arguments;
    }
  }

  const fakeWinston = {
    transports: {},
    Transport: FakeTransport,
  };

  const loggingWinstonLib = inject(
      '../src/index',
      {'../src/common': {LoggingCommon: FakeLogging}, winston: fakeWinston});
  // loggingWinston is LoggingWinston namespace which cannot be determined type.
  // tslint:disable-next-line:no-any
  let loggingWinston: any;

  const OPTIONS: types.Options = {
    logName: 'log-name',
    levels: {
      one: 1,
    },
    resource: {},
    serviceContext: {
      service: 'fake-service',
    },
  };

  beforeEach(() => {
    fakeLoggingOptions_ = null;
    loggingWinston = new loggingWinstonLib.LoggingWinston(OPTIONS);
  });

  describe('instantiation/options', () => {
    const loggingWinstonLib =
        inject('../src/index', {'../src/common': {LoggingCommon: FakeLogging}});

    it('should inherit from winston-transport.TransportStream', () => {
      const loggingWinston = new loggingWinstonLib.LoggingWinston(OPTIONS);
      assert.ok(loggingWinston instanceof TransportStream);
    });

    it('should initialize Log instance using provided scopes', () => {
      const fakeScope = 'fake scope';

      const optionsWithScopes: types.Options = Object.assign({}, OPTIONS);
      optionsWithScopes.scopes = fakeScope;
      // tslint:disable-next-line:no-unused-expression
      new loggingWinstonLib.LoggingWinston(optionsWithScopes);

      assert.deepStrictEqual(fakeLoggingOptions_, optionsWithScopes);
    });

    it('should pass the provided options.inspectMetadata', () => {
      const optionsWithInspectMetadata = Object.assign({}, OPTIONS, {
        inspectMetadata: true,
      });

      // tslint:disable-next-line:no-unused-expression
      new loggingWinstonLib.LoggingWinston(optionsWithInspectMetadata);
      assert.strictEqual(fakeLoggingOptions_!.inspectMetadata, true);
    });

    it('should pass provided levels', () => {
      assert.strictEqual(fakeLoggingOptions_!.levels, OPTIONS.levels);
    });

    it('should pass Log instance using provided name', () => {
      const logName = 'log-name-override';

      const optionsWithLogName = Object.assign({}, OPTIONS);
      optionsWithLogName.logName = logName;
      // tslint:disable-next-line:no-unused-expression
      new loggingWinstonLib.LoggingWinston(optionsWithLogName);

      assert.strictEqual(fakeLoggingOptions_!.logName, logName);
    });


    it('should pass the provided resource', () => {
      assert.strictEqual(fakeLoggingOptions_!.resource, OPTIONS.resource);
    });

    it('should pass the provided service context', () => {
      assert.strictEqual(
          fakeLoggingOptions_!.serviceContext, OPTIONS.serviceContext);
    });
  });

  describe('log', () => {
    const LEVEL = Object.keys(OPTIONS.levels as {[name: string]: number})[0];
    const MESSAGE = 'message';
    const METADATA = {a: 1};

    const loggingWinstonLib = inject(
        '../src/index',
        {'../src/common': {LoggingCommon: FakeLogging}, winston: fakeWinston});

    const loggingWinston = new loggingWinstonLib.LoggingWinston();

    beforeEach(() => {
      lastFakeLoggingArgs = [];
    });

    it('should properly call common.log', (done) => {
      const args =
          Object.assign({}, METADATA, {level: LEVEL, message: MESSAGE});

      loggingWinston.log(args);

      const [level, message, meta] = lastFakeLoggingArgs;
      assert.strictEqual(level, 'one');
      assert.strictEqual(message, 'message');
      assert.deepEqual(meta, {a: 1});
      done();
    });
  });
});
