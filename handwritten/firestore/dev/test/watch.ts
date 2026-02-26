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

import {DocumentData} from '@google-cloud/firestore';

import * as duplexify from 'duplexify';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import * as extend from 'extend';
import {GoogleError, Status} from 'google-gax';
import {Duplex, Transform} from 'stream';
import * as through2 from 'through2';

import {google} from '../protos/firestore_v1_proto_api';

import {
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  Firestore,
  GeoPoint,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  setLogFunction,
  Timestamp,
} from '../src';
import {MAX_RETRY_ATTEMPTS, setTimeoutHandler} from '../src/backoff';
import {DocumentSnapshotBuilder} from '../src/document';
import {DocumentChangeType} from '../src/document-change';
import {Serializer} from '../src/serializer';
import {WATCH_IDLE_TIMEOUT_MS} from '../src/watch';
import {createInstance, InvalidApiUsage, verifyInstance} from './util/helpers';
import api = google.firestore.v1;

// Change the argument to 'console.log' to enable debug output.
setLogFunction(null);

let PROJECT_ID = process.env.PROJECT_ID;
if (!PROJECT_ID) {
  PROJECT_ID = 'test-project';
}
/**
 * Asserts that the given list of docs match.
 * @param actual The computed docs array.
 * @param expected The expected docs array.
 */
function docsEqual(
  actual: QueryDocumentSnapshot[],
  expected: QueryDocumentSnapshot[],
): void {
  expect(actual.length).to.equal(expected.length);
  for (let i = 0; i < actual.length; i++) {
    expect(actual[i].ref.id).to.equal(expected[i].ref.id);
    expect(actual[i].data()).to.deep.eq(expected[i].data());
    expect(expected[i].createTime).to.be.an.instanceOf(Timestamp);
    expect(expected[i].updateTime).to.be.an.instanceOf(Timestamp);
  }
}

interface TestChange {
  type: DocumentChangeType;
  doc: QueryDocumentSnapshot;
}

interface TestSnapshot {
  docs: QueryDocumentSnapshot[];
  docChanges: TestChange[];
}

/**
 * Asserts that the given query snapshot matches the expected results.
 * @param lastSnapshot The previous snapshot that this snapshot is based upon.
 * @param version The current snapshot version to use for the comparison.
 * @param actual A QuerySnapshot with results.
 * @param expected Array of DocumentSnapshot.
 */
function snapshotsEqual(
  lastSnapshot: TestSnapshot,
  version: number,
  actual: Error | QuerySnapshot | undefined,
  expected: TestSnapshot,
): TestSnapshot {
  const localDocs = ([] as QueryDocumentSnapshot[]).concat(lastSnapshot.docs);

  expect(actual).to.be.an.instanceof(QuerySnapshot);

  const actualSnapshot = actual as QuerySnapshot;
  const actualDocChanges = actualSnapshot.docChanges();

  expect(actualDocChanges.length).to.equal(expected.docChanges.length);
  for (let i = 0; i < expected.docChanges.length; i++) {
    expect(actualDocChanges[i].type).to.equal(expected.docChanges[i].type);
    expect(actualDocChanges[i].doc.ref.id).to.equal(
      expected.docChanges[i].doc.ref.id,
    );
    expect(actualDocChanges[i].doc.data()).to.deep.eq(
      expected.docChanges[i].doc.data(),
    );
    const readVersion =
      actualDocChanges[i].type === 'removed' ? version - 1 : version;
    expect(
      actualDocChanges[i].doc.readTime.isEqual(new Timestamp(0, readVersion)),
    ).to.be.true;

    if (actualDocChanges[i].oldIndex !== -1) {
      localDocs.splice(actualDocChanges[i].oldIndex, 1);
    }

    if (actualDocChanges[i].newIndex !== -1) {
      localDocs.splice(
        actualDocChanges[i].newIndex,
        0,
        actualDocChanges[i].doc,
      );
    }
  }

  docsEqual(actualSnapshot.docs, expected.docs);
  docsEqual(localDocs, expected.docs);
  expect(actualSnapshot.readTime.isEqual(new Timestamp(0, version))).to.be.true;
  expect(actualSnapshot.size).to.equal(expected.docs.length);

  return {docs: actualSnapshot.docs, docChanges: actualDocChanges};
}

/*
 * Helper for constructing a snapshot.
 */
function snapshot(
  ref: DocumentReference,
  data: DocumentData,
): QueryDocumentSnapshot {
  const snapshot = new DocumentSnapshotBuilder(ref);
  snapshot.fieldsProto = ref.firestore._serializer!.encodeFields(data);
  snapshot.readTime = new Timestamp(0, 0);
  snapshot.createTime = new Timestamp(0, 0);
  snapshot.updateTime = new Timestamp(0, 0);
  return snapshot.build() as QueryDocumentSnapshot;
}

/*
 * Helpers for constructing document changes.
 */
function docChange(
  type: DocumentChangeType,
  ref: DocumentReference,
  data: DocumentData,
): {type: DocumentChangeType; doc: QueryDocumentSnapshot} {
  return {type, doc: snapshot(ref, data)};
}

const added = (ref: DocumentReference, data: DocumentData) =>
  docChange('added', ref, data);
const modified = (ref: DocumentReference, data: DocumentData) =>
  docChange('modified', ref, data);
const removed = (ref: DocumentReference, data: DocumentData) =>
  docChange('removed', ref, data);

function verifyRequest<T>(actual: T, expected: T): void {
  // Remove undefined value, as these are ignored by the backend.
  actual = extend(true, {}, actual);
  expect(actual).to.deep.equal(expected);
}

const EMPTY = {
  docs: [],
  docChanges: [],
};

/** Captures stream data and makes it available via deferred Promises. */
class DeferredListener<T> {
  private readonly pendingData: Array<{type: string; data?: T | Error}> = [];
  private readonly pendingListeners: Array<{
    type: string;
    resolve: (r: T | Error | undefined) => void;
  }> = [];

  /**
   * Makes stream data available via the Promises set in the 'await' call. If no
   * Promise has been set, the data will be cached.
   */
  on(type: string, data?: T | Error): void {
    const listener = this.pendingListeners.shift();

    if (listener) {
      expect(type).to.equal(
        listener.type,
        `Expected message of type '${listener.type}' but got '${type}' ` +
          `with '${JSON.stringify(data)}'.`,
      );
      listener.resolve(data);
    } else {
      this.pendingData.push({
        type,
        data,
      });
    }
  }

  /**
   * Returns a Promise with the next result from the underlying stream. The
   * Promise resolves immediately if pending data is available, otherwise it
   * resolves when the next chunk arrives.
   */
  await(expectedType: string): Promise<T | Error | undefined> {
    const data = this.pendingData.shift();

    if (data) {
      expect(data.type).to.equal(
        expectedType,
        `Expected message of type '${expectedType}' but got '${data.type}' ` +
          `with '${JSON.stringify(data.data)}'.`,
      );
      return Promise.resolve(data.data);
    }

    return new Promise(resolve =>
      this.pendingListeners.push({
        type: expectedType,
        resolve,
      }),
    );
  }
}

/**
 * Handles stream operations for the Firestore Listen API. StreamHelper
 * supports one stream at a time, but multiple streams can be processed through
 * sequential invocations of the Listen API.
 */
class StreamHelper {
  private readonly deferredListener =
    new DeferredListener<api.IListenRequest>();
  private backendStream: Duplex | null = null;

  streamCount = 0; // The number of streams that the client has requested
  readStream: Transform | null = null;
  writeStream: Transform | null = null;

