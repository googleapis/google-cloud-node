// Copyright 2017 Google LLC
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

import {describe, it, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import {GoogleError, Status} from 'google-gax';
import * as through2 from 'through2';

import {
  DocumentReference,
  FieldPath,
  FieldValue,
  Firestore,
  GeoPoint,
  setLogFunction,
  Timestamp,
} from '../src';
import {
  ApiOverride,
  create,
  createInstance,
  document,
  found,
  InvalidApiUsage,
  missing,
  Post,
  postConverter,
  postConverterMerge,
  remove,
  requestEquals,
  response,
  retrieve,
  serverTimestamp,
  set,
  stream,
  update,
  updateMask,
  verifyInstance,
  writeResult,
} from './util/helpers';
import {Precondition} from '@google-cloud/firestore';

const PROJECT_ID = 'test-project';

const INVALID_ARGUMENTS_TO_UPDATE = new RegExp(
  'Update\\(\\) requires either ' +
    'a single JavaScript object or an alternating list of field/value pairs ' +
    'that can be followed by an optional precondition.',
);

// Change the argument to 'console.log' to enable debug output.
setLogFunction(null);

describe('DocumentReference interface', () => {
  let firestore: Firestore;
  let documentRef: DocumentReference;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
      documentRef = firestore.doc('collectionId/documentId');
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('has collection() method', () => {
    expect(() => documentRef.collection(42 as InvalidApiUsage)).to.throw(
      'Value for argument "collectionPath" is not a valid resource path. Path must be a non-empty string.',
    );

    let collection = documentRef.collection('col');
    expect(collection.id).to.equal('col');

    expect(() => documentRef.collection('col/doc')).to.throw(
      'Value for argument "collectionPath" must point to a collection, but was "col/doc". Your path does not contain an odd number of components.',
    );

    collection = documentRef.collection('col/doc/col');
    expect(collection.id).to.equal('col');
  });

  it('has path property', () => {
    expect(documentRef.path).to.equal('collectionId/documentId');
  });

  it('has parent property', () => {
    expect(documentRef.parent.path).to.equal('collectionId');
  });

  it('has isEqual() method', () => {
    const doc1 = firestore.doc('coll/doc1');
    const doc1Equals = firestore.doc('coll/doc1');
    const doc2 = firestore.doc('coll/doc1/coll/doc1');
    expect(doc1.isEqual(doc1Equals)).to.be.true;
    expect(doc1.isEqual(doc2)).to.be.false;
  });
});

describe('serialize document', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('serializes to Protobuf JS', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'bytes', {
              bytesValue: Buffer.from('AG=', 'base64'),
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        bytes: Buffer.from('AG=', 'base64'),
      });
    });
  });

  it("doesn't serialize unsupported types", () => {
    expect(() => {
      void firestore.doc('collectionId/documentId').set({foo: undefined});
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Cannot use "undefined" as a Firestore value (found in field "foo").',
    );

    expect(() => {
      void firestore.doc('collectionId/documentId').set({
        foo: FieldPath.documentId(),
      });
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Cannot use object of type "FieldPath" as a Firestore value (found in field "foo").',
    );

    expect(() => {
      class Foo {}
      void firestore.doc('collectionId/documentId').set({foo: new Foo()});
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Couldn\'t serialize object of type "Foo" (found in field "foo"). Firestore doesn\'t support JavaScript objects with custom prototypes (i.e. objects that were created via the "new" operator).',
    );

    expect(() => {
      class Foo {}
      void firestore
        .doc('collectionId/documentId')
        .set(new Foo() as InvalidApiUsage);
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Couldn\'t serialize object of type "Foo". Firestore doesn\'t support JavaScript objects with custom prototypes (i.e. objects that were created via the "new" operator).',
    );

    expect(() => {
      class Foo {}
      class Bar extends Foo {}
      void firestore
        .doc('collectionId/documentId')
        .set(new Bar() as InvalidApiUsage);
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Couldn\'t serialize object of type "Bar". Firestore doesn\'t support JavaScript objects with custom prototypes (i.e. objects that were created via the "new" operator).',
    );
  });

  it('provides custom error for objects from different Firestore instance', () => {
    class FieldPath {}
    class GeoPoint {}
    class Timestamp {}

    const customClasses = [new FieldPath(), new GeoPoint(), new Timestamp()];

    for (const customClass of customClasses) {
      expect(() => {
        void firestore
          .doc('collectionId/documentId')
          .set(customClass as InvalidApiUsage);
      }).to.throw(
        'Value for argument "data" is not a valid Firestore document. ' +
          `Detected an object of type "${customClass.constructor.name}" that doesn't match the expected instance.`,
      );
    }
  });

  it('serializes large numbers into doubles', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'largeNumber', {
              doubleValue: 18014398509481984,
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      // Set to 2^54, which should be stored as a double.
      largeNumber: 18014398509481984,
    });
  });

  it('serializes negative zero into double', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'negativeZero', {
              doubleValue: -0,
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      // Set to -0, which should be stored as a double.
      negativeZero: -0,
    });
  });

  it('serializes date before 1970', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'moonLanding', {
              timestampValue: {
                nanos: 123000000,
                seconds: -14182920,
              },
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      moonLanding: new Date('Jul 20 1969 20:18:00.123 UTC'),
    });
  });

  it('supports Moment.js', async () => {
    class Moment {
      toDate(): Date {
        return new Date('Jul 20 1969 20:18:00.123 UTC');
      }
    }

    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'moonLanding', {
              timestampValue: {
                nanos: 123000000,
                seconds: -14182920,
              },
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      moonLanding: new Moment(),
    });
  });

  it('supports BigInt', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'bigIntValue', {
              integerValue: '9007199254740992',
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      bigIntValue: BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1),
    });
  });

  it('serializes unicode keys', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', '😀', '😜'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      '😀': '😜',
    });
  });

  it('accepts both blob formats', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document(
              'documentId',
              'blob1',
              {bytesValue: new Uint8Array([0, 1, 2])},
              'blob2',
              {
                bytesValue: Buffer.from([0, 1, 2]),
              },
            ),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      blob1: new Uint8Array([0, 1, 2]),
      blob2: Buffer.from([0, 1, 2]),
    });
  });

  it('supports NaN and Infinity', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        const fields = request.writes![0].update!.fields!;
        expect(fields.nanValue.doubleValue).to.be.a('number');
        expect(fields.nanValue.doubleValue).to.be.NaN;
        expect(fields.posInfinity.doubleValue).to.equal(Infinity);
        expect(fields.negInfinity.doubleValue).to.equal(-Infinity);

        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      nanValue: NaN,
      posInfinity: Infinity,
      negInfinity: -Infinity,
    });
  });

  it('with invalid geopoint', () => {
    expect(() => {
      new GeoPoint(57.2999988, 'INVALID' as InvalidApiUsage);
    }).to.throw('Value for argument "longitude" is not a valid number');

    expect(() => {
      new GeoPoint('INVALID' as InvalidApiUsage, -4.4499982);
    }).to.throw('Value for argument "latitude" is not a valid number');

    expect(() => {
      new (GeoPoint as InvalidApiUsage)();
    }).to.throw('Value for argument "latitude" is not a valid number');

    expect(() => {
      new GeoPoint(NaN, 0);
    }).to.throw('Value for argument "latitude" is not a valid number');

    expect(() => {
      new GeoPoint(Infinity, 0);
    }).to.throw(
      'Value for argument "latitude" must be within [-90, 90] inclusive, but was: Infinity',
    );

    expect(() => {
      new GeoPoint(91, 0);
    }).to.throw(
      'Value for argument "latitude" must be within [-90, 90] inclusive, but was: 91',
    );

    expect(() => {
      new GeoPoint(90, 181);
    }).to.throw(
      'Value for argument "longitude" must be within [-180, 180] inclusive, but was: 181',
    );
  });

  it('resolves infinite nesting', () => {
    const obj: {foo?: {}} = {};
    obj.foo = obj;

    expect(() => {
      void firestore.doc('collectionId/documentId').update(obj);
    }).to.throw(
      'Value for argument "dataOrField" is not a valid Firestore value. Input object is deeper than 20 levels or contains a cycle.',
    );
  });

  it('is able to write a document reference with cycles', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'ref', {
              referenceValue: `projects/${PROJECT_ID}/databases/(default)/documents/collectionId/documentId`,
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    // The Firestore Admin SDK adds a cyclic reference to the 'Firestore'
    // member of 'DocumentReference'. We emulate this behavior in this
    // test to verify that we can properly serialize DocumentReference
    // instances, even if they have cyclic references (we shouldn't try to
    // validate them beyond the instanceof check).
    const ref = firestore.doc('collectionId/documentId');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ref.firestore as any).firestore = firestore;
    await ref.set({ref});
  });

  it('is able to translate FirestoreVector to internal representation with set', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'embedding1', {
              mapValue: {
                fields: {
                  __type__: {
                    stringValue: '__vector__',
                  },
                  value: {
                    arrayValue: {
                      values: [
                        {doubleValue: 0},
                        {doubleValue: 1},
                        {doubleValue: 2},
                      ],
                    },
                  },
                },
              },
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({
      embedding1: FieldValue.vector([0, 1, 2]),
    });
  });
});

