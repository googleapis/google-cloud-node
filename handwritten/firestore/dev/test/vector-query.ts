// Copyright 2024 Google LLC
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

import {afterEach, beforeEach, it, expect} from 'vitest';
import {fieldFiltersQuery, queryEquals, result} from './util/query_helpers';
import {
  ApiOverride,
  createInstance,
  emptyQueryStream,
  stream,
  streamWithoutEnd,
  verifyInstance,
} from './util/helpers';
import {
  DocumentSnapshot,
  FieldValue,
  FieldPath,
  Firestore,
  Query,
  Timestamp,
} from '../src';
import {google} from '../protos/firestore_v1_proto_api';
import api = google.firestore.v1;
import {setTimeoutHandler} from '../src/backoff';
export function findNearestQuery(
  fieldPath: string,
  queryVector: Array<number>,
  limit: number,
  measure: api.StructuredQuery.FindNearest.DistanceMeasure,
): api.IStructuredQuery {
  return {
    findNearest: {
      vectorField: {fieldPath},
      queryVector: {
        mapValue: {
          fields: {
            __type__: {stringValue: '__vector__'},
            value: {
              arrayValue: {
                values: queryVector.map(n => {
                  return {doubleValue: n};
                }),
              },
            },
          },
        },
      },
      limit: {value: limit},
      distanceMeasure: measure,
    },
  };
}