  /** Returns the GAPIC callback to use with this stream helper. */
  getListenCallback(): () => Duplex {
    return () => {
      // Create a mock backend whose stream we can return.
      ++this.streamCount;

      this.readStream = through2.obj();
      this.writeStream = through2.obj();

      this.readStream!.once('data', result =>
        this.deferredListener.on('data', result),
      );
      this.readStream!.on('error', error =>
        this.deferredListener.on('error', error),
      );
      this.readStream!.on('end', () => this.deferredListener.on('end'));
      this.readStream!.on('close', () => this.deferredListener.on('close'));

      this.deferredListener.on('open', {});

      this.backendStream = duplexify.obj(this.readStream, this.writeStream);
      return this.backendStream!;
    };
  }

  /**
   * Returns a Promise with the next results from the underlying stream.
   */
  await(type: string): Promise<api.IListenRequest | Error | undefined> {
    return this.deferredListener.await(type);
  }

  /** Waits for a destroyed stream to be re-opened. */
  awaitReopen(): Promise<api.IListenRequest> {
    return this.await('error')
      .then(() => this.await('close'))
      .then(() => this.awaitOpen());
  }

  /**
   * Waits for the stream to open and to receive its first message (the
   * AddTarget message).
   */
  awaitOpen(): Promise<api.IListenRequest> {
    return this.await('open').then(() => {
      return this.await('data') as api.IListenRequest;
    });
  }

  /**
   * Sends a message to the currently active stream.
   */
  write(data: string | object): void {
    // The stream returned by the Gapic library accepts Protobuf
    // messages, but the type information does not expose this.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.writeStream!.write(data as any);
  }

  /**
   * Closes the currently active stream.
   */
  close(): void {
    this.backendStream!.emit('end');
  }

  /**
   * Destroys the currently active stream with the optionally provided error.
   * If omitted, the stream is closed with a GRPC Status of UNAVAILABLE.
   */
  destroyStream(err?: GoogleError): void {
    if (!err) {
      err = new GoogleError('Server disconnect');
      err.code = Status.UNAVAILABLE;
    }
    this.readStream!.destroy(err);
  }
}

/**
 * Encapsulates the stream logic for the Watch API.
 */
class WatchHelper<T = QuerySnapshot | DocumentSnapshot> {
  private readonly streamHelper: StreamHelper;
  private readonly deferredListener = new DeferredListener<T>();
  private unsubscribe: (() => void) | null = null;

  snapshotVersion = 0;
  serializer: Serializer;

  /**
   * @param streamHelper The StreamHelper base class for this Watch operation.
   * @param reference The CollectionReference or DocumentReference that is being
   * watched.
   * @param targetId The target ID of the watch stream.
   */
  constructor(
    streamHelper: StreamHelper,
    private reference: DocumentReference | Query,
    private targetId: number,
  ) {
    this.serializer = new Serializer(reference.firestore);
    this.streamHelper = streamHelper;
    this.snapshotVersion = 0;
    this.deferredListener = new DeferredListener();
  }

  /**
   * Returns a Promise with the next result from the underlying stream.
   */
  await(type: 'snapshot'): Promise<T>;
  await(type: 'error'): Promise<Error>;
  await(type: string): Promise<T | Error | undefined> {
    return this.deferredListener.await(type);
  }

  /**
   * Creates a watch, starts a listen, and asserts that the request got
   * processed.
   *
   * @returns The unsubscribe handler for the listener.
   */
  startWatch(): () => void {
    this.unsubscribe = this.reference.onSnapshot(
      (snapshot: unknown) => {
        this.deferredListener.on('snapshot', snapshot as T);
      },
      (error: Error) => {
        this.deferredListener.on('error', error);
      },
    );
    return this.unsubscribe!;
  }

  /**
   * Ends the listen stream.
   *
   * @returns A Promise that will be fulfilled when the backend saw the end.
   */
  async endWatch(): Promise<void> {
    this.unsubscribe!();
    await this.streamHelper.await('end');
  }

  /**
   * Sends a target change from the backend simulating adding the query target.
   *
   * @param targetId The target ID to send. If omitted, uses the
   * default target ID.
   */
  sendAddTarget(targetId?: number): void {
    this.streamHelper.write({
      targetChange: {
        targetChangeType: 'ADD',
        targetIds: [targetId !== undefined ? targetId : this.targetId],
      },
    });
  }

  /**
   * Sends a target change from the backend simulating removing a query target.
   *
   * @param cause The optional code indicating why the target was removed.
   */
  sendRemoveTarget(cause?: number): void {
    const proto: api.IListenResponse = {
      targetChange: {
        targetChangeType: 'REMOVE',
        targetIds: [this.targetId],
      },
    };
    if (cause) {
      proto.targetChange!.cause = {
        code: cause,
        message: 'test remove',
      };
    }
    this.streamHelper.write(proto);
  }

  /**
   * Sends a target change from the backend of type 'NO_CHANGE'. If specified,
   * includes a resume token.
   */
  sendSnapshot(version: number, resumeToken?: Uint8Array): void {
    this.snapshotVersion = version;

    const proto: api.IListenResponse = {
      targetChange: {
        targetChangeType: 'NO_CHANGE',
        targetIds: [],
        readTime: {seconds: 0, nanos: version},
      },
    };

    if (resumeToken) {
      proto.targetChange!.resumeToken = resumeToken;
    }

    this.streamHelper.write(proto);
  }

  /**
   * Sends a target change from the backend of type 'CURRENT'.
   */
  sendCurrent(resumeToken?: Uint8Array): void {
    const proto: api.IListenResponse = {
      targetChange: {
        targetChangeType: 'CURRENT',
        targetIds: [this.targetId],
      },
    };

    if (resumeToken) {
      proto.targetChange!.resumeToken = resumeToken;
    }

    this.streamHelper.write(proto);
  }

  /**
   * Sends a doc change from the backend to the client.
   *
   * @param ref The document reference.
   * @param data The data for the doc in proto JSON format.
   */
  sendDoc(ref: DocumentReference, data: DocumentData): void {
    this.streamHelper.write({
      documentChange: {
        document: {
          name: ref.formattedName,
          fields: this.serializer.encodeFields(data),
          createTime: {seconds: 1, nanos: 2},
          updateTime: {seconds: 3, nanos: this.snapshotVersion},
        },
        targetIds: [this.targetId],
      },
    });
  }

  /**
   * Sends a doc removal from the backend to the client.
   *
   * @param ref The document reference.
   * @param data The data for the doc in proto JSON format.
   */
  sendDocRemove(ref: DocumentReference, data: DocumentData): void {
    this.streamHelper.write({
      documentChange: {
        document: {
          name: ref.formattedName,
          fields: this.serializer.encodeFields(data),
        },
        removedTargetIds: [this.targetId],
      },
    });
  }

  /**
   * Sends a doc delete from the backend to the client.
   *
   * @param ref The document reference.
   */
  sendDocDelete(ref: DocumentReference): void {
    this.streamHelper.write({
      documentDelete: {
        document: ref.formattedName,
        removedTargetIds: [this.targetId],
      },
    });
  }

  /**
   * A wrapper for writing tests that successfully run a watch.
   */
  runTest(
    expectedRequest: api.IListenRequest,
    func: () => Promise<unknown>,
  ): Promise<void> {
    this.startWatch();

    return this.streamHelper
      .awaitOpen()
      .then(request => {
        verifyRequest(request, expectedRequest);
        return func();
      })
      .then(() => this.endWatch());
  }

