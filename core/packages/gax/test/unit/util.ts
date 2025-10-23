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
import {describe, it} from 'mocha';
import {
  toCamelCase as snakeToCamelCase,
  camelToSnakeCase,
  toLowerCamelCase,
  makeUUID,
  getProtoNameFromFullName,
  decodeProtobufAny,
  decodeAnyProtosInArray,
} from '../../src/util';
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
});
