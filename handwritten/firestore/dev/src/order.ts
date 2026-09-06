/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {google} from '../protos/firestore_v1_proto_api';
import {detectValueType} from './convert';
import {QualifiedResourcePath} from './path';
import {ApiMapValue} from './types';

import api = google.firestore.v1;
import {
  RESERVED_BSON_BINARY_KEY,
  RESERVED_BSON_OBJECT_ID_KEY,
  RESERVED_BSON_TIMESTAMP_INCREMENT_KEY,
  RESERVED_BSON_TIMESTAMP_KEY,
  RESERVED_BSON_TIMESTAMP_SECONDS_KEY,
  RESERVED_DECIMAL128_KEY,
  RESERVED_INT32_KEY,
  RESERVED_REGEX_KEY,
  RESERVED_REGEX_OPTIONS_KEY,
  RESERVED_REGEX_PATTERN_KEY,
} from './map-type';
import {Quadruple} from './quadruple';

/*!
 * The type order as defined by the backend.
 */
enum TypeOrder {
  // NULL and MIN_KEY sort the same.
  NULL = 0,
  MIN_KEY = 1,
  BOOLEAN = 2,
  // Note: all numbers (32-bit int, 64-bit int, 64-bit double, 128-bit decimal,
  // etc.) are sorted together numerically. The `compareNumberProtos` function
  // distinguishes between different number types and compares them accordingly.
  NUMBER = 3,
  TIMESTAMP = 4,
  BSON_TIMESTAMP = 5,
  STRING = 6,
  BLOB = 7,
  REF = 8,
  BSON_OBJECT_ID = 9,
  GEO_POINT = 10,
  REGEX = 11,
  ARRAY = 12,
  VECTOR = 13,
  OBJECT = 14,
  MAX_KEY = 15,
}

/*!
 * @private
 * @internal
 */
function typeOrder(val: api.IValue): TypeOrder {
  const valueType = detectValueType(val);

  switch (valueType) {
    case 'nullValue':
      return TypeOrder.NULL;
    case 'minKeyValue':
      return TypeOrder.MIN_KEY;
    case 'integerValue':
    case 'int32Value':
    case 'decimal128Value':
    case 'doubleValue':
      return TypeOrder.NUMBER;
    case 'bsonTimestampValue':
      return TypeOrder.BSON_TIMESTAMP;
    case 'stringValue':
      return TypeOrder.STRING;
    case 'booleanValue':
      return TypeOrder.BOOLEAN;
    case 'arrayValue':
      return TypeOrder.ARRAY;
    case 'timestampValue':
      return TypeOrder.TIMESTAMP;
    case 'geoPointValue':
      return TypeOrder.GEO_POINT;
    case 'regexValue':
      return TypeOrder.REGEX;
    case 'bsonObjectIdValue':
      return TypeOrder.BSON_OBJECT_ID;
    case 'bytesValue':
    case 'bsonBinaryValue':
      return TypeOrder.BLOB;
    case 'referenceValue':
      return TypeOrder.REF;
    case 'mapValue':
      return TypeOrder.OBJECT;
    case 'vectorValue':
      return TypeOrder.VECTOR;
    case 'maxKeyValue':
      return TypeOrder.MAX_KEY;
    default:
      throw new Error('Unexpected value type: ' + valueType);
  }
}

/*!
 * @private
 * @internal
 */
export function primitiveComparator(
  left: string | boolean | number,
  right: string | boolean | number,
): number {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  return 0;
}

/*!
 * Utility function to compare doubles (using Firestore semantics for NaN).
 * @private
 * @internal
 */
function compareNumbers(left: number, right: number): number {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  if (left === right) {
    return 0;
  }
  // one or both are NaN.
  if (isNaN(left)) {
    return isNaN(right) ? 0 : -1;
  }
  return 1;
}

/*!
 * @private
 * @internal
 */
function compareNumberProtos(left: api.IValue, right: api.IValue): number {
  // If either number is Decimal128, we cast both to wider (128-bit)
  // representation, and compare those.
  if (
    detectValueType(left) === 'decimal128Value' ||
    detectValueType(right) === 'decimal128Value'
  ) {
    const lhs = convertNumberToQuadruple(left);
    const rhs = convertNumberToQuadruple(right);

    // Firestore sorts `NaN`s smaller than all numbers, but Quadruple considers
    // `NaN`s bigger than all numbers.
    if (lhs.isNaN()) {
      return rhs.isNaN() ? 0 : -1;
    } else if (rhs.isNaN()) {
      // lhs is not NaN, and rhs is NaN.
      return 1;
    }

    // Firestore considers -0 and +0 to be equal, but Quadruple does not.
    if (lhs.isZero() && rhs.isZero()) {
      return 0;
    }

    return lhs.compareTo(rhs);
  }

  return compareNumbers(
    convertProtoValueToNumber(left),
    convertProtoValueToNumber(right),
  );
}