describe('deserialize document', () => {
  it('deserializes Protobuf JS', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'foo', {
              bytesValue: Buffer.from('AG=', 'base64'),
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').get();
    expect(res.data()).to.deep.eq({foo: Buffer.from('AG=', 'base64')});
  });

  it('deserializes date before 1970', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'moonLanding', {
              timestampValue: {
                nanos: 123000000,
                seconds: -14182920,
              },
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').get();
    expect(res.get('moonLanding').toMillis()).to.equal(
      new Date('Jul 20 1969 20:18:00.123 UTC').getTime(),
    );
  });

  it('returns undefined for unknown fields', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(found(document('documentId')));
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').get();
    expect(res.get('bar')).to.not.exist;
    expect(res.get('bar.foo')).to.not.exist;
  });

  it('supports NaN and Infinity', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document(
              'documentId',
              'nanValue',
              {doubleValue: NaN},
              'posInfinity',
              {doubleValue: Infinity},
              'negInfinity',
              {doubleValue: -Infinity},
            ),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').get();
    expect(res.get('nanValue')).to.be.a('number');
    expect(res.get('nanValue')).to.be.NaN;
    expect(res.get('posInfinity')).to.equal(Infinity);
    expect(res.get('negInfinity')).to.equal(-Infinity);
  });

  it('deserializes BigInt', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'bigIntValue', {
              integerValue: '9007199254740992',
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides, {useBigInt: true});
    const res = await firestore.doc('collectionId/documentId').get();
    expect(res.get('bigIntValue')).to.be.a('bigint');
    expect(res.get('bigIntValue')).to.equal(BigInt('9007199254740992'));
  });

  it('deserializes FirestoreVector', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'embedding', {
              mapValue: {
                fields: {
                  __type__: {
                    stringValue: '__vector__',
                  },
                  value: {
                    arrayValue: {
                      values: [
                        {doubleValue: -41.0},
                        {doubleValue: 0},
                        {doubleValue: 42},
                      ],
                    },
                  },
                },
              },
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').get();
    expect(res.get('embedding')).to.deep.equal(
      FieldValue.vector([-41.0, 0, 42]),
    );
  });

  it("doesn't deserialize unsupported types", async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'moonLanding', {
              valueType: 'foo',
            } as InvalidApiUsage),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const doc = await firestore.doc('collectionId/documentId').get();
    expect(() => {
      doc.data();
    }).to.throw('Cannot decode type from Firestore Value: {"valueType":"foo"}');
  });

  it("doesn't deserialize invalid latitude", async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'geoPointValue', {
              geoPointValue: {
                latitude: 'foo' as InvalidApiUsage,
                longitude: -122.947778,
              },
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const doc = await firestore.doc('collectionId/documentId').get();
    expect(() => doc.data()).to.throw(
      'Value for argument "latitude" is not a valid number.',
    );
  });

  it("doesn't deserialize invalid longitude", async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'geoPointValue', {
              geoPointValue: {
                latitude: 50.1430847,
                longitude: 'foo' as InvalidApiUsage,
              },
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const doc = await firestore.doc('collectionId/documentId').get();
    expect(() => doc.data()).to.throw(
      'Value for argument "longitude" is not a valid number.',
    );
  });
});

