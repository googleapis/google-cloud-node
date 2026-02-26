/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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

import * as firestore from '@google-cloud/firestore';

import * as deepEqual from 'fast-deep-equal';

import * as assert from 'assert';

import {google} from '../protos/firestore_v1_proto_api';
import {FieldTransform} from './field-value';
import {FieldPath, validateFieldPath} from './path';
import {DocumentReference} from './reference/document-reference';
import {Serializer} from './serializer';
import {Timestamp} from './timestamp';
import {ApiMapValue, defaultConverter, UpdateMap} from './types';
import {isEmpty, isObject, isPlainObject} from './util';

import api = google.firestore.v1;

/**
 * Returns a builder for DocumentSnapshot and QueryDocumentSnapshot instances.
 * Invoke `.build()' to assemble the final snapshot.
 *
 * @private
 * @internal
 */
export class DocumentSnapshotBuilder<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> {
  /** The fields of the Firestore `Document` Protobuf backing this document. */
  fieldsProto?: ApiMapValue;

  /** The time when this document was read. */
  readTime?: Timestamp;

  /** The time when this document was created. */
  createTime?: Timestamp;

  /** The time when this document was last updated. */
  updateTime?: Timestamp;

  // We include the DocumentReference in the constructor in order to allow the
  // DocumentSnapshotBuilder to be typed with <AppModelType, DbModelType> when
  // it is constructed.
  constructor(readonly ref: DocumentReference<AppModelType, DbModelType>) {}

  /**
   * Builds the DocumentSnapshot.
   *
   * @private
   * @internal
   * @returns Returns either a QueryDocumentSnapshot (if `fieldsProto` was
   * provided) or a DocumentSnapshot.
   */
  build():
    | QueryDocumentSnapshot<AppModelType, DbModelType>
    | DocumentSnapshot<AppModelType, DbModelType> {
    assert(
      (this.fieldsProto !== undefined) === (this.createTime !== undefined),
      'Create time should be set iff document exists.',
    );
    assert(
      (this.fieldsProto !== undefined) === (this.updateTime !== undefined),
      'Update time should be set iff document exists.',
    );
    return this.fieldsProto
      ? new QueryDocumentSnapshot<AppModelType, DbModelType>(
          this.ref,
          this.fieldsProto!,
          this.readTime!,
          this.createTime!,
          this.updateTime!,
        )
      : new DocumentSnapshot<AppModelType, DbModelType>(
          this.ref,
          undefined,
          this.readTime!,
        );
  }
}

/**
 * A DocumentSnapshot is an immutable representation for a document in a
 * Firestore database. The data can be extracted with
 * [data()]{@link DocumentSnapshot#data} or
 * [get(fieldPath)]{@link DocumentSnapshot#get} to get a
 * specific field.
 *
 * <p>For a DocumentSnapshot that points to a non-existing document, any data
 * access will return 'undefined'. You can use the
 * [exists]{@link DocumentSnapshot#exists} property to explicitly verify a
 * document's existence.
 *
 * @class DocumentSnapshot
 */
export class DocumentSnapshot<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> implements firestore.DocumentSnapshot<AppModelType, DbModelType>
{
  private _ref: DocumentReference<AppModelType, DbModelType>;
  private _serializer: Serializer;
  private _readTime: Timestamp | undefined;
  private _createTime: Timestamp | undefined;
  private _updateTime: Timestamp | undefined;

  /**
   * @private
   * @internal
   *
   * @param ref The reference to the document.
   * @param _fieldsProto The fields of the Firestore `Document` Protobuf backing
   * this document (or undefined if the document does not exist).
   * @param readTime The time when this snapshot was read  (or undefined if
   * the document exists only locally).
   * @param createTime The time when the document was created (or undefined if
   * the document does not exist).
   * @param updateTime The time when the document was last updated (or undefined
   * if the document does not exist).
   */
  constructor(
    ref: DocumentReference<AppModelType, DbModelType>,
    /**
     * @internal
     * @private
     **/
    readonly _fieldsProto?: ApiMapValue,
    readTime?: Timestamp,
    createTime?: Timestamp,
    updateTime?: Timestamp,
  ) {
    this._ref = ref;
    this._serializer = ref.firestore._serializer!;
    this._readTime = readTime;
    this._createTime = createTime;
    this._updateTime = updateTime;
  }

