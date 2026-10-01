// Copyright 2018 Google LLC
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

import {describe, it, expect} from 'vitest';

import {
  MaxKey,
  MinKey,
  FieldValue,
  Bytes,
  BsonObjectId,
  BsonTimestamp,
  Decimal128Value,
  Int32Value,
  RegexValue,
} from '../src';
import {
  ApiOverride,
  arrayTransform,
  createInstance,
  document,
  incrementTransform,
  InvalidApiUsage,
  minimumTransform,
  maximumTransform,
  requestEquals,
  response,
  serverTimestamp,
  set,
  writeResult,
} from './util/helpers';
import {compare} from '../src/order';
import {RESERVED_BSON_BINARY_KEY, RESERVED_MIN_KEY} from '../src/map-type';

function genericFieldValueTests(methodName: string, sentinel: FieldValue) {
  it("can't be used inside arrays", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('coll/doc');
      const expectedErr = new RegExp(
        `${methodName}\\(\\) cannot be used inside of an array`,
      );
      expect(() => docRef.set({a: [sentinel]})).toThrow(expectedErr);
      expect(() => docRef.set({a: {b: [sentinel]}})).toThrow(expectedErr);
      expect(() =>
        docRef.set({
          a: [{b: sentinel}],
        }),
      ).toThrow(expectedErr);
      expect(() => docRef.set({a: {b: {c: [sentinel]}}})).toThrow(expectedErr);
    });
  });

  it("can't be used inside arrayUnion()", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayUnion(sentinel)})).toThrow(
        `Element at index 0 is not a valid array element. ${methodName}() cannot be used inside of an array.`,
      );
    });
  });

  it("can't be used inside arrayRemove()", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayRemove(sentinel)})).toThrow(
        `Element at index 0 is not a valid array element. ${methodName}() cannot be used inside of an array.`,
      );
    });
  });

  it("can't be used with queries", () => {
    return createInstance().then(firestore => {
      const collRef = firestore.collection('coll');
      expect(() => collRef.where('a', '==', sentinel)).toThrow(
        `Value for argument "value" is not a valid query constraint. ${methodName}() can only be used in set(), create() or update().`,
      );
      expect(() => collRef.orderBy('a').startAt(sentinel)).toThrow(
        `Element at index 0 is not a valid query constraint. ${methodName}() can only be used in set(), create() or update().`,
      );
    });
  });
}

describe('FieldValue.arrayUnion()', () => {
  it('requires one argument', () => {
    expect(() => FieldValue.arrayUnion()).toThrow(
      'Function "FieldValue.arrayUnion()" requires at least 1 argument.',
    );
  });

  it('supports isEqual()', () => {
    const arrayUnionFoo1 = FieldValue.arrayUnion('foo');
    const arrayUnionFoo2 = FieldValue.arrayUnion('foo');
    const arrayUnionBar = FieldValue.arrayUnion('bar');
    expect(arrayUnionFoo1.isEqual(arrayUnionFoo2)).toBe(true);
    expect(arrayUnionFoo1.isEqual(arrayUnionBar)).toBe(false);
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            arrayTransform('field', 'appendMissingElements', 'foo', 'bar'),
            arrayTransform('map.field', 'appendMissingElements', 'foo', 'bar'),
          ],
        });

        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.arrayUnion('foo', 'bar'),
        map: {field: FieldValue.arrayUnion('foo', 'bar')},
      });
    });
  });

  it('must not contain directly nested arrays', () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayUnion([])})).toThrow(
        'Element at index 0 is not a valid array element. Nested arrays are ' +
          'not supported.',
      );
    });
  });

  genericFieldValueTests('FieldValue.arrayUnion', FieldValue.arrayUnion('foo'));
});

