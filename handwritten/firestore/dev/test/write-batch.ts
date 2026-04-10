// Copyright 2019 Google LLC
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

import {describe, it, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';

import {Status} from 'google-gax';
import {
  FieldValue,
  Firestore,
  setLogFunction,
  Timestamp,
  WriteBatch,
  WriteResult,
  QueryDocumentSnapshot,
} from '../src';
import {
  ApiOverride,
  createInstance,
  InvalidApiUsage,
  response,
  verifyInstance,
  Post,
} from './util/helpers';

const REQUEST_TIME = 'REQUEST_TIME';

// Change the argument to 'console.log' to enable debug output.
setLogFunction(null);

const PROJECT_ID = 'test-project';

describe('set() method', () => {
  let firestore: Firestore;
  let writeBatch: WriteBatch;

  beforeEach(() => {
    return createInstance().then(firestoreClient => {
      firestore = firestoreClient;
      writeBatch = firestore.batch();
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('requires document name', () => {
    expect(() => (writeBatch as InvalidApiUsage).set()).to.throw(
      'Value for argument "documentRef" is not a valid DocumentReference.',
    );
  });

  it('requires object', () => {
    expect(() =>
      (writeBatch as InvalidApiUsage).set(firestore.doc('sub/doc')),
    ).to.throw(
      'Value for argument "data" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });

  it('accepts document data', () => {
    writeBatch.set(firestore.doc('sub/doc'), {foo: 'bar'});
  });

  it('works with null objects', () => {
    const nullObject = Object.create(null);
    nullObject.bar = 'ack';
    writeBatch.set(firestore.doc('sub/doc'), nullObject);
  });

  it('requires the correct converter for Partial usage', async () => {
    const converter = {
      toFirestore(post: Post): DocumentData {
        return {title: post.title, author: post.author};
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): Post {
        const data = snapshot.data();
        return new Post(data.title, data.author);
      },
    };
    const ref = firestore.doc('sub/doc').withConverter(converter);
    expect(() =>
      writeBatch.set(ref, {title: 'foo'} as Partial<Post>, {merge: true}),
    ).to.throw(
      'Value for argument "data" is not a valid Firestore document. Cannot use "undefined" as a Firestore value (found in field "author").',
    );
  });
});

describe('delete() method', () => {
  let firestore: Firestore;
  let writeBatch: WriteBatch;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
      writeBatch = firestore.batch();
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('requires document name', () => {
    expect(() => (writeBatch as InvalidApiUsage).delete()).to.throw(
      'Value for argument "documentRef" is not a valid DocumentReference.',
    );
  });

  it('accepts preconditions', () => {
    writeBatch.delete(firestore.doc('sub/doc'), {
      lastUpdateTime: new Timestamp(479978400, 123000000),
    });
  });
});

describe('update() method', () => {
  let firestore: Firestore;
  let writeBatch: WriteBatch;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
      writeBatch = firestore.batch();
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('requires document name', () => {
    expect(() => writeBatch.update({} as InvalidApiUsage, {})).to.throw(
      'Value for argument "documentRef" is not a valid DocumentReference.',
    );
  });

  it('requires object', () => {
    expect(() => {
      writeBatch.update(
        firestore.doc('sub/doc'),
        firestore.doc('sub/doc') as InvalidApiUsage,
      );
    }).to.throw(
      'Update() requires either a single JavaScript object or an alternating list of field/value pairs that can be followed by an optional precondition. Value for argument "dataOrField" is not a valid Firestore document. Detected an object of type "DocumentReference" that doesn\'t match the expected instance. Please ensure that the Firestore types you are using are from the same NPM package.',
    );
  });

  it('accepts preconditions', () => {
    writeBatch.update(
      firestore.doc('sub/doc'),
      {foo: 'bar'},
      {lastUpdateTime: new Timestamp(479978400, 123000000)},
    );
  });

  it('works with null objects', () => {
    const nullObject = Object.create(null);
    nullObject.bar = 'ack';
    writeBatch.update(firestore.doc('sub/doc'), nullObject);
  });
});

describe('create() method', () => {
  let firestore: Firestore;
  let writeBatch: WriteBatch;

  beforeEach(() => {
    return createInstance().then(firestoreClient => {
      firestore = firestoreClient;
      writeBatch = firestore.batch();
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('requires document name', () => {
    expect(() => (writeBatch as InvalidApiUsage).create()).to.throw(
      'Value for argument "documentRef" is not a valid DocumentReference.',
    );
  });

  it('requires object', () => {
    expect(() => {
      (writeBatch as InvalidApiUsage).create(firestore.doc('sub/doc'));
    }).to.throw(
      'Value for argument "data" is not a valid Firestore document. Input is not a plain JavaScript object.',
    );
  });

  it('works with null objects', () => {
    const nullObject = Object.create(null);
    nullObject.bar = 'ack';
    writeBatch.create(firestore.doc('sub/doc'), nullObject);
  });
});

describe('batch support', () => {
  const documentName = `projects/${PROJECT_ID}/databases/(default)/documents/col/doc`;

  let firestore: Firestore;
  let writeBatch: WriteBatch;

  beforeEach(() => {
    const overrides: ApiOverride = {
      commit: (request, options) => {
        expect(options!.retry!.retryCodes).contains(Status.ABORTED);

        expect(request).to.deep.eq({
          database: `projects/${PROJECT_ID}/databases/(default)`,
          writes: [
            {
              update: {
                fields: {},
                name: documentName,
              },
              updateTransforms: [
                {
                  fieldPath: 'foo',
                  setToServerValue: REQUEST_TIME,
                },
              ],
            },
            {
              currentDocument: {
                exists: true,
              },
              update: {
                fields: {
                  foo: {
                    stringValue: 'bar',
                  },
                },
                name: documentName,
              },
              updateMask: {
                fieldPaths: ['foo'],
              },
            },
            {
              currentDocument: {
                exists: false,
              },
              update: {
                fields: {},
                name: documentName,
              },
            },
            {
              delete: documentName,
            },
          ],
        });
        return response({
          commitTime: {
            nanos: 0,
            seconds: 0,
          },
          writeResults: [
            {
              updateTime: {
                nanos: 0,
                seconds: 0,
              },
            },
            {
              updateTime: {
                nanos: 1,
                seconds: 1,
              },
            },
            {
              updateTime: {
                nanos: 2,
                seconds: 2,
              },
            },
            {
              updateTime: {
                nanos: 3,
                seconds: 3,
              },
            },
          ],
        });
      },
    };
    return createInstance(overrides).then(firestoreClient => {
      firestore = firestoreClient;
      writeBatch = firestore.batch();
    });
  });

  afterEach(() => verifyInstance(firestore));

  function verifyResponse(writeResults: WriteResult[]) {
    expect(writeResults[0].writeTime.isEqual(new Timestamp(0, 0))).to.be.true;
    expect(writeResults[1].writeTime.isEqual(new Timestamp(1, 1))).to.be.true;
    expect(writeResults[2].writeTime.isEqual(new Timestamp(2, 2))).to.be.true;
    expect(writeResults[3].writeTime.isEqual(new Timestamp(3, 3))).to.be.true;
  }

  it('accepts multiple operations', () => {
    const documentName = firestore.doc('col/doc');

    writeBatch.set(documentName, {foo: FieldValue.serverTimestamp()});
    writeBatch.update(documentName, {foo: 'bar'});
    writeBatch.create(documentName, {});
    writeBatch.delete(documentName);

    return writeBatch.commit().then(resp => {
      verifyResponse(resp);
    });
  });

  it('chains multiple operations', () => {
    const documentName = firestore.doc('col/doc');

    return writeBatch
      .set(documentName, {foo: FieldValue.serverTimestamp()})
      .update(documentName, {foo: 'bar'})
      .create(documentName, {})
      .delete(documentName)
      .commit()
      .then(resp => {
        verifyResponse(resp);
      });
  });

  it('handles exception', () => {
    firestore.request = () => {
      return Promise.reject(new Error('Expected exception'));
    };

    return firestore
      .batch()
      .commit()
      .then(() => {
        throw new Error('Unexpected success in Promise');
      })
      .catch(err => {
        expect(err.message).to.equal('Expected exception');
      });
  });

  it('cannot append to committed batch', () => {
    const documentName = firestore.doc('col/doc');

    const batch = firestore.batch();
    batch.set(documentName, {foo: FieldValue.serverTimestamp()});
    batch.update(documentName, {foo: 'bar'});
    batch.create(documentName, {});
    batch.delete(documentName);
    const promise = batch.commit();

    expect(() => {
      batch.set(documentName, {});
    }).to.throw('Cannot modify a WriteBatch that has been committed.');

    return promise;
  });

  it('can reset a committed batch', async () => {
    const documentName = firestore.doc('col/doc');

    const batch = firestore.batch();
    batch.set(documentName, {foo: FieldValue.serverTimestamp()});
    batch.update(documentName, {foo: 'bar'});
    batch.create(documentName, {});
    batch.delete(documentName);
    await batch.commit();

    batch._reset();

    batch.set(documentName, {foo: FieldValue.serverTimestamp()});
    batch.update(documentName, {foo: 'bar'});
    batch.create(documentName, {});
    batch.delete(documentName);
    await batch.commit();
  });

  it('can commit an unmodified batch multiple times', () => {
    const documentName = firestore.doc('col/doc');

    const batch = firestore.batch();
    batch.set(documentName, {foo: FieldValue.serverTimestamp()});
    batch.update(documentName, {foo: 'bar'});
    batch.create(documentName, {});
    batch.delete(documentName);
    return batch.commit().then(() => batch.commit);
  });

  it('can return same write result', () => {
    const overrides: ApiOverride = {
      commit: () => {
        return response({
          commitTime: {
            nanos: 0,
            seconds: 0,
          },
          writeResults: [
            {
              updateTime: {
                nanos: 0,
                seconds: 0,
              },
            },
            {
              updateTime: {},
            },
          ],
        });
      },
    };

    return createInstance(overrides).then(firestore => {
      const documentName = firestore.doc('col/doc');

      const batch = firestore.batch();
      batch.set(documentName, {});
      batch.set(documentName, {});

      return batch.commit().then(results => {
        expect(results[0].isEqual(results[1])).to.be.true;
      });
    });
  });
});
