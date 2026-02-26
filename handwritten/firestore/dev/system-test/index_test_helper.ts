/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  Filter,
  Firestore,
  Query,
  Timestamp,
} from '../src';
import {autoId} from '../src/util';

import {
  DocumentData,
  QuerySnapshot,
  WithFieldValue,
  UpdateData,
} from '@google-cloud/firestore';
export const INDEX_TEST_COLLECTION = 'index-test-collection';

/**
 * This helper class is designed to facilitate integration testing of Firestore queries that
 * require manually created indexes within a controlled testing environment.
 *
 * <p>Key Features:
 *
 * <ul>
 *   <li>Runs tests against the dedicated test collection with predefined indexes.
 *   <li>Automatically associates a test ID with documents for data isolation.
 *   <li>Utilizes TTL policy for automatic test data cleanup.
 *   <li>Constructs Firestore queries with test ID filters.
 * </ul>
 */
export class IndexTestHelper {
  private readonly testId: string;
  private readonly TEST_ID_FIELD: string = 'testId';
  private readonly TTL_FIELD: string = 'expireAt';

  // Creates a new instance of the CompositeIndexTestHelper class, with a unique test
  // identifier for data isolation.
  constructor(public readonly db: Firestore) {
    this.testId = 'test-id-' + autoId();
  }

  // Runs a test with specified documents in the INDEX_TEST_COLLECTION.
  async setTestDocs(docs: {
    [key: string]: DocumentData;
  }): Promise<CollectionReference> {
    const testDocs = this.prepareTestDocuments(docs);
    const collectionRef = this.db.collection(INDEX_TEST_COLLECTION);
    for (const id in testDocs) {
      const ref = collectionRef.doc(id);
      await ref.set(testDocs[id]);
    }
    return collectionRef;
  }

  // Runs a test with specified documents in the INDEX_TEST_COLLECTION.
  async createTestDocs(docs: DocumentData[]): Promise<CollectionReference> {
    // convert docsArray without IDs to a map with IDs
    const docsMap = docs.reduce<{[key: string]: DocumentData}>(
      (result, doc) => {
        result[autoId()] = doc;
        return result;
      },
      {},
    );
    return this.setTestDocs(docsMap);
  }

  // Runs a test on INDEX_TEST_COLLECTION.
  async withTestCollection(): Promise<CollectionReference> {
    const collectionRef = this.db.collection(INDEX_TEST_COLLECTION);
    return collectionRef;
  }

  // Hash the document key with testId.
  private toHashedId(docId: string): string {
    return docId + '-' + this.testId;
  }

  private toHashedIds(docs: string[]): string[] {
    return docs.map(docId => this.toHashedId(docId));
  }

  // Adds test-specific fields to a document, including the testId and expiration date.
  addTestSpecificFieldsToDoc(doc: DocumentData): DocumentData {
    return {
      ...doc,
      [this.TEST_ID_FIELD]: this.testId,
      [this.TTL_FIELD]: new Timestamp( // Expire test data after 24 hours
        Timestamp.now().seconds + 24 * 60 * 60,
        Timestamp.now().nanoseconds,
      ),
    };
  }

  // Remove test-specific fields from a document, including the testId and expiration date.
  private removeTestSpecificFieldsFromDoc(doc: DocumentData): void {
    doc._document?.data?.delete(new FieldPath(this.TEST_ID_FIELD));
    doc._document?.data?.delete(new FieldPath(this.TTL_FIELD));
  }

  // Helper method to hash document keys and add test-specific fields for the provided documents.
  private prepareTestDocuments(docs: {[key: string]: DocumentData}): {
    [key: string]: DocumentData;
  } {
    const result: {[key: string]: DocumentData} = {};
    for (const key in docs) {
      // eslint-disable-next-line no-prototype-builtins
      if (docs.hasOwnProperty(key)) {
        result[this.toHashedId(key)] = this.addTestSpecificFieldsToDoc(
          docs[key],
        );
      }
    }
    return result;
  }

  // Adds a filter on test id for a query.
  query<T>(query_: Query<T>, ...filters: Filter[]): Query<T> {
    return filters.reduce<Query<T>>(
      (query, filter) => {
        return query.where(filter);
      },
      query_.where(this.TEST_ID_FIELD, '==', this.testId),
    );
  }

  // Get document reference from a document key.
  getDocRef<T>(
    coll: CollectionReference<T>,
    docId: string,
  ): DocumentReference<T> {
    if (!docId.includes('test-id-')) {
      docId = this.toHashedId(docId);
    }
    return coll.doc(docId);
  }

  // Adds a document to a Firestore collection with test-specific fields.
  addDoc<T>(
    reference: CollectionReference<T>,
    data: object,
  ): Promise<DocumentReference<T>> {
    const processedData = this.addTestSpecificFieldsToDoc(
      data,
    ) as WithFieldValue<T>;
    return reference.add(processedData);
  }

  // Sets a document in Firestore with test-specific fields.
  async setDoc<T>(
    reference: DocumentReference<T>,
    data: object,
  ): Promise<void> {
    const processedData = this.addTestSpecificFieldsToDoc(
      data,
    ) as WithFieldValue<T>;
    await reference.set(processedData);
  }

  async updateDoc<T, DbModelType extends DocumentData>(
    reference: DocumentReference<T, DbModelType>,
    data: UpdateData<DbModelType>,
  ): Promise<void> {
    await reference.update(data);
  }

  async deleteDoc<T>(reference: DocumentReference<T>): Promise<void> {
    await reference.delete();
  }

  // Retrieves a single document from Firestore with test-specific fields removed.
  async getDoc<T>(docRef: DocumentReference<T>): Promise<DocumentSnapshot<T>> {
    const docSnapshot = await docRef.get();
    this.removeTestSpecificFieldsFromDoc(docSnapshot);
    return docSnapshot;
  }

  // Retrieves multiple documents from Firestore with test-specific fields removed.
  async getDocs<T>(query_: Query<T>): Promise<QuerySnapshot<T>> {
    const querySnapshot = await this.query(query_).get();
    querySnapshot.forEach(doc => {
      this.removeTestSpecificFieldsFromDoc(doc);
    });
    return querySnapshot;
  }
}