describe('get document', () => {
  it('returns document', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: request => {
        requestEquals(request, retrieve('documentId'));

        return stream(
          found(
            document('documentId', 'foo', {
              mapValue: {
                fields: {
                  bar: {
                    stringValue: 'foobar',
                  },
                },
              },
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const result = await firestore.doc('collectionId/documentId').get();
    expect(result.data()).to.deep.eq({foo: {bar: 'foobar'}});
    expect(result.get('foo')).to.deep.eq({bar: 'foobar'});
    expect(result.get('foo.bar')).to.equal('foobar');
    expect(result.get(new FieldPath('foo', 'bar'))).to.equal('foobar');
    expect(result.ref.id).to.equal('documentId');
  });

  it('returns read, update and create times', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(found(document('documentId')));
      },
    };

    const firestore = await createInstance(overrides);
    const result = await firestore.doc('collectionId/documentId').get();
    expect(result.createTime!.isEqual(new Timestamp(1, 2))).to.be.true;
    expect(result.updateTime!.isEqual(new Timestamp(3, 4))).to.be.true;
    expect(result.readTime.isEqual(new Timestamp(5, 6))).to.be.true;
  });

  it('returns not found', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(missing('documentId'));
      },
    };

    const firestore = await createInstance(overrides);
    const result = await firestore.doc('collectionId/documentId').get();
    expect(result.exists).to.be.false;
    expect(result.readTime.isEqual(new Timestamp(5, 6))).to.be.true;
    expect(result.data()).to.not.exist;
    expect(result.get('foo')).to.not.exist;
  });

  it('throws error', done => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        const error = new GoogleError('RPC Error');
        error.code = Status.PERMISSION_DENIED;
        return stream(error);
      },
    };

    void createInstance(overrides).then(firestore => {
      firestore
        .doc('collectionId/documentId')
        .get()
        .catch(err => {
          expect(err.message).to.equal('RPC Error');
          done();
        });
    });
  });

  it('cannot obtain field value without field path', async () => {
    const overrides: ApiOverride = {
      batchGetDocuments: () => {
        return stream(
          found(
            document('documentId', 'foo', {
              mapValue: {
                fields: {
                  bar: {
                    stringValue: 'foobar',
                  },
                },
              },
            }),
          ),
        );
      },
    };

    const firestore = await createInstance(overrides);
    const doc = await firestore.doc('collectionId/documentId').get();
    expect(() => (doc as InvalidApiUsage).get()).to.throw(
      'Value for argument "field" is not a valid field path. The path cannot be omitted.',
    );
  });
});

