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

import {describe, it} from 'mocha';
import {expect} from 'chai';

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
      expect(() => docRef.set({a: [sentinel]})).to.throw(expectedErr);
      expect(() => docRef.set({a: {b: [sentinel]}})).to.throw(expectedErr);
      expect(() =>
        docRef.set({
          a: [{b: sentinel}],
        }),
      ).to.throw(expectedErr);
      expect(() => docRef.set({a: {b: {c: [sentinel]}}})).to.throw(expectedErr);
    });
  });

  it("can't be used inside arrayUnion()", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayUnion(sentinel)})).to.throw(
        `Element at index 0 is not a valid array element. ${methodName}() cannot be used inside of an array.`,
      );
    });
  });

  it("can't be used inside arrayRemove()", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() =>
        docRef.set({foo: FieldValue.arrayRemove(sentinel)}),
      ).to.throw(
        `Element at index 0 is not a valid array element. ${methodName}() cannot be used inside of an array.`,
      );
    });
  });

  it("can't be used with queries", () => {
    return createInstance().then(firestore => {
      const collRef = firestore.collection('coll');
      expect(() => collRef.where('a', '==', sentinel)).to.throw(
        `Value for argument "value" is not a valid query constraint. ${methodName}() can only be used in set(), create() or update().`,
      );
      expect(() => collRef.orderBy('a').startAt(sentinel)).to.throw(
        `Element at index 0 is not a valid query constraint. ${methodName}() can only be used in set(), create() or update().`,
      );
    });
  });
}

describe('FieldValue.arrayUnion()', () => {
  it('requires one argument', () => {
    expect(() => FieldValue.arrayUnion()).to.throw(
      'Function "FieldValue.arrayUnion()" requires at least 1 argument.',
    );
  });

  it('supports isEqual()', () => {
    const arrayUnionFoo1 = FieldValue.arrayUnion('foo');
    const arrayUnionFoo2 = FieldValue.arrayUnion('foo');
    const arrayUnionBar = FieldValue.arrayUnion('bar');
    expect(arrayUnionFoo1.isEqual(arrayUnionFoo2)).to.be.true;
    expect(arrayUnionFoo1.isEqual(arrayUnionBar)).to.be.false;
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
      expect(() => docRef.set({foo: FieldValue.arrayUnion([])})).to.throw(
        'Element at index 0 is not a valid array element. Nested arrays are ' +
          'not supported.',
      );
    });
  });

  genericFieldValueTests('FieldValue.arrayUnion', FieldValue.arrayUnion('foo'));
});

