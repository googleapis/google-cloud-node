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

import {describe, it} from 'mocha';
import {expect, use} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as extend from 'extend';
import {GoogleError, Status} from 'google-gax';
import {Duplex} from 'stream';
import * as through2 from 'through2';

import * as proto from '../protos/firestore_v1_proto_api';
import * as Firestore from '../src';
import {DocumentReference, FieldPath, Timestamp, Transaction} from '../src';
import {setTimeoutHandler} from '../src/backoff';
import {
  ApiOverride,
  createInstance,
  InvalidApiUsage,
  response,
  postConverter,
  Post,
  postConverterMerge,
} from './util/helpers';

import api = proto.google.firestore.v1;
import {
  ReadOnlyTransactionOptions,
  ReadWriteTransactionOptions,
} from '@google-cloud/firestore';

use(chaiAsPromised);

const PROJECT_ID = 'test-project';
const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;
const COLLECTION_ROOT = `${DATABASE_ROOT}/documents/collectionId`;
const DOCUMENT_ID = 'documentId';
const DOCUMENT_NAME = `${COLLECTION_ROOT}/${DOCUMENT_ID}`;

// Change the argument to 'console.log' to enable debug output.
Firestore.setLogFunction(null);

/** Helper to create a transaction ID from either a string or a Uint8Array. */
function transactionId(transaction: Uint8Array | string): Uint8Array {
  if (typeof transaction === 'string') {
    return Buffer.from(transaction);
  } else {
    return transaction;
  }
}

/**
 * The format the transaction tests use to verify transaction behavior. The
 * format defines an expected request and its expected response or error code.
 */
interface TransactionStep {
  type: 'begin' | 'getDocument' | 'query' | 'commit' | 'rollback' | 'backoff';
  delay?: 'exponential' | 'max';
  request?:
    | api.ICommitRequest
    | api.IBeginTransactionRequest
    | api.IRunQueryRequest;
  error?: Error;
  response?: api.ICommitResponse | api.IBeginTransactionResponse;
  stream?: Duplex;
}

function commit(
  transaction: Uint8Array | string | undefined,
  writes?: api.IWrite[],
  error?: Error,
): TransactionStep {
  const proto: api.ICommitRequest = {
    database: DATABASE_ROOT,
  };
  if (transaction) {
    proto.transaction = transactionId(transaction);
  }

  proto.writes = writes || [];

  const response: api.ICommitResponse = {
    commitTime: {
      nanos: 0,
      seconds: 0,
    },
    writeResults: [],
  };

  for (let i = 0; i < proto.writes!.length; ++i) {
    response.writeResults!.push({
      updateTime: {
        nanos: 0,
        seconds: 0,
      },
    });
  }

  return {
    type: 'commit',
    request: proto,
    error,
    response,
  };
}

function rollback(
  transaction: Uint8Array | string,
  error?: Error,
): TransactionStep {
  const proto = {
    database: DATABASE_ROOT,
    transaction: transactionId(transaction),
  };

  return {
    type: 'rollback',
    request: proto,
    error,
    response: {},
  };
}