  /**
   * Creates a DocumentSnapshot from an object.
   *
   * @private
   * @internal
   * @param ref The reference to the document.
   * @param obj The object to store in the DocumentSnapshot.
   * @returns The created DocumentSnapshot.
   */
  static fromObject<AppModelType, DbModelType extends firestore.DocumentData>(
    ref: DocumentReference<AppModelType, DbModelType>,
    obj: firestore.DocumentData,
  ): DocumentSnapshot<AppModelType, DbModelType> {
    const serializer = ref.firestore._serializer!;
    return new DocumentSnapshot(ref, serializer.encodeFields(obj));
  }
  /**
   * Creates a DocumentSnapshot from an UpdateMap.
   *
   * This methods expands the top-level field paths in a JavaScript map and
   * turns { foo.bar : foobar } into { foo { bar : foobar }}
   *
   * @private
   * @internal
   * @param ref The reference to the document.
   * @param data The field/value map to expand.
   * @returns The created DocumentSnapshot.
   */
  static fromUpdateMap<
    AppModelType,
    DbModelType extends firestore.DocumentData,
  >(
    ref: firestore.DocumentReference<AppModelType, DbModelType>,
    data: UpdateMap,
  ): DocumentSnapshot<AppModelType, DbModelType> {
    const serializer = (ref as DocumentReference<AppModelType, DbModelType>)
      .firestore._serializer!;

    /**
     * Merges 'value' at the field path specified by the path array into
     * 'target'.
     */
    function merge(
      target: ApiMapValue,
      value: unknown,
      path: string[],
      pos: number,
    ): ApiMapValue | null {
      const key = path[pos];
      const isLast = pos === path.length - 1;

      if (target[key] === undefined) {
        if (isLast) {
          if (value instanceof FieldTransform) {
            // If there is already data at this path, we need to retain it.
            // Otherwise, we don't include it in the DocumentSnapshot.
            return !isEmpty(target) ? target : null;
          }
          // The merge is done.
          const leafNode = serializer.encodeValue(value);
          if (leafNode) {
            target[key] = leafNode;
          }
          return target;
        } else {
          // We need to expand the target object.
          const childNode = {
            mapValue: {
              fields: {},
            },
          };

          const nestedValue = merge(
            childNode.mapValue.fields,
            value,
            path,
            pos + 1,
          );

          if (nestedValue) {
            childNode.mapValue.fields = nestedValue;
            target[key] = childNode;
            return target;
          } else {
            return !isEmpty(target) ? target : null;
          }
        }
      } else {
        assert(!isLast, "Can't merge current value into a nested object");
        target[key].mapValue!.fields = merge(
          target[key].mapValue!.fields!,
          value,
          path,
          pos + 1,
        );
        return target;
      }
    }

    const res: ApiMapValue = {};

    for (const [key, value] of data) {
      const path = key.toArray();
      merge(res, value, path, 0);
    }

    return new DocumentSnapshot(
      ref as DocumentReference<AppModelType, DbModelType>,
      res,
    );
  }

  /**
   * True if the document exists.
   *
   * @type {boolean}
   * @name DocumentSnapshot#exists
   * @readonly
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then((documentSnapshot) => {
   *   if (documentSnapshot.exists) {
   *     console.log(`Data: ${JSON.stringify(documentSnapshot.data())}`);
   *   }
   * });
   * ```
   */
  get exists(): boolean {
    return this._fieldsProto !== undefined;
  }

  /**
   * A [DocumentReference]{@link DocumentReference} for the document
   * stored in this snapshot.
   *
   * @type {DocumentReference}
   * @name DocumentSnapshot#ref
   * @readonly
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then((documentSnapshot) => {
   *   if (documentSnapshot.exists) {
   *     console.log(`Found document at '${documentSnapshot.ref.path}'`);
   *   }
   * });
   * ```
   */
  get ref(): DocumentReference<AppModelType, DbModelType> {
    return this._ref;
  }

