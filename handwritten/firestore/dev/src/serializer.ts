/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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

import * as firestore from '@google-cloud/firestore';

import * as proto from '../protos/firestore_v1_proto_api';

import {DeleteTransform, FieldTransform, VectorValue} from './field-value';
import {detectGoogleProtobufValueType, detectValueType} from './convert';
import {GeoPoint} from './geo-point';
import {DocumentReference, Firestore} from './index';
import {FieldPath, ObjectValueFieldPath, QualifiedResourcePath} from './path';
import {Timestamp} from './timestamp';
import {ApiMapValue, ValidationOptions} from './types';
import {forEach, isEmpty, isObject, isPlainObject} from './util';
import {customObjectMessage, invalidArgumentMessage} from './validate';
import {Pipeline} from './pipelines';

import api = proto.google.firestore.v1;
import {
  RESERVED_MAP_KEY,
  RESERVED_MAP_KEY_VECTOR_VALUE,
  VECTOR_MAP_VECTORS_KEY,
} from './map-type';
import {google} from '../protos/firestore_v1_proto_api';
import IMapValue = google.firestore.v1.IMapValue;
import IValue = google.firestore.v1.IValue;
import Value = google.firestore.v1.Value;
import {isString} from './pipelines/pipeline-util';

/**
 * The maximum depth of a Firestore object.
 *
 * @private
 * @internal
 */
const MAX_DEPTH = 20;

/**
 * An interface for Firestore types that can be serialized to Protobuf.
 *
 * @private
 * @internal
 */
export interface Serializable {
  toProto(): api.IValue;
}

/**
 * Serializer that is used to convert between JavaScript types and their
 * Firestore Protobuf representation.
 *
 * @private
 * @internal
 */
export class Serializer {
  private allowUndefined: boolean;
  private createDocumentReference: (path: string) => DocumentReference;
  private createInteger: (n: number | string) => number | BigInt;

  constructor(private firestore: Firestore) {
    // Instead of storing the `firestore` object, we store just a reference to
    // its `.doc()` method. This avoid a circular reference, which breaks
    // JSON.stringify().
    this.createDocumentReference = path => firestore.doc(path);
    this.createInteger = n =>
      firestore._settings.useBigInt ? BigInt(n) : Number(n);
    this.allowUndefined = !!firestore._settings.ignoreUndefinedProperties;
  }

  /**
   * Encodes a JavaScript object into the Firestore 'Fields' representation.
   *
   * @private
   * @internal
   * @param obj The object to encode.
   * @returns The Firestore 'Fields' representation
   */
  encodeFields(obj: firestore.DocumentData): ApiMapValue {
    const fields: ApiMapValue = {};

    for (const prop of Object.keys(obj)) {
      const val = this.encodeValue(obj[prop]);

      if (val) {
        fields[prop] = val;
      }
    }

    return fields;
  }

  /**
   * Encodes a JavaScript value into the Firestore 'Value' representation.
   *
   * @private
   * @internal
   * @param val The object to encode
   * @returns The Firestore Proto or null if we are deleting a field.
   */
  encodeValue(val: FieldTransform | undefined): null;
  encodeValue(
    val:
      | string
      | boolean
      | number
      | bigint
      | Date
      | null
      | Buffer
      | Uint8Array
      | VectorValue
      | Map<string, unknown>
      | Pipeline,
  ): api.IValue;
  encodeValue(val: unknown): api.IValue | null;
  encodeValue(val: unknown): api.IValue | null {
    if (val instanceof FieldTransform) {
      return null;
    }

    if (typeof val === 'string') {
      return {
        stringValue: val as string,
      };
    }

    if (typeof val === 'boolean') {
      return {
        booleanValue: val as boolean,
      };
    }

    if (typeof val === 'number') {
      const isNegativeZero = val === 0 && 1 / val === 1 / -0;
      if (Number.isSafeInteger(val) && !isNegativeZero) {
        return {
          integerValue: val as number,
        };
      } else {
        return {
          doubleValue: val as number,
        };
      }
    }

    if (typeof val === 'bigint') {
      return {
        integerValue: val.toString(),
      };
    }

    if (val instanceof Date) {
      const timestamp = Timestamp.fromDate(val);
      return {
        timestampValue: {
          seconds: timestamp.seconds,
          nanos: timestamp.nanoseconds,
        },
      };
    }

    if (isMomentJsType(val)) {
      const timestamp = Timestamp.fromDate(val.toDate());
      return {
        timestampValue: {
          seconds: timestamp.seconds,
          nanos: timestamp.nanoseconds,
        },
      };
    }

    if (val === null) {
      return {
        nullValue: 'NULL_VALUE',
      };
    }

    if (val instanceof Buffer || val instanceof Uint8Array) {
      return {
        bytesValue: val,
      };
    }

    if (val instanceof VectorValue) {
      return val._toProto(this);
    }

    if (val instanceof Pipeline) {
      return {
        pipelineValue: val._toProto(),
      };
    }

    if (isObject(val)) {
      const toProto = val['toProto'];
      if (typeof toProto === 'function') {
        return toProto.bind(val)();
      }
    }

    if (isObject(val)) {
      const _toProto = val['_toProto'];
      if (typeof _toProto === 'function') {
        return _toProto.bind(val)(this);
      }
    }

    if (Array.isArray(val)) {
      const array: api.IValue = {
        arrayValue: {},
      };

      if (val.length > 0) {
        array.arrayValue!.values = [];
        for (let i = 0; i < val.length; ++i) {
          const enc = this.encodeValue(val[i]);
          if (enc) {
            array.arrayValue!.values!.push(enc);
          }
        }
      }

      return array;
    }

    if (val instanceof Map) {
      const map: api.IMapValue = {fields: {}};
      for (const [key, value] of val.entries()) {
        if (typeof key !== 'string') {
          throw new Error(`Cannot encode map with non-string key: ${key}`);
        }

        map.fields![key] = this.encodeValue(value)!;
      }

      return {
        mapValue: map,
      };
    }

    if (typeof val === 'object' && isPlainObject(val)) {
      const map: api.IValue = {
        mapValue: {},
      };

      // If we encounter an empty object, we always need to send it to make sure
      // the server creates a map entry.
      if (!isEmpty(val)) {
        map.mapValue!.fields = this.encodeFields(val);
        if (isEmpty(map.mapValue!.fields!)) {
          return null;
        }
      }

      return map;
    }

    if (val === undefined && this.allowUndefined) {
      return null;
    }

    throw new Error(`Cannot encode value: ${val}`);
  }

