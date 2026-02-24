/**
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

import * as protos from '../../protos/firestore_v1_proto_api';
import api = protos.google.firestore.v1;

import * as firestore from '@google-cloud/firestore';
import {
  QualifiedResourcePath,
  ResourcePath,
  validateResourcePath,
} from '../path';
import {autoId, requestTag} from '../util';
import {validateDocumentData} from '../write-batch';
import {defaultConverter} from '../types';
import {Query} from './query';
import Firestore from '../index';
import {DocumentReference} from './document-reference';
import {QueryOptions} from './query-options';
import {
  SPAN_NAME_COL_REF_ADD,
  SPAN_NAME_COL_REF_LIST_DOCUMENTS,
} from '../telemetry/trace-util';

/**
 * A CollectionReference object can be used for adding documents, getting
 * document references, and querying for documents (using the methods
 * inherited from [Query]{@link Query}).
 *
 * @class CollectionReference
 * @extends Query
 */
export class CollectionReference<
    AppModelType = firestore.DocumentData,
    DbModelType extends firestore.DocumentData = firestore.DocumentData,
  >
  extends Query<AppModelType, DbModelType>
  implements firestore.CollectionReference<AppModelType, DbModelType>
{
  /**
   * @private
   *
   * @param firestore The Firestore Database client.
   * @param path The Path of this collection.
   */
  constructor(
    firestore: Firestore,
    path: ResourcePath,
    converter?: firestore.FirestoreDataConverter<AppModelType, DbModelType>,
  ) {
    super(firestore, QueryOptions.forCollectionQuery(path, converter));
  }

  /**
   * Returns a resource path for this collection.
   * @private
   * @internal
   */
  get _resourcePath(): ResourcePath {
    return this._queryOptions.parentPath.append(
      this._queryOptions.collectionId,
    );
  }

  /**
   * The last path element of the referenced collection.
   *
   * @type {string}
   * @name CollectionReference#id
   * @readonly
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col/doc/subcollection');
   * console.log(`ID of the subcollection: ${collectionRef.id}`);
   * ```
   */
  get id(): string {
    return this._queryOptions.collectionId;
  }

  /**
   * A reference to the containing Document if this is a subcollection, else
   * null.
   *
   * @type {DocumentReference|null}
   * @name CollectionReference#parent
   * @readonly
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col/doc/subcollection');
   * let documentRef = collectionRef.parent;
   * console.log(`Parent name: ${documentRef.path}`);
   * ```
   */
  get parent(): DocumentReference | null {
    if (this._queryOptions.parentPath.isDocument) {
      return new DocumentReference(
        this.firestore,
        this._queryOptions.parentPath,
      );
    }

    return null;
  }

  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   *
   * @type {string}
   * @name CollectionReference#path
   * @readonly
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col/doc/subcollection');
   * console.log(`Path of the subcollection: ${collectionRef.path}`);
   * ```
   */
  get path(): string {
    return this._resourcePath.relativeName;
  }

  /**
   * Retrieves the list of documents in this collection.
   *
   * The document references returned may include references to "missing
   * documents", i.e. document locations that have no document present but
   * which contain subcollections with documents. Attempting to read such a
   * document reference (e.g. via `.get()` or `.onSnapshot()`) will return a
   * `DocumentSnapshot` whose `.exists` property is false.
   *
   * @returns {Promise<DocumentReference[]>} The list of documents in this
   * collection.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * return collectionRef.listDocuments().then(documentRefs => {
   *    return firestore.getAll(...documentRefs);
   * }).then(documentSnapshots => {
   *    for (let documentSnapshot of documentSnapshots) {
   *       if (documentSnapshot.exists) {
   *         console.log(`Found document with data: ${documentSnapshot.id}`);
   *       } else {
   *         console.log(`Found missing document: ${documentSnapshot.id}`);
   *       }
   *    }
   * });
   * ```
   */
  listDocuments(): Promise<
    Array<DocumentReference<AppModelType, DbModelType>>
  > {
    return this._firestore._traceUtil.startActiveSpan(
      SPAN_NAME_COL_REF_LIST_DOCUMENTS,
      () => {
        const tag = requestTag();
        return this.firestore.initializeIfNeeded(tag).then(() => {
          const parentPath =
            this._queryOptions.parentPath.toQualifiedResourcePath(
              this.firestore.projectId,
              this.firestore.databaseId,
            );

          const request: api.IListDocumentsRequest = {
            parent: parentPath.formattedName,
            collectionId: this.id,
            showMissing: true,
            mask: {fieldPaths: []},
          };

          return this.firestore
            .request<
              api.IListDocumentsRequest,
              api.IDocument[]
            >('listDocuments', request, tag)
            .then(documents => {
              // Note that the backend already orders these documents by name,
              // so we do not need to manually sort them.
              return documents.map(doc => {
                const path = QualifiedResourcePath.fromSlashSeparatedString(
                  doc.name!,
                );
                return this.doc(path.id!);
              });
            });
        });
      },
    );
  }

  doc(): DocumentReference<AppModelType, DbModelType>;
  doc(documentPath: string): DocumentReference<AppModelType, DbModelType>;
  /**
   * Gets a [DocumentReference]{@link DocumentReference} instance that
   * refers to the document at the specified path. If no path is specified, an
   * automatically-generated unique ID will be used for the returned
   * DocumentReference.
   *
   * @param {string=} documentPath A slash-separated path to a document.
   * @returns {DocumentReference} The `DocumentReference`
   * instance.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   * let documentRefWithName = collectionRef.doc('doc');
   * let documentRefWithAutoId = collectionRef.doc();
   * console.log(`Reference with name: ${documentRefWithName.path}`);
   * console.log(`Reference with auto-id: ${documentRefWithAutoId.path}`);
   * ```
   */
  doc(documentPath?: string): DocumentReference<AppModelType, DbModelType> {
    if (arguments.length === 0) {
      documentPath = autoId();
    } else {
      validateResourcePath('documentPath', documentPath!);
    }

    const path = this._resourcePath.append(documentPath!);
    if (!path.isDocument) {
      throw new Error(
        `Value for argument "documentPath" must point to a document, but was "${documentPath}". Your path does not contain an even number of components.`,
      );
    }

    return new DocumentReference(
      this.firestore,
      path,
      this._queryOptions.converter,
    );
  }

  /**
   * Add a new document to this collection with the specified data, assigning
   * it a document ID automatically.
   *
   * @param {DocumentData} data An Object containing the data for the new
   * document.
   * @throws {Error} If the provided input is not a valid Firestore document.
   * @returns {Promise.<DocumentReference>} A Promise resolved with a
   * [DocumentReference]{@link DocumentReference} pointing to the
   * newly created document.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   * collectionRef.add({foo: 'bar'}).then(documentReference => {
   *   console.log(`Added document with name: ${documentReference.id}`);
   * });
   * ```
   */
  add(
    data: firestore.WithFieldValue<AppModelType>,
  ): Promise<DocumentReference<AppModelType, DbModelType>> {
    return this._firestore._traceUtil.startActiveSpan(
      SPAN_NAME_COL_REF_ADD,
      () => {
        const firestoreData = this._queryOptions.converter.toFirestore(data);
        validateDocumentData(
          'data',
          firestoreData,
          /*allowDeletes=*/ false,
          this._allowUndefined,
        );

        const documentRef = this.doc();
        return documentRef.create(data).then(() => documentRef);
      },
    );
  }

  /**
   * Returns true if this `CollectionReference` is equal to the provided value.
   *
   * @param {*} other The value to compare against.
   * @returns {boolean} true if this `CollectionReference` is equal to the
   * provided value.
   */
  isEqual(
    other: firestore.CollectionReference<AppModelType, DbModelType>,
  ): boolean {
    return (
      this === other ||
      (other instanceof CollectionReference && super.isEqual(other))
    );
  }

  withConverter<
    NewAppModelType,
    NewDbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    converter: firestore.FirestoreDataConverter<
      NewAppModelType,
      NewDbModelType
    >,
  ): CollectionReference<NewAppModelType, NewDbModelType>;
  withConverter(
    converter: null,
  ): CollectionReference<firestore.DocumentData, firestore.DocumentData>;
  /**
   * Applies a custom data converter to this CollectionReference, allowing you
   * to use your own custom model objects with Firestore. When you call add() on
   * the returned CollectionReference instance, the provided converter will
   * convert between Firestore data of type `NewDbModelType` and your custom
   * type `NewAppModelType`.
   *
   * Using the converter allows you to specify generic type arguments when
   * storing and retrieving objects from Firestore.
   *
   * Passing in `null` as the converter parameter removes the current
   * converter.
   *
   * @example
   * ```
   * class Post {
   *   constructor(readonly title: string, readonly author: string) {}
   *
   *   toString(): string {
   *     return this.title + ', by ' + this.author;
   *   }
   * }
   *
   * const postConverter = {
   *   toFirestore(post: Post): FirebaseFirestore.DocumentData {
   *     return {title: post.title, author: post.author};
   *   },
   *   fromFirestore(
   *     snapshot: FirebaseFirestore.QueryDocumentSnapshot
   *   ): Post {
   *     const data = snapshot.data();
   *     return new Post(data.title, data.author);
   *   }
   * };
   *
   * const postSnap = await Firestore()
   *   .collection('posts')
   *   .withConverter(postConverter)
   *   .doc().get();
   * const post = postSnap.data();
   * if (post !== undefined) {
   *   post.title; // string
   *   post.toString(); // Should be defined
   *   post.someNonExistentProperty; // TS error
   * }
   *
   * ```
   * @param {FirestoreDataConverter | null} converter Converts objects to and
   * from Firestore. Passing in `null` removes the current converter.
   * @returns A CollectionReference that uses the provided converter.
   */
  withConverter<
    NewAppModelType,
    NewDbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    converter: firestore.FirestoreDataConverter<
      NewAppModelType,
      NewDbModelType
    > | null,
  ): CollectionReference<NewAppModelType, NewDbModelType> {
    return new CollectionReference<NewAppModelType, NewDbModelType>(
      this.firestore,
      this._resourcePath,
      converter ?? defaultConverter(),
    );
  }
}
