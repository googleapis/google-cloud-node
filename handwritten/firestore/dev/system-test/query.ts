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

import {
  DocumentData,
  QuerySnapshot,
  VectorValue,
} from '@google-cloud/firestore';

import {expect} from 'chai';
import {afterEach, beforeEach, describe, it} from 'mocha';
import '../test/util/mocha_extensions';
import {
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  FieldValue,
  Filter,
  Firestore,
  Query,
  QueryDocumentSnapshot,
  VectorQuery,
  VectorQuerySnapshot,
  setLogFunction,
} from '../src';
import {verifyInstance} from '../test/util/helpers';
import {DeferredPromise, getTestRoot} from './firestore';
import {IndexTestHelper} from './index_test_helper';

describe.skipClassic('Query and Pipeline Compare - Enterprise DB', () => {
  interface PaginatedResults {
    pages: number;
    docs: QueryDocumentSnapshot[];
  }

  let firestore: Firestore;
  let randomCol: CollectionReference;

  const paginateResults = (
    query: Query,
    startAfter?: unknown,
  ): Promise<PaginatedResults> => {
    return (startAfter ? query.startAfter(startAfter) : query)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return {pages: 0, docs: []};
        } else {
          const docs = snapshot.docs;
          return paginateResults(query, docs[docs.length - 1]).then(
            nextPage => {
              return {
                pages: nextPage.pages + 1,
                docs: docs.concat(nextPage.docs),
              };
            },
          );
        }
      });
  };

  async function addDocs(
    ...docs: DocumentData[]
  ): Promise<DocumentReference[]> {
    let id = 0; // Guarantees consistent ordering for the first documents
    const refs: DocumentReference[] = [];
    for (const doc of docs) {
      const ref = randomCol.doc('doc' + id++);
      await ref.set(doc);
      refs.push(ref);
    }
    return refs;
  }

  async function testCollectionWithDocs(docs: {
    [id: string]: DocumentData;
  }): Promise<CollectionReference<DocumentData>> {
    for (const id in docs) {
      const ref = randomCol.doc(id);
      await ref.set(docs[id]);
    }
    return randomCol;
  }

  function expectDocs(result: QuerySnapshot, ...docs: string[]): void;
  function expectDocs(result: QuerySnapshot, ...data: DocumentData[]): void;

  function expectDocs(
    result: QuerySnapshot,
    ...data: DocumentData[] | string[]
  ): void {
    expect(result.size).to.equal(data.length);

    if (data.length > 0) {
      if (typeof data[0] === 'string') {
        const actualIds = result.docs.map(docSnapshot => docSnapshot.id);
        expect(actualIds).to.deep.equal(data);
      } else {
        result.forEach(doc => {
          expect(doc.data()).to.deep.equal(data.shift());
        });
      }
    }
  }

  async function compareQueryAndPipeline(query: Query): Promise<QuerySnapshot> {
    const queryResults = await query.get();
    const pipeline = query.firestore.pipeline().createFrom(query);
    const pipelineResults = await pipeline.execute();

    expect(pipelineResults.results.map(r => r._fieldsProto)).to.deep.equal(
      queryResults.docs.map(s => s._fieldsProto),
    );
    return queryResults;
  }

  async function compareVectorQueryAndPipeline(
    query: VectorQuery,
  ): Promise<VectorQuerySnapshot> {
    const queryResults = await query.get();
    const pipeline = query.query.firestore.pipeline().createFrom(query);
    const pipelineResults = await pipeline.execute();

    expect(pipelineResults.results.map(r => r._fieldsProto)).to.deep.equal(
      queryResults.docs.map(s => s._fieldsProto),
    );
    return queryResults;
  }

  beforeEach(() => {
    randomCol = getTestRoot();
    firestore = randomCol.firestore;
  });

  afterEach(() => verifyInstance(firestore));

  it('has firestore property', () => {
    const ref = randomCol.limit(0);
    expect(ref.firestore).to.be.an.instanceOf(Firestore);
  });

  it('has select() method', () => {
    const ref = randomCol.doc('doc');
    return ref
      .set({foo: 'bar', bar: 'foo'})
      .then(() => {
        return randomCol.select('foo').get();
      })
      .then(res => {
        expect(res.docs[0].data()).to.deep.equal({foo: 'bar'});
      });
  });

  it('select() supports empty fields', () => {
    const ref = randomCol.doc('doc');
    return ref
      .set({foo: 'bar', bar: 'foo'})
      .then(() => {
        return randomCol.select().get();
      })
      .then(res => {
        expect(res.docs[0].ref.id).to.deep.equal('doc');
        expect(res.docs[0].data()).to.deep.equal({});
      });
  });

  it('has where() method', () => {
    const ref = randomCol.doc('doc');
    return ref
      .set({foo: 'bar'})
      .then(() => {
        return compareQueryAndPipeline(randomCol.where('foo', '==', 'bar'));
      })
      .then(res => {
        expect(res.docs[0].data()).to.deep.equal({foo: 'bar'});
      });
  });

  it('supports NaN and Null', () => {
    const ref = randomCol.doc('doc');
    return ref
      .set({foo: NaN, bar: null})
      .then(() => {
        return compareQueryAndPipeline(
          randomCol.where('foo', '==', NaN).where('bar', '==', null),
        );
      })
      .then(res => {
        expect(
          typeof res.docs[0].get('foo') === 'number' &&
            isNaN(res.docs[0].get('foo')),
        );
        expect(res.docs[0].get('bar')).to.equal(null);
      });
  });

  it('supports array-contains', () => {
    return Promise.all([
      randomCol.add({foo: ['bar']}),
      randomCol.add({foo: []}),
    ])
      .then(() =>
        compareQueryAndPipeline(
          randomCol.where('foo', 'array-contains', 'bar'),
        ),
      )
      .then(res => {
        expect(res.size).to.equal(1);
        expect(res.docs[0].get('foo')).to.deep.equal(['bar']);
      });
  });

  it('supports findNearest by EUCLIDEAN distance', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionReference = await indexTestHelper.createTestDocs([
      {foo: 'bar'},
      {foo: 'xxx', embedding: FieldValue.vector([10, 10])},
      {foo: 'bar', embedding: FieldValue.vector([1, 1])},
      {foo: 'bar', embedding: FieldValue.vector([10, 0])},
      {foo: 'bar', embedding: FieldValue.vector([20, 0])},
      {foo: 'bar', embedding: FieldValue.vector([100, 100])},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionReference)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);
    expect(res.size).to.equal(3);
    expect(res.docs[0].get('embedding').isEqual(FieldValue.vector([10, 0]))).to
      .be.true;
    expect(res.docs[1].get('embedding').isEqual(FieldValue.vector([1, 1]))).to
      .be.true;
    expect(res.docs[2].get('embedding').isEqual(FieldValue.vector([20, 0]))).to
      .be.true;
  });

  it('supports findNearest by COSINE distance', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionReference = await indexTestHelper.setTestDocs({
      '1': {foo: 'bar'},
      '2': {foo: 'xxx', embedding: FieldValue.vector([10, 10])},
      '3': {foo: 'bar', embedding: FieldValue.vector([1, 1])},
      '4': {foo: 'bar', embedding: FieldValue.vector([20, 0])},
      '5': {foo: 'bar', embedding: FieldValue.vector([10, 0])},
      '6': {foo: 'bar', embedding: FieldValue.vector([100, 100])},
    });

    const vectorQuery = indexTestHelper
      .query(collectionReference)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'COSINE',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);

    expect(res.size).to.equal(3);

    if (res.docs[0].get('embedding').isEqual(FieldValue.vector([1, 1]))) {
      expect(
        res.docs[1].get('embedding').isEqual(FieldValue.vector([100, 100])),
      ).to.be.true;
    } else {
      expect(
        res.docs[0].get('embedding').isEqual(FieldValue.vector([100, 100])),
      ).to.be.true;
      expect(res.docs[1].get('embedding').isEqual(FieldValue.vector([1, 1]))).to
        .be.true;
    }

    expect(
      res.docs[2].get('embedding').isEqual(FieldValue.vector([20, 0])) ||
        res.docs[2].get('embedding').isEqual(FieldValue.vector([10, 0])),
    ).to.be.true;
  });

  it('supports findNearest by DOT_PRODUCT distance', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionReference = await indexTestHelper.createTestDocs([
      {foo: 'bar'},
      {foo: 'xxx', embedding: FieldValue.vector([10, 10])},
      {foo: 'bar', embedding: FieldValue.vector([1, 1])},
      {foo: 'bar', embedding: FieldValue.vector([10, 0])},
      {foo: 'bar', embedding: FieldValue.vector([20, 0])},
      {foo: 'bar', embedding: FieldValue.vector([100, 100])},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionReference)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'DOT_PRODUCT',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);
    expect(res.size).to.equal(3);
    expect(res.docs[0].get('embedding').isEqual(FieldValue.vector([100, 100])))
      .to.be.true;
    expect(res.docs[1].get('embedding').isEqual(FieldValue.vector([20, 0]))).to
      .be.true;
    expect(res.docs[2].get('embedding').isEqual(FieldValue.vector([10, 0]))).to
      .be.true;
  });

  it('findNearest works with converters', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    class FooDistance {
      constructor(
        readonly foo: string,
        readonly embedding: Array<number>,
      ) {}
    }

    const fooConverter = {
      toFirestore(d: FooDistance): DocumentData {
        return {title: d.foo, embedding: FieldValue.vector(d.embedding)};
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): FooDistance {
        const data = snapshot.data();
        return new FooDistance(data.foo, data.embedding.toArray());
      },
    };

    const collectionRef = await indexTestHelper.createTestDocs([
      {foo: 'bar', embedding: FieldValue.vector([5, 5])},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionRef)
      .withConverter(fooConverter)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);

    expect(res.size).to.equal(1);
    expect(res.docs[0].data().foo).to.equal('bar');
    expect(res.docs[0].data().embedding).to.deep.equal([5, 5]);
  });

  it('supports findNearest skipping fields of wrong types', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionRef = await indexTestHelper.createTestDocs([
      {foo: 'bar'},

      // These documents are skipped because it is not really a vector value
      {foo: 'bar', embedding: [10, 10]},
      {foo: 'bar', embedding: 'not actually a vector'},
      {foo: 'bar', embedding: null},

      // Actual vector values
      {foo: 'bar', embedding: FieldValue.vector([9, 9])},
      {foo: 'bar', embedding: FieldValue.vector([50, 50])},
      {foo: 'bar', embedding: FieldValue.vector([100, 100])},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionRef)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 100, // Intentionally large to get all matches.
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);
    expect(res.size).to.equal(3);
    expect(res.docs[0].get('embedding').isEqual(FieldValue.vector([9, 9]))).to
      .be.true;
    expect(res.docs[1].get('embedding').isEqual(FieldValue.vector([50, 50]))).to
      .be.true;
    expect(res.docs[2].get('embedding').isEqual(FieldValue.vector([100, 100])))
      .to.be.true;
  });

  it('findNearest ignores mismatching dimensions', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionRef = await indexTestHelper.createTestDocs([
      {foo: 'bar'},

      // Vectors with dimension mismatch
      {foo: 'bar', embedding: FieldValue.vector([10])},

      // Vectors with dimension match
      {foo: 'bar', embedding: FieldValue.vector([9, 9])},
      {foo: 'bar', embedding: FieldValue.vector([50, 50])},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionRef)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);
    expect(res.size).to.equal(2);
    expect(res.docs[0].get('embedding').isEqual(FieldValue.vector([9, 9]))).to
      .be.true;
    expect(res.docs[1].get('embedding').isEqual(FieldValue.vector([50, 50]))).to
      .be.true;
  });

  it('supports findNearest on non-existent field', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionRef = await indexTestHelper.createTestDocs([
      {foo: 'bar'},
      {foo: 'bar', otherField: [10, 10]},
      {foo: 'bar', otherField: 'not actually a vector'},
      {foo: 'bar', otherField: null},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionRef)
      .where('foo', '==', 'bar')
      .findNearest('embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);

    expect(res.size).to.equal(0);
  });

  it('supports findNearest on vector nested in a map', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionReference = await indexTestHelper.createTestDocs([
      {nested: {foo: 'bar'}},
      {nested: {foo: 'xxx', embedding: FieldValue.vector([10, 10])}},
      {nested: {foo: 'bar', embedding: FieldValue.vector([1, 1])}},
      {nested: {foo: 'bar', embedding: FieldValue.vector([10, 0])}},
      {nested: {foo: 'bar', embedding: FieldValue.vector([20, 0])}},
      {nested: {foo: 'bar', embedding: FieldValue.vector([100, 100])}},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionReference)
      .findNearest('nested.embedding', [10, 10], {
        limit: 3,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);
    expect(res.size).to.equal(3);
    expect(
      res.docs[0].get('nested.embedding').isEqual(FieldValue.vector([10, 10])),
    ).to.be.true;
    expect(
      res.docs[1].get('nested.embedding').isEqual(FieldValue.vector([10, 0])),
    ).to.be.true;
    expect(
      res.docs[2].get('nested.embedding').isEqual(FieldValue.vector([1, 1])),
    ).to.be.true;
  });

  it('supports findNearest with select to exclude vector data in response', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const collectionReference = await indexTestHelper.createTestDocs([
      {foo: 1},
      {foo: 2, embedding: FieldValue.vector([10, 10])},
      {foo: 3, embedding: FieldValue.vector([1, 1])},
      {foo: 4, embedding: FieldValue.vector([10, 0])},
      {foo: 5, embedding: FieldValue.vector([20, 0])},
      {foo: 6, embedding: FieldValue.vector([100, 100])},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionReference)
      .where('foo', 'in', [1, 2, 3, 4, 5, 6])
      .select('foo')
      .findNearest('embedding', [10, 10], {
        limit: 10,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await vectorQuery.get();
    expect(res.size).to.equal(5);
    expect(res.docs[0].get('foo')).to.equal(2);
    expect(res.docs[1].get('foo')).to.equal(4);
    expect(res.docs[2].get('foo')).to.equal(3);
    expect(res.docs[3].get('foo')).to.equal(5);
    expect(res.docs[4].get('foo')).to.equal(6);

    res.docs.forEach(ds => expect(ds.get('embedding')).to.be.undefined);
  });

  it('supports findNearest limits', async () => {
    const indexTestHelper = new IndexTestHelper(firestore);

    const embeddingVector = [];
    const queryVector = [];
    for (let i = 0; i < 2048; i++) {
      embeddingVector.push(i + 1);
      queryVector.push(i - 1);
    }

    const collectionReference = await indexTestHelper.createTestDocs([
      {embedding: FieldValue.vector(embeddingVector)},
    ]);

    const vectorQuery = indexTestHelper
      .query(collectionReference)
      .findNearest('embedding', queryVector, {
        limit: 1000,
        distanceMeasure: 'EUCLIDEAN',
      });

    const res = await compareVectorQueryAndPipeline(vectorQuery);
    expect(res.size).to.equal(1);
    expect(
      (res.docs[0].get('embedding') as VectorValue).toArray(),
    ).to.deep.equal(embeddingVector);
  });

  // TODO waiting on implicit sort order decision
  it.skipEnterprise('supports !=', async () => {
    await addDocs(
      {zip: NaN},
      {zip: 91102},
      {zip: 98101},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
      {zip: null},
    );

    let res = await compareQueryAndPipeline(
      randomCol.where('zip', '!=', 98101),
    );
    expectDocs(
      res,
      {zip: NaN},
      {zip: 91102},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );

    res = await compareQueryAndPipeline(randomCol.where('zip', '!=', NaN));
    expectDocs(
      res,
      {zip: 91102},
      {zip: 98101},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );

    res = await compareQueryAndPipeline(randomCol.where('zip', '!=', null));
    expectDocs(
      res,
      {zip: NaN},
      {zip: 91102},
      {zip: 98101},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );
  });

  // TODO waiting on implicit sort order decision
  it.skipEnterprise('supports != with document ID', async () => {
    const refs = await addDocs({count: 1}, {count: 2}, {count: 3});
    const res = await compareQueryAndPipeline(
      randomCol.where(FieldPath.documentId(), '!=', refs[0].id),
    );
    expectDocs(res, {count: 2}, {count: 3});
  });

  it('supports not-in', async () => {
    await addDocs(
      {zip: 98101},
      {zip: 91102},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );
    let res = await compareQueryAndPipeline(
      randomCol
        .where('zip', 'not-in', [98101, 98103])
        .orderBy(FieldPath.documentId()),
    );
    expectDocs(
      res,
      {zip: 91102},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );

    res = await compareQueryAndPipeline(
      randomCol
        .where('zip', 'not-in', [NaN])
        .orderBy('zip')
        .orderBy(FieldPath.documentId()),
    );
    expectDocs(
      res,
      {zip: 91102},
      {zip: 98101},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );

    res = await compareQueryAndPipeline(
      randomCol.where('zip', 'not-in', [null]).orderBy(FieldPath.documentId()),
    );
    expectDocs(
      res,
      {zip: 98101},
      {zip: 91102},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );
  });

  it('supports not-in with document ID array', async () => {
    const refs = await addDocs({count: 1}, {count: 2}, {count: 3});
    const res = await compareQueryAndPipeline(
      randomCol.where(FieldPath.documentId(), 'not-in', [refs[0].id, refs[1]]),
    );
    expectDocs(res, {count: 3});
  });

  // TODO waiting on implicit sort order decision
  it.skipEnterprise('supports "in"', async () => {
    await addDocs(
      {zip: 98101},
      {zip: 91102},
      {zip: 98103},
      {zip: [98101]},
      {zip: ['98101', {zip: 98101}]},
      {zip: {zip: 98101}},
    );
    const res = await compareQueryAndPipeline(
      randomCol.where('zip', 'in', [98101, 98103]),
    );
    expectDocs(res, {zip: 98101}, {zip: 98103});
  });

  it('supports "in" with document ID array', async () => {
    const refs = await addDocs({count: 1}, {count: 2}, {count: 3});
    const res = await compareQueryAndPipeline(
      randomCol.where(FieldPath.documentId(), 'in', [refs[0].id, refs[1]]),
    );
    expectDocs(res, {count: 1}, {count: 2});
  });

  // TODO waiting fix for `The function array_contains(...) requires `Array` but got `LONG`.
  it.skipEnterprise('supports array-contains-any', async () => {
    await addDocs(
      {array: [42]},
      {array: ['a', 42, 'c']},
      {array: [41.999, '42', {a: [42]}]},
      {array: [42], array2: ['sigh']},
      {array: [43]},
      {array: [{a: 42}]},
      {array: 42},
    );

    const res = await compareQueryAndPipeline(
      randomCol.where('array', 'array-contains-any', [42, 43]),
    );

    expectDocs(
      res,
      {array: [42]},
      {array: ['a', 42, 'c']},
      {
        array: [42],
        array2: ['sigh'],
      },
      {array: [43]},
    );
  });

  it('can query by FieldPath.documentId()', () => {
    const ref = randomCol.doc('foo');

    return ref
      .set({})
      .then(() => {
        return compareQueryAndPipeline(
          randomCol.where(FieldPath.documentId(), '>=', 'bar'),
        );
      })
      .then(res => {
        expect(res.docs.length).to.equal(1);
      });
  });

  it('has orderBy() method', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});

    let res = await compareQueryAndPipeline(randomCol.orderBy('foo'));
    expectDocs(res, {foo: 'a'}, {foo: 'b'});

    res = await compareQueryAndPipeline(randomCol.orderBy('foo', 'desc'));
    expectDocs(res, {foo: 'b'}, {foo: 'a'});
  });

  it('can order by FieldPath.documentId()', () => {
    const ref1 = randomCol.doc('doc1');
    const ref2 = randomCol.doc('doc2');

    return Promise.all([ref1.set({foo: 'a'}), ref2.set({foo: 'b'})])
      .then(() => {
        return compareQueryAndPipeline(
          randomCol.orderBy(FieldPath.documentId()),
        );
      })
      .then(res => {
        expect(res.docs[0].data()).to.deep.equal({foo: 'a'});
        expect(res.docs[1].data()).to.deep.equal({foo: 'b'});
      });
  });

  it('can run get() on empty collection', async () => {
    return compareQueryAndPipeline(randomCol).then(res => {
      return expect(res.empty);
    });
  });

  it('can run stream() on empty collection', async () => {
    let received = 0;
    const stream = randomCol.stream();

    for await (const doc of stream) {
      expect(doc).to.be.an.instanceOf(QueryDocumentSnapshot);
      ++received;
    }

    expect(received).to.equal(0);
  });

  it('has limit() method on get()', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await compareQueryAndPipeline(
      randomCol.orderBy('foo').limit(1),
    );
    expectDocs(res, {foo: 'a'});
  });

  it('has limit() method on stream()', async () => {
    let received = 0;
    await addDocs({foo: 'a'}, {foo: 'b'});

    const stream = randomCol.orderBy('foo').limit(1).stream();
    for await (const doc of stream) {
      expect(doc).to.be.an.instanceOf(QueryDocumentSnapshot);
      ++received;
    }

    expect(received).to.equal(1);
  });

  it('can run limit(num), where num is larger than the collection size on get()', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await compareQueryAndPipeline(
      randomCol.orderBy('foo').limit(3),
    );
    expectDocs(res, {foo: 'a'}, {foo: 'b'});
  });

  it('can run limit(num), where num is larger than the collection size on stream()', async () => {
    let received = 0;
    await addDocs({foo: 'a'}, {foo: 'b'});

    const stream = randomCol.orderBy('foo').limit(3).stream();
    for await (const doc of stream) {
      expect(doc).to.be.an.instanceOf(QueryDocumentSnapshot);
      ++received;
    }

    expect(received).to.equal(2);
  });

  it('has limitToLast() method', async () => {
    await addDocs({doc: 1}, {doc: 2}, {doc: 3});
    // const res = await compareQueryAndPipeline(randomCol.orderBy('doc').limitToLast(2));
    const res = await randomCol.orderBy('doc').limitToLast(2).get();
    expectDocs(res, {doc: 2}, {doc: 3});
  });

  it('limitToLast() supports Query cursors', async () => {
    await addDocs({doc: 1}, {doc: 2}, {doc: 3}, {doc: 4}, {doc: 5});
    const res = await randomCol
      .orderBy('doc')
      .startAt(2)
      .endAt(4)
      .limitToLast(5)
      .get();
    expectDocs(res, {doc: 2}, {doc: 3}, {doc: 4});
  });

  it('can use offset() method with get()', async () => {
    setLogFunction(console.log);
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await compareQueryAndPipeline(
      randomCol.orderBy('foo').offset(1),
    );
    expectDocs(res, {foo: 'b'});
  });

  it('can use offset() method with stream()', async () => {
    let received = 0;
    await addDocs({foo: 'a'}, {foo: 'b'});

    const stream = randomCol.orderBy('foo').offset(1).stream();
    for await (const doc of stream) {
      expect(doc).to.be.an.instanceOf(QueryDocumentSnapshot);
      ++received;
    }

    expect(received).to.equal(1);
  });

  it('can run offset(num), where num is larger than the collection size on get()', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await compareQueryAndPipeline(
      randomCol.orderBy('foo').offset(3),
    );
    expect(res.empty);
  });

  it('can run offset(num), where num is larger than the collection size on stream()', async () => {
    let received = 0;
    await addDocs({foo: 'a'}, {foo: 'b'});
    const stream = randomCol.orderBy('foo').offset(3).stream();
    for await (const doc of stream) {
      expect(doc).to.be.an.instanceOf(QueryDocumentSnapshot);
      ++received;
    }
    expect(received).to.equal(0);
  });

  it('supports Unicode in document names', async () => {
    const collRef = randomCol.doc('доброеутро').collection('coll');
    await collRef.add({});
    const snapshot = await compareQueryAndPipeline(collRef);
    expect(snapshot.size).to.equal(1);
  });

  it('supports pagination', () => {
    const batch = firestore.batch();

    for (let i = 0; i < 10; ++i) {
      batch.set(randomCol.doc('doc' + i), {val: i});
    }

    const query = randomCol.orderBy('val').limit(3);

    return batch
      .commit()
      .then(() => paginateResults(query))
      .then(results => {
        expect(results.pages).to.equal(4);
        expect(results.docs).to.have.length(10);
      });
  });

  // TODO (enterprise) waiting for implicit sort order support
  it('supports pagination with where() clauses', () => {
    const batch = firestore.batch();

    for (let i = 0; i < 10; ++i) {
      batch.set(randomCol.doc('doc' + i), {val: i});
    }

    const query = randomCol
      .where('val', '>=', 1)
      .limit(3)
      .orderBy('val')
      .orderBy(FieldPath.documentId());

    return batch
      .commit()
      .then(() => paginateResults(query))
      .then(results => {
        expect(results.pages).to.equal(3);
        expect(results.docs).to.have.length(9);
      });
  });

  it('supports pagination with array-contains filter', () => {
    const batch = firestore.batch();

    for (let i = 0; i < 10; ++i) {
      batch.set(randomCol.doc('doc' + i), {array: ['foo']});
    }

    const query = randomCol.where('array', 'array-contains', 'foo').limit(3);

    return batch
      .commit()
      .then(() => paginateResults(query))
      .then(results => {
        expect(results.pages).to.equal(4);
        expect(results.docs).to.have.length(10);
      });
  });

  it('has startAt() method', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await randomCol.orderBy('foo').startAt('b').get();
    expectDocs(res, {foo: 'b'});
  });

  it('startAt() adds implicit order by for DocumentSnapshot', async () => {
    const references = await addDocs({foo: 'a'}, {foo: 'b'});
    const docSnap = await references[1].get();
    const res = await randomCol.startAt(docSnap).get();
    expectDocs(res, {foo: 'b'});
  });

  it('has startAfter() method', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await randomCol.orderBy('foo').startAfter('a').get();
    expectDocs(res, {foo: 'b'});
  });

  it('has endAt() method', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await randomCol.orderBy('foo').endAt('b').get();
    expectDocs(res, {foo: 'a'}, {foo: 'b'});
  });

  it('has endBefore() method', async () => {
    await addDocs({foo: 'a'}, {foo: 'b'});
    const res = await randomCol.orderBy('foo').endBefore('b').get();
    expectDocs(res, {foo: 'a'});
  });

  it('has stream() method', done => {
    let received = 0;
    const ref1 = randomCol.doc('doc1');
    const ref2 = randomCol.doc('doc2');

    void Promise.all([ref1.set({foo: 'a'}), ref2.set({foo: 'b'})]).then(() => {
      return randomCol
        .stream()
        .on('data', d => {
          expect(d).to.be.an.instanceOf(DocumentSnapshot);
          ++received;
        })
        .on('end', () => {
          expect(received).to.equal(2);
          done();
        });
    });
  });

  it('stream() supports readable[Symbol.asyncIterator]()', async () => {
    let received = 0;
    await randomCol.doc().set({foo: 'bar'});
    await randomCol.doc().set({foo: 'bar'});

    const stream = randomCol.stream();
    for await (const doc of stream) {
      expect(doc).to.be.an.instanceOf(QueryDocumentSnapshot);
      ++received;
    }

    expect(received).to.equal(2);
  });

  // TODO (enterprise) waiting on implicit sor order decision
  it.skipEnterprise('can query collection groups', async () => {
    // Use `randomCol` to get a random collection group name to use but ensure
    // it starts with 'b' for predictable ordering.
    const collectionGroup = 'b' + randomCol.id;

    const docPaths = [
      `abc/123/${collectionGroup}/cg-doc1`,
      `abc/123/${collectionGroup}/cg-doc2`,
      `${collectionGroup}/cg-doc3`,
      `${collectionGroup}/cg-doc4`,
      `def/456/${collectionGroup}/cg-doc5`,
      `${collectionGroup}/virtual-doc/nested-coll/not-cg-doc`,
      `x${collectionGroup}/not-cg-doc`,
      `${collectionGroup}x/not-cg-doc`,
      `abc/123/${collectionGroup}x/not-cg-doc`,
      `abc/123/x${collectionGroup}/not-cg-doc`,
      `abc/${collectionGroup}`,
    ];
    const batch = firestore.batch();
    for (const docPath of docPaths) {
      batch.set(firestore.doc(docPath), {x: 1});
    }
    await batch.commit();

    const querySnapshot = await compareQueryAndPipeline(
      firestore.collectionGroup(collectionGroup),
    );
    expect(querySnapshot.docs.map(d => d.id)).to.deep.equal([
      'cg-doc1',
      'cg-doc2',
      'cg-doc3',
      'cg-doc4',
      'cg-doc5',
    ]);
  });

  // TODO (enterprise) wait for implicit sort order support
  it.skipEnterprise(
    'can query collection groups with startAt / endAt by arbitrary documentId',
    async () => {
      // Use `randomCol` to get a random collection group name to use but
      // ensure it starts with 'b' for predictable ordering.
      const collectionGroup = 'b' + randomCol.id;

      const docPaths = [
        `a/a/${collectionGroup}/cg-doc1`,
        `a/b/a/b/${collectionGroup}/cg-doc2`,
        `a/b/${collectionGroup}/cg-doc3`,
        `a/b/c/d/${collectionGroup}/cg-doc4`,
        `a/c/${collectionGroup}/cg-doc5`,
        `${collectionGroup}/cg-doc6`,
        'a/b/nope/nope',
      ];
      const batch = firestore.batch();
      for (const docPath of docPaths) {
        batch.set(firestore.doc(docPath), {x: 1});
      }
      await batch.commit();

      let querySnapshot = await firestore
        .collectionGroup(collectionGroup)
        .orderBy(FieldPath.documentId())
        .startAt('a/b')
        .endAt('a/b0')
        .get();
      expect(querySnapshot.docs.map(d => d.id)).to.deep.equal([
        'cg-doc2',
        'cg-doc3',
        'cg-doc4',
      ]);

      querySnapshot = await firestore
        .collectionGroup(collectionGroup)
        .orderBy(FieldPath.documentId())
        .startAfter('a/b')
        .endBefore(`a/b/${collectionGroup}/cg-doc3`)
        .get();
      expect(querySnapshot.docs.map(d => d.id)).to.deep.equal(['cg-doc2']);
    },
  );

  // TODO (enterprise) wait for implicit sort order support
  it.skipEnterprise(
    'can query collection groups with where filters on arbitrary documentId',
    async () => {
      // Use `randomCol` to get a random collection group name to use but
      // ensure it starts with 'b' for predictable ordering.
      const collectionGroup = 'b' + randomCol.id;

      const docPaths = [
        `a/a/${collectionGroup}/cg-doc1`,
        `a/b/a/b/${collectionGroup}/cg-doc2`,
        `a/b/${collectionGroup}/cg-doc3`,
        `a/b/c/d/${collectionGroup}/cg-doc4`,
        `a/c/${collectionGroup}/cg-doc5`,
        `${collectionGroup}/cg-doc6`,
        'a/b/nope/nope',
      ];
      const batch = firestore.batch();
      for (const docPath of docPaths) {
        batch.set(firestore.doc(docPath), {x: 1});
      }
      await batch.commit();

      let querySnapshot = await compareQueryAndPipeline(
        firestore
          .collectionGroup(collectionGroup)
          .where(FieldPath.documentId(), '>=', 'a/b')
          .where(FieldPath.documentId(), '<=', 'a/b0'),
      );
      expect(querySnapshot.docs.map(d => d.id)).to.deep.equal([
        'cg-doc2',
        'cg-doc3',
        'cg-doc4',
      ]);

      querySnapshot = await compareQueryAndPipeline(
        firestore
          .collectionGroup(collectionGroup)
          .where(FieldPath.documentId(), '>', 'a/b')
          .where(FieldPath.documentId(), '<', `a/b/${collectionGroup}/cg-doc3`),
      );
      expect(querySnapshot.docs.map(d => d.id)).to.deep.equal(['cg-doc2']);
    },
  );

  it('can query large collections', async () => {
    // @grpc/grpc-js v0.4.1 failed to deliver the full set of query results for
    // larger collections (https://github.com/grpc/grpc-node/issues/895);
    const batch = firestore.batch();
    for (let i = 0; i < 100; ++i) {
      batch.create(randomCol.doc(), {});
    }
    await batch.commit();

    const snapshot = await compareQueryAndPipeline(randomCol);
    expect(snapshot.size).to.equal(100);
  });

  // TODO (enterprise) wait for implicit sort order support
  it.skipEnterprise('supports OR queries', async () => {
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: 0},
      doc2: {a: 2, b: 1},
      doc3: {a: 3, b: 2},
      doc4: {a: 1, b: 3},
      doc5: {a: 1, b: 1},
    });

    // Two equalities: a==1 || b==1.
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.or(Filter.where('a', '==', 1), Filter.where('b', '==', 1)),
        ),
      ),
      'doc1',
      'doc2',
      'doc4',
      'doc5',
    );

    // (a==1 && b==0) || (a==3 && b==2)
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.or(
            Filter.and(Filter.where('a', '==', 1), Filter.where('b', '==', 0)),
            Filter.and(Filter.where('a', '==', 3), Filter.where('b', '==', 2)),
          ),
        ),
      ),
      'doc1',
      'doc3',
    );

    // a==1 && (b==0 || b==3).
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.and(
            Filter.where('a', '==', 1),
            Filter.or(Filter.where('b', '==', 0), Filter.where('b', '==', 3)),
          ),
        ),
      ),
      'doc1',
      'doc4',
    );

    // (a==2 || b==2) && (a==3 || b==3)
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.and(
            Filter.or(Filter.where('a', '==', 2), Filter.where('b', '==', 2)),
            Filter.or(Filter.where('a', '==', 3), Filter.where('b', '==', 3)),
          ),
        ),
      ),
      'doc3',
    );

    // Test with limits without orderBy (the __name__ ordering is the tie breaker).
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 2), Filter.where('b', '==', 1)),
          )
          .limit(1),
      ),
      'doc2',
    );
  });

  // Skip this test if running against production because it results in a 'missing index' error.
  // The Firestore Emulator, however, does serve these queries.
  // TODO (enterprise) wait for implicit sort order support
  it.skipEnterprise('supports OR queries with composite indexes', async () => {
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: 0},
      doc2: {a: 2, b: 1},
      doc3: {a: 3, b: 2},
      doc4: {a: 1, b: 3},
      doc5: {a: 1, b: 1},
    });

    // with one inequality: a>2 || b==1.
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.or(Filter.where('a', '>', 2), Filter.where('b', '==', 1)),
        ),
      ),
      'doc5',
      'doc2',
      'doc3',
    );

    // Test with limits (implicit order by ASC): (a==1) || (b > 0) LIMIT 2
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 1), Filter.where('b', '>', 0)),
          )
          .limit(2),
      ),
      'doc1',
      'doc2',
    );

    // Test with limits (explicit order by): (a==1) || (b > 0) LIMIT_TO_LAST 2
    // Note: The public query API does not allow implicit ordering when limitToLast is used.
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 1), Filter.where('b', '>', 0)),
          )
          .limitToLast(2)
          .orderBy('b'),
      ),
      'doc3',
      'doc4',
    );

    // Test with limits (explicit order by ASC): (a==2) || (b == 1) ORDER BY a LIMIT 1
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 2), Filter.where('b', '==', 1)),
          )
          .limit(1)
          .orderBy('a'),
      ),
      'doc5',
    );

    // Test with limits (explicit order by DESC): (a==2) || (b == 1) ORDER BY a LIMIT 1
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 2), Filter.where('b', '==', 1)),
          )
          .limit(1)
          .orderBy('a', 'desc'),
      ),
      'doc2',
    );
  });

  it('supports OR queries on documents with missing fields', async () => {
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: 0},
      doc2: {b: 1},
      doc3: {a: 3, b: 2},
      doc4: {a: 1, b: 3},
      doc5: {a: 1},
      doc6: {a: 2},
    });

    // Query: a==1 || b==1
    // There's no explicit nor implicit orderBy. Documents with missing 'a' or missing 'b' should be
    // allowed if the document matches at least one disjunction term.
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 1), Filter.where('b', '==', 1)),
          )
          .orderBy(FieldPath.documentId()),
      ),
      'doc1',
      'doc2',
      'doc4',
      'doc5',
    );
  });

  // Skip this test if running against production because it results in a 'missing index' error.
  // TODO (enterprise) wait for implicit sort order support
  it.skip('supports OR queries on documents with missing fields', async () => {
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: 0},
      doc2: {b: 1},
      doc3: {a: 3, b: 2},
      doc4: {a: 1, b: 3},
      doc5: {a: 1},
      doc6: {a: 2},
    });

    // Query: a==1 || b==1 order by a.
    // doc2 should not be included because it's missing the field 'a', and we have "orderBy a".
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 1), Filter.where('b', '==', 1)),
          )
          .orderBy('a'),
      ),
      'doc1',
      'doc4',
      'doc5',
    );

    // Query: a==1 || b==1 order by b.
    // doc5 should not be included because it's missing the field 'b', and we have "orderBy b".
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '==', 1), Filter.where('b', '==', 1)),
          )
          .orderBy('b'),
      ),
      'doc1',
      'doc2',
      'doc4',
    );

    // Query: a>2 || b==1.
    // This query has an implicit 'order by a'.
    // doc2 should not be included because it's missing the field 'a'.
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.or(Filter.where('a', '>', 2), Filter.where('b', '==', 1)),
        ),
      ),
      'doc3',
    );

    // Query: a>1 || b==1 order by a order by b.
    // doc6 should not be included because it's missing the field 'b'.
    // doc2 should not be included because it's missing the field 'a'.
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(Filter.where('a', '>', 1), Filter.where('b', '==', 1)),
          )
          .orderBy('a')
          .orderBy('b'),
      ),
      'doc3',
    );
  });

  it('supports OR queries with in', async () => {
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: 0},
      doc2: {b: 1},
      doc3: {a: 3, b: 2},
      doc4: {a: 1, b: 3},
      doc5: {a: 1},
      doc6: {a: 2},
    });

    // Query: a==2 || b in [2, 3]
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(
              Filter.where('a', '==', 2),
              Filter.where('b', 'in', [2, 3]),
            ),
          )
          .orderBy(FieldPath.documentId()),
      ),
      'doc3',
      'doc4',
      'doc6',
    );
  });

  // Skip this test if running against production because it results in a 'missing index' error.
  it('supports OR queries with not-in', async () => {
    setLogFunction(console.log);
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: 0},
      doc2: {b: 1},
      doc3: {a: 3, b: 2},
      doc4: {a: 1, b: 3},
      doc5: {a: 1},
      doc6: {a: 2},
    });

    // a==2 || (b != 2 && b != 3)
    // Has implicit "orderBy b"
    expectDocs(
      await compareQueryAndPipeline(
        collection
          .where(
            Filter.or(
              Filter.where('a', '==', 2),
              Filter.where('b', 'not-in', [2, 3]),
            ),
          )
          .orderBy(FieldPath.documentId()),
      ),
      'doc1',
      'doc2',
      'doc5',
      'doc6',
    );
  });

  // TODO (enterprise) wait for implicit sort order support
  it.skipEnterprise('supports OR queries with array membership', async () => {
    const collection = await testCollectionWithDocs({
      doc1: {a: 1, b: [0]},
      doc2: {b: [1]},
      doc3: {a: 3, b: [2, 7]},
      doc4: {a: 1, b: [3, 7]},
      doc5: {a: 1},
      doc6: {a: 2},
    });

    // Query: a==2 || b array-contains 7
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.or(
            Filter.where('a', '==', 2),
            Filter.where('b', 'array-contains', 7),
          ),
        ),
      ),
      'doc3',
      'doc4',
      'doc6',
    );

    // a==2 || b array-contains-any [0, 3]
    // Has implicit "orderBy b"
    expectDocs(
      await compareQueryAndPipeline(
        collection.where(
          Filter.or(
            Filter.where('a', '==', 2),
            Filter.where('b', 'array-contains-any', [0, 3]),
          ),
        ),
      ),
      'doc1',
      'doc4',
      'doc6',
    );
  });

  describe('watch', () => {
    interface ExpectedChange {
      type: string;
      doc: DocumentSnapshot;
    }

    const currentDeferred = new DeferredPromise<QuerySnapshot>();

    const snapshot = (id: string, data: DocumentData) => {
      const ref = randomCol.doc(id);
      const fields = ref.firestore._serializer!.encodeFields(data);
      return randomCol.firestore.snapshot_(
        {
          name:
            'projects/ignored/databases/(default)/documents/' +
            ref._path.relativeName,
          fields,
          createTime: {seconds: 0, nanos: 0},
          updateTime: {seconds: 0, nanos: 0},
        },
        {seconds: 0, nanos: 0},
      );
    };

    const docChange = (
      type: string,
      id: string,
      data: DocumentData,
    ): ExpectedChange => {
      return {
        type,
        doc: snapshot(id, data),
      };
    };

    const added = (id: string, data: DocumentData) =>
      docChange('added', id, data);
    const modified = (id: string, data: DocumentData) =>
      docChange('modified', id, data);
    const removed = (id: string, data: DocumentData) =>
      docChange('removed', id, data);

    function resetPromise() {
      currentDeferred.promise = new Promise((resolve, reject) => {
        currentDeferred.resolve = resolve;
        currentDeferred.reject = reject;
      });
    }

    function waitForSnapshot(): Promise<QuerySnapshot> {
      return currentDeferred.promise!.then(snapshot => {
        resetPromise();
        return snapshot;
      });
    }

    function snapshotsEqual(
      actual: QuerySnapshot,
      expected: {docs: DocumentSnapshot[]; docChanges: ExpectedChange[]},
    ) {
      let i;
      expect(actual.size).to.equal(expected.docs.length);
      for (i = 0; i < expected.docs.length && i < actual.size; i++) {
        expect(actual.docs[i].ref.id).to.equal(expected.docs[i].ref.id);
        expect(actual.docs[i].data()).to.deep.equal(expected.docs[i].data());
      }
      const actualDocChanges = actual.docChanges();
      expect(actualDocChanges.length).to.equal(expected.docChanges.length);
      for (i = 0; i < expected.docChanges.length; i++) {
        expect(actualDocChanges[i].type).to.equal(expected.docChanges[i].type);
        expect(actualDocChanges[i].doc.ref.id).to.equal(
          expected.docChanges[i].doc.ref.id,
        );
        expect(actualDocChanges[i].doc.data()).to.deep.equal(
          expected.docChanges[i].doc.data(),
        );
        expect(actualDocChanges[i].doc.readTime).to.exist;
        expect(actualDocChanges[i].doc.createTime).to.exist;
        expect(actualDocChanges[i].doc.updateTime).to.exist;
      }
      expect(actual.readTime).to.exist;
    }

    beforeEach(() => resetPromise());

    it('handles changing a doc', () => {
      const ref1 = randomCol.doc('doc1');
      const ref2 = randomCol.doc('doc2');

      const unsubscribe = randomCol.onSnapshot(
        snapshot => {
          currentDeferred.resolve(snapshot);
        },
        err => {
          currentDeferred.reject!(err);
        },
      );

      return waitForSnapshot()
        .then(results => {
          snapshotsEqual(results, {docs: [], docChanges: []});
          // Add a result.
          return ref1.set({foo: 'a'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {foo: 'a'})],
            docChanges: [added('doc1', {foo: 'a'})],
          });
          // Add another result.
          return ref2.set({foo: 'b'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {foo: 'a'}), snapshot('doc2', {foo: 'b'})],
            docChanges: [added('doc2', {foo: 'b'})],
          });
          // Change a result.
          return ref2.set({bar: 'c'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {foo: 'a'}), snapshot('doc2', {bar: 'c'})],
            docChanges: [modified('doc2', {bar: 'c'})],
          });
          unsubscribe();
        });
    });

    it("handles changing a doc so it doesn't match", () => {
      const ref1 = randomCol.doc('doc1');
      const ref2 = randomCol.doc('doc2');

      const query = randomCol.where('included', '==', 'yes');
      const unsubscribe = query.onSnapshot(
        snapshot => {
          currentDeferred.resolve(snapshot);
        },
        err => {
          currentDeferred.reject(err);
        },
      );

      return waitForSnapshot()
        .then(results => {
          snapshotsEqual(results, {docs: [], docChanges: []});
          // Add a result.
          return ref1.set({included: 'yes'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {included: 'yes'})],
            docChanges: [added('doc1', {included: 'yes'})],
          });
          // Add another result.
          return ref2.set({included: 'yes'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [
              snapshot('doc1', {included: 'yes'}),
              snapshot('doc2', {included: 'yes'}),
            ],
            docChanges: [added('doc2', {included: 'yes'})],
          });
          // Change a result.
          return ref2.set({included: 'no'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {included: 'yes'})],
            docChanges: [removed('doc2', {included: 'yes'})],
          });
          unsubscribe();
        });
    });

    it('handles deleting a doc', () => {
      const ref1 = randomCol.doc('doc1');
      const ref2 = randomCol.doc('doc2');

      const unsubscribe = randomCol.onSnapshot(
        snapshot => {
          currentDeferred.resolve(snapshot);
        },
        err => {
          currentDeferred.reject(err);
        },
      );

      return waitForSnapshot()
        .then(results => {
          snapshotsEqual(results, {docs: [], docChanges: []});
          // Add a result.
          return ref1.set({included: 'yes'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {included: 'yes'})],
            docChanges: [added('doc1', {included: 'yes'})],
          });
          // Add another result.
          return ref2.set({included: 'yes'});
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [
              snapshot('doc1', {included: 'yes'}),
              snapshot('doc2', {included: 'yes'}),
            ],
            docChanges: [added('doc2', {included: 'yes'})],
          });
          // Delete a result.
          return ref2.delete();
        })
        .then(() => {
          return waitForSnapshot();
        })
        .then(results => {
          snapshotsEqual(results, {
            docs: [snapshot('doc1', {included: 'yes'})],
            docChanges: [removed('doc2', {included: 'yes'})],
          });
          unsubscribe();
        });
    });

    it('orders limitToLast() correctly', async () => {
      const ref1 = randomCol.doc('doc1');
      const ref2 = randomCol.doc('doc2');
      const ref3 = randomCol.doc('doc3');

      await ref1.set({doc: 1});
      await ref2.set({doc: 2});
      await ref3.set({doc: 3});

      const unsubscribe = randomCol
        .orderBy('doc')
        .limitToLast(2)
        .onSnapshot(snapshot => currentDeferred.resolve(snapshot));

      const results = await waitForSnapshot();
      snapshotsEqual(results, {
        docs: [snapshot('doc2', {doc: 2}), snapshot('doc3', {doc: 3})],
        docChanges: [added('doc2', {doc: 2}), added('doc3', {doc: 3})],
      });

      unsubscribe();
    });

    it('SDK orders vector field same way as backend', async () => {
      // We validate that the SDK orders the vector field the same way as the backend
      // by comparing the sort order of vector fields from a Query.get() and
      // Query.onSnapshot(). Query.onSnapshot() will return sort order of the SDK,
      // and Query.get() will return sort order of the backend.

      // Test data in the order that we expect the backend to sort it.
      const docsInOrder = [
        {embedding: [1, 2, 3, 4, 5, 6]},
        {embedding: [100]},
        {embedding: FieldValue.vector([Number.NEGATIVE_INFINITY])},
        {embedding: FieldValue.vector([-100])},
        {embedding: FieldValue.vector([100])},
        {embedding: FieldValue.vector([Number.POSITIVE_INFINITY])},
        {embedding: FieldValue.vector([1, 2])},
        {embedding: FieldValue.vector([2, 2])},
        {embedding: FieldValue.vector([1, 2, 3])},
        {embedding: FieldValue.vector([1, 2, 3, 4])},
        {embedding: FieldValue.vector([1, 2, 3, 4, 5])},
        {embedding: FieldValue.vector([1, 2, 100, 4, 4])},
        {embedding: FieldValue.vector([100, 2, 3, 4, 5])},
        {embedding: {HELLO: 'WORLD'}},
        {embedding: {hello: 'world'}},
      ];

      const expectedSnapshots = [];
      const expectedChanges = [];

      for (let i = 0; i < docsInOrder.length; i++) {
        const dr = await randomCol.add(docsInOrder[i]);
        expectedSnapshots.push(snapshot(dr.id, docsInOrder[i]));
        expectedChanges.push(added(dr.id, docsInOrder[i]));
      }

      const orderedQuery = randomCol.orderBy('embedding');

      const unsubscribe = orderedQuery.onSnapshot(
        snapshot => {
          currentDeferred.resolve(snapshot);
        },
        err => {
          currentDeferred.reject!(err);
        },
      );

      const watchSnapshot = await waitForSnapshot();
      unsubscribe();

      const getSnapshot = await orderedQuery.get();

      // Compare the snapshot (including sort order) of a snapshot
      // from Query.onSnapshot() to an actual snapshot from Query.get()
      snapshotsEqual(watchSnapshot, {
        docs: getSnapshot.docs,
        docChanges: getSnapshot.docChanges(),
      });

      // Compare the snapshot (including sort order) of a snapshot
      // from Query.onSnapshot() to the expected sort order from
      // the backend.
      snapshotsEqual(watchSnapshot, {
        docs: expectedSnapshots,
        docChanges: expectedChanges,
      });
    });
  });

  (process.env.FIRESTORE_EMULATOR_HOST === undefined
    ? describe.skip
    : describe)('multiple inequality', () => {
    it('supports multiple inequality queries', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 0, v: 0},
        doc2: {key: 'b', sort: 3, v: 1},
        doc3: {key: 'c', sort: 1, v: 3},
        doc4: {key: 'd', sort: 2, v: 2},
      });

      // Multiple inequality fields
      let results = await compareQueryAndPipeline(
        collection
          .where('key', '!=', 'a')
          .where('sort', '<=', 2)
          .where('v', '>', 2),
      );
      expectDocs(results, 'doc3');

      // Duplicate inequality fields
      results = await compareQueryAndPipeline(
        collection
          .where('key', '!=', 'a')
          .where('sort', '<=', 2)
          .where('sort', '>', 1),
      );
      expectDocs(results, 'doc4');

      // With multiple IN
      results = await compareQueryAndPipeline(
        collection
          .where('key', '>=', 'a')
          .where('sort', '<=', 2)
          .where('v', 'in', [2, 3, 4])
          .where('sort', 'in', [2, 3]),
      );
      expectDocs(results, 'doc4');

      // With NOT-IN
      results = await compareQueryAndPipeline(
        collection
          .where('key', '>=', 'a')
          .where('sort', '<=', 2)
          .where('v', 'not-in', [2, 4, 5]),
      );
      expectDocs(results, 'doc1', 'doc3');

      // With orderby
      results = await compareQueryAndPipeline(
        collection
          .where('key', '>=', 'a')
          .where('sort', '<=', 2)
          .orderBy('v', 'desc'),
      );
      expectDocs(results, 'doc3', 'doc4', 'doc1');

      // With limit
      results = await compareQueryAndPipeline(
        collection
          .where('key', '>=', 'a')
          .where('sort', '<=', 2)
          .orderBy('v', 'desc')
          .limit(2),
      );
      expectDocs(results, 'doc3', 'doc4');

      // With limitToLast
      results = await compareQueryAndPipeline(
        collection
          .where('key', '>=', 'a')
          .where('sort', '<=', 2)
          .orderBy('v', 'desc')
          .limitToLast(2),
      );
      expectDocs(results, 'doc4', 'doc1');
    });

    it('can use on special values', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 0, v: 0},
        doc2: {key: 'b', sort: NaN, v: 1},
        doc3: {key: 'c', sort: null, v: 3},
        doc4: {key: 'd', v: 0},
        doc5: {key: 'e', sort: 1},
        doc6: {key: 'f', sort: 1, v: 1},
      });

      let results = await compareQueryAndPipeline(
        collection.where('key', '!=', 'a').where('sort', '<=', 2),
      );
      expectDocs(results, 'doc5', 'doc6');

      results = await compareQueryAndPipeline(
        collection
          .where('key', '!=', 'a')
          .where('sort', '<=', 2)
          .where('v', '<=', 1),
      );
      expectDocs(results, 'doc6');
    });

    it('can use with array membership', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 0, v: [0]},
        doc2: {key: 'b', sort: 1, v: [0, 1, 3]},
        doc3: {key: 'c', sort: 1, v: []},
        doc4: {key: 'd', sort: 2, v: [1]},
        doc5: {key: 'e', sort: 3, v: [2, 4]},
        doc6: {key: 'f', sort: 4, v: [NaN]},
        doc7: {key: 'g', sort: 4, v: [null]},
      });

      let results = await compareQueryAndPipeline(
        collection
          .where('key', '!=', 'a')
          .where('sort', '>=', 1)
          .where('v', 'array-contains', 0),
      );
      expectDocs(results, 'doc2');

      results = await compareQueryAndPipeline(
        collection
          .where('key', '!=', 'a')
          .where('sort', '>=', 1)
          .where('v', 'array-contains-any', [0, 1]),
      );
      expectDocs(results, 'doc2', 'doc4');
    });

    // Use cursor in following test cases to add implicit order by fields in the sdk and compare the
    // result with the query fields normalized in the server.
    it('can use with nested field', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const testData = (n?: number): any => {
        n = n || 1;
        return {
          name: 'room ' + n,
          metadata: {
            createdAt: n,
          },
          field: 'field ' + n,
          'field.dot': n,
          'field\\slash': n,
        };
      };

      const collection = await testCollectionWithDocs({
        doc1: testData(400),
        doc2: testData(200),
        doc3: testData(100),
        doc4: testData(300),
      });

      // ordered by: name asc, metadata.createdAt asc, __name__  asc
      let query = collection
        .where('metadata.createdAt', '<=', 500)
        .where('metadata.createdAt', '>', 100)
        .where('name', '!=', 'room 200')
        .orderBy('name');
      let docSnap = await collection.doc('doc4').get();
      let queryWithCursor = query.startAt(docSnap);
      expectDocs(await compareQueryAndPipeline(query), 'doc4', 'doc1');
      expectDocs(await queryWithCursor.get(), 'doc4', 'doc1');

      // ordered by: name desc, field desc, field.dot desc, field\\slash desc, __name__ desc
      query = collection
        .where('field', '>=', 'field 100')
        .where(new FieldPath('field.dot'), '!=', 300)
        .where('field\\slash', '<', 400)
        .orderBy('name', 'desc');
      docSnap = await collection.doc('doc2').get();
      queryWithCursor = query.startAt(docSnap);
      expectDocs(await compareQueryAndPipeline(query), 'doc2', 'doc3');
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc3');
    });

    it('can use with nested composite filters', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 0, v: 5},
        doc2: {key: 'aa', sort: 4, v: 4},
        doc3: {key: 'c', sort: 3, v: 3},
        doc4: {key: 'b', sort: 2, v: 2},
        doc5: {key: 'b', sort: 2, v: 1},
        doc6: {key: 'b', sort: 0, v: 0},
      });

      // Implicitly ordered by: 'key' asc, 'sort' asc, 'v' asc, __name__ asc
      let query = collection.where(
        Filter.or(
          Filter.and(
            Filter.where('key', '==', 'b'),
            Filter.where('sort', '<=', 2),
          ),
          Filter.and(Filter.where('key', '!=', 'b'), Filter.where('v', '>', 4)),
        ),
      );
      let docSnap = await collection.doc('doc1').get();
      let queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc1',
        'doc6',
        'doc5',
        'doc4',
      );
      expectDocs(await queryWithCursor.get(), 'doc1', 'doc6', 'doc5', 'doc4');

      // Ordered by: 'sort' desc, 'key' asc, 'v' asc, __name__ asc
      query = collection
        .where(
          Filter.or(
            Filter.and(
              Filter.where('key', '==', 'b'),
              Filter.where('sort', '<=', 2),
            ),
            Filter.and(
              Filter.where('key', '!=', 'b'),
              Filter.where('v', '>', 4),
            ),
          ),
        )
        .orderBy('sort', 'desc')
        .orderBy('key');
      docSnap = await collection.doc('doc5').get();
      queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc5',
        'doc4',
        'doc1',
        'doc6',
      );
      expectDocs(await queryWithCursor.get(), 'doc5', 'doc4', 'doc1', 'doc6');

      // Implicitly ordered by: 'key' asc, 'sort' asc, 'v' asc, __name__ asc
      query = collection.where(
        Filter.and(
          Filter.or(
            Filter.and(
              Filter.where('key', '==', 'b'),
              Filter.where('sort', '<=', 4),
            ),
            Filter.and(
              Filter.where('key', '!=', 'b'),
              Filter.where('v', '>=', 4),
            ),
          ),
          Filter.or(
            Filter.and(
              Filter.where('key', '>', 'b'),
              Filter.where('sort', '>=', 1),
            ),
            Filter.and(
              Filter.where('key', '<', 'b'),
              Filter.where('v', '>', 0),
            ),
          ),
        ),
      );
      docSnap = await collection.doc('doc1').get();
      queryWithCursor = query.startAt(docSnap);
      expectDocs(await compareQueryAndPipeline(query), 'doc1', 'doc2');
      expectDocs(await queryWithCursor.get(), 'doc1', 'doc2');
    });

    it('inequality fields will be implicitly ordered lexicographically by the server', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 0, v: 5},
        doc2: {key: 'aa', sort: 4, v: 4},
        doc3: {key: 'b', sort: 3, v: 3},
        doc4: {key: 'b', sort: 2, v: 2},
        doc5: {key: 'b', sort: 2, v: 1},
        doc6: {key: 'b', sort: 0, v: 0},
      });

      const docSnap = await collection.doc('doc2').get();

      // Implicitly ordered by: 'key' asc, 'sort' asc, __name__ asc
      let query = collection
        .where('key', '!=', 'a')
        .where('sort', '>', 1)
        .where('v', 'in', [1, 2, 3, 4]);
      let queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc2',
        'doc4',
        'doc5',
        'doc3',
      );
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc4', 'doc5', 'doc3');

      // Changing filters order will not effect implicit order.
      // Implicitly ordered by: 'key' asc, 'sort' asc, __name__ asc
      query = collection
        .where('sort', '>', 1)
        .where('key', '!=', 'a')
        .where('v', 'in', [1, 2, 3, 4]);
      queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc2',
        'doc4',
        'doc5',
        'doc3',
      );
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc4', 'doc5', 'doc3');
    });

    it('can use multiple explicit order by field', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 5, v: 0},
        doc2: {key: 'aa', sort: 4, v: 0},
        doc3: {key: 'b', sort: 3, v: 1},
        doc4: {key: 'b', sort: 2, v: 1},
        doc5: {key: 'bb', sort: 1, v: 1},
        doc6: {key: 'c', sort: 0, v: 2},
      });

      let docSnap = await collection.doc('doc2').get();

      // Ordered by: 'v' asc, 'key' asc, 'sort' asc, __name__ asc
      let query = collection
        .where('key', '>', 'a')
        .where('sort', '>=', 1)
        .orderBy('v');
      let queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc2',
        'doc4',
        'doc3',
        'doc5',
      );
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc4', 'doc3', 'doc5');

      // Ordered by: 'v asc, 'sort' asc, 'key' asc,  __name__ asc
      query = collection
        .where('key', '>', 'a')
        .where('sort', '>=', 1)
        .orderBy('v')
        .orderBy('sort');
      queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc2',
        'doc5',
        'doc4',
        'doc3',
      );
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc5', 'doc4', 'doc3');

      docSnap = await collection.doc('doc5').get();

      // Implicit order by matches the direction of last explicit order by.
      // Ordered by: 'v' desc, 'key' desc, 'sort' desc, __name__ desc
      query = collection
        .where('key', '>', 'a')
        .where('sort', '>=', 1)
        .orderBy('v', 'desc');
      queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc5',
        'doc3',
        'doc4',
        'doc2',
      );
      expectDocs(await queryWithCursor.get(), 'doc5', 'doc3', 'doc4', 'doc2');

      // Ordered by: 'v desc, 'sort' asc, 'key' asc,  __name__ asc
      query = collection
        .where('key', '>', 'a')
        .where('sort', '>=', 1)
        .orderBy('v', 'desc')
        .orderBy('sort');
      queryWithCursor = query.startAt(docSnap);
      expectDocs(
        await compareQueryAndPipeline(query),
        'doc5',
        'doc4',
        'doc3',
        'doc2',
      );
      expectDocs(await queryWithCursor.get(), 'doc5', 'doc4', 'doc3', 'doc2');
    });

    it('can use in aggregate query', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 5, v: 0},
        doc2: {key: 'aa', sort: 4, v: 0},
        doc3: {key: 'b', sort: 3, v: 1},
        doc4: {key: 'b', sort: 2, v: 1},
        doc5: {key: 'bb', sort: 1, v: 1},
      });

      const results = await collection
        .where('key', '>', 'a')
        .where('sort', '>=', 1)
        .orderBy('v')
        .count()
        .get();
      expect(results.data().count).to.be.equal(4);
      //TODO(MIEQ): Add sum and average when they are public.
    });

    it('can use document ID im multiple inequality query', async () => {
      const collection = await testCollectionWithDocs({
        doc1: {key: 'a', sort: 5},
        doc2: {key: 'aa', sort: 4},
        doc3: {key: 'b', sort: 3},
        doc4: {key: 'b', sort: 2},
        doc5: {key: 'bb', sort: 1},
      });

      const docSnap = await collection.doc('doc2').get();

      // Document Key in inequality field will implicitly ordered to the last.
      // Implicitly ordered by: 'key' asc, 'sort' asc, __name__ asc
      let query = collection
        .where('sort', '>=', 1)
        .where('key', '!=', 'a')
        .where(FieldPath.documentId(), '<', 'doc5');
      let queryWithCursor = query.startAt(docSnap);
      expectDocs(await compareQueryAndPipeline(query), 'doc2', 'doc4', 'doc3');
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc4', 'doc3');

      // Changing filters order will not effect implicit order.
      // Implicitly ordered by: 'key' asc, 'sort' asc, __name__ asc
      query = collection
        .where(FieldPath.documentId(), '<', 'doc5')
        .where('sort', '>=', 1)
        .where('key', '!=', 'a');
      queryWithCursor = query.startAt(docSnap);
      expectDocs(await compareQueryAndPipeline(query), 'doc2', 'doc4', 'doc3');
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc4', 'doc3');

      // Ordered by: 'sort' desc,'key' desc,  __name__ desc
      query = collection
        .where(FieldPath.documentId(), '<', 'doc5')
        .where('sort', '>=', 1)
        .where('key', '!=', 'a')
        .orderBy('sort', 'desc');
      queryWithCursor = query.startAt(docSnap);
      expectDocs(await compareQueryAndPipeline(query), 'doc2', 'doc3', 'doc4');
      expectDocs(await queryWithCursor.get(), 'doc2', 'doc3', 'doc4');
    });
  });
});