  /**
   * A wrapper for writing tests that fail to run a watch.
   */
  runFailedTest(
    expectedRequest: api.IListenRequest,
    func: () => void | Promise<unknown>,
    expectedError: string,
  ): Promise<void> {
    this.startWatch();

    return this.streamHelper
      .awaitOpen()
      .then(request => {
        verifyRequest(request, expectedRequest);
        return func();
      })
      .then(() => {
        return this.await('error');
      })
      .then(err => {
        if (!(err instanceof Error)) {
          throw new Error('Expected error from Watch');
        }
        expect(err.message).to.equal(expectedError);
      });
  }
}

describe('Query watch', () => {
  // The collection to query.
  let colRef: CollectionReference;

  // The documents used in this query.
  let doc1: DocumentReference;
  let doc2: DocumentReference;
  let doc3: DocumentReference;
  let doc4: DocumentReference;

  let firestore: Firestore;
  let targetId: number;
  let watchHelper: WatchHelper<QuerySnapshot>;
  let streamHelper: StreamHelper;

  let lastSnapshot: {
    docs: QueryDocumentSnapshot[];
    docChanges: TestChange[];
  } = EMPTY;

  // The proto JSON that should be sent for the query.
  const collQueryJSON = () => {
    return {
      database: `projects/${PROJECT_ID}/databases/(default)`,
      addTarget: {
        query: {
          parent: `projects/${PROJECT_ID}/databases/(default)/documents`,
          structuredQuery: {
            from: [{collectionId: 'col'}],
          },
        },
        targetId,
      },
    };
  };

  const includeQuery = () => {
    return colRef.where('included', '==', 'yes');
  };

  // The proto JSON that should be sent for the query.
  const includeQueryJSON: () => api.IListenRequest = () => {
    return {
      database: `projects/${PROJECT_ID}/databases/(default)`,
      addTarget: {
        query: {
          parent: `projects/${PROJECT_ID}/databases/(default)/documents`,
          structuredQuery: {
            from: [{collectionId: 'col'}],
            where: {
              fieldFilter: {
                field: {
                  fieldPath: 'included',
                },
                op: 'EQUAL',
                value: {
                  stringValue: 'yes',
                },
              },
            },
          },
        },
        targetId,
      },
    };
  };

  // The proto JSON that should be sent for a resumed query.
  const resumeTokenQuery: (resumeToken: Buffer) => api.IListenRequest = (
    resumeToken: Buffer,
  ) => {
    return {
      database: `projects/${PROJECT_ID}/databases/(default)`,
      addTarget: {
        query: {
          parent: `projects/${PROJECT_ID}/databases/(default)/documents`,
          structuredQuery: {
            from: [{collectionId: 'col'}],
          },
        },
        targetId,
        resumeToken,
      },
    };
  };

  const sortedQuery = () => {
    return colRef.orderBy('foo', 'desc');
  };

  // The proto JSON that should be sent for the query.
  const sortedQueryJSON: () => api.IListenRequest = () => {
    return {
      database: `projects/${PROJECT_ID}/databases/(default)`,
      addTarget: {
        query: {
          parent: `projects/${PROJECT_ID}/databases/(default)/documents`,
          structuredQuery: {
            from: [{collectionId: 'col'}],
            orderBy: [{direction: 'DESCENDING', field: {fieldPath: 'foo'}}],
          },
        },
        targetId,
      },
    };
  };

  /** The GAPIC callback that executes the listen. */
  let listenCallback: () => Duplex;

  beforeEach(async () => {
    // We are intentionally skipping the delays to ensure fast test execution.
    // The retry semantics are unaffected by this, as we maintain their
    // asynchronous behavior.
    setTimeoutHandler((op, timeout) => {
      if (timeout !== WATCH_IDLE_TIMEOUT_MS) {
        setImmediate(op);
      }
    });

    targetId = 0x1;

    streamHelper = new StreamHelper();
    listenCallback = streamHelper.getListenCallback();

    firestore = await createInstance({listen: () => listenCallback()});
    watchHelper = new WatchHelper(
      streamHelper,
      firestore.collection('col'),
      targetId,
    );

    colRef = firestore.collection('col');

    doc1 = firestore.doc('col/doc1');
    doc2 = firestore.doc('col/doc2');
    doc3 = firestore.doc('col/doc3');
    doc4 = firestore.doc('col/doc4');

    lastSnapshot = EMPTY;
  });

  afterEach(() => {
    setTimeoutHandler(setTimeout);
    return verifyInstance(firestore);
  });

  it('with invalid callbacks', () => {
    expect(() => colRef.onSnapshot('foo' as InvalidApiUsage)).to.throw(
      'Value for argument "onNext" is not a valid function.',
    );

    expect(() =>
      colRef.onSnapshot(() => {}, 'foo' as InvalidApiUsage),
    ).to.throw('Value for argument "onError" is not a valid function.');
  });

  it('without error callback', done => {
    const unsubscribe = colRef.onSnapshot(() => {
      unsubscribe();
      done();
    });

    void streamHelper.awaitOpen().then(() => {
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
    });
  });

  it('handles invalid listen protos', () => {
    return watchHelper.runFailedTest(
      collQueryJSON(),
      () => {
        // Mock the server responding to the query with an invalid proto.
        streamHelper.write({invalid: true});
      },
      'Unknown listen response type: {"invalid":true}',
    );
  });

  it('handles invalid target change protos', () => {
    return watchHelper.runFailedTest(
      collQueryJSON(),
      () => {
        // Mock the server responding to the query with an invalid proto.
        streamHelper.write({
          targetChange: {
            targetChangeType: 'INVALID',
            targetIds: [0xfeed],
          },
        });
      },
      'Unknown target change type: {"targetChangeType":"INVALID",' +
        '"targetIds":[65261]}',
    );
  });

  it('handles remove target change protos', () => {
    return watchHelper.runFailedTest(
      collQueryJSON(),
      () => {
        watchHelper.sendRemoveTarget();
      },
      'Error 13: internal error',
    );
  });

  it('handles remove target change with code', () => {
    return watchHelper.runFailedTest(
      collQueryJSON(),
      () => {
        watchHelper.sendRemoveTarget(7);
      },
      'Error 7: test remove',
    );
  });

  it('rejects an unknown target', () => {
    return watchHelper.runFailedTest(
      collQueryJSON(),
      () => {
        watchHelper.sendAddTarget(2);
      },
      'Unexpected target ID sent by server',
    );
  });

  it('re-opens on unexpected stream end', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1, Buffer.from([0xabcd]));
      return watchHelper.await('snapshot').then(async () => {
        streamHelper.close();
        await streamHelper.await('end');
        await streamHelper.awaitOpen();

        streamHelper.close();
        await streamHelper.await('end');
        await streamHelper.awaitOpen();

        expect(streamHelper.streamCount).to.equal(3);
      });
    });
  });

  it('stops attempts after maximum retry attempts', () => {
    const err = new GoogleError('GRPC Error');
    err.code = Status.ABORTED;
    return watchHelper.runFailedTest(
      collQueryJSON(),
      async () => {
        // Retry for the maximum of retry attempts.
        for (let i = 0; i < MAX_RETRY_ATTEMPTS; i++) {
          streamHelper.destroyStream(err);
          await streamHelper.awaitReopen();
        }
        // The next retry should fail with an error.
        streamHelper.destroyStream(err);
        await streamHelper.await('error');
        await streamHelper.await('close');
      },
      'Exceeded maximum number of retries allowed.',
    );
  });

  it("doesn't re-open inactive stream", () => {
    // This test uses the normal timeout handler since it relies on the actual
    // backoff window during the the stream recovery. We then use this window to
    // unsubscribe from the Watch stream and make sure that we don't
    // re-open the stream once the backoff expires.
    setTimeoutHandler(setTimeout);

    const unsubscribe = watchHelper.startWatch();
    return streamHelper
      .awaitOpen()
      .then(request => {
        verifyRequest(request, collQueryJSON());
        watchHelper.sendAddTarget();
        watchHelper.sendCurrent();
        watchHelper.sendSnapshot(1, Buffer.from([0xabcd]));
        return watchHelper.await('snapshot');
      })
      .then(() => {
        streamHelper.close();
        unsubscribe();
        expect(streamHelper.streamCount).to.equal(1);
      });
  });

  it('retries based on error code', async () => {
    const testCases = new Map<Status, boolean>();
    testCases.set(Status.CANCELLED, true);
    testCases.set(Status.UNKNOWN, true);
    testCases.set(Status.INVALID_ARGUMENT, false);
    testCases.set(Status.DEADLINE_EXCEEDED, true);
    testCases.set(Status.NOT_FOUND, false);
    testCases.set(Status.ALREADY_EXISTS, false);
    testCases.set(Status.PERMISSION_DENIED, false);
    testCases.set(Status.RESOURCE_EXHAUSTED, true);
    testCases.set(Status.FAILED_PRECONDITION, false);
    testCases.set(Status.ABORTED, true);
    testCases.set(Status.OUT_OF_RANGE, false);
    testCases.set(Status.UNIMPLEMENTED, false);
    testCases.set(Status.INTERNAL, true);
    testCases.set(Status.UNAVAILABLE, true);
    testCases.set(Status.DATA_LOSS, false);
    testCases.set(Status.UNAUTHENTICATED, true);

    for (const [statusCode, expectRetry] of testCases) {
      const err = new GoogleError('GRPC Error');
      err.code = statusCode;

      if (expectRetry) {
        return watchHelper.runTest(collQueryJSON(), () => {
          watchHelper.sendAddTarget();
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(1, Buffer.from([0xabcd]));
          return watchHelper.await('snapshot').then(() => {
            streamHelper.destroyStream(err);
            return streamHelper.awaitReopen();
          });
        });
      } else {
        await watchHelper.runFailedTest(
          collQueryJSON(),
          () => {
            watchHelper.sendAddTarget();
            watchHelper.sendCurrent();
            watchHelper.sendSnapshot(1, Buffer.from([0xabcd]));
            return watchHelper
              .await('snapshot')
              .then(() => {
                streamHelper.destroyStream(err);
              })
              .then(() => {
                return streamHelper.await('error');
              })
              .then(() => {
                return streamHelper.await('close');
              });
          },
          'GRPC Error',
        );
      }
    }
  }).timeout(5000);

  it('retries with unknown code', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1, Buffer.from([0xabcd]));
      return watchHelper.await('snapshot').then(() => {
        streamHelper.destroyStream(new Error('Unknown'));
        return streamHelper.awaitReopen();
      });
    });
  });

  it('handles changing a doc', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Add another result.
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });

          // Change a result.
          watchHelper.sendDoc(doc2, {bar: 'c'});
          watchHelper.sendSnapshot(4);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 4, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {bar: 'c'})],
            docChanges: [modified(doc2, {bar: 'c'})],
          });
        });
    });
  });

  it('reconnects after error', () => {
    let resumeToken = Buffer.from([0xabcd]);

    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent(resumeToken);
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2, resumeToken);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });
          expect(streamHelper.streamCount).to.equal(1);
          streamHelper.destroyStream();
          return streamHelper.awaitReopen();
        })
        .then(request => {
          verifyRequest(request, resumeTokenQuery(resumeToken));
          watchHelper.sendAddTarget();
          watchHelper.sendDoc(doc2, {foo: 'b'});

          resumeToken = Buffer.from([0xbcde]);
          watchHelper.sendSnapshot(3, resumeToken);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });
          streamHelper.destroyStream();
          return streamHelper.awaitReopen();
        })
        .then(request => {
          verifyRequest(request, resumeTokenQuery(resumeToken));
          watchHelper.sendAddTarget();
          watchHelper.sendDoc(doc3, {foo: 'c'});
          watchHelper.sendSnapshot(4, resumeToken);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          expect(streamHelper.streamCount).to.equal(3);
          snapshotsEqual(lastSnapshot, 4, results, {
            docs: [
              snapshot(doc1, {foo: 'a'}),
              snapshot(doc2, {foo: 'b'}),
              snapshot(doc3, {foo: 'c'}),
            ],
            docChanges: [added(doc3, {foo: 'c'})],
          });
        });
    });
  });

  it('ignores changes sent after the last snapshot', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent(Buffer.from([0x0]));
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendSnapshot(2, Buffer.from([0x1]));
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc1, {foo: 'a'}), added(doc2, {foo: 'b'})],
          });
          expect(streamHelper.streamCount).to.equal(1);
          // This document delete will be ignored.
          watchHelper.sendDocDelete(doc1);
          streamHelper.destroyStream();
          return streamHelper.awaitReopen();
        })
        .then(() => {
          watchHelper.sendDocDelete(doc2);
          watchHelper.sendSnapshot(3, Buffer.from([0x2]));
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [removed(doc2, {foo: 'b'})],
          });
        });
    });
  });

  it('ignores non-matching tokens', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();

      watchHelper.sendCurrent();
      let resumeToken = Buffer.from([0x1]);
      watchHelper.sendSnapshot(1, resumeToken);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});

          // Send snapshot with non-matching target id. No snapshot will be
          // send.
          streamHelper.write({
            targetChange: {
              targetChangeType: 'NO_CHANGE',
              targetIds: [0xfeed],
              readTime: {seconds: 0, nanos: 0},
              resumeToken: Buffer.from([0x2]),
            },
          });

          resumeToken = Buffer.from([0x3]);
          // Send snapshot with matching target id but no resume token.
          // The old token continues to be used.
          streamHelper.write({
            targetChange: {
              targetChangeType: 'NO_CHANGE',
              targetIds: [],
              readTime: {seconds: 0, nanos: 0},
              resumeToken,
            },
          });

          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 0, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });
          streamHelper.destroyStream();
          return streamHelper.awaitReopen();
        })
        .then(request => {
          verifyRequest(request, resumeTokenQuery(resumeToken));
          expect(streamHelper.streamCount).to.equal(2);
        });
    });
  });

  it('reconnects with multiple attempts', () => {
    return watchHelper
      .runFailedTest(
        collQueryJSON(),
        () => {
          // Mock the server responding to the query.
          watchHelper.sendAddTarget();
          watchHelper.sendCurrent();
          const resumeToken = Buffer.from([0xabcd]);
          watchHelper.sendSnapshot(1, resumeToken);
          return watchHelper
            .await('snapshot')
            .then(results => {
              lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

              listenCallback = () => {
                // Return a stream that always errors on write
                ++streamHelper.streamCount;
                return through2.obj((chunk, enc, callback) => {
                  callback(
                    new Error(`Stream Error (${streamHelper.streamCount})`),
                  );
                });
              };

              streamHelper.destroyStream();
              return streamHelper.await('error');
            })
            .then(() => {
              return streamHelper.await('close');
            })
            .then(() => {
              streamHelper.writeStream!.destroy();
            });
        },
        'Stream Error (6)',
      )
      .then(() => {
        expect(streamHelper.streamCount).to.equal(
          6,
          'Expected stream to be opened once and retried five times',
        );
      });
  });

  it('sorts docs', () => {
    watchHelper = new WatchHelper(streamHelper, sortedQuery(), targetId);

    return watchHelper.runTest(sortedQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add two result.
          watchHelper.sendDoc(doc1, {foo: 'b'});
          watchHelper.sendDoc(doc2, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'b'}), snapshot(doc2, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'b'}), added(doc2, {foo: 'a'})],
          });

          // Change the results so they sort in a different order.
          watchHelper.sendDoc(doc1, {foo: 'c'});
          watchHelper.sendDoc(doc2, {foo: 'd'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc2, {foo: 'd'}), snapshot(doc1, {foo: 'c'})],
            docChanges: [
              modified(doc2, {foo: 'd'}),
              modified(doc1, {foo: 'c'}),
            ],
          });
        });
    });
  });

  it('combines multiple change events for the same doc', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();

      // Add a result.
      watchHelper.sendDoc(doc1, {foo: 'a'});
      // Modify it.
      watchHelper.sendDoc(doc1, {foo: 'b'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [snapshot(doc1, {foo: 'b'})],
            docChanges: [added(doc1, {foo: 'b'})],
          });

          // Modify it two more times.
          watchHelper.sendDoc(doc1, {foo: 'c'});
          watchHelper.sendDoc(doc1, {foo: 'd'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'd'})],
            docChanges: [modified(doc1, {foo: 'd'})],
          });

          // Remove it, delete it, and then add it again.
          watchHelper.sendDocRemove(doc1, {foo: 'e'});
          watchHelper.sendDocDelete(doc1);
          watchHelper.sendDoc(doc1, {foo: 'f'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'f'})],
            docChanges: [modified(doc1, {foo: 'f'})],
          });
        });
    });
  });

  it('can sort by FieldPath.documentId()', () => {
    let query = sortedQuery();
    const expectedJson = sortedQueryJSON();

    // Add FieldPath.documentId() sorting
    query = query.orderBy(FieldPath.documentId(), 'desc');
    expectedJson.addTarget!.query!.structuredQuery!.orderBy!.push({
      direction: 'DESCENDING',
      field: {fieldPath: '__name__'},
    });

    watchHelper = new WatchHelper(streamHelper, query, targetId);

    return watchHelper.runTest(expectedJson, () => {
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(() => {
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc2, {foo: 'a'}), snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc2, {foo: 'a'}), added(doc1, {foo: 'a'})],
          });
        });
    });
  });

  it('sorts document changes in the right order', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();

      watchHelper.sendDoc(doc1, {foo: 'a'});
      watchHelper.sendDoc(doc2, {foo: 'a'});
      watchHelper.sendDoc(doc4, {foo: 'a'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [
              snapshot(doc1, {foo: 'a'}),
              snapshot(doc2, {foo: 'a'}),
              snapshot(doc4, {foo: 'a'}),
            ],
            docChanges: [
              added(doc1, {foo: 'a'}),
              added(doc2, {foo: 'a'}),
              added(doc4, {foo: 'a'}),
            ],
          });

          watchHelper.sendDocDelete(doc1);
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendDoc(doc3, {foo: 'b'});
          watchHelper.sendDocDelete(doc4);
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc2, {foo: 'b'}), snapshot(doc3, {foo: 'b'})],
            docChanges: [
              removed(doc1, {foo: 'a'}),
              removed(doc4, {foo: 'a'}),
              added(doc3, {foo: 'b'}),
              modified(doc2, {foo: 'b'}),
            ],
          });
        });
    });
  });

  it("handles changing a doc so it doesn't match", () => {
    watchHelper = new WatchHelper(streamHelper, includeQuery(), targetId);

    return watchHelper.runTest(includeQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {included: 'yes'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {included: 'yes'})],
            docChanges: [added(doc1, {included: 'yes'})],
          });

          // Add another result.
          watchHelper.sendDoc(doc2, {included: 'yes'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 3, results, {
            docs: [
              snapshot(doc1, {included: 'yes'}),
              snapshot(doc2, {included: 'yes'}),
            ],
            docChanges: [added(doc2, {included: 'yes'})],
          });

          // Change a result.
          watchHelper.sendDocRemove(doc2, {included: 'no'});
          watchHelper.sendSnapshot(4);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 4, results, {
            docs: [snapshot(doc1, {included: 'yes'})],
            docChanges: [removed(doc2, {included: 'yes'})],
          });
        });
    });
  });

  it('handles deleting a doc', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Add another result.
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });

          // Delete a result.
          watchHelper.sendDocDelete(doc2);
          watchHelper.sendSnapshot(4);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 4, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [removed(doc2, {foo: 'b'})],
          });
        });
    });
  });

  it('handles removing a doc', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Add another result.
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });

          // Delete a result.
          watchHelper.sendDocRemove(doc2, {foo: 'c'});
          watchHelper.sendSnapshot(4);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 4, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [removed(doc2, {foo: 'b'})],
          });
        });
    });
  });

  it.skip('handles deleting a non-existent doc', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Delete a different doc.
          watchHelper.sendDocDelete(doc2);
          watchHelper.sendSnapshot(3);
        });
    });
  });

  it('handles reset', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add three results.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendDoc(doc3, {foo: 'c'});

          // Send the snapshot. Note that we do not increment the snapshot
          // version to keep the update time the same.
          watchHelper.sendSnapshot(1);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [
              snapshot(doc1, {foo: 'a'}),
              snapshot(doc2, {foo: 'b'}),
              snapshot(doc3, {foo: 'c'}),
            ],
            docChanges: [
              added(doc1, {foo: 'a'}),
              added(doc2, {foo: 'b'}),
              added(doc3, {foo: 'c'}),
            ],
          });

          // Send a RESET.
          streamHelper.write({
            targetChange: {
              targetChangeType: 'RESET',
              targetIds: [],
            },
          });

          // Send the same doc1, a modified doc2, no doc3, and a new doc4.
          // Send a different result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.snapshotVersion = 2;
          watchHelper.sendDoc(doc2, {foo: 'bb'});
          watchHelper.sendDoc(doc4, {foo: 'd'});
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [
              snapshot(doc1, {foo: 'a'}),
              snapshot(doc2, {foo: 'bb'}),
              snapshot(doc4, {foo: 'd'}),
            ],
            docChanges: [
              removed(doc3, {foo: 'c'}),
              added(doc4, {foo: 'd'}),
              modified(doc2, {foo: 'bb'}),
            ],
          });
        });
    });
  });

  it('reset after idle timeout', async () => {
    let idleTimeout = () => {};

    setTimeoutHandler((op, timeout) => {
      if (timeout === WATCH_IDLE_TIMEOUT_MS) {
        idleTimeout = op;
      } else {
        setTimeout(op, timeout);
      }
    });

    await watchHelper.runTest(collQueryJSON(), async () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendDoc(doc1, {foo: 'a'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1, /* resumeToken= */ Buffer.from([0xabcd]));

      let currentSnapshot = await watchHelper.await('snapshot');

      lastSnapshot = snapshotsEqual(lastSnapshot, 1, currentSnapshot, {
        docs: [snapshot(doc1, {foo: 'a'})],
        docChanges: [added(doc1, {foo: 'a'})],
      });

      // Invoke the idle timeout
      idleTimeout();
      await streamHelper.await('end');

      // Restart the stream and send one additional document
      await streamHelper.awaitOpen();

      watchHelper.sendAddTarget();

      watchHelper.snapshotVersion = 2;
      watchHelper.sendDoc(doc2, {foo: 'b'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(2);
      currentSnapshot = await watchHelper.await('snapshot');

      // The snapshot now includes both `doc1` and `doc2`.
      snapshotsEqual(lastSnapshot, 2, currentSnapshot, {
        docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
        docChanges: [added(doc2, {foo: 'b'})],
      });
    });
  });

  it('handles reset with phantom doc', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Change the first doc.
          watchHelper.sendDoc(doc1, {foo: 'b'});
          // Send a doc change that should be ignored after reset.
          watchHelper.sendDoc(doc2, {foo: 'c'});

          // Send a RESET.
          streamHelper.write({
            targetChange: {
              targetChangeType: 'RESET',
              targetIds: [],
            },
          });

          // Change the first doc again.
          watchHelper.sendDoc(doc1, {foo: 'd'});

          // Take a snapshot.
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'd'})],
            docChanges: [modified(doc1, {foo: 'd'})],
          });
        });
    });
  });

  it('handles sending the snapshot version multiple times', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          watchHelper.sendSnapshot(3);
          watchHelper.sendSnapshot(4);
          watchHelper.sendSnapshot(5);
          watchHelper.sendSnapshot(6);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });
        });
    });
  });

  it('handles filter mismatch', () => {
    let oldRequestStream: NodeJS.WritableStream;

    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Send a filter that doesn't match. Make sure the stream gets
          // reopened.
          oldRequestStream = streamHelper.writeStream!;
          streamHelper.write({filter: {count: 0}});
          return streamHelper.await('end');
        })
        .then(() => streamHelper.awaitOpen())
        .then(request => {
          expect(streamHelper.streamCount).to.equal(2);
          expect(oldRequestStream).to.not.equal(streamHelper.writeStream);
          verifyRequest(request, collQueryJSON());

          watchHelper.sendAddTarget();
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 3, results, {
            docs: [],
            docChanges: [removed(doc1, {foo: 'a'})],
          });
        });
    });
  });

  it('handles filter match', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      watchHelper.sendAddTarget();
      // Add a result.
      watchHelper.sendDoc(doc1, {foo: 'a'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Send the filter count for the previously added documents.
          streamHelper.write({filter: {count: 1}});

          // Even sending a new snapshot version should be a no-op.
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(2);

          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          expect(streamHelper.streamCount).to.equal(1);
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });
        });
    });
  });

  it('handles resets with pending updates', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      watchHelper.sendAddTarget();
      // Add a result.
      watchHelper.sendDoc(doc1, {foo: 'a'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          watchHelper.sendDoc(doc1, {foo: 'b'});
          watchHelper.sendDoc(doc2, {foo: 'c'});
          watchHelper.sendDoc(doc3, {foo: 'd'});
          streamHelper.write({filter: {count: 3}});

          watchHelper.sendDoc(doc1, {foo: 'd'});
          watchHelper.sendDoc(doc2, {foo: 'e'});
          watchHelper.sendDocDelete(doc3);
          streamHelper.write({filter: {count: 2}});

          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          expect(streamHelper.streamCount).to.equal(1);
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'd'}), snapshot(doc2, {foo: 'e'})],
            docChanges: [added(doc2, {foo: 'e'}), modified(doc1, {foo: 'd'})],
          });
        });
    });
  });

  it('handles add and delete in same snapshot', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDocDelete(doc1);
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });
        });
    });
  });

  it('handles non-changing modify', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          // Send the snapshot. Note that we do not increment the snapshot
          // version to keep the update time the same.
          watchHelper.sendSnapshot(1);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc1, {foo: 'b'});
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'c'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'c'})],
            docChanges: [added(doc2, {foo: 'c'})],
          });
        });
    });
  });

  it('handles update time change', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Send the same document but with a different update time
          streamHelper.write({
            documentChange: {
              document: {
                name: doc1.formattedName,
                fields: watchHelper.serializer.encodeFields({foo: 'a'}),
                createTime: {seconds: 1, nanos: 2},
                updateTime: {seconds: 3, nanos: 5},
              },
              targetIds: [targetId],
            },
          });
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 3, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [modified(doc1, {foo: 'a'})],
          });
        });
    });
  });

  describe('supports isEqual', () => {
    let snapshotVersion: number;

    beforeEach(() => {
      snapshotVersion = 0;
    });

    function initialSnapshot(
      watchTest: (initialSnapshot: QuerySnapshot) => Promise<void> | void,
    ) {
      return watchHelper.runTest(collQueryJSON(), () => {
        watchHelper.sendAddTarget();
        watchHelper.sendCurrent();
        watchHelper.sendSnapshot(++snapshotVersion);
        return watchHelper
          .await('snapshot')
          .then(snapshot => watchTest(snapshot));
      });
    }

    function nextSnapshot(
      baseSnapshot: QuerySnapshot,
      watchStep: (currentSnapshot: QuerySnapshot) => Promise<void> | void,
    ): Promise<QuerySnapshot> {
      void watchStep(baseSnapshot);
      watchHelper.sendSnapshot(++snapshotVersion);
      return watchHelper.await('snapshot') as Promise<QuerySnapshot>;
    }

    it('for equal snapshots', () => {
      let firstSnapshot: QuerySnapshot;
      let secondSnapshot: QuerySnapshot;
      let thirdSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        return nextSnapshot(snapshot, snapshot => {
          firstSnapshot = snapshot;
          expect(firstSnapshot.isEqual(firstSnapshot)).to.be.true;
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendDoc(doc3, {foo: 'c'});
        })
          .then(snapshot =>
            nextSnapshot(snapshot, snapshot => {
              secondSnapshot = snapshot;
              expect(secondSnapshot.isEqual(secondSnapshot)).to.be.true;
              watchHelper.sendDocDelete(doc1);
              watchHelper.sendDoc(doc2, {foo: 'bar'});
              watchHelper.sendDoc(doc4, {foo: 'd'});
            }),
          )
          .then(snapshot => {
            thirdSnapshot = snapshot;
            expect(thirdSnapshot.isEqual(thirdSnapshot)).to.be.true;
          });
      }).then(() =>
        initialSnapshot(snapshot => {
          return nextSnapshot(snapshot, snapshot => {
            expect(snapshot.isEqual(firstSnapshot)).to.be.true;
            watchHelper.sendDoc(doc1, {foo: 'a'});
            watchHelper.sendDoc(doc2, {foo: 'b'});
            watchHelper.sendDoc(doc3, {foo: 'c'});
          })
            .then(snapshot =>
              nextSnapshot(snapshot, snapshot => {
                expect(snapshot.isEqual(secondSnapshot)).to.be.true;
                watchHelper.sendDocDelete(doc1);
                watchHelper.sendDoc(doc2, {foo: 'bar'});
                watchHelper.sendDoc(doc4, {foo: 'd'});
              }),
            )
            .then(snapshot => {
              expect(snapshot.isEqual(thirdSnapshot)).to.be.true;
            });
        }),
      );
    });

    it('for equal snapshots with materialized changes', () => {
      let firstSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        return nextSnapshot(snapshot, () => {
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendDoc(doc3, {foo: 'c'});
        }).then(snapshot => {
          firstSnapshot = snapshot;
        });
      }).then(() =>
        initialSnapshot(snapshot => {
          return nextSnapshot(snapshot, () => {
            watchHelper.sendDoc(doc1, {foo: 'a'});
            watchHelper.sendDoc(doc2, {foo: 'b'});
            watchHelper.sendDoc(doc3, {foo: 'c'});
          }).then(snapshot => {
            const materializedDocs = snapshot.docs;
            expect(materializedDocs.length).to.equal(3);
            expect(snapshot.isEqual(firstSnapshot)).to.be.true;
          });
        }),
      );
    });

    it('for snapshots of different size', () => {
      let firstSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        return nextSnapshot(snapshot, () => {
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendDoc(doc2, {foo: 'b'});
        }).then(snapshot => {
          firstSnapshot = snapshot;
        });
      }).then(() =>
        initialSnapshot(snapshot => {
          return nextSnapshot(snapshot, () => {
            watchHelper.sendDoc(doc1, {foo: 'a'});
          }).then(snapshot => {
            expect(snapshot.isEqual(firstSnapshot)).to.be.false;
          });
        }),
      );
    });

    it('for snapshots with different kind of changes', () => {
      let firstSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        return nextSnapshot(snapshot, () => {
          watchHelper.sendDoc(doc1, {foo: 'a'});
        }).then(snapshot => {
          firstSnapshot = snapshot;
          expect(
            snapshot.docChanges()[0].isEqual(firstSnapshot.docChanges()[0]),
          ).to.be.true;
        });
      }).then(() =>
        initialSnapshot(snapshot => {
          return nextSnapshot(snapshot, () => {
            watchHelper.sendDoc(doc1, {foo: 'b'});
          }).then(snapshot => {
            expect(snapshot.isEqual(firstSnapshot)).to.be.false;
            expect(
              snapshot.docChanges()[0].isEqual(firstSnapshot.docChanges()[0]),
            ).to.be.false;
          });
        }),
      );
    });

    it('for snapshots with different number of changes', () => {
      let firstSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        return nextSnapshot(snapshot, () =>
          watchHelper.sendDoc(doc1, {foo: 'a'}),
        )
          .then(snapshot =>
            nextSnapshot(snapshot, () => watchHelper.sendDoc(doc2, {foo: 'b'})),
          )
          .then(snapshot => {
            firstSnapshot = snapshot;
          });
      }).then(() =>
        initialSnapshot(snapshot => {
          return nextSnapshot(snapshot, () =>
            watchHelper.sendDoc(doc1, {foo: 'a'}),
          )
            .then(snapshot =>
              nextSnapshot(snapshot, () => {
                watchHelper.sendDocDelete(doc1);
                watchHelper.sendDoc(doc2, {foo: 'b'});
                watchHelper.sendDoc(doc3, {foo: 'c'});
              }),
            )
            .then(snapshot => {
              expect(snapshot.isEqual(firstSnapshot)).to.be.false;
            });
        }),
      );
    });

    it('for snapshots with different data types', () => {
      let originalSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        return nextSnapshot(snapshot, () =>
          watchHelper.sendDoc(doc1, {foo: '1'}),
        ).then(snapshot => {
          originalSnapshot = snapshot;
        });
      }).then(() =>
        initialSnapshot(snapshot => {
          return nextSnapshot(snapshot, () =>
            watchHelper.sendDoc(doc1, {foo: 1}),
          ).then(snapshot => {
            expect(snapshot.isEqual(originalSnapshot)).to.be.false;
          });
        }),
      );
    });

    it('for snapshots with different queries', () => {
      let firstSnapshot: QuerySnapshot;

      return initialSnapshot(snapshot => {
        firstSnapshot = snapshot;
      }).then(() => {
        watchHelper = new WatchHelper(streamHelper, includeQuery(), targetId);
        return watchHelper.runTest(includeQueryJSON(), () => {
          watchHelper.sendAddTarget();
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(1);
          return watchHelper.await('snapshot').then(snapshot => {
            expect(snapshot.isEqual(firstSnapshot)).to.be.false;
          });
        });
      });
    });

    it('for objects with different type', () => {
      return initialSnapshot(snapshot => {
        expect(snapshot.isEqual('foo' as InvalidApiUsage)).to.be.false;
        expect(snapshot.isEqual({} as InvalidApiUsage)).to.be.false;
        expect(snapshot.isEqual(new GeoPoint(0, 0) as InvalidApiUsage)).to.be
          .false;
      });
    });
  });

  it('handles delete and re-add in same snapshot', () => {
    return watchHelper.runTest(collQueryJSON(), () => {
      // Mock the server responding to the query.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, EMPTY);

          // Add a result.
          watchHelper.sendDoc(doc1, {foo: 'a'});
          watchHelper.sendSnapshot(1);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          lastSnapshot = snapshotsEqual(lastSnapshot, 1, results, {
            docs: [snapshot(doc1, {foo: 'a'})],
            docChanges: [added(doc1, {foo: 'a'})],
          });

          // Delete a doc and send the same doc again. Note that we did not
          // increment the snapshot version to keep the update time the same.
          watchHelper.sendDocDelete(doc1);
          watchHelper.sendDoc(doc1, {foo: 'a'});

          watchHelper.sendDoc(doc2, {foo: 'b'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(results => {
          snapshotsEqual(lastSnapshot, 2, results, {
            docs: [snapshot(doc1, {foo: 'a'}), snapshot(doc2, {foo: 'b'})],
            docChanges: [added(doc2, {foo: 'b'})],
          });
        });
    });
  });
});

