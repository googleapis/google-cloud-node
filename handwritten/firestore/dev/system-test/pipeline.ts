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
  DocumentReference,
  Pipelines,
} from '@google-cloud/firestore';

import {
  map,
  array,
  field,
  ceil,
  floor,
  exp,
  xor,
  AggregateFunction,
  arrayGet,
  timestampToUnixMicros,
  timestampToUnixSeconds,
  unixMicrosToTimestamp,
  timestampToUnixMillis,
  timestampSubtract,
  timestampAdd,
  byteLength,
  multiply,
  sum,
  maximum,
  descending,
  FunctionExpression,
  minimum,
  count,
  countIf,
  arrayLength,
  stringContains,
  charLength,
  divide,
  mod,
  reverse,
  trim,
  toUpper,
  toLower,
  vectorLength,
  exists,
  isAbsent,
  ifError,
  isError,
  substring,
  documentId,
  arrayContainsAll,
  mapRemove,
  mapMerge,
  unixSecondsToTimestamp,
  unixMillisToTimestamp,
  add,
  and,
  arrayContains,
  arrayContainsAny,
  arrayReverse,
  average,
  countAll,
  endsWith,
  equal,
  greaterThan,
  like,
  lessThan,
  notEqual,
  ascending,
  not,
  or,
  regexContains,
  regexMatch,
  regexFind,
  regexFindAll,
  startsWith,
  stringConcat,
  subtract,
  cosineDistance,
  dotProduct,
  euclideanDistance,
  mapGet,
  mapEntries,
  mapKeys,
  mapSet,
  mapValues,
  lessThanOrEqual,
  equalAny,
  notEqualAny,
  logicalMinimum,
  logicalMaximum,
  conditional,
  constant,
  PipelineResult,
  PipelineSnapshot,
  Pipeline,
  countDistinct,
  pow,
  round,
  collectionId,
  length,
  ln,
  sqrt,
  stringReverse,
  abs,
  log10,
  concat,
  ifAbsent,
  join,
  arraySum,
  currentTimestamp,
  arrayConcat,
  type,
  timestampTruncate,
  split,
  // TODO(new-expression): add new expression imports above this line
} from '../src/pipelines';

import {
  Timestamp,
  GeoPoint,
  Filter,
  FieldValue,
  CollectionReference,
  FieldPath,
  Firestore,
} from '../src';

import {expect, use} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import {afterEach, describe, it} from 'mocha';
import '../test/util/mocha_extensions';
import {verifyInstance} from '../test/util/helpers';
import {getTestDb, getTestRoot} from './firestore';

import {Firestore as InternalFirestore} from '../src';
import {ServiceError} from 'google-gax';

use(chaiAsPromised);

const timestampDeltaMS = 3000;