  /**
   * The ID of the document for which this DocumentSnapshot contains data.
   *
   * @type {string}
   * @name DocumentSnapshot#id
   * @readonly
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then((documentSnapshot) => {
   *   if (documentSnapshot.exists) {
   *     console.log(`Document found with name '${documentSnapshot.id}'`);
   *   }
   * });
   * ```
   */
  get id(): string {
    return this._ref.id;
  }

  /**
   * The time the document was created. Undefined for documents that don't
   * exist.
   *
   * @type {Timestamp|undefined}
   * @name DocumentSnapshot#createTime
   * @readonly
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then(documentSnapshot => {
   *   if (documentSnapshot.exists) {
   *     let createTime = documentSnapshot.createTime;
   *     console.log(`Document created at '${createTime.toDate()}'`);
   *   }
   * });
   * ```
   */
  get createTime(): Timestamp | undefined {
    return this._createTime;
  }

  /**
   * The time the document was last updated (at the time the snapshot was
   * generated). Undefined for documents that don't exist.
   *
   * @type {Timestamp|undefined}
   * @name DocumentSnapshot#updateTime
   * @readonly
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then(documentSnapshot => {
   *   if (documentSnapshot.exists) {
   *     let updateTime = documentSnapshot.updateTime;
   *     console.log(`Document updated at '${updateTime.toDate()}'`);
   *   }
   * });
   * ```
   */
  get updateTime(): Timestamp | undefined {
    return this._updateTime;
  }

  /**
   * The time this snapshot was read.
   *
   * @type {Timestamp}
   * @name DocumentSnapshot#readTime
   * @readonly
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then(documentSnapshot => {
   *   let readTime = documentSnapshot.readTime;
   *   console.log(`Document read at '${readTime.toDate()}'`);
   * });
   * ```
   */
  get readTime(): Timestamp {
    if (this._readTime === undefined) {
      throw new Error("Called 'readTime' on a local document");
    }
    return this._readTime;
  }

  /**
   * Retrieves all fields in the document as an object. Returns 'undefined' if
   * the document doesn't exist.
   *
   * @returns {T|undefined} An object containing all fields in the document or
   * 'undefined' if the document doesn't exist.
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.get().then(documentSnapshot => {
   *   let data = documentSnapshot.data();
   *   console.log(`Retrieved data: ${JSON.stringify(data)}`);
   * });
   * ```
   */
  data(): AppModelType | undefined {
    const fields = this._fieldsProto;

    if (fields === undefined) {
      return undefined;
    }

    // We only want to use the converter and create a new QueryDocumentSnapshot
    // if a converter has been provided.
    if (this.ref._converter !== defaultConverter()) {
      const untypedReference = new DocumentReference(
        this.ref.firestore,
        this.ref._path,
      );
      return this.ref._converter.fromFirestore(
        new QueryDocumentSnapshot(
          untypedReference,
          this._fieldsProto!,
          this.readTime,
          this.createTime!,
          this.updateTime!,
        ),
      );
    } else {
      const obj: firestore.DocumentData = {};
      for (const prop of Object.keys(fields)) {
        obj[prop] = this._serializer.decodeValue(fields[prop]);
      }
      return obj as AppModelType;
    }
  }

  /**
   * Retrieves the field specified by `field`.
   *
   * @param {string|FieldPath} field The field path
   * (e.g. 'foo' or 'foo.bar') to a specific field.
   * @returns {*} The data at the specified field location or undefined if no
   * such field exists.
   *
   * @example
   * ```
   * let documentRef = firestore.doc('col/doc');
   *
   * documentRef.set({ a: { b: 'c' }}).then(() => {
   *   return documentRef.get();
   * }).then(documentSnapshot => {
   *   let field = documentSnapshot.get('a.b');
   *   console.log(`Retrieved field value: ${field}`);
   * });
   * ```
   */
  // We deliberately use `any` in the external API to not impose type-checking
  // on end users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(field: string | FieldPath): any {
    validateFieldPath('field', field);

    const protoField = this.protoField(field);

    if (protoField === undefined) {
      return undefined;
    }