/*!
 * Converts the given proto value to a `number`.
 * Throws an exception if the value is larger than 64-bit value or is not numeric.
 *
 * @private
 * @internal
 */
function convertProtoValueToNumber(value: api.IValue): number {
  if (value.integerValue !== undefined) {
    return Number(value.integerValue!);
  } else if (value.doubleValue !== undefined) {
    return Number(value.doubleValue!);
  } else if (detectValueType(value) === 'int32Value') {
    return Number(value.mapValue!.fields?.[RESERVED_INT32_KEY]?.integerValue);
  }

  throw new Error(
    'convertProtoValueToNumber was called on an unsupported type.',
  );
}

/*!
 * Converts the given proto value to a `Quadruple`.
 * Throws an exception if the value is not numeric.
 *
 * @private
 * @internal
 */
function convertNumberToQuadruple(value: api.IValue): Quadruple {
  if (detectValueType(value) === 'decimal128Value') {
    return Quadruple.fromString(
      value.mapValue!.fields![RESERVED_DECIMAL128_KEY].stringValue!,
    );
  } else {
    return Quadruple.fromNumber(convertProtoValueToNumber(value));
  }
}

/*!
 * @private
 * @internal
 */
function compareTimestamps(
  left: google.protobuf.ITimestamp,
  right: google.protobuf.ITimestamp,
): number {
  const seconds = primitiveComparator(left.seconds || 0, right.seconds || 0);
  if (seconds !== 0) {
    return seconds;
  }
  return primitiveComparator(left.nanos || 0, right.nanos || 0);
}

/*!
 * @private
 * @internal
 */
function compareBsonTimestamps(left: api.IValue, right: api.IValue): number {
  // First order by seconds, then order by increment values.
  const leftFields = left.mapValue!.fields?.[RESERVED_BSON_TIMESTAMP_KEY];
  const leftSeconds = Number(
    leftFields?.mapValue?.fields?.[RESERVED_BSON_TIMESTAMP_SECONDS_KEY]
      ?.integerValue,
  );
  const leftIncrement = Number(
    leftFields?.mapValue?.fields?.[RESERVED_BSON_TIMESTAMP_INCREMENT_KEY]
      ?.integerValue,
  );
  const rightFields = right.mapValue!.fields?.[RESERVED_BSON_TIMESTAMP_KEY];
  const rightSeconds = Number(
    rightFields?.mapValue?.fields?.[RESERVED_BSON_TIMESTAMP_SECONDS_KEY]
      ?.integerValue,
  );
  const rightIncrement = Number(
    rightFields?.mapValue?.fields?.[RESERVED_BSON_TIMESTAMP_INCREMENT_KEY]
      ?.integerValue,
  );
  const secondsDiff = compareNumbers(leftSeconds, rightSeconds);
  return secondsDiff !== 0
    ? secondsDiff
    : compareNumbers(leftIncrement, rightIncrement);
}

/*!
 * @private
 * @internal
 */
function getSubtype(value: api.IValue): number {
  if (value.bytesValue !== undefined) {
    return 0;
  }
  const bsonBinaryFields = value.mapValue?.fields?.[RESERVED_BSON_BINARY_KEY];
  if (bsonBinaryFields && bsonBinaryFields.bytesValue) {
    return bsonBinaryFields.bytesValue[0];
  }
  throw new Error(
    'Cannot get subtype for non-blob value: ' + JSON.stringify(value),
  );
}

function getData(value: api.IValue): Uint8Array {
  if (value.bytesValue !== undefined) {
    return value.bytesValue || new Uint8Array();
  }
  const bsonBinaryFields = value.mapValue?.fields?.[RESERVED_BSON_BINARY_KEY];
  if (bsonBinaryFields && bsonBinaryFields.bytesValue) {
    return bsonBinaryFields.bytesValue.slice(1);
  }
  throw new Error(
    'Cannot get data for non-blob value: ' + JSON.stringify(value),
  );
}

/*!
 * @private
 * @internal
 */
function compareBlobs(left: api.IValue, right: api.IValue): number {
  if (left.bytesValue !== undefined && !(left.bytesValue instanceof Buffer)) {
    throw new Error('Blobs can only be compared if they are Buffers.');
  }
  if (right.bytesValue !== undefined && !(right.bytesValue instanceof Buffer)) {
    throw new Error('Blobs can only be compared if they are Buffers.');
  }
  const leftSubtype = getSubtype(left);
  const rightSubtype = getSubtype(right);
  if (leftSubtype !== rightSubtype) {
    return primitiveComparator(leftSubtype, rightSubtype);
  }
  return Buffer.compare(
    Buffer.from(getData(left)),
    Buffer.from(getData(right)),
  );
}

