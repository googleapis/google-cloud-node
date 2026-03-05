// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import * as protobuf from 'protobufjs';
import {it} from 'mocha';
import {fromProto3JSON} from '../../src/fromproto3json';
import {toProto3JSON} from '../../src/toproto3json';
import {testTwoTypesOfLoad} from './common';
import {JSONValue} from '../../src';

function testAnyErrorCoverage(root: protobuf.Root) {
  const Any = root.lookupType('google.protobuf.Any');
  const message = Any.create({
    type_url: 'types.googleapis.com/UnknownType',
    value: Buffer.from(''),
  });
  const json = {
    '@type': 'types.googleapis.com/UnknownType',
    stringField: 'string',
  };
  const noTypeUrlJson = {
    stringField: 'string',
  };
  const incorrectSpecialValueJson = {
    '@type': 'types.googleapis.com/google.protobuf.Value',
    stringField: 'string',
  };

  it('Any catches unknown type when deserializing', () => {
    assert.throws(() => {
      fromProto3JSON(Any, json);
    });
  });

  it('Any catches unknown type when serializing', () => {
    assert.throws(() => {
      toProto3JSON(message);
    });
  });

  it('Any requires @type field when deserializing', () => {
    assert.throws(() => {
      fromProto3JSON(Any, noTypeUrlJson);
    });
  });

  it('Any does not accept incorrect special JSON', () => {
    assert.throws(() => {
      fromProto3JSON(Any, incorrectSpecialValueJson);
    });
  });
}

function testTypeMismatch(root: protobuf.Root) {
  const PrimitiveTypes = root.lookupType('test.PrimitiveTypes');
  const MessageWithBytesField = root.lookupType('test.MessageWithBytesField');
  const MessageWithRepeated = root.lookupType('test.MessageWithRepeated');
  const MessageWithAny = root.lookupType('test.MessageWithAny');
  const MessageWithEnum = root.lookupType('test.MessageWithEnum');
  const MessageWithStruct = root.lookupType('test.MessageWithStruct');
  const MessageWithValue = root.lookupType('test.MessageWithValue');
  const MessageWithListValue = root.lookupType('test.MessageWithListValue');
  const MessageWithDuration = root.lookupType('test.MessageWithDuration');
  const MessageWithTimestamp = root.lookupType('test.MessageWithTimestamp');
  const MessageWithWrappers = root.lookupType('test.MessageWithWrappers');
  const MessageWithFieldMask = root.lookupType('test.MessageWithFieldMask');

  it('fromProto3JSON catches wrong value for integer fields', () => {
    assert.throws(() => {
      fromProto3JSON(PrimitiveTypes, {integerField: true});
    });
  });

  it('fromProto3JSON catches wrong value for string fields', () => {
    assert.throws(() => {
      fromProto3JSON(PrimitiveTypes, {stringField: 42});
    });
  });

  it('fromProto3JSON catches wrong value for bool fields', () => {
    assert.throws(() => {
      fromProto3JSON(PrimitiveTypes, {boolField: 'true'});
    });
  });

  it('fromProto3JSON catches wrong value for bytes fields', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithBytesField, {bytesField: 1234});
    });
  });

  it('fromProto3JSON requires an array for repeated fields', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithRepeated, {repeatedString: 'test'});
    });
  });

  it('fromProto3JSON requires Any to be an object', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithAny, {anyField: 'zzz'});
    });
  });

  it('fromProto3JSON requires enum to be a string or a number', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithEnum, {enumField: {}});
    });
  });

  it('fromProto3JSON does not allow primitive types for Struct values', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithStruct, {structField: 42});
    });
  });

  it('fromProto3JSON does not allow arrays for Struct values', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithStruct, {structField: [41, 42]});
    });
  });

  it('fromProto3JSON does not allow objects for ListValue values', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithListValue, {listValueField: {}});
    });
  });

  it('fromProto3JSON does not allow non-JSON types', () => {
    const func = () => {};
    // calling it just for coverage :)
    func();
    assert.throws(() => {
      fromProto3JSON(MessageWithValue, {
        valueField: func,
      } as unknown as JSONValue);
    });
  });

  it('fromProto3JSON does not allow non-string types for google.protobuf.Duration', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithDuration, {
        durationField: {seconds: 3, nanos: 0},
      });
    });
  });

  it('fromProto3JSON does not allow incorrect strings for google.protobuf.Duration', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithDuration, {
        durationField: '12345',
      });
    });
  });

  it('fromProto3JSON does not allow non-string types for google.protobuf.Timestamp', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithTimestamp, {
        timestampField: {seconds: 3, nanos: 0},
      });
    });
  });

  it('fromProto3JSON does not allow incorrect strings for google.protobuf.Timestamp', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithTimestamp, {
        timestampField: '12345',
      });
    });
  });

  it('fromProto3JSON does not allow object for wrapper types', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithWrappers, {
        doubleValueField: {},
      });
    });
  });

  it('fromProto3JSON does not allow non-strings for BytesValue', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithWrappers, {
        bytesValueField: 42,
      });
    });
  });

  it('fromProto3JSON does not allow non-strings for FieldMask', () => {
    assert.throws(() => {
      fromProto3JSON(MessageWithFieldMask, {
        fieldMaskField: 42,
      });
    });
  });
}

function testNull(root: protobuf.Root) {
  const PrimitiveTypes = root.lookupType('test.PrimitiveTypes');
  const MessageWithValue = root.lookupType('test.MessageWithValue');
  const MessageWithAny = root.lookupType('test.MessageWithAny');

  it('fromProto3JSON returns null for null input', () => {
    assert.strictEqual(fromProto3JSON(PrimitiveTypes, null), null);
  });

  it('toProto3JSON returns null for empty Value', () => {
    const emptyValue = MessageWithValue.fromObject({
      valueField: {},
    });
    const emptyValueJson = {
      valueField: null,
    };
    assert.deepStrictEqual(toProto3JSON(emptyValue), emptyValueJson);
  });

  it('fromProto3JSON returns null for empty google.protobuf.Any', () => {
    const emptyAny = MessageWithAny.fromObject({});
    const emptyAnyJson = {
      anyField: null,
    };
    assert.deepStrictEqual(
      fromProto3JSON(MessageWithAny, emptyAnyJson),
      emptyAny,
    );
  });

  it('fromProto3JSON returns null for google.protobuf.Any with null value', () => {
    const nullAny = MessageWithAny.fromObject({
      anyField: {
        type_url: 'types.googleapis.com/google.protobuf.Struct',
        value: null,
      },
    });
    const nullAnyJson = {
      anyField: {
        '@type': 'types.googleapis.com/google.protobuf.Struct',
        value: null,
      },
    };
    assert.deepStrictEqual(
      fromProto3JSON(MessageWithAny, nullAnyJson),
      nullAny,
    );
  });
}

function testRegularObject() {
  it('toProto3JSON does not accept non-Message object', () => {
    assert.throws(() => {
      toProto3JSON({
        stringField: 'test',
      } as unknown as protobuf.Message);
    });
  });
}

testTwoTypesOfLoad('error coverage', [
  testAnyErrorCoverage,
  testTypeMismatch,
  testNull,
  testRegularObject,
]);