    return this._serializer.decodeValue(protoField);
  }

  /**
   * Retrieves the field specified by 'fieldPath' in its Protobuf JS
   * representation.
   *
   * @private
   * @internal
   * @param field The path (e.g. 'foo' or 'foo.bar') to a specific field.
   * @returns The Protobuf-encoded data at the specified field location or
   * undefined if no such field exists.
   */
  protoField(field: string | FieldPath): api.IValue | undefined {
    let fields: ApiMapValue | api.IValue | undefined = this._fieldsProto;

    if (fields === undefined) {
      return undefined;
    }

    const components = FieldPath.fromArgument(field).toArray();
    while (components.length > 1) {
      fields = (fields as ApiMapValue)[components.shift()!];

      if (!fields || !fields.mapValue) {
        return undefined;
      }

      fields = fields.mapValue.fields!;
    }

    return (fields as ApiMapValue)[components[0]];
  }

  /**
   * Convert a document snapshot to the Firestore 'Write' proto.
   *
   * @private
   * @internal
   */
  toWriteProto(): api.IWrite {
    return {
      update: {
        name: this._ref.formattedName,
        fields: this._fieldsProto,
      },
    };
  }

  /**
   * Convert a document snapshot to the Firestore 'Document' proto.
   *
   * @private
   * @internal
   */
  toDocumentProto(): api.IDocument {
    return {
      name: this._ref.formattedName,
      createTime: this.createTime?.toProto().timestampValue,
      updateTime: this.updateTime?.toProto().timestampValue,
      fields: this._fieldsProto,
    };
  }

  /**
   * Returns true if the document's data and path in this `DocumentSnapshot` is
   * equal to the provided value.
   *
   * @param {*} other The value to compare against.
   * @returns {boolean} true if this `DocumentSnapshot` is equal to the provided
   * value.
   */
  isEqual(
    other: firestore.DocumentSnapshot<AppModelType, DbModelType>,
  ): boolean {
    // Since the read time is different on every document read, we explicitly
    // ignore all document metadata in this comparison.
    return (
      this === other ||
      (other instanceof DocumentSnapshot &&
        this._ref.isEqual(
          (other as DocumentSnapshot<AppModelType, DbModelType>)._ref,
        ) &&
        deepEqual(this._fieldsProto, other._fieldsProto))
    );
  }
}

/**
 * A QueryDocumentSnapshot contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with [data()]{@link QueryDocumentSnapshot#data}
 * or [get()]{@link DocumentSnapshot#get} to get a specific field.
 *
 * A QueryDocumentSnapshot offers the same API surface as a
 * {@link DocumentSnapshot}. Since query results contain only existing
 * documents, the [exists]{@link DocumentSnapshot#exists} property will
 * always be true and [data()]{@link QueryDocumentSnapshot#data} will never
 * return 'undefined'.
 *
 * @class QueryDocumentSnapshot
 * @extends DocumentSnapshot
 */
export class QueryDocumentSnapshot<
    AppModelType = firestore.DocumentData,
    DbModelType extends firestore.DocumentData = firestore.DocumentData,
  >
  extends DocumentSnapshot<AppModelType, DbModelType>
  implements firestore.QueryDocumentSnapshot<AppModelType, DbModelType>
{
  /**
   * The time the document was created.
   *
   * @type {Timestamp}
   * @name QueryDocumentSnapshot#createTime
   * @readonly
   * @override
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.get().forEach(snapshot => {
   *   console.log(`Document created at '${snapshot.createTime.toDate()}'`);
   * });
   * ```
   */
  get createTime(): Timestamp {
    return super.createTime!;
  }

  /**
   * The time the document was last updated (at the time the snapshot was
   * generated).
   *
   * @type {Timestamp}
   * @name QueryDocumentSnapshot#updateTime
   * @readonly
   * @override
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.get().forEach(snapshot => {
   *   console.log(`Document updated at '${snapshot.updateTime.toDate()}'`);
   * });
   * ```
   */
  get updateTime(): Timestamp {
    return super.updateTime!;
  }

  /**
   * Retrieves all fields in the document as an object.
   *
   * @override
   *
   * @returns {T} An object containing all fields in the document.
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.get().forEach(documentSnapshot => {
   *   let data = documentSnapshot.data();
   *   console.log(`Retrieved data: ${JSON.stringify(data)}`);
   * });
   * ```
   */
  data(): AppModelType {
    const data = super.data();
    if (!data) {
      throw new Error(
        'The data in a QueryDocumentSnapshot should always exist.',
      );
    }
    return data;
  }
}