function getAll(
  docs: string[],
  options?: {
    fieldMask?: string[];
    transactionId?: Uint8Array | string;
    newTransaction?: {
      readOnly?: {readTime?: Timestamp};
      readWrite?: {prevTransactionId?: Uint8Array | string};
    };
    readTime?: Timestamp;
    error?: Error;
  },
): TransactionStep {
  const request: api.IBatchGetDocumentsRequest = {
    database: DATABASE_ROOT,
    documents: [],
  };
  if (options?.transactionId) {
    request.transaction = transactionId(options.transactionId);
  } else if (options?.newTransaction?.readWrite) {
    request.newTransaction = {
      readWrite: options.newTransaction.readWrite.prevTransactionId
        ? {
            retryTransaction: transactionId(
              options.newTransaction.readWrite.prevTransactionId,
            ),
          }
        : {},
    };
  } else if (options?.newTransaction?.readOnly) {
    request.newTransaction = {
      readOnly: options.newTransaction.readOnly.readTime
        ? {
            readTime:
              options?.newTransaction?.readOnly.readTime.toProto()
                .timestampValue,
          }
        : {},
    };
  }

  if (options?.readTime) {
    request.readTime = options.readTime.toProto().timestampValue;
  }
  if (options?.fieldMask) {
    request.mask = {fieldPaths: options.fieldMask};
  }

  const stream = through2.obj();

  if (options?.newTransaction) {
    // Increment transaction ID (e.g. foo1 -> foo2)
    // or otherwise send foo1 by default for new transactions
    const transactionId = options.newTransaction.readWrite?.prevTransactionId
      ? options.newTransaction.readWrite.prevTransactionId.slice(0, -1) +
        String(
          Number(options.newTransaction.readWrite.prevTransactionId.slice(-1)) +
            1,
        )
      : 'foo1';
    setImmediate(() => {
      stream.push({
        transaction: Buffer.from(transactionId),
      });
    });
  }

  for (const doc of docs) {
    const name = `${COLLECTION_ROOT}/${doc}`;
    request.documents!.push(name);

    setImmediate(() => {
      stream.push({
        found: {
          name,
          createTime: {seconds: 1, nanos: 2},
          updateTime: {seconds: 3, nanos: 4},
        },
        readTime: {seconds: 5, nanos: 6},
      });
    });
  }

  setImmediate(() => {
    if (options?.error) {
      stream.destroy(options.error);
    } else {
      stream.push(null);
    }
  });

  return {
    type: 'getDocument',
    request,
    error: options?.error,
    stream,
  };
}

function getDocument(options?: {
  document?: string;
  transactionId?: Uint8Array | string;
  newTransaction?: {
    readOnly?: {readTime?: Timestamp};
    readWrite?: {prevTransactionId?: Uint8Array | string};
  };
  readTime?: Timestamp;
  error?: Error;
}): TransactionStep {
  return getAll([options?.document || DOCUMENT_ID], options);
}

function query(options?: {
  transactionId?: Uint8Array | string;
  newTransaction?: {
    readOnly?: {readTime?: Timestamp};
    readWrite?: {prevTransactionId?: Uint8Array | string};
  };
  readTime?: Timestamp;
  error?: Error;
}): TransactionStep {
  const request: api.IRunQueryRequest = {
    parent: `${DATABASE_ROOT}/documents`,
    structuredQuery: {
      from: [
        {
          collectionId: 'collectionId',
        },
      ],
      where: {
        fieldFilter: {
          field: {
            fieldPath: 'foo',
          },
          op: 'EQUAL',
          value: {
            stringValue: 'bar',
          },
        },
      },
    },
  };
  if (options?.transactionId) {
    request.transaction = transactionId(options.transactionId);
  } else if (options?.newTransaction?.readOnly) {
    request.newTransaction = {
      readOnly: options.newTransaction.readOnly.readTime
        ? {
            readTime:
              options.newTransaction.readOnly.readTime.toProto().timestampValue,
          }
        : {},
    };
  } else if (options?.newTransaction?.readWrite) {
    request.newTransaction = {
      readWrite: options.newTransaction.readWrite.prevTransactionId
        ? {
            retryTransaction: transactionId(
              options.newTransaction.readWrite.prevTransactionId,
            ),
          }
        : {},
    };
  }

  if (options?.readTime) {
    request.readTime = options.readTime.toProto().timestampValue;
  }

  const stream = through2.obj();

  if (options?.newTransaction) {
    // Increment transaction ID (e.g. foo1 -> foo2)
    // or otherwise send foo1 by default for new transactions
    const transactionId = options.newTransaction.readWrite?.prevTransactionId
      ? options.newTransaction.readWrite.prevTransactionId.slice(0, -1) +
        String(
          Number(options.newTransaction.readWrite.prevTransactionId.slice(-1)) +
            1,
        )
      : 'foo1';
    setImmediate(() => {
      stream.push({
        transaction: Buffer.from(transactionId),
      });
    });
  }

  setImmediate(() => {
    // Push a single result even for errored queries, as this avoids implicit
    // stream retries.
    stream.push({
      document: {
        name: DOCUMENT_NAME,
        createTime: {seconds: 1, nanos: 2},
        updateTime: {seconds: 3, nanos: 4},
      },
      readTime: {seconds: 5, nanos: 6},
    });

    if (options?.error) {
      stream.destroy(options.error);
    } else {
      stream.push(null);
    }
  });

  return {
    type: 'query',
    request,
    stream,
  };
}

