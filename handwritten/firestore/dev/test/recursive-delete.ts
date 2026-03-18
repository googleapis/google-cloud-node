// Copyright 2021 Google LLC
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
import {afterEach, beforeEach, describe, it} from 'mocha';
import {fail} from 'assert';
import {expect} from 'chai';
import {GoogleError, Status} from 'google-gax';
import sinon = require('sinon');

import {google} from '../protos/firestore_v1_proto_api';

import * as Firestore from '../src';
import {setTimeoutHandler} from '../src/backoff';
import {
  ApiOverride,
  createInstance,
  postConverter,
  response,
  stream,
  verifyInstance,
} from './util/helpers';
import {
  allDescendants,
  fieldFiltersQuery,
  limit,
  orderBy,
  queryEquals,
  queryEqualsWithParent,
  result,
  select,
  startAt as queryStartAt,
} from './query';
import {
  createRequest,
  deleteOp,
  failedResponse,
  mergeResponses,
  successResponse,
} from './bulk-writer';
import {MAX_REQUEST_RETRIES} from '../src';

import api = google.firestore.v1;
import {
  RECURSIVE_DELETE_MAX_PENDING_OPS,
  REFERENCE_NAME_MIN_ID,
} from '../src/recursive-delete';
import {Deferred} from '../src/util';

const PROJECT_ID = 'test-project';
const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;