describe.skipClassic('Pipeline class', () => {
  let firestore: Firestore;
  let randomCol: CollectionReference;
  let beginDocCreation = 0;
  let endDocCreation = 0;

  async function testCollectionWithDocs(docs: {
    [id: string]: DocumentData;
  }): Promise<CollectionReference<DocumentData>> {
    beginDocCreation = new Date().valueOf();
    for (const id in docs) {
      const ref = randomCol.doc(id);
      await ref.set(docs[id]);
    }
    endDocCreation = new Date().valueOf();
    return randomCol;
  }

  function expectResults(result: PipelineSnapshot, ...docs: string[]): void;
  function expectResults(
    result: PipelineSnapshot,
    ...data: DocumentData[]
  ): void;
  function expectResults(
    result: PipelineSnapshot,
    ...data: DocumentData[] | string[]
  ): void {
    if (data.length > 0) {
      if (typeof data[0] === 'string') {
        const actualIds = result.results.map(result => result.id);
        expect(actualIds).to.deep.equal(data);
      } else {
        result.results.forEach(r => {
          expect(r.data()).to.deep.equal(data.shift());
        });
      }
    } else {
      expect(result.results.length).to.equal(data.length);
    }
  }

  async function setupBookDocs(): Promise<CollectionReference<DocumentData>> {
    const bookDocs: {[id: string]: DocumentData} = {
      book1: {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        genre: 'Science Fiction',
        published: 1979,
        rating: 4.2,
        tags: ['comedy', 'space', 'adventure'],
        awards: {
          hugo: true,
          nebula: false,
          others: {unknown: {year: 1980}},
        },
        nestedField: {'level.1': {'level.2': true}},
        embedding: FieldValue.vector([10, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      },
      book2: {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
        published: 1813,
        rating: 4.5,
        tags: ['classic', 'social commentary', 'love'],
        awards: {none: true},
        embedding: FieldValue.vector([1, 10, 1, 1, 1, 1, 1, 1, 1, 1]),
      },
      book3: {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        genre: 'Magical Realism',
        published: 1967,
        rating: 4.3,
        tags: ['family', 'history', 'fantasy'],
        awards: {nobel: true, nebula: false},
        embedding: FieldValue.vector([1, 1, 10, 1, 1, 1, 1, 1, 1, 1]),
      },
      book4: {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        published: 1954,
        rating: 4.7,
        tags: ['adventure', 'magic', 'epic'],
        awards: {hugo: false, nebula: false},
        remarks: null,
        cost: NaN,
        embedding: FieldValue.vector([1, 1, 1, 10, 1, 1, 1, 1, 1, 1]),
      },
      book5: {
        title: "The Handmaid's Tale",
        author: 'Margaret Atwood',
        genre: 'Dystopian',
        published: 1985,
        rating: 4.1,
        tags: ['feminism', 'totalitarianism', 'resistance'],
        awards: {'arthur c. clarke': true, 'booker prize': false},
        embedding: FieldValue.vector([1, 1, 1, 1, 10, 1, 1, 1, 1, 1]),
      },
      book6: {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        genre: 'Psychological Thriller',
        published: 1866,
        rating: 4.3,
        tags: ['philosophy', 'crime', 'redemption'],
        awards: {none: true},
        embedding: FieldValue.vector([1, 1, 1, 1, 1, 10, 1, 1, 1, 1]),
      },
      book7: {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Southern Gothic',
        published: 1960,
        rating: 4.2,
        tags: ['racism', 'injustice', 'coming-of-age'],
        awards: {pulitzer: true},
        embedding: FieldValue.vector([1, 1, 1, 1, 1, 1, 10, 1, 1, 1]),
      },
      book8: {
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        published: 1949,
        rating: 4.2,
        tags: ['surveillance', 'totalitarianism', 'propaganda'],
        awards: {prometheus: true},
        embedding: FieldValue.vector([1, 1, 1, 1, 1, 1, 1, 10, 1, 1]),
      },
      book9: {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Modernist',
        published: 1925,
        rating: 4.0,
        tags: ['wealth', 'american dream', 'love'],
        awards: {none: true},
        embedding: FieldValue.vector([1, 1, 1, 1, 1, 1, 1, 1, 10, 1]),
      },
      book10: {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        published: 1965,
        rating: 4.6,
        tags: ['politics', 'desert', 'ecology'],
        awards: {hugo: true, nebula: true},
        embedding: FieldValue.vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 10]),
      },
    };
    return testCollectionWithDocs(bookDocs);
  }

  before(async () => {
    randomCol = getTestRoot();
    await setupBookDocs();
    firestore = randomCol.firestore;
  });

  afterEach(() => verifyInstance(firestore as unknown as InternalFirestore));

  describe('pipeline results', () => {
    it('empty snapshot as expected', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(0)
        .execute();
      expect(snapshot.results.length).to.equal(0);
    });

    it('full snapshot as expected', async () => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'));
      const snapshot = await ppl.execute();
      expect(snapshot.results.length).to.equal(10);
      expect(snapshot.pipeline).to.equal(ppl);
      expectResults(
        snapshot,
        'book1',
        'book10',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
        'book8',
        'book9',
      );
    });

    it('result equals works', async () => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('title'))
        .limit(1);
      const snapshot1 = await ppl.execute();
      const snapshot2 = await ppl.execute();
      expect(snapshot1.results.length).to.equal(1);
      expect(snapshot2.results.length).to.equal(1);
      expect(snapshot1.results[0].isEqual(snapshot2.results[0])).to.be.true;
    });

    it('returns execution time', async () => {
      const start = new Date().valueOf();
      const pipeline = firestore.pipeline().collection(randomCol.path);

      const snapshot = await pipeline.execute();
      const end = new Date().valueOf();

      expect(snapshot.executionTime.toDate().valueOf()).to.approximately(
        (start + end) / 2,
        timestampDeltaMS,
      );
    });

    it('returns execution time for an empty query', async () => {
      const start = new Date().valueOf();
      const pipeline = firestore.pipeline().collection(randomCol.path).limit(0);

      const snapshot = await pipeline.execute();
      const end = new Date().valueOf();

      expect(snapshot.results.length).to.equal(0);

      expect(snapshot.executionTime.toDate().valueOf()).to.approximately(
        (start + end) / 2,
        timestampDeltaMS,
      );
    });

    it('returns create and update time for each document', async () => {
      const pipeline = firestore.pipeline().collection(randomCol.path);

      let snapshot = await pipeline.execute();
      expect(snapshot.results.length).to.equal(10);
      snapshot.results.forEach(doc => {
        expect(doc.createTime).to.not.be.null;
        expect(doc.updateTime).to.not.be.null;

        expect(doc.createTime!.toDate().valueOf()).to.approximately(
          (beginDocCreation + endDocCreation) / 2,
          timestampDeltaMS,
        );
        expect(doc.updateTime!.toDate().valueOf()).to.approximately(
          (beginDocCreation + endDocCreation) / 2,
          timestampDeltaMS,
        );
        expect(doc.createTime?.valueOf()).to.equal(doc.updateTime?.valueOf());
      });

      const wb = firestore.batch();
      snapshot.results.forEach(doc => {
        wb.update(doc.ref!, {newField: 'value'});
      });
      await wb.commit();

      snapshot = await pipeline.execute();
      expect(snapshot.results.length).to.equal(10);
      snapshot.results.forEach(doc => {
        expect(doc.createTime).to.not.be.null;
        expect(doc.updateTime).to.not.be.null;
        expect(doc.createTime!.toDate().valueOf()).to.be.lessThan(
          doc.updateTime!.toDate().valueOf(),
        );
      });
    });

    it('returns execution time for an aggregate query', async () => {
      const start = new Date().valueOf();
      const pipeline = firestore
        .pipeline()
        .collection(randomCol.path)
        .aggregate(average('rating').as('avgRating'));

      const snapshot = await pipeline.execute();
      const end = new Date().valueOf();

      expect(snapshot.results.length).to.equal(1);

      expect(snapshot.executionTime.toDate().valueOf()).to.approximately(
        (start + end) / 2,
        timestampDeltaMS,
      );
    });

    it('returns undefined create and update time for each result in an aggregate query', async () => {
      const pipeline = firestore
        .pipeline()
        .collection(randomCol.path)
        .aggregate({
          accumulators: [average('rating').as('avgRating')],
          groups: ['genre'],
        });

      const snapshot = await pipeline.execute();

      expect(snapshot.results.length).to.equal(8);

      snapshot.results.forEach(doc => {
        expect(doc.updateTime).to.be.undefined;
        expect(doc.createTime).to.be.undefined;
      });
    });
  });

  describe('pipeline explain', () => {
    it('mode: analyze, format: text', async () => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'));

      const snapshot = await ppl.execute({
        explainOptions: {
          mode: 'analyze',
          outputFormat: 'text',
        },
      });

      expect(snapshot.explainStats).not.to.be.undefined;
      expect(snapshot.explainStats!.text.length).to.be.greaterThan(0);
      expect(snapshot.explainStats!.text.charAt(0)).not.to.equal('{');

      expect(snapshot.explainStats!.rawData.type_url).to.equal(
        'type.googleapis.com/google.protobuf.StringValue',
      );
      expect(snapshot.explainStats!.rawData.value).to.not.be.null;
      expect(snapshot.explainStats!.rawData.value).to.not.be.undefined;

      expect(snapshot.results.length).to.equal(10);
      expect(snapshot.pipeline).to.equal(ppl);
      expectResults(
        snapshot,
        'book1',
        'book10',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
        'book8',
        'book9',
      );
    });

    it('mode: analyze, format: unspecified', async () => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'));
      const snapshot = await ppl.execute({
        explainOptions: {
          mode: 'analyze',
        },
      });
      expect(snapshot.explainStats).not.to.be.undefined;
      expect(snapshot.explainStats!.text.length).to.be.greaterThan(0);
      expect(snapshot.explainStats!.text.charAt(0)).not.to.equal('{');

      expect(snapshot.explainStats!.rawData.type_url).to.equal(
        'type.googleapis.com/google.protobuf.StringValue',
      );
      expect(snapshot.explainStats!.rawData.value).to.not.be.null;
      expect(snapshot.explainStats!.rawData.value).to.not.be.undefined;

      expect(snapshot.results.length).to.equal(10);
      expect(snapshot.pipeline).to.equal(ppl);
      expectResults(
        snapshot,
        'book1',
        'book10',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
        'book8',
        'book9',
      );
    });

    it('mode: execute, format: text', async () => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'));
      const snapshot = await ppl.execute({
        explainOptions: {
          mode: 'execute',
          outputFormat: 'text',
        },
      });
      expect(snapshot.explainStats).to.be.undefined;

      expect(snapshot.results.length).to.equal(10);
      expect(snapshot.pipeline).to.equal(ppl);
      expectResults(
        snapshot,
        'book1',
        'book10',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
        'book8',
        'book9',
      );
    });

    it('mode: unspecified, format: text', async () => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'));
      const snapshot = await ppl.execute({
        explainOptions: {
          mode: undefined,
        },
      });
      expect(snapshot.explainStats).to.be.undefined;

      expect(snapshot.results.length).to.equal(10);
      expect(snapshot.pipeline).to.equal(ppl);
      expectResults(
        snapshot,
        'book1',
        'book10',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
        'book8',
        'book9',
      );
    });
  });

  describe('pipeline sources', () => {
    it('supports CollectionReference as source', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol)
        .execute();
      expect(snapshot.results.length).to.equal(10);
    });

    it('supports list of documents as source', async () => {
      const collName = randomCol.id;

      const snapshot = await firestore
        .pipeline()
        .documents([
          `${collName}/book1`,
          randomCol.doc('book2'),
          randomCol.doc('book3').path,
        ])
        .execute();
      expect(snapshot.results.length).to.equal(3);
    });

    it('reject CollectionReference for another DB', async () => {
      const db2 = getTestDb({databaseId: 'notDefault', projectId: 'random'});

      expect(() => {
        firestore.pipeline().collection(db2.collection('foo'));
      }).to.throw(/Invalid CollectionReference/);

      await db2.terminate();
    });

    it('reject DocumentReference for another DB', async () => {
      const db2 = getTestDb({databaseId: 'notDefault', projectId: 'random'});

      expect(() => {
        firestore.pipeline().documents([db2.doc('foo/bar')]);
      }).to.throw(/Invalid DocumentReference/);

      await db2.terminate();
    });

    it('supports collection group as source', async () => {
      const randomSubCollectionId = Math.random().toString(16).slice(2);
      const doc1 = await randomCol
        .doc('book1')
        .collection(randomSubCollectionId)
        .add({order: 1});
      const doc2 = await randomCol
        .doc('book2')
        .collection(randomSubCollectionId)
        .add({order: 2});
      const snapshot = await firestore
        .pipeline()
        .collectionGroup(randomSubCollectionId)
        .sort(ascending('order'))
        .execute();
      expectResults(snapshot, doc1.id, doc2.id);
    });

    it('supports database as source', async () => {
      const randomId = Math.random().toString(16).slice(2);
      const doc1 = await randomCol.doc('book1').collection('sub').add({
        order: 1,
        randomId,
      });
      const doc2 = await randomCol.doc('book2').collection('sub').add({
        order: 2,
        randomId,
      });
      const snapshot = await firestore
        .pipeline()
        .database()
        .where(equal('randomId', randomId))
        .sort(ascending('order'))
        .execute();
      expectResults(snapshot, doc1.id, doc2.id);
    });
  });

  describe('supported data types', () => {
    it('accepts and returns all data types', async () => {
      const refDate = new Date();
      const refTimestamp = Timestamp.now();
      const constants = [
        constant(1).as('number'),
        constant('a string').as('string'),
        constant(true).as('boolean'),
        constant(null).as('null'),
        constant(new GeoPoint(0.1, 0.2)).as('geoPoint'),
        constant(refTimestamp).as('timestamp'),
        constant(refDate).as('date'),
        constant(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0])).as('bytes'),
        constant(firestore.doc('foo/bar')).as('documentReference'),
        constant(FieldValue.vector([1, 2, 3])).as('vectorValue'),
        map({
          number: 1,
          string: 'a string',
          boolean: true,
          null: null,
          geoPoint: new GeoPoint(0.1, 0.2),
          timestamp: refTimestamp,
          date: refDate,
          uint8Array: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0]),
          documentReference: firestore.doc('foo/bar'),
          vectorValue: FieldValue.vector([1, 2, 3]),
          map: {
            number: 2,
            string: 'b string',
          },
          array: [1, 'c string'],
        }).as('map'),
        array([
          1,
          'a string',
          true,
          null,
          new GeoPoint(0.1, 0.2),
          refTimestamp,
          refDate,
          new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0]),
          firestore.doc('foo/bar'),
          FieldValue.vector([1, 2, 3]),
          {
            number: 2,
            string: 'b string',
          },
        ]).as('array'),
      ];

      const snapshots = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(constants[0], ...constants.slice(1))
        .execute();

      expectResults(snapshots, {
        number: 1,
        string: 'a string',
        boolean: true,
        null: null,
        geoPoint: new GeoPoint(0.1, 0.2),
        timestamp: refTimestamp,
        date: Timestamp.fromDate(refDate),
        bytes: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0]),
        documentReference: firestore.collection('foo').doc('bar'),
        vectorValue: FieldValue.vector([1, 2, 3]),
        map: {
          number: 1,
          string: 'a string',
          boolean: true,
          null: null,
          geoPoint: new GeoPoint(0.1, 0.2),
          timestamp: refTimestamp,
          date: Timestamp.fromDate(refDate),
          uint8Array: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0]),
          documentReference: firestore.collection('foo').doc('bar'),
          vectorValue: FieldValue.vector([1, 2, 3]),
          map: {
            number: 2,
            string: 'b string',
          },
          array: [1, 'c string'],
        },
        array: [
          1,
          'a string',
          true,
          null,
          new GeoPoint(0.1, 0.2),
          refTimestamp,
          Timestamp.fromDate(refDate),
          new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0]),
          firestore.collection('foo').doc('bar'),
          FieldValue.vector([1, 2, 3]),
          {
            number: 2,
            string: 'b string',
          },
        ],
      });
    });

    it('throws on undefined in a map', async () => {
      try {
        await firestore
          .pipeline()
          .collection(randomCol.path)
          .limit(1)
          .select(
            map({
              number: 1,
              bad: undefined,
            }).as('foo'),
          )
          .execute();
        expect.fail('The statement above was expected to throw.');
      } catch (e: unknown) {
        const error = e as Error;
        console.log(error.message);
        expect(error.message).to.contain(
          'Value for argument "value" is not a valid map value. Cannot use "undefined" as a Firestore value (found in field "bad").',
        );
      }
    });

    it('throws on undefined in an array', async () => {
      try {
        await firestore
          .pipeline()
          .collection(randomCol.path)
          .limit(1)
          .select(array([1, undefined]).as('foo'))
          .execute();
        expect.fail('The statement above was expected to throw.');
      } catch (e: unknown) {
        const error = e as Error;
        console.log(error.message);
        expect(error.message).to.contain(
          'Value for argument "value" is not a valid array value. Cannot use "undefined" as a Firestore value',
        );
      }
    });

    it('ignores undefined in a map if ignoreUndefinedProperties is true', async () => {
      const customFirestore = getTestDb({
        ignoreUndefinedProperties: true,
      });

      const snapshot = await customFirestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(
          map({
            number: 1,
            bad: undefined,
          }).as('foo'),
        )
        .execute();

      const data = snapshot.results[0].data();
      expect(data).to.deep.equal({foo: {number: 1}});
      await customFirestore.terminate();
    });

    it('ignores undefined in an array if ignoreUndefinedProperties is true', async () => {
      const customFirestore = getTestDb({
        ignoreUndefinedProperties: true,
      });

      const snapshot = await customFirestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(array([1, undefined, 3]).as('foo'))
        .execute();

      const data = snapshot.results[0].data();
      expect(data).to.deep.equal({foo: [1, 3]});
      await customFirestore.terminate();
    });

    it('converts arrays and plain objects to functionValues if the customer intent is unspecified', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          'title',
          'author',
          'genre',
          'rating',
          'published',
          'tags',
          'awards',
        )
        .addFields(
          array([
            1,
            2,
            field('genre'),
            multiply('rating', 10),
            [field('title')],
            {
              published: field('published'),
            },
          ]).as('metadataArray'),
          map({
            genre: field('genre'),
            rating: multiply('rating', 10),
            nestedArray: [field('title')],
            nestedMap: {
              published: field('published'),
            },
          }).as('metadata'),
        )
        .where(
          and(
            equal('metadataArray', [
              1,
              2,
              field('genre'),
              multiply('rating', 10),
              [field('title')],
              {
                published: field('published'),
              },
            ]),
            equal('metadata', {
              genre: field('genre'),
              rating: multiply('rating', 10),
              nestedArray: [field('title')],
              nestedMap: {
                published: field('published'),
              },
            }),
          ),
        )
        .execute();

      expect(snapshot.results.length).to.equal(1);

      expectResults(snapshot, {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        published: 1954,
        rating: 4.7,
        tags: ['adventure', 'magic', 'epic'],
        awards: {hugo: false, nebula: false},
        metadataArray: [
          1,
          2,
          'Fantasy',
          47,
          ['The Lord of the Rings'],
          {
            published: 1954,
          },
        ],
        metadata: {
          genre: 'Fantasy',
          rating: 47,
          nestedArray: ['The Lord of the Rings'],
          nestedMap: {
            published: 1954,
          },
        },
      });
    });
  });

  describe('stages', () => {
    describe('aggregate stage', () => {
      it('supports aggregate', async () => {
        let snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate(countAll().as('count'))
          .execute();
        expectResults(snapshot, {count: 10});

        snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('genre', 'Science Fiction'))
          .aggregate(
            countAll().as('count'),
            average('rating').as('avgRating'),
            maximum('rating').as('maxRating'),
            sum('rating').as('sumRating'),
          )
          .execute();
        expectResults(snapshot, {
          count: 2,
          avgRating: 4.4,
          maxRating: 4.6,
          sumRating: 8.8,
        });
      });

      it('throws on duplicate aliases', async () => {
        expect(() =>
          firestore
            .pipeline()
            .collection(randomCol.path)
            .aggregate(countAll().as('count'), count('foo').as('count')),
        ).to.throw("Duplicate alias or field 'count'");
      });

      it('throws on duplicate group aliases', async () => {
        expect(() =>
          firestore
            .pipeline()
            .collection(randomCol.path)
            .aggregate({
              accumulators: [countAll().as('count')],
              groups: ['bax', field('bar').as('bax')],
            }),
        ).to.throw("Duplicate alias or field 'bax'");
      });

      it('supports aggregate options', async () => {
        let snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate({
            accumulators: [countAll().as('count')],
          })
          .execute();
        expectResults(snapshot, {count: 10});

        snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('genre', 'Science Fiction'))
          .aggregate(
            countAll().as('count'),
            average('rating').as('avgRating'),
            maximum('rating').as('maxRating'),
            sum('rating').as('sumRating'),
          )
          .execute();
        expectResults(snapshot, {
          count: 2,
          avgRating: 4.4,
          maxRating: 4.6,
          sumRating: 8.8,
        });
      });

      it('rejects groups without accumulators', async () => {
        void expect(async () => {
          await firestore
            .pipeline()
            .collection(randomCol.path)
            .where(lessThan('published', 1900))
            .aggregate({
              accumulators: [],
              groups: ['genre'],
            })
            .execute();
        }).to.throw;
      });

      it('returns group and accumulate results', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(lessThan(field('published'), 1984))
          .aggregate({
            accumulators: [average('rating').as('avgRating')],
            groups: ['genre'],
          })
          .where(greaterThan('avgRating', 4.3))
          .sort(field('avgRating').descending())
          .execute();
        expectResults(
          snapshot,
          {avgRating: 4.7, genre: 'Fantasy'},
          {avgRating: 4.5, genre: 'Romance'},
          {avgRating: 4.4, genre: 'Science Fiction'},
        );
      });

      it('returns min, max, count, and countAll accumulations', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate(
            count('cost').as('booksWithCost'),
            countAll().as('count'),
            maximum('rating').as('maxRating'),
            minimum('published').as('minPublished'),
          )
          .execute();
        expectResults(snapshot, {
          booksWithCost: 1,
          count: 10,
          maxRating: 4.7,
          minPublished: 1813,
        });
      });

      it('returns countif accumulation', async () => {
        let snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate(countIf(field('rating').greaterThan(4.3)).as('count'))
          .execute();
        const expectedResults = {
          count: 3,
        };
        expectResults(snapshot, expectedResults);

        snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate(field('rating').greaterThan(4.3).countIf().as('count'))
          .execute();
        expectResults(snapshot, expectedResults);
      });

      it('returns countDistinct accumulation', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate(countDistinct('genre').as('distinctGenres'))
          .execute();
        expectResults(snapshot, {distinctGenres: 8});
      });
    });

    describe('distinct stage', () => {
      it('returns distinct values as expected', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .distinct('genre', 'author')
          .sort(field('genre').ascending(), field('author').ascending())
          .execute();
        expectResults(
          snapshot,
          {genre: 'Dystopian', author: 'George Orwell'},
          {genre: 'Dystopian', author: 'Margaret Atwood'},
          {genre: 'Fantasy', author: 'J.R.R. Tolkien'},
          {genre: 'Magical Realism', author: 'Gabriel García Márquez'},
          {genre: 'Modernist', author: 'F. Scott Fitzgerald'},
          {genre: 'Psychological Thriller', author: 'Fyodor Dostoevsky'},
          {genre: 'Romance', author: 'Jane Austen'},
          {genre: 'Science Fiction', author: 'Douglas Adams'},
          {genre: 'Science Fiction', author: 'Frank Herbert'},
          {genre: 'Southern Gothic', author: 'Harper Lee'},
        );
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .distinct('genre', 'author')
          .sort({
            orderings: [
              field('genre').ascending(),
              field('author').ascending(),
            ],
          })
          .execute();
        expectResults(
          snapshot,
          {genre: 'Dystopian', author: 'George Orwell'},
          {genre: 'Dystopian', author: 'Margaret Atwood'},
          {genre: 'Fantasy', author: 'J.R.R. Tolkien'},
          {genre: 'Magical Realism', author: 'Gabriel García Márquez'},
          {genre: 'Modernist', author: 'F. Scott Fitzgerald'},
          {genre: 'Psychological Thriller', author: 'Fyodor Dostoevsky'},
          {genre: 'Romance', author: 'Jane Austen'},
          {genre: 'Science Fiction', author: 'Douglas Adams'},
          {genre: 'Science Fiction', author: 'Frank Herbert'},
          {genre: 'Southern Gothic', author: 'Harper Lee'},
        );
      });
    });

    describe('select stage', () => {
      it('can select fields', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .sort(field('author').ascending())
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
          },
          {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
          {title: 'Dune', author: 'Frank Herbert'},
          {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky'},
          {
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel García Márquez',
          },
          {title: '1984', author: 'George Orwell'},
          {title: 'To Kill a Mockingbird', author: 'Harper Lee'},
          {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
          {title: 'Pride and Prejudice', author: 'Jane Austen'},
          {title: "The Handmaid's Tale", author: 'Margaret Atwood'},
        );
      });

      it('throws on duplicate aliases', async () => {
        expect(() => {
          firestore
            .pipeline()
            .collection(randomCol.path)
            .limit(1)
            .select(constant(1).as('foo'), constant(2).as('foo'));
        }).to.throw("Duplicate alias or field 'foo'");
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select({selections: ['title', field('author').as('auth0r')]})
          .sort(field('auth0r').ascending())
          .limit(2)
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            auth0r: 'Douglas Adams',
          },
          {title: 'The Great Gatsby', auth0r: 'F. Scott Fitzgerald'},
        );
      });
    });

    describe('addField stage', () => {
      it('can add fields', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .addFields(constant('bar').as('foo'))
          .sort(field('author').ascending())
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            foo: 'bar',
          },
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            foo: 'bar',
          },
          {title: 'Dune', author: 'Frank Herbert', foo: 'bar'},
          {
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            foo: 'bar',
          },
          {
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel García Márquez',
            foo: 'bar',
          },
          {title: '1984', author: 'George Orwell', foo: 'bar'},
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            foo: 'bar',
          },
          {
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            foo: 'bar',
          },
          {title: 'Pride and Prejudice', author: 'Jane Austen', foo: 'bar'},
          {
            title: "The Handmaid's Tale",
            author: 'Margaret Atwood',
            foo: 'bar',
          },
        );
      });

      it('throws on duplicate aliases', async () => {
        expect(() =>
          firestore
            .pipeline()
            .collection(randomCol.path)
            .select('title', 'author')
            .addFields(constant('bar').as('foo'), constant('baz').as('foo'))
            .sort(field('author').ascending()),
        ).to.throw("Duplicate alias or field 'foo'");
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .addFields({
            fields: [constant('bar').as('foo')],
          })
          .sort(field('author').ascending())
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            foo: 'bar',
          },
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            foo: 'bar',
          },
          {title: 'Dune', author: 'Frank Herbert', foo: 'bar'},
          {
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            foo: 'bar',
          },
          {
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel García Márquez',
            foo: 'bar',
          },
          {title: '1984', author: 'George Orwell', foo: 'bar'},
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            foo: 'bar',
          },
          {
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            foo: 'bar',
          },
          {title: 'Pride and Prejudice', author: 'Jane Austen', foo: 'bar'},
          {
            title: "The Handmaid's Tale",
            author: 'Margaret Atwood',
            foo: 'bar',
          },
        );
      });
    });

    describe('removeFields stage', () => {
      it('can remove fields', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .sort(field('author').ascending())
          .removeFields(field('author'))
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
          },
          {
            title: 'The Great Gatsby',
          },
          {title: 'Dune'},
          {
            title: 'Crime and Punishment',
          },
          {
            title: 'One Hundred Years of Solitude',
          },
          {title: '1984'},
          {
            title: 'To Kill a Mockingbird',
          },
          {
            title: 'The Lord of the Rings',
          },
          {title: 'Pride and Prejudice'},
          {
            title: "The Handmaid's Tale",
          },
        );
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author', 'genre')
          .sort(field('author').ascending())
          .removeFields({
            fields: [field('author'), 'genre'],
          })
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
          },
          {
            title: 'The Great Gatsby',
          },
          {title: 'Dune'},
          {
            title: 'Crime and Punishment',
          },
          {
            title: 'One Hundred Years of Solitude',
          },
          {title: '1984'},
          {
            title: 'To Kill a Mockingbird',
          },
          {
            title: 'The Lord of the Rings',
          },
          {title: 'Pride and Prejudice'},
          {
            title: "The Handmaid's Tale",
          },
        );
      });
    });

    describe('findNearest stage', () => {
      it('can find nearest', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .sort(field('author').ascending())
          .removeFields(field('author'))
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
          },
          {
            title: 'The Great Gatsby',
          },
          {title: 'Dune'},
          {
            title: 'Crime and Punishment',
          },
          {
            title: 'One Hundred Years of Solitude',
          },
          {title: '1984'},
          {
            title: 'To Kill a Mockingbird',
          },
          {
            title: 'The Lord of the Rings',
          },
          {title: 'Pride and Prejudice'},
          {
            title: "The Handmaid's Tale",
          },
        );
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author', 'genre')
          .sort(field('author').ascending())
          .removeFields({
            fields: [field('author'), 'genre'],
          })
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
          },
          {
            title: 'The Great Gatsby',
          },
          {title: 'Dune'},
          {
            title: 'Crime and Punishment',
          },
          {
            title: 'One Hundred Years of Solitude',
          },
          {title: '1984'},
          {
            title: 'To Kill a Mockingbird',
          },
          {
            title: 'The Lord of the Rings',
          },
          {title: 'Pride and Prejudice'},
          {
            title: "The Handmaid's Tale",
          },
        );
      });
    });

    describe('where stage', () => {
      it('where with and (2 conditions)', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(
            and(
              greaterThan('rating', 4.5),
              equalAny('genre', ['Science Fiction', 'Romance', 'Fantasy']),
            ),
          )
          .execute();
        expectResults(snapshot, 'book10', 'book4');
      });

      it('where with and (3 conditions)', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(
            and(
              greaterThan('rating', 4.5),
              equalAny('genre', ['Science Fiction', 'Romance', 'Fantasy']),
              lessThan('published', 1965),
            ),
          )
          .execute();
        expectResults(snapshot, 'book4');
      });

      it('where with or', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(
            or(
              equal('genre', 'Romance'),
              equal('genre', 'Dystopian'),
              equal('genre', 'Fantasy'),
            ),
          )
          .sort(ascending('title'))
          .select('title')
          .execute();
        expectResults(
          snapshot,
          {title: '1984'},
          {title: 'Pride and Prejudice'},
          {title: "The Handmaid's Tale"},
          {title: 'The Lord of the Rings'},
        );
      });

      it('where with xor', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(
            xor(
              equal('genre', 'Romance'),
              equal('genre', 'Dystopian'),
              equal('genre', 'Fantasy'),
              equal('published', 1949),
            ),
          )
          .select('title')
          .execute();
        expectResults(
          snapshot,
          {title: 'Pride and Prejudice'},
          {title: 'The Lord of the Rings'},
          {title: "The Handmaid's Tale"},
        );
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where({
            condition: and(
              greaterThan('rating', 4.5),
              equalAny('genre', ['Science Fiction', 'Romance', 'Fantasy']),
            ),
          })
          .execute();
        expectResults(snapshot, 'book10', 'book4');
      });
    });

    describe('sort, offset, and limit stages', () => {
      it('supports sort, offset, and limits', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sort(field('author').ascending())
          .offset(5)
          .limit(3)
          .select('title', 'author')
          .execute();
        expectResults(
          snapshot,
          {title: '1984', author: 'George Orwell'},
          {title: 'To Kill a Mockingbird', author: 'Harper Lee'},
          {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
        );
      });

      it('sort, offset, and limit stages support options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sort({
            orderings: [field('author').ascending()],
          })
          .offset({offset: 5})
          .limit({limit: 3})
          .select('title', 'author')
          .execute();
        expectResults(
          snapshot,
          {title: '1984', author: 'George Orwell'},
          {title: 'To Kill a Mockingbird', author: 'Harper Lee'},
          {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
        );
      });
    });

    describe('error handling', () => {
      it('error properties are propagated from the firestore backend', async () => {
        try {
          await firestore
            .pipeline()
            .collection(randomCol.path)
            .rawStage('select', [
              // incorrect parameter type
              field('title'),
            ])
            .execute();

          expect.fail('expected pipeline.execute() to throw');
        } catch (e: unknown) {
          expect(e instanceof Error).to.be.true;
          const err = e as ServiceError;
          expect(err['code']).to.equal(3);
          expect(typeof err['message']).to.equal('string');
          expect(typeof err['details']).to.equal('string');
          expect(typeof err['stack']).to.equal('string');
          expect(err['metadata'] instanceof Object).to.be.true;

          expect(err['message']).to.equal(
            `${err.code} INVALID_ARGUMENT: ${err.details}`,
          );
        }
      });

      it('can access explain stats in error condition', async () => {
        try {
          await firestore
            .pipeline()
            .collection(randomCol.path)
            .sort(field('rating').ascending())
            .execute({
              explainOptions: {
                mode: 'analyze',
              },
              rawOptions: {
                memory_limit: 1,
              },
            });

          expect.fail('expected pipeline.execute() to throw');
        } catch (e: unknown) {
          const err = e as {[k: string]: unknown};
          expect(err instanceof Error).to.be.true;

          expect(err['code']).to.equal(8);
          expect(typeof err['message']).to.equal('string');
          expect(typeof err['details']).to.equal('string');
          expect(typeof err['stack']).to.equal('string');
          expect(err['metadata'] instanceof Object).to.be.true;

          expect(err['message']).to.equal(
            `${err.code} RESOURCE_EXHAUSTED: ${err.details}`,
          );

          expect('statusDetails' in err).to.be.true;
          expect(Array.isArray(err['statusDetails'])).to.be.true;

          const statusDetails = err['statusDetails'] as Array<object>;

          const foundExplainStats = statusDetails.find(x => {
            return (
              'type_url' in x &&
              x['type_url'] ===
                'type.googleapis.com/google.firestore.v1.ExplainStats'
            );
          });
          expect(foundExplainStats).to.not.be.undefined;
        }
      });
    });

    describe('raw stage', () => {
      it('can select fields', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .rawStage('select', [
            {
              title: field('title'),
              metadata: {
                author: field('author'),
              },
            },
          ])
          .sort(field('author').ascending())
          .limit(1)
          .execute();
        expectResults(snapshot, {
          metadata: {
            author: 'Frank Herbert',
          },
          title: 'Dune',
        });
      });

      it('can add fields', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sort(field('author').ascending())
          .limit(1)
          .select('title', 'author')
          .rawStage('add_fields', [
            {
              display: stringConcat('title', ' - ', field('author')),
            },
          ])
          .execute();
        expectResults(snapshot, {
          title: "The Hitchhiker's Guide to the Galaxy",
          author: 'Douglas Adams',
          display: "The Hitchhiker's Guide to the Galaxy - Douglas Adams",
        });
      });

      it('can filter with where', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .rawStage('where', [field('author').equal('Douglas Adams')])
          .execute();
        expectResults(snapshot, {
          title: "The Hitchhiker's Guide to the Galaxy",
          author: 'Douglas Adams',
        });
      });

      it('can limit, offset, and sort', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author')
          .rawStage('sort', [
            {
              direction: 'ascending',
              expression: field('author'),
            },
          ])
          .rawStage('offset', [3])
          .rawStage('limit', [1])
          .execute();
        expectResults(snapshot, {
          author: 'Fyodor Dostoevsky',
          title: 'Crime and Punishment',
        });
      });

      it('can perform aggregate query', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author', 'rating')
          .rawStage('aggregate', [
            {averageRating: field('rating').average()},
            {},
          ])
          .execute();
        expectResults(snapshot, {
          averageRating: 4.3100000000000005,
        });
      });

      it('can perform distinct query', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .select('title', 'author', 'rating')
          .rawStage('distinct', [{rating: field('rating')}])
          .sort(field('rating').descending())
          .execute();
        expectResults(
          snapshot,
          {
            rating: 4.7,
          },
          {
            rating: 4.6,
          },
          {
            rating: 4.5,
          },
          {
            rating: 4.3,
          },
          {
            rating: 4.2,
          },
          {
            rating: 4.1,
          },
          {
            rating: 4.0,
          },
        );
      });

      it('can perform FindNearest query', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol)
          .rawStage(
            'find_nearest',
            [
              field('embedding'),
              FieldValue.vector([10, 1, 2, 1, 1, 1, 1, 1, 1, 1]),
              'euclidean',
            ],
            {
              distance_field: field('computedDistance'),
              limit: 2,
            },
          )
          .select('title', 'computedDistance')
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            computedDistance: 1,
          },
          {
            title: 'One Hundred Years of Solitude',
            computedDistance: 12.041594578792296,
          },
        );
      });
    });

    describe('replaceWith stage', () => {
      it('run pipeline with replaceWith field name', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .replaceWith('awards')
          .execute();
        expectResults(snapshot, {
          hugo: true,
          nebula: false,
          others: {unknown: {year: 1980}},
        });
      });

      it('run pipeline with replaceWith Expression result', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .replaceWith(
            map({
              foo: 'bar',
              baz: {
                title: field('title'),
              },
            }),
          )
          .execute();
        expectResults(snapshot, {
          foo: 'bar',
          baz: {title: "The Hitchhiker's Guide to the Galaxy"},
        });
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .replaceWith({map: 'awards'})
          .execute();
        expectResults(snapshot, {
          hugo: true,
          nebula: false,
          others: {unknown: {year: 1980}},
        });
      });
    });

    describe('sample stage', () => {
      it('run pipeline with sample limit of 3', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sample(3)
          .execute();
        expect(snapshot.results.length).to.equal(3);
      });

      it('run pipeline with sample limit of {documents: 3}', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sample({documents: 3})
          .execute();
        expect(snapshot.results.length).to.equal(3);
      });

      it('run pipeline with sample limit of {percentage: 0.6}', async () => {
        let avgSize = 0;
        const numIterations = 30;
        for (let i = 0; i < numIterations; i++) {
          const snapshot = await firestore
            .pipeline()
            .collection(randomCol.path)
            .sample({percentage: 0.6})
            .execute();

          avgSize += snapshot.results.length;
        }
        avgSize /= numIterations;
        expect(avgSize).to.be.closeTo(6, 1);
      });
    });

    describe('union stage', () => {
      it('run pipeline with union', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .union(firestore.pipeline().collection(randomCol.path))
          .sort(field(FieldPath.documentId()).ascending())
          .execute();
        expectResults(
          snapshot,
          'book1',
          'book1',
          'book10',
          'book10',
          'book2',
          'book2',
          'book3',
          'book3',
          'book4',
          'book4',
          'book5',
          'book5',
          'book6',
          'book6',
          'book7',
          'book7',
          'book8',
          'book8',
          'book9',
          'book9',
        );
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .union({other: firestore.pipeline().collection(randomCol.path)})
          .sort(field(FieldPath.documentId()).ascending())
          .execute();
        expectResults(
          snapshot,
          'book1',
          'book1',
          'book10',
          'book10',
          'book2',
          'book2',
          'book3',
          'book3',
          'book4',
          'book4',
          'book5',
          'book5',
          'book6',
          'book6',
          'book7',
          'book7',
          'book8',
          'book8',
          'book9',
          'book9',
        );
      });
    });

    describe('unnest stage', () => {
      it('run pipeline with unnest', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .unnest(field('tags').as('tag'))
          .select(
            'title',
            'author',
            'genre',
            'published',
            'rating',
            'tags',
            'tag',
            'awards',
            'nestedField',
          )
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'comedy',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'space',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'adventure',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
          },
        );
      });

      it('unnest with index field', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .unnest(field('tags').as('tag'), 'tagsIndex')
          .select(
            'title',
            'author',
            'genre',
            'published',
            'rating',
            'tags',
            'tag',
            'awards',
            'nestedField',
            'tagsIndex',
          )
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'comedy',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
            tagsIndex: 0,
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'space',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
            tagsIndex: 1,
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'adventure',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
            tagsIndex: 2,
          },
        );
      });

      it('unnest an expr', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .unnest(array([1, 2, 3]).as('copy'))
          .select(
            'title',
            'author',
            'genre',
            'published',
            'rating',
            'tags',
            'copy',
            'awards',
            'nestedField',
          )
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            copy: 1,
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            copy: 2,
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            copy: 3,
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
          },
        );
      });

      it('supports options', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(equal('title', "The Hitchhiker's Guide to the Galaxy"))
          .unnest({
            selectable: field('tags').as('tag'),
            indexField: 'tagsIndex',
          })
          .select(
            'title',
            'author',
            'genre',
            'published',
            'rating',
            'tags',
            'tag',
            'awards',
            'nestedField',
            'tagsIndex',
          )
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'comedy',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
            tagsIndex: 0,
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'space',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
            tagsIndex: 1,
          },
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            published: 1979,
            rating: 4.2,
            tags: ['comedy', 'space', 'adventure'],
            tag: 'adventure',
            awards: {
              hugo: true,
              nebula: false,
              others: {unknown: {year: 1980}},
            },
            nestedField: {'level.1': {'level.2': true}},
            tagsIndex: 2,
          },
        );
      });
    });

    describe('findNearest stage', () => {
      it('run pipeline with findNearest', async () => {
        const measures: Array<
          Pipelines.FindNearestStageOptions['distanceMeasure']
        > = ['euclidean', 'dot_product', 'cosine'];
        for (const measure of measures) {
          const snapshot = await firestore
            .pipeline()
            .collection(randomCol)
            .findNearest({
              field: 'embedding',
              vectorValue: FieldValue.vector([10, 1, 3, 1, 2, 1, 1, 1, 1, 1]),
              limit: 3,
              distanceMeasure: measure,
            })
            .select('title')
            .execute();
          expectResults(
            snapshot,
            {
              title: "The Hitchhiker's Guide to the Galaxy",
            },
            {
              title: 'One Hundred Years of Solitude',
            },
            {
              title: "The Handmaid's Tale",
            },
          );
        }
      });

      it('optionally returns the computed distance', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol)
          .findNearest({
            field: 'embedding',
            vectorValue: FieldValue.vector([10, 1, 2, 1, 1, 1, 1, 1, 1, 1]),
            limit: 2,
            distanceMeasure: 'euclidean',
            distanceField: 'computedDistance',
          })
          .select('title', 'computedDistance')
          .execute();
        expectResults(
          snapshot,
          {
            title: "The Hitchhiker's Guide to the Galaxy",
            computedDistance: 1,
          },
          {
            title: 'One Hundred Years of Solitude',
            computedDistance: 12.041594578792296,
          },
        );
      });
    });
  });

  describe('function expressions', () => {
    it('logical max works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(
          'title',
          logicalMaximum(constant(1960), field('published'), 1961).as(
            'published-safe',
          ),
        )
        .sort(field('title').ascending())
        .limit(3)
        .execute();
      expectResults(
        snapshot,
        {title: '1984', 'published-safe': 1961},
        {title: 'Crime and Punishment', 'published-safe': 1961},
        {title: 'Dune', 'published-safe': 1965},
      );
    });

    it('logical min works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(
          'title',
          logicalMinimum(constant(1960), field('published'), 1961).as(
            'published-safe',
          ),
        )
        .sort(field('title').ascending())
        .limit(3)
        .execute();
      expectResults(
        snapshot,
        {title: '1984', 'published-safe': 1949},
        {title: 'Crime and Punishment', 'published-safe': 1866},
        {title: 'Dune', 'published-safe': 1960},
      );
    });

    it('conditional works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(
          'title',
          conditional(
            lessThan(field('published'), 1960),
            constant(1960),
            field('published'),
          ).as('published-safe'),
          field('rating')
            .greaterThanOrEqual(4.5)
            .conditional(constant('great'), constant('good'))
            .as('rating'),
        )
        .sort(field('title').ascending())
        .limit(3)
        .execute();
      expectResults(
        snapshot,
        {title: '1984', 'published-safe': 1960, rating: 'good'},
        {
          title: 'Crime and Punishment',
          'published-safe': 1960,
          rating: 'good',
        },
        {title: 'Dune', 'published-safe': 1965, rating: 'great'},
      );
    });

    it('equalAny works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(equalAny('published', [1979, 1999, 1967]))
        .sort(descending('title'))
        .select('title')
        .execute();
      expectResults(
        snapshot,
        {title: "The Hitchhiker's Guide to the Galaxy"},
        {title: 'One Hundred Years of Solitude'},
      );
    });

    it('notEqualAny works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(
          notEqualAny(
            'published',
            [1965, 1925, 1949, 1960, 1866, 1985, 1954, 1967, 1979],
          ),
        )
        .select('title')
        .execute();
      expectResults(snapshot, {title: 'Pride and Prejudice'});
    });

    it('arrayContains works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(arrayContains('tags', 'comedy'))
        .select('title')
        .execute();
      expectResults(snapshot, {
        title: "The Hitchhiker's Guide to the Galaxy",
      });
    });

    it('arrayContainsAny works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(arrayContainsAny('tags', ['comedy', 'classic']))
        .sort(descending('title'))
        .select('title')
        .execute();
      expectResults(
        snapshot,
        {title: "The Hitchhiker's Guide to the Galaxy"},
        {title: 'Pride and Prejudice'},
      );
    });

    it('arrayContainsAll works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(arrayContainsAll('tags', ['adventure', 'magic']))
        .select('title')
        .execute();
      expectResults(snapshot, {title: 'The Lord of the Rings'});
    });

    it('arrayLength works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(arrayLength('tags').as('tagsCount'))
        .where(equal('tagsCount', 3))
        .execute();
      expect(snapshot.results.length).to.equal(10);
    });

    it('testStrConcat', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('author'))
        .select(
          field('author').stringConcat(' - ', field('title')).as('bookInfo'),
        )
        .limit(1)
        .execute();
      expectResults(snapshot, {
        bookInfo: "Douglas Adams - The Hitchhiker's Guide to the Galaxy",
      });
    });

    it('testStartsWith', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(startsWith('title', 'The'))
        .select('title')
        .sort(field('title').ascending())
        .execute();
      expectResults(
        snapshot,
        {title: 'The Great Gatsby'},
        {title: "The Handmaid's Tale"},
        {title: "The Hitchhiker's Guide to the Galaxy"},
        {title: 'The Lord of the Rings'},
      );
    });

    it('testEndsWith', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(endsWith('title', 'y'))
        .select('title')
        .sort(field('title').descending())
        .execute();
      expectResults(
        snapshot,
        {title: "The Hitchhiker's Guide to the Galaxy"},
        {title: 'The Great Gatsby'},
      );
    });

    it('testStrContains', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(stringContains('title', "'s"))
        .select('title')
        .sort(field('title').ascending())
        .execute();
      expectResults(
        snapshot,
        {title: "The Handmaid's Tale"},
        {title: "The Hitchhiker's Guide to the Galaxy"},
      );
    });

    it('testLength', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(charLength('title').as('titleLength'), field('title'))
        .where(greaterThan('titleLength', 20))
        .sort(field('title').ascending())
        .execute();

      expectResults(
        snapshot,

        {
          titleLength: 29,
          title: 'One Hundred Years of Solitude',
        },
        {
          titleLength: 36,
          title: "The Hitchhiker's Guide to the Galaxy",
        },
        {
          titleLength: 21,
          title: 'The Lord of the Rings',
        },
        {
          titleLength: 21,
          title: 'To Kill a Mockingbird',
        },
      );
    });

    it('testLike', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(like('title', '%Guide%'))
        .select('title')
        .execute();
      expectResults(snapshot, {
        title: "The Hitchhiker's Guide to the Galaxy",
      });
    });

    it('testRegexContains', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(regexContains('title', '(?i)(the|of)'))
        .execute();
      expect(snapshot.results.length).to.equal(5);
    });

    it('testRegexFind', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(regexFind('title', '^\\w+').as('firstWordInTitle'))
        .select('firstWordInTitle')
        .sort(field('firstWordInTitle').ascending())
        .limit(3)
        .execute();
      expectResults(
        snapshot,
        {firstWordInTitle: '1984'},
        {firstWordInTitle: 'Crime'},
        {firstWordInTitle: 'Dune'},
      );
    });

    it('testRegexFindAll', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(regexFindAll('title', '\\w+').as('wordsInTitle'))
        .select('wordsInTitle')
        .sort(field('wordsInTitle').ascending())
        .limit(3)
        .execute();
      expectResults(
        snapshot,
        {wordsInTitle: ['1984']},
        {wordsInTitle: ['Crime', 'and', 'Punishment']},
        {wordsInTitle: ['Dune']},
      );
    });

    it('testRegexMatches', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(regexMatch('title', '.*(?i)(the|of).*'))
        .execute();
      expect(snapshot.results.length).to.equal(5);
    });

    it('testArithmeticOperations', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(equal('title', 'To Kill a Mockingbird'))
        .select(
          add(field('rating'), 1).as('ratingPlusOne'),
          subtract(field('published'), 1900).as('yearsSince1900'),
          field('rating').multiply(10).as('ratingTimesTen'),
          divide('rating', 2).as('ratingDividedByTwo'),
          multiply('rating', 20).as('ratingTimes20'),
          add('rating', 3).as('ratingPlus3'),
          mod('rating', 2).as('ratingMod2'),
        )
        .limit(1)
        .execute();
      expectResults(snapshot, {
        ratingPlusOne: 5.2,
        yearsSince1900: 60,
        ratingTimesTen: 42,
        ratingDividedByTwo: 2.1,
        ratingTimes20: 84,
        ratingPlus3: 7.2,
        ratingMod2: 0.20000000000000018,
      });
    });

    it('testComparisonOperators', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(
          and(
            greaterThan('rating', 4.2),
            lessThanOrEqual(field('rating'), 4.5),
            notEqual('genre', 'Science Fiction'),
          ),
        )
        .select('rating', 'title')
        .sort(field('title').ascending())
        .execute();
      expectResults(
        snapshot,
        {rating: 4.3, title: 'Crime and Punishment'},
        {
          rating: 4.3,
          title: 'One Hundred Years of Solitude',
        },
        {rating: 4.5, title: 'Pride and Prejudice'},
      );
    });

    it('testLogicalOperators', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(
          or(
            and(greaterThan('rating', 4.5), equal('genre', 'Science Fiction')),
            lessThan('published', 1900),
          ),
        )
        .select('title')
        .sort(field('title').ascending())
        .execute();
      expectResults(
        snapshot,
        {title: 'Crime and Punishment'},
        {title: 'Dune'},
        {title: 'Pride and Prejudice'},
      );
    });

    it('testChecks', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          equal('rating', null).as('ratingIsNull'),
          equal('rating', NaN).as('ratingIsNaN'),
          isError(divide(constant(1), constant(0))).as('isError'),
          ifError(divide(constant(1), constant(0)), constant('was error')).as(
            'ifError',
          ),
          ifError(
            divide(constant(1), constant(0)).greaterThan(1),
            constant(true),
          )
            .not()
            .as('ifErrorBooleanExpression'),
          isAbsent('foo').as('isAbsent'),
          notEqual('title', null).as('titleIsNotNull'),
          notEqual('cost', NaN).as('costIsNotNan'),
          exists('fooBarBaz').as('fooBarBazExists'),
          field('title').exists().as('titleExists'),
        )
        .execute();
      expectResults(snapshot, {
        ratingIsNull: false,
        ratingIsNaN: false,
        isError: true,
        ifError: 'was error',
        ifErrorBooleanExpression: false,
        isAbsent: true,
        titleIsNotNull: true,
        costIsNotNan: false,
        fooBarBazExists: false,
        titleExists: true,
      });

      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          field('rating').equal(null).as('ratingIsNull'),
          field('rating').equal(NaN).as('ratingIsNaN'),
          divide(constant(1), constant(0)).isError().as('isError'),
          divide(constant(1), constant(0))
            .ifError(constant('was error'))
            .as('ifError'),
          divide(constant(1), constant(0))
            .greaterThan(1)
            .ifError(constant(true))
            .not()
            .as('ifErrorBooleanExpression'),
          field('foo').isAbsent().as('isAbsent'),
          field('title').notEqual(null).as('titleIsNotNull'),
          field('cost').notEqual(NaN).as('costIsNotNan'),
        )
        .execute();
      expectResults(snapshot, {
        ratingIsNull: false,
        ratingIsNaN: false,
        isError: true,
        ifError: 'was error',
        ifErrorBooleanExpression: false,
        isAbsent: true,
        titleIsNotNull: true,
        costIsNotNan: false,
      });
    });

    it('testMapGet', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('published').descending())
        .select(
          field('awards').mapGet('hugo').as('hugoAward'),
          field('awards').mapGet('others').as('others'),
          field('title'),
        )
        .where(equal('hugoAward', true))
        .execute();
      expectResults(
        snapshot,
        {
          hugoAward: true,
          title: "The Hitchhiker's Guide to the Galaxy",
          others: {unknown: {year: 1980}},
        },
        {hugoAward: true, title: 'Dune'},
      );
    });

    it('test mapSet', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(map({existingField: map({foo: 1})}))
        .addFields(
          mapSet('existingField', 'bar', 2).as('modifiedField'),
          mapSet(map({}), 'a', 1).as('simple'),
          mapSet(map({a: 1}), 'b', 2).as('add'),
          mapSet(map({a: 1}), 'a', 2).as('overwrite'),
          mapSet(map({a: 1, b: 2}), 'a', 3, 'c', 4).as('multi'),
          mapSet(map({a: 1}), 'a', field('non_existent')).as('remove'),
          mapSet(map({a: 1}), 'b', null).as('setNull'),
          mapSet(map({a: {b: 1}}), 'a.b', 2).as('setDotted'),
          mapSet(map({}), '', 'empty').as('setEmptyKey'),
          mapSet(map({a: 1}), 'b', add(constant(1), constant(2))).as(
            'setExprVal',
          ),
          mapSet(map({}), 'obj', map({hidden: true})).as('setNestedMap'),
          mapSet(map({}), '~!@#$%^&*()_+', 'special').as('setSpecialChars'),
        )
        .execute();
      expectResults(snapshot, {
        existingField: {foo: 1},
        modifiedField: {foo: 1, bar: 2},
        simple: {a: 1},
        add: {a: 1, b: 2},
        overwrite: {a: 2},
        multi: {a: 3, b: 2, c: 4},
        remove: {},
        setNull: {a: 1, b: null},
        setDotted: {a: {b: 1}, 'a.b': 2},
        setEmptyKey: {'': 'empty'},
        setExprVal: {a: 1, b: 3},
        setNestedMap: {obj: {hidden: true}},
        setSpecialChars: {'~!@#$%^&*()_+': 'special'},
      });
    });

    it('test mapKeys', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(map({existingField: map({foo: 1})}))
        .addFields(
          mapKeys('existingField').as('existingKeys'),
          mapKeys(map({a: 1, b: 2})).as('keys'),
          mapKeys(map({})).as('empty_keys'),
          mapKeys(map({a: {nested: true}})).as('nested_keys'),
        )
        .execute();

      const res = snapshot.results[0].data();
      expect(res.existingKeys).to.have.members(['foo']);
      expect(res.keys).to.have.members(['a', 'b']);
      expect(res.empty_keys).to.deep.equal([]);
      expect(res.nested_keys).to.have.members(['a']);
    });

    it('test mapValues', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(map({existingField: map({foo: 1})}))
        .addFields(
          mapValues('existingField').as('existingValues'),
          mapValues(map({a: 1, b: 2})).as('values'),
          mapValues(map({})).as('empty_values'),
          mapValues(map({a: {nested: true}})).as('nested_values'),
        )
        .execute();
      const res = snapshot.results[0].data();
      expect(res.existingValues).to.have.members([1]);
      expect(res.values).to.have.members([1, 2]);
      expect(res.empty_values).to.deep.equal([]);
      expect(res.nested_values).to.deep.include.members([{nested: true}]);
    });

    it('test mapEntries', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(map({existingField: map({foo: 1})}))
        .addFields(
          mapEntries('existingField').as('existingEntries'),
          mapEntries(map({a: 1, b: 2})).as('entries'),
          mapEntries(map({})).as('empty_entries'),
          mapEntries(map({a: {nested: true}})).as('nested_entries'),
        )
        .execute();
      const res = snapshot.results[0].data();
      expect(res.existingEntries).to.deep.include.members([{k: 'foo', v: 1}]);
      expect(res.entries).to.deep.include.members([
        {k: 'a', v: 1},
        {k: 'b', v: 2},
      ]);
      expect(res.empty_entries).to.deep.equal([]);
      expect(res.nested_entries).to.deep.include.members([
        {k: 'a', v: {nested: true}},
      ]);
    });

    it('testDistanceFunctions', async () => {
      const sourceVector = FieldValue.vector([0.1, 0.1]);
      const targetVector = FieldValue.vector([0.5, 0.8]);
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(
          cosineDistance(constant(sourceVector), targetVector).as(
            'cosineDistance',
          ),
          dotProduct(constant(sourceVector), targetVector).as(
            'dotProductDistance',
          ),
          euclideanDistance(constant(sourceVector), targetVector).as(
            'euclideanDistance',
          ),
        )
        .limit(1)
        .execute();

      expectResults(snapshot, {
        cosineDistance: 0.02560880430538015,
        dotProductDistance: 0.13,
        euclideanDistance: 0.806225774829855,
      });

      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(
          constant(sourceVector)
            .cosineDistance(targetVector)
            .as('cosineDistance'),
          constant(sourceVector)
            .dotProduct(targetVector)
            .as('dotProductDistance'),
          constant(sourceVector)
            .euclideanDistance(targetVector)
            .as('euclideanDistance'),
        )
        .limit(1)
        .execute();

      expectResults(snapshot, {
        cosineDistance: 0.02560880430538015,
        dotProductDistance: 0.13,
        euclideanDistance: 0.806225774829855,
      });
    });

    it('testVectorLength', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(
          vectorLength(constant(FieldValue.vector([1, 2, 3]))).as(
            'vectorLength',
          ),
        )
        .execute();
      expectResults(snapshot, {
        vectorLength: 3,
      });
    });

    it('testNestedFields', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(equal('awards.hugo', true))
        .sort(descending('title'))
        .select('title', 'awards.hugo')
        .execute();
      expectResults(
        snapshot,
        {
          title: "The Hitchhiker's Guide to the Galaxy",
          'awards.hugo': true,
        },
        {title: 'Dune', 'awards.hugo': true},
      );
    });

    it('test mapGet with field name including . notation', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(
          map({
            title: 'foo',
            nested: {
              level: {
                '1': 'bar',
              },
              'level.1': {
                'level.2': 'baz',
              },
            },
          }),
        )
        .select(
          'title',
          field('nested.level.1'),
          mapGet('nested', 'level.1').mapGet('level.2').as('nested'),
        )
        .execute();

      expectResults(snapshot, {
        title: 'foo',
        'nested.level.`1`': 'bar',
        nested: 'baz',
      });
    });

    describe('genericFunction', () => {
      it('add selectable', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sort(descending('rating'))
          .limit(1)
          .select(
            new FunctionExpression('add', [field('rating'), constant(1)]).as(
              'rating',
            ),
          )
          .execute();
        expectResults(snapshot, {
          rating: 5.7,
        });
      });

      it('and (variadic) selectable', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(
            new FunctionExpression('and', [
              field('rating').greaterThan(0),
              field('title').charLength().lessThan(5),
              field('tags').arrayContains('propaganda'),
            ]).asBoolean(),
          )
          .select('title')
          .execute();
        expectResults(snapshot, {
          title: '1984',
        });
      });

      it('array contains any', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .where(
            new FunctionExpression('array_contains_any', [
              field('tags'),
              array(['politics']),
            ]).asBoolean(),
          )
          .select('title')
          .execute();
        expectResults(snapshot, {
          title: 'Dune',
        });
      });

      it('countif aggregate', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .aggregate(
            new AggregateFunction('count_if', [
              field('rating').greaterThanOrEqual(4.5),
            ]).as('countOfBest'),
          )
          .execute();
        expectResults(snapshot, {
          countOfBest: 3,
        });
      });

      it('sort by char_len', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection(randomCol.path)
          .sort(
            new FunctionExpression('char_length', [field('title')]).ascending(),
            descending('__name__'),
          )
          .limit(3)
          .select('title')
          .execute();
        expectResults(
          snapshot,
          {
            title: '1984',
          },
          {
            title: 'Dune',
          },
          {
            title: 'The Great Gatsby',
          },
        );
      });
    });

    it('supports array', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(array([1, 2, 3, 4]).as('metadata'))
        .execute();
      expect(snapshot.results.length).to.equal(1);
      expectResults(snapshot, {
        metadata: [1, 2, 3, 4],
      });
    });

    it('evaluates expression in array', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          array([1, 2, field('genre'), multiply('rating', 10)]).as('metadata'),
        )
        .execute();
      expect(snapshot.results.length).to.equal(1);
      expectResults(snapshot, {
        metadata: [1, 2, 'Fantasy', 47],
      });
    });

    it('supports arrayGet', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(3)
        .select(arrayGet('tags', 0).as('firstTag'))
        .execute();
      const expectedResults = [
        {
          firstTag: 'adventure',
        },
        {
          firstTag: 'politics',
        },
        {
          firstTag: 'classic',
        },
      ];
      expectResults(snapshot, ...expectedResults);

      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(3)
        .select(field('tags').arrayGet(0).as('firstTag'))
        .execute();
      expectResults(snapshot, ...expectedResults);
    });

    it('supports map', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          map({
            foo: 'bar',
          }).as('metadata'),
        )
        .execute();

      expect(snapshot.results.length).to.equal(1);
      expectResults(snapshot, {
        metadata: {
          foo: 'bar',
        },
      });
    });

    it('evaluates expression in map', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          map({
            genre: field('genre'),
            rating: field('rating').multiply(10),
          }).as('metadata'),
        )
        .execute();

      expect(snapshot.results.length).to.equal(1);
      expectResults(snapshot, {
        metadata: {
          genre: 'Fantasy',
          rating: 47,
        },
      });
    });

    it('supports mapRemove', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(mapRemove('awards', 'hugo').as('awards'))
        .execute();
      expectResults(snapshot, {
        awards: {nebula: false},
      });
      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(field('awards').mapRemove('hugo').as('awards'))
        .execute();
      expectResults(snapshot, {
        awards: {nebula: false},
      });
    });

    it('supports mapMerge', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(mapMerge('awards', {fakeAward: true}).as('awards'))
        .execute();
      expectResults(snapshot, {
        awards: {nebula: false, hugo: false, fakeAward: true},
      });
      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(field('awards').mapMerge({fakeAward: true}).as('awards'))
        .execute();
      expectResults(snapshot, {
        awards: {nebula: false, hugo: false, fakeAward: true},
      });
    });

    it('supports timestamp conversions', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(
          unixSecondsToTimestamp(constant(1741380235)).as(
            'unixSecondsToTimestamp',
          ),
          unixMillisToTimestamp(constant(1741380235123)).as(
            'unixMillisToTimestamp',
          ),
          unixMicrosToTimestamp(constant(1741380235123456)).as(
            'unixMicrosToTimestamp',
          ),
          timestampToUnixSeconds(
            constant(new Timestamp(1741380235, 123456789)),
          ).as('timestampToUnixSeconds'),
          timestampToUnixMicros(
            constant(new Timestamp(1741380235, 123456789)),
          ).as('timestampToUnixMicros'),
          timestampToUnixMillis(
            constant(new Timestamp(1741380235, 123456789)),
          ).as('timestampToUnixMillis'),
        )
        .execute();
      expectResults(snapshot, {
        unixMicrosToTimestamp: new Timestamp(1741380235, 123456000),
        unixMillisToTimestamp: new Timestamp(1741380235, 123000000),
        unixSecondsToTimestamp: new Timestamp(1741380235, 0),
        timestampToUnixSeconds: 1741380235,
        timestampToUnixMicros: 1741380235123456,
        timestampToUnixMillis: 1741380235123,
      });
    });

    it('supports timestamp math', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(constant(new Timestamp(1741380235, 0)).as('timestamp'))
        .select(
          timestampAdd('timestamp', 'day', 10).as('plus10days'),
          timestampAdd('timestamp', 'hour', 10).as('plus10hours'),
          timestampAdd('timestamp', 'minute', 10).as('plus10minutes'),
          timestampAdd('timestamp', 'second', 10).as('plus10seconds'),
          timestampAdd('timestamp', 'microsecond', 10).as('plus10micros'),
          timestampAdd('timestamp', 'millisecond', 10).as('plus10millis'),
          timestampSubtract('timestamp', 'day', 10).as('minus10days'),
          timestampSubtract('timestamp', 'hour', 10).as('minus10hours'),
          timestampSubtract('timestamp', 'minute', 10).as('minus10minutes'),
          timestampSubtract('timestamp', 'second', 10).as('minus10seconds'),
          timestampSubtract('timestamp', 'microsecond', 10).as('minus10micros'),
          timestampSubtract('timestamp', 'millisecond', 10).as('minus10millis'),
        )
        .execute();
      expectResults(snapshot, {
        plus10days: new Timestamp(1742244235, 0),
        plus10hours: new Timestamp(1741416235, 0),
        plus10minutes: new Timestamp(1741380835, 0),
        plus10seconds: new Timestamp(1741380245, 0),
        plus10micros: new Timestamp(1741380235, 10000),
        plus10millis: new Timestamp(1741380235, 10000000),
        minus10days: new Timestamp(1740516235, 0),
        minus10hours: new Timestamp(1741344235, 0),
        minus10minutes: new Timestamp(1741379635, 0),
        minus10seconds: new Timestamp(1741380225, 0),
        minus10micros: new Timestamp(1741380234, 999990000),
        minus10millis: new Timestamp(1741380234, 990000000),
      });
    });

    it('supports byteLength', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol)
        .limit(1)
        .select(constant(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0])).as('bytes'))
        .select(byteLength('bytes').as('byteLength'))
        .execute();

      expectResults(snapshot, {
        byteLength: 8,
      });
    });

    it('supports not', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol)
        .limit(1)
        .select(constant(true).as('trueField'))
        .select('trueField', not(equal('trueField', true)).as('falseField'))
        .execute();

      expectResults(snapshot, {
        trueField: true,
        falseField: false,
      });
    });

    it('can reverse an array', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('tags').arrayReverse().as('reversedTags'))
        .execute();
      expectResults(snapshot, {
        reversedTags: ['adventure', 'space', 'comedy'],
      });
    });

    it('can reverse an array with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(arrayReverse('tags').as('reversedTags'))
        .execute();
      expectResults(snapshot, {
        reversedTags: ['adventure', 'space', 'comedy'],
      });
    });

    it('can compute the ceiling of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').ceil().as('ceilingRating'))
        .execute();
      expectResults(snapshot, {
        ceilingRating: 5,
      });
    });

    it('can compute the ceiling of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(ceil('rating').as('ceilingRating'))
        .execute();
      expectResults(snapshot, {
        ceilingRating: 5,
      });
    });

    it('can compute the floor of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').floor().as('floorRating'))
        .execute();
      expectResults(snapshot, {
        floorRating: 4,
      });
    });

    it('can compute the floor of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(floor('rating').as('floorRating'))
        .execute();
      expectResults(snapshot, {
        floorRating: 4,
      });
    });

    it('can compute e to the power of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal('The Lord of the Rings'))
        .limit(1)
        .select(field('rating').exp().as('expRating'))
        .execute();
      expect(snapshot.results[0].get('expRating')).to.be.approximately(
        109.94717245212352,
        0.00001,
      );
    });

    it('can compute e to the power of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal('The Lord of the Rings'))
        .limit(1)
        .select(exp('rating').as('expRating'))
        .execute();
      expect(snapshot.results[0].get('expRating')).to.be.approximately(
        109.94717245212351,
        0.000001,
      );
    });

    it('can compute the power of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').pow(2).as('powerRating'))
        .execute();
      expect(snapshot.results[0].get('powerRating')).to.be.approximately(
        17.64,
        0.0001,
      );
    });

    it('can compute the power of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(pow('rating', 2).as('powerRating'))
        .execute();
      expect(snapshot.results[0].get('powerRating')).to.be.approximately(
        17.64,
        0.0001,
      );
    });

    it('can round a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').round().as('roundedRating'))
        .execute();
      expectResults(snapshot, {
        roundedRating: 4,
      });
    });

    it('can round a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(round('rating').as('roundedRating'))
        .execute();
      expectResults(snapshot, {
        roundedRating: 4,
      });
    });

    it('can round a numeric value away from zero for positive half-way values', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .addFields(constant(1.5).as('positiveHalf'))
        .select(field('positiveHalf').round().as('roundedRating'))
        .execute();
      expectResults(snapshot, {
        roundedRating: 2,
      });
    });

    it('can round a numeric value away from zero for negative half-way values', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .addFields(constant(-1.5).as('negativeHalf'))
        .select(field('negativeHalf').round().as('roundedRating'))
        .execute();
      expectResults(snapshot, {
        roundedRating: -2,
      });
    });

    it('can round a numeric value to specified precision', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(
          map({
            foo: 4.123456,
          }),
        )
        .select(
          field('foo').round(0).as('0'),
          round('foo', 1).as('1'),
          round('foo', constant(2)).as('2'),
          round(field('foo'), 4).as('4'),
        )
        .execute();
      expectResults(snapshot, {
        '0': 4,
        '1': 4.1,
        '2': 4.12,
        '4': 4.1235,
      });
    });

    it('can get the collectionId from a path', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(field('__name__').collectionId().as('collectionId'))
        .execute();
      expectResults(snapshot, {
        collectionId: randomCol.id,
      });
    });

    it('can get the collectionId from a path with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(collectionId('__name__').as('collectionId'))
        .execute();
      expectResults(snapshot, {
        collectionId: randomCol.id,
      });
    });

    it('can compute the length of a string value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('title').length().as('titleLength'))
        .execute();
      expectResults(snapshot, {
        titleLength: 36,
      });
    });

    it('can compute the length of a string value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(length('title').as('titleLength'))
        .execute();
      expectResults(snapshot, {
        titleLength: 36,
      });
    });

    it('can compute the length of an array value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('tags').length().as('tagsLength'))
        .execute();
      expectResults(snapshot, {
        tagsLength: 3,
      });
    });

    it('can compute the length of an array value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(length('tags').as('tagsLength'))
        .execute();
      expectResults(snapshot, {
        tagsLength: 3,
      });
    });

    it('can compute the length of a map value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('awards').length().as('awardsLength'))
        .execute();
      expectResults(snapshot, {
        awardsLength: 3,
      });
    });

    it('can compute the length of a vector value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('embedding').length().as('embeddingLength'))
        .execute();
      expectResults(snapshot, {
        embeddingLength: 10,
      });
    });

    it('can compute the length of a bytes value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .select(constant('12é').as('value'))
        .limit(1)
        .select(field('value').byteLength().as('valueLength'))
        .execute();
      expectResults(snapshot, {
        valueLength: 4,
      });
    });

    it('can compute the natural logarithm of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').ln().as('lnRating'))
        .execute();
      expect(snapshot.results[0]!.data().lnRating).to.be.closeTo(1.435, 0.001);
    });

    it('can compute the natural logarithm of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(ln('rating').as('lnRating'))
        .execute();
      expect(snapshot.results[0]!.data().lnRating).to.be.closeTo(1.435, 0.001);
    });

    it('can compute the natural logarithm of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(ln('rating').as('lnRating'))
        .execute();
      expectResults(snapshot, {
        lnRating: 1.4350845252893227,
      });
    });

    it('can round a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').round().as('roundedRating'))
        .execute();
      expectResults(snapshot, {
        roundedRating: 4,
      });
    });

    it('can round a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(round('rating').as('roundedRating'))
        .execute();
      expectResults(snapshot, {
        roundedRating: 4,
      });
    });

    it('can compute the square root of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('rating').sqrt().as('sqrtRating'))
        .execute();
      expectResults(snapshot, {
        sqrtRating: 2.04939015319192,
      });
    });

    it('can compute the square root of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(sqrt('rating').as('sqrtRating'))
        .execute();
      expectResults(snapshot, {
        sqrtRating: 2.04939015319192,
      });
    });

    it('can reverse a string', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(field('title').stringReverse().as('reversedTitle'))
        .execute();
      expectResults(snapshot, {
        reversedTitle: "yxalaG eht ot ediuG s'rekihhctiH ehT",
      });
    });

    it('can reverse a string with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .limit(1)
        .select(stringReverse('title').as('reversedTitle'))
        .execute();
      expectResults(snapshot, {
        reversedTitle: "yxalaG eht ot ediuG s'rekihhctiH ehT",
      });
    });

    it('supports Document_id', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(
          documentId(field('__name__')).as('docId'),
          documentId(field('__path__')).as('noDocId'),
          documentId(randomCol.doc('foo')).as('fromDocRef'),
        )
        .execute();
      expectResults(snapshot, {
        docId: 'book4',
        noDocId: null,
        fromDocRef: 'foo',
      });
      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(field('__name__').documentId().as('docId'))
        .execute();
      expectResults(snapshot, {
        docId: 'book4',
      });
    });

    it('supports substring', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(substring('title', 9, 2).as('of'))
        .execute();
      expectResults(snapshot, {
        of: 'of',
      });
      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(field('title').substring(9, 2).as('of'))
        .execute();
      expectResults(snapshot, {
        of: 'of',
      });
    });

    it('supports substring without length', async () => {
      let snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(substring('title', 9).as('of'))
        .execute();
      expectResults(snapshot, {
        of: 'of the Rings',
      });
      snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(field('rating').descending())
        .limit(1)
        .select(field('title').substring(9).as('of'))
        .execute();
      expectResults(snapshot, {
        of: 'of the Rings',
      });
    });

    it('arrayConcat works', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal("The Hitchhiker's Guide to the Galaxy"))
        .select(
          arrayConcat('tags', ['newTag1', 'newTag2'], field('tags'), [null]).as(
            'modifiedTags',
          ),
        )
        .limit(1)
        .execute();
      expectResults(snapshot, {
        modifiedTags: [
          'comedy',
          'space',
          'adventure',
          'newTag1',
          'newTag2',
          'comedy',
          'space',
          'adventure',
          null,
        ],
      });
    });

    it('test toLower', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('title'))
        .select(toLower('author').as('lowercaseAuthor'))
        .limit(1)
        .execute();
      expectResults(snapshot, {
        lowercaseAuthor: 'george orwell',
      });
    });

    it('test toUpper', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('title'))
        .select(toUpper('author').as('uppercaseAuthor'))
        .limit(1)
        .execute();
      expectResults(snapshot, {uppercaseAuthor: 'GEORGE ORWELL'});
    });

    it('testTrim', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .replaceWith(
          map({
            spacedTitle: " The Hitchhiker's Guide to the Galaxy ",
            userNameWithQuotes: '"alice"',
            bytes: Uint8Array.from([0x00, 0x01, 0x02, 0x00, 0x00]),
          }),
        )
        .select(
          trim('spacedTitle').as('trimmedTitle'),
          field('spacedTitle'),
          field('userNameWithQuotes').trim('"').as('userName'),
          field('bytes')
            .trim(Uint8Array.from([0x00]))
            .as('bytes'),
        )
        .limit(1)
        .execute();
      expectResults(snapshot, {
        spacedTitle: " The Hitchhiker's Guide to the Galaxy ",
        trimmedTitle: "The Hitchhiker's Guide to the Galaxy",
        userName: 'alice',
        bytes: Uint8Array.from([0x01, 0x02]),
      });
    });

    it('test reverse', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(equal('title', '1984'))
        .limit(1)
        .select(reverse('title').as('reverseTitle'))
        .execute();
      expectResults(snapshot, {reverseTitle: '4891'});
    });

    it('testAbs', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .select(
          constant(-10).as('neg10'),
          constant(-22.22).as('neg22'),
          constant(1).as('pos1'),
        )
        .select(
          abs('neg10').as('10'),
          abs(field('neg22')).as('22'),
          field('pos1').as('1'),
        )
        .execute();
      expectResults(snapshot, {
        '10': 10,
        '22': 22.22,
        '1': 1,
      });
    });

    it('can compute the base-10 logarithm of a numeric value', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal('The Lord of the Rings'))
        .limit(1)
        .select(field('rating').log10().as('log10Rating'))
        .execute();
      expect(snapshot.results[0]!.data().log10Rating).to.be.closeTo(
        0.672,
        0.001,
      );
    });

    it('can compute the base-10 logarithm of a numeric value with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal('The Lord of the Rings'))
        .limit(1)
        .select(log10('rating').as('log10Rating'))
        .execute();
      expect(snapshot.results[0]!.data().log10Rating).to.be.closeTo(
        0.672,
        0.001,
      );
    });

    it('can concat fields', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .addFields(
          concat('author', ' ', field('title')).as('display'),
          field('author').concat(': ', field('title')).as('display2'),
        )
        .where(equal('author', 'Douglas Adams'))
        .select('display', 'display2')
        .execute();
      expectResults(snapshot, {
        display: "Douglas Adams The Hitchhiker's Guide to the Galaxy",
        display2: "Douglas Adams: The Hitchhiker's Guide to the Galaxy",
      });
    });

    it('supports currentTimestamp', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .addFields(currentTimestamp().as('now'))
        .select('now')
        .execute();
      const now = snapshot.results[0].get('now') as Timestamp;
      expect(now).instanceof(Timestamp);
      expect(
        now.toDate().getUTCSeconds() - new Date().getUTCSeconds(),
      ).lessThan(5000);
    });

    it('supports ifAbsent', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(
          map({
            title: 'foo',
          }),
        )
        .select(
          ifAbsent('title', 'default title').as('title'),
          field('name').ifAbsent('default name').as('name'),
          field('name').ifAbsent(field('title')).as('nameOrTitle'),
        )
        .execute();

      expectResults(snapshot, {
        title: 'foo',
        name: 'default name',
        nameOrTitle: 'foo',
      });
    });

    it('supports join', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .limit(1)
        .replaceWith(
          map({
            tags: ['foo', 'bar', 'baz'],
            delimeter: '|',
          }),
        )
        .select(join('tags', ',').as('csv'), field('tags').join('|').as('or'))
        .execute();

      expectResults(snapshot, {
        csv: 'foo,bar,baz',
        or: 'foo|bar|baz',
      });
    });

    it('can compute the sum of the elements in an array', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal('The Lord of the Rings'))
        .limit(1)
        .addFields(array([150, 200]).as('sales'))
        .select(field('sales').arraySum().as('totalSales'))
        .execute();
      expectResults(snapshot, {
        totalSales: 350,
      });
    });

    it('can compute the sum of the elements in an array with the top-level function', async () => {
      const snapshot = await firestore
        .pipeline()
        .collection(randomCol.path)
        .where(field('title').equal('The Lord of the Rings'))
        .limit(1)
        .addFields(array([150, 200]).as('sales'))
        .select(arraySum('sales').as('totalSales'))
        .execute();
      expectResults(snapshot, {
        totalSales: 350,
      });
    });
    it('truncate timestamp', async () => {
      const results = await firestore
        .pipeline()
        .collection(randomCol)
        .limit(1)
        .replaceWith(
          map({
            timestamp: new Timestamp(
              Date.UTC(2025, 10, 30, 1, 2, 3) / 1000,
              456789,
            ),
          }),
        )
        .select(
          timestampTruncate('timestamp', 'year').as('trunc_year'),
          timestampTruncate(field('timestamp'), 'month').as('trunc_month'),
          timestampTruncate(field('timestamp'), constant('day')).as(
            'trunc_day',
          ),
          field('timestamp')
            .timestampTruncate(constant('day'), 'MST')
            .as('trunc_day_mst'),
          field('timestamp').timestampTruncate('hour').as('trunc_hour'),
          field('timestamp')
            .timestampTruncate(constant('minute'))
            .as('trunc_minute'),
          field('timestamp').timestampTruncate('second').as('trunc_second'),
        )
        .execute();

      expectResults(results, {
        trunc_year: new Timestamp(Date.UTC(2025, 0) / 1000, 0),
        trunc_month: new Timestamp(Date.UTC(2025, 10) / 1000, 0),
        trunc_day: new Timestamp(Date.UTC(2025, 10, 30) / 1000, 0),
        trunc_day_mst: new Timestamp(
          Date.UTC(2025, 10, 29) / 1000 + 7 * 3600,
          0,
        ),
        trunc_hour: new Timestamp(Date.UTC(2025, 10, 30, 1) / 1000, 0),
        trunc_minute: new Timestamp(Date.UTC(2025, 10, 30, 1, 2) / 1000, 0),
        trunc_second: new Timestamp(Date.UTC(2025, 10, 30, 1, 2, 3) / 1000, 0),
      });
    });

    it('supports split', async () => {
      const results = await firestore
        .pipeline()
        .collection(randomCol)
        .limit(1)
        .replaceWith(
          map({
            csv: 'foo,bar,baz',
            data: 'baz:bar:foo',
            csvDelimeter: ',',
            bytes: Uint8Array.from([0x01, 0x00, 0x02, 0x00, 0x03]),
          }),
        )
        .select(
          split('csv', field('csvDelimeter')).as('csv'),
          split(field('data'), ':').as('data'),
          field('bytes')
            .split(constant(Uint8Array.from([0x00])))
            .as('bytes'),
        )
        .execute();

      expectResults(results, {
        csv: ['foo', 'bar', 'baz'],
        data: ['baz', 'bar', 'foo'],
        bytes: [
          Uint8Array.from([0x01]),
          Uint8Array.from([0x02]),
          Uint8Array.from([0x03]),
        ],
      });

      void expect(
        firestore
          .pipeline()
          .collection(randomCol)
          .limit(1)
          .replaceWith(
            map({
              csv: 'foo,bar,baz',
            }),
          )
          .select(
            field('csv')
              .split(constant(Uint8Array.from([0x00])))
              .as('dontSplitStringAndBytes'),
          )
          .execute(),
      ).to.be.rejected;
    });

    it('supports type', async () => {
      const result = await firestore
        .pipeline()
        .collection(randomCol)
        .limit(1)
        .replaceWith(
          map({
            int: constant(1),
            float: constant(1.1),
            str: constant('a string'),
            bool: constant(true),
            null: constant(null),
            geoPoint: constant(new GeoPoint(0.1, 0.2)),
            timestamp: constant(new Timestamp(123456, 0)),
            date: constant(new Date()),
            bytes: constant(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 0])),
            docRef: constant(firestore.doc('foo/bar')),
            vector: constant(FieldValue.vector([1, 2, 3])),
            map: map({
              number: 1,
              string: 'a string',
            }),
            array: array([1, 'a string']),
          }),
        )
        .select(
          type('int').as('int'),
          field('float').type().as('float'),
          field('str').type().as('str'),
          type('bool').as('bool'),
          type('null').as('null'),
          type('geoPoint').as('geoPoint'),
          type('timestamp').as('timestamp'),
          type('date').as('date'),
          type('bytes').as('bytes'),
          type('docRef').as('docRef'),
          type('vector').as('vector'),
          type('map').as('map'),
          type('array').as('array'),
        )
        .execute();

      expectResults(result, {
        int: 'int64',
        float: 'float64',
        str: 'string',
        bool: 'boolean',
        null: 'null',
        geoPoint: 'geo_point',
        timestamp: 'timestamp',
        date: 'timestamp',
        bytes: 'bytes',
        docRef: 'reference',
        vector: 'vector',
        map: 'map',
        array: 'array',
      });
    });

    // TODO(new-expression): Add new expression tests above this line
  });

  describe('pagination', () => {
    let addedDocs: DocumentReference[] = [];

    /**
     * Adds several books to the test collection. These
     * additional books support pagination test scenarios
     * that would otherwise not be possible with the original
     * set of books.
     * @param collectionReference
     */
    async function addBooks(
      collectionReference: CollectionReference,
    ): Promise<void> {
      let docRef = collectionReference.doc('book11');
      addedDocs.push(docRef);
      await docRef.set({
        title: 'Jonathan Strange & Mr Norrell',
        author: 'Susanna Clarke',
        genre: 'Fantasy',
        published: 2004,
        rating: 4.6,
        tags: ['historical fantasy', 'magic', 'alternate history', 'england'],
        awards: {hugo: false, nebula: false},
      });
      docRef = collectionReference.doc('book12');
      addedDocs.push(collectionReference.doc('book12'));
      await docRef.set({
        title: 'The Master and Margarita',
        author: 'Mikhail Bulgakov',
        genre: 'Satire',
        published: 1967, // Though written much earlier
        rating: 4.6,
        tags: [
          'russian literature',
          'supernatural',
          'philosophy',
          'dark comedy',
        ],
        awards: {},
      });
      docRef = collectionReference.doc('book13');
      addedDocs.push(docRef);
      await docRef.set({
        title: 'A Long Way to a Small, Angry Planet',
        author: 'Becky Chambers',
        genre: 'Science Fiction',
        published: 2014,
        rating: 4.6,
        tags: ['space opera', 'found family', 'character-driven', 'optimistic'],
        awards: {hugo: false, nebula: false, kitschies: true},
      });
    }

    afterEach(async () => {
      for (let i = 0; i < addedDocs.length; i++) {
        await addedDocs[i].delete();
      }
      addedDocs = [];
    });

    it('supports pagination with filters', async () => {
      await addBooks(randomCol);
      const pageSize = 2;
      const pipeline = firestore
        .pipeline()
        .collection(randomCol.path)
        .select('title', 'rating', '__name__')
        .sort(field('rating').descending(), field('__name__').ascending());

      let snapshot = await pipeline.limit(pageSize).execute();

      snapshot.results.forEach(r => console.log(JSON.stringify(r.data())));

      expectResults(
        snapshot,
        {title: 'The Lord of the Rings', rating: 4.7},
        {title: 'Dune', rating: 4.6},
      );

      const lastDoc = snapshot.results[snapshot.results.length - 1];

      snapshot = await pipeline
        .where(
          or(
            and(
              field('rating').equal(lastDoc.get('rating')),
              field('__name__').greaterThan(lastDoc.ref),
            ),
            field('rating').lessThan(lastDoc.get('rating')),
          ),
        )
        .limit(pageSize)
        .execute();
      expectResults(
        snapshot,
        {title: 'Jonathan Strange & Mr Norrell', rating: 4.6},
        {title: 'The Master and Margarita', rating: 4.6},
      );
    });

    it('supports pagination with offsets', async () => {
      await addBooks(randomCol);

      const secondFilterField = '__name__';

      const pipeline = firestore
        .pipeline()
        .collection(randomCol.path)
        .select('title', 'rating', secondFilterField)
        .sort(
          field('rating').descending(),
          field(secondFilterField).ascending(),
        );

      const pageSize = 2;
      let currPage = 0;

      let snapshot = await pipeline
        .offset(currPage++ * pageSize)
        .limit(pageSize)
        .execute();

      expectResults(
        snapshot,
        {
          title: 'The Lord of the Rings',
          rating: 4.7,
        },
        {title: 'Dune', rating: 4.6},
      );

      snapshot = await pipeline
        .offset(currPage++ * pageSize)
        .limit(pageSize)
        .execute();
      expectResults(
        snapshot,
        {
          title: 'Jonathan Strange & Mr Norrell',
          rating: 4.6,
        },
        {title: 'The Master and Margarita', rating: 4.6},
      );

      snapshot = await pipeline
        .offset(currPage++ * pageSize)
        .limit(pageSize)
        .execute();
      expectResults(
        snapshot,
        {
          title: 'A Long Way to a Small, Angry Planet',
          rating: 4.6,
        },
        {
          title: 'Pride and Prejudice',
          rating: 4.5,
        },
      );
    });
  });

  describe('stage options', () => {
    describe('forceIndex', () => {
      // SKIP: requires pre-existing index
      it.skip('Collection Stage', async () => {
        const snapshot = await firestore
          .pipeline()
          .collection({
            collection: randomCol,
            forceIndex: 'unknown',
          })
          .execute();
        expect(snapshot.results.length).to.equal(10);
      });

      // SKIP: requires pre-existing index
      it.skip('CollectionGroup Stage', async () => {
        const snapshot = await firestore
          .pipeline()
          .collectionGroup({
            collectionId: randomCol.id,
            forceIndex: 'unknown',
          })
          .execute();
        expect(snapshot.results.length).to.equal(10);
      });
    });
  });

  describe('stream', () => {
    it('full results as expected', done => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'));
      const snapshotStream = ppl.stream();

      const expected = [
        'book1',
        'book10',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
        'book8',
        'book9',
      ];

      let received = 0;
      snapshotStream
        .on('data', d => {
          expect(d).to.be.an.instanceOf(PipelineResult);
          const rslt = d as PipelineResult;
          expect(rslt.id).to.equal(expected.shift());
          ++received;
        })
        .on('end', () => {
          expect(received).to.equal(10);
          done();
        });
    });

    it('empty snapshot', done => {
      const ppl = firestore.pipeline().collection(randomCol.path).limit(0);
      const snapshotStream = ppl.stream();

      let received = 0;
      snapshotStream
        .on('data', _ => {
          ++received;
        })
        .on('end', () => {
          expect(received).to.equal(0);
          done();
        });
    });

    it('document transform', done => {
      const ppl = firestore
        .pipeline()
        .collection(randomCol.path)
        .sort(ascending('__name__'))
        .limit(2)
        .select('title');
      const snapshotStream = ppl.stream();

      const expected = [
        {title: "The Hitchhiker's Guide to the Galaxy"},
        {title: 'Dune'},
      ];

      let received = 0;
      snapshotStream
        .on('data', d => {
          expect(d).to.be.an.instanceOf(PipelineResult);
          const rslt = d as PipelineResult;
          expect(rslt.data()).to.deep.equal(expected.shift());
          ++received;
        })
        .on('end', () => {
          expect(received).to.equal(2);
          done();
        });
    });
  });
});

