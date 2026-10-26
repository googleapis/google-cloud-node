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

import assert from 'assert';
import {afterEach, describe, it} from 'mocha';
import {
  toCamelCase as snakeToCamelCase,
  camelToSnakeCase,
  toLowerCamelCase,
  makeUUID,
  getProtoNameFromFullName,
  decodeProtobufAny,
  decodeAnyProtosInArray,
  ignoredClientHeaderTokens,
} from '../../src/util';
import {
  checkTracingEnabled,
  checkLoggingEnabled,
} from '../../src/observability/util';
import {CallSettings} from '../../src/gax';
import * as protobuf from 'protobufjs';
import protosJson from '../../protos/status.json';

const PROTOS = protobuf.Root.fromJSON(protosJson);

describe('util.ts', () => {
  it('camelToSnakeCase', () => {
    assert.strictEqual(camelToSnakeCase('test'), 'test');
    assert.strictEqual(camelToSnakeCase('test123'), 'test123');
    assert.strictEqual(camelToSnakeCase('testAbc'), 'test_abc');
    assert.strictEqual(camelToSnakeCase('testAbcDef'), 'test_abc_def');
    assert.strictEqual(camelToSnakeCase('IPProtocol'), 'I_p_protocol');
    assert.strictEqual(camelToSnakeCase('iPProtocol'), 'i_p_protocol');
    assert.strictEqual(camelToSnakeCase('a.1'), 'a.1');
    assert.strictEqual(camelToSnakeCase('abc.1Foo'), 'abc.1_foo');
    assert.strictEqual(camelToSnakeCase('abc.foo'), 'abc.foo');
    assert.strictEqual(camelToSnakeCase('a.1B'), 'a.1_b');
    assert.strictEqual(
      camelToSnakeCase('somethingABCDEValue`'),
      'something_a_b_c_d_e_value',
    );
  });

  it('snakeToCamelCase', () => {
    assert.strictEqual(snakeToCamelCase('test'), 'test');
    assert.strictEqual(snakeToCamelCase('test123'), 'test123');
    assert.strictEqual(snakeToCamelCase('test_abc'), 'testAbc');
    assert.strictEqual(snakeToCamelCase('test_abc_def'), 'testAbcDef');
    assert.strictEqual(snakeToCamelCase('I_p_protocol'), 'IPProtocol');
    assert.strictEqual(snakeToCamelCase('a.1'), 'a.1');
    assert.strictEqual(snakeToCamelCase('abc.1_foo'), 'abc.1Foo');
    assert.strictEqual(snakeToCamelCase('abc.foo'), 'abc.foo');
    assert.strictEqual(snakeToCamelCase('a.1_b'), 'a.1B');
    assert.strictEqual(
      snakeToCamelCase('something_abcde_value'),
      'somethingAbcdeValue',
    );
  });

  it('toLowerCamelCase', () => {
    assert.strictEqual(toLowerCamelCase('test'), 'test');
    assert.strictEqual(toLowerCamelCase('test123'), 'test123');
    assert.strictEqual(toLowerCamelCase('test_abc'), 'testAbc');
    assert.strictEqual(toLowerCamelCase('test_abc_def'), 'testAbcDef');
    assert.strictEqual(toLowerCamelCase('I_p_protocol'), 'iPProtocol');
    assert.strictEqual(toLowerCamelCase('a.1'), 'a.1');
    assert.strictEqual(toLowerCamelCase('abc.1_foo'), 'abc.1Foo');
    assert.strictEqual(toLowerCamelCase('abc.foo'), 'abc.foo');
    assert.strictEqual(toLowerCamelCase('a.1_b'), 'a.1B');
    assert.strictEqual(
      toLowerCamelCase('something_abcde_value'),
      'somethingAbcdeValue',
    );
    assert.strictEqual(
      toLowerCamelCase('PascalCaseString'),
      'pascalCaseString',
    );
    assert.strictEqual(
      toLowerCamelCase('PascalCASEString'),
      'pascalCaseString',
    );
  });

  it('returns UUID', () => {
    assert.match(makeUUID(), /[a-z0-9-]{36}/);
  });

  it('test getProtoNameFromFullName success', () => {
    const fullName = 'type.googleapis.com/google.rpc.Help';
    assert.strictEqual(getProtoNameFromFullName(fullName), 'google.rpc.Help');
  });

  it('test getProtoNameFromFullName fail due to incompatible/wrong fullName', () => {
    const fullName = 'wrongfullname';
    assert.throws(
      () => getProtoNameFromFullName(fullName),
      new Error("Can't get proto name"),
    );
  });

  const makeErrorInfoProtoAsBuffer = (): Buffer => {
    const errorInfo: object = {
      '@type': 'type.googleapis.com/google.rpc.ErrorInfo',
      reason: 'SERVICE_DISABLED',
    };
    const errorInfoType: protobuf.Type = PROTOS.lookupType(
      'google.rpc.ErrorInfo',
    );
    return errorInfoType.encode(errorInfo).finish() as Buffer;
  };

  it('test decodeProtobufAny success', () => {
    const anyProtoType: protobuf.Type = PROTOS.lookupType(
      'google.protobuf.Any',
    );
    const anyProto: protobuf.Message<{}> = anyProtoType.create({
      type_url: 'type.googleapis.com/google.rpc.ErrorInfo',
      value: makeErrorInfoProtoAsBuffer(),
    });
    assert.strictEqual(
      JSON.stringify(decodeProtobufAny(anyProto, anyProtoType)),
      JSON.stringify({reason: 'SERVICE_DISABLED'}),
    );
  });

  it('test decodeProtobufAny fails due to Any missing type_url', () => {
    const anyProtoType: protobuf.Type = PROTOS.lookupType(
      'google.protobuf.Any',
    );
    const anyProto: protobuf.Message<{}> = anyProtoType.create({
      value: makeErrorInfoProtoAsBuffer(),
    });
    assert.throws(
      () => decodeProtobufAny(anyProto, anyProtoType),
      new Error('Any type_url is not set'),
    );
  });

  it('test decodeProtobufAny fails due to proto not found', () => {
    const anyProtoType: protobuf.Type = PROTOS.lookupType(
      'google.protobuf.Any',
    );
    const anyProto: protobuf.Message<{}> = anyProtoType.create({
      type_url: 'type.googleapis.com/google.showcase.v1beta1.PoetryError',
      value: makeErrorInfoProtoAsBuffer(),
    });
    assert.throws(
      () => decodeProtobufAny(anyProto, anyProtoType),
      new Error('no such type: google.showcase.v1beta1.PoetryError'),
    );
  });

  it('test decodeAnyProtosInArray success', () => {
    const anyProtoType: protobuf.Type = PROTOS.lookupType(
      'google.protobuf.Any',
    );

    const anyProtoErrorInfo: protobuf.Message<{}> = anyProtoType.create({
      type_url: 'type.googleapis.com/google.rpc.ErrorInfo',
      value: makeErrorInfoProtoAsBuffer(),
    });

    assert.strictEqual(
      JSON.stringify(decodeAnyProtosInArray([anyProtoErrorInfo], anyProtoType)),
      JSON.stringify([{reason: 'SERVICE_DISABLED'}]),
    );
  });

  it('test decodeAnyProtosInArray success ignore any error decoding', () => {
    const anyProtoType: protobuf.Type = PROTOS.lookupType(
      'google.protobuf.Any',
    );
    const anyProtoErrorInfo: protobuf.Message<{}> = anyProtoType.create({
      type_url: 'type.googleapis.com/google.rpc.ErrorInfo',
      value: makeErrorInfoProtoAsBuffer(),
    });
    const wrongAnyProto: protobuf.Message<{}> = anyProtoType.create({
      type_url: 'type.googleapis.com/google.showcase.v1beta1.PoetryError',
      value: makeErrorInfoProtoAsBuffer(),
    });

    assert.strictEqual(
      JSON.stringify(
        decodeAnyProtosInArray(
          [anyProtoErrorInfo, wrongAnyProto],
          anyProtoType,
        ),
      ),
      JSON.stringify([{reason: 'SERVICE_DISABLED'}]),
    );
  });

  describe('checkTracingEnabled', () => {
    afterEach(() => {
      delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    });

    const mockSettings = new CallSettings({
      enableTelemetryTracing: true,
    });

    it('returns true when settings are configured with enableTelemetryTracing', () => {
      assert.strictEqual(checkTracingEnabled(mockSettings), true);
    });

    it('returns false when enableTelemetryTracing is false on settings', () => {
      const disabledSettings = new CallSettings({
        enableTelemetryTracing: false,
      });
      assert.strictEqual(checkTracingEnabled(disabledSettings), false);
    });

    it('returns false when enableTelemetryTracing is not set on settings', () => {
      const noTracingSettings = new CallSettings({});
      assert.strictEqual(checkTracingEnabled(noTracingSettings), false);
    });

    it('returns false when settings is undefined', () => {
      assert.strictEqual(checkTracingEnabled(undefined), false);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true and the client option is not set', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      assert.strictEqual(checkTracingEnabled(new CallSettings({})), true);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true even if settings is undefined', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      assert.strictEqual(checkTracingEnabled(), true);
    });

    it('accepts GOOGLE_SDK_NODE_ENABLE_TRACING case-insensitively', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'TRUE';
      assert.strictEqual(checkTracingEnabled(new CallSettings({})), true);
    });

    it('returns false when GOOGLE_SDK_NODE_ENABLE_TRACING=false overrides the client option', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'false';
      assert.strictEqual(checkTracingEnabled(mockSettings), false);
    });

    it('returns false when GOOGLE_SDK_NODE_ENABLE_TRACING=0 overrides the client option', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '0';
      assert.strictEqual(checkTracingEnabled(mockSettings), false);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true overrides enableTelemetryTracing=false on client settings', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      const disabledSettings = new CallSettings({
        enableTelemetryTracing: false,
      });
      assert.strictEqual(checkTracingEnabled(disabledSettings), true);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=1 overrides enableTelemetryTracing=false on client settings', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '1';
      const disabledSettings = new CallSettings({
        enableTelemetryTracing: false,
      });
      assert.strictEqual(checkTracingEnabled(disabledSettings), true);
    });

    it('falls back to the client option when GOOGLE_SDK_NODE_ENABLE_TRACING is empty or whitespace', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '';
      assert.strictEqual(checkTracingEnabled(mockSettings), true);

      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '   ';
      assert.strictEqual(checkTracingEnabled(mockSettings), true);
    });

    it('treats an unrecognized GOOGLE_SDK_NODE_ENABLE_TRACING value as disabled', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'yes';
      assert.strictEqual(checkTracingEnabled(mockSettings), false);

      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'foo';
      assert.strictEqual(checkTracingEnabled(mockSettings), false);
    });

    it('does not throw when process is undefined, as in a browser', () => {
      const globals = globalThis as {process?: NodeJS.Process};
      const originalProcess = globals.process;
      // The result is captured and `process` restored before asserting,
      // because mocha and assert need `process` themselves.
      let result: boolean | undefined;
      let thrown: unknown;
      delete globals.process;
      try {
        result = checkTracingEnabled(mockSettings);
      } catch (e) {
        thrown = e;
      } finally {
        globals.process = originalProcess;
      }
      assert.strictEqual(thrown, undefined);
      assert.strictEqual(result, true);
    });
  });

  describe('checkLoggingEnabled', () => {
    afterEach(() => {
      delete process.env.GOOGLE_SDK_NODE_LOGGING;
      delete process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING;
    });

    const mockSettings = new CallSettings({
      enableTelemetryLogging: true,
    });

    it('returns false when GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING is not set even if logging is enabled', () => {
      process.env.GOOGLE_SDK_NODE_LOGGING = 'true';
      assert.strictEqual(checkLoggingEnabled(mockSettings), false);
    });

    it('returns false when GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING is false', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'false';
      process.env.GOOGLE_SDK_NODE_LOGGING = 'true';
      assert.strictEqual(checkLoggingEnabled(mockSettings), false);
    });

    it('returns true when GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING=true and settings have enableTelemetryLogging', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      assert.strictEqual(checkLoggingEnabled(mockSettings), true);
    });

    it('returns true when GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING=1 and settings.otherArgs have enableTelemetryLogging', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = '1';
      const otherArgsSettings = new CallSettings({
        otherArgs: {enableTelemetryLogging: true},
      });
      assert.strictEqual(checkLoggingEnabled(otherArgsSettings), true);
    });

    it('returns false when enableTelemetryLogging is false or not set on settings and env var is not set', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      const disabledSettings = new CallSettings({
        enableTelemetryLogging: false,
      });
      assert.strictEqual(checkLoggingEnabled(disabledSettings), false);
      assert.strictEqual(checkLoggingEnabled(new CallSettings({})), false);
      assert.strictEqual(checkLoggingEnabled(undefined), false);
    });

    it('returns true when GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING=true and GOOGLE_SDK_NODE_LOGGING=true', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      process.env.GOOGLE_SDK_NODE_LOGGING = 'true';
      assert.strictEqual(checkLoggingEnabled(new CallSettings({})), true);
      assert.strictEqual(checkLoggingEnabled(), true);
    });

    it('accepts GOOGLE_SDK_NODE_LOGGING and GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING case-insensitively', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'TRUE';
      process.env.GOOGLE_SDK_NODE_LOGGING = 'TRUE';
      assert.strictEqual(checkLoggingEnabled(new CallSettings({})), true);
    });

    it('returns false when GOOGLE_SDK_NODE_LOGGING=false or 0 overrides the client option', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      process.env.GOOGLE_SDK_NODE_LOGGING = 'false';
      assert.strictEqual(checkLoggingEnabled(mockSettings), false);

      process.env.GOOGLE_SDK_NODE_LOGGING = '0';
      assert.strictEqual(checkLoggingEnabled(mockSettings), false);
    });

    it('returns true when GOOGLE_SDK_NODE_LOGGING=true or 1 overrides enableTelemetryLogging=false on settings', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      const disabledSettings = new CallSettings({
        enableTelemetryLogging: false,
      });

      process.env.GOOGLE_SDK_NODE_LOGGING = 'true';
      assert.strictEqual(checkLoggingEnabled(disabledSettings), true);

      process.env.GOOGLE_SDK_NODE_LOGGING = '1';
      assert.strictEqual(checkLoggingEnabled(disabledSettings), true);
    });

    it('falls back to the client option when GOOGLE_SDK_NODE_LOGGING is empty or whitespace', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      process.env.GOOGLE_SDK_NODE_LOGGING = '';
      assert.strictEqual(checkLoggingEnabled(mockSettings), true);

      process.env.GOOGLE_SDK_NODE_LOGGING = '   ';
      assert.strictEqual(checkLoggingEnabled(mockSettings), true);
    });

    it('treats an unrecognized GOOGLE_SDK_NODE_LOGGING value as disabled', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING = 'true';
      process.env.GOOGLE_SDK_NODE_LOGGING = 'yes';
      assert.strictEqual(checkLoggingEnabled(mockSettings), false);
    });

    it('does not throw when process is undefined, as in a browser', () => {
      const globals = globalThis as {process?: NodeJS.Process};
      const originalProcess = globals.process;
      let result: boolean | undefined;
      let thrown: unknown;
      delete globals.process;
      try {
        result = checkLoggingEnabled(mockSettings);
      } catch (e) {
        thrown = e;
      } finally {
        globals.process = originalProcess;
      }
      assert.strictEqual(thrown, undefined);
      assert.strictEqual(result, false);
    });
  });

  describe('ignoredClientHeaderTokens', () => {
    it('defines ignoredClientHeaderTokens containing ignored client header tokens', () => {
      assert(Array.isArray(ignoredClientHeaderTokens));
      assert(ignoredClientHeaderTokens.includes('gl-node'));
      assert(ignoredClientHeaderTokens.includes('gax'));
      assert(ignoredClientHeaderTokens.includes('gapic'));
    });
  });
});