describe('recursiveDelete() method:', () => {
  // We store errors from batchWrite inside an error object since errors thrown
  // in batchWrite do not affect the recursiveDelete promise.
  let batchWriteError: Error | undefined;
  let firestore: Firestore.Firestore;

  beforeEach(() => {
    setTimeoutHandler(setImmediate);
  });

  afterEach(async () => {
    await verifyInstance(firestore);
    setTimeoutHandler(setTimeout);
    expect(batchWriteError, 'batchWrite should not have errored').to.be
      .undefined;
  });

  function instantiateInstance(
    childrenDocs: Array<string>,
    deleteDocRef = '',
    responses?: api.IBatchWriteResponse,
  ): Promise<Firestore.Firestore> {
    const overrides: ApiOverride = {
      runQuery: () => {
        return stream(...childrenDocs.map(docId => result(docId)));
      },
      batchWrite: request => {
        const documents = childrenDocs;
        if (deleteDocRef.length > 0) {
          documents.push(deleteDocRef);
        }
        const expected = createRequest(documents.map(docId => deleteOp(docId)));
        try {
          expect(request.writes).to.deep.equal(expected.writes);
        } catch (e) {
          batchWriteError = e;
        }
        const returnedResponse =
          responses ?? mergeResponses(documents.map(() => successResponse(1)));

        return response({
          writeResults: returnedResponse.writeResults,
          status: returnedResponse.status,
        });
      },
    };

    return createInstance(overrides);
  }

  describe('calls getAllDescendants() with correct StructuredQuery', () => {
    function startAt(name: string): api.IValue {
      return {
        referenceValue:
          DATABASE_ROOT + '/documents/' + name + '/' + REFERENCE_NAME_MIN_ID,
      };
    }

    function endAt(name: string): api.IValue {
      return {
        referenceValue:
          DATABASE_ROOT +
          '/documents/' +
          name +
          String.fromCharCode(0) +
          '/' +
          REFERENCE_NAME_MIN_ID,
      };
    }

    it('for root-level collections', async () => {
      const overrides: ApiOverride = {
        runQuery: req => {
          queryEquals(
            req,
            select('__name__'),
            allDescendants(/* kindless= */ true),
            fieldFiltersQuery(
              '__name__',
              'GREATER_THAN_OR_EQUAL',
              startAt('root'),
              '__name__',
              'LESS_THAN',
              endAt('root'),
            ),
            limit(RECURSIVE_DELETE_MAX_PENDING_OPS),
          );
          return stream();
        },
      };
      firestore = await createInstance(overrides);
      return firestore.recursiveDelete(firestore.collection('root'));
    });

    it('for nested collections', async () => {
      const overrides: ApiOverride = {
        runQuery: req => {
          queryEqualsWithParent(
            req,
            'root/doc',
            select('__name__'),
            allDescendants(/* kindless= */ true),
            fieldFiltersQuery(
              '__name__',
              'GREATER_THAN_OR_EQUAL',
              startAt('root/doc/nestedCol'),
              '__name__',
              'LESS_THAN',
              endAt('root/doc/nestedCol'),
            ),
            limit(RECURSIVE_DELETE_MAX_PENDING_OPS),
          );
          return stream();
        },
      };
      firestore = await createInstance(overrides);
      return firestore.recursiveDelete(
        firestore.collection('root/doc/nestedCol'),
      );
    });

    it('documents', async () => {
      const overrides: ApiOverride = {
        runQuery: req => {
          queryEqualsWithParent(
            req,
            'root/doc',
            select('__name__'),
            allDescendants(/* kindless= */ true),
            limit(RECURSIVE_DELETE_MAX_PENDING_OPS),
          );
          return stream();
        },
        // Include dummy response for the deleted docRef.
        batchWrite: () => response(successResponse(1)),
      };
      firestore = await createInstance(overrides);
      return firestore.recursiveDelete(firestore.doc('root/doc'));
    });

    it('creates retry query after stream exception with last received doc', async () => {
      let callCount = 0;
      const overrides: ApiOverride = {
        runQuery: request => {
          callCount++;
          if (callCount === 1) {
            return stream(result('doc1'), new Error('failed in test'));
          } else {
            queryEqualsWithParent(
              request,
              /* parent= */ '',
              select('__name__'),
              allDescendants(/* kindless= */ true),
              orderBy('__name__', 'ASCENDING'),
              queryStartAt(false, {
                referenceValue:
                  `projects/${PROJECT_ID}/databases/(default)/` +
                  'documents/collectionId/doc1',
              }),
              fieldFiltersQuery(
                '__name__',
                'GREATER_THAN_OR_EQUAL',
                startAt('root'),
                '__name__',
                'LESS_THAN',
                endAt('root'),
              ),
              limit(RECURSIVE_DELETE_MAX_PENDING_OPS - 1),
            );
            return stream();
          }
        },
        batchWrite: () => response(successResponse(1)),
      };

      const firestore = await createInstance(overrides);
      await firestore.recursiveDelete(firestore.collection('root'));
    });

    it('creates a second query with the correct startAfter', async () => {
      // This test checks that the second query is created with the correct
      // startAfter() once the RecursiveDelete instance is below the
      // MIN_PENDING_OPS threshold to send the next batch. Use lower limits
      // than the actual RecursiveDelete class in order to make this test run fast.
      const maxPendingOps = 100;
      const minPendingOps = 11;
      const maxBatchSize = 10;
      const cutoff = maxPendingOps - minPendingOps;
      let numDeletesBuffered = 0;

      // This deferred promise is used to delay the BatchWriteResponses from
      // returning in order to create the situation where the number of pending
      // operations is less than `minPendingOps`.
      const bufferDeferred = new Deferred<void>();

      // This deferred completes when the second query is run.
      const secondQueryDeferred = new Deferred<void>();

      const nLengthArray = (n: number): number[] => Array.from(Array(n).keys());

      const firstStream = nLengthArray(maxPendingOps).map((_, i) =>
        result('doc' + i),
      );

      const batchWriteResponse = mergeResponses(
        nLengthArray(maxBatchSize).map(() => successResponse(1)),
      );

      // Use an array to store that the queryEquals() method succeeded, since
      // thrown errors do not result in the recursiveDelete() method failing.
      const called: number[] = [];
      const overrides: ApiOverride = {
        runQuery: request => {
          if (called.length === 0) {
            queryEquals(
              request,
              select('__name__'),
              allDescendants(/* kindless= */ true),
              fieldFiltersQuery(
                '__name__',
                'GREATER_THAN_OR_EQUAL',
                startAt('root'),
                '__name__',
                'LESS_THAN',
                endAt('root'),
              ),
              limit(maxPendingOps),
            );
            called.push(1);
            return stream(...firstStream);
          } else if (called.length === 1) {
            queryEquals(
              request,
              select('__name__'),
              allDescendants(/* kindless= */ true),
              orderBy('__name__', 'ASCENDING'),
              fieldFiltersQuery(
                '__name__',
                'GREATER_THAN_OR_EQUAL',
                startAt('root'),
                '__name__',
                'LESS_THAN',
                endAt('root'),
              ),
              queryStartAt(false, {
                referenceValue:
                  `projects/${PROJECT_ID}/databases/(default)/` +
                  'documents/collectionId/doc' +
                  (maxPendingOps - 1),
              }),
              limit(maxPendingOps),
            );
            called.push(2);
            secondQueryDeferred.resolve();
            return stream();
          } else {
            called.push(3);
            return stream();
          }
        },
        batchWrite: () => {
          const returnedResponse = response({
            writeResults: batchWriteResponse.writeResults,
            status: batchWriteResponse.status,
          });
          if (numDeletesBuffered < cutoff) {
            numDeletesBuffered += batchWriteResponse.writeResults!.length;

            // By waiting for `bufferFuture` to complete, we can guarantee that
            // the writes complete after all documents are streamed. Without
            // this future, the test can race and complete the writes before
            // the stream is finished, which is a different scenario this test
            // is not for.
            return bufferDeferred.promise.then(() => returnedResponse);
          } else {
            // Once there are `cutoff` pending deletes, completing the future
            // allows enough responses to be returned such that the number of
            // pending deletes should be less than `minPendingOps`. This allows
            // us to test that the second query is made.
            bufferDeferred.resolve();
            return secondQueryDeferred.promise.then(() => returnedResponse);
          }
        },
      };
      const firestore = await createInstance(overrides);

      const bulkWriter = firestore.bulkWriter();
      bulkWriter._setMaxBatchSize(maxBatchSize);
      await firestore._recursiveDelete(
        firestore.collection('root'),
        maxPendingOps,
        minPendingOps,
        bulkWriter,
      );
      expect(called).to.deep.equal([1, 2]);
    });
  });

  describe('deletes', () => {
    it('collection', async () => {
      // The four documents are under the 'collectionId' collection, and is
      // automatically prefixed by `instantiateInstance()`.
      firestore = await instantiateInstance([
        'anna',
        'bob',
        'bob/children/charlie',
        'bob/children/daniel',
      ]);
      await firestore.recursiveDelete(firestore.collection('collectionId'));
    });

    it('document along with reference', async () => {
      firestore = await instantiateInstance(
        ['bob/children/brian', 'bob/children/charlie', 'bob/children/daniel'],
        'bob',
      );
      await firestore.recursiveDelete(
        firestore.collection('collectionId').doc('bob'),
      );
    });

    it('promise is rejected with the last error code if writes fail', async () => {
      firestore = await instantiateInstance(
        ['bob/children/brian', 'bob/children/charlie', 'bob/children/daniel'],
        'bob',
        mergeResponses([
          successResponse(1),
          failedResponse(Status.CANCELLED),
          failedResponse(Status.PERMISSION_DENIED),
          successResponse(1),
        ]),
      );
      try {
        await firestore.recursiveDelete(
          firestore.collection('collectionId').doc('bob'),
        );
        fail('recursiveDelete should have failed');
      } catch (err) {
        expect(err.code).to.equal(Status.PERMISSION_DENIED);
        expect(err.message).to.contain('2 deletes failed');
      }
    });

    it('promise is rejected if BulkWriter success handler fails', async () => {
      firestore = await instantiateInstance(['bob/children/brian'], 'bob');

      const bulkWriter = firestore.bulkWriter();
      bulkWriter.onWriteResult(() => {
        throw new Error('User provided result callback failed');
      });

      try {
        await firestore.recursiveDelete(
          firestore.collection('collectionId').doc('bob'),
          bulkWriter,
        );
        fail('recursiveDelete() should have failed');
      } catch (err) {
        expect(err.message).to.contain('2 deletes failed');
        expect(err.stack).to.contain('User provided result callback failed');
      }
    });

    it('BulkWriter success handler provides the correct references and results', async () => {
      firestore = await instantiateInstance(
        ['bob/children/brian', 'bob/children/charlie'],
        'bob',
        mergeResponses([
          successResponse(1),
          successResponse(2),
          successResponse(3),
        ]),
      );
      const results: number[] = [];
      const refs: string[] = [];
      const bulkWriter = firestore.bulkWriter();
      bulkWriter.onWriteResult((ref, result) => {
        results.push(result.writeTime.seconds);
        refs.push(ref.path);
      });

      await firestore.recursiveDelete(
        firestore.collection('collectionId').doc('bob'),
        bulkWriter,
      );
      expect(results).to.deep.equal([1, 2, 3]);
      expect(refs).to.deep.equal([
        'collectionId/bob/children/brian',
        'collectionId/bob/children/charlie',
        'collectionId/bob',
      ]);
    });

    it('BulkWriter error handler provides the correct information', async () => {
      firestore = await instantiateInstance(
        ['bob/children/brian', 'bob/children/charlie'],
        'bob',
        mergeResponses([
          failedResponse(Status.PERMISSION_DENIED),
          failedResponse(Status.UNAVAILABLE),
          failedResponse(Status.INTERNAL),
        ]),
      );
      const codes: Status[] = [];
      const refs: string[] = [];
      const bulkWriter = firestore.bulkWriter();
      bulkWriter.onWriteError(err => {
        codes.push(err.code as unknown as Status);
        refs.push(err.documentRef.path);
        return false;
      });

      try {
        await firestore.recursiveDelete(
          firestore.collection('collectionId').doc('bob'),
          bulkWriter,
        );
        fail('recursiveDelete() should have failed');
      } catch (err) {
        expect(codes).to.deep.equal([
          Status.PERMISSION_DENIED,
          Status.UNAVAILABLE,
          Status.INTERNAL,
        ]);
        expect(refs).to.deep.equal([
          'collectionId/bob/children/brian',
          'collectionId/bob/children/charlie',
          'collectionId/bob',
        ]);
      }
    });

    it('promise is rejected if provided reference was not deleted', async () => {
      const overrides: ApiOverride = {
        runQuery: () => stream(),
        batchWrite: () => {
          throw new GoogleError('batchWrite() failed in test');
        },
      };
      firestore = await createInstance(overrides);
      try {
        await firestore.recursiveDelete(firestore.doc('root/doc'));
      } catch (err) {
        expect(err.stack).to.contain('batchWrite() failed in test');
      }
    });

    it('retries stream errors', async () => {
      let attempts = 0;
      const overrides: ApiOverride = {
        runQuery: () => {
          attempts++;
          throw new Error('runQuery() error in test');
        },
        batchWrite: () => response(successResponse(1)),
      };
      firestore = await createInstance(overrides);
      try {
        await firestore.recursiveDelete(firestore.doc('coll/foo'));
        fail('recursiveDelete() should have failed');
      } catch (err) {
        expect(err.code).to.equal(Status.UNAVAILABLE);
        expect(err.stack).to.contain('Failed to fetch children documents');
        expect(err.stack).to.contain('runQuery() error in test');
        expect(attempts).to.equal(MAX_REQUEST_RETRIES);
      }
    });

    it('handles successful stream error retries', async () => {
      let requestCounter = 0;
      const streamItems = [
        [result('a'), result('b'), new Error('runQuery() error in test')],
        [new Error('runQuery() error in test')],
        [result('c'), new Error('runQuery() error in test')],
        [result('d')],
      ];

      const overrides: ApiOverride = {
        runQuery: () => {
          const streamPromise = stream(...streamItems[requestCounter]);
          requestCounter++;
          return streamPromise;
        },
        batchWrite: request => {
          const expected = createRequest([
            deleteOp('a'),
            deleteOp('b'),
            deleteOp('c'),
            deleteOp('d'),
          ]);
          try {
            expect(request.writes).to.deep.equal(expected.writes);
          } catch (e) {
            batchWriteError = e;
          }
          return response(
            mergeResponses(expected.writes!.map(() => successResponse(1))),
          );
        },
      };
      firestore = await createInstance(overrides);
      await firestore.recursiveDelete(firestore.collection('letters'));
    });

    it('handles multiple calls to recursiveDelete()', async () => {
      let requestCounter = 0;
      const docIds = ['a', 'b', 'c'];
      const streamItems = docIds.map(docId => [result(docId)]);
      const expected = docIds.map(docId => createRequest([deleteOp(docId)]));
      const responses = docIds.map(() => successResponse(1));

      const overrides: ApiOverride = {
        runQuery: () => {
          return stream(...streamItems[requestCounter]);
        },
        batchWrite: request => {
          try {
            expect(request.writes).to.deep.equal(
              expected[requestCounter]!.writes,
            );
          } catch (e) {
            batchWriteError = e;
          }
          const responsePromise = response(responses[requestCounter]);
          requestCounter++;
          return responsePromise;
        },
      };
      firestore = await createInstance(overrides);
      await firestore.recursiveDelete(firestore.collection('a'));
      await firestore.recursiveDelete(firestore.collection('b'));
      await firestore.recursiveDelete(firestore.collection('c'));
    });

    it('accepts references with converters', async () => {
      const overrides: ApiOverride = {
        runQuery: () => stream(),
        // Include response for deleting the provided document reference.
        batchWrite: () => response(successResponse(1)),
      };
      firestore = await createInstance(overrides);
      await firestore.recursiveDelete(
        firestore.doc('root/doc').withConverter(postConverter),
      );
      await firestore.recursiveDelete(
        firestore.collection('root').withConverter(postConverter),
      );
    });
  });

  describe('BulkWriter instance', () => {
    it('uses custom BulkWriter instance if provided', async () => {
      firestore = await instantiateInstance(['a', 'b', 'c']);
      let callbackCount = 0;
      const bulkWriter = firestore.bulkWriter();
      bulkWriter.onWriteResult(() => {
        callbackCount++;
      });
      await firestore.recursiveDelete(firestore.collection('foo'), bulkWriter);
      expect(callbackCount).to.equal(3);
    });

    it('default: uses the same BulkWriter instance across calls', async () => {
      const overrides: ApiOverride = {
        runQuery: () => stream(),
      };
      firestore = await createInstance(overrides);
      const spy = sinon.spy(firestore, 'bulkWriter');

      await firestore.recursiveDelete(firestore.collection('foo'));
      await firestore.recursiveDelete(firestore.collection('boo'));
      await firestore.recursiveDelete(firestore.collection('moo'));

      // Only the first recursiveDelete() call should have called the
      // constructor. Subsequent calls should have used the same bulkWriter.
      expect(spy.callCount).to.equal(1);
    });

    it('throws error if BulkWriter instance is closed', async () => {
      firestore = await createInstance();
      const bulkWriter = firestore.bulkWriter();
      await bulkWriter.close();
      await expect(
        () => () =>
          firestore.recursiveDelete(firestore.collection('foo'), bulkWriter),
      ).to.throw;
    });
  });
});