function backoff(maxDelay?: boolean): TransactionStep {
  return {
    type: 'backoff',
    delay: maxDelay ? 'max' : 'exponential',
  };
}

/**
 * Asserts that the given transaction function issues the expected requests.
 */
function runTransaction<T>(
  transactionOptions: ReadWriteTransactionOptions | ReadOnlyTransactionOptions,
  transactionCallback: (
    transaction: Transaction,
    docRef: DocumentReference,
  ) => Promise<T>,
  ...expectedRequests: TransactionStep[]
) {
  const overrides: ApiOverride = {
    beginTransaction: () => {
      // Transactions are lazily started upon first read so the beginTransaction
      // API should never be called
      expect.fail('beginTransaction was called');
    },
    commit: (actual, options) => {
      // Ensure that we do not specify custom retry behavior for transactional
      // commits.
      expect(options!.retry).to.be.undefined;

      const request = expectedRequests.shift()!;
      expect(request.type).to.equal('commit');
      expect(actual).to.deep.eq(request.request);
      if (request.error) {
        return Promise.reject(request.error);
      } else {
        return response(request.response as api.ICommitResponse);
      }
    },
    rollback: actual => {
      const request = expectedRequests.shift()!;
      expect(request.type).to.equal('rollback');
      expect(actual).to.deep.eq(request.request);
      if (request.error) {
        return Promise.reject(request.error);
      } else {
        return response({});
      }
    },
    batchGetDocuments: actual => {
      const request = expectedRequests.shift()!;
      expect(request.type).to.equal('getDocument');
      expect(actual).to.deep.eq(request.request);
      return request.stream!;
    },
    runQuery: actual => {
      const request = expectedRequests.shift()!;
      expect(request.type).to.equal('query');
      actual = extend(true, {}, actual); // Remove undefined properties
      expect(actual).to.deep.eq(request.request);
      return request.stream!;
    },
  };

  return createInstance(overrides).then(async firestore => {
    try {
      setTimeoutHandler((callback, timeout) => {
        if (timeout > 0) {
          const request = expectedRequests.shift()!;
          expect(request.type).to.equal('backoff');
          if (request.delay === 'max') {
            // Make sure that the delay is at least 30 seconds, which is based
            // on the maximum delay of 60 seconds and a jitter factor of 50%.
            expect(timeout).to.not.be.lessThan(30 * 1000);
          }
        }
        callback();
      });

      return await firestore.runTransaction(transaction => {
        const docRef = firestore.doc('collectionId/documentId');
        return transactionCallback(transaction, docRef);
      }, transactionOptions);
    } finally {
      setTimeoutHandler(setTimeout);
      expect(expectedRequests.length).to.equal(
        0,
        'Missing requests: ' + expectedRequests.map(r => r.type).join(', '),
      );
    }
  });
}

describe('successful transactions', () => {
  it('empty transaction', () => {
    return runTransaction(/* transactionOptions= */ {}, () => {
      return Promise.resolve();
    });
  });

  it('returns value', () => {
    return runTransaction(/* transactionOptions= */ {}, () => {
      return Promise.resolve('bar');
    }).then(val => {
      expect(val).to.equal('bar');
    });
  });
});