describe('DocumentReference watch', () => {
  // The document to query.
  let doc: DocumentReference;

  let firestore: Firestore;
  let targetId: number;
  let watchHelper: WatchHelper<DocumentSnapshot>;
  let streamHelper: StreamHelper;

  // The proto JSON that should be sent for the watch.
  const watchJSON = () => {
    return {
      database: `projects/${PROJECT_ID}/databases/(default)`,
      addTarget: {
        documents: {
          documents: [doc.formattedName],
        },
        targetId,
      },
    };
  };

  // The proto JSON that should be sent for a resumed query.
  const resumeTokenJSON = (resumeToken: Uint8Array) => {
    return {
      database: `projects/${PROJECT_ID}/databases/(default)`,
      addTarget: {
        documents: {
          documents: [doc.formattedName],
        },
        targetId,
        resumeToken,
      },
    };
  };

  beforeEach(async () => {
    // We are intentionally skipping the delays to ensure fast test execution.
    // The retry semantics are unaffected by this, as we maintain their
    // asynchronous behavior.
    setTimeoutHandler((op, timeout) => {
      if (timeout !== WATCH_IDLE_TIMEOUT_MS) {
        setImmediate(op);
      }
    });

    targetId = 0x1;
    streamHelper = new StreamHelper();

    const overrides = {listen: streamHelper.getListenCallback()};
    firestore = await createInstance(overrides);
    doc = firestore.doc('col/doc');
    watchHelper = new WatchHelper(streamHelper, doc, targetId);
  });

  afterEach(() => {
    setTimeoutHandler(setTimeout);
    return verifyInstance(firestore);
  });

  it('with invalid callbacks', () => {
    expect(() => doc.onSnapshot('foo' as InvalidApiUsage)).to.throw(
      'Value for argument "onNext" is not a valid function.',
    );

    expect(() => doc.onSnapshot(() => {}, 'foo' as InvalidApiUsage)).to.throw(
      'Value for argument "onError" is not a valid function.',
    );
  });

  it('without error callback', done => {
    const unsubscribe = doc.onSnapshot(() => {
      unsubscribe();
      done();
    });

    void streamHelper.awaitOpen().then(() => {
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
    });
  });

  it('handles invalid listen protos', () => {
    return watchHelper.runFailedTest(
      watchJSON(),
      () => {
        // Mock the server responding to the watch with an invalid proto.
        streamHelper.write({invalid: true});
      },
      'Unknown listen response type: {"invalid":true}',
    );
  });

  it('handles invalid target change protos', () => {
    return watchHelper.runFailedTest(
      watchJSON(),
      () => {
        // Mock the server responding to the watch with an invalid proto.
        streamHelper.write({
          targetChange: {
            targetChangeType: 'INVALID',
            targetIds: [0xfeed],
          },
        });
      },
      'Unknown target change type: {"targetChangeType":"INVALID",' +
        '"targetIds":[65261]}',
    );
  });

  it('handles remove target change protos', () => {
    return watchHelper.runFailedTest(
      watchJSON(),
      () => {
        watchHelper.sendRemoveTarget();
      },
      'Error 13: internal error',
    );
  });

  it('handles remove target change with code', () => {
    return watchHelper.runFailedTest(
      watchJSON(),
      () => {
        watchHelper.sendRemoveTarget(7);
      },
      'Error 7: test remove',
    );
  });

  it('handles changing a doc', () => {
    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;

          // Add a result.
          watchHelper.sendDoc(doc, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.true;
          expect(snapshot.createTime!.isEqual(new Timestamp(1, 2))).to.be.true;
          expect(snapshot.updateTime!.isEqual(new Timestamp(3, 1))).to.be.true;
          expect(snapshot.get('foo')).to.equal('a');

          // Change the document.
          watchHelper.sendDoc(doc, {foo: 'b'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.true;
          expect(snapshot.get('foo')).to.equal('b');
        });
    });
  });

  it('ignores non-matching doc', () => {
    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;

          streamHelper.write({
            documentChange: {
              document: {
                name: `projects/${PROJECT_ID}/databases/(default)/documents/col/wrong`,
                fields: {},
                createTime: {seconds: 1, nanos: 2},
                updateTime: {seconds: 3, nanos: 4},
              },
              targetIds: [targetId],
            },
          });

          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;
        });
    });
  });

  it('reconnects after error', () => {
    const resumeToken = Buffer.from([0xabcd]);

    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;

          // Add a result.
          watchHelper.sendDoc(doc, {foo: 'a'});
          watchHelper.sendSnapshot(2, resumeToken);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.true;
          expect(snapshot.get('foo')).to.equal('a');

          streamHelper.destroyStream();
          return streamHelper.awaitReopen();
        })
        .then(request => {
          verifyRequest(request, resumeTokenJSON(resumeToken));
          // Change the document.
          watchHelper.sendDoc(doc, {foo: 'b'});
          watchHelper.sendSnapshot(3, resumeToken);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.true;
          expect(snapshot.get('foo')).to.equal('b');

          // Remove the document.
          watchHelper.sendDocDelete(doc);
          watchHelper.sendSnapshot(4);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;
          expect(streamHelper.streamCount).to.equal(2);
        });
    });
  });

  it('combines multiple change events for the same doc', () => {
    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();

      // Add a result.
      watchHelper.sendDoc(doc, {foo: 'a'});
      // Modify it.
      watchHelper.sendDoc(doc, {foo: 'b'});
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(snapshot => {
          expect(snapshot.get('foo')).to.equal('b');

          // Modify it two more times.
          watchHelper.sendDoc(doc, {foo: 'c'});
          watchHelper.sendDoc(doc, {foo: 'd'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.get('foo')).to.equal('d');

          // Remove it, delete it, and then add it again.
          watchHelper.sendDocRemove(doc, {foo: 'e'});
          watchHelper.sendDocDelete(doc);
          watchHelper.sendDoc(doc, {foo: 'f'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.get('foo')).to.equal('f');
        });
    });
  });

  it('handles deleting a doc', () => {
    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;

          // Add a result.
          watchHelper.sendDoc(doc, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.true;

          // Delete the document.
          watchHelper.sendDocDelete(doc);
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;
        });
    });
  });

  it('handles removing a doc', () => {
    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;

          // Add a result.
          watchHelper.sendDoc(doc, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.true;

          // Remove the document.
          watchHelper.sendDocRemove(doc, {foo: 'c'});
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.exists).to.be.false;
        });
    });
  });

  it('handles reset', () => {
    return watchHelper.runTest(watchJSON(), () => {
      // Mock the server responding to the watch.
      watchHelper.sendAddTarget();
      watchHelper.sendCurrent();
      watchHelper.sendSnapshot(1);
      return watchHelper
        .await('snapshot')
        .then(() => {
          // Add three results.
          watchHelper.sendDoc(doc, {foo: 'a'});
          watchHelper.sendSnapshot(2);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.get('foo')).to.equal('a');

          // Send a RESET.
          streamHelper.write({
            targetChange: {
              targetChangeType: 'RESET',
              targetIds: [],
            },
          });

          // Send the modified doc.
          watchHelper.sendDoc(doc, {foo: 'b'});
          watchHelper.sendCurrent();
          watchHelper.sendSnapshot(3);
          return watchHelper.await('snapshot');
        })
        .then(snapshot => {
          expect(snapshot.get('foo')).to.equal('b');
        });
    });
  });
});