// This is the Query integration tests from the lite API (no cache support)
// with some additional test cases added for more complete coverage.
// eslint-disable-next-line no-restricted-properties
describe.skipClassic('Query to Pipeline', () => {
  async function execute(ppl: Pipeline): Promise<PipelineSnapshot> {
    return ppl.execute();
  }

  async function testCollectionWithDocs(
    docs: {
      [id: string]: DocumentData;
    },
    callback: (collRef: CollectionReference, db: Firestore) => Promise<void>,
  ): Promise<void> {
    const randomCol = getTestRoot();
    const firestore = randomCol.firestore;
    for (const id in docs) {
      const ref = randomCol.doc(id);
      await ref.set(docs[id]);
    }

    try {
      await callback(randomCol, firestore);
    } finally {
      await firestore.terminate();
    }
  }

  function verifyResults(
    actual: PipelineSnapshot,
    ...expected: DocumentData[]
  ): void {
    const results = actual.results;
    expect(results.length).to.equal(expected.length);

    for (let i = 0; i < expected.length; ++i) {
      expect(results[i].data()).to.deep.equal(expected[i]);
    }
  }

  it('supports default query', () => {
    return testCollectionWithDocs({1: {foo: 1}}, async (collRef, db) => {
      const snapshot = await execute(db.pipeline().createFrom(collRef));
      verifyResults(snapshot, {foo: 1});
    });
  });

  it('supports filtered query', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.where('foo', '==', 1);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1});
      },
    );
  });

  it('supports filtered query (with FieldPath)', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.where(new FieldPath('foo'), '==', 1);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1});
      },
    );
  });

  it('supports ordered query (with default order)', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo');
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1}, {foo: 2});
      },
    );
  });

  it('supports ordered query (with asc)', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo', 'asc');
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1}, {foo: 2});
      },
    );
  });

  it('supports ordered query (with desc)', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo', 'desc');
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2}, {foo: 1});
      },
    );
  });

  it('supports limit query', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').limit(1);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1});
      },
    );
  });

  it('supports limitToLast query', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
        3: {foo: 3},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').limitToLast(2);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2}, {foo: 3});
      },
    );
  });

  it('supports startAt', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').startAt(2);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2});
      },
    );
  });

  it('supports startAt with limitToLast', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
        3: {foo: 3},
        4: {foo: 4},
        5: {foo: 5},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').startAt(3).limitToLast(4);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 3}, {foo: 4}, {foo: 5});
      },
    );
  });

  it('supports endAt with limitToLast', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
        3: {foo: 3},
        4: {foo: 4},
        5: {foo: 5},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').endAt(3).limitToLast(2);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2}, {foo: 3});
      },
    );
  });

  it('supports startAfter (with DocumentSnapshot)', () => {
    return testCollectionWithDocs(
      {
        1: {id: 1, foo: 1, bar: 1, baz: 1},
        2: {id: 2, foo: 1, bar: 1, baz: 2},
        3: {id: 3, foo: 1, bar: 1, baz: 2},
        4: {id: 4, foo: 1, bar: 2, baz: 1},
        5: {id: 5, foo: 1, bar: 2, baz: 2},
        6: {id: 6, foo: 1, bar: 2, baz: 2},
        7: {id: 7, foo: 2, bar: 1, baz: 1},
        8: {id: 8, foo: 2, bar: 1, baz: 2},
        9: {id: 9, foo: 2, bar: 1, baz: 2},
        10: {id: 10, foo: 2, bar: 2, baz: 1},
        11: {id: 11, foo: 2, bar: 2, baz: 2},
        12: {id: 12, foo: 2, bar: 2, baz: 2},
      },
      async (collRef, db) => {
        let docRef = await collRef.doc('2').get();
        let query1 = collRef
          .orderBy('foo')
          .orderBy('bar')
          .orderBy('baz')
          .startAfter(docRef);
        let snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {id: 3, foo: 1, bar: 1, baz: 2},
          {id: 4, foo: 1, bar: 2, baz: 1},
          {id: 5, foo: 1, bar: 2, baz: 2},
          {id: 6, foo: 1, bar: 2, baz: 2},
          {id: 7, foo: 2, bar: 1, baz: 1},
          {id: 8, foo: 2, bar: 1, baz: 2},
          {id: 9, foo: 2, bar: 1, baz: 2},
          {id: 10, foo: 2, bar: 2, baz: 1},
          {id: 11, foo: 2, bar: 2, baz: 2},
          {id: 12, foo: 2, bar: 2, baz: 2},
        );

        docRef = await collRef.doc('3').get();
        query1 = collRef
          .orderBy('foo')
          .orderBy('bar')
          .orderBy('baz')
          .startAfter(docRef);
        snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {id: 4, foo: 1, bar: 2, baz: 1},
          {id: 5, foo: 1, bar: 2, baz: 2},
          {id: 6, foo: 1, bar: 2, baz: 2},
          {id: 7, foo: 2, bar: 1, baz: 1},
          {id: 8, foo: 2, bar: 1, baz: 2},
          {id: 9, foo: 2, bar: 1, baz: 2},
          {id: 10, foo: 2, bar: 2, baz: 1},
          {id: 11, foo: 2, bar: 2, baz: 2},
          {id: 12, foo: 2, bar: 2, baz: 2},
        );
      },
    );
  });

  it('supports startAt (with DocumentSnapshot)', () => {
    return testCollectionWithDocs(
      {
        1: {id: 1, foo: 1, bar: 1, baz: 1},
        2: {id: 2, foo: 1, bar: 1, baz: 2},
        3: {id: 3, foo: 1, bar: 1, baz: 2},
        4: {id: 4, foo: 1, bar: 2, baz: 1},
        5: {id: 5, foo: 1, bar: 2, baz: 2},
        6: {id: 6, foo: 1, bar: 2, baz: 2},
        7: {id: 7, foo: 2, bar: 1, baz: 1},
        8: {id: 8, foo: 2, bar: 1, baz: 2},
        9: {id: 9, foo: 2, bar: 1, baz: 2},
        10: {id: 10, foo: 2, bar: 2, baz: 1},
        11: {id: 11, foo: 2, bar: 2, baz: 2},
        12: {id: 12, foo: 2, bar: 2, baz: 2},
      },
      async (collRef, db) => {
        let docRef = await collRef.doc('2').get();
        let query1 = collRef
          .orderBy('foo')
          .orderBy('bar')
          .orderBy('baz')
          .startAt(docRef);
        let snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {id: 2, foo: 1, bar: 1, baz: 2},
          {id: 3, foo: 1, bar: 1, baz: 2},
          {id: 4, foo: 1, bar: 2, baz: 1},
          {id: 5, foo: 1, bar: 2, baz: 2},
          {id: 6, foo: 1, bar: 2, baz: 2},
          {id: 7, foo: 2, bar: 1, baz: 1},
          {id: 8, foo: 2, bar: 1, baz: 2},
          {id: 9, foo: 2, bar: 1, baz: 2},
          {id: 10, foo: 2, bar: 2, baz: 1},
          {id: 11, foo: 2, bar: 2, baz: 2},
          {id: 12, foo: 2, bar: 2, baz: 2},
        );

        docRef = await collRef.doc('3').get();
        query1 = collRef
          .orderBy('foo')
          .orderBy('bar')
          .orderBy('baz')
          .startAt(docRef);
        snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {id: 3, foo: 1, bar: 1, baz: 2},
          {id: 4, foo: 1, bar: 2, baz: 1},
          {id: 5, foo: 1, bar: 2, baz: 2},
          {id: 6, foo: 1, bar: 2, baz: 2},
          {id: 7, foo: 2, bar: 1, baz: 1},
          {id: 8, foo: 2, bar: 1, baz: 2},
          {id: 9, foo: 2, bar: 1, baz: 2},
          {id: 10, foo: 2, bar: 2, baz: 1},
          {id: 11, foo: 2, bar: 2, baz: 2},
          {id: 12, foo: 2, bar: 2, baz: 2},
        );
      },
    );
  });

  it('supports startAfter', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').startAfter(1);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2});
      },
    );
  });

  it('supports endAt', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').endAt(1);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1});
      },
    );
  });

  it('supports endBefore', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.orderBy('foo').endBefore(2);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1});
      },
    );
  });

  it('supports pagination', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        let query1 = collRef.orderBy('foo').limit(1);
        const pipeline1 = db.pipeline().createFrom(query1);
        let snapshot = await execute(pipeline1);
        verifyResults(snapshot, {foo: 1});

        // Pass the document snapshot from the previous snapshot
        query1 = query1.startAfter(snapshot.results[0].get('foo'));
        snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2});
      },
    );
  });

  it('supports pagination on DocumentIds', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1},
        2: {foo: 2},
      },
      async (collRef, db) => {
        let query1 = collRef
          .orderBy('foo')
          .orderBy(FieldPath.documentId(), 'asc')
          .limit(1);
        const pipeline1 = db.pipeline().createFrom(query1);
        let snapshot = await execute(pipeline1);
        verifyResults(snapshot, {foo: 1});

        // Pass the document snapshot from the previous snapshot
        query1 = query1.startAfter(
          snapshot.results[0].get('foo'),
          snapshot.results[0].ref?.id,
        );
        snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2});
      },
    );
  });

  it('supports collection groups', () => {
    return testCollectionWithDocs({}, async (collRef, db) => {
      const collectionGroupId = `${collRef.id}group`;

      const fooDoc = collRef.firestore.doc(
        `${collRef.id}/foo/${collectionGroupId}/doc1`,
      );
      const barDoc = collRef.firestore.doc(
        `${collRef.id}/bar/baz/boo/${collectionGroupId}/doc2`,
      );
      await fooDoc.set({foo: 1});
      await barDoc.set({bar: 1});

      const query1 = collRef.firestore.collectionGroup(collectionGroupId);
      const snapshot = await execute(db.pipeline().createFrom(query1));

      verifyResults(snapshot, {bar: 1}, {foo: 1});
    });
  });

  it('supports query over collection path with special characters', () => {
    return testCollectionWithDocs({}, async (collRef, db) => {
      const docWithSpecials = collRef.doc('so!@#$%^&*()_+special');

      const collectionWithSpecials = docWithSpecials.collection(
        'so!@#$%^&*()_+special',
      );
      await collectionWithSpecials.add({foo: 1});
      await collectionWithSpecials.add({foo: 2});

      const snapshot = await execute(
        db.pipeline().createFrom(collectionWithSpecials.orderBy('foo', 'asc')),
      );

      verifyResults(snapshot, {foo: 1}, {foo: 2});
    });
  });

  it('supports multiple inequality on same field', () => {
    return testCollectionWithDocs(
      {
        '01': {id: 1, foo: 1, bar: 1, baz: 1},
        '02': {id: 2, foo: 1, bar: 1, baz: 2},
        '03': {id: 3, foo: 1, bar: 1, baz: 2},
        '04': {id: 4, foo: 1, bar: 2, baz: 1},
        '05': {id: 5, foo: 1, bar: 2, baz: 2},
        '06': {id: 6, foo: 1, bar: 2, baz: 2},
        '07': {id: 7, foo: 2, bar: 1, baz: 1},
        '08': {id: 8, foo: 2, bar: 1, baz: 2},
        '09': {id: 9, foo: 2, bar: 1, baz: 2},
        '10': {id: 10, foo: 2, bar: 2, baz: 1},
        '11': {id: 11, foo: 2, bar: 2, baz: 2},
        '12': {id: 12, foo: 2, bar: 2, baz: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.where(
          Filter.and(Filter.where('id', '>', 2), Filter.where('id', '<=', 10)),
        );
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {id: 3, foo: 1, bar: 1, baz: 2},
          {id: 4, foo: 1, bar: 2, baz: 1},
          {id: 5, foo: 1, bar: 2, baz: 2},
          {id: 6, foo: 1, bar: 2, baz: 2},
          {id: 7, foo: 2, bar: 1, baz: 1},
          {id: 8, foo: 2, bar: 1, baz: 2},
          {id: 9, foo: 2, bar: 1, baz: 2},
          {id: 10, foo: 2, bar: 2, baz: 1},
        );
      },
    );
  });

  it('supports multiple inequality on different fields', () => {
    return testCollectionWithDocs(
      {
        '01': {id: 1, foo: 1, bar: 1, baz: 1},
        '02': {id: 2, foo: 1, bar: 1, baz: 2},
        '03': {id: 3, foo: 1, bar: 1, baz: 2},
        '04': {id: 4, foo: 1, bar: 2, baz: 1},
        '05': {id: 5, foo: 1, bar: 2, baz: 2},
        '06': {id: 6, foo: 1, bar: 2, baz: 2},
        '07': {id: 7, foo: 2, bar: 1, baz: 1},
        '08': {id: 8, foo: 2, bar: 1, baz: 2},
        '09': {id: 9, foo: 2, bar: 1, baz: 2},
        '10': {id: 10, foo: 2, bar: 2, baz: 1},
        '11': {id: 11, foo: 2, bar: 2, baz: 2},
        '12': {id: 12, foo: 2, bar: 2, baz: 2},
      },
      async (collRef, db) => {
        const query1 = collRef.where(
          Filter.and(Filter.where('id', '>=', 2), Filter.where('baz', '<', 2)),
        );
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {id: 4, foo: 1, bar: 2, baz: 1},
          {id: 7, foo: 2, bar: 1, baz: 1},
          {id: 10, foo: 2, bar: 2, baz: 1},
        );
      },
    );
  });

  it('supports collectionGroup query', () => {
    return testCollectionWithDocs({1: {foo: 1}}, async (collRef, db) => {
      const snapshot = await execute(
        db.pipeline().createFrom(db.collectionGroup(collRef.id)),
      );
      verifyResults(snapshot, {foo: 1});
    });
  });

  it('supports equal nan', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: NaN},
        2: {foo: 2, bar: 1},
        3: {foo: 3, bar: 'bar'},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', '==', NaN);
        const classicSnapshot = await query1.get();
        const classicData = classicSnapshot.docs.map(d => d.data());

        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, ...classicData);
      },
    );
  });

  it('supports notEqual nan', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: NaN},
        2: {foo: 2, bar: 1},
        3: {foo: 3, bar: 'bar'},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', '!=', NaN);

        const classicSnapshot = await query1.get();
        const classicData = classicSnapshot.docs.map(d => d.data());

        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, ...classicData);
      },
    );
  });

  it('supports equal null', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: null},
        2: {foo: 2, bar: 1},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', '==', null);
        const classicSnapshot = await query1.get();
        const classicData = classicSnapshot.docs.map(d => d.data());

        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, ...classicData);
      },
    );
  });

  it('supports notEqual null', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: null},
        2: {foo: 2, bar: 1},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', '!=', null);
        const classicSnapshot = await query1.get();
        const classicData = classicSnapshot.docs.map(d => d.data());
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, ...classicData);
      },
    );
  });

  it('supports notEqual', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: 0},
        2: {foo: 2, bar: 1},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', '!=', 0);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2, bar: 1});
      },
    );
  });

  it('supports array contains', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: [0, 2, 4, 6]},
        2: {foo: 2, bar: [1, 3, 5, 7]},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', 'array-contains', 4);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1, bar: [0, 2, 4, 6]});
      },
    );
  });

  it('supports array contains any', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: [0, 2, 4, 6]},
        2: {foo: 2, bar: [1, 3, 5, 7]},
        3: {foo: 3, bar: [10, 20, 30, 40]},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', 'array-contains-any', [4, 5]);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(
          snapshot,
          {foo: 1, bar: [0, 2, 4, 6]},
          {foo: 2, bar: [1, 3, 5, 7]},
        );
      },
    );
  });

  it('supports in', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: 2},
        2: {foo: 2},
        3: {foo: 3, bar: 10},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', 'in', [0, 10, 20]);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 3, bar: 10});
      },
    );
  });

  it('supports in with 1', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: 2},
        2: {foo: 2},
        3: {foo: 3, bar: 10},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', 'in', [2]);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1, bar: 2});
      },
    );
  });

  it('supports not in', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: 2},
        2: {foo: 2, bar: 1},
        3: {foo: 3, bar: 10},
      },
      async (collRef, db) => {
        const query1 = collRef
          .where('bar', 'not-in', [0, 10, 20])
          .orderBy('foo');
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1, bar: 2}, {foo: 2, bar: 1});
      },
    );
  });

  it('supports not in with 1', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: 2},
        2: {foo: 2},
        3: {foo: 3, bar: 10},
      },
      async (collRef, db) => {
        const query1 = collRef.where('bar', 'not-in', [2]);
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 2}, {foo: 3, bar: 10});
      },
    );
  });

  it('supports or operator', () => {
    return testCollectionWithDocs(
      {
        1: {foo: 1, bar: 2},
        2: {foo: 2, bar: 0},
        3: {foo: 3, bar: 10},
      },
      async (collRef, db) => {
        const query1 = collRef
          .where(
            Filter.or(
              Filter.where('bar', '==', 2),
              Filter.where('foo', '==', 3),
            ),
          )
          .orderBy('foo');
        const snapshot = await execute(db.pipeline().createFrom(query1));
        verifyResults(snapshot, {foo: 1, bar: 2}, {foo: 3, bar: 10});
      },
    );
  });
});