describe('failed transactions', () => {
  const retryBehavior: {[code: number]: boolean} = {
    [Status.CANCELLED]: true,
    [Status.UNKNOWN]: true,
    [Status.INVALID_ARGUMENT]: false,
    [Status.DEADLINE_EXCEEDED]: true,
    [Status.NOT_FOUND]: false,
    [Status.ALREADY_EXISTS]: false,
    [Status.RESOURCE_EXHAUSTED]: true,
    [Status.FAILED_PRECONDITION]: false,
    [Status.ABORTED]: true,
    [Status.OUT_OF_RANGE]: false,
    [Status.UNIMPLEMENTED]: false,
    [Status.INTERNAL]: true,
    [Status.UNAVAILABLE]: true,
    [Status.DATA_LOSS]: false,
    [Status.UNAUTHENTICATED]: true,
  };

  it('retries commit based on error code', async () => {
    // The transaction needs to perform a read or write otherwise it will be
    // a no-op and will not retry
    const transactionFunction = async (
      trans: Transaction,
      ref: DocumentReference,
    ) => {
      await trans.get(ref);
    };

    for (const [errorCode, retry] of Object.entries(retryBehavior)) {
      const serverError = new GoogleError('Test Error');
      serverError.code = Number(errorCode) as Status;

      if (retry) {
        await runTransaction(
          /* transactionOptions= */ {},
          transactionFunction,
          getDocument({newTransaction: {readWrite: {}}}),
          commit('foo1', undefined, serverError),
          rollback('foo1'),
          backoff(),
          getDocument({
            newTransaction: {readWrite: {prevTransactionId: 'foo1'}},
          }),
          commit('foo2'),
        );
      } else {
        await expect(
          runTransaction(
            /* transactionOptions= */ {},
            transactionFunction,
            getDocument({newTransaction: {readWrite: {}}}),
            commit('foo1', undefined, serverError),
            rollback('foo1'),
          ),
        ).to.eventually.be.rejected;
      }
    }
  });

  it('retries commit for expired transaction', async () => {
    // The transaction needs to perform a read or write otherwise it will be
    // a no-op and will not retry
    const transactionFunction = async (
      trans: Transaction,
      ref: DocumentReference,
    ) => {
      await trans.get(ref);
    };

    const serverError = new GoogleError(
      'The referenced transaction has expired or is no longer valid.',
    );
    serverError.code = Status.INVALID_ARGUMENT;

    await runTransaction(
      /* transactionOptions= */ {},
      transactionFunction,
      getDocument({newTransaction: {readWrite: {}}}),
      commit('foo1', undefined, serverError),
      rollback('foo1'),
      backoff(),
      getDocument({newTransaction: {readWrite: {prevTransactionId: 'foo1'}}}),
      commit('foo2'),
    );
  });

  it('retries runQuery based on error code', async () => {
    const transactionFunction = (
      transaction: Transaction,
      docRef: DocumentReference,
    ) => {
      const query = docRef.parent.where('foo', '==', 'bar');
      return transaction.get(query);
    };

    for (const [errorCode, retry] of Object.entries(retryBehavior)) {
      const serverError = new GoogleError('Test Error');
      serverError.code = Number(errorCode) as Status;

      if (retry) {
        await runTransaction(
          /* transactionOptions= */ {},
          transactionFunction,
          query({newTransaction: {readWrite: {}}, error: serverError}),
          // No rollback because the lazy-start operation failed
          backoff(),
          query({newTransaction: {readWrite: {}}}),
          commit('foo1'),
        );
      } else {
        await expect(
          runTransaction(
            /* transactionOptions= */ {},
            transactionFunction,
            query({newTransaction: {readWrite: {}}, error: serverError}),
            // No rollback because the lazy-start operation failed
          ),
        ).to.eventually.be.rejected;
      }
    }
  });

  it('retries batchGetDocuments based on error code', async () => {
    const transactionFunction = (
      transaction: Transaction,
      docRef: DocumentReference,
    ) => {
      return transaction.get(docRef);
    };

    for (const [errorCode, retry] of Object.entries(retryBehavior)) {
      const serverError = new GoogleError('Test Error');
      serverError.code = Number(errorCode) as Status;

      if (retry) {
        await runTransaction(
          /* transactionOptions= */ {},
          transactionFunction,
          getDocument({newTransaction: {readWrite: {}}, error: serverError}),
          // No rollback because the lazy-start operation failed
          backoff(),
          getDocument({newTransaction: {readWrite: {}}}),
          commit('foo1'),
        );
      } else {
        await expect(
          runTransaction(
            /* transactionOptions= */ {},
            transactionFunction,
            getDocument({newTransaction: {readWrite: {}}, error: serverError}),
            // No rollback because the lazy-start operation failed
          ),
        ).to.eventually.be.rejected;
      }
    }
  });

  it('retries rollback based on error code', async () => {
    const transactionFunction = async (
      trans: Transaction,
      doc: DocumentReference,
    ) => {
      await trans.get(doc);
    };

    for (const [errorCode, retry] of Object.entries(retryBehavior)) {
      const serverError = new GoogleError('Test Error');
      serverError.code = Number(errorCode) as Status;

      if (retry) {
        await runTransaction(
          /* transactionOptions= */ {},
          transactionFunction,
          getDocument({newTransaction: {readWrite: {}}}),
          commit('foo1', /* writes=*/ undefined, serverError),
          rollback('foo1', serverError),
          backoff(),
          getDocument({
            newTransaction: {readWrite: {prevTransactionId: 'foo1'}},
          }),
          commit('foo2'),
        );
      } else {
        await expect(
          runTransaction(
            /* transactionOptions= */ {},
            transactionFunction,
            getDocument({newTransaction: {readWrite: {}}}),
            commit('foo1', /* writes=*/ undefined, serverError),
            rollback('foo1', serverError),
          ),
        ).to.eventually.be.rejected;
      }
    }
  });

  it('requires update function', () => {
    const overrides: ApiOverride = {
      beginTransaction: () => Promise.reject(),
    };

    return createInstance(overrides).then(firestore => {
      expect(() => (firestore as InvalidApiUsage).runTransaction()).to.throw(
        'Value for argument "updateFunction" is not a valid function.',
      );
    });
  });

  it('requires valid retry number', () => {
    const overrides: ApiOverride = {
      beginTransaction: () => Promise.reject(),
    };

    return createInstance(overrides).then(firestore => {
      expect(() =>
        firestore.runTransaction(() => Promise.resolve(), {
          maxAttempts: 'foo' as InvalidApiUsage,
        }),
      ).to.throw(
        'Value for argument "transactionOptions.maxAttempts" is not a valid integer.',
      );

      expect(() =>
        firestore.runTransaction(() => Promise.resolve(), {maxAttempts: 0}),
      ).to.throw(
        'Value for argument "transactionOptions.maxAttempts" must be within [1, Infinity] inclusive, but was: 0',
      );
    });
  });

  it('requires a promise', () => {
    return expect(
      runTransaction(
        /* transactionOptions= */ {},
        (() => {}) as InvalidApiUsage,
      ),
    ).to.eventually.be.rejectedWith(
      'You must return a Promise in your transaction()-callback.',
    );
  });

  it('handles exception', () => {
    return createInstance().then(firestore => {
      firestore.requestStream = () => {
        return Promise.reject(new Error('Expected exception'));
      };

      return expect(
        firestore.runTransaction(async trans => {
          // Need to perform a read or write otherwise transaction is a no-op
          // with zero requests
          await trans.get(firestore.doc('collectionId/documentId'));
        }),
      ).to.eventually.be.rejectedWith('Expected exception');
    });
  });

  it("doesn't retry custom user exceptions in callback", () => {
    return expect(
      runTransaction(/* transactionOptions= */ {}, () => {
        return Promise.reject('request exception');
      }),
    ).to.eventually.be.rejectedWith('request exception');
  });

  it('limits the retry attempts', () => {
    const err = new GoogleError('Server disconnect');
    err.code = Status.UNAVAILABLE;

    return expect(
      runTransaction(
        /* transactionOptions= */ {},
        (trans, doc) => trans.get(doc),
        getDocument({newTransaction: {readWrite: {}}}),
        commit('foo1', [], err),
        rollback('foo1'),
        backoff(),
        getDocument({newTransaction: {readWrite: {prevTransactionId: 'foo1'}}}),
        commit('foo2', [], err),
        rollback('foo2'),
        backoff(),
        getDocument({newTransaction: {readWrite: {prevTransactionId: 'foo2'}}}),
        commit('foo3', [], err),
        rollback('foo3'),
        backoff(),
        getDocument({newTransaction: {readWrite: {prevTransactionId: 'foo3'}}}),
        commit('foo4', [], err),
        rollback('foo4'),
        backoff(),
        getDocument({newTransaction: {readWrite: {prevTransactionId: 'foo4'}}}),
        commit('foo5', [], new Error('Final exception')),
        rollback('foo5'),
      ),
    ).to.eventually.be.rejectedWith('Final exception');
  });

  it('uses maximum backoff for RESOURCE_EXHAUSTED', () => {
    const err = new GoogleError('Server disconnect');
    err.code = Status.RESOURCE_EXHAUSTED;

    return runTransaction(
      /* transactionOptions= */ {},
      (trans, doc) => trans.get(doc),
      getDocument({newTransaction: {readWrite: {}}}),
      commit('foo1', [], err),
      rollback('foo1'),
      backoff(/* maxDelay= */ true),
      getDocument({newTransaction: {readWrite: {prevTransactionId: 'foo1'}}}),
      commit('foo2'),
    );
  });
});