  encodeReference(
    path: string | firestore.DocumentReference | firestore.CollectionReference,
  ): api.IValue {
    return {
      referenceValue: isString(path) ? path : path.path,
    };
  }

  /**
   * @private
   */
  encodeVector(rawVector: number[]): api.IValue {
    // A Firestore Vector is a map with reserved key/value pairs.
    return {
      mapValue: {
        fields: {
          [RESERVED_MAP_KEY]: {
            stringValue: RESERVED_MAP_KEY_VECTOR_VALUE,
          },
          [VECTOR_MAP_VECTORS_KEY]: {
            arrayValue: {
              values: rawVector.map(value => {
                return {
                  doubleValue: value,
                };
              }),
            },
          },
        },
      },
    };
  }

  /**
   * Decodes a single Firestore 'Value' Protobuf.
   *
   * @private
   * @internal
   * @param proto A Firestore 'Value' Protobuf.
   * @returns The converted JS type.
   */
  decodeValue(proto: api.IValue): unknown {
    const valueType = detectValueType(proto);

    switch (valueType) {
      case 'stringValue': {
        return proto.stringValue;
      }
      case 'booleanValue': {
        return proto.booleanValue;
      }
      case 'integerValue': {
        return this.createInteger(proto.integerValue!);
      }
      case 'doubleValue': {
        return proto.doubleValue;
      }
      case 'timestampValue': {
        return Timestamp.fromProto(proto.timestampValue!);
      }
      case 'referenceValue': {
        const resourcePath = QualifiedResourcePath.fromSlashSeparatedString(
          proto.referenceValue!,
        );
        if (resourcePath.isDocument) {
          return this.createDocumentReference(resourcePath.relativeName);
        } else {
          throw new Error(
            `The SDK does not currently support decoding referenceValues for collections or partitions. Actual path value: '${proto.referenceValue!}'`,
          );
        }
      }
      case 'arrayValue': {
        const array: unknown[] = [];
        if (Array.isArray(proto.arrayValue!.values)) {
          for (const value of proto.arrayValue!.values!) {
            array.push(this.decodeValue(value));
          }
        }
        return array;
      }
      case 'nullValue': {
        return null;
      }
      case 'mapValue': {
        const fields = proto.mapValue!.fields;
        if (fields) {
          const obj: firestore.DocumentData = {};
          for (const prop of Object.keys(fields)) {
            obj[prop] = this.decodeValue(fields[prop]);
          }
          return obj;
        } else {
          return {};
        }
      }
      case 'vectorValue': {
        const fields = proto.mapValue!.fields!;
        return VectorValue._fromProto(fields[VECTOR_MAP_VECTORS_KEY]);
      }
      case 'geoPointValue': {
        return GeoPoint.fromProto(proto.geoPointValue!);
      }
      case 'bytesValue': {
        return proto.bytesValue;
      }
      default: {
        throw new Error(
          'Cannot decode type from Firestore Value: ' + JSON.stringify(proto),
        );
      }
    }
  }