describe('delete document', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreClient => {
      firestore = firestoreClient;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('generates proto', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(request, remove('documentId'));

        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').delete();
  });

  it('returns update time', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(request, remove('documentId'));

        return response({
          commitTime: {
            nanos: 123000000,
            seconds: 479978400,
          },
          writeResults: [{}],
        });
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').delete();
    expect(res.writeTime.isEqual(new Timestamp(479978400, 123000000))).to.be
      .true;
  });

  it('with last update time precondition', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          remove('documentId', {
            updateTime: {
              nanos: 123000000,
              seconds: '479978400',
            },
          }),
        );

        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    const docRef = firestore.doc('collectionId/documentId');

    await Promise.all([
      docRef.delete({
        lastUpdateTime: new Timestamp(479978400, 123000000),
      }),
      docRef.delete({
        lastUpdateTime: Timestamp.fromMillis(479978400123),
      }),
      docRef.delete({
        lastUpdateTime: Timestamp.fromDate(new Date(479978400123)),
      }),
    ]);
  });

  it('with invalid last update time precondition', () => {
    expect(() => {
      return firestore.doc('collectionId/documentId').delete({
        lastUpdateTime: 1337 as InvalidApiUsage,
      });
    }).to.throw('"lastUpdateTime" is not a Firestore Timestamp.');
  });

  it('throws if "exists" is not a boolean', () => {
    expect(() => {
      return firestore.doc('collectionId/documentId').delete({
        exists: 42,
      } as InvalidApiUsage);
    }).to.throw('"exists" is not a boolean.');
  });

  it('throws if no delete conditions are provided', () => {
    expect(() => {
      return firestore
        .doc('collectionId/documentId')
        .delete(42 as InvalidApiUsage);
    }).to.throw('Input is not an object.');
  });

  it('throws if more than one condition is provided', () => {
    expect(() => {
      return firestore.doc('collectionId/documentId').delete({
        exists: false,
        lastUpdateTime: Timestamp.now(),
      } as InvalidApiUsage);
    }).to.throw('Input specifies more than one precondition.');
  });
});