describe('FieldValue.increment()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).increment()).toThrow(
      'Function "FieldValue.increment()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.increment('foo' as InvalidApiUsage),
        });
      }).toThrow(
        'Value for argument "FieldValue.increment()" is not a valid number',
      );
    });
  });

  it('supports isEqual()', () => {
    const arrayUnionA = FieldValue.increment(13.37);
    const arrayUnionB = FieldValue.increment(13.37);
    const arrayUnionC = FieldValue.increment(42);
    const arrayUnionD = FieldValue.maximum(NaN);
    const arrayUnionE = FieldValue.maximum(NaN);
    expect(arrayUnionA.isEqual(arrayUnionB)).toBe(true);
    expect(arrayUnionC.isEqual(arrayUnionB)).toBe(false);
    expect(arrayUnionD.isEqual(arrayUnionE)).toBe(true);
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            incrementTransform('field', 42),
            incrementTransform('map.field', 13.37),
          ],
        });
        requestEquals(request, expectedRequest);
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.increment(42),
        map: {field: FieldValue.increment(13.37)},
      });
    });
  });

  genericFieldValueTests('FieldValue.increment', FieldValue.increment(42));
});

describe('FieldValue.minimum()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).minimum()).toThrow(
      'Function "FieldValue.minimum()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.minimum('foo' as InvalidApiUsage),
        });
      }).toThrow(
        'Value for argument "FieldValue.minimum()" is not a valid number',
      );
    });
  });

  it('supports isEqual()', () => {
    const arrayUnionA = FieldValue.minimum(13.37);
    const arrayUnionB = FieldValue.minimum(13.37);
    const arrayUnionC = FieldValue.minimum(42);
    const arrayUnionD = FieldValue.maximum(NaN);
    const arrayUnionE = FieldValue.maximum(NaN);
    expect(arrayUnionA.isEqual(arrayUnionB)).toBe(true);
    expect(arrayUnionC.isEqual(arrayUnionB)).toBe(false);
    expect(arrayUnionD.isEqual(arrayUnionE)).toBe(true);
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            minimumTransform('field', 42),
            minimumTransform('map.field', 13.37),
          ],
        });
        requestEquals(request, expectedRequest);
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.minimum(42),
        map: {field: FieldValue.minimum(13.37)},
      });
    });
  });

  genericFieldValueTests('FieldValue.minimum', FieldValue.minimum(42));
});

describe('FieldValue.maximum()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).maximum()).toThrow(
      'Function "FieldValue.maximum()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.maximum('foo' as InvalidApiUsage),
        });
      }).toThrow(
        'Value for argument "FieldValue.maximum()" is not a valid number',
      );
    });
  });

  it('supports isEqual()', () => {
    const arrayUnionA = FieldValue.maximum(13.37);
    const arrayUnionB = FieldValue.maximum(13.37);
    const arrayUnionC = FieldValue.maximum(42);
    const arrayUnionD = FieldValue.maximum(NaN);
    const arrayUnionE = FieldValue.maximum(NaN);
    expect(arrayUnionA.isEqual(arrayUnionB)).toBe(true);
    expect(arrayUnionC.isEqual(arrayUnionB)).toBe(false);
    expect(arrayUnionD.isEqual(arrayUnionE)).toBe(true);
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            maximumTransform('field', 42),
            maximumTransform('map.field', 13.37),
          ],
        });
        requestEquals(request, expectedRequest);
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.maximum(42),
        map: {field: FieldValue.maximum(13.37)},
      });
    });
  });

  genericFieldValueTests('FieldValue.maximum', FieldValue.maximum(42));
});

describe('FieldValue.arrayRemove()', () => {
  it('requires one argument', () => {
    expect(() => FieldValue.arrayRemove()).toThrow(
      'Function "FieldValue.arrayRemove()" requires at least 1 argument.',
    );
  });

  it('supports isEqual()', () => {
    const arrayRemoveFoo1 = FieldValue.arrayUnion('foo');
    const arrayRemoveFoo2 = FieldValue.arrayUnion('foo');
    const arrayRemoveBar = FieldValue.arrayUnion('bar');
    expect(arrayRemoveFoo1.isEqual(arrayRemoveFoo2)).toBe(true);
    expect(arrayRemoveFoo1.isEqual(arrayRemoveBar)).toBe(false);
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            arrayTransform('field', 'removeAllFromArray', 'foo', 'bar'),
            arrayTransform('map.field', 'removeAllFromArray', 'foo', 'bar'),
          ],
        });
        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.arrayRemove('foo', 'bar'),
        map: {field: FieldValue.arrayRemove('foo', 'bar')},
      });
    });
  });

  it('must not contain directly nested arrays', () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayRemove([])})).toThrow(
        'Element at index 0 is not a valid array element. Nested arrays are ' +
          'not supported.',
      );
    });
  });

  genericFieldValueTests(
    'FieldValue.arrayRemove',
    FieldValue.arrayRemove('foo'),
  );
});