  /**
   * Decodes a google.protobuf.Value
   *
   * @private
   * @internal
   * @param proto A Google Protobuf 'Value'.
   * @returns The converted JS type.
   */
  decodeGoogleProtobufValue(proto: proto.google.protobuf.IValue): unknown {
    switch (detectGoogleProtobufValueType(proto)) {
      case 'nullValue': {
        return null;
      }
      case 'numberValue': {
        return proto.numberValue;
      }
      case 'stringValue': {
        return proto.stringValue;
      }
      case 'boolValue': {
        return proto.boolValue;
      }
      case 'listValue': {
        return this.decodeGoogleProtobufList(proto.listValue);
      }
      case 'structValue': {
        return this.decodeGoogleProtobufStruct(proto.structValue);
      }
      default: {
        throw new Error(
          'Cannot decode type from google.protobuf.Value: ' +
            JSON.stringify(proto),
        );
      }
    }
  }

  /**
   * Decodes a google.protobuf.ListValue
   *
   * @private
   * @internal
   * @param proto A Google Protobuf 'ListValue'.
   * @returns The converted JS type.
   */
  decodeGoogleProtobufList(
    proto: proto.google.protobuf.IListValue | null | undefined,
  ): unknown[] {
    const result: unknown[] = [];
    if (proto && proto.values && Array.isArray(proto.values)) {
      for (const value of proto.values) {
        result.push(this.decodeGoogleProtobufValue(value));
      }
    }
    return result;
  }

  /**
   * Decodes a google.protobuf.Struct
   *
   * @private
   * @internal
   * @param proto A Google Protobuf 'Struct'.
   * @returns The converted JS type.
   */
  decodeGoogleProtobufStruct(
    proto: proto.google.protobuf.IStruct | null | undefined,
  ): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    if (proto && proto.fields) {
      for (const prop of Object.keys(proto.fields)) {
        result[prop] = this.decodeGoogleProtobufValue(proto.fields[prop]);
      }
    }
    return result;
  }
}

/**
 * Validates a JavaScript value for usage as a Firestore value.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param value JavaScript value to validate.
 * @param desc A description of the expected type.
 * @param path The field path to validate.
 * @param options Validation options
 * @param level The current depth of the traversal. This is used to decide
 * whether undefined values or deletes are allowed.
 * @param inArray Whether we are inside an array.
 * @throws when the object is invalid.
 */
export function validateUserInput(
  arg: string | number,
  value: unknown,
  desc: string,
  options: ValidationOptions,
  path?: FieldPath,
  level?: number,
  inArray?: boolean,
): void {
  if (path && path.size - 1 > MAX_DEPTH) {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        desc,
      )} Input object is deeper than ${MAX_DEPTH} levels or contains a cycle.`,
    );
  }

  level = level || 0;
  inArray = inArray || false;

  const fieldPathMessage = path ? ` (found in field "${path}")` : '';

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; ++i) {
      validateUserInput(
        arg,
        value[i]!,
        desc,
        options,
        path ? path.append(String(i)) : new FieldPath(String(i)),
        level + 1,
        /* inArray= */ true,
      );
    }
  } else if (isPlainObject(value)) {
    for (const prop of Object.keys(value)) {
      validateUserInput(
        arg,
        value[prop]!,
        desc,
        options,
        path ? path.append(new FieldPath(prop)) : new FieldPath(prop),
        level + 1,
        inArray,
      );
    }
  } else if (value === undefined) {
    if (options.allowUndefined && level === 0) {
      throw new Error(
        `${invalidArgumentMessage(
          arg,
          desc,
        )} "undefined" values are only ignored inside of objects.`,
      );
    } else if (!options.allowUndefined) {
      throw new Error(
        `${invalidArgumentMessage(
          arg,
          desc,
        )} Cannot use "undefined" as a Firestore value${fieldPathMessage}. ` +
          'If you want to ignore undefined values, enable `ignoreUndefinedProperties`.',
      );
    }
  } else if (value instanceof VectorValue) {
    // OK
  } else if (value instanceof DeleteTransform) {
    if (inArray) {
      throw new Error(
        `${invalidArgumentMessage(arg, desc)} ${
          value.methodName
        }() cannot be used inside of an array${fieldPathMessage}.`,
      );
    } else if (options.allowDeletes === 'none') {
      throw new Error(
        `${invalidArgumentMessage(arg, desc)} ${
          value.methodName
        }() must appear at the top-level and can only be used in update() ` +
          `or set() with {merge:true}${fieldPathMessage}.`,
      );
    } else if (options.allowDeletes === 'root') {
      if (level === 0) {
        // Ok (update() with UpdateData).
      } else if (level === 1 && path?.size === 1) {
        // Ok (update with varargs).
      } else {
        throw new Error(
          `${invalidArgumentMessage(arg, desc)} ${
            value.methodName
          }() must appear at the top-level and can only be used in update() ` +
            `or set() with {merge:true}${fieldPathMessage}.`,
        );
      }
    }
  } else if (value instanceof FieldTransform) {
    if (inArray) {
      throw new Error(
        `${invalidArgumentMessage(arg, desc)} ${
          value.methodName
        }() cannot be used inside of an array${fieldPathMessage}.`,
      );
    } else if (!options.allowTransforms) {
      throw new Error(
        `${invalidArgumentMessage(arg, desc)} ${
          value.methodName
        }() can only be used in set(), create() or update()${fieldPathMessage}.`,
      );
    }
  } else if (value instanceof FieldPath) {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        desc,
      )} Cannot use object of type "FieldPath" as a Firestore value${fieldPathMessage}.`,
    );
  } else if (value instanceof DocumentReference) {
    // Ok.
  } else if (value instanceof GeoPoint) {
    // Ok.
  } else if (value instanceof Timestamp || value instanceof Date) {
    // Ok.
  } else if (isMomentJsType(value)) {
    // Ok.
  } else if (value instanceof Buffer || value instanceof Uint8Array) {
    // Ok.
  } else if (value === null) {
    // Ok.
  } else if (isProtoValueSerializable(value)) {
    // Ok.
  } else if (typeof value === 'object') {
    throw new Error(customObjectMessage(arg, value, path));
  }
}