describe('set document', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreClient => {
      firestore = firestoreClient;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('supports empty map', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId'),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({});
    });
  });

  it('supports nested empty map', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'a', {
              mapValue: {},
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({a: {}});
    });
  });

  it('skips merges with just field transform', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId'),
            transforms: [serverTimestamp('a'), serverTimestamp('b.c')],
            mask: updateMask(),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set(
        {
          a: FieldValue.serverTimestamp(),
          b: {c: FieldValue.serverTimestamp()},
        },
        {merge: true},
      );
    });
  });

  it('sends empty non-merge write even with just field transform', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId'),
            transforms: [serverTimestamp('a'), serverTimestamp('b.c')],
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        a: FieldValue.serverTimestamp(),
        b: {c: FieldValue.serverTimestamp()},
      });
    });
  });

  it('supports document merges', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'a', 'b', 'c', {
              mapValue: {
                fields: {
                  d: {
                    stringValue: 'e',
                  },
                },
              },
            }),
            mask: updateMask('a', 'c.d', 'f'),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .doc('collectionId/documentId')
        .set({a: 'b', c: {d: 'e'}, f: FieldValue.delete()}, {merge: true});
    });
  });

  it('supports document merges with field mask', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document(
              'documentId',
              'a',
              'foo',
              'b',
              {
                mapValue: {
                  fields: {
                    c: {
                      stringValue: 'foo',
                    },
                  },
                },
              },
              'd',
              {
                mapValue: {
                  fields: {
                    e: {
                      stringValue: 'foo',
                    },
                  },
                },
              },
            ),
            mask: updateMask('a', 'b', 'd.e', 'f'),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set(
        {
          a: 'foo',
          b: {c: 'foo'},
          d: {e: 'foo', ignore: 'foo'},
          f: FieldValue.delete(),
          ignore: 'foo',
          ignoreMap: {a: 'foo'},
        },
        {mergeFields: ['a', new FieldPath('b'), 'd.e', 'f']},
      );
    });
  });

  it('supports document merges with empty field mask', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId'),
            mask: updateMask(),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set(
        {},
        {
          mergeFields: [],
        },
      );
    });
  });

  it('supports document merges with field mask and empty maps', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document(
              'documentId',
              'a',
              {
                mapValue: {
                  fields: {
                    b: {
                      mapValue: {},
                    },
                  },
                },
              },
              'c',
              {
                mapValue: {
                  fields: {
                    d: {
                      mapValue: {},
                    },
                  },
                },
              },
            ),
            mask: updateMask('a', 'c.d'),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set(
        {
          a: {b: {}},
          c: {d: {}},
        },
        {mergeFields: ['a', new FieldPath('c', 'd')]},
      );
    });
  });

  it('supports document merges with field mask and field transform', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId'),
            mask: updateMask('b', 'f'),
            transforms: [
              serverTimestamp('a'),
              serverTimestamp('b.c'),
              serverTimestamp('d.e'),
            ],
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set(
        {
          a: FieldValue.serverTimestamp(),
          b: {c: FieldValue.serverTimestamp()},
          d: {
            e: FieldValue.serverTimestamp(),
            ignore: FieldValue.serverTimestamp(),
          },
          f: FieldValue.delete(),
          ignore: FieldValue.serverTimestamp(),
          ignoreMap: {a: FieldValue.serverTimestamp()},
        },
        {mergeFields: ['a', new FieldPath('b'), 'd.e', 'f']},
      );
    });
  });

  it('supports empty merge', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId'),
            mask: updateMask(),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({}, {merge: true});
  });

  it('supports nested empty merge', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'a', {
              mapValue: {},
            }),
            mask: updateMask('a'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set(
      {a: {}},
      {
        merge: true,
      },
    );
  });

  it('supports partials with merge', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'title', {
              stringValue: 'story',
            }),
            mask: updateMask('title'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore
      .doc('collectionId/documentId')
      .withConverter(postConverterMerge)
      .set({title: 'story'} as Partial<Post>, {
        merge: true,
      });
  });

  it('supports partials with mergeFields', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'title', {
              stringValue: 'story',
            }),
            mask: updateMask('title'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore
      .doc('collectionId/documentId')
      .withConverter(postConverterMerge)
      .set({title: 'story', author: 'writer'} as Partial<Post>, {
        mergeFields: ['title'],
      });
  });

  it("doesn't split on dots", async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          set({
            document: document('documentId', 'a.b', 'c'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').set({'a.b': 'c'});
  });

  it('validates merge option', () => {
    expect(() => {
      void firestore.doc('collectionId/documentId').set(
        {foo: 'bar'},
        {
          mergeFields: ['foobar'],
        },
      );
    }).to.throw('Input data is missing for field "foobar".');

    expect(() => {
      void firestore.doc('collectionId/documentId').set(
        {foo: 'bar'},
        {
          mergeFields: ['foobar..'],
        },
      );
    }).to.throw(
      'Value for argument "options" is not a valid set() options argument. ' +
        '"mergeFields" is not valid: Element at index 0 is not a valid ' +
        'field path. Paths must not contain ".." in them.',
    );

    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .set({foo: 'bar'}, {merge: true, mergeFields: []});
    }).to.throw(
      'Value for argument "options" is not a valid set() options argument. You cannot specify both "merge" and "mergeFields".',
    );
  });

  it('requires an object', () => {
    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .set(null as InvalidApiUsage);
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });

  it("doesn't support non-merge deletes", () => {
    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .set({foo: FieldValue.delete()});
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. FieldValue.delete() must appear at the top-level and can only be used in update() or set() with {merge:true} (found in field "foo").',
    );
  });

  it("doesn't accept arrays", () => {
    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .set([42] as InvalidApiUsage);
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });
});

