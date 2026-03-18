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
import {googleProtobufAnyFromProto3JSON} from './any';
import {bytesFromProto3JSON} from './bytes';
import {resolveEnumValueToString} from './enum';
import {FromObjectValue, JSONValue} from './types';
import {
  googleProtobufListValueFromProto3JSON,
  googleProtobufStructFromProto3JSON,
  googleProtobufValueFromProto3JSON,
} from './value';
import {assert, getFullyQualifiedTypeName, wrapperTypes} from './util';
import {googleProtobufDurationFromProto3JSON} from './duration';
import {googleProtobufTimestampFromProto3JSON} from './timestamp';
import {wrapperFromProto3JSON} from './wrappers';
import {googleProtobufFieldMaskFromProto3JSON} from './fieldmask';

export function fromProto3JSONToInternalRepresentation(
  type: protobuf.Type | protobuf.Enum | string,
  json: JSONValue,
): FromObjectValue {
  const fullyQualifiedTypeName =
    typeof type === 'string' ? type : getFullyQualifiedTypeName(type);

  if (typeof type !== 'string' && 'values' in type) {
    // type is an Enum
    if (fullyQualifiedTypeName === '.google.protobuf.NullValue') {
      return 'NULL_VALUE';
    }

    return resolveEnumValueToString(type, json);
  }

  if (typeof type !== 'string') {
    type.resolveAll();
  }

  if (typeof type === 'string') {
    return json;
  }

  // Types that require special handling according to
  // https://developers.google.com/protocol-buffers/docs/proto3#json

  // Types that can have meaningful "null" value
  if (fullyQualifiedTypeName === '.google.protobuf.Value') {
    return googleProtobufValueFromProto3JSON(json);
  }

  if (wrapperTypes.has(fullyQualifiedTypeName)) {
    if ((json !== null && typeof json === 'object') || Array.isArray(json)) {
      throw new Error(
        `fromProto3JSONToInternalRepresentation: JSON representation for ${fullyQualifiedTypeName} expects a string, a number, or a boolean, but got ${typeof json}`,
      );
    }
    return wrapperFromProto3JSON(fullyQualifiedTypeName, json);
  }

  if (json === null) {
    return null;
  }

  // Types that cannot be "null"
  if (fullyQualifiedTypeName === '.google.protobuf.Any') {
    return googleProtobufAnyFromProto3JSON(type.root, json);
  }

  if (fullyQualifiedTypeName === '.google.protobuf.Struct') {
    if (typeof json !== 'object') {
      throw new Error(
        `fromProto3JSONToInternalRepresentation: google.protobuf.Struct must be an object but got ${typeof json}`,
      );
    }
    if (Array.isArray(json)) {
      throw new Error(
        'fromProto3JSONToInternalRepresentation: google.protobuf.Struct must be an object but got an array',
      );
    }
    return googleProtobufStructFromProto3JSON(json);
  }

  if (fullyQualifiedTypeName === '.google.protobuf.ListValue') {
    if (!Array.isArray(json)) {
      throw new Error(
        `fromProto3JSONToInternalRepresentation: google.protobuf.ListValue must be an array but got ${typeof json}`,
      );
    }
    return googleProtobufListValueFromProto3JSON(json);
  }

  if (fullyQualifiedTypeName === '.google.protobuf.Duration') {
    if (typeof json !== 'string') {
      throw new Error(
        `fromProto3JSONToInternalRepresentation: google.protobuf.Duration must be a string but got ${typeof json}`,
      );
    }
    return googleProtobufDurationFromProto3JSON(json);
  }

  if (fullyQualifiedTypeName === '.google.protobuf.Timestamp') {
    if (typeof json !== 'string') {
      throw new Error(
        `fromProto3JSONToInternalRepresentation: google.protobuf.Timestamp must be a string but got ${typeof json}`,
      );
    }
    return googleProtobufTimestampFromProto3JSON(json);
  }

  if (fullyQualifiedTypeName === '.google.protobuf.FieldMask') {
    if (typeof json !== 'string') {
      throw new Error(
        `fromProto3JSONToInternalRepresentation: google.protobuf.FieldMask must be a string but got ${typeof json}`,
      );
    }
    return googleProtobufFieldMaskFromProto3JSON(json);
  }

  const result: FromObjectValue = {};
  for (const [key, value] of Object.entries(json)) {
    const field = type.fields[key];
    if (!field) {
      continue;
    }

    const resolvedType = field.resolvedType;
    const fieldType = field.type;

    if (field.repeated) {
      if (value === null) {
        result[key] = [];
      } else {
        if (!Array.isArray(value)) {
          throw new Error(
            `fromProto3JSONToInternalRepresentation: expected an array for field ${key}`,
          );
        }
        result[key] = value.map(element =>
          fromProto3JSONToInternalRepresentation(
            resolvedType || fieldType,
            element,
          ),
        );
      }
    } else if (field.map) {
      const map: FromObjectValue = {};
      for (const [mapKey, mapValue] of Object.entries(value)) {
        map[mapKey] = fromProto3JSONToInternalRepresentation(
          resolvedType || fieldType,
          mapValue as JSONValue,
        );
      }
      result[key] = map;
    } else if (
      fieldType.match(/^(?:(?:(?:u?int|fixed)(?:32|64))|float|double)$/)
    ) {
      if (typeof value !== 'number' && typeof value !== 'string') {
        throw new Error(
          `fromProto3JSONToInternalRepresentation: field ${key} of type ${field.type} cannot contain value ${value}`,
        );
      }
      result[key] = value;
    } else if (fieldType === 'string') {
      if (typeof value !== 'string') {
        throw new Error(
          `fromProto3JSONToInternalRepresentation: field ${key} of type ${field.type} cannot contain value ${value}`,
        );
      }
      result[key] = value;
    } else if (fieldType === 'bool') {
      if (typeof value !== 'boolean') {
        throw new Error(
          `fromProto3JSONToInternalRepresentation: field ${key} of type ${field.type} cannot contain value ${value}`,
        );
      }
      result[key] = value;
    } else if (fieldType === 'bytes') {
      if (typeof value !== 'string') {
        throw new Error(
          `fromProto3JSONToInternalRepresentation: field ${key} of type ${field.type} cannot contain value ${value}`,
        );
      }
      result[key] = bytesFromProto3JSON(value);
    } else {
      // Message type
      assert(
        resolvedType !== null,
        `Expected to be able to resolve type for field ${field.name}`,
      );
      const deserializedValue = fromProto3JSONToInternalRepresentation(
        resolvedType!,
        value,
      );
      result[key] = deserializedValue;
    }
  }

  return result;
}

export function fromProto3JSON(type: protobuf.Type, json: JSONValue) {
  const internalRepr = fromProto3JSONToInternalRepresentation(type, json);
  if (internalRepr === null) {
    return null;
  }
  // We only expect a real object here sine all special cases should be already resolved. Everything else is an internal error
  assert(
    typeof internalRepr === 'object' && !Array.isArray(internalRepr),
    `fromProto3JSON: expected an object, not ${json}`,
  );
  return type.fromObject(internalRepr as {});
}