/**
 * Returns true if value is a MomentJs date object.
 * @private
 * @internal
 */
function isMomentJsType(value: unknown): value is {toDate(): Date} {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor &&
    value.constructor.name === 'Moment' &&
    typeof (value as {toDate: unknown}).toDate === 'function'
  );
}

export function isProtoValueSerializable(
  value: unknown,
): value is ProtoValueSerializable {
  return (
    !!value &&
    typeof (value as ProtoValueSerializable)._toProto === 'function' &&
    (value as ProtoValueSerializable)._protoValueType === 'ProtoValue'
  );
}

export interface ProtoSerializable<ProtoType> {
  _toProto(serializer: Serializer): ProtoType;
}

export interface ProtoValueSerializable extends ProtoSerializable<api.IValue> {
  // Supports runtime identification of the ProtoSerializable<ProtoValue> type.
  _protoValueType: 'ProtoValue';
}

export interface HasUserData {
  _validateUserData(ignoreUndefinedProperties: boolean): void;
}

export function hasUserData(value: unknown): value is HasUserData {
  return typeof (value as HasUserData)._validateUserData === 'function';
}

/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields.
 */
export class ObjectValue {
  constructor(readonly value: {mapValue: IMapValue}) {}

  static empty(): ObjectValue {
    return new ObjectValue({mapValue: {}});
  }

  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(path: ObjectValueFieldPath, value: IValue): void {
    const fieldsMap = this.getFieldsMap(path.popLast());
    fieldsMap[path.lastSegment()] = Value.fromObject(value).toJSON();
  }

  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(data: Map<ObjectValueFieldPath, IValue | null>): void {
    let parent = new ObjectValueFieldPath();

    let upserts: {[key: string]: IValue} = {};
    let deletes: string[] = [];

    data.forEach((value, path) => {
      if (!parent.isImmediateParentOf(path)) {
        // Insert the accumulated changes at this parent location
        const fieldsMap = this.getFieldsMap(parent);
        this.applyChanges(fieldsMap, upserts, deletes);
        upserts = {};
        deletes = [];
        parent = path.popLast();
      }

      if (value) {
        upserts[path.lastSegment()] = Value.fromObject(value).toJSON();
      } else {
        deletes.push(path.lastSegment());
      }
    });

    const fieldsMap = this.getFieldsMap(parent);
    this.applyChanges(fieldsMap, upserts, deletes);
  }

  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  private getFieldsMap(path: ObjectValueFieldPath): Record<string, IValue> {
    let current = this.value;

    if (!current.mapValue!.fields) {
      current.mapValue = {fields: {}};
    }

    for (let i = 0; i < path.size; ++i) {
      let next = current.mapValue!.fields![path.get(i)];
      if (!isMapValue(next) || !next.mapValue.fields) {
        next = {mapValue: {fields: {}}};
        current.mapValue!.fields![path.get(i)] = next;
      }
      current = next as {mapValue: IMapValue};
    }

    return current.mapValue!.fields!;
  }

  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  private applyChanges(
    fieldsMap: Record<string, IValue>,
    inserts: {[key: string]: IValue},
    deletes: string[],
  ): void {
    forEach(inserts, (key, val) => (fieldsMap[key] = val));
    for (const field of deletes) {
      delete fieldsMap[field];
    }
  }
}

/** Returns true if `value` is a MapValue. */
export function isMapValue(
  value?: IValue | null,
): value is {mapValue: IMapValue} {
  return !!value && 'mapValue' in value;
}
