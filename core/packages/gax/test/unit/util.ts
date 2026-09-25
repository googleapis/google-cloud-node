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
  checkTelemetryEnabled,
  connectionCodes,
  requestCodes,
  requestBodyCodes,
  decodeCodes,
  redirectCodes,
  genericClasses,
  preConnectionCodes,
  ignoredClientHeaderTokens,
} from '../../src/util';
import {StaticTraceContext} from '../../src/observability/TracerHelper';
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

  describe('checkTelemetryEnabled', () => {
    afterEach(() => {
      delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
      delete process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED;
    });

    const mockTelemetryInfo: StaticTraceContext = {
      gcpClientService: 'test.googleapis.com',
      gcpVersion: '1.0.0',
      gcpRepo: 'googleapis/google-cloud-node',
      gcpArtifact: 'google-cloud-test',
    };

    const mockSettings = new CallSettings({
      enableTelemetryTracing: true,
      otherArgs: {
        internalTelemetryInfo: mockTelemetryInfo,
      },
    });

    it('returns true when settings are configured with enableTelemetryTracing', () => {
      assert.strictEqual(checkTelemetryEnabled(mockSettings), true);
    });

    it('ignores GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED even when set to false', () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED = 'false';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), true);
    });

    it('returns false when enableTelemetryTracing is false on settings', () => {
      const disabledSettings = new CallSettings({
        enableTelemetryTracing: false,
        otherArgs: {
          internalTelemetryInfo: mockTelemetryInfo,
        },
      });
      assert.strictEqual(checkTelemetryEnabled(disabledSettings), false);
    });

    it('returns false when enableTelemetryTracing is not set on settings', () => {
      const noTracingSettings = new CallSettings({
        otherArgs: {
          internalTelemetryInfo: {
            gcpClientService: 'test.googleapis.com',
          },
        },
      });
      assert.strictEqual(checkTelemetryEnabled(noTracingSettings), false);
    });

    it('returns false when internalTelemetryInfo is not set on settings', () => {
      const noInfoSettings = new CallSettings({
        enableTelemetryTracing: true,
      });
      assert.strictEqual(checkTelemetryEnabled(noInfoSettings), false);
    });

    it('returns false when settings is undefined', () => {
      assert.strictEqual(checkTelemetryEnabled(undefined), false);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true and the client option is not set', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      const noOptInSettings = new CallSettings({
        otherArgs: {
          internalTelemetryInfo: mockTelemetryInfo,
        },
      });
      assert.strictEqual(checkTelemetryEnabled(noOptInSettings), true);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true even if internalTelemetryInfo is not set', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      assert.strictEqual(checkTelemetryEnabled(new CallSettings({})), true);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true even if settings is undefined', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      assert.strictEqual(checkTelemetryEnabled(undefined), true);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true without passing any arguments', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      assert.strictEqual(checkTelemetryEnabled(), true);
    });

    it('accepts GOOGLE_SDK_NODE_ENABLE_TRACING case-insensitively', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'TRUE';
      const noOptInSettings = new CallSettings({
        otherArgs: {
          internalTelemetryInfo: mockTelemetryInfo,
        },
      });
      assert.strictEqual(checkTelemetryEnabled(noOptInSettings), true);
    });

    it('returns false when GOOGLE_SDK_NODE_ENABLE_TRACING=false overrides the client option', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'false';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), false);
    });

    it('returns false when GOOGLE_SDK_NODE_ENABLE_TRACING=0 overrides the client option', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '0';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), false);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=true overrides enableTelemetryTracing=false on client settings', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      const disabledSettings = new CallSettings({
        enableTelemetryTracing: false,
      });
      assert.strictEqual(checkTelemetryEnabled(disabledSettings), true);
    });

    it('returns true when GOOGLE_SDK_NODE_ENABLE_TRACING=1 overrides enableTelemetryTracing=false on client settings', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '1';
      const disabledSettings = new CallSettings({
        enableTelemetryTracing: false,
      });
      assert.strictEqual(checkTelemetryEnabled(disabledSettings), true);
    });

    it('falls back to the client option when GOOGLE_SDK_NODE_ENABLE_TRACING is empty or whitespace', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), true);

      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = '   ';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), true);
    });

    it('treats an unrecognized GOOGLE_SDK_NODE_ENABLE_TRACING value as disabled', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'yes';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), false);

      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'foo';
      assert.strictEqual(checkTelemetryEnabled(mockSettings), false);
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
        result = checkTelemetryEnabled(mockSettings);
      } catch (e) {
        thrown = e;
      } finally {
        globals.process = originalProcess;
      }
      assert.strictEqual(thrown, undefined);
      assert.strictEqual(result, true);
    });
  });

  describe('error code and class constants', () => {
    it('defines connectionCodes containing common network errors', () => {
      assert(Array.isArray(connectionCodes));
      assert(connectionCodes.includes('ECONNREFUSED'));
      assert(connectionCodes.includes('ENOTFOUND'));
    });

    it('defines requestCodes containing request error codes', () => {
      assert(Array.isArray(requestCodes));
      assert(requestCodes.includes('ERR_INVALID_ARG_TYPE'));
      assert(requestCodes.includes('ERR_INVALID_URL'));
    });

    it('defines requestBodyCodes containing stream error codes', () => {
      assert(Array.isArray(requestBodyCodes));
      assert(requestBodyCodes.includes('ERR_STREAM_WRITE_AFTER_END'));
    });

    it('defines decodeCodes containing buffer error codes', () => {
      assert(Array.isArray(decodeCodes));
      assert(decodeCodes.includes('ERR_BUFFER_OUT_OF_BOUNDS'));
    });

    it('defines redirectCodes containing redirect error codes', () => {
      assert(Array.isArray(redirectCodes));
      assert(redirectCodes.includes('ERR_TOO_MANY_REDIRECTS'));
    });

    it('defines genericClasses containing standard base error types', () => {
      assert(Array.isArray(genericClasses));
      assert(genericClasses.includes('Error'));
      assert(genericClasses.includes('GoogleError'));
      assert(genericClasses.includes('Object'));
      assert(genericClasses.includes('DOMException'));
    });

    it('defines preConnectionCodes containing pre-connection error codes', () => {
      assert(Array.isArray(preConnectionCodes));
      assert(preConnectionCodes.includes('ECONNREFUSED'));
      assert(preConnectionCodes.includes('ENOTFOUND'));
      assert(preConnectionCodes.includes('ERR_INVALID_URL'));
    });

    it('defines ignoredClientHeaderTokens containing ignored client header tokens', () => {
      assert(Array.isArray(ignoredClientHeaderTokens));
      assert(ignoredClientHeaderTokens.includes('gl-node'));
      assert(ignoredClientHeaderTokens.includes('gax'));
      assert(ignoredClientHeaderTokens.includes('gapic'));
    });
  });
});