describe('Query comparator', () => {
  let firestore: Firestore;
  let colRef: Query;
  let doc1: DocumentReference;
  let doc2: DocumentReference;
  let doc3: DocumentReference;
  let doc4: DocumentReference;

  beforeEach(async () => {
    firestore = await createInstance();

    colRef = firestore.collection('col');

    doc1 = firestore.doc('col/doc1');
    doc2 = firestore.doc('col/doc2');
    doc3 = firestore.doc('col/doc3');
    doc4 = firestore.doc('col/doc4');
  });

  afterEach(() => verifyInstance(firestore));

  function testSort(
    query: Query,
    input: QueryDocumentSnapshot[],
    expected: QueryDocumentSnapshot[],
  ) {
    const comparator = query.comparator();
    input.sort(comparator);
    docsEqual(input, expected);
  }

  it('handles basic case', () => {
    const query = colRef.orderBy('foo');

    const input = [
      snapshot(doc3, {foo: 2}),
      snapshot(doc4, {foo: 1}),
      snapshot(doc2, {foo: 2}),
    ];

    const expected = [
      snapshot(doc4, {foo: 1}),
      snapshot(doc2, {foo: 2}),
      snapshot(doc3, {foo: 2}),
    ];

    testSort(query, input, expected);
  });

  it('handles descending case', () => {
    const query = colRef.orderBy('foo', 'desc');

    const input = [
      snapshot(doc3, {foo: 2}),
      snapshot(doc4, {foo: 1}),
      snapshot(doc2, {foo: 2}),
    ];

    const expected = [
      snapshot(doc3, {foo: 2}),
      snapshot(doc2, {foo: 2}),
      snapshot(doc4, {foo: 1}),
    ];

    testSort(query, input, expected);
  });

  it('handles nested fields', () => {
    const query = colRef.orderBy('foo.bar');

    const input = [
      snapshot(doc1, {foo: {bar: 1}}),
      snapshot(doc2, {foo: {bar: 2}}),
      snapshot(doc3, {foo: {bar: 2}}),
    ];

    const expected = [
      snapshot(doc1, {foo: {bar: 1}}),
      snapshot(doc2, {foo: {bar: 2}}),
      snapshot(doc3, {foo: {bar: 2}}),
    ];

    testSort(query, input, expected);
  });

  it('fails on missing fields', () => {
    const query = colRef.orderBy('bar');

    const input = [
      snapshot(doc3, {foo: 2}),
      snapshot(doc1, {foo: 1}),
      snapshot(doc2, {foo: 2}),
    ];

    const comparator = query.comparator();
    expect(() => input.sort(comparator)).to.throw(
      "Trying to compare documents on fields that don't exist",
    );
  });
});
