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

import {Firestore, FieldValue, FieldPath} from '../src';
import {expect} from 'chai';
import {before, after, describe, it} from 'mocha';
import {getTestDb} from './firestore';

function generateUnicodeString(targetUtf8Bytes: number): string {
  let result = '';
  const emoji = '🚀'; // 4 bytes in UTF-8
  let bytes = 0;
  while (bytes < targetUtf8Bytes) {
    if (bytes % 2 === 0 && bytes + 4 <= targetUtf8Bytes) {
      result += emoji;
      bytes += 4;
    } else {
      result += 'a';
      bytes += 1;
    }
  }
  return result;
}

function generateAsciiString(sizeInBytes: number): string {
  return 'a'.repeat(sizeInBytes);
}

describe('Large Document Integration Tests', function () {
  this.timeout(120000);
  let db: Firestore;
  let collectionName: string;
  let unicodePayload: string;
  let asciiPayload: string;
  let docRef: any;
  let docA: any;
  let docB: any;

  before(async function () {
    const runLargeTests = process.env.FIRESTORE_RUN_LARGE_DOC_TESTS;
    const targetBackend = process.env.FIRESTORE_TARGET_BACKEND;
    if (runLargeTests !== 'YES' && runLargeTests !== 'true') {
      this.skip();
    }
    if (!targetBackend || targetBackend.toLowerCase() !== 'nightly') {
      this.skip();
    }

    db = getTestDb();
    const autoId = () => db.collection('dummy').doc().id;
    collectionName = 'large_doc_tests_' + autoId();
    const colRef = db.collection(collectionName);
    docRef = colRef.doc('doc_15_9MB_unicode');
    docA = colRef.doc('doc_a');
    docB = colRef.doc('doc_b');

    const targetBytes = Math.floor(15.9 * 1024 * 1024);
    unicodePayload = generateUnicodeString(targetBytes);
    asciiPayload = generateAsciiString(targetBytes);

    // Write documents in parallel
    await Promise.all([
      docRef.set({chunk: unicodePayload}),
      docA.set({chunk: asciiPayload}),
      docB.set({chunk: asciiPayload}),
    ]);
  });

  after(async () => {
    if (db && collectionName) {
      try {
        // Delete documents in parallel
        await Promise.all([docRef.delete(), docA.delete(), docB.delete()]);
      } catch (e) {
        // Suppress cleanup errors
      }
    }
  });

  it('can read a 15.9MB Unicode document', async () => {
    const snapshot = await docRef.get();
    expect(snapshot.exists).to.be.true;
    const data = snapshot.data();
    expect(data).to.exist;
    expect(data!.chunk).to.equal(unicodePayload);
  });

  it('can query multiple large documents', async () => {
    const colRef = db.collection(collectionName);
    const query = colRef.where(FieldPath.documentId(), 'in', [
      'doc_a',
      'doc_b',
    ]);
    const snapshot = await query.get();
    expect(snapshot.size).to.equal(2);
    snapshot.forEach(doc => {
      expect(doc.exists).to.be.true;
      expect(doc.data().chunk).to.equal(asciiPayload);
    });
  });

  it('can run watch snapshot listener on a large document', async () => {
    const deferred = new Promise<void>((resolve, reject) => {
      const unsubscribe = docRef.onSnapshot(
        (snapshot: any) => {
          if (snapshot.exists && snapshot.data().chunk === unicodePayload) {
            unsubscribe();
            resolve();
          }
        },
        (error: any) => {
          unsubscribe();
          reject(error);
        },
      );
    });
    await deferred;
  });

  it('can run transaction read-modify-write on a large document', async () => {
    await db.runTransaction(async transaction => {
      const snapshot = await transaction.get(docRef);
      expect((snapshot as any).exists).to.be.true;
      transaction.update(docRef, {
        transaction_timestamp: FieldValue.serverTimestamp(),
      });
    });
  });

  it('can paginate large documents safely', async () => {
    const colRef = db.collection(collectionName);
    const query = colRef
      .where(FieldPath.documentId(), 'in', ['doc_a', 'doc_b'])
      .orderBy(FieldPath.documentId());

    // Page 1
    const snapshot1 = await query.limit(1).get();
    expect(snapshot1.size).to.equal(1);
    const doc1 = snapshot1.docs[0];
    expect(doc1.exists).to.be.true;
    expect(doc1.data().chunk).to.equal(asciiPayload);

    // Page 2
    const query2 = query.startAfter(doc1).limit(1);
    const snapshot2 = await query2.get();
    expect(snapshot2.size).to.equal(1);
    const doc2 = snapshot2.docs[0];
    expect(doc2.exists).to.be.true;
    expect(doc2.id).to.not.equal(doc1.id);
    expect(doc2.data().chunk).to.equal(asciiPayload);
  });

  it('gracefully rejects oversized payloads', async () => {
    const oversizedDoc = db
      .collection(collectionName)
      .doc('temp_oversized_doc');
    // Generate ~16.1MB payload
    const targetBytes = 16 * 1024 * 1024 + 102400;
    const largePayload = generateAsciiString(targetBytes);

    try {
      await oversizedDoc.set({chunk: largePayload});
      throw new Error(
        'Setting a document exceeding the 16MB limit should fail.',
      );
    } catch (error: any) {
      expect(error.code).to.equal(3); // INVALID_ARGUMENT (gRPC status code 3)
    }
  });
});