describe('FieldValue.increment()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).increment()).to.throw(
      'Function "FieldValue.increment()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.increment('foo' as InvalidApiUsage),
        });
      }).to.throw(
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
    expect(arrayUnionA.isEqual(arrayUnionB)).to.be.true;
    expect(arrayUnionC.isEqual(arrayUnionB)).to.be.false;
    expect(arrayUnionD.isEqual(arrayUnionE)).to.be.true;
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
    expect(() => (FieldValue as InvalidApiUsage).minimum()).to.throw(
      'Function "FieldValue.minimum()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.minimum('foo' as InvalidApiUsage),
        });
      }).to.throw(
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
    expect(arrayUnionA.isEqual(arrayUnionB)).to.be.true;
    expect(arrayUnionC.isEqual(arrayUnionB)).to.be.false;
    expect(arrayUnionD.isEqual(arrayUnionE)).to.be.true;
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
    expect(() => (FieldValue as InvalidApiUsage).maximum()).to.throw(
      'Function "FieldValue.maximum()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.maximum('foo' as InvalidApiUsage),
        });
      }).to.throw(
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
    expect(arrayUnionA.isEqual(arrayUnionB)).to.be.true;
    expect(arrayUnionC.isEqual(arrayUnionB)).to.be.false;
    expect(arrayUnionD.isEqual(arrayUnionE)).to.be.true;
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
    expect(() => FieldValue.arrayRemove()).to.throw(
      'Function "FieldValue.arrayRemove()" requires at least 1 argument.',
    );
  });

  it('supports isEqual()', () => {
    const arrayRemoveFoo1 = FieldValue.arrayUnion('foo');
    const arrayRemoveFoo2 = FieldValue.arrayUnion('foo');
    const arrayRemoveBar = FieldValue.arrayUnion('bar');
    expect(arrayRemoveFoo1.isEqual(arrayRemoveFoo2)).to.be.true;
    expect(arrayRemoveFoo1.isEqual(arrayRemoveBar)).to.be.false;
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
      expect(() => docRef.set({foo: FieldValue.arrayRemove([])})).to.throw(
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
    expect(firstTimestamp.isEqual(secondTimestamp)).to.be.true;
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
    expect(value.seconds).to.equal(57);
    expect(value.increment).to.equal(4);
  });

  it('BSON object id', () => {
    const bsonObjectId = new BsonObjectId('foobar');
    expect(bsonObjectId.value).to.equal('foobar');
  });

  it('regular expression', () => {
    const regex = new RegexValue('^foo', 'i');
    expect(regex.pattern).to.equal('^foo');
    expect(regex.options).to.equal('i');
  });

  it('32-bit int', () => {
    const intValue = new Int32Value(255);
    expect(intValue.value).to.equal(255);
  });

  it('128-bit decimal', () => {
    const decimal = new Decimal128Value('-1.2e-3');
    expect(decimal.value).to.equal('-1.2e-3');
  });

  it('min key', () => {
    const value1 = MinKey.instance();
    const value2 = MinKey.instance();
    const other = MaxKey.instance();
    // All MinKeys are equal.
    expect(value1).to.equal(value2);

    // MinKey and MaxKey are not equal.
    expect(value1).to.not.equal(other);

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
    ).to.equal(0);

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
    ).to.equal(-1);
  });

  it('max key', () => {
    const value1 = MaxKey.instance();
    const value2 = MaxKey.instance();
    const other = MinKey.instance();
    expect(value1).to.equal(value2);
    expect(value1).to.not.equal(other);
  });

  it('Bytes with subtype', () => {
    const value = Bytes.fromUint8Array(Uint8Array.from([7, 8, 9]), 128);
    expect(value.subtype).to.equal(128);
    expect(value.data).to.deep.equal(Uint8Array.from([7, 8, 9]));
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
    expect(value.subtype).to.equal(128);
    expect(value.data).to.deep.equal(Uint8Array.from([]));
    expect(value.isEqual(Bytes.fromUint8Array(Uint8Array.from([]), 128))).to.be
      .true;
  });

  it('Bytes with subtype 0 acts as native bytes', () => {
    const bson = Bytes.fromUint8Array(Uint8Array.from([1, 2, 3]), 0);
    const native = Uint8Array.from([1, 2, 3]);
    const otherNative = Uint8Array.from([1, 2, 4]);

    expect(bson.isEqual(native)).to.be.true;
    expect(bson.isEqual(otherNative)).to.be.false;

    // Serializing Bytes with subtype 0 returns bytesValue
    const proto = (bson as any)._toProto(null as any);
    expect(proto).to.deep.equal({
      bytesValue: Uint8Array.from([1, 2, 3]),
    });
  });

  it('Bytes with subtype > 0 does not act as native bytes', () => {
    const bson = Bytes.fromUint8Array(Uint8Array.from([1, 2, 3]), 1);
    const native = Uint8Array.from([1, 2, 3]);

    expect(bson.isEqual(native)).to.be.false;
  });

  it('can create BSON timestamp using new', () => {
    const value1 = new BsonTimestamp(57, 4);
    const value2 = new BsonTimestamp(57, 4);
    expect(value1.isEqual(value2)).to.be.true;
    expect(value2.isEqual(value1)).to.be.true;
  });

  it('cannot create BSON timestamp with out-of-range values', () => {
    // Negative seconds
    let error1: Error | null = null;
    try {
      new BsonTimestamp(-1, 1);
    } catch (e) {
      error1 = e as Error;
    }
    expect(error1).to.not.be.null;
    expect(error1!.message!).to.equal(
      "BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer.",
    );

    // Larger than 2^32-1 seconds
    let error2: Error | null = null;
    try {
      new BsonTimestamp(4294967296, 1);
    } catch (e) {
      error2 = e as Error;
    }
    expect(error2).to.not.be.null;
    expect(error2!.message!).to.equal(
      "BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer.",
    );

    // Negative increment
    let error3: Error | null = null;
    try {
      new BsonTimestamp(1, -1);
    } catch (e) {
      error3 = e as Error;
    }
    expect(error3).to.not.be.null;
    expect(error3!.message!).to.equal(
      "BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer.",
    );

    // Larger than 2^32-1 increment
    let error4: Error | null = null;
    try {
      new BsonTimestamp(1, 4294967296);
    } catch (e) {
      error4 = e as Error;
    }
    expect(error4).to.not.be.null;
    expect(error4!.message!).to.equal(
      "BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer.",
    );
  });

  it('can create BSON object id using new', () => {
    const bsonObjectId1 = new BsonObjectId('foobar');
    const bsonObjectId2 = new BsonObjectId('foobar');
    expect(bsonObjectId1.isEqual(bsonObjectId2)).to.be.true;
    expect(bsonObjectId2.isEqual(bsonObjectId1)).to.be.true;
  });

  it('can create regular expression using new', () => {
    const regex1 = new RegexValue('^foo', 'i');
    const regex2 = new RegexValue('^foo', 'i');
    expect(regex1.isEqual(regex2)).to.be.true;
    expect(regex2.isEqual(regex1)).to.be.true;
  });

  it('can create 32-bit int using new', () => {
    const intValue1 = new Int32Value(255);
    const intValue2 = new Int32Value(255);
    expect(intValue1.isEqual(intValue2)).to.be.true;
    expect(intValue2.isEqual(intValue1)).to.be.true;
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

    expect(v1.isEqual(v2)).to.be.true;
    expect(v1.isEqual(v3)).to.be.true;
    expect(v1.isEqual(v4)).to.be.true;
    expect(v1.isEqual(v5)).to.be.false;
    expect(v1.isEqual(v6)).to.be.false;
    expect(v1.isEqual(v7)).to.be.false;
    expect(v1.isEqual(v8)).to.be.false;
    expect(v1.isEqual(v9)).to.be.false;

    expect(v6.isEqual(v7)).to.be.true;
    expect(v10.isEqual(v11)).to.be.true;
    expect(v10.isEqual(v12)).to.be.true;
    expect(v10.isEqual(v13)).to.be.true;
  });

  it('can create Bytes using static factories', () => {
    const value1 = Bytes.fromUint8Array(Uint8Array.from([7, 8, 9]), 128);
    const value2 = Bytes.fromUint8Array(Uint8Array.from([7, 8, 9]), 128);
    expect(value1.isEqual(value2)).to.be.true;
    expect(value2.isEqual(value1)).to.be.true;
  });
});