describe('FieldValue.serverTimestamp()', () => {
  it('supports isEqual()', () => {
    const firstTimestamp = FieldValue.serverTimestamp();
    const secondTimestamp = FieldValue.serverTimestamp();
    expect(firstTimestamp.isEqual(secondTimestamp)).toBe(true);
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [serverTimestamp('field'), serverTimestamp('map.field')],
        });
        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.serverTimestamp(),
        map: {field: FieldValue.serverTimestamp()},
      });
    });
  });

  genericFieldValueTests(
    'FieldValue.serverTimestamp',
    FieldValue.serverTimestamp(),
  );
});

describe('non-native types', () => {
  it('BSON timestamp members', () => {
    const value = new BsonTimestamp(57, 4);
    expect(value.seconds).toBe(57);
    expect(value.increment).toBe(4);
  });

  it('BSON object id', () => {
    const bsonObjectId = new BsonObjectId('foobar');
    expect(bsonObjectId.value).toBe('foobar');
  });

  it('regular expression', () => {
    const regex = new RegexValue('^foo', 'i');
    expect(regex.pattern).toBe('^foo');
    expect(regex.options).toBe('i');
  });

  it('32-bit int', () => {
    const intValue = new Int32Value(255);
    expect(intValue.value).toBe(255);
  });

  it('128-bit decimal', () => {
    const decimal = new Decimal128Value('-1.2e-3');
    expect(decimal.value).toBe('-1.2e-3');
  });

  it('min key', () => {
    const value1 = MinKey.instance();
    const value2 = MinKey.instance();
    const other = MaxKey.instance();
    // All MinKeys are equal.
    expect(value1).toBe(value2);

    // MinKey and MaxKey are not equal.
    expect(value1).not.toBe(other);

    // Two MinKey values are equal.
    expect(
      compare(
        {
          mapValue: {
            fields: {
              [RESERVED_MIN_KEY]: {
                nullValue: 'NULL_VALUE',
              },
            },
          },
        },
        {
          mapValue: {
            fields: {
              [RESERVED_MIN_KEY]: {
                nullValue: 'NULL_VALUE',
              },
            },
          },
        },
      ),
    ).toBe(0);

    // Null comes before MinKey.
    expect(
      compare(
        {
          nullValue: null,
        },
        {
          mapValue: {
            fields: {
              [RESERVED_MIN_KEY]: {
                nullValue: 'NULL_VALUE',
              },
            },
          },
        },
      ),
    ).toBe(-1);
  });

  it('max key', () => {
    const value1 = MaxKey.instance();
    const value2 = MaxKey.instance();
    const other = MinKey.instance();
    expect(value1).toBe(value2);
    expect(value1).not.toBe(other);
  });

  it('Bytes with subtype', () => {
    const value = Bytes.fromUint8Array(Uint8Array.from([7, 8, 9]), 128);
    expect(value.subtype).toBe(128);
    expect(value.data).toEqual(Uint8Array.from([7, 8, 9]));
  });

  it('Bytes can have empty data', () => {
    const value = (Bytes as any)._fromProto({
      mapValue: {
        fields: {
          [RESERVED_BSON_BINARY_KEY]: {
            bytesValue: new Uint8Array([128]),
          },
        },
      },
    });
    expect(value.subtype).toBe(128);
    expect(value.data).toEqual(Uint8Array.from([]));
    expect(value.isEqual(Bytes.fromUint8Array(Uint8Array.from([]), 128))).toBe(
      true,
    );
  });

  it('Bytes with subtype 0 acts as native bytes', () => {
    const bson = Bytes.fromUint8Array(Uint8Array.from([1, 2, 3]), 0);
    const native = Uint8Array.from([1, 2, 3]);
    const otherNative = Uint8Array.from([1, 2, 4]);

    expect(bson.isEqual(native)).toBe(true);
    expect(bson.isEqual(otherNative)).toBe(false);

    // Serializing Bytes with subtype 0 returns bytesValue
    const proto = (bson as any)._toProto(null as any);
    expect(proto).toEqual({
      bytesValue: Uint8Array.from([1, 2, 3]),
    });
  });

  it('Bytes with subtype > 0 does not act as native bytes', () => {
    const bson = Bytes.fromUint8Array(Uint8Array.from([1, 2, 3]), 1);
    const native = Uint8Array.from([1, 2, 3]);

    expect(bson.isEqual(native)).toBe(false);
  });

  it('can create BSON timestamp using new', () => {
    const value1 = new BsonTimestamp(57, 4);
    const value2 = new BsonTimestamp(57, 4);
    expect(value1.isEqual(value2)).toBe(true);
    expect(value2.isEqual(value1)).toBe(true);
  });

  it('cannot create BSON timestamp with out-of-range values', () => {
    // Negative seconds
    let error1: Error | null = null;
    try {
      new BsonTimestamp(-1, 1);
    } catch (e) {
      error1 = e as Error;
    }
    expect(error1).not.toBeNull();
    expect(error1!.message!).toBe(
      "BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );

    // Larger than 2^32-1 seconds
    let error2: Error | null = null;
    try {
      new BsonTimestamp(4294967296, 1);
    } catch (e) {
      error2 = e as Error;
    }
    expect(error2).not.toBeNull();
    expect(error2!.message!).toBe(
      "BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );

    // Negative increment
    let error3: Error | null = null;
    try {
      new BsonTimestamp(1, -1);
    } catch (e) {
      error3 = e as Error;
    }
    expect(error3).not.toBeNull();
    expect(error3!.message!).toBe(
      "BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );

    // Larger than 2^32-1 increment
    let error4: Error | null = null;
    try {
      new BsonTimestamp(1, 4294967296);
    } catch (e) {
      error4 = e as Error;
    }
    expect(error4).not.toBeNull();
    expect(error4!.message!).toBe(
      "BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );

    // Non-integer and NaN seconds
    expect(() => new BsonTimestamp(NaN, 1)).toThrow(
      "BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );
    expect(() => new BsonTimestamp(1.5, 1)).toThrow(
      "BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );

    // Non-integer and NaN increment
    expect(() => new BsonTimestamp(1, NaN)).toThrow(
      "BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );
    expect(() => new BsonTimestamp(1, 1.5)).toThrow(
      "BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).",
    );
  });

  it('can create BSON object id using new', () => {
    const bsonObjectId1 = new BsonObjectId('foobar');
    const bsonObjectId2 = new BsonObjectId('foobar');
    expect(bsonObjectId1.isEqual(bsonObjectId2)).toBe(true);
    expect(bsonObjectId2.isEqual(bsonObjectId1)).toBe(true);
  });

  it('can create regular expression using new', () => {
    const regex1 = new RegexValue('^foo', 'i');
    const regex2 = new RegexValue('^foo', 'i');
    expect(regex1.isEqual(regex2)).toBe(true);
    expect(regex2.isEqual(regex1)).toBe(true);
  });

  it('can create 32-bit int using new', () => {
    const intValue1 = new Int32Value(255);
    const intValue2 = new Int32Value(255);
    expect(intValue1.isEqual(intValue2)).toBe(true);
    expect(intValue2.isEqual(intValue1)).toBe(true);
  });

  it('can create 128-bit decimal using new', () => {
    const v1 = new Decimal128Value('1.2e3');
    const v2 = new Decimal128Value('12e2');
    const v3 = new Decimal128Value('0.12e4');
    const v4 = new Decimal128Value('12000e-1');
    const v5 = new Decimal128Value('1.2');
    const v6 = new Decimal128Value('NaN');
    const v7 = new Decimal128Value('NaN');
    const v8 = new Decimal128Value('Infinity');
    const v9 = new Decimal128Value('-Infinity');
    const v10 = new Decimal128Value('-0');
    const v11 = new Decimal128Value('-0.0');
    const v12 = new Decimal128Value('0.0');
    const v13 = new Decimal128Value('0');

    expect(v1.isEqual(v2)).toBe(true);
    expect(v1.isEqual(v3)).toBe(true);
    expect(v1.isEqual(v4)).toBe(true);
    expect(v1.isEqual(v5)).toBe(false);
    expect(v1.isEqual(v6)).toBe(false);
    expect(v1.isEqual(v7)).toBe(false);
    expect(v1.isEqual(v8)).toBe(false);
    expect(v1.isEqual(v9)).toBe(false);

    expect(v6.isEqual(v7)).toBe(true);
    expect(v10.isEqual(v11)).toBe(true);
    expect(v10.isEqual(v12)).toBe(true);
    expect(v10.isEqual(v13)).toBe(true);
  });

  it('can create Bytes using static factories', () => {
    const value1 = Bytes.fromUint8Array(Uint8Array.from([7, 8, 9]), 128);
    const value2 = Bytes.fromUint8Array(Uint8Array.from([7, 8, 9]), 128);
    expect(value1.isEqual(value2)).toBe(true);
    expect(value2.isEqual(value1)).toBe(true);
  });

  it('isEqual returns false for null, undefined, and non-matching objects', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nonMatching: any[] = [
      null,
      undefined,
      {},
      {value: 'foo'},
      'foo',
      123,
      true,
    ];

    const regex = new RegexValue('^foo', 'i');
    expect(regex.isEqual(regex)).toBe(true);
    for (const other of nonMatching) {
      expect(regex.isEqual(other)).toBe(false);
    }
    expect(regex.isEqual(new RegexValue('^bar', 'i'))).toBe(false);
    expect(regex.isEqual(new RegexValue('^foo', 'g'))).toBe(false);

    const oid = new BsonObjectId('507f1f77bcf86cd799439011');
    expect(oid.isEqual(oid)).toBe(true);
    for (const other of nonMatching) {
      expect(oid.isEqual(other)).toBe(false);
    }
    expect(oid.isEqual(new BsonObjectId('507f1f77bcf86cd799439012'))).toBe(
      false,
    );

    const int32 = new Int32Value(42);
    expect(int32.isEqual(int32)).toBe(true);
    for (const other of nonMatching) {
      expect(int32.isEqual(other)).toBe(false);
    }
    expect(int32.isEqual(new Int32Value(43))).toBe(false);

    const decimal = new Decimal128Value('123.456');
    expect(decimal.isEqual(decimal)).toBe(true);
    for (const other of nonMatching) {
      expect(decimal.isEqual(other)).toBe(false);
    }
    expect(decimal.isEqual(new Decimal128Value('123.457'))).toBe(false);

    const timestamp = new BsonTimestamp(100, 200);
    expect(timestamp.isEqual(timestamp)).toBe(true);
    for (const other of nonMatching) {
      expect(timestamp.isEqual(other)).toBe(false);
    }
    expect(timestamp.isEqual(new BsonTimestamp(100, 201))).toBe(false);
    expect(timestamp.isEqual(new BsonTimestamp(101, 200))).toBe(false);

    // Cross-type comparisons
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(regex.isEqual(oid as any)).toBe(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(oid.isEqual(int32 as any)).toBe(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(int32.isEqual(decimal as any)).toBe(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(decimal.isEqual(timestamp as any)).toBe(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(timestamp.isEqual(regex as any)).toBe(false);
  });

  it('Bytes.fromBase64String and Bytes._fromProto do not leak Buffer pool slab memory', () => {
    const base64 = Buffer.from([1, 2, 3, 4]).toString('base64');
    const b1 = Bytes.fromBase64String(base64, 5);
    expect(b1.data.buffer.byteLength).toBe(b1.data.byteLength);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const b2 = (Bytes as any)._fromProto({
      mapValue: {
        fields: {
          [RESERVED_BSON_BINARY_KEY]: {
            bytesValue: Buffer.from([5, 1, 2, 3, 4]),
          },
        },
      },
    });
    expect(b2.data.buffer.byteLength).toBe(b2.data.byteLength);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const b3 = (Bytes as any)._fromProto({
      mapValue: {
        fields: {
          [RESERVED_BSON_BINARY_KEY]: {
            bytesValue: Buffer.from([5, 1, 2, 3, 4]).toString('base64'),
          },
        },
      },
    });
    expect(b3.data.buffer.byteLength).toBe(b3.data.byteLength);
  });
});