/*!
 * @private
 * @internal
 */
function compareReferenceProtos(left: api.IValue, right: api.IValue): number {
  const leftPath = QualifiedResourcePath.fromSlashSeparatedString(
    left.referenceValue!,
  );
  const rightPath = QualifiedResourcePath.fromSlashSeparatedString(
    right.referenceValue!,
  );
  return leftPath.compareTo(rightPath);
}

/*!
 * @private
 * @internal
 */
function compareGeoPoints(
  left: google.type.ILatLng,
  right: google.type.ILatLng,
): number {
  return (
    primitiveComparator(left.latitude || 0, right.latitude || 0) ||
    primitiveComparator(left.longitude || 0, right.longitude || 0)
  );
}

/*!
 * @private
 * @internal
 */
export function compareArrays(left: api.IValue[], right: api.IValue[]): number {
  for (let i = 0; i < left.length && i < right.length; i++) {
    const valueComparison = compare(left[i], right[i]);
    if (valueComparison !== 0) {
      return valueComparison;
    }
  }
  // If all the values matched so far, just check the length.
  return primitiveComparator(left.length, right.length);
}

/*!
 * @private
 * @internal
 */
function compareObjects(left: ApiMapValue, right: ApiMapValue): number {
  // This requires iterating over the keys in the object in order and doing a
  // deep comparison.
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  leftKeys.sort();
  rightKeys.sort();
  for (let i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
    const keyComparison = compareUtf8Strings(leftKeys[i], rightKeys[i]);
    if (keyComparison !== 0) {
      return keyComparison;
    }
    const key = leftKeys[i];
    const valueComparison = compare(left[key], right[key]);
    if (valueComparison !== 0) {
      return valueComparison;
    }
  }
  // If all the keys matched so far, just check the length.
  return primitiveComparator(leftKeys.length, rightKeys.length);
}

/*!
 * @private
 * @internal
 */
function compareVectors(left: ApiMapValue, right: ApiMapValue): number {
  // The vector is a map, but only vector value is compared.
  const leftArray = left?.['value']?.arrayValue?.values ?? [];
  const rightArray = right?.['value']?.arrayValue?.values ?? [];

  const lengthCompare = primitiveComparator(
    leftArray.length,
    rightArray.length,
  );
  if (lengthCompare !== 0) {
    return lengthCompare;
  }

  return compareArrays(leftArray, rightArray);
}

/*!
 * @private
 * @internal
 */
function compareRegex(left: api.IValue, right: api.IValue): number {
  const lhsPattern =
    left.mapValue!.fields?.[RESERVED_REGEX_KEY]?.mapValue?.fields?.[
      RESERVED_REGEX_PATTERN_KEY
    ]?.stringValue ?? '';
  const lhsOptions =
    left.mapValue!.fields?.[RESERVED_REGEX_KEY]?.mapValue?.fields?.[
      RESERVED_REGEX_OPTIONS_KEY
    ]?.stringValue ?? '';
  const rhsPattern =
    right.mapValue!.fields?.[RESERVED_REGEX_KEY]?.mapValue?.fields?.[
      RESERVED_REGEX_PATTERN_KEY
    ]?.stringValue ?? '';
  const rhsOptions =
    right.mapValue!.fields?.[RESERVED_REGEX_KEY]?.mapValue?.fields?.[
      RESERVED_REGEX_OPTIONS_KEY
    ]?.stringValue ?? '';

  // First order by patterns, and then options.
  const patternDiff = compareUtf8Strings(lhsPattern, rhsPattern);
  return patternDiff !== 0
    ? patternDiff
    : compareUtf8Strings(lhsOptions, rhsOptions);
}

/*!
 * @private
 * @internal
 */
function compareBsonObjectIds(left: api.IValue, right: api.IValue): number {
  const lhs =
    left.mapValue!.fields?.[RESERVED_BSON_OBJECT_ID_KEY]?.stringValue ?? '';
  const rhs =
    right.mapValue!.fields?.[RESERVED_BSON_OBJECT_ID_KEY]?.stringValue ?? '';
  return compareUtf8Strings(lhs, rhs);
}

/*!
 * Compare strings in UTF-8 encoded byte order
 * @private
 * @internal
 */