describe('create document', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreClient => {
      firestore = firestoreClient;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('generates proto', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(request, create({document: document('documentId')}));
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').create({});
  });

  it('returns update time', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(request, create({document: document('documentId')}));

        return response({
          commitTime: {
            nanos: 0,
            seconds: 0,
          },
          writeResults: [
            {
              updateTime: {
                nanos: 123000000,
                seconds: 479978400,
              },
            },
          ],
        });
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore.doc('collectionId/documentId').create({});
    expect(res.writeTime.isEqual(new Timestamp(479978400, 123000000))).to.be
      .true;
  });

  it('supports field transform', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          create({
            document: document('documentId'),
            transforms: [
              serverTimestamp('field'),
              serverTimestamp('map.field'),
            ],
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').create({
      field: FieldValue.serverTimestamp(),
      map: {field: FieldValue.serverTimestamp()},
    });
  });

  it('supports nested empty map', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          create({
            document: document('documentId', 'a', {
              mapValue: {
                fields: {
                  b: {
                    mapValue: {},
                  },
                },
              },
            }),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').create({a: {b: {}}});
  });

  it('requires an object', () => {
    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .create(null as InvalidApiUsage);
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });

  it("doesn't accept arrays", () => {
    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .create([42] as InvalidApiUsage);
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });
});

