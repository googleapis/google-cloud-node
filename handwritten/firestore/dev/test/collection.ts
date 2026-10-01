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

import * as through2 from 'through2';

import {DocumentReference, Firestore, setLogFunction} from '../src';
import {
  ApiOverride,
  createInstance,
  DATABASE_ROOT,
  document,
  InvalidApiUsage,
  Post,
  postConverter,
  requestEquals,
  response,
  set,
  verifyInstance,
  writeResult,
} from './util/helpers';

// Change the argument to 'console.log' to enable debug output.
setLogFunction(null);

describe('Collection interface', () => {
  let firestore: Firestore;

  beforeEach(() => {
    return createInstance().then(firestoreInstance => {
      firestore = firestoreInstance;
    });
  });

  afterEach(() => verifyInstance(firestore));

  it('has doc() method', () => {
    const collectionRef = firestore.collection('colId');
    expect(collectionRef.doc).toBeDefined();

    let documentRef = collectionRef.doc('docId');
    expect(documentRef).toBeInstanceOf(DocumentReference);
    expect(collectionRef.id).toBe('colId');
    expect(documentRef.id).toBe('docId');

    expect(() => collectionRef.doc(false as InvalidApiUsage)).toThrow(
      'Value for argument "documentPath" is not a valid resource path. Path must be a non-empty string.',
    );
    expect(() => collectionRef.doc(null as InvalidApiUsage)).toThrow(
      'Value for argument "documentPath" is not a valid resource path. Path must be a non-empty string.',
    );
    expect(() => collectionRef.doc('')).toThrow(
      'Value for argument "documentPath" is not a valid resource path. Path must be a non-empty string.',
    );
    expect(() => (collectionRef as InvalidApiUsage).doc(undefined)).toThrow(
      'Value for argument "documentPath" is not a valid resource path. Path must be a non-empty string.',
    );
    expect(() => collectionRef.doc('doc/coll')).toThrow(
      'Value for argument "documentPath" must point to a document, but was "doc/coll". Your path does not contain an even number of components.',
    );

    documentRef = collectionRef.doc('docId/colId/docId');
    expect(documentRef).toBeInstanceOf(DocumentReference);
  });

  it('has parent() method', () => {
    const collection = firestore.collection('col1/doc/col2');
    expect(collection.path).toBe('col1/doc/col2');
    const document = collection.parent;
    expect(document!.path).toBe('col1/doc');
  });

  it('parent() returns null for root', () => {
    const collection = firestore.collection('col1');
    expect(collection.parent).toBeNull();
  });

  it('supports auto-generated ids', () => {
    const collectionRef = firestore.collection('collectionId');
    const documentRef = collectionRef.doc();
    expect(documentRef).toBeInstanceOf(DocumentReference);
    expect(collectionRef.id).toBe('collectionId');
    expect(documentRef.id).toHaveLength(20);
  });

  it('has add() method', () => {
    const overrides: ApiOverride = {
      commit: request => {
        // Verify that the document name uses an auto-generated id.
        const docIdRe =
          /^projects\/test-project\/databases\/\(default\)\/documents\/collectionId\/[a-zA-Z0-9]{20}$/;
        expect(request.writes![0].update!.name).toMatch(docIdRe);
        delete request.writes![0].update!.name;

        // Verify that the rest of the protobuf matches.
        expect(request).toEqual({
          database: DATABASE_ROOT,
          writes: [
            {
              update: {
                fields: {},
              },
              currentDocument: {
                exists: false,
              },
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
          ],
        });
      },
    };

    return createInstance(overrides).then(firestore => {
      const collectionRef = firestore.collection('collectionId');
      const promise = collectionRef.add({});
      expect(promise).toBeInstanceOf(Promise);

      return promise.then(documentRef => {
        expect(documentRef).toBeInstanceOf(DocumentReference);
        expect(collectionRef.id).toBe('collectionId');
        expect(documentRef.id).toHaveLength(20);
      });
    });
  });

  it('has list() method', () => {
    const overrides: ApiOverride = {
      listDocuments: request => {
        expect(request).toEqual({
          parent: `${DATABASE_ROOT}/documents/a/b`,
          collectionId: 'c',
          showMissing: true,
          mask: {fieldPaths: []},
        });

        return response([document('first'), document('second')]);
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore
        .collection('a/b/c')
        .listDocuments()
        .then(documentRefs => {
          expect(documentRefs[0].id).toBe('first');
          expect(documentRefs[1].id).toBe('second');
        });
    });
  });

  it('has isEqual() method', () => {
    const coll1 = firestore.collection('coll1');
    const coll1Equals = firestore.collection('coll1');
    const coll2 = firestore.collection('coll2');
    expect(coll1.isEqual(coll1Equals)).toBeTruthy();
    expect(coll1.isEqual(coll2)).toBeFalsy();
  });

  it('for CollectionReference.withConverter().doc()', async () => {
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
        .withConverter(postConverter)
        .doc('documentId');
      await docRef.set(new Post('post', 'author'));
      const postData = await docRef.get();
      const post = postData.data();
      expect(post).not.toBeUndefined();
      expect(post!.toString()).toBe('post, by author');
    });
  });

  it('for CollectionReference.withConverter().add()', async () => {
    let doc = document('dummy');
    const overrides: ApiOverride = {
      commit: request => {
        // Extract the auto-generated document ID.
        const docId = request.writes![0].update!.name!;
        const docIdSplit = docId.split('/');
        doc = document(
          docIdSplit[docIdSplit.length - 1],
          'author',
          'author',
          'title',
          'post',
        );
        expect(request).toEqual({
          database: DATABASE_ROOT,
          writes: [
            {
              update: {
                fields: {
                  author: {
                    stringValue: 'author',
                  },
                  title: {
                    stringValue: 'post',
                  },
                },
                name: docId,
              },
              currentDocument: {
                exists: false,
              },
            },
          ],
        });

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
      const docRef = await firestore
        .collection('collectionId')
        .withConverter(postConverter)
        .add(new Post('post', 'author'));
      const postData = await docRef.get();
      const post = postData.data();
      expect(post).not.toBeUndefined();
      expect(post!.toString()).toBe('post, by author');
    });
  });

  it('withConverter(null) applies the default converter', async () => {
    return createInstance().then(async firestore => {
      const docRef = firestore
        .collection('collectionId')
        .withConverter(postConverter)
        .withConverter(null)
        .doc('documentId');
      expect(() => docRef.set(new Post('post', 'author'))).toThrow();
    });
  });

  it('drops the converter when calling CollectionReference<T>.parent()', () => {
    return createInstance().then(async firestore => {
      const postsCollection = firestore
        .collection('users/user1/posts')
        .withConverter(postConverter);

      const usersCollection = postsCollection.parent;
      expect(usersCollection!.isEqual(firestore.doc('users/user1'))).toBe(true);
    });
  });
});
