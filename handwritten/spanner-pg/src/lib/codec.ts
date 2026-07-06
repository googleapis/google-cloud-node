// Copyright 2026 Google LLC
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

import * as pkg from '@google-cloud/spanner/build/protos/protos.js';
const google = pkg.google || (pkg as any).default?.google;
const TypeCode = google.spanner.v1.TypeCode;

export interface EncodedParam {
  valueProto: any;
  typeProto: any;
}

/**
 * Encodes a JavaScript value to Spanner Protobuf value and type format.
 */
export function encodeValue(val: any): EncodedParam {
  if (val === null || val === undefined) {
    return {
      valueProto: {nullValue: 0},
      typeProto: {code: TypeCode.STRING},
    };
  }

  if (typeof val === 'string') {
    return {
      valueProto: {stringValue: val},
      typeProto: {code: TypeCode.STRING},
    };
  }

  if (typeof val === 'boolean') {
    return {
      valueProto: {boolValue: val},
      typeProto: {code: TypeCode.BOOL},
    };
  }

  if (typeof val === 'number') {
    if (Number.isInteger(val)) {
      return {
        valueProto: {stringValue: val.toString()},
        typeProto: {code: TypeCode.INT64},
      };
    } else {
      return {
        valueProto: {numberValue: val},
        typeProto: {code: TypeCode.FLOAT64},
      };
    }
  }

  if (val instanceof Date) {
    return {
      valueProto: {stringValue: val.toISOString()},
      typeProto: {code: TypeCode.TIMESTAMP},
    };
  }

  if (Buffer.isBuffer(val)) {
    return {
      valueProto: {stringValue: val.toString('base64')},
      typeProto: {code: TypeCode.BYTES},
    };
  }

  if (Array.isArray(val)) {
    if (val.length === 0) {
      return {
        valueProto: {listValue: {values: []}},
        typeProto: {
          code: TypeCode.ARRAY,
          arrayElementType: {code: TypeCode.TYPE_CODE_UNSPECIFIED},
        },
      };
    }
    const encodedElements = val.map(encodeValue);
    const elementTypeProto = encodedElements[0].typeProto;
    return {
      valueProto: {
        listValue: {values: encodedElements.map(el => el.valueProto)},
      },
      typeProto: {
        code: TypeCode.ARRAY,
        arrayElementType: elementTypeProto,
      },
    };
  }

  if (typeof val === 'object') {
    return {
      valueProto: {stringValue: JSON.stringify(val)},
      typeProto: {code: TypeCode.JSON},
    };
  }

  throw new Error(
    `Unsupported type for Spanner parameter encoding: ${typeof val}`,
  );
}

/**
 * Decodes a Spanner Protobuf value to a JavaScript native value.
 */
export function decodeValue(valProto: any, typeProto: any): any {
  if (!valProto) {
    return null;
  }

  const kind = valProto.kind;
  if (kind === 'nullValue') {
    return null;
  }

  // Extract raw value based on active oneof kind, with plain-object fallback
  let rawVal: any;
  if (kind !== undefined) {
    rawVal = valProto[kind];
  } else {
    if (valProto.stringValue !== undefined) rawVal = valProto.stringValue;
    else if (valProto.numberValue !== undefined) rawVal = valProto.numberValue;
    else if (valProto.boolValue !== undefined) rawVal = valProto.boolValue;
    else if (valProto.listValue !== undefined) rawVal = valProto.listValue;
    else if (valProto.nullValue !== undefined) return null;
    else rawVal = valProto; // fallback
  }

  let code = typeProto.code;
  if (typeof code === 'string') {
    code = (TypeCode as any)[code];
  }

  switch (code) {
    case TypeCode.BOOL:
      return rawVal;

    case TypeCode.INT64:
      return rawVal;

    case TypeCode.FLOAT64:
      return rawVal;

    case TypeCode.STRING:
    case TypeCode.NUMERIC:
      return rawVal;

    case TypeCode.DATE:
      return rawVal;

    case TypeCode.TIMESTAMP:
      return new Date(rawVal);

    case TypeCode.BYTES:
      return Buffer.from(rawVal, 'base64');

    case TypeCode.JSON:
      try {
        return JSON.parse(rawVal);
      } catch {
        return rawVal;
      }

    case TypeCode.ARRAY: {
      if (!rawVal || !rawVal.values) return [];
      const elemType = typeProto.arrayElementType || {
        code: TypeCode.TYPE_CODE_UNSPECIFIED,
      };
      return rawVal.values.map((v: any) => decodeValue(v, elemType));
    }

    default:
      return rawVal;
  }
}