export function compareUtf8Strings(left: string, right: string): number {
  // Find the first differing character (a.k.a. "UTF-16 code unit") in the two strings and,
  // if found, use that character to determine the relative ordering of the two strings as a
  // whole. Comparing UTF-16 strings in UTF-8 byte order can be done simply and efficiently by
  // comparing the UTF-16 code units (chars). This serendipitously works because of the way UTF-8
  // and UTF-16 happen to represent Unicode code points.
  //
  // After finding the first pair of differing characters, there are two cases:
  //
  // Case 1: Both characters are non-surrogates (code points less than or equal to 0xFFFF) or
  // both are surrogates from a surrogate pair (that collectively represent code points greater
  // than 0xFFFF). In this case their numeric order as UTF-16 code units is the same as the
  // lexicographical order of their corresponding UTF-8 byte sequences. A direct comparison is
  // sufficient.
  //
  // Case 2: One character is a surrogate and the other is not. In this case the surrogate-
  // containing string is always ordered after the non-surrogate. This is because surrogates are
  // used to represent code points greater than 0xFFFF which have 4-byte UTF-8 representations
  // and are lexicographically greater than the 1, 2, or 3-byte representations of code points
  // less than or equal to 0xFFFF.
  //
  // An example of why Case 2 is required is comparing the following two Unicode code points:
  //
  // |-----------------------|------------|---------------------|-----------------|
  // | Name                  | Code Point | UTF-8 Encoding      | UTF-16 Encoding |
  // |-----------------------|------------|---------------------|-----------------|
  // | Replacement Character | U+FFFD     | 0xEF 0xBF 0xBD      | 0xFFFD          |
  // | Grinning Face         | U+1F600    | 0xF0 0x9F 0x98 0x80 | 0xD83D 0xDE00   |
  // |-----------------------|------------|---------------------|-----------------|
  //
  // A lexicographical comparison of the UTF-8 encodings of these code points would order
  // "Replacement Character" _before_ "Grinning Face" because 0xEF is less than 0xF0. However, a
  // direct comparison of the UTF-16 code units, as would be done in case 1, would erroneously
  // produce the _opposite_ ordering, because 0xFFFD is _greater than_ 0xD83D. As it turns out,
  // this relative ordering holds for all comparisons of UTF-16 code points requiring a surrogate
  // pair with those that do not.
  const length = Math.min(left.length, right.length);
  for (let i = 0; i < length; i++) {
    const leftChar = left.charAt(i);
    const rightChar = right.charAt(i);
    if (leftChar !== rightChar) {
      return isSurrogate(leftChar) === isSurrogate(rightChar)
        ? primitiveComparator(leftChar, rightChar)
        : isSurrogate(leftChar)
          ? 1
          : -1;
    }
  }

  // Use the lengths of the strings to determine the overall comparison result since either the
  // strings were equal or one is a prefix of the other.
  return primitiveComparator(left.length, right.length);
}

const MIN_SURROGATE = 0xd800;
const MAX_SURROGATE = 0xdfff;

function isSurrogate(s: string): boolean {
  const c = s.charCodeAt(0);
  return c >= MIN_SURROGATE && c <= MAX_SURROGATE;
}

/*!
 * @private
 * @internal
 */
export function compare(left: api.IValue, right: api.IValue): number {
  // First compare the types.
  const leftType = typeOrder(left);
  const rightType = typeOrder(right);
  const typeComparison = primitiveComparator(leftType, rightType);
  if (typeComparison !== 0) {
    return typeComparison;
  }

  // So they are the same type.
  switch (leftType) {
    // All Nulls are all equal.
    // All MinKeys are all equal.
    // All MaxKeys are all equal.
    case TypeOrder.NULL:
    case TypeOrder.MIN_KEY:
    case TypeOrder.MAX_KEY:
      return 0;
    case TypeOrder.BOOLEAN:
      return primitiveComparator(left.booleanValue!, right.booleanValue!);
    case TypeOrder.STRING:
      return compareUtf8Strings(left.stringValue!, right.stringValue!);
    case TypeOrder.NUMBER:
      return compareNumberProtos(left, right);
    case TypeOrder.TIMESTAMP:
      return compareTimestamps(left.timestampValue!, right.timestampValue!);
    case TypeOrder.BSON_TIMESTAMP:
      return compareBsonTimestamps(left, right);
    case TypeOrder.BLOB:
      return compareBlobs(left, right);
    case TypeOrder.REF:
      return compareReferenceProtos(left, right);
    case TypeOrder.GEO_POINT:
      return compareGeoPoints(left.geoPointValue!, right.geoPointValue!);
    case TypeOrder.REGEX:
      return compareRegex(left, right);
    case TypeOrder.BSON_OBJECT_ID:
      return compareBsonObjectIds(left, right);
    case TypeOrder.ARRAY:
      return compareArrays(
        left.arrayValue!.values || [],
        right.arrayValue!.values || [],
      );
    case TypeOrder.OBJECT:
      return compareObjects(
        left.mapValue!.fields || {},
        right.mapValue!.fields || {},
      );
    case TypeOrder.VECTOR:
      return compareVectors(
        left.mapValue!.fields || {},
        right.mapValue!.fields || {},
      );
    default:
      throw new Error(`Encountered unknown type order: ${leftType}`);
  }
}