describe('update document', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreClient => {
      firestore = firestoreClient;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('generates proto', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', 'bar'),
            mask: updateMask('foo'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').update({foo: 'bar'});
  });

  it('supports nested field transform', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', {
              mapValue: {},
            }),
            transforms: [serverTimestamp('a.b'), serverTimestamp('c.d')],
            mask: updateMask('a', 'foo'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').update({
      foo: {},
      a: {b: FieldValue.serverTimestamp()},
      'c.d': FieldValue.serverTimestamp(),
    });
  });

  it('skips write for single field transform', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId'),
            transforms: [serverTimestamp('a')],
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore
      .doc('collectionId/documentId')
      .update('a', FieldValue.serverTimestamp());
  });

  it('supports nested empty map', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'a', {
              mapValue: {},
            }),
            mask: updateMask('a'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').update({a: {}});
  });

  it('supports nested delete', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({document: document('documentId'), mask: updateMask('a.b')}),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').update({
      'a.b': FieldValue.delete(),
    });
  });

  it('allows explicitly specifying {exists:true} precondition', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', 'bar'),
            mask: updateMask('foo'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore
      .doc('collectionId/documentId')
      .update('foo', 'bar', {exists: true});
  });

  it('returns update time', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', 'bar'),
            mask: updateMask('foo'),
          }),
        );
        return response({
          commitTime: {
            nanos: 0,
            seconds: 0,
          },
          writeResults: [
            {
              updateTime: {
                nanos: 123000000,
                seconds: 479978400,
              },
            },
          ],
        });
      },
    };

    const firestore = await createInstance(overrides);
    const res = await firestore
      .doc('collectionId/documentId')
      .update({foo: 'bar'});
    expect(res.writeTime.isEqual(new Timestamp(479978400, 123000000))).to.be
      .true;
  });

  it('with last update time precondition', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', 'bar'),
            mask: updateMask('foo'),
            precondition: {
              updateTime: {
                nanos: 123000000,
                seconds: '479978400',
              },
            },
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await Promise.all([
      firestore.doc('collectionId/documentId').update(
        {foo: 'bar'},
        {
          lastUpdateTime: new Timestamp(479978400, 123000000),
        },
      ),
      firestore.doc('collectionId/documentId').update('foo', 'bar', {
        lastUpdateTime: new Timestamp(479978400, 123000000),
      }),
    ]);
  });

  it('with invalid last update time precondition', () => {
    expect(() => {
      const malformedPrecondition: Precondition = {
        lastUpdateTime: 'foo',
      } as unknown as Precondition;
      void firestore
        .doc('collectionId/documentId')
        .update({foo: 'bar'}, malformedPrecondition);
    }).to.throw('"lastUpdateTime" is not a Firestore Timestamp.');
  });

  it('requires at least one field', () => {
    expect(() => {
      void firestore.doc('collectionId/documentId').update({});
    }).to.throw('At least one field must be updated.');

    expect(() => {
      (firestore.doc('collectionId/documentId') as InvalidApiUsage).update();
    }).to.throw(
      'Function "DocumentReference.update()" requires at least 1 argument.',
    );
  });

  it('rejects nested deletes', () => {
    expect(() => {
      void firestore.doc('collectionId/documentId').update({
        a: {b: FieldValue.delete()},
      });
    }).to.throw(
      'Update() requires either a single JavaScript object or an alternating list of field/value pairs that can be followed by an optional precondition. Value for argument "dataOrField" is not a valid Firestore value. FieldValue.delete() must appear at the top-level and can only be used in update() or set() with {merge:true} (found in field "a.b").',
    );

    expect(() => {
      void firestore.doc('collectionId/documentId').update('a', {
        b: FieldValue.delete(),
      });
    }).to.throw(
      'Update() requires either a single JavaScript object or an alternating list of field/value pairs that can be followed by an optional precondition. Element at index 1 is not a valid Firestore value. FieldValue.delete() must appear at the top-level and can only be used in update() or set() with {merge:true} (found in field "a.b").',
    );

    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .update('a', FieldValue.arrayUnion(FieldValue.delete()));
    }).to.throw(
      'Element at index 0 is not a valid array element. FieldValue.delete() cannot be used inside of an array.',
    );
  });

  it('with top-level document', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', 'bar'),
            mask: updateMask('foo'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').update({
      foo: 'bar',
    });
  });

  it('with nested document', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document(
              'documentId',
              'a',
              {
                mapValue: {
                  fields: {
                    b: {
                      mapValue: {
                        fields: {
                          c: {
                            stringValue: 'foobar',
                          },
                        },
                      },
                    },
                  },
                },
              },
              'foo',
              {
                mapValue: {
                  fields: {
                    bar: {
                      stringValue: 'foobar',
                    },
                  },
                },
              },
            ),
            mask: updateMask('a.b.c', 'foo.bar'),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await Promise.all([
      firestore.doc('collectionId/documentId').update({
        'foo.bar': 'foobar',
        'a.b.c': 'foobar',
      }),
      firestore
        .doc('collectionId/documentId')
        .update('foo.bar', 'foobar', new FieldPath('a', 'b', 'c'), 'foobar'),
    ]);
  });

  it('with two nested fields ', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'foo', {
              mapValue: {
                fields: {
                  bar: {stringValue: 'two'},
                  deep: {
                    mapValue: {
                      fields: {
                        bar: {stringValue: 'two'},
                        foo: {stringValue: 'one'},
                      },
                    },
                  },
                  foo: {stringValue: 'one'},
                },
              },
            }),
            mask: updateMask(
              'foo.bar',
              'foo.deep.bar',
              'foo.deep.foo',
              'foo.foo',
            ),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await Promise.all([
      firestore.doc('collectionId/documentId').update({
        'foo.foo': 'one',
        'foo.bar': 'two',
        'foo.deep.foo': 'one',
        'foo.deep.bar': 'two',
      }),
      firestore
        .doc('collectionId/documentId')
        .update(
          'foo.foo',
          'one',
          'foo.bar',
          'two',
          'foo.deep.foo',
          'one',
          'foo.deep.bar',
          'two',
        ),
    ]);
  });

  it('with nested field and document transform ', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'a', {
              mapValue: {
                fields: {
                  b: {
                    mapValue: {
                      fields: {
                        keep: {
                          stringValue: 'keep',
                        },
                      },
                    },
                  },
                  c: {
                    mapValue: {
                      fields: {
                        keep: {
                          stringValue: 'keep',
                        },
                      },
                    },
                  },
                },
              },
            }),
            mask: updateMask(
              'a.b.delete',
              'a.b.keep',
              'a.c.delete',
              'a.c.keep',
            ),
          }),
        );
        return response(writeResult(1));
      },
    };

    const firestore = await createInstance(overrides);
    await firestore.doc('collectionId/documentId').update({
      'a.b.delete': FieldValue.delete(),
      'a.b.keep': 'keep',
      'a.c.delete': FieldValue.delete(),
      'a.c.keep': 'keep',
    });
  });

  it('with field with dot ', async () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'a.b', 'c'),
            mask: updateMask('`a.b`'),
          }),
        );
        return response(writeResult(1));
      },
    };
    const firestore = await createInstance(overrides);
    await firestore
      .doc('collectionId/documentId')
      .update(new FieldPath('a.b'), 'c');
  });

  it('with conflicting update', () => {
    expect(() => {
      void firestore.doc('collectionId/documentId').update({
        foo: 'foobar',
        'foo.bar': 'foobar',
      });
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo" was specified multiple times.',
    );

    expect(() => {
      void firestore.doc('collectionId/documentId').update({
        foo: 'foobar',
        'foo.bar.foobar': 'foobar',
      });
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo" was specified multiple times.',
    );

    expect(() => {
      void firestore.doc('collectionId/documentId').update({
        'foo.bar': 'foobar',
        foo: 'foobar',
      });
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo" was specified multiple times.',
    );

    expect(() => {
      void firestore.doc('collectionId/documentId').update({
        'foo.bar': 'foobar',
        'foo.bar.foo': 'foobar',
      });
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo.bar" was specified multiple times.',
    );

    expect(() => {
      void firestore.doc('collectionId/documentId').update({
        'foo.bar': {foo: 'foobar'},
        'foo.bar.foo': 'foobar',
      });
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo.bar" was specified multiple times.',
    );

    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .update('foo.bar', 'foobar', 'foo', 'foobar');
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo" was specified multiple times.',
    );

    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .update('foo', {foobar: 'foobar'}, 'foo.bar', {foobar: 'foobar'});
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo" was specified multiple times.',
    );

    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .update('foo', {foobar: 'foobar'}, 'foo.bar', {foobar: 'foobar'});
    }).to.throw(
      'Value for argument "dataOrField" is not a valid update map. Field "foo" was specified multiple times.',
    );
  });

  it('with valid field paths', () => {
    const validFields = ['foo.bar', '_', 'foo.bar.foobar', '\n`'];

    for (let i = 0; i < validFields.length; ++i) {
      firestore.collection('col').select(validFields[i]);
    }
  });

  it('with empty field path', () => {
    expect(() => {
      const doc = {'': 'foo'};
      void firestore.doc('col/doc').update(doc);
    }).to.throw(
      'Update() requires either a single JavaScript object or an alternating list of field/value pairs that can be followed by an optional precondition. Element at index 0 should not be an empty string.',
    );
  });

  it('with invalid field paths', () => {
    const invalidFields = [
      '.a',
      'a.',
      '.a.',
      'a..a',
      'a*a',
      'a/a',
      'a[a',
      'a]a',
    ];

    for (let i = 0; i < invalidFields.length; ++i) {
      expect(() => {
        const doc: {[k: string]: string} = {};
        doc[invalidFields[i]] = 'foo';
        void firestore.doc('col/doc').update(doc);
      }).to.throw(/Value for argument ".*" is not a valid field path/);
    }
  });

  it("doesn't accept argument after precondition", () => {
    expect(() => {
      void firestore.doc('collectionId/documentId').update('foo', 'bar', {
        exists: false,
      });
    }).to.throw(INVALID_ARGUMENTS_TO_UPDATE);

    expect(() => {
      void firestore
        .doc('collectionId/documentId')
        .update({foo: 'bar'}, {exists: true}, 'foo');
    }).to.throw(INVALID_ARGUMENTS_TO_UPDATE);
  });

  it('accepts an object', () => {
    expect(() =>
      firestore.doc('collectionId/documentId').update(null as InvalidApiUsage),
    ).to.throw(
      'Value for argument "dataOrField" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });

  it("doesn't accept arrays", () => {
    expect(() =>
      firestore.doc('collectionId/documentId').update([42] as InvalidApiUsage),
    ).to.throw(
      'Value for argument "dataOrField" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });

  it('with field delete', () => {
    const overrides: ApiOverride = {
      commit: request => {
        requestEquals(
          request,
          update({
            document: document('documentId', 'bar', 'foobar'),
            mask: updateMask('bar', 'foo'),
          }),
        );
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').update({
        foo: FieldValue.delete(),
        bar: 'foobar',
      });
    });
  });
});

describe('listCollections() method', () => {
  it('sorts results', () => {
    const overrides: ApiOverride = {
      listCollectionIds: request => {
        expect(request).to.deep.eq({
          parent: `projects/${PROJECT_ID}/databases/(default)/documents/coll/doc`,
        });

        return response(['second', 'first']);
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .doc('coll/doc')
        .listCollections()
        .then(collections => {
          expect(collections[0].path).to.equal('coll/doc/first');
          expect(collections[1].path).to.equal('coll/doc/second');
        });
    });
  });
});

describe('withConverter() support', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('for DocumentReference.get()', async () => {
    const doc = document('documentId', 'author', 'author', 'title', 'post');
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: doc,
        });
        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
      batchGetDocuments: () => {
        const stream = through2.obj();
        setImmediate(() => {
          stream.push({found: doc, readTime: {seconds: 5, nanos: 6}});
          stream.push(null);
        });

        return stream;
      },
    };

    return createInstance(overrides).then(async firestore => {
      const docRef = firestore
        .collection('collectionId')
        .doc('documentId')
        .withConverter(postConverter);

      await docRef.set(new Post('post', 'author'));
      const postData = await docRef.get();
      const post = postData.data();
      expect(post).to.not.be.undefined;
      expect(post!.toString()).to.equal('post, by author');
    });
  });

  it('withConverter(null) applies the default converter', async () => {
    return createInstance().then(async firestore => {
      const docRef = firestore
        .collection('collectionId')
        .doc('documentId')
        .withConverter(postConverter)
        .withConverter(null);
      expect(() => docRef.set(new Post('post', 'author'))).to.throw();
    });
  });
});