describe('Vector(findNearest) query interface', () => {
  let firestore: Firestore;

  beforeEach(() => {
    setTimeoutHandler(setImmediate);
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(async () => {
    await verifyInstance(firestore);
    setTimeoutHandler(setTimeout);
  });

  it('has isEqual() method', () => {
    const queryA = firestore.collection('collectionId').where('foo', '==', 42);
    const queryB = firestore.collection('collectionId').where('foo', '==', 42);

    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .isEqual(
          queryA.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'COSINE',
            limit: 10,
          }),
        ),
    ).toBe(true);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
          }),
        ),
    ).toBe(true);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceThreshold: 0.125,
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceThreshold: 0.125,
          }),
        ),
    ).toBe(true);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceThreshold: 0.125,
          distanceResultField: new FieldPath('foo'),
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceThreshold: 0.125,
            distanceResultField: new FieldPath('foo'),
          }),
        ),
    ).toBe(true);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceResultField: 'distance',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceResultField: new FieldPath('distance'),
          }),
        ),
    ).toBe(true);

    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .isEqual(
          firestore.collection('collectionId').findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'COSINE',
            limit: 10,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 42],
            distanceMeasure: 'COSINE',
            limit: 10,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'COSINE',
            limit: 1000,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceThreshold: 1.125,
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceThreshold: 0.125,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceThreshold: 1,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceThreshold: 1,
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceResultField: 'distance',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceResultField: 'result',
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceResultField: new FieldPath('bar'),
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceResultField: new FieldPath('foo'),
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
            distanceResultField: new FieldPath('foo'),
          }),
        ),
    ).toBe(false);
    expect(
      queryA
        .findNearest({
          vectorField: 'embedding',
          queryVector: [40, 41, 42],
          distanceMeasure: 'EUCLIDEAN',
          limit: 10,
          distanceResultField: 'result',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'EUCLIDEAN',
            limit: 10,
          }),
        ),
    ).toBe(false);
  });

  it('generates equal vector queries with deprecated API', () => {
    const queryA = firestore.collection('collectionId').where('foo', '==', 42);
    const queryB = firestore.collection('collectionId').where('foo', '==', 42);

    expect(
      queryA
        .findNearest('embedding', [40, 41, 42], {
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'embedding',
            queryVector: [40, 41, 42],
            distanceMeasure: 'COSINE',
            limit: 10,
          }),
        ),
    ).toBe(true);
    expect(
      queryA
        .findNearest('foo', [40, 41, 42, 43], {
          limit: 1,
          distanceMeasure: 'DOT_PRODUCT',
        })
        .isEqual(
          queryB.findNearest({
            vectorField: 'foo',
            queryVector: [40, 41, 42, 43],
            distanceMeasure: 'DOT_PRODUCT',
            limit: 1,
          }),
        ),
    ).toBe(true);
  });

  it('generates proto', async () => {
    const overrides: ApiOverride = {
      runQuery: request => {
        queryEquals(
          request,
          fieldFiltersQuery('foo', 'EQUAL', 'bar'),
          findNearestQuery('embedding', [3, 4, 5], 100, 'COSINE'),
        );
        return emptyQueryStream();
      },
    };

    return createInstance(overrides).then(firestoreInstance => {
      firestore = firestoreInstance;
      const query: Query = firestore.collection('collectionId');
      const vectorQuery = query
        .where('foo', '==', 'bar')
        .findNearest('embedding', FieldValue.vector([3, 4, 5]), {
          limit: 100,
          distanceMeasure: 'COSINE',
        });
      return vectorQuery.get();
    });
  });

  it('validates inputs', async () => {
    const query: Query = firestore.collection('collectionId');
    expect(() => {
      query.findNearest({
        vectorField: 'embedding',
        queryVector: [],
        limit: 10,
        distanceMeasure: 'EUCLIDEAN',
      });
    }).toThrow('not a valid vector size');
    expect(() => {
      query.findNearest({
        vectorField: 'embedding',
        queryVector: [10, 1000],
        limit: 0,
        distanceMeasure: 'EUCLIDEAN',
      });
    }).toThrow('not a valid positive limit number');
  });

  it('validates inputs - preview (deprecated) API', async () => {
    const query: Query = firestore.collection('collectionId');
    expect(() => {
      query.findNearest('embedding', [], {
        limit: 10,
        distanceMeasure: 'EUCLIDEAN',
      });
    }).toThrow('not a valid vector size');
    expect(() => {
      query.findNearest('embedding', [10, 1000], {
        limit: 0,
        distanceMeasure: 'EUCLIDEAN',
      });
    }).toThrow('not a valid positive limit number');
  });

  const distanceMeasure: ('EUCLIDEAN' | 'DOT_PRODUCT' | 'COSINE')[] = [
    'EUCLIDEAN',
    'DOT_PRODUCT',
    'COSINE',
  ];
  distanceMeasure.forEach(distanceMeasure => {
    it(`returns results when distanceMeasure is ${distanceMeasure}`, async () => {
      const overrides: ApiOverride = {
        runQuery: request => {
          queryEquals(
            request,
            findNearestQuery('embedding', [1], 2, distanceMeasure),
          );
          return stream(result('first'), result('second'));
        },
      };

      return createInstance(overrides).then(firestoreInstance => {
        firestore = firestoreInstance;
        const query = firestore.collection('collectionId').findNearest({
          vectorField: 'embedding',
          queryVector: [1],
          limit: 2,
          distanceMeasure: distanceMeasure,
        });
        return query.get().then(results => {
          expect(results.size).toBe(2);
          expect(results.empty).toBe(false);
          expect(results.readTime.isEqual(new Timestamp(5, 6))).toBe(true);
          expect(results.docs[0].id).toBe('first');
          expect(results.docs[1].id).toBe('second');
          expect(results.docChanges()).toHaveLength(2);

          let count = 0;

          results.forEach(doc => {
            expect(doc instanceof DocumentSnapshot).toBe(true);
            expect(doc.createTime.isEqual(new Timestamp(1, 2))).toBe(true);
            expect(doc.updateTime.isEqual(new Timestamp(3, 4))).toBe(true);
            expect(doc.readTime.isEqual(new Timestamp(5, 6))).toBe(true);
            ++count;
          });

          expect(2).toBe(count);
        });
      });
    });
  });

  it('successful return without ending the stream on get()', async () => {
    const overrides: ApiOverride = {
      runQuery: request => {
        queryEquals(request, findNearestQuery('vector', [1], 10, 'COSINE'));
        return streamWithoutEnd(result('first'), result('second', true));
      },
    };

    let counter = 0;
    return createInstance(overrides).then(firestoreInstance => {
      firestore = firestoreInstance;
      const query = firestore.collection('collectionId').findNearest({
        vectorField: 'vector',
        queryVector: [1],
        limit: 10,
        distanceMeasure: 'COSINE',
      });
      return query.get().then(results => {
        expect(++counter).toBe(1);
        expect(results.size).toBe(2);
        expect(results.empty).toBe(false);
        expect(results.readTime.isEqual(new Timestamp(5, 6))).toBe(true);
        expect(results.docs[0].id).toBe('first');
        expect(results.docs[1].id).toBe('second');
        expect(results.docChanges()).toHaveLength(2);
      });
    });
  });

  it('handles stream exception at initialization', async () => {
    let attempts = 0;
    const query = firestore.collection('collectionId').findNearest({
      vectorField: 'embedding',
      queryVector: [1],
      limit: 100,
      distanceMeasure: 'EUCLIDEAN',
    });

    query._queryUtil._stream = () => {
      ++attempts;
      throw new Error('Expected error');
    };

    return query
      .get()
      .then(() => {
        throw new Error('Unexpected success in Promise');
      })
      .catch(err => {
        expect(err.message).toBe('Expected error');
        expect(attempts).toBe(1);
      });
  });

  it('handles stream exception during initialization', async () => {
    let attempts = 0;

    const overrides: ApiOverride = {
      runQuery: () => {
        ++attempts;
        return stream(new Error('Expected error'));
      },
    };

    return createInstance(overrides).then(firestoreInstance => {
      firestore = firestoreInstance;
      return firestore
        .collection('collectionId')
        .findNearest({
          vectorField: 'embedding',
          queryVector: [1],
          limit: 10,
          distanceMeasure: 'COSINE',
        })
        .get()
        .then(() => {
          throw new Error('Unexpected success in Promise');
        })
        .catch(err => {
          expect(err.message).toBe('Expected error');
          expect(attempts).toBe(5);
        });
    });
  });
});