describe('transaction operations', () => {
  it('support get with document ref', () => {
    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        return transaction.get(docRef).then(doc => {
          expect(doc.id).to.equal('documentId');
        });
      },
      getDocument({newTransaction: {readWrite: {}}}),
      commit('foo1'),
    );
  });

  it('requires a query or document for get', () => {
    return runTransaction(
      /* transactionOptions= */ {},
      (transaction: InvalidApiUsage) => {
        expect(() => transaction.get()).to.throw(
          'Value for argument "refOrQuery" must be a DocumentReference, Query, or AggregateQuery.',
        );

        expect(() => transaction.get('foo')).to.throw(
          'Value for argument "refOrQuery" must be a DocumentReference, Query, or AggregateQuery.',
        );

        return Promise.resolve();
      },
    );
  });

  it('enforce that gets come before writes', () => {
    return expect(
      runTransaction(/* transactionOptions= */ {}, (transaction, docRef) => {
        transaction.set(docRef, {foo: 'bar'});
        return transaction.get(docRef);
      }),
    ).to.eventually.be.rejectedWith(
      'Firestore transactions require all reads to be executed before all writes.',
    );
  });

  it('enforce read-only cannot write', () => {
    return expect(
      runTransaction(
        /* transactionOptions= */ {readOnly: true},
        async (transaction, docRef) => {
          transaction.set(docRef, {foo: 'bar'});
        },
      ),
    ).to.eventually.be.rejectedWith(
      'Firestore read-only transactions cannot execute writes.',
    );
  });

  it('enforce read-only with readTime cannot write', () => {
    return expect(
      runTransaction(
        /* transactionOptions= */ {
          readOnly: true,
          readTime: Timestamp.fromMillis(3),
        },
        async (transaction, docRef) => {
          transaction.set(docRef, {foo: 'bar'});
        },
      ),
    ).to.eventually.be.rejectedWith(
      'Firestore read-only transactions cannot execute writes.',
    );
  });

  it('support get with query', () => {
    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        const query = docRef.parent.where('foo', '==', 'bar');
        return transaction.get(query).then(results => {
          expect(results.docs[0].id).to.equal('documentId');
        });
      },
      query({newTransaction: {readWrite: {}}}),
      commit('foo1'),
    );
  });

  it('supports read-only transactions', () => {
    return runTransaction(
      {readOnly: true},
      (transaction, docRef) => transaction.get(docRef),
      getDocument({newTransaction: {readOnly: {}}}),
    );
  });

  it('supports get read-only transactions with read time', () => {
    return runTransaction(
      {
        readOnly: true,
        readTime: Timestamp.fromMillis(1),
      },
      (transaction, docRef) => transaction.get(docRef),
      getDocument({readTime: Timestamp.fromMillis(1)}),
    );
  });

  it('support query read-only transactions with read time', () => {
    return runTransaction(
      {
        readOnly: true,
        readTime: Timestamp.fromMillis(2),
      },
      (transaction, docRef) => {
        const query = docRef.parent.where('foo', '==', 'bar');
        return transaction.get(query).then(results => {
          expect(results.docs[0].id).to.equal('documentId');
        });
      },
      query({readTime: Timestamp.fromMillis(2)}),
    );
  });

  it('support getAll', () => {
    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        const firstDoc = docRef.parent.doc('firstDocument');
        const secondDoc = docRef.parent.doc('secondDocument');

        return transaction.getAll(firstDoc, secondDoc).then(docs => {
          expect(docs.length).to.equal(2);
          expect(docs[0].id).to.equal('firstDocument');
          expect(docs[1].id).to.equal('secondDocument');
        });
      },
      getAll(['firstDocument', 'secondDocument'], {
        newTransaction: {readWrite: {}},
      }),
      commit('foo1'),
    );
  });

  it('support getAll with field mask', () => {
    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        const doc = docRef.parent.doc('doc');

        return transaction.getAll(doc, {
          fieldMask: ['a.b', new FieldPath('a.b')],
        });
      },
      getAll(['doc'], {
        newTransaction: {readWrite: {}},
        fieldMask: ['a.b', '`a.b`'],
      }),
      commit('foo1'),
    );
  });

  it('enforce that getAll come before writes', () => {
    return expect(
      runTransaction(/* transactionOptions= */ {}, (transaction, docRef) => {
        transaction.set(docRef, {foo: 'bar'});
        return transaction.getAll(docRef);
      }),
    ).to.eventually.be.rejectedWith(
      'Firestore transactions require all reads to be executed before all writes.',
    );
  });

  it('subsequent reads use transaction ID from initial read for read-write transaction', () => {
    return runTransaction(
      /* transactionOptions= */ {},
      async (transaction, docRef) => {
        const firstDoc = docRef.parent.doc('firstDocument');
        const secondDoc = docRef.parent.doc('secondDocument');
        const query = docRef.parent.where('foo', '==', 'bar');

        // Reads in parallel
        await Promise.all([
          transaction.get(firstDoc).then(doc => {
            expect(doc.id).to.equal('firstDocument');
          }),
          transaction.get(secondDoc).then(doc => {
            expect(doc.id).to.equal('secondDocument');
          }),
          transaction.get(query).then(results => {
            expect(results.docs[0].id).to.equal('documentId');
          }),
        ]);

        // Sequential reads
        const thirdDoc = docRef.parent.doc('thirdDocument');
        const doc = await transaction.get(thirdDoc);
        expect(doc.id).to.equal('thirdDocument');

        await transaction.get(query).then(results => {
          expect(results.docs[0].id).to.equal('documentId');
        });
      },
      getDocument({newTransaction: {readWrite: {}}, document: 'firstDocument'}),
      getDocument({transactionId: 'foo1', document: 'secondDocument'}),
      query({transactionId: 'foo1'}),
      getDocument({transactionId: 'foo1', document: 'thirdDocument'}),
      query({transactionId: 'foo1'}),
      commit('foo1'),
    );
  });

  it('subsequent reads use transaction ID from initial read for read-only transaction', () => {
    return runTransaction(
      /* transactionOptions= */ {readOnly: true},
      async (transaction, docRef) => {
        const firstDoc = docRef.parent.doc('firstDocument');
        const secondDoc = docRef.parent.doc('secondDocument');
        const query = docRef.parent.where('foo', '==', 'bar');

        // Reads in parallel
        await Promise.all([
          transaction.get(firstDoc).then(doc => {
            expect(doc.id).to.equal('firstDocument');
          }),
          transaction.get(secondDoc).then(doc => {
            expect(doc.id).to.equal('secondDocument');
          }),
          transaction.get(query).then(results => {
            expect(results.docs[0].id).to.equal('documentId');
          }),
        ]);

        // Sequential reads
        const thirdDoc = docRef.parent.doc('thirdDocument');
        const doc = await transaction.get(thirdDoc);
        expect(doc.id).to.equal('thirdDocument');

        await transaction.get(query).then(results => {
          expect(results.docs[0].id).to.equal('documentId');
        });
      },
      getDocument({newTransaction: {readOnly: {}}, document: 'firstDocument'}),
      getDocument({transactionId: 'foo1', document: 'secondDocument'}),
      query({transactionId: 'foo1'}),
      getDocument({transactionId: 'foo1', document: 'thirdDocument'}),
      query({transactionId: 'foo1'}),
    );
  });

  it('support create', () => {
    const create = {
      currentDocument: {
        exists: false,
      },
      update: {
        fields: {},
        name: DOCUMENT_NAME,
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        transaction.create(docRef, {});
        return Promise.resolve();
      },
      commit(undefined, [create]),
    );
  });

  it('support update', () => {
    const update = {
      currentDocument: {
        exists: true,
      },
      update: {
        fields: {
          a: {
            mapValue: {
              fields: {
                b: {
                  stringValue: 'c',
                },
              },
            },
          },
        },
        name: DOCUMENT_NAME,
      },
      updateMask: {
        fieldPaths: ['a.b'],
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        transaction.update(docRef, {'a.b': 'c'});
        transaction.update(docRef, 'a.b', 'c');
        transaction.update(docRef, new Firestore.FieldPath('a', 'b'), 'c');
        return Promise.resolve();
      },
      commit(undefined, [update, update, update]),
    );
  });

  it('support set', () => {
    const set = {
      update: {
        fields: {
          'a.b': {
            stringValue: 'c',
          },
        },
        name: DOCUMENT_NAME,
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        transaction.set(docRef, {'a.b': 'c'});
        return Promise.resolve();
      },
      commit(undefined, [set]),
    );
  });

  it('support set with merge', () => {
    const set = {
      update: {
        fields: {
          'a.b': {
            stringValue: 'c',
          },
        },
        name: DOCUMENT_NAME,
      },
      updateMask: {
        fieldPaths: ['`a.b`'],
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        transaction.set(docRef, {'a.b': 'c'}, {merge: true});
        return Promise.resolve();
      },
      commit(undefined, [set]),
    );
  });

  it('support set with partials and merge', () => {
    const set = {
      update: {
        fields: {
          title: {
            stringValue: 'story',
          },
        },
        name: DOCUMENT_NAME,
      },
      updateMask: {
        fieldPaths: ['title'],
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        const postRef = docRef.withConverter(postConverterMerge);
        transaction.set(postRef, {title: 'story'} as Partial<Post>, {
          merge: true,
        });
        return Promise.resolve();
      },
      commit(undefined, [set]),
    );
  });

  it('support set with partials and mergeFields', () => {
    const set = {
      update: {
        fields: {
          title: {
            stringValue: 'story',
          },
        },
        name: DOCUMENT_NAME,
      },
      updateMask: {
        fieldPaths: ['title'],
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        const postRef = docRef.withConverter(postConverter);
        transaction.set(
          postRef,
          {title: 'story', author: 'person'} as Partial<Post>,
          {
            mergeFields: ['title'],
          },
        );
        return Promise.resolve();
      },
      commit(undefined, [set]),
    );
  });

  it('support delete', () => {
    const remove = {
      delete: DOCUMENT_NAME,
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        transaction.delete(docRef);
        return Promise.resolve();
      },
      commit(undefined, [remove]),
    );
  });

  it('support multiple writes', () => {
    const remove = {
      delete: DOCUMENT_NAME,
    };

    const set = {
      update: {
        fields: {},
        name: DOCUMENT_NAME,
      },
    };

    return runTransaction(
      /* transactionOptions= */ {},
      (transaction, docRef) => {
        transaction.delete(docRef).set(docRef, {});
        return Promise.resolve();
      },
      commit(undefined, [remove, set]),
    );
  });
});