/**
 * A Firestore Document Mask contains the field paths affected by an update.
 *
 * @class
 * @private
 * @internal
 */
export class DocumentMask {
  private _sortedPaths: FieldPath[];

  /**
   * @private
   * @internal
   * @private
   *
   * @param fieldPaths The field paths in this mask.
   */
  constructor(fieldPaths: FieldPath[]) {
    this._sortedPaths = fieldPaths;
    this._sortedPaths.sort((a, b) => a.compareTo(b));
  }

  /**
   * Creates a document mask with the field paths of a document.
   *
   * @private
   * @internal
   * @param data A map with fields to modify. Only the keys are used to extract
   * the document mask.
   */
  static fromUpdateMap(data: UpdateMap): DocumentMask {
    const fieldPaths: FieldPath[] = [];

    data.forEach((value, key) => {
      if (!(value instanceof FieldTransform) || value.includeInDocumentMask) {
        fieldPaths.push(FieldPath.fromArgument(key));
      }
    });

    return new DocumentMask(fieldPaths);
  }

  /**
   * Creates a document mask from an array of field paths.
   *
   * @private
   * @internal
   * @param fieldMask A list of field paths.
   */
  static fromFieldMask(
    fieldMask: Array<string | firestore.FieldPath>,
  ): DocumentMask {
    const fieldPaths: FieldPath[] = [];

    for (const fieldPath of fieldMask) {
      fieldPaths.push(FieldPath.fromArgument(fieldPath));
    }

    return new DocumentMask(fieldPaths);
  }

  /**
   * Creates a document mask with the field names of a document.
   *
   * @private
   * @internal
   * @param data An object with fields to modify. Only the keys are used to
   * extract the document mask.
   */
  static fromObject(data: firestore.DocumentData): DocumentMask {
    const fieldPaths: FieldPath[] = [];

    function extractFieldPaths(
      currentData: firestore.DocumentData,
      currentPath?: FieldPath,
    ): void {
      let isEmpty = true;

      for (const key of Object.keys(currentData)) {
        isEmpty = false;

        // We don't split on dots since fromObject is called with
        // DocumentData.
        const childSegment = new FieldPath(key);
        const childPath = currentPath
          ? currentPath.append(childSegment)
          : childSegment;
        const value = currentData[key];
        if (value instanceof FieldTransform) {
          if (value.includeInDocumentMask) {
            fieldPaths.push(childPath);
          }
        } else if (isPlainObject(value)) {
          extractFieldPaths(value, childPath);
        } else if (value !== undefined) {
          // If the value is undefined it can never participate in the document
          // mask. With `ignoreUndefinedProperties` set to false,
          // `validateDocumentData` will reject an undefined value before even
          // computing the document mask.
          fieldPaths.push(childPath);
        }
      }

      // Add a field path for an explicitly updated empty map.
      if (currentPath && isEmpty) {
        fieldPaths.push(currentPath);
      }
    }

    extractFieldPaths(data);

    return new DocumentMask(fieldPaths);
  }

  /**
   * Returns true if this document mask contains no fields.
   *
   * @private
   * @internal
   * @returns {boolean} Whether this document mask is empty.
   */
  get isEmpty(): boolean {
    return this._sortedPaths.length === 0;
  }

  /**
   * Removes the specified values from a sorted field path array.
   *
   * @private
   * @internal
   * @param input A sorted array of FieldPaths.
   * @param values An array of FieldPaths to remove.
   */
  private static removeFromSortedArray(
    input: FieldPath[],
    values: FieldPath[],
  ): void {
    for (let i = 0; i < input.length; ) {
      let removed = false;

      for (const fieldPath of values) {
        if (input[i].isEqual(fieldPath)) {
          input.splice(i, 1);
          removed = true;
          break;
        }
      }

      if (!removed) {
        ++i;
      }
    }
  }

  /**
   * Removes the field path specified in 'fieldPaths' from this document mask.
   *
   * @private
   * @internal
   * @param fieldPaths An array of FieldPaths.
   */
  removeFields(fieldPaths: FieldPath[]): void {
    DocumentMask.removeFromSortedArray(this._sortedPaths, fieldPaths);
  }

