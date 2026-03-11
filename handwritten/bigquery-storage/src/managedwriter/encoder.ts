// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as protobuf from 'protobufjs';
import * as protos from '../../protos/protos';
import {
  generatePlaceholderFieldName,
  isProtoCompatible,
  normalizeDescriptor,
} from '../adapt/proto';
import * as extend from 'extend';
import {JSONObject, JSONValue} from './json_writer';
import {PreciseDate} from '@google-cloud/precise-date';

type IDescriptorProto = protos.google.protobuf.IDescriptorProto;
type DescriptorProto = protos.google.protobuf.DescriptorProto;

const DescriptorProto = protos.google.protobuf.DescriptorProto;
const {Type} = protobuf;

/**
 * Internal class used by the JSONWriter to convert JSON data to protobuf messages.
 * It can be configure to do some data conversion to match what BigQuery expects.
 *
 * @class
 * @memberof managedwriter
 */
export class JSONEncoder {
  private _type: protobuf.Type = Type.fromJSON('root', {
    fields: {},
  });

  /**
   * Creates a new JSONEncoder instance.
   *
   * @param {Object} params - The parameters for the JSONEncoder.
   * @param {IDescriptorProto} params.protoDescriptor - The proto descriptor
   *   for the JSON rows.
   */
  constructor(params: {protoDescriptor: IDescriptorProto}) {
    const {protoDescriptor} = params;
    this.setProtoDescriptor(protoDescriptor);
  }

  /**
   * Update the proto descriptor for the Encoder.
   *
   * @param {IDescriptorProto} protoDescriptor - The proto descriptor.
   */
  setProtoDescriptor(protoDescriptor: IDescriptorProto): void {
    const normalized = normalizeDescriptor(
      new DescriptorProto(protoDescriptor),
    );
    this._type = Type.fromDescriptor(normalized);
  }

  /**
   * Writes a JSONList that contains objects to be written to the BigQuery table by first converting
   * the JSON data to protobuf messages, then using Writer's appendRows() to write the data at current end
   * of stream. If there is a schema update, the current Writer is closed and reopened with the updated schema.
   *
   * @param {JSONList} rows - The list of JSON rows.
   * @returns {Uint8Array[]} The encoded rows.
   */
  encodeRows(rows: JSONObject[]): Uint8Array[] {
    const serializedRows = rows
      .map(r => {
        return this.convertRow(r, this._type);
      })
      .map(r => {
        return this.encodeRow(r);
      });
    return serializedRows;
  }

  private isPlainObject(value: any): boolean {
    return value && [undefined, Object].includes(value.constructor);
  }

  private encodeRow(row: JSONObject): Uint8Array {
    const msg = this._type.create(row);
    return this._type.encode(msg).finish();
  }

  private convertRow(source: JSONObject, ptype: protobuf.Type): JSONObject {
    const row = extend(true, {}, source);
    const keys = Object.keys(row).map(key => {
      if (!isProtoCompatible(key)) {
        const newFieldName = generatePlaceholderFieldName(key);
        // swap original key with placeholder field name
        row[newFieldName] = row[key];
        delete row[key];
        return newFieldName;
      }
      return key;
    });
    for (const key of keys) {
      const value = row[key];
      if (value === null) {
        continue;
      }
      const encodedValue = this.encodeRowValue(value, key, ptype);
      if (encodedValue === undefined) {
        continue;
      }
      row[key] = encodedValue;
    }
    return row;
  }

  private encodeRowValue(
    value: JSONValue,
    key: string,
    ptype: protobuf.Type,
  ): JSONValue | undefined {
    const pfield = ptype.fields[key];
    if (!pfield) {
      return undefined;
    }
    if (value instanceof Date || value instanceof PreciseDate) {
      return this.encodeDateValue(pfield.type, value);
    }
    // NUMERIC and BIGNUMERIC integer
    if (typeof value === 'number' || typeof value === 'bigint') {
      switch (pfield.type) {
        case 'string':
          return value.toString(10);
      }
      return undefined;
    }
    if (Array.isArray(value)) {
      const subType = this.getSubType(key, ptype);
      return value.map(v => {
        if (this.isPlainObject(v)) {
          return this.convertRow(v as JSONObject, subType);
        }
        const encodedValue = this.encodeRowValue(v, key, subType);
        if (encodedValue === undefined) {
          return v;
        }
        return encodedValue;
      });
    }
    if (this.isPlainObject(value)) {
      const subType = this.getSubType(key, ptype);
      return this.convertRow(value as JSONObject, subType);
    }
    return undefined;
  }

  private encodeDateValue(
    fieldType: string,
    value: Date | PreciseDate,
  ): JSONValue | undefined {
    switch (fieldType) {
      case 'int32': // DATE
        // The value is the number of days since the Unix epoch (1970-01-01)
        return value.getTime() / (1000 * 60 * 60 * 24);
      case 'int64': {
        // TIMESTAMP
        let microseconds = 0;
        if (value instanceof PreciseDate) {
          microseconds = value.getMicroseconds();
        }
        // The value is given in microseconds since the Unix epoch (1970-01-01)
        return value.getTime() * 1000 + microseconds;
      }
      case 'string': // DATETIME
        return value.toJSON().replace(/^(.*)T(.*)Z$/, '$1 $2');
    }
    return undefined;
  }

  private getSubType(key: string, ptype: protobuf.Type): protobuf.Type {
    const pfield = ptype.fields[key];
    if (!pfield) {
      return ptype;
    }
    try {
      const subType = ptype.lookupTypeOrEnum(pfield.type);
      return subType;
    } catch (err) {
      return ptype;
    }
  }
}
