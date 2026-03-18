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

import * as protobuf from 'protobufjs';
import {JSONObject, JSONValue, LongStub} from './types';
import {Any, googleProtobufAnyToProto3JSON} from './any';
import {bytesToProto3JSON} from './bytes';
import {getFullyQualifiedTypeName, wrapperTypes} from './util';
import {resolveEnumValueToNumber, resolveEnumValueToString} from './enum';
import {
  googleProtobufListValueToProto3JSON,
  googleProtobufStructToProto3JSON,
  googleProtobufValueToProto3JSON,
  ListValue,
  Struct,
  Value,
} from './value';
import {Duration, googleProtobufDurationToProto3JSON} from './duration';
import {googleProtobufTimestampToProto3JSON, Timestamp} from './timestamp';
import {
  BoolValue,
  BytesValue,
  NumberValue,
  StringValue,
  wrapperToProto3JSON,
} from './wrappers';
import {FieldMask, googleProtobufFieldMaskToProto3JSON} from './fieldmask';

export interface ToProto3JSONOptions {
  numericEnums: boolean;
}

// Convert a single value, which might happen to be an instance of Long, to JSONValue
function convertSingleValue(value: JSONValue | object): JSONValue {
  if (typeof value === 'object') {
    if (value?.constructor?.name === 'Long') {
      return (value as LongStub).toString();
    }
    throw new Error(`toProto3JSON: don't know how to convert value ${value}`);
  }
  return value;
}

// Convert a value within a repeated or map field
function convertRepeatedOrMapValue(
  type: protobuf.Type | protobuf.Enum | null,
  value: protobuf.Message | JSONValue | null,
  options?: ToProto3JSONOptions,
): JSONValue {
  if (type && 'values' in type) {
    return convertEnum(type, value as JSONValue, options);
  }
  if (type) {
    return toProto3JSON(value as protobuf.Message, options);
  }
  return convertSingleValue(value);
}

// Convert an enum type to its value
function convertEnum(
  type: protobuf.Enum,
  value: JSONValue,
  options?: ToProto3JSONOptions,
): JSONValue {
  if (options?.numericEnums) {
    return resolveEnumValueToNumber(type, value as JSONValue);
  } else {
    return resolveEnumValueToString(type, value as JSONValue);
  }
}

export function toProto3JSON(
  obj: protobuf.Message,
  options?: ToProto3JSONOptions,
): JSONValue {
  const objType = obj.$type;
  if (!objType) {
    throw new Error(
      'Cannot serialize object to proto3 JSON since its .$type is unknown. Use Type.fromObject(obj) before calling toProto3JSON.',
    );
  }

  objType.resolveAll();
  const typeName = getFullyQualifiedTypeName(objType);

  // Types that require special handling according to
  // https://developers.google.com/protocol-buffers/docs/proto3#json
  if (typeName === '.google.protobuf.Any') {
    return googleProtobufAnyToProto3JSON(
      obj as protobuf.Message & Any,
      options,
    );
  }

  if (typeName === '.google.protobuf.Value') {
    return googleProtobufValueToProto3JSON(obj as protobuf.Message & Value);
  }

  if (typeName === '.google.protobuf.Struct') {
    return googleProtobufStructToProto3JSON(obj as protobuf.Message & Struct);
  }

  if (typeName === '.google.protobuf.ListValue') {
    return googleProtobufListValueToProto3JSON(
      obj as protobuf.Message & ListValue,
    );
  }

  if (typeName === '.google.protobuf.Duration') {
    return googleProtobufDurationToProto3JSON(
      obj as protobuf.Message & Duration,
    );
  }

  if (typeName === '.google.protobuf.Timestamp') {
    return googleProtobufTimestampToProto3JSON(
      obj as protobuf.Message & Timestamp,
    );
  }

  if (typeName === '.google.protobuf.FieldMask') {
    return googleProtobufFieldMaskToProto3JSON(
      obj as protobuf.Message & FieldMask,
    );
  }

  if (wrapperTypes.has(typeName)) {
    return wrapperToProto3JSON(
      obj as protobuf.Message &
        (NumberValue | StringValue | BoolValue | BytesValue),
    );
  }

  const result: JSONObject = {};
  for (const [key, value] of Object.entries(obj)) {
    const field = objType.fields[key];
    const fieldResolvedType = field.resolvedType;
    const fieldFullyQualifiedTypeName = fieldResolvedType
      ? getFullyQualifiedTypeName(fieldResolvedType)
      : null;
    if (value === null) {
      result[key] = null;
      continue;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        // ignore repeated fields with no values
        continue;
      }
      result[key] = value.map(element => {
        return convertRepeatedOrMapValue(fieldResolvedType, element, options);
      });
      continue;
    }
    if (field.map) {
      const map: JSONObject = {};
      for (const [mapKey, mapValue] of Object.entries(value)) {
        map[mapKey] = convertRepeatedOrMapValue(
          fieldResolvedType,
          mapValue as JSONValue,
          options,
        );
      }
      result[key] = map;
      continue;
    }
    if (fieldFullyQualifiedTypeName === '.google.protobuf.NullValue') {
      result[key] = null;
      continue;
    }
    if (fieldResolvedType && 'values' in fieldResolvedType && value !== null) {
      result[key] = convertEnum(fieldResolvedType, value, options);
      continue;
    }
    if (fieldResolvedType) {
      result[key] = toProto3JSON(value, options);
      continue;
    }
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      value === null
    ) {
      if (typeof value === 'number' && !Number.isFinite(value)) {
        result[key] = value.toString();
        continue;
      }
      result[key] = value;
      continue;
    }
    if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
      result[key] = bytesToProto3JSON(value);
      continue;
    }
    result[key] = convertSingleValue(value);
    continue;
  }
  return result;
}