  /**
   * Returns whether this document mask contains 'fieldPath'.
   *
   * @private
   * @internal
   * @param fieldPath The field path to test.
   * @returns Whether this document mask contains 'fieldPath'.
   */
  contains(fieldPath: FieldPath): boolean {
    for (const sortedPath of this._sortedPaths) {
      const cmp = sortedPath.compareTo(fieldPath);

      if (cmp === 0) {
        return true;
      } else if (cmp > 0) {
        return false;
      }
    }

    return false;
  }

  /**
   * Removes all properties from 'data' that are not contained in this document
   * mask.
   *
   * @private
   * @internal
   * @param data An object to filter.
   * @returns A shallow copy of the object filtered by this document mask.
   */
  applyTo(data: firestore.DocumentData): firestore.DocumentData {
    /*!
     * Applies this DocumentMask to 'data' and computes the list of field paths
     * that were specified in the mask but are not present in 'data'.
     */
    const applyDocumentMask: (
      data: firestore.DocumentData,
    ) => firestore.DocumentData = data => {
      const remainingPaths = this._sortedPaths.slice(0);

      const processObject: (
        currentData: firestore.DocumentData,
        currentPath?: FieldPath,
      ) => firestore.DocumentData | null = (currentData, currentPath) => {
        let result: firestore.DocumentData | null = null;

        Object.keys(currentData).forEach(key => {
          const childPath = currentPath
            ? currentPath.append(key)
            : new FieldPath(key);
          if (this.contains(childPath)) {
            DocumentMask.removeFromSortedArray(remainingPaths, [childPath]);
            result = result || {};
            result[key] = currentData[key];
          } else if (isObject(currentData[key])) {
            const childObject = processObject(
              currentData[key] as firestore.DocumentData,
              childPath,
            );
            if (childObject) {
              result = result || {};
              result[key] = childObject;
            }
          }
        });

        return result;
      };

      // processObject() returns 'null' if the DocumentMask is empty.
      const filteredData = processObject(data) || {};

      return {
        filteredData,
        remainingPaths,
      };
    };

    const result = applyDocumentMask(data);

    if (result.remainingPaths.length !== 0) {
      throw new Error(
        `Input data is missing for field "${result.remainingPaths[0]}".`,
      );
    }

    return result.filteredData;
  }

  /**
   * Converts a document mask to the Firestore 'DocumentMask' Proto.
   *
   * @private
   * @internal
   * @returns A Firestore 'DocumentMask' Proto.
   */
  toProto(): api.IDocumentMask {
    if (this.isEmpty) {
      return {};
    }

    const encodedPaths: string[] = [];
    for (const fieldPath of this._sortedPaths) {
      encodedPaths.push(fieldPath.formattedName);
    }

    return {
      fieldPaths: encodedPaths,
    };
  }
}

/**
 * A Firestore Document Transform.
 *
 * A DocumentTransform contains pending server-side transforms and their
 * corresponding field paths.
 *
 * @private
 * @internal
 * @class
 */
export class DocumentTransform<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> {
  /**
   * @private
   * @internal
   * @private
   *
   * @param ref The DocumentReference for this transform.
   * @param transforms A Map of FieldPaths to FieldTransforms.
   */
  constructor(
    private readonly ref: DocumentReference<AppModelType, DbModelType>,
    private readonly transforms: Map<FieldPath, FieldTransform>,
  ) {}

  /**
   * Generates a DocumentTransform from a JavaScript object.
   *
   * @private
   * @internal
   * @param ref The `DocumentReference` to use for the DocumentTransform.
   * @param obj The object to extract the transformations from.
   * @returns The Document Transform.
   */
  static fromObject<AppModelType, DbModelType extends firestore.DocumentData>(
    ref: firestore.DocumentReference<AppModelType, DbModelType>,
    obj: firestore.DocumentData,
  ): DocumentTransform<AppModelType, DbModelType> {
    const updateMap = new Map<FieldPath, unknown>();

    for (const prop of Object.keys(obj)) {
      updateMap.set(new FieldPath(prop), obj[prop]);
    }

    return DocumentTransform.fromUpdateMap<AppModelType, DbModelType>(
      ref,
      updateMap,
    );
  }

  /**
   * Generates a DocumentTransform from an Update Map.
   *
   * @private
   * @internal
   * @param ref The `DocumentReference` to use for the DocumentTransform.
   * @param data The update data to extract the transformations from.
   * @returns The Document Transform.
   */
  static fromUpdateMap<
    AppModelType,
    DbModelType extends firestore.DocumentData,
  >(
    ref: firestore.DocumentReference<AppModelType, DbModelType>,
    data: UpdateMap,
  ): DocumentTransform<AppModelType, DbModelType> {
    const transforms = new Map<FieldPath, FieldTransform>();

    function encode_(
      val: unknown,
      path: FieldPath,
      allowTransforms: boolean,
    ): void {
      if (val instanceof FieldTransform && val.includeInDocumentTransform) {
        if (allowTransforms) {
          transforms.set(path, val);
        } else {
          throw new Error(
            `${val.methodName}() is not supported inside of array values.`,
          );
        }
      } else if (Array.isArray(val)) {
        for (let i = 0; i < val.length; ++i) {
          // We need to verify that no array value contains a document transform
          encode_(val[i], path.append(String(i)), false);
        }
      } else if (isPlainObject(val)) {
        for (const prop of Object.keys(val)) {
          encode_(val[prop], path.append(new FieldPath(prop)), allowTransforms);
        }
      }
    }

    data.forEach((value, key) => {
      encode_(value, FieldPath.fromArgument(key), true);
    });

    return new DocumentTransform(
      ref as DocumentReference<AppModelType, DbModelType>,
      transforms,
    );
  }

  /**
   * Whether this DocumentTransform contains any actionable transformations.
   *
   * @private
   * @internal
   */
  get isEmpty(): boolean {
    return this.transforms.size === 0;
  }

  /**
   * Returns the array of fields in this DocumentTransform.
   *
   * @private
   * @internal
   */
  get fields(): FieldPath[] {
    return Array.from(this.transforms.keys());
  }

  /**
   * Validates the user provided field values in this document transform.
   * @private
   * @internal
   */
  validate(): void {
    const allowUndefined =
      !!this.ref.firestore._settings.ignoreUndefinedProperties;
    this.transforms.forEach(transform => transform.validate(allowUndefined));
  }

  /**
   * Converts a document transform to the Firestore 'FieldTransform' Proto.
   *
   * @private
   * @internal
   * @param serializer The Firestore serializer
   * @returns A list of Firestore 'FieldTransform' Protos
   */
  toProto(serializer: Serializer): api.DocumentTransform.IFieldTransform[] {
    return Array.from(this.transforms, ([path, transform]) =>
      transform.toProto(serializer, path),
    );
  }
}

/**
 * A Firestore Precondition encapsulates options for database writes.
 *
 * @private
 * @internal
 * @class
 */
export class Precondition {
  private _exists?: boolean;
  private _lastUpdateTime?: Timestamp;

  /**
   * @private
   * @internal
   * @private
   *
   * @param options.exists - Whether the referenced document should exist in
   * Firestore,
   * @param options.lastUpdateTime - The last update time of the referenced
   * document in Firestore.
   * @param options
   */
  constructor(options?: {
    exists?: boolean;
    lastUpdateTime?: firestore.Timestamp;
  }) {
    if (options !== undefined) {
      this._exists = options.exists;
      this._lastUpdateTime = options.lastUpdateTime as Timestamp;
    }
  }

  /**
   * Generates the Protobuf `Preconditon` object for this precondition.
   *
   * @private
   * @internal
   * @returns The `Preconditon` Protobuf object or 'null' if there are no
   * preconditions.
   */
  toProto(): api.IPrecondition | null {
    if (this.isEmpty) {
      return null;
    }

    const proto: api.IPrecondition = {};

    if (this._lastUpdateTime !== undefined) {
      proto.updateTime = this._lastUpdateTime!.toProto().timestampValue;
    } else {
      proto.exists = this._exists;
    }

    return proto;
  }

  /**
   * Whether this DocumentTransform contains any enforcement.
   *
   * @private
   * @internal
   */
  get isEmpty(): boolean {
    return this._exists === undefined && !this._lastUpdateTime;
  }
}
