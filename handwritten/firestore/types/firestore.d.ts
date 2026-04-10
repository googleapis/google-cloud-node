/*!
 * Copyright 2020 Google LLC
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
// We deliberately use `any` in the external API to not impose type-checking
// on end users.
/* eslint-disable @typescript-eslint/no-explicit-any */
// Declare a global (ambient) namespace
// (used when not using import statement, but just script include).
declare namespace FirebaseFirestore {
  /** Alias for `any` but used where a Firestore field value would be provided. */
  export type DocumentFieldValue = any;
  /**
   * Document data (for use with `DocumentReference.set()`) consists of fields
   * mapped to values.
   */
  export type DocumentData = {
    [field: string]: DocumentFieldValue;
  };
  /**
   * Similar to Typescript's `Partial<T>`, but allows nested fields to be
   * omitted and FieldValues to be passed in as property values.
   */
  export type PartialWithFieldValue<T> =
    | Partial<T>
    | (T extends Primitive
        ? T
        : T extends {}
          ? {
              [K in keyof T]?: T[K] extends Function
                ? T[K]
                : PartialWithFieldValue<T[K]> | FieldValue;
            }
          : never);
  /**
   * Allows FieldValues to be passed in as a property value while maintaining
   * type safety.
   */
  export type WithFieldValue<T> =
    | T
    | (T extends Primitive
        ? T
        : T extends {}
          ? {
              [K in keyof T]: T[K] extends Function
                ? T[K]
                : WithFieldValue<T[K]> | FieldValue;
            }
          : never);
  /**
   * Update data (for use with [update]{@link DocumentReference#update})
   * that contains paths mapped to values. Fields that contain dots reference
   * nested fields within the document. FieldValues can be passed in
   * as property values.
   *
   * You can update a top-level field in your document by using the field name
   * as a key (e.g. `foo`). The provided value completely replaces the contents
   * for this field.
   *
   * You can also update a nested field directly by using its field path as a
   * key (e.g. `foo.bar`). This nested field update replaces the contents at
   * `bar` but does not modify other data under `foo`.
   */
  export type UpdateData<T> = T extends Primitive
    ? T
    : T extends {}
      ? {
          // If `string extends K`, this is an index signature like
          // `{[key: string]: { foo: bool }}`. In the generated UpdateData
          // indexed properties can match their type or any child types.
          [K in keyof T]?: string extends K
            ? PartialWithFieldValue<ChildTypes<T[K]>>
            : UpdateData<T[K]> | FieldValue;
        } & NestedUpdateFields<T>
      : Partial<T>;

  /**
   * For the given type, return a union type of T
   * and the types of all child properties of T.
   */
  export type ChildTypes<T> =
    T extends Record<string, unknown>
      ?
          | {
              [K in keyof T & string]: ChildTypes<T[K]>;
            }[keyof T & string]
          | T
      : T;

  /** Primitive types. */
  export type Primitive = string | number | boolean | undefined | null;
  /**
   * For each field (e.g. 'bar'), find all nested keys (e.g. {'bar.baz': T1,
   * 'bar.qux': T2}). Intersect them together to make a single map containing
   * all possible keys that are all marked as optional
   */
  export type NestedUpdateFields<T extends Record<string, unknown>> =
    UnionToIntersection<
      {
        // If `string extends K`, this is an index signature like
        // `{[key: string]: { foo: bool }}`. We map these properties to
        // `never`, which prevents prefixing a nested key with `[string]`.
        // We don't want to generate a field like `[string].foo: bool`.
        [K in keyof T & string]: string extends K
          ? never
          : ChildUpdateFields<K, T[K]>;
      }[keyof T & string] // Also include the generated prefix-string keys.
    >;
  /**
   * Helper for calculating the nested fields for a given type T1. This is needed
   * to distribute union types such as `undefined | {...}` (happens for optional
   * props) or `{a: A} | {b: B}`.
   *
   * In this use case, `V` is used to distribute the union types of `T[K]` on
   * `Record`, since `T[K]` is evaluated as an expression and not distributed.
   *
   * See https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-types
   */
  export type ChildUpdateFields<K extends string, V> =
    // Only allow nesting for map values
    V extends Record<string, unknown>
      ? // Recurse into the map and add the prefix in front of each key
        // (for example prefix 'bar.' to create: 'bar.baz' and 'bar.qux').
        AddPrefixToKeys<K, UpdateData<V>>
      : never;
  /**
   * Returns a new map where every key is prefixed with the outer key appended
   * to a dot.
   */
  export type AddPrefixToKeys<
    Prefix extends string,
    T extends Record<string, unknown>,
  > =
    // Remap K => Prefix.K. See https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

    // `string extends K : ...` is used to detect index signatures
    // like `{[key: string]: bool}`. We map these properties to type `any`
    // because a field path like `foo.[string]` will match `foo.bar` or a
    // sub-path `foo.bar.baz`. Because it matches a sub-path, we have to
    // make this type a union to including all types of the sub-path properties.
    // This is a significant downside to using index signatures in types for `T`
    // for `UpdateData<T>`.

    {
      [K in keyof T & string as `${Prefix}.${K}`]+?: string extends K
        ? ChildTypes<T[K]>
        : T[K];
    };

  /**
   * Given a union type `U = T1 | T2 | ...`, returns an intersected type
   * `(T1 & T2 & ...)`.
   *
   * Uses distributive conditional types and inference from conditional types.
   * This works because multiple candidates for the same type variable in
   * contra-variant positions causes an intersection type to be inferred.
   * https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types
   * https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
   */
  export type UnionToIntersection<U> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;
  /**
   * Utility type to create an type that only allows one
   * property of the Type param T to be set.
   *
   * type XorY = OneOf<{ x: unknown, y: unknown}>
   * let a = { x: "foo" }           // OK
   * let b = { y: "foo" }           // OK
   * let c = { a: "foo", y: "foo" } // Not OK
   */
  export type OneOf<T> = {
    [K in keyof T]: Pick<T, K> & {
      [P in Exclude<keyof T, K>]?: undefined;
    };
  }[keyof T];
  /**
   * Sets or disables the log function for all active Firestore instances.
   *
   * @param logger A log function that takes a message (such as `console.log`) or
   * `null` to turn off logging.
   */
  function setLogFunction(logger: ((msg: string) => void) | null): void;
  /**
   * Converter used by `withConverter()` to transform user objects of type
   * `AppModelType` into Firestore data of type `DbModelType`.
   *
   * Using the converter allows you to specify generic type arguments when
   * storing and retrieving objects from Firestore.
   *
   * In this context, an "AppModel" is a class that is used in an application to
   * package together related information and functionality. Such a class could,
   * for example, have properties with complex, nested data types, properties
   * used for memoization, properties of types not supported by Firestore (such
   * as `symbol` and `bigint`), and helper functions that perform compound
   * operations. Such classes are not suitable and/or possible to store into a
   * Firestore database. Instead, instances of such classes need to be converted
   * to "plain old JavaScript objects" (POJOs) with exclusively primitive
   * properties, potentially nested inside other POJOs or arrays of POJOs. In
   * this context, this type is referred to as the "DbModel" and would be an
   * object suitable for persisting into Firestore. For convenience,
   * applications can implement `FirestoreDataConverter` and register the
   * converter with Firestore objects, such as `DocumentReference` or `Query`,
   * to automatically convert `AppModel` to `DbModel` when storing into
   * Firestore, and convert `DbModel` to `AppModel` when retrieving from
   * Firestore.
   *
   * @example
   *
   * Simple Example
   *
   * const numberConverter = {
   *     toFirestore(value: WithFieldValue<number>) {
   *         return { value };
   *     },
   *     fromFirestore(snapshot: QueryDocumentSnapshot) {
   *         return snapshot.data().value as number;
   *     }
   * };
   *
   * async function simpleDemo(db: Firestore): Promise<void> {
   *     const documentRef = db.doc('values/value123').withConverter(numberConverter);
   *
   *     // converters are used with `setDoc`, `addDoc`, and `getDoc`
   *     await documentRef.set(42);
   *     const snapshot1 = await documentRef.get();
   *     assertEqual(snapshot1.data(), 42);
   *
   *     // converters are not used when writing data with `updateDoc`
   *     await documentRef.update({ value: 999 });
   *     const snapshot2 = await documentRef.get();
   *     assertEqual(snapshot2.data(), 999);
   * }
   *
   * Advanced Example
   *
   * // The Post class is a model that is used by our application.
   * // This class may have properties and methods that are specific
   * // to our application execution, which do not need to be persisted
   * // to Firestore.
   * class Post {
   *     constructor(
   *         readonly title: string,
   *         readonly author: string,
   *         readonly lastUpdatedMillis: number
   *     ) {}
   *     toString(): string {
   *         return `${this.title} by ${this.author}`;
   *     }
   * }
   *
   * // The PostDbModel represents how we want our posts to be stored
   * // in Firestore. This DbModel has different properties (`ttl`,
   * // `aut`, and `lut`) from the Post class we use in our application.
   * interface PostDbModel {
   *     ttl: string;
   *     aut: { firstName: string; lastName: string };
   *     lut: Timestamp;
   * }
   *
   * // The `PostConverter` implements `FirestoreDataConverter` and specifies
   * // how the Firestore SDK can convert `Post` objects to `PostDbModel`
   * // objects and vice versa.
   * class PostConverter implements FirestoreDataConverter<Post, PostDbModel> {
   *     toFirestore(post: WithFieldValue<Post>): WithFieldValue<PostDbModel> {
   *         return {
   *             ttl: post.title,
   *             aut: this._autFromAuthor(post.author),
   *             lut: this._lutFromLastUpdatedMillis(post.lastUpdatedMillis)
   *         };
   *     }
   *
   *     fromFirestore(snapshot: QueryDocumentSnapshot): Post {
   *         const data = snapshot.data() as PostDbModel;
   *         const author = `${data.aut.firstName} ${data.aut.lastName}`;
   *         return new Post(data.ttl, author, data.lut.toMillis());
   *     }
   *
   *     _autFromAuthor(
   *         author: string | FieldValue
   *     ): { firstName: string; lastName: string } | FieldValue {
   *         if (typeof author !== 'string') {
   *             // `author` is a FieldValue, so just return it.
   *             return author;
   *         }
   *         const [firstName, lastName] = author.split(' ');
   *         return {firstName, lastName};
   *     }
   *
   *     _lutFromLastUpdatedMillis(
   *         lastUpdatedMillis: number | FieldValue
   *     ): Timestamp | FieldValue {
   *         if (typeof lastUpdatedMillis !== 'number') {
   *             // `lastUpdatedMillis` must be a FieldValue, so just return it.
   *             return lastUpdatedMillis;
   *         }
   *         return Timestamp.fromMillis(lastUpdatedMillis);
   *     }
   * }
   *
   * async function advancedDemo(db: Firestore): Promise<void> {
   *     // Create a `DocumentReference` with a `FirestoreDataConverter`.
   *     const documentRef = db.doc('posts/post123').withConverter(new PostConverter());
   *
   *     // The `data` argument specified to `DocumentReference.set()` is type
   *     // checked by the TypeScript compiler to be compatible with `Post`. Since
   *     // the `data` argument is typed as `WithFieldValue<Post>` rather than just
   *     // `Post`, this allows properties of the `data` argument to also be special
   *     // Firestore values that perform server-side mutations, such as
   *     // `FieldValue.arrayRemove()`, `FieldValue.delete()`, and
   *     // `FieldValue.serverTimestamp()`.
   *     await documentRef.set({
   *         title: 'My Life',
   *         author: 'Foo Bar',
   *         lastUpdatedMillis: FieldValue.serverTimestamp()
   *     });
   *
   *     // The TypeScript compiler will fail to compile if the `data` argument
   *     // to `DocumentReference.set()` is _not_ compatible with
   *     // `WithFieldValue<Post>`. This type checking prevents the caller from
   *     // specifying objects with incorrect properties or property values.
   *     // @ts-expect-error "Argument of type { ttl: string; } is not assignable
   *     // to parameter of type WithFieldValue<Post>"
   *     await documentRef.set(documentRef, { ttl: 'The Title' });
   *
   *     // When retrieving a document with `DocumentReference.get()` the
   *     // `DocumentSnapshot` object's `data()` method returns a `Post`, rather
   *     // than a generic object, which would have been returned if the
   *     // `DocumentReference` did _not_ have a `FirestoreDataConverter`
   *     // attached to it.
   *     const snapshot1: DocumentSnapshot<Post> = await documentRef.get();
   *     const post1: Post = snapshot1.data()!;
   *     if (post1) {
   *         assertEqual(post1.title, 'My Life');
   *         assertEqual(post1.author, 'Foo Bar');
   *     }
   *
   *     // The `data` argument specified to `DocumentReference.update()` is type
   *     // checked by the TypeScript compiler to be compatible with
   *     // `PostDbModel`. Note that unlike `DocumentReference.set()`, whose
   *     // `data` argument must be compatible with `Post`, the `data` argument
   *     // to `update()` must be compatible with `PostDbModel`. Similar to
   *     // `set()`, since the `data` argument is typed as
   *     // `WithFieldValue<PostDbModel>` rather than just `PostDbModel`, this
   *     // allows properties of the `data` argument to also be those special
   *     // Firestore values, like `FieldValue.arrayRemove()`,
   *     // `FieldValue.delete()`, and `FieldValue.serverTimestamp()`.
   *     await documentRef.update({
   *         'aut.firstName': 'NewFirstName',
   *         lut: FieldValue.serverTimestamp()
   *     });
   *
   *     // The TypeScript compiler will fail to compile if the `data` argument
   *     // to `DocumentReference.update()` is _not_ compatible with
   *     // `WithFieldValue<PostDbModel>`. This type checking prevents the caller
   *     // from specifying objects with incorrect properties or property values.
   *     // @ts-expect-error "Argument of type { title: string; } is not
   *     // assignable to parameter of type WithFieldValue<PostDbModel>"
   *     await documentRef.update({ title: 'New Title' });
   *     const snapshot2: DocumentSnapshot<Post> = await documentRef.get();
   *     const post2: Post = snapshot2.data()!;
   *     if (post2) {
   *         assertEqual(post2.title, 'My Life');
   *         assertEqual(post2.author, 'NewFirstName Bar');
   *     }
   * }
   */
  export interface FirestoreDataConverter<
    AppModelType,
    DbModelType extends DocumentData = DocumentData,
  > {
    /**
     * Called by the Firestore SDK to convert a custom model object of type
     * `AppModelType` into a plain Javascript object (suitable for writing
     * directly to the Firestore database) of type `DbModelType`.
     *
     * To use set() with `merge` and `mergeFields`,
     * toFirestore() must be defined with `Partial<T>`.
     *
     * The `WithFieldValue<T>` type extends `T` to also allow FieldValues such
     * as `FieldValue.delete()` to be used as property values.
     */
    toFirestore(
      modelObject: WithFieldValue<AppModelType>,
    ): WithFieldValue<DbModelType>;
    /**
     * Called by the Firestore SDK to convert a custom model object of type
     * `AppModelType` into a plain Javascript object (suitable for writing
     * directly to the Firestore database) of type `DbModelType`.
     *
     * To use set() with `merge` and `mergeFields`,
     * toFirestore() must be defined with `Partial<T>`.
     *
     * The `PartialWithFieldValue<T>` type extends `Partial<T>` to allow
     * FieldValues such as `FieldValue.delete()` to be used as property values.
     * It also supports nested `Partial` by allowing nested fields to be
     * omitted.
     */
    toFirestore(
      modelObject: PartialWithFieldValue<AppModelType>,
      options: SetOptions,
    ): PartialWithFieldValue<DbModelType>;
    /**
     * Called by the Firestore SDK to convert Firestore data into an object of
     * type `AppModelType`. You can access your data by calling:
     * `snapshot.data()`.
     *
     * Generally, the data returned from `snapshot.data()` can be cast to
     * `DbModelType`; however, this is not guaranteed because Firestore does not
     * enforce a schema on the database. For example, writes from a previous
     * version of the application or writes from another client that did not use
     * a type converter could have written data with different properties and/or
     * property types. The implementation will need to choose whether to
     * gracefully recover from non-conforming data or throw an error.
     */
    fromFirestore(snapshot: QueryDocumentSnapshot): AppModelType;
  }
  /**
   * Settings used to directly configure a `Firestore` instance.
   */
  export interface Settings {
    /**
     * The project ID from the Google Developer's Console, e.g.
     * 'grape-spaceship-123'. We will also check the environment variable
     * GCLOUD_PROJECT for your project ID.  Can be omitted in environments that
     * support {@link https://cloud.google.com/docs/authentication Application
     * Default Credentials}
     */
    projectId?: string;
    /**
     * The database name. If omitted, the default database will be used.
     */
    databaseId?: string;
    /** The hostname to connect to. */
    host?: string;
    /** The port to connect to. */
    port?: number;
    /**
     * Local file containing the Service Account credentials as downloaded from
     * the Google Developers Console. Can  be omitted in environments that
     * support {@link https://cloud.google.com/docs/authentication Application
     * Default Credentials}. To configure Firestore with custom credentials, use
     * the `credentials` property to provide the `client_email` and
     * `private_key` of your service account.
     */
    keyFilename?: string;
    /**
     * The 'client_email' and 'private_key' properties of the service account
     * to use with your Firestore project. Can be omitted in environments that
     * support {@link https://cloud.google.com/docs/authentication Application
     * Default Credentials}. If your credentials are stored in a JSON file, you
     * can specify a `keyFilename` instead.
     */
    credentials?: {
      client_email?: string;
      private_key?: string;
    };
    /** Whether to use SSL when connecting. */
    ssl?: boolean;
    /**
     * The maximum number of idle GRPC channels to keep. A smaller number of idle
     * channels reduces memory usage but increases request latency for clients
     * with fluctuating request rates. If set to 0, shuts down all GRPC channels
     * when the client becomes idle. Defaults to 1.
     */
    maxIdleChannels?: number;
    /**
     * Whether to use `BigInt` for integer types when deserializing Firestore
     * Documents. Regardless of magnitude, all integer values are returned as
     * `BigInt` to match the precision of the Firestore backend. Floating point
     * numbers continue to use JavaScript's `number` type.
     */
    useBigInt?: boolean;
    /**
     * Whether to skip nested properties that are set to `undefined` during
     * object serialization. If set to `true`, these properties are skipped
     * and not written to Firestore. If set `false` or omitted, the SDK throws
     * an exception when it encounters properties of type `undefined`.
     */
    ignoreUndefinedProperties?: boolean;
    /**
     * Whether to force the use of HTTP/1.1 REST transport until a method that requires gRPC
     * is called. When a method requires gRPC, this Firestore client will load dependent gRPC
     * libraries and then use gRPC transport for communication from that point forward.
     * Currently the only operation that requires gRPC is creating a snapshot listener with
     * the method `DocumentReference<T>.onSnapshot()`, `CollectionReference<T>.onSnapshot()`,
     * or `Query<T>.onSnapshot()`.
     */
    preferRest?: boolean;
    /**
     * Settings related to telemetry collection by this client.
     * @beta
     */
    openTelemetry?: FirestoreOpenTelemetryOptions;
    /**
     * Whether to always use implicit order by clauses.
     */
    alwaysUseImplicitOrderBy?: boolean;
    [key: string]: any; // Accept other properties, such as GRPC settings.
  }
  /**
   * Options to configure telemetry collection.
   * This is a 'beta' interface and may change in backwards incompatible ways.
   * @beta
   */
  export interface FirestoreOpenTelemetryOptions {
    /**
     * The OpenTelemetry TracerProvider instance that the SDK should use to
     * create trace spans. If not provided, the SDK will use the Global TracerProvider.
     *
     * Even if a Global TracerProvider has been registered, users can still
     * disable this client's span creation by passing in a "no-op" tracer provider
     * here, or by setting the `FIRESTORE_ENABLE_TRACING` environment variable to `OFF` or `FALSE`.
     */
    tracerProvider?: any;
  }
  /** Options to configure a read-only transaction. */
  export interface ReadOnlyTransactionOptions {
    /** Set to true to indicate a read-only transaction. */
    readOnly: true;
    /**
     * If specified, documents are read at the given time. This may not be more
     * than 60 seconds in the past from when the request is processed by the
     * server.
     */
    readTime?: Timestamp;
  }
  /** Options to configure a read-write transaction. */
  export interface ReadWriteTransactionOptions {
    /** Set to false or omit to indicate a read-write transaction. */
    readOnly?: false;
    /**
     * The maximum number of attempts for this transaction. Defaults to 5.
     */
    maxAttempts?: number;
  }
  /**
   * `Firestore` represents a Firestore Database and is the entry point for all
   * Firestore operations.
   */
  export class Firestore {
    /**
     * @param settings Configuration object. See [Firestore Documentation]
     * {@link https://firebase.google.com/docs/firestore/}
     */
    public constructor(settings?: Settings);
    /**
     * Specifies custom settings to be used to configure the `Firestore`
     * instance. Can only be invoked once and before any other Firestore
     * method.
     *
     * If settings are provided via both `settings()` and the `Firestore`
     * constructor, both settings objects are merged and any settings provided
     * via `settings()` take precedence.
     *
     * @param {object} settings The settings to use for all Firestore
     * operations.
     */
    settings(settings: Settings): void;
    /**
     * Returns the Database ID for this Firestore instance.
     */
    get databaseId(): string;
    /**
     * Whether to always use implicit order by clauses.
     */
    get alwaysUseImplicitOrderBy(): boolean;
    /**
     * Gets a `CollectionReference` instance that refers to the collection at
     * the specified path.
     *
     * @param collectionPath A slash-separated path to a collection.
     * @returns The `CollectionReference` instance.
     */
    collection(collectionPath: string): CollectionReference;
    /**
     * Gets a `DocumentReference` instance that refers to the document at the
     * specified path.
     *
     * @param documentPath A slash-separated path to a document.
     * @returns The `DocumentReference` instance.
     */
    doc(documentPath: string): DocumentReference;
    /**
     * Creates and returns a new Query that includes all documents in the
     * database that are contained in a collection or subcollection with the
     * given collectionId.
     *
     * @param collectionId Identifies the collections to query over. Every
     * collection or subcollection with this ID as the last segment of its path
     * will be included. Cannot contain a slash.
     * @returns The created `CollectionGroup`.
     */
    collectionGroup(collectionId: string): CollectionGroup;
    /**
     * Retrieves multiple documents from Firestore.
     *
     * The first argument is required and must be of type `DocumentReference`
     * followed by any additional `DocumentReference` documents. If used, the
     * optional `ReadOptions` must be the last argument.
     *
     * @param {Array.<DocumentReference|ReadOptions>} documentRefsOrReadOptions
     * The `DocumentReferences` to receive, followed by an optional field
     * mask.
     * @returns A Promise that resolves with an array of resulting document
     * snapshots.
     */
    getAll(
      ...documentRefsOrReadOptions: Array<DocumentReference | ReadOptions>
    ): Promise<Array<DocumentSnapshot>>;
    /**
     * Recursively deletes all documents and subcollections at and under the
     * specified level.
     *
     * If any delete fails, the promise is rejected with an error message
     * containing the number of failed deletes and the stack trace of the last
     * failed delete. The provided reference is deleted regardless of whether
     * all deletes succeeded.
     *
     * `recursiveDelete()` uses a BulkWriter instance with default settings to
     * perform the deletes. To customize throttling rates or add success/error
     * callbacks, pass in a custom BulkWriter instance.
     *
     * @param ref The reference of a document or collection to delete.
     * @param bulkWriter A custom BulkWriter instance used to perform the
     * deletes.
     * @returns A promise that resolves when all deletes have been performed.
     * The promise is rejected if any of the deletes fail.
     *
     * @example
     * // Recursively delete a reference and log the references of failures.
     * const bulkWriter = firestore.bulkWriter();
     * bulkWriter
     *   .onWriteError((error) => {
     *     if (
     *       error.failedAttempts < MAX_RETRY_ATTEMPTS
     *     ) {
     *       return true;
     *     } else {
     *       console.log('Failed write at document: ', error.documentRef.path);
     *       return false;
     *     }
     *   });
     * await firestore.recursiveDelete(docRef, bulkWriter);
     */
    recursiveDelete(
      ref: CollectionReference<any, any> | DocumentReference<any, any>,
      bulkWriter?: BulkWriter,
    ): Promise<void>;
    /**
     * Terminates the Firestore client and closes all open streams.
     *
     * @returns A Promise that resolves when the client is terminated.
     */
    terminate(): Promise<void>;
    /**
     * Fetches the root collections that are associated with this Firestore
     * database.
     *
     * @returns A Promise that resolves with an array of CollectionReferences.
     */
    listCollections(): Promise<Array<CollectionReference>>;
    /**
     * Executes the given updateFunction and commits the changes applied within
     * the transaction.
     *
     * You can use the transaction object passed to 'updateFunction' to read and
     * modify Firestore documents under lock. You have to perform all reads
     * before you perform any write.
     *
     * Transactions can be performed as read-only or read-write transactions. By
     * default, transactions are executed in read-write mode.
     *
     * A read-write transaction obtains a pessimistic lock on all documents that
     * are read during the transaction. These locks block other transactions,
     * batched writes, and other non-transactional writes from changing that
     * document. Any writes in a read-write transactions are committed once
     * 'updateFunction' resolves, which also releases all locks.
     *
     * If a read-write transaction fails with contention, the transaction is
     * retried up to five times. The `updateFunction` is invoked once for each
     * attempt.
     *
     * Read-only transactions do not lock documents. They can be used to read
     * documents at a consistent snapshot in time, which may be up to 60 seconds
     * in the past. Read-only transactions are not retried.
     *
     * Transactions time out after 60 seconds if no documents are read.
     * Transactions that are not committed within than 270 seconds are also
     * aborted. Any remaining locks are released when a transaction times out.
     *
     * @param updateFunction The function to execute within the transaction
     * context.
     * @param transactionOptions Transaction options.
     * @returns If the transaction completed successfully or was explicitly
     * aborted (by the updateFunction returning a failed Promise), the Promise
     * returned by the updateFunction will be returned here. Else if the
     * transaction failed, a rejected Promise with the corresponding failure
     * error will be returned.
     */
    runTransaction<T>(
      updateFunction: (transaction: Transaction) => Promise<T>,
      transactionOptions?:
        | ReadWriteTransactionOptions
        | ReadOnlyTransactionOptions,
    ): Promise<T>;
    /**
     * Creates a write batch, used for performing multiple writes as a single
     * atomic operation.
     */
    batch(): WriteBatch;
    /**
     * Creates a [BulkWriter]{@link BulkWriter}, used for performing
     * multiple writes in parallel. Gradually ramps up writes as specified
     * by the 500/50/5 rule.
     *
     * @see https://firebase.google.com/docs/firestore/best-practices#ramping_up_traffic
     *
     * @param options An options object used to configure the throttling
     * behavior for the underlying BulkWriter.
     */
    bulkWriter(options?: BulkWriterOptions): BulkWriter;
    /**
     * Creates a new `BundleBuilder` instance to package selected Firestore data into
     * a bundle.
     *
     * @param bundleId The ID of the bundle. When loaded on clients, client SDKs use this ID
     * and the timestamp associated with the bundle to tell if it has been loaded already.
     * If not specified, a random identifier will be used.
     *
     *
     * @example
     * const bundle = firestore.bundle('data-bundle');
     * const docSnapshot = await firestore.doc('abc/123').get();
     * const querySnapshot = await firestore.collection('coll').get();
     *
     * const bundleBuffer = bundle.add(docSnapshot); // Add a document
     *                            .add('coll-query', querySnapshot) // Add a named query.
     *                            .build()
     * // Save `bundleBuffer` to CDN or stream it to clients.
     */
    bundle(bundleId?: string): BundleBuilder;
    /**
     * Define a pipeline query. Every pipeline is defined as a series of stages
     * starting with a source stage.
     *
     * @example
     * ```typescript
     * let goodBooksPipeline: Pipeline =
     *     myFirestore.pipeline()
     *         .collection('books')
     *         .where(field('rating').greaterThan(4));
     * ```
     */
    pipeline(): Pipelines.PipelineSource;
  }
  /**
   * An immutable object representing a geo point in Firestore. The geo point
   * is represented as latitude/longitude pair.
   *
   * Latitude values are in the range of [-90, 90].
   * Longitude values are in the range of [-180, 180].
   */
  export class GeoPoint {
    /**
     * Creates a new immutable GeoPoint object with the provided latitude and
     * longitude values.
     * @param latitude The latitude as number between -90 and 90.
     * @param longitude The longitude as number between -180 and 180.
     */
    constructor(latitude: number, longitude: number);
    readonly latitude: number;
    readonly longitude: number;
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    isEqual(other: GeoPoint): boolean;
  }
  /**
   * A reference to a transaction.
   * The `Transaction` object passed to a transaction's updateFunction provides
   * the methods to read and write data within the transaction context. See
   * `Firestore.runTransaction()`.
   */
  export class Transaction {
    private constructor();
    /**
     * Retrieves a query result. Holds a pessimistic lock on all returned
     * documents.
     *
     * @param query A query to execute.
     * @returns A QuerySnapshot for the retrieved data.
     */
    get<AppModelType, DbModelType extends DocumentData>(
      query: Query<AppModelType, DbModelType>,
    ): Promise<QuerySnapshot<AppModelType, DbModelType>>;
    /**
     * Reads the document referenced by the provided `DocumentReference.`
     * Holds a pessimistic lock on the returned document.
     *
     * @param documentRef A reference to the document to be read.
     * @returns A DocumentSnapshot for the read data.
     */
    get<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
    ): Promise<DocumentSnapshot<AppModelType, DbModelType>>;
    /**
     * Retrieves an aggregate query result. Holds a pessimistic lock on all
     * documents that were matched by the underlying query.
     *
     * @param aggregateQuery An aggregate query to execute.
     * @returns An AggregateQuerySnapshot for the retrieved data.
     */
    get<
      AppModelType,
      DbModelType extends DocumentData,
      AggregateSpecType extends AggregateSpec,
    >(
      aggregateQuery: AggregateQuery<
        AggregateSpecType,
        AppModelType,
        DbModelType
      >,
    ): Promise<
      AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
    >;
    /**
     * Retrieves multiple documents from Firestore. Holds a pessimistic lock on
     * all returned documents.
     *
     * The first argument is required and must be of type `DocumentReference`
     * followed by any additional `DocumentReference` documents. If used, the
     * optional `ReadOptions` must be the last argument.
     *
     * @param {Array.<DocumentReference|ReadOptions>} documentRefsOrReadOptions
     * The `DocumentReferences` to receive, followed by an optional field
     * mask.
     * @returns A Promise that resolves with an array of resulting document
     * snapshots.
     */
    getAll<AppModelType, DbModelType extends DocumentData>(
      ...documentRefsOrReadOptions: Array<
        DocumentReference<AppModelType, DbModelType> | ReadOptions
      >
    ): Promise<Array<DocumentSnapshot<AppModelType, DbModelType>>>;
    /**
     * Create the document referred to by the provided `DocumentReference`.
     * The operation will fail the transaction if a document exists at the
     * specified location.
     *
     * @param documentRef A reference to the document to be create.
     * @param data The object data to serialize as the document.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    create<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: WithFieldValue<AppModelType>,
    ): Transaction;
    /**
     * Writes to the document referred to by the provided `DocumentReference`.
     * If the document does not exist yet, it will be created. If you pass
     * `SetOptions`, the provided data can be merged into the existing document.
     *
     * @param documentRef A reference to the document to be set.
     * @param data An object of the fields and values for the document.
     * @param options An object to configure the set behavior.
     * @param  options.merge - If true, set() merges the values specified in its
     * data argument. Fields omitted from this set() call remain untouched. If
     * your input sets any field to an empty map, all nested fields are
     * overwritten.
     * @param options.mergeFields - If provided, set() only replaces the
     * specified field paths. Any field path that is not specified is ignored
     * and remains untouched. If your input sets any field to an empty map, all
     * nested fields are overwritten.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    set<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: PartialWithFieldValue<AppModelType>,
      options: SetOptions,
    ): Transaction;
    set<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: WithFieldValue<AppModelType>,
    ): Transaction;
    /**
     * Updates fields in the document referred to by the provided
     * `DocumentReference`. The update will fail if applied to a document that
     * does not exist.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings.
     *
     * @param documentRef A reference to the document to be updated.
     * @param data An object containing the fields and values with which to
     * update the document.
     * @param precondition A Precondition to enforce on this update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    update<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: UpdateData<DbModelType>,
      precondition?: Precondition,
    ): Transaction;
    /**
     * Updates fields in the document referred to by the provided
     * `DocumentReference`. The update will fail if applied to a document that
     * does not exist.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings or by providing FieldPath objects.
     *
     * A `Precondition` restricting this update can be specified as the last
     * argument.
     *
     * @param documentRef A reference to the document to be updated.
     * @param field The first field to update.
     * @param value The first value
     * @param fieldsOrPrecondition An alternating list of field paths and values
     * to update, optionally followed by a `Precondition` to enforce on this
     * update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    update(
      documentRef: DocumentReference<any, any>,
      field: string | FieldPath,
      value: any,
      ...fieldsOrPrecondition: any[]
    ): Transaction;
    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    delete(
      documentRef: DocumentReference<any, any>,
      precondition?: Precondition,
    ): Transaction;
    /**
     * Executes this pipeline and returns a Promise to represent the asynchronous operation.
     *
     * The returned Promise can be used to track the progress of the pipeline execution
     * and retrieve the results (or handle any errors) asynchronously.
     *
     * <p>The pipeline results are returned in a `PipelineSnapshot` object, which contains a list of
     * `PipelineResult` objects. Each `PipelineResult` typically represents a single key/value map that
     * has passed through all the stages of the pipeline, however this might differ depending on the stages involved
     * in the pipeline. For example:
     *
     * <ul>
     *   <li>If there are no stages or only transformation stages, each `PipelineResult`
     *       represents a single document.</li>
     *   <li>If there is an aggregation, only a single `PipelineResult` is returned,
     *       representing the aggregated results over the entire dataset .</li>
     *   <li>If there is an aggregation stage with grouping, each `PipelineResult` represents a
     *       distinct group and its associated aggregated values.</li>
     * </ul>
     *
     *
     * @example
     * ```typescript
     * const futureResults = await transaction
     *   .execute(
     *     firestore.pipeline().collection("books")
     *       .where(greaterThan(Field.of("rating"), 4.5))
     *       .select("title", "author", "rating"));
     * ```
     *
     * @returns A Promise representing the asynchronous pipeline execution.
     */
    execute(pipeline: Pipelines.Pipeline): Promise<Pipelines.PipelineSnapshot>;
  }
  /**
   * A Firestore BulkWriter than can be used to perform a large number of writes
   * in parallel. Writes to the same document will be executed sequentially.
   *
   * @class
   */
  export class BulkWriter {
    private constructor();
    /**
     * Create a document with the provided data. This single operation will fail
     * if a document exists at its location.
     *
     * @param documentRef A reference to the document to be
     * created.
     * @param data The object to serialize as the document.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns A promise that resolves with the result of the write. If the
     * write fails, the promise is rejected with a
     * [BulkWriterError]{@link BulkWriterError}.
     */
    create<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: WithFieldValue<AppModelType>,
    ): Promise<WriteResult>;
    /**
     * Delete a document from the database.
     *
     * @param documentRef A reference to the document to be
     * deleted.
     * @param precondition A precondition to enforce for this
     * delete.
     * @param precondition.lastUpdateTime If set, enforces that the
     * document was last updated at lastUpdateTime. Fails the batch if the
     * document doesn't exist or was last updated at a different time.
     * @param precondition.exists If set, enforces that the target document
     * must or must not exist.
     * @returns A promise that resolves with the result of the delete. If the
     * delete fails, the promise is rejected with a
     * [BulkWriterError]{@link BulkWriterError}.
     */
    delete(
      documentRef: DocumentReference<any, any>,
      precondition?: Precondition,
    ): Promise<WriteResult>;
    /**
     * Write to the document referred to by the provided
     * [DocumentReference]{@link DocumentReference}. If the document does not
     * exist yet, it will be created. If you pass
     * [SetOptions]{@link SetOptions}., the provided data can be merged into the
     * existing document.
     *
     * @param  documentRef A reference to the document to be
     * set.
     * @param data The object to serialize as the document.
     * @param options An object to configure the set behavior.
     * @param  options.merge - If true, set() merges the values specified in its
     * data argument. Fields omitted from this set() call remain untouched. If
     * your input sets any field to an empty map, all nested fields are
     * overwritten.
     * @param options.mergeFields - If provided, set() only replaces the
     * specified field paths. Any field path that is not specified is ignored
     * and remains untouched. If your input sets any field to an empty map, all
     * nested fields are overwritten.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns A promise that resolves with the result of the write. If the
     * write fails, the promise is rejected with a
     * [BulkWriterError]{@link BulkWriterError}.
     */
    set<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: PartialWithFieldValue<AppModelType>,
      options: SetOptions,
    ): Promise<WriteResult>;
    set<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: WithFieldValue<AppModelType>,
    ): Promise<WriteResult>;
    /**
     * Update fields of the document referred to by the provided
     * [DocumentReference]{@link DocumentReference}. If the document doesn't yet
     * exist, the update fails and the entire batch will be rejected.
     *
     * The update() method accepts either an object with field paths encoded as
     * keys and field values encoded as values, or a variable number of
     * arguments that alternate between field paths and field values. Nested
     * fields can be updated by providing dot-separated field path strings or by
     * providing FieldPath objects.
     *
     *
     * A Precondition restricting this update can be specified as the last
     * argument.
     *
     * @param documentRef A reference to the document to be updated.
     * @param data An object containing the fields and values with which to
     * update the document.
     * @param precondition A Precondition to enforce on this update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns A promise that resolves with the result of the write. If the
     * write fails, the promise is rejected with a
     * [BulkWriterError]{@link BulkWriterError}.
     */
    update<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: UpdateData<DbModelType>,
      precondition?: Precondition,
    ): Promise<WriteResult>;
    /**
     * Update fields of the document referred to by the provided
     * [DocumentReference]{@link DocumentReference}. If the document doesn't yet
     * exist, the update fails and the entire batch will be rejected.
     *
     * The update() method accepts either an object with field paths encoded as
     * keys and field values encoded as values, or a variable number of
     * arguments that alternate between field paths and field values. Nested
     * fields can be updated by providing dot-separated field path strings or by
     * providing FieldPath objects.
     *
     *
     * A Precondition restricting this update can be specified as the last
     * argument.
     *
     * @param documentRef A reference to the document to be updated.
     * @param field The first field to update.
     * @param value The first value
     * @param fieldsOrPrecondition An alternating list of field paths and values
     * to update, optionally followed a `Precondition` to enforce on this
     * update.
     * @throws Error If the provided input is not valid Firestore data;
     * @returns A promise that resolves with the result of the write. If the
     * write fails, the promise is rejected with a
     * [BulkWriterError]{@link BulkWriterError}.
     */
    update(
      documentRef: DocumentReference<any, any>,
      field: string | FieldPath,
      value: any,
      ...fieldsOrPrecondition: any[]
    ): Promise<WriteResult>;
    /**
     * Attaches a listener that is run every time a BulkWriter operation
     * successfully completes.
     *
     * @param callback A callback to be called every time a BulkWriter operation
     * successfully completes.
     */
    onWriteResult(
      callback: (
        documentRef: DocumentReference<any, any>,
        result: WriteResult,
      ) => void,
    ): void;
    /**
     * Attaches an error handler listener that is run every time a BulkWriter
     * operation fails.
     *
     * BulkWriter has a default error handler that retries UNAVAILABLE and
     * ABORTED errors up to a maximum of 10 failed attempts. When an error
     * handler is specified, the default error handler will be overwritten.
     *
     * @param shouldRetryCallback A callback to be called every time a BulkWriter
     * operation fails. Returning `true` will retry the operation. Returning
     * `false` will stop the retry loop.
     */
    onWriteError(
      shouldRetryCallback: (error: BulkWriterError) => boolean,
    ): void;
    /**
     * Commits all writes that have been enqueued up to this point in parallel.
     *
     * Returns a Promise that resolves when all currently queued operations have
     * been committed. The Promise will never be rejected since the results for
     * each individual operation are conveyed via their individual Promises.
     *
     * The Promise resolves immediately if there are no pending writes.
     * Otherwise, the Promise waits for all previously issued writes, but it
     * does not wait for writes that were added after the method is called. If
     * you want to wait for additional writes, call `flush()` again.
     *
     * @returns A promise that resolves when all enqueued writes
     * up to this point have been committed.
     */
    flush(): Promise<void>;
    /**
     * Commits all enqueued writes and marks the BulkWriter instance as closed.
     *
     * After calling `close()`, calling any method will throw an error. Any
     * retries scheduled as part of an `onWriteError()` handler will be run
     * before the `close()` promise resolves.
     *
     * Returns a Promise that resolves when all writes have been committed. The
     * Promise will never be rejected. Calling this method will send all
     * requests. The promise resolves immediately if there are no pending
     * writes.
     *
     * @returns A promise that resolves when all enqueued writes
     * up to this point have been committed.
     */
    close(): Promise<void>;
  }
  /**
   * An options object to configure throttling on BulkWriter.
   */
  export interface BulkWriterOptions {
    /**
     * Whether to disable or configure throttling. By default, throttling is
     * enabled. This field can be set to either a boolean or a config
     * object. Setting it to `true` will use default values. You can override
     * the defaults by setting it to `false` to disable throttling, or by
     * setting the config values to enable throttling with the provided values.
     *
     * @see https://firebase.google.com/docs/firestore/best-practices#ramping_up_traffic
     *
     * @param initialOpsPerSecond The initial maximum number of operations per
     * second allowed by the throttler. If this field is not set, the default
     * is 500 operations per second.
     * @param maxOpsPerSecond The maximum number of operations per second
     * allowed by the throttler. If this field is set, the throttler's allowed
     * operations per second does not ramp up past the specified operations per
     * second.
     */
    readonly throttling?:
      | boolean
      | {
          initialOpsPerSecond?: number;
          maxOpsPerSecond?: number;
        };
  }
  /**
   * The error thrown when a BulkWriter operation fails.
   */
  export class BulkWriterError extends Error {
    /** The status code of the error. */
    readonly code: GrpcStatus;
    /** The error message of the error. */
    readonly message: string;
    /** The document reference the operation was performed on. */
    readonly documentRef: DocumentReference<any, any>;
    /** The type of operation performed. */
    readonly operationType: 'create' | 'set' | 'update' | 'delete';
    /** How many times this operation has been attempted unsuccessfully. */
    readonly failedAttempts: number;
  }
  /**
   * A write batch, used to perform multiple writes as a single atomic unit.
   *
   * A `WriteBatch` object can be acquired by calling `Firestore.batch()`. It
   * provides methods for adding writes to the write batch. None of the
   * writes will be committed (or visible locally) until `WriteBatch.commit()`
   * is called.
   *
   * Unlike transactions, write batches are persisted offline and therefore are
   * preferable when you don't need to condition your writes on read data.
   */
  export class WriteBatch {
    private constructor();
    /**
     * Create the document referred to by the provided `DocumentReference`. The
     * operation will fail the batch if a document exists at the specified
     * location.
     *
     * @param documentRef A reference to the document to be created.
     * @param data The object data to serialize as the document.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    create<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: WithFieldValue<AppModelType>,
    ): WriteBatch;
    /**
     * Write to the document referred to by the provided `DocumentReference`.
     * If the document does not exist yet, it will be created. If you pass
     * `SetOptions`, the provided data can be merged into the existing document.
     *
     * @param documentRef A reference to the document to be set.
     * @param data An object of the fields and values for the document.
     * @param options An object to configure the set behavior.
     * @param  options.merge - If true, set() merges the values specified in its
     * data argument. Fields omitted from this set() call remain untouched. If
     * your input sets any field to an empty map, all nested fields are
     * overwritten.
     * @param options.mergeFields - If provided, set() only replaces the
     * specified field paths. Any field path that is not specified is ignored
     * and remains untouched. If your input sets any field to an empty map, all
     * nested fields are overwritten.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    set<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: PartialWithFieldValue<AppModelType>,
      options: SetOptions,
    ): WriteBatch;
    set<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: WithFieldValue<AppModelType>,
    ): WriteBatch;
    /**
     * Update fields of the document referred to by the provided
     * `DocumentReference`. If the document doesn't yet exist, the update fails
     * and the entire batch will be rejected.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings.
     *
     * @param documentRef A reference to the document to be updated.
     * @param data An object containing the fields and values with which to
     * update the document.
     * @param precondition A Precondition to enforce on this update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    update<AppModelType, DbModelType extends DocumentData>(
      documentRef: DocumentReference<AppModelType, DbModelType>,
      data: UpdateData<DbModelType>,
      precondition?: Precondition,
    ): WriteBatch;
    /**
     * Updates fields in the document referred to by the provided
     * `DocumentReference`. The update will fail if applied to a document that
     * does not exist.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings or by providing FieldPath objects.
     *
     * A `Precondition` restricting this update can be specified as the last
     * argument.
     *
     * @param documentRef A reference to the document to be updated.
     * @param field The first field to update.
     * @param value The first value
     * @param fieldsOrPrecondition An alternating list of field paths and values
     * to update, optionally followed a `Precondition` to enforce on this
     * update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    update(
      documentRef: DocumentReference<any, any>,
      field: string | FieldPath,
      value: any,
      ...fieldsOrPrecondition: any[]
    ): WriteBatch;
    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    delete(
      documentRef: DocumentReference<any, any>,
      precondition?: Precondition,
    ): WriteBatch;
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit.
     */
    commit(): Promise<WriteResult[]>;
  }
  /**
   * An options object that configures conditional behavior of `update()` and
   * `delete()` calls in `DocumentReference`, `WriteBatch`, and `Transaction`.
   * Using Preconditions, these calls can be restricted to only apply to
   * documents that match the specified restrictions.
   */
  export interface Precondition {
    /**
     * If set, the last update time to enforce.
     */
    readonly lastUpdateTime?: Timestamp;
    /**
     * If set, enforces that the target document must or must not exist.
     */
    readonly exists?: boolean;
  }
  /**
   * An options object that configures the behavior of `set()` calls in
   * `DocumentReference`, `WriteBatch` and `Transaction`. These calls can be
   * configured to perform granular merges instead of overwriting the target
   * documents in their entirety.
   *
   * @param merge Changes the behavior of a set() call to only replace the
   * values specified in its data argument. Fields omitted from the set() call
   * remain untouched. If your input sets any field to an empty map, all nested
   * fields are overwritten.
   *
   * @param mergeFields Changes the behavior of set() calls to only replace
   * the specified field paths. Any field path that is not specified is ignored
   * and remains untouched. If your input sets any field to an empty map, all
   * nested fields are overwritten.
   */
  export type SetOptions =
    | {
        readonly merge?: boolean;
      }
    | {
        readonly mergeFields?: Array<string | FieldPath>;
      };
  /**
   * An options object that can be used to configure the behavior of `getAll()`
   * calls. By providing a `fieldMask`, these calls can be configured to only
   * return a subset of fields.
   */
  export interface ReadOptions {
    /**
     * Specifies the set of fields to return and reduces the amount of data
     * transmitted by the backend.
     *
     * Adding a field mask does not filter results. Documents do not need to
     * contain values for all the fields in the mask to be part of the result
     * set.
     */
    readonly fieldMask?: (string | FieldPath)[];
  }
  /**
   * A WriteResult wraps the write time set by the Firestore servers on `sets()`,
   * `updates()`, and `creates()`.
   */
  export class WriteResult {
    private constructor();
    /**
     * The write time as set by the Firestore servers.
     */
    readonly writeTime: Timestamp;
    /**
     * Returns true if this `WriteResult` is equal to the provided one.
     *
     * @param other The `WriteResult` to compare against.
     * @returns true if this `WriteResult` is equal to the provided one.
     */
    isEqual(other: WriteResult): boolean;
  }
  /**
   * A `DocumentReference` refers to a document location in a Firestore database
   * and can be used to write, read, or listen to the location. The document at
   * the referenced location may or may not exist. A `DocumentReference` can
   * also be used to create a `CollectionReference` to a subcollection.
   */
  export class DocumentReference<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /** The identifier of the document within its collection. */
    readonly id: string;
    /**
     * The `Firestore` for the Firestore database (useful for performing
     * transactions, etc.).
     */
    readonly firestore: Firestore;
    /**
     * A reference to the Collection to which this DocumentReference belongs.
     */
    readonly parent: CollectionReference<AppModelType, DbModelType>;
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */
    readonly path: string;
    /**
     * Gets a `CollectionReference` instance that refers to the collection at
     * the specified path.
     *
     * @param collectionPath A slash-separated path to a collection.
     * @returns The `CollectionReference` instance.
     */
    collection(collectionPath: string): CollectionReference;
    /**
     * Fetches the subcollections that are direct children of this document.
     *
     * @returns A Promise that resolves with an array of CollectionReferences.
     */
    listCollections(): Promise<Array<CollectionReference>>;
    /**
     * Creates a document referred to by this `DocumentReference` with the
     * provided object values. The write fails if the document already exists
     *
     * @param data The object data to serialize as the document.
     * @throws {Error} If the provided input is not a valid Firestore document or if the document already exists.
     * @returns A Promise resolved with the write time of this create.
     */
    create(data: WithFieldValue<AppModelType>): Promise<WriteResult>;
    /**
     * Writes to the document referred to by this `DocumentReference`. If the
     * document does not yet exist, it will be created. If you pass
     * `SetOptions`, the provided data can be merged into an existing document.
     *
     * @param data A map of the fields and values for the document.
     * @param options An object to configure the set behavior.
     * @param  options.merge - If true, set() merges the values specified in its
     * data argument. Fields omitted from this set() call remain untouched. If
     * your input sets any field to an empty map, all nested fields are
     * overwritten.
     * @param options.mergeFields - If provided, set() only replaces the
     * specified field paths. Any field path that is not specified is ignored
     * and remains untouched. If your input sets any field to an empty map, all
     * nested fields are overwritten.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns A Promise resolved with the write time of this set.
     */
    set(
      data: PartialWithFieldValue<AppModelType>,
      options: SetOptions,
    ): Promise<WriteResult>;
    set(data: WithFieldValue<AppModelType>): Promise<WriteResult>;
    /**
     * Updates fields in the document referred to by this `DocumentReference`.
     * The update will fail if applied to a document that does not exist.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings.
     *
     * @param data An object containing the fields and values with which to
     * update the document.
     * @param precondition A Precondition to enforce on this update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns A Promise resolved with the write time of this update.
     */
    update(
      data: UpdateData<DbModelType>,
      precondition?: Precondition,
    ): Promise<WriteResult>;
    /**
     * Updates fields in the document referred to by this `DocumentReference`.
     * The update will fail if applied to a document that does not exist.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings or by providing FieldPath objects.
     *
     * A `Precondition` restricting this update can be specified as the last
     * argument.
     *
     * @param field The first field to update.
     * @param value The first value.
     * @param moreFieldsOrPrecondition An alternating list of field paths and
     * values to update, optionally followed by a `Precondition` to enforce on
     * this update.
     * @throws Error If the provided input is not valid Firestore data.
     * @returns A Promise resolved with the write time of this update.
     */
    update(
      field: string | FieldPath,
      value: any,
      ...moreFieldsOrPrecondition: any[]
    ): Promise<WriteResult>;
    /**
     * Deletes the document referred to by this `DocumentReference`.
     *
     * @param precondition A Precondition to enforce for this delete.
     * @returns A Promise resolved with the write time of this delete.
     */
    delete(precondition?: Precondition): Promise<WriteResult>;
    /**
     * Reads the document referred to by this `DocumentReference`.
     *
     * @returns A Promise resolved with a DocumentSnapshot containing the
     * current document contents.
     */
    get(): Promise<DocumentSnapshot<AppModelType, DbModelType>>;
    /**
     * Attaches a listener for DocumentSnapshot events.
     *
     * @param onNext A callback to be called every time a new `DocumentSnapshot`
     * is available.
     * @param onError A callback to be called if the listen fails or is
     * cancelled. No further callbacks will occur.
     * @returns An unsubscribe function that can be called to cancel
     * the snapshot listener.
     */
    onSnapshot(
      onNext: (snapshot: DocumentSnapshot<AppModelType, DbModelType>) => void,
      onError?: (error: Error) => void,
    ): () => void;
    /**
     * Returns true if this `DocumentReference` is equal to the provided one.
     *
     * @param other The `DocumentReference` to compare against.
     * @returns true if this `DocumentReference` is equal to the provided one.
     */
    isEqual(other: DocumentReference<AppModelType, DbModelType>): boolean;
    /**
     * Applies a custom data converter to this DocumentReference, allowing you
     * to use your own custom model objects with Firestore. When you call
     * set(), get(), etc. on the returned DocumentReference instance, the
     * provided converter will convert between Firestore data of type
     * `NewDbModelType` and your custom type `NewAppModelType`.
     *
     * @param converter Converts objects to and from Firestore. Passing in
     * `null` removes the current converter.
     * @returns A DocumentReference<U> that uses the provided converter.
     */
    withConverter<
      NewAppModelType,
      NewDbModelType extends DocumentData = DocumentData,
    >(
      converter: FirestoreDataConverter<NewAppModelType, NewDbModelType> | null,
    ): DocumentReference<NewAppModelType, NewDbModelType>;
  }
  /**
   * A `DocumentSnapshot` contains data read from a document in your Firestore
   * database. The data can be extracted with `.data()` or `.get(<field>)` to
   * get a specific field.
   *
   * For a `DocumentSnapshot` that points to a non-existing document, any data
   * access will return 'undefined'. You can use the `exists` property to
   * explicitly verify a document's existence.
   */
  export class DocumentSnapshot<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    protected constructor();
    /** True if the document exists. */
    readonly exists: boolean;
    /** A `DocumentReference` to the document location. */
    readonly ref: DocumentReference<AppModelType, DbModelType>;
    /**
     * The ID of the document for which this `DocumentSnapshot` contains data.
     */
    readonly id: string;
    /**
     * The time the document was created. Not set for documents that don't
     * exist.
     */
    readonly createTime?: Timestamp;
    /**
     * The time the document was last updated (at the time the snapshot was
     * generated). Not set for documents that don't exist.
     */
    readonly updateTime?: Timestamp;
    /**
     * The time this snapshot was read.
     */
    readonly readTime: Timestamp;
    /**
     * Retrieves all fields in the document as an Object. Returns 'undefined' if
     * the document doesn't exist.
     *
     * @returns An Object containing all fields in the document.
     */
    data(): AppModelType | undefined;
    /**
     * Retrieves the field specified by `fieldPath`.
     *
     * @param fieldPath The path (e.g. 'foo' or 'foo.bar') to a specific field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    get(fieldPath: string | FieldPath): any;
    /**
     * Returns true if the document's data and path in this `DocumentSnapshot`
     * is equal to the provided one.
     *
     * @param other The `DocumentSnapshot` to compare against.
     * @returns true if this `DocumentSnapshot` is equal to the provided one.
     */
    isEqual(other: DocumentSnapshot<AppModelType, DbModelType>): boolean;
  }
  /**
   * A `QueryDocumentSnapshot` contains data read from a document in your
   * Firestore database as part of a query. The document is guaranteed to exist
   * and its data can be extracted with `.data()` or `.get(<field>)` to get a
   * specific field.
   *
   * A `QueryDocumentSnapshot` offers the same API surface as a
   * `DocumentSnapshot`. Since query results contain only existing documents, the
   * `exists` property will always be true and `data()` will never return
   * 'undefined'.
   */
  export class QueryDocumentSnapshot<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > extends DocumentSnapshot<AppModelType, DbModelType> {
    private constructor();
    /**
     * The time the document was created.
     */
    readonly createTime: Timestamp;
    /**
     * The time the document was last updated (at the time the snapshot was
     * generated).
     */
    readonly updateTime: Timestamp;
    /**
     * Retrieves all fields in the document as an Object.
     *
     * @override
     * @returns An Object containing all fields in the document.
     */
    data(): AppModelType;
  }
  /**
   * The direction of a `Query.orderBy()` clause is specified as 'desc' or 'asc'
   * (descending or ascending).
   */
  export type OrderByDirection = 'desc' | 'asc';
  /**
   * Filter conditions in a `Query.where()` clause are specified using the
   * strings '<', '<=', '==', '!=', '>=', '>', 'array-contains', 'in', 'not-in',
   * and 'array-contains-any'.
   */
  export type WhereFilterOp =
    | '<'
    | '<='
    | '=='
    | '!='
    | '>='
    | '>'
    | 'array-contains'
    | 'in'
    | 'not-in'
    | 'array-contains-any';
  /**
   * A `Query` refers to a Query which you can read or listen to. You can also
   * construct refined `Query` objects by adding filters and ordering.
   */
  export class Query<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    protected constructor();
    /**
     * The `Firestore` for the Firestore database (useful for performing
     * transactions, etc.).
     */
    readonly firestore: Firestore;
    /**
     * Creates and returns a new Query with the additional filter that documents
     * must contain the specified field and that its value should satisfy the
     * relation constraint provided.
     *
     * This function returns a new (immutable) instance of the Query (rather
     * than modify the existing instance) to impose the filter.
     *
     * @param fieldPath The path to compare
     * @param opStr The operation string (e.g "<", "<=", "==", ">", ">=").
     * @param value The value for comparison
     * @returns The created Query.
     */
    where(
      fieldPath: string | FieldPath,
      opStr: WhereFilterOp,
      value: any,
    ): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new [Query]{@link Query} with the additional filter
     * that documents should satisfy the relation constraint provided. Documents
     * must contain the field specified in the filter.
     *
     * This function returns a new (immutable) instance of the Query (rather than
     * modify the existing instance) to impose the filter.
     *
     * @param {Filter} filter A filter to apply to the Query.
     * @returns {Query} The created Query.
     */
    where(filter: Filter): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that's additionally sorted by the
     * specified field, optionally in descending order instead of ascending.
     *
     * This function returns a new (immutable) instance of the Query (rather
     * than modify the existing instance) to impose the order.
     *
     * @param fieldPath The field to sort by.
     * @param directionStr Optional direction to sort by ('asc' or 'desc'). If
     * not specified, order will be ascending.
     * @returns The created Query.
     */
    orderBy(
      fieldPath: string | FieldPath,
      directionStr?: OrderByDirection,
    ): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that only returns the first matching
     * documents.
     *
     * This function returns a new (immutable) instance of the Query (rather
     * than modify the existing instance) to impose the limit.
     *
     * @param limit The maximum number of items to return.
     * @returns The created Query.
     */
    limit(limit: number): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that only returns the last matching
     * documents.
     *
     * You must specify at least one orderBy clause for limitToLast queries,
     * otherwise an exception will be thrown during execution.
     *
     * Results for limitToLast queries cannot be streamed via the `stream()`
     * API.
     *
     * @param limit The maximum number of items to return.
     * @returns The created Query.
     */
    limitToLast(limit: number): Query<AppModelType, DbModelType>;
    /**
     * Specifies the offset of the returned results.
     *
     * This function returns a new (immutable) instance of the Query (rather
     * than modify the existing instance) to impose the offset.
     *
     * @param offset The offset to apply to the Query results.
     * @returns The created Query.
     */
    offset(offset: number): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query instance that applies a field mask to
     * the result and returns only the specified subset of fields. You can
     * specify a list of field paths to return, or use an empty list to only
     * return the references of matching documents.
     *
     * Queries that contain field masks cannot be listened to via `onSnapshot()`
     * listeners.
     *
     * This function returns a new (immutable) instance of the Query (rather
     * than modify the existing instance) to impose the field mask.
     *
     * @param field The field paths to return.
     * @returns The created Query.
     */
    select(...field: (string | FieldPath)[]): Query;
    /**
     * Creates and returns a new Query that starts at the provided document
     * (inclusive). The starting position is relative to the order of the query.
     * The document must contain all of the fields provided in the orderBy of
     * this query.
     *
     * @param snapshot The snapshot of the document to start after.
     * @returns The created Query.
     */
    startAt(
      snapshot: DocumentSnapshot<any, any>,
    ): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that starts at the provided fields
     * relative to the order of the query. The order of the field values
     * must match the order of the order by clauses of the query.
     *
     * @param fieldValues The field values to start this query at, in order
     * of the query's order by.
     * @returns The created Query.
     */
    startAt(...fieldValues: any[]): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that starts after the provided document
     * (exclusive). The starting position is relative to the order of the query.
     * The document must contain all of the fields provided in the orderBy of
     * this query.
     *
     * @param snapshot The snapshot of the document to start after.
     * @returns The created Query.
     */
    startAfter(
      snapshot: DocumentSnapshot<any, any>,
    ): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that starts after the provided fields
     * relative to the order of the query. The order of the field values
     * must match the order of the order by clauses of the query.
     *
     * @param fieldValues The field values to start this query after, in order
     * of the query's order by.
     * @returns The created Query.
     */
    startAfter(...fieldValues: any[]): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that ends before the provided document
     * (exclusive). The end position is relative to the order of the query. The
     * document must contain all of the fields provided in the orderBy of this
     * query.
     *
     * @param snapshot The snapshot of the document to end before.
     * @returns The created Query.
     */
    endBefore(
      snapshot: DocumentSnapshot<any, any>,
    ): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that ends before the provided fields
     * relative to the order of the query. The order of the field values
     * must match the order of the order by clauses of the query.
     *
     * @param fieldValues The field values to end this query before, in order
     * of the query's order by.
     * @returns The created Query.
     */
    endBefore(...fieldValues: any[]): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that ends at the provided document
     * (inclusive). The end position is relative to the order of the query. The
     * document must contain all of the fields provided in the orderBy of this
     * query.
     *
     * @param snapshot The snapshot of the document to end at.
     * @returns The created Query.
     */
    endAt(
      snapshot: DocumentSnapshot<any, any>,
    ): Query<AppModelType, DbModelType>;
    /**
     * Creates and returns a new Query that ends at the provided fields
     * relative to the order of the query. The order of the field values
     * must match the order of the order by clauses of the query.
     *
     * @param fieldValues The field values to end this query at, in order
     * of the query's order by.
     * @returns The created Query.
     */
    endAt(...fieldValues: any[]): Query<AppModelType, DbModelType>;
    /**
     * Executes the query and returns the results as a `QuerySnapshot`.
     *
     * @returns A Promise that will be resolved with the results of the Query.
     */
    get(): Promise<QuerySnapshot<AppModelType, DbModelType>>;
    /**
     * Plans and optionally executes this query. Returns a Promise that will be
     * resolved with the planner information, statistics from the query execution (if any),
     * and the query results (if any).
     *
     * @returns A Promise that will be resolved with the planner information, statistics
     *  from the query execution (if any), and the query results (if any).
     */
    explain(
      options?: ExplainOptions,
    ): Promise<ExplainResults<QuerySnapshot<AppModelType, DbModelType>>>;
    /**
     * Executes the query and returns the results as Node Stream.
     *
     * @returns A stream of QueryDocumentSnapshot.
     */
    stream(): NodeJS.ReadableStream;
    /**
     * Plans and optionally executes this query, and streams the results as Node Stream
     * of `{document?: DocumentSnapshot, metrics?: ExplainMetrics}` objects.
     *
     * The stream surfaces documents one at a time as they are received from the
     * server, and at the end, it will surface the metrics associated with
     * executing the query (if any).
     *
     * @example
     * ```typescript
     * let query = firestore.collection('col').where('foo', '==', 'bar');
     * let count = 0;
     *
     * query.explainStream({analyze: true}).on('data', (data) => {
     *   if (data.document) {
     *     // Use data.document which is a DocumentSnapshot instance.
     *     console.log(`Found document with name '${data.document.id}'`);
     *     ++count;
     *   }
     *   if (data.metrics) {
     *     // Use data.metrics which is an ExplainMetrics instance.
     *   }
     * }).on('end', () => {
     *   console.log(`Received ${count} documents.`);
     * });
     * ```
     *
     * @returns A stream of `{document?: DocumentSnapshot, metrics?: ExplainMetrics}`
     * objects.
     */
    explainStream(options?: ExplainOptions): NodeJS.ReadableStream;
    /**
     * Attaches a listener for `QuerySnapshot `events.
     *
     * @param onNext A callback to be called every time a new `QuerySnapshot`
     * is available.
     * @param onError A callback to be called if the listen fails or is
     * cancelled. No further callbacks will occur.
     * @returns An unsubscribe function that can be called to cancel
     * the snapshot listener.
     */
    onSnapshot(
      onNext: (snapshot: QuerySnapshot<AppModelType, DbModelType>) => void,
      onError?: (error: Error) => void,
    ): () => void;
    /**
     * Returns a query that counts the documents in the result set of this
     * query.
     *
     * The returned query, when executed, counts the documents in the result set
     * of this query without actually downloading the documents.
     *
     * Using the returned query to count the documents is efficient because only
     * the final count, not the documents' data, is downloaded. The returned
     * query can count the documents in cases where the result set is
     * prohibitively large to download entirely (thousands of documents).
     *
     * @returns a query that counts the documents in the result set of this
     * query. The count can be retrieved from `snapshot.data().count`, where
     * `snapshot` is the `AggregateQuerySnapshot` resulting from running the
     * returned query.
     */
    count(): AggregateQuery<
      {
        count: AggregateField<number>;
      },
      AppModelType,
      DbModelType
    >;
    /**
     * Returns a query that can perform the given aggregations.
     *
     * The returned query, when executed, calculates the specified aggregations
     * over the documents in the result set of this query without actually
     * downloading the documents.
     *
     * Using the returned query to perform aggregations is efficient because only
     * the final aggregation values, not the documents' data, is downloaded. The
     * returned query can perform aggregations of the documents in cases where
     * the result set is prohibitively large to download entirely (thousands of
     * documents).
     *
     * @param aggregateSpec An `AggregateSpec` object that specifies the aggregates
     * to perform over the result set. The AggregateSpec specifies aliases for each
     * aggregate, which can be used to retrieve the aggregate result.
     * @example
     * ```typescript
     * const aggregateQuery = col.aggregate(query, {
     *   countOfDocs: count(),
     *   totalHours: sum('hours'),
     *   averageScore: average('score')
     * });
     *
     * const aggregateSnapshot = await aggregateQuery.get();
     * const countOfDocs: number = aggregateSnapshot.data().countOfDocs;
     * const totalHours: number = aggregateSnapshot.data().totalHours;
     * const averageScore: number | null = aggregateSnapshot.data().averageScore;
     * ```
     */
    aggregate<T extends AggregateSpec>(
      aggregateSpec: T,
    ): AggregateQuery<T, AppModelType, DbModelType>;
    /**
     * Returns a query that can perform vector distance (similarity) search with given parameters.
     *
     * The returned query, when executed, performs a distance (similarity) search on the specified
     * `vectorField` against the given `queryVector` and returns the top documents that are closest
     * to the `queryVector`.
     *
     * Only documents whose `vectorField` field is a {@link VectorValue} of the same dimension as `queryVector`
     * participate in the query, all other documents are ignored.
     *
     * @example
     * ```typescript
     * // Returns the closest 10 documents whose Euclidean distance from their 'embedding' fields are closed to [41, 42].
     * const vectorQuery = col.findNearest('embedding', [41, 42], {limit: 10, distanceMeasure: 'EUCLIDEAN'});
     *
     * const querySnapshot = await aggregateQuery.get();
     * querySnapshot.forEach(...);
     * ```
     *
     * @param vectorField - A string or {@link FieldPath} specifying the vector field to search on.
     * @param queryVector - The {@link VectorValue} used to measure the distance from `vectorField` values in the documents.
     * @param options - Options control the vector query. `limit` specifies the upper bound of documents to return, must
     * be a positive integer with a maximum value of 1000. `distanceMeasure` specifies what type of distance is calculated
     * when performing the query.
     *
     * @deprecated Use the new {@link Query.findNearest:VectorQueryOptions} implementation
     * accepting a single `options` param.
     */
    findNearest(
      vectorField: string | FieldPath,
      queryVector: VectorValue | Array<number>,
      options: {
        limit: number;
        distanceMeasure: 'EUCLIDEAN' | 'COSINE' | 'DOT_PRODUCT';
      },
    ): VectorQuery<AppModelType, DbModelType>;
    /**
     * Returns a query that can perform vector distance (similarity) search with given parameters.
     *
     * The returned query, when executed, performs a distance (similarity) search on the specified
     * `vectorField` against the given `queryVector` and returns the top documents that are closest
     * to the `queryVector`.
     *
     * Only documents whose `vectorField` field is a {@link VectorValue} of the same dimension as `queryVector`
     * participate in the query, all other documents are ignored.
     *
     * @example
     * ```typescript
     * // Returns the closest 10 documents whose Euclidean distance from their 'embedding' fields are closed to [41, 42].
     * const vectorQuery = col.findNearest({
     *     vectorField: 'embedding',
     *     queryVector: [41, 42],
     *     limit: 10,
     *     distanceMeasure: 'EUCLIDEAN',
     *     distanceResultField: 'distance',
     *     distanceThreshold: 0.125
     * });
     *
     * const querySnapshot = await aggregateQuery.get();
     * querySnapshot.forEach(...);
     * ```
     * @param options - An argument specifying the behavior of the {@link VectorQuery} returned by this function.
     * See {@link VectorQueryOptions}.
     */
    findNearest(
      options: VectorQueryOptions,
    ): VectorQuery<AppModelType, DbModelType>;
    /**
     * Returns a query that can perform vector distance (similarity) search with given parameters.
     *
     * The returned query, when executed, performs a distance (similarity) search on the specified
     * `vectorField` against the given `queryVector` and returns the top documents that are closest
     * to the `queryVector`.
     *
     * Only documents whose `vectorField` field is a {@link VectorValue} of the same dimension as `queryVector`
     * participate in the query, all other documents are ignored.
     *
     * @example
     * ```typescript
     * // Returns the closest 10 documents whose Euclidean distance from their 'embedding' fields are closed to [41, 42].
     * const vectorQuery = col.findNearest({
     *     vectorField: 'embedding',
     *     queryVector: [41, 42],
     *     limit: 10,
     *     distanceMeasure: 'EUCLIDEAN',
     *     distanceResultField: 'distance',
     *     distanceThreshold: 0.125
     * });
     *
     * const querySnapshot = await aggregateQuery.get();
     * querySnapshot.forEach(...);
     * ```
     * @param options - An argument specifying the behavior of the {@link VectorQuery} returned by this function.
     * See {@link VectorQueryOptions}.
     */
    findNearest(
      options: VectorQueryOptions,
    ): VectorQuery<AppModelType, DbModelType>;
    /**
     * Returns true if this `Query` is equal to the provided one.
     *
     * @param other The `Query` to compare against.
     * @returns true if this `Query` is equal to the provided one.
     */
    isEqual(other: Query<AppModelType, DbModelType>): boolean;
    /**
     * Applies a custom data converter to this Query, allowing you to use your
     * own custom model objects with Firestore. When you call get() on the
     * returned Query, the provided converter will convert between Firestore
     * data of type `NewDbModelType` and your custom type `NewAppModelType`.
     *
     * @param converter Converts objects to and from Firestore. Passing in
     * `null` removes the current converter.
     * @returns A Query that uses the provided converter.
     */
    withConverter<
      NewAppModelType,
      NewDbModelType extends DocumentData = DocumentData,
    >(
      converter: FirestoreDataConverter<NewAppModelType, NewDbModelType> | null,
    ): Query<NewAppModelType, NewDbModelType>;
  }
  /**
   * A `QuerySnapshot` contains zero or more `QueryDocumentSnapshot` objects
   * representing the results of a query. The documents can be accessed as an
   * array via the `docs` property or enumerated using the `forEach` method. The
   * number of documents can be determined via the `empty` and `size`
   * properties.
   */
  export class QuerySnapshot<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /**
     * The query on which you called `get` or `onSnapshot` in order to get this
     * `QuerySnapshot`.
     */
    readonly query: Query<AppModelType, DbModelType>;
    /** An array of all the documents in the QuerySnapshot. */
    readonly docs: Array<QueryDocumentSnapshot<AppModelType, DbModelType>>;
    /** The number of documents in the QuerySnapshot. */
    readonly size: number;
    /** True if there are no documents in the QuerySnapshot. */
    readonly empty: boolean;
    /** The time this query snapshot was obtained. */
    readonly readTime: Timestamp;
    /**
     * Returns an array of the documents changes since the last snapshot. If
     * this is the first snapshot, all documents will be in the list as added
     * changes.
     */
    docChanges(): DocumentChange<AppModelType, DbModelType>[];
    /**
     * Enumerates all of the documents in the QuerySnapshot.
     *
     * @param callback A callback to be called with a `DocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg The `this` binding for the callback.
     */
    forEach(
      callback: (
        result: QueryDocumentSnapshot<AppModelType, DbModelType>,
      ) => void,
      thisArg?: any,
    ): void;
    /**
     * Returns true if the document data in this `QuerySnapshot` is equal to the
     * provided one.
     *
     * @param other The `QuerySnapshot` to compare against.
     * @returns true if this `QuerySnapshot` is equal to the provided one.
     */
    isEqual(other: QuerySnapshot<AppModelType, DbModelType>): boolean;
  }
  /**
   * A `VectorQuerySnapshot` contains zero or more `QueryDocumentSnapshot` objects
   * representing the results of a query. The documents can be accessed as an
   * array via the `docs` property or enumerated using the `forEach` method. The
   * number of documents can be determined via the `empty` and `size`
   * properties.
   */
  export class VectorQuerySnapshot<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /**
     * The query on which you called `get` in order to get this
     * `VectorQuerySnapshot`.
     */
    readonly query: VectorQuery<AppModelType, DbModelType>;
    /** An array of all the documents in the QuerySnapshot. */
    readonly docs: Array<QueryDocumentSnapshot<AppModelType, DbModelType>>;
    /** The number of documents in the QuerySnapshot. */
    readonly size: number;
    /** True if there are no documents in the QuerySnapshot. */
    readonly empty: boolean;
    /** The time this query snapshot was obtained. */
    readonly readTime: Timestamp;
    /**
     * Returns an array of the documents changes since the last snapshot. If
     * this is the first snapshot, all documents will be in the list as added
     * changes.
     */
    docChanges(): DocumentChange<AppModelType, DbModelType>[];
    /**
     * Enumerates all of the documents in the QuerySnapshot.
     *
     * @param callback A callback to be called with a `DocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg The `this` binding for the callback.
     */
    forEach(
      callback: (
        result: QueryDocumentSnapshot<AppModelType, DbModelType>,
      ) => void,
      thisArg?: any,
    ): void;
    /**
     * Returns true if the document data in this `VectorQuerySnapshot` is equal to the
     * provided one.
     *
     * @param other The `VectorQuerySnapshot` to compare against.
     * @returns true if this `VectorQuerySnapshot` is equal to the provided one.
     */
    isEqual(other: VectorQuerySnapshot<AppModelType, DbModelType>): boolean;
  }
  /**
   * The type of `DocumentChange` may be 'added', 'removed', or 'modified'.
   */
  export type DocumentChangeType = 'added' | 'removed' | 'modified';
  /**
   * A `DocumentChange` represents a change to the documents matching a query.
   * It contains the document affected and the type of change that occurred.
   */
  export interface DocumentChange<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    /** The type of change ('added', 'modified', or 'removed'). */
    readonly type: DocumentChangeType;
    /** The document affected by this change. */
    readonly doc: QueryDocumentSnapshot<AppModelType, DbModelType>;
    /**
     * The index of the changed document in the result set immediately prior to
     * this DocumentChange (i.e. supposing that all prior DocumentChange objects
     * have been applied). Is -1 for 'added' events.
     */
    readonly oldIndex: number;
    /**
     * The index of the changed document in the result set immediately after
     * this DocumentChange (i.e. supposing that all prior DocumentChange
     * objects and the current DocumentChange object have been applied).
     * Is -1 for 'removed' events.
     */
    readonly newIndex: number;
    /**
     * Returns true if the data in this `DocumentChange` is equal to the
     * provided one.
     *
     * @param other The `DocumentChange` to compare against.
     * @returns true if this `DocumentChange` is equal to the provided one.
     */
    isEqual(other: DocumentChange<AppModelType, DbModelType>): boolean;
  }
  /**
   * A `CollectionReference` object can be used for adding documents, getting
   * document references, and querying for documents (using the methods
   * inherited from `Query`).
   */
  export class CollectionReference<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > extends Query<AppModelType, DbModelType> {
    private constructor();
    /** The identifier of the collection. */
    readonly id: string;
    /**
     * A reference to the containing Document if this is a subcollection, else
     * null.
     */
    readonly parent: DocumentReference | null;
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */
    readonly path: string;
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
     */
    listDocuments(): Promise<
      Array<DocumentReference<AppModelType, DbModelType>>
    >;
    /**
     * Get a `DocumentReference` for a randomly-named document within this
     * collection. An automatically-generated unique ID will be used as the
     * document ID.
     *
     * @returns The `DocumentReference` instance.
     */
    doc(): DocumentReference<AppModelType, DbModelType>;
    /**
     * Get a `DocumentReference` for the document within the collection at the
     * specified path.
     *
     * @param documentPath A slash-separated path to a document.
     * @returns The `DocumentReference` instance.
     */
    doc(documentPath: string): DocumentReference<AppModelType, DbModelType>;
    /**
     * Add a new document to this collection with the specified data, assigning
     * it a document ID automatically.
     *
     * @param data An Object containing the data for the new document.
     * @throws Error If the provided input is not a valid Firestore document.
     * @returns A Promise resolved with a `DocumentReference` pointing to the
     * newly created document after it has been written to the backend.
     */
    add(
      data: WithFieldValue<AppModelType>,
    ): Promise<DocumentReference<AppModelType, DbModelType>>;
    /**
     * Returns true if this `CollectionReference` is equal to the provided one.
     *
     * @param other The `CollectionReference` to compare against.
     * @returns true if this `CollectionReference` is equal to the provided one.
     */
    isEqual(other: CollectionReference<AppModelType, DbModelType>): boolean;
    /**
     * Applies a custom data converter to this CollectionReference, allowing you
     * to use your own custom model objects with Firestore. When you call add()
     * on the returned CollectionReference instance, the provided converter will
     * convert between Firestore data of type `NewDbModelType` and your custom
     * type `NewAppModelType`.
     *
     * @param converter Converts objects to and from Firestore. Passing in
     * `null` removes the current converter.
     * @returns A CollectionReference that uses the provided converter.
     */
    withConverter<
      NewAppModelType,
      NewDbModelType extends DocumentData = DocumentData,
    >(
      converter: FirestoreDataConverter<NewAppModelType> | null,
    ): CollectionReference<NewAppModelType, NewDbModelType>;
  }
  /**
   * A `CollectionGroup` refers to all documents that are contained in a
   * collection or subcollection with a specific collection ID.
   */
  export class CollectionGroup<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > extends Query<AppModelType, DbModelType> {
    private constructor();
    /**
     * Partitions a query by returning partition cursors that can be used to run
     * the query in parallel. The returned cursors are split points that can be
     * used as starting and end points for individual query invocations.
     *
     * @param desiredPartitionCount The desired maximum number of partition
     * points. The number must be strictly positive. The actual number of
     * partitions returned may be fewer.
     * @returns An AsyncIterable of `QueryPartition`s.
     */
    getPartitions(
      desiredPartitionCount: number,
    ): AsyncIterable<QueryPartition<AppModelType, DbModelType>>;
    /**
     * Applies a custom data converter to this `CollectionGroup`, allowing you
     * to use your own custom model objects with Firestore. When you call get()
     * on the returned `CollectionGroup`, the provided converter will convert
     * between Firestore data of type `NewDbModelType` and your custom type
     * `NewAppModelType`.
     *
     * Using the converter allows you to specify generic type arguments when
     * storing and retrieving objects from Firestore.
     *
     * @example
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
     * const querySnapshot = await Firestore()
     *   .collectionGroup('posts')
     *   .withConverter(postConverter)
     *   .get();
     * for (const doc of querySnapshot.docs) {
     *   const post = doc.data();
     *   post.title; // string
     *   post.toString(); // Should be defined
     *   post.someNonExistentProperty; // TS error
     * }
     *
     * @param converter Converts objects to and from Firestore. Passing in
     * `null` removes the current converter.
     * @returns A `CollectionGroup` that uses the provided converter.
     */
    withConverter<
      NewAppModelType,
      NewDbModelType extends DocumentData = DocumentData,
    >(
      converter: FirestoreDataConverter<NewAppModelType, NewDbModelType> | null,
    ): CollectionGroup<NewAppModelType, NewDbModelType>;
  }
  /**
   * A split point that can be used in a query as a starting and/or end point for
   * the query results. The cursors returned by {@link #startAt} and {@link
   * #endBefore} can only be used in a query that matches the constraint of query
   * that produced this partition.
   */
  export class QueryPartition<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /**
     * The cursor that defines the first result for this partition or
     * `undefined` if this is the first partition.  The cursor value must be
     * destructured when passed to `startAt()` (for example with
     * `query.startAt(...queryPartition.startAt)`).
     *
     * @returns Cursor values that can be used with {@link Query#startAt} or
     * `undefined` if this is the first partition.
     */
    get startAt(): unknown[] | undefined;
    /**
     * The cursor that defines the first result after this partition or
     * `undefined` if this is the last partition.  The cursor value must be
     * destructured when passed to `endBefore()` (for example with
     * `query.endBefore(...queryPartition.endBefore)`).
     *
     * @returns Cursor values that can be used with {@link Query#endBefore} or
     * `undefined` if this is the last partition.
     */
    get endBefore(): unknown[] | undefined;
    /**
     * Returns a query that only returns the documents for this partition.
     *
     * @returns A query partitioned by a {@link Query#startAt} and {@link
     * Query#endBefore} cursor.
     */
    toQuery(): Query<AppModelType, DbModelType>;
  }
  /**
   * Union type representing the aggregate type to be performed.
   */
  export type AggregateType = 'count' | 'avg' | 'sum';
  /**
   * The union of all `AggregateField` types that are supported by Firestore.
   */
  export type AggregateFieldType =
    | ReturnType<typeof AggregateField.count>
    | ReturnType<typeof AggregateField.sum>
    | ReturnType<typeof AggregateField.average>;
  /**
   * Represents an aggregation that can be performed by Firestore.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export class AggregateField<T> {
    private constructor();
    /** A type string to uniquely identify instances of this class. */
    readonly type = 'AggregateField';
    /** The kind of aggregation performed by this AggregateField. */
    public readonly aggregateType: AggregateType;
    /**
     * Compares this object with the given object for equality.
     *
     * This object is considered "equal" to the other object if and only if
     * `other` performs the same kind of aggregation on the same field (if any).
     *
     * @param other The object to compare to this object for equality.
     * @returns `true` if this object is "equal" to the given object, as
     * defined above, or `false` otherwise.
     */
    isEqual(other: AggregateField<any>): boolean;
    /**
     * Create an AggregateField object that can be used to compute the count of
     * documents in the result set of a query.
     */
    static count(): AggregateField<number>;
    /**
     * Create an AggregateField object that can be used to compute the average of
     * a specified field over a range of documents in the result set of a query.
     * @param field Specifies the field to average across the result set.
     */
    static average(field: string | FieldPath): AggregateField<number | null>;
    /**
     * Create an AggregateField object that can be used to compute the sum of
     * a specified field over a range of documents in the result set of a query.
     * @param field Specifies the field to sum across the result set.
     */
    static sum(field: string | FieldPath): AggregateField<number>;
  }
  /**
   * A type whose property values are all `AggregateField` objects.
   */
  export interface AggregateSpec {
    [field: string]: AggregateFieldType;
  }
  /**
   * A type whose keys are taken from an `AggregateSpec`, and whose values are
   * the result of the aggregation performed by the corresponding
   * `AggregateField` from the input `AggregateSpec`.
   */
  export type AggregateSpecData<T extends AggregateSpec> = {
    [P in keyof T]: T[P] extends AggregateField<infer U> ? U : never;
  };
  /**
   * A query that calculates aggregations over an underlying query.
   */
  export class AggregateQuery<
    AggregateSpecType extends AggregateSpec,
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /** The query whose aggregations will be calculated by this object. */
    readonly query: Query<AppModelType, DbModelType>;
    /**
     * Executes this query.
     *
     * @returns A promise that will be resolved with the results of the query.
     */
    get(): Promise<
      AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
    >;
    /**
     * Plans and optionally executes this query. Returns a Promise that will be
     * resolved with the planner information, statistics from the query execution (if any),
     * and the query results (if any).
     *
     * @returns A Promise that will be resolved with the planner information, statistics
     *  from the query execution (if any), and the query results (if any).
     */
    explain(
      options?: ExplainOptions,
    ): Promise<
      ExplainResults<
        AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
      >
    >;
    /**
     * Compares this object with the given object for equality.
     *
     * This object is considered "equal" to the other object if and only if
     * `other` performs the same aggregations as this `AggregateQuery` and
     * the underlying Query of `other` compares equal to that of this object
     * using `Query.isEqual()`.
     *
     * @param other The object to compare to this object for equality.
     * @returns `true` if this object is "equal" to the given object, as
     * defined above, or `false` otherwise.
     */
    isEqual(
      other: AggregateQuery<AggregateSpecType, AppModelType, DbModelType>,
    ): boolean;
  }
  /**
   * The results of executing an aggregation query.
   */
  export class AggregateQuerySnapshot<
    AggregateSpecType extends AggregateSpec,
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /** The query that was executed to produce this result. */
    readonly query: AggregateQuery<
      AggregateSpecType,
      AppModelType,
      DbModelType
    >;
    /** The time this snapshot was read. */
    readonly readTime: Timestamp;
    /**
     * Returns the results of the aggregations performed over the underlying
     * query.
     *
     * The keys of the returned object will be the same as those of the
     * `AggregateSpec` object specified to the aggregation method, and the
     * values will be the corresponding aggregation result.
     *
     * @returns The results of the aggregations performed over the underlying
     * query.
     */
    data(): AggregateSpecData<AggregateSpecType>;
    /**
     * Compares this object with the given object for equality.
     *
     * Two `AggregateQuerySnapshot` instances are considered "equal" if they
     * have the same data and their underlying queries compare "equal" using
     * `AggregateQuery.isEqual()`.
     *
     * @param other The object to compare to this object for equality.
     * @returns `true` if this object is "equal" to the given object, as
     * defined above, or `false` otherwise.
     */
    isEqual(
      other: AggregateQuerySnapshot<
        AggregateSpecType,
        AppModelType,
        DbModelType
      >,
    ): boolean;
  }
  /**
   * A query that finds the document whose vector fields are closest to a certain vector.
   */
  export class VectorQuery<
    AppModelType = DocumentData,
    DbModelType extends DocumentData = DocumentData,
  > {
    private constructor();
    /** The query whose results participants in the distance search. */
    readonly query: Query<AppModelType, DbModelType>;
    /**
     * Executes this query.
     *
     * @returns A promise that will be resolved with the results of the query.
     */
    get(): Promise<VectorQuerySnapshot<AppModelType, DbModelType>>;
    /**
     * Compares this object with the given object for equality.
     *
     * This object is considered "equal" to the other object if and only if
     * `other` performs the same vector distance search as this `VectorQuery` and
     * the underlying Query of `other` compares equal to that of this object
     * using `Query.isEqual()`.
     *
     * @param other The object to compare to this object for equality.
     * @returns `true` if this object is "equal" to the given object, as
     * defined above, or `false` otherwise.
     */
    isEqual(other: VectorQuery<AppModelType, DbModelType>): boolean;
  }
  /**
   * Represent a vector type in Firestore documents.
   */
  export class VectorValue {
    private constructor(values: number[] | undefined);
    /**
     * Returns a copy of the raw number array form of the vector.
     */
    toArray(): number[];
    /**
     * Returns true if the two `VectorValue` has the same raw number arrays, returns false otherwise.
     */
    isEqual(other: VectorValue): boolean;
  }
  /**
   * Sentinel values that can be used when writing document fields with set(),
   * create() or update().
   */
  export class FieldValue {
    private constructor();
    /**
     * Returns a sentinel used with set(), create() or update() to include a
     * server-generated timestamp in the written data.
     *
     * @returns The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    static serverTimestamp(): FieldValue;
    /**
     * Returns a sentinel for use with update() or set() with {merge:true} to
     * mark a field for deletion.
     *
     * @returns The FieldValue sentinel for use in a call to set() or update().
     */
    static delete(): FieldValue;
    /**
     * Returns a special value that can be used with set(), create() or update()
     * that tells the server to increment the field's current value by the given
     * value.
     *
     * If either current field value or the operand uses floating point
     * precision, both values will be interpreted as floating point numbers and
     * all arithmetic will follow IEEE 754 semantics. Otherwise, integer
     * precision is kept and the result is capped between -2^63 and 2^63-1.
     *
     * If the current field value is not of type 'number', or if the field does
     * not yet exist, the transformation will set the field to the given value.
     *
     * @param n The value to increment by.
     * @returns The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    static increment(n: number): FieldValue;
    /**
     * Returns a special value that can be used with set(), create() or update()
     * that tells the server to union the given elements with any array value
     * that already exists on the server. Each specified element that doesn't
     * already exist in the array will be added to the end. If the field being
     * modified is not already an array it will be overwritten with an array
     * containing exactly the specified elements.
     *
     * @param elements The elements to union into the array.
     * @returns The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    static arrayUnion(...elements: any[]): FieldValue;
    /**
     * Returns a special value that can be used with set(), create() or update()
     * that tells the server to remove the given elements from any array value
     * that already exists on the server. All instances of each element
     * specified will be removed from the array. If the field being modified is
     * not already an array it will be overwritten with an empty array.
     *
     * @param elements The elements to remove from the array.
     * @returns The FieldValue sentinel for use in a call to set(), create() or
     * update().
     */
    static arrayRemove(...elements: any[]): FieldValue;
    /**
     * @returns A new `VectorValue` constructed with a copy of the given array of number.
     */
    static vector(values?: number[]): VectorValue;
    /**
     * Returns true if this `FieldValue` is equal to the provided one.
     *
     * @param other The `FieldValue` to compare against.
     * @returns true if this `FieldValue` is equal to the provided one.
     */
    isEqual(other: FieldValue): boolean;
  }
  /**
   * A FieldPath refers to a field in a document. The path may consist of a
   * single field name (referring to a top-level field in the document), or a
   * list of field names (referring to a nested field in the document).
   */
  export class FieldPath {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    constructor(...fieldNames: string[]);
    /**
     * Returns a special sentinel FieldPath to refer to the ID of a document.
     * It can be used in queries to sort or filter by the document ID.
     */
    static documentId(): FieldPath;
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */
    isEqual(other: FieldPath): boolean;
  }
  /**
   * A Timestamp represents a point in time independent of any time zone or
   * calendar, represented as seconds and fractions of seconds at nanosecond
   * resolution in UTC Epoch time. It is encoded using the Proleptic Gregorian
   * Calendar which extends the Gregorian calendar backwards to year one. It is
   * encoded assuming all minutes are 60 seconds long, i.e. leap seconds are
   * "smeared" so that no leap second table is needed for interpretation. Range
   * is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z.
   *
   * @see https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto
   */
  export class Timestamp {
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns A new `Timestamp` representing the current date.
     */
    static now(): Timestamp;
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the
     * given date.
     */
    static fromDate(date: Date): Timestamp;
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds Number of milliseconds since Unix epoch
     * 1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the
     * given number of milliseconds.
     */
    static fromMillis(milliseconds: number): Timestamp;
    /**
     * Creates a new timestamp.
     *
     * @param seconds The number of seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds The non-negative fractions of a second at nanosecond
     * resolution. Negative second values with fractions must still have
     * non-negative nanoseconds values that count forward in time. Must be from
     * 0 to 999,999,999 inclusive.
     */
    constructor(seconds: number, nanoseconds: number);
    /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
    readonly seconds: number;
    /** The non-negative fractions of a second at nanosecond resolution. */
    readonly nanoseconds: number;
    /**
     * Returns a new `Date` corresponding to this timestamp. This may lose
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     * this `Timestamp`, with millisecond precision.
     */
    toDate(): Date;
    /**
     * Returns the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     * the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    toMillis(): number;
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other The `Timestamp` to compare against.
     * @returns 'true' if this `Timestamp` is equal to the provided one.
     */
    isEqual(other: Timestamp): boolean;
    /**
     * Converts this object to a primitive `string`, which allows `Timestamp` objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     *
     * @returns a string encoding of this object.
     */
    valueOf(): string;
  }
  /**
   * Builds a Firestore data bundle with results from the given document and query snapshots.
   */
  export class BundleBuilder {
    /** The ID of this bundle. */
    readonly bundleId: string;
    /**
     * Adds a Firestore `DocumentSnapshot` to the bundle. Both the documents data and the document
     * read time will be included in the bundle.
     *
     * @param documentSnapshot A `DocumentSnapshot` to add.
     * @returns This instance.
     */
    add<AppModelType, DbModelType extends DocumentData>(
      documentSnapshot: DocumentSnapshot<AppModelType, DbModelType>,
    ): BundleBuilder;
    /**
     * Adds a Firestore `QuerySnapshot` to the bundle. Both the documents in the query results and
     * the query read time will be included in the bundle.
     *
     * @param queryName The name of the query to add.
     * @param querySnapshot A `QuerySnapshot` to add to the bundle.
     * @returns This instance.
     */
    add<AppModelType, DbModelType extends DocumentData>(
      queryName: string,
      querySnapshot: QuerySnapshot<AppModelType, DbModelType>,
    ): BundleBuilder;
    /**
     * Builds the bundle and returns the result as a `Buffer` instance.
     */
    build(): Buffer;
  }
  /**
   * The v1beta1 Veneer client. This client provides access to to the underlying
   * Firestore v1beta1 RPCs.
   * @deprecated Use v1 instead.
   */
  export const v1beta1: {
    FirestoreClient: typeof import('./v1beta1/firestore_client').FirestoreClient;
  };
  /**
   * The v1 Veneer clients. These clients provide access to the Firestore Admin
   * API and the underlying Firestore v1 RPCs.
   */
  export const v1: {
    FirestoreClient: typeof import('./v1/firestore_client').FirestoreClient;
    FirestoreAdminClient: typeof import('./v1/firestore_admin_client').FirestoreAdminClient;
  };
  /**
   * Status codes returned by Firestore's gRPC calls.
   */
  export enum GrpcStatus {
    OK = 0,
    CANCELLED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    UNAUTHENTICATED = 16,
  }
  /**
   * A `Filter` represents a restriction on one or more field values and can
   * be used to refine the results of a {@link Query}.
   * `Filters`s are created by invoking {@link Filter#where}, {@link Filter#or},
   * or {@link Filter#and} and can then be passed to {@link Query#where}
   * to create a new {@link Query} instance that also contains this `Filter`.
   */
  export abstract class Filter {
    /**
     * Creates and returns a new [Filter]{@link Filter}, which can be
     * applied to [Query.where()]{@link Query#where}, [Filter.or()]{@link Filter#or},
     * or [Filter.and()]{@link Filter#and}. When applied to a [Query]{@link Query}
     * it requires that documents must contain the specified field and that its value should
     * satisfy the relation constraint provided.
     *
     * Returns a new Filter that can be used to constrain the value of a Document property.
     *
     * @param {string|FieldPath} fieldPath The name of a property value to compare.
     * @param {string} opStr A comparison operation in the form of a string
     * (e.g., "<").
     * @param {*} value The value to which to compare the field for inclusion in
     * a query.
     * @returns {Filter} The created Filter.
     *
     * @example
     * ```typescript
     * let collectionRef = firestore.collection('col');
     *
     * collectionRef.where(Filter.where('foo', '==', 'bar')).get().then(querySnapshot => {
     *   querySnapshot.forEach(documentSnapshot => {
     *     console.log(`Found document at ${documentSnapshot.ref.path}`);
     *   });
     * });
     * ```
     */
    static where(
      fieldPath: string | FieldPath,
      opStr: WhereFilterOp,
      value: unknown,
    ): Filter;
    /**
     * Creates and returns a new [Filter]{@link Filter} that is a
     * disjunction of the given {@link Filter}s. A disjunction filter includes
     * a document if it satisfies any of the given {@link Filter}s.
     *
     * The returned Filter can be applied to [Query.where()]{@link Query#where},
     * [Filter.or()]{@link Filter#or}, or [Filter.and()]{@link Filter#and}. When
     * applied to a [Query]{@link Query} it requires that documents must satisfy
     * one of the provided {@link Filter}s.
     *
     * @param {...Filter} filters  Optional. The {@link Filter}s
     * for OR operation. These must be created with calls to {@link Filter#where},
     * {@link Filter#or}, or {@link Filter#and}.
     * @returns {Filter} The created {@link Filter}.
     *
     * @example
     * ```typescript
     * let collectionRef = firestore.collection('col');
     *
     * // doc.foo == 'bar' || doc.baz > 0
     * let orFilter = Filter.or(Filter.where('foo', '==', 'bar'), Filter.where('baz', '>', 0));
     *
     * collectionRef.where(orFilter).get().then(querySnapshot => {
     *   querySnapshot.forEach(documentSnapshot => {
     *     console.log(`Found document at ${documentSnapshot.ref.path}`);
     *   });
     * });
     * ```
     */
    static or(...filters: Filter[]): Filter;
    /**
     * Creates and returns a new [Filter]{@link Filter} that is a
     * conjunction of the given {@link Filter}s. A conjunction filter includes
     * a document if it satisfies all of the given {@link Filter}s.
     *
     * The returned Filter can be applied to [Query.where()]{@link Query#where},
     * [Filter.or()]{@link Filter#or}, or [Filter.and()]{@link Filter#and}. When
     * applied to a [Query]{@link Query} it requires that documents must satisfy
     * one of the provided {@link Filter}s.
     *
     * @param {...Filter} filters  Optional. The {@link Filter}s
     * for OR operation. These must be created with calls to {@link Filter#where},
     * {@link Filter#or}, or {@link Filter#and}.
     * @returns {Filter} The created {@link Filter}.
     *
     * @example
     * ```typescript
     * let collectionRef = firestore.collection('col');
     *
     * // doc.foo == 'bar' && doc.baz > 0
     * let orFilter = Filter.and(Filter.where('foo', '==', 'bar'), Filter.where('baz', '>', 0));
     *
     * collectionRef.where(orFilter).get().then(querySnapshot => {
     *   querySnapshot.forEach(documentSnapshot => {
     *     console.log(`Found document at ${documentSnapshot.ref.path}`);
     *   });
     * });
     * ```
     */
    static and(...filters: Filter[]): Filter;
  }
  type Duration = {
    /** Signed seconds of the span of time. */
    seconds: number;
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    nanoseconds: number;
  };
  /** Options used to configure explain queries. */
  export interface ExplainOptions {
    /**
     * Whether analyzing the query is enabled. If true, the query will be
     * executed and execution statistics will be returned as part of the
     * [ExplainResults]{@link ExplainResults}.
     */
    readonly analyze?: boolean;
  }
  /**
   * PlanSummary contains information about the planning stage of a query.
   */
  export interface PlanSummary {
    /**
     * Information about the indexes that were used to serve the query.
     * This should be inspected or logged, because the contents are intended to be
     * human-readable. Contents are subject to change, and it is advised to not
     * program against this object.
     */
    readonly indexesUsed: Record<string, unknown>[];
  }
  /** ExecutionStats contains information about the execution of a query. */
  export interface ExecutionStats {
    /** The number of query results. */
    readonly resultsReturned: number;
    /** The total execution time of the query. */
    readonly executionDuration: Duration;
    /** The number of read operations that occurred when executing the query. */
    readonly readOperations: number;
    /**
     * Contains additional statistics related to the query execution.
     * This should be inspected or logged, because the contents are intended to be
     * human-readable. Contents are subject to change, and it is advised to not
     * program against this object.
     */
    readonly debugStats: Record<string, unknown>;
  }
  /**
   * ExplainMetrics contains information about planning and execution of a query.
   */
  export interface ExplainMetrics {
    /**
     * Information about the query plan.
     */
    readonly planSummary: PlanSummary;
    /**
     * Information about the execution of the query, or null if the query was
     * not executed.
     */
    readonly executionStats: ExecutionStats | null;
  }
  /**
   * ExplainResults contains information about planning, execution, and results
   * of a query.
   */
  export interface ExplainResults<T> {
    /**
     * Information about planning and execution of the query.
     */
    readonly metrics: ExplainMetrics;
    /**
     * The snapshot that contains the results of executing the query, or null
     * if the query was not executed.
     */
    readonly snapshot: T | null;
  }
  /**
   * Specifies the behavior of the {@link VectorQuery} generated by a call to {@link Query.findNearest:VectorQueryOptions}.
   */
  export interface VectorQueryOptions {
    /**
     * A string or {@link FieldPath} specifying the vector field to search on.
     */
    vectorField: string | FieldPath;
    /**
     * The {@link VectorValue} used to measure the distance from `vectorField` values in the documents.
     */
    queryVector: VectorValue | Array<number>;
    /**
     * Specifies the upper bound of documents to return, must be a positive integer with a maximum value of 1000.
     */
    limit: number;
    /**
     * Specifies what type of distance is calculated when performing the query.
     */
    distanceMeasure: 'EUCLIDEAN' | 'COSINE' | 'DOT_PRODUCT';
    /**
     * Optionally specifies the name of a field that will be set on each returned DocumentSnapshot,
     * which will contain the computed distance for the document.
     */
    distanceResultField?: string | FieldPath;
    /**
     * Specifies a threshold for which no less similar documents will be returned. The behavior
     * of the specified `distanceMeasure` will affect the meaning of the distance threshold.
     *
     *  - For `distanceMeasure: "EUCLIDEAN"`, the meaning of `distanceThreshold` is:
     *     SELECT docs WHERE euclidean_distance <= distanceThreshold
     *  - For `distanceMeasure: "COSINE"`, the meaning of `distanceThreshold` is:
     *     SELECT docs WHERE cosine_distance <= distanceThreshold
     *  - For `distanceMeasure: "DOT_PRODUCT"`, the meaning of `distanceThreshold` is:
     *     SELECT docs WHERE dot_product_distance >= distanceThreshold
     */
    distanceThreshold?: number;
  }
  export namespace Pipelines {
    /**
     * Represents an expression that has been assigned an alias using the `.as()` method.
     *
     * This class wraps an existing `Expression` and associates it with a user-defined alias,
     * allowing the expression's result to be referred to by a different name in the output
     * of a Firestore pipeline query, particularly within `select()` operations.
     *
     * @internal
     */
    export type ExpressionType =
      | 'Field'
      | 'Constant'
      | 'Function'
      | 'AggregateFunction'
      | 'ListOfExprs'
      | 'AliasedExpression'
      | 'Variable'
      | 'PipelineValue';
    /**
     * Represents an expression that can be evaluated to a value within the execution of a {@link
     * Pipeline}.
     *
     * Expressions are the building blocks for creating complex queries and transformations in
     * Firestore pipelines. They can represent:
     *
     * - **Field references:** Access values from document fields.
     * - **Literals:** Represent constant values (strings, numbers, booleans).
     * - **Function calls:** Apply functions to one or more expressions.
     *
     * The `Expression` class provides a fluent API for building expressions. You can chain together
     * method calls to create complex expressions.
     */
    export abstract class Expression {
      abstract readonly expressionType: ExpressionType;
      /**
       * Creates an expression that adds this expression to another expression.
       *
       * @example
       * ```typescript
       * // Add the value of the 'quantity' field and the 'reserve' field.
       * field("quantity").add(field("reserve"));
       * ```
       *
       * @param second The expression or literal to add to this expression.
       * @param others Optional additional expressions or literals to add to this expression.
       * @returns A new `Expression` representing the addition operation.
       */
      add(
        second: Expression | unknown,
        ...others: Array<Expression | unknown>
      ): FunctionExpression;
      /**
       * Wraps the expression in a [BooleanExpression].
       *
       * @returns A [BooleanExpression] representing the same expression.
       */
      asBoolean(): BooleanExpression;
      /**
       * Creates an expression that subtracts another expression from this expression.
       *
       * @example
       * ```typescript
       * // Subtract the 'discount' field from the 'price' field
       * field("price").subtract(field("discount"));
       * ```
       *
       * @param subtrahend The expression to subtract from this expression.
       * @returns A new `Expression` representing the subtraction operation.
       */
      subtract(subtrahend: Expression): FunctionExpression;
      /**
       * Creates an expression that subtracts a constant value from this expression.
       *
       * @example
       * ```typescript
       * // Subtract 20 from the value of the 'total' field
       * field("total").subtract(20);
       * ```
       *
       * @param subtrahend The constant value to subtract.
       * @returns A new `Expression` representing the subtraction operation.
       */
      subtract(subtrahend: number): FunctionExpression;
      /**
       * Creates an expression that multiplies this expression by another expression.
       *
       * @example
       * ```typescript
       * // Multiply the 'quantity' field by the 'price' field
       * field("quantity").multiply(field("price"));
       * ```
       *
       * @param second The second expression or literal to multiply by.
       * @param others Optional additional expressions or literals to multiply by.
       * @returns A new `Expression` representing the multiplication operation.
       */
      multiply(
        second: Expression | number,
        ...others: Array<Expression | number>
      ): FunctionExpression;
      /**
       * Creates an expression that divides this expression by another expression.
       *
       * @example
       * ```typescript
       * // Divide the 'total' field by the 'count' field
       * field("total").divide(field("count"));
       * ```
       *
       * @param divisor The expression to divide by.
       * @returns A new `Expression` representing the division operation.
       */
      divide(divisor: Expression): FunctionExpression;
      /**
       * Creates an expression that divides this expression by a constant value.
       *
       * @example
       * ```typescript
       * // Divide the 'value' field by 10
       * field("value").divide(10);
       * ```
       *
       * @param divisor The constant value to divide by.
       * @returns A new `Expression` representing the division operation.
       */
      divide(divisor: number): FunctionExpression;
      /**
       * Creates an expression that calculates the modulo (remainder) of dividing this expression by another expression.
       *
       * @example
       * ```typescript
       * // Calculate the remainder of dividing the 'value' field by the 'divisor' field
       * field("value").mod(field("divisor"));
       * ```
       *
       * @param expression The expression to divide by.
       * @returns A new `Expression` representing the modulo operation.
       */
      mod(expression: Expression): FunctionExpression;
      /**
       * Creates an expression that calculates the modulo (remainder) of dividing this expression by a constant value.
       *
       * @example
       * ```typescript
       * // Calculate the remainder of dividing the 'value' field by 10
       * field("value").mod(10);
       * ```
       *
       * @param value The constant value to divide by.
       * @returns A new `Expression` representing the modulo operation.
       */
      mod(value: number): FunctionExpression;

      /**
       * Creates an expression that checks if this expression is equal to another expression.
       *
       * @example
       * ```typescript
       * // Check if the 'age' field is equal to the value of another field named 'otherAge'.
       * field("age").equal(field("otherAge"));
       *
       * // Check if the 'status' field is equal to a string literal.
       * field("status").equal("active");
       * ```
       *
       * @param expression The expression to compare for equality.
       * @returns A new `BooleanExpression` representing the equality comparison.
       */
      equal(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is equal to a constant value.
       *
       * @example
       * ```typescript
       * // Check if the 'city' field is equal to "London"
       * field("city").equal("London");
       * ```
       *
       * @param value The constant value to compare for equality.
       * @returns A new `Expression` representing the equality comparison.
       */
      equal(value: unknown): BooleanExpression;

      /**
       * Creates an expression that checks if this expression is not equal to another expression.
       *
       * @example
       * ```typescript
       * // Check if the 'status' field is not equal to "completed"
       * field("status").notEqual("completed");
       * ```
       *
       * @param expression The expression to compare for inequality.
       * @returns A new `BooleanExpression` representing the inequality comparison.
       */
      notEqual(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is not equal to a constant value.
       *
       * @example
       * ```typescript
       * // Check if the 'country' field is not equal to "USA"
       * field("country").notEqual("USA");
       * ```
       *
       * @param value The constant value to compare for inequality.
       * @returns A new `Expression` representing the inequality comparison.
       */
      notEqual(value: unknown): BooleanExpression;

      /**
       * Creates an expression that checks if this expression is less than another expression.
       *
       * @example
       * ```typescript
       * // Check if the 'age' field is less than 'limit'
       * field("age").lessThan(field('limit'));
       * ```
       *
       * @param expression The expression to compare against.
       * @returns A new `BooleanExpression` representing the less than comparison.
       */
      lessThan(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is less than a constant value.
       *
       * @example
       * ```typescript
       * // Check if the 'price' field is less than 50
       * field("price").lessThan(50);
       * ```
       *
       * @param value The constant value to compare for less than.
       * @returns A new `Expression` representing the less than comparison.
       */
      lessThan(value: unknown): BooleanExpression;

      /**
       * Creates an expression that checks if the current expression's value is less than or equal to the value of another expression.
       *
       * @example
       * ```typescript
       * // Check if the 'quantity' field is less than or equal to 20
       * field("quantity").lessThanOrEqual(constant(20));
       * ```
       *
       * @param expression The expression to compare against.
       * @returns A new `BooleanExpression` representing the less than or equal to comparison.
       */
      lessThanOrEqual(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is less than or equal to a constant value.
       *
       * @example
       * ```typescript
       * // Check if the 'score' field is less than or equal to 70
       * field("score").lessThanOrEqual(70);
       * ```
       *
       * @param value The constant value to compare for less than or equal to.
       * @returns A new `Expression` representing the less than or equal to comparison.
       */
      lessThanOrEqual(value: unknown): BooleanExpression;

      /**
       * Creates an expression that checks if this expression is greater than another expression.
       *
       * @example
       * ```typescript
       * // Check if the 'age' field is greater than the 'limit' field
       * field("age").greaterThan(field("limit"));
       * ```
       *
       * @param expression The expression to compare for greater than.
       * @returns A new `BooleanExpression` representing the greater than comparison.
       */
      greaterThan(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is greater than a constant value.
       *
       * @example
       * ```typescript
       * // Check if the 'price' field is greater than 100
       * field("price").greaterThan(100);
       * ```
       *
       * @param value The constant value to compare for greater than.
       * @returns A new `Expression` representing the greater than comparison.
       */
      greaterThan(value: unknown): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is greater than or equal to another
       * expression.
       *
       * @example
       * ```typescript
       * // Check if the 'quantity' field is greater than or equal to field 'requirement' plus 1
       * field("quantity").greaterThanOrEqual(field('requirement').add(1));
       * ```
       *
       * @param expression The expression to compare for greater than or equal to.
       * @returns A new `Expression` representing the greater than or equal to comparison.
       */
      greaterThanOrEqual(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is greater than or equal to a constant
       * value.
       *
       * @example
       * ```typescript
       * // Check if the 'score' field is greater than or equal to 80
       * field("score").greaterThanOrEqual(80);
       * ```
       *
       * @param value The constant value to compare for greater than or equal to.
       * @returns A new `Expression` representing the greater than or equal to comparison.
       */
      greaterThanOrEqual(value: unknown): BooleanExpression;

      /**
       * Creates an expression that concatenates an array expression with one or more other arrays.
       *
       * @example
       * ```typescript
       * // Combine the 'items' array with another array field.
       * field("items").arrayConcat(field("otherItems"));
       * ```
       * @param secondArray Second array expression or array literal to concatenate.
       * @param otherArrays Optional additional array expressions or array literals to concatenate.
       * @returns A new `Expr` representing the concatenated array.
       */
      arrayConcat(
        secondArray: Expression | unknown[],
        ...otherArrays: Array<Expression | unknown[]>
      ): FunctionExpression;

      /**
       * Creates an expression that checks if an array contains a specific element.
       *
       * @example
       * ```typescript
       * // Check if the 'sizes' array contains the value from the 'selectedSize' field
       * field("sizes").arrayContains(field("selectedSize"));
       * ```
       *
       * @param expression The element to search for in the array.
       * @returns A new `Expression` representing the 'array_contains' comparison.
       */
      arrayContains(expression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if an array contains a specific value.
       *
       * @example
       * ```typescript
       * // Check if the 'colors' array contains "red"
       * field("colors").arrayContains("red");
       * ```
       *
       * @param value The element to search for in the array.
       * @returns A new `Expression` representing the 'array_contains' comparison.
       */
      arrayContains(value: unknown): BooleanExpression;
      /**
       * Creates an expression that checks if an array contains all the specified elements.
       *
       * @example
       * ```typescript
       * // Check if the 'tags' array contains both the value in field "tag1" and the literal value "tag2"
       * field("tags").arrayContainsAll([field("tag1"), "tag2"]);
       * ```
       *
       * @param values The elements to check for in the array.
       * @returns A new `Expression` representing the 'array_contains_all' comparison.
       */
      arrayContainsAll(values: Array<Expression | unknown>): BooleanExpression;
      /**
       * Creates an expression that checks if an array contains all the specified elements.
       *
       * @example
       * ```typescript
       * // Check if the 'tags' array contains both of the values from field "tag1" and the literal value "tag2"
       * field("tags").arrayContainsAll(array([field("tag1"), "tag2"]));
       * ```
       *
       * @param arrayExpression The elements to check for in the array.
       * @returns A new `Expression` representing the 'array_contains_all' comparison.
       */
      arrayContainsAll(arrayExpression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if an array contains any of the specified elements.
       *
       * @example
       * ```typescript
       * // Check if the 'categories' array contains either values from field "cate1" or "cate2"
       * field("categories").arrayContainsAny([field("cate1"), field("cate2")]);
       * ```
       *
       * @param values The elements to check for in the array.
       * @returns A new `Expression` representing the 'array_contains_any' comparison.
       */
      arrayContainsAny(values: Array<Expression | unknown>): BooleanExpression;
      /**
       * Creates an expression that checks if an array contains any of the specified elements.
       *
       * @example
       * ```typescript
       * // Check if the 'groups' array contains either the value from the 'userGroup' field
       * // or the value "guest"
       * field("groups").arrayContainsAny(array([field("userGroup"), "guest"]));
       * ```
       *
       * @param arrayExpression The elements to check for in the array.
       * @returns A new `Expression` representing the 'array_contains_any' comparison.
       */
      arrayContainsAny(arrayExpression: Expression): BooleanExpression;

      /**
       * Creates an expression that filters an array using a provided alias and predicate expression.
       *
       * @example
       * ```typescript
       * // Filter "scores" to include only values greater than 50
       * field("scores").arrayFilter("score", greaterThan(variable("score"), 50));
       * ```
       *
       * @param alias The variable name to use for each element.
       * @param filter The predicate boolean expression to filter by.
       * @returns A new `Expression` representing the filtered array.
       */
      arrayFilter(alias: string, filter: BooleanExpression): FunctionExpression;

      /**
       * Creates an expression that applies a provided transformation to each element in an array.
       *
       * @example
       * ```typescript
       * // Transform the 'scores' array by multiplying each score by 10
       * field("scores").arrayTransform("score", multiply(variable("score"), 10));
       * ```
       *
       * @param elementAlias The variable name to use for each element.
       * @param transform The lambda expression used to transform the elements.
       * @returns A new `Expression` representing the arrayTransform operation.
       */
      arrayTransform(
        elementAlias: string,
        transform: Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that applies a provided transformation to each element in an array, providing the element's index to the transformation expression.
       *
       * @example
       * ```typescript
       * // Transform the 'scores' array by adding the index to each score
       * field("scores").arrayTransformWithIndex("score", "i", add(variable("score"), variable("i")));
       * ```
       *
       * @param elementAlias The variable name to use for each element.
       * @param indexAlias The variable name to use for the current index.
       * @param transform The lambda expression used to transform the elements.
       * @returns A new `Expression` representing the arrayTransformWithIndex operation.
       */
      arrayTransformWithIndex(
        elementAlias: string,
        indexAlias: string,
        transform: Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that returns a slice of an array from `offset` with `length` elements.
       *
       * @example
       * ```typescript
       * // Get 5 elements from the 'items' array starting from index 2
       * field("items").arraySlice(2, 5);
       *
       * // Get n number of elements from the 'items' array starting from index 2
       * field("items").arraySlice(2, field("count"));
       * ```
       *
       * @param offset The starting offset.
       * @param length The optional length of the slice.
       * @returns A new `Expression` representing the sliced array.
       */
      arraySlice(
        offset: number | Expression,
        length?: number | Expression,
      ): FunctionExpression;
      /**
       * Creates an expression that calculates the length of an array.
       *
       * @example
       * ```typescript
       * // Get the number of items in the 'cart' array
       * field("cart").arrayLength();
       * ```
       *
       * @returns A new `Expression` representing the length of the array.
       */
      arrayLength(): FunctionExpression;

      /**
       * Returns the first element of the array.
       *
       * @example
       * ```typescript
       * // Get the first element of the 'myArray' field.
       * field("myArray").arrayFirst();
       * ```
       *
       * @returns A new `Expression` representing the first element.
       */
      arrayFirst(): FunctionExpression;

      /**
       * Returns the first `n` elements of the array.
       *
       * @example
       * ```typescript
       * // Get the first 3 elements of the 'myArray' field.
       * field("myArray").arrayFirstN(3);
       * ```
       *
       * @param n The number of elements to return.
       * @returns A new `Expression` representing the first `n` elements.
       */
      arrayFirstN(n: number): FunctionExpression;

      /**
       * Returns the first `n` elements of the array.
       *
       * @example
       * ```typescript
       * // Get the first n elements of the 'myArray' field.
       * field("myArray").arrayFirstN(field("count"));
       * ```
       *
       * @param n An expression evaluating to the number of elements to return.
       * @returns A new `Expression` representing the first `n` elements.
       */
      arrayFirstN(n: Expression): FunctionExpression;

      /**
       * Returns the last element of the array.
       *
       * @example
       * ```typescript
       * // Get the last element of the 'myArray' field.
       * field("myArray").arrayLast();
       * ```
       *
       * @returns A new `Expression` representing the last element.
       */
      arrayLast(): FunctionExpression;

      /**
       * Returns the last `n` elements of the array.
       *
       * @example
       * ```typescript
       * // Get the last 3 elements of the 'myArray' field.
       * field("myArray").arrayLastN(3);
       * ```
       *
       * @param n The number of elements to return.
       * @returns A new `Expression` representing the last `n` elements.
       */
      arrayLastN(n: number): FunctionExpression;

      /**
       * Returns the last `n` elements of the array.
       *
       * @example
       * ```typescript
       * // Get the last n elements of the 'myArray' field.
       * field("myArray").arrayLastN(field("count"));
       * ```
       *
       * @param n An expression evaluating to the number of elements to return.
       * @returns A new `Expression` representing the last `n` elements.
       */
      arrayLastN(n: Expression): FunctionExpression;

      /**
       * Returns the maximum value in the array.
       *
       * @example
       * ```typescript
       * // Get the maximum value of the 'myArray' field.
       * field("myArray").arrayMaximum();
       * ```
       *
       * @returns A new `Expression` representing the maximum value.
       */
      arrayMaximum(): FunctionExpression;

      /**
       * Returns the largest `n` elements of the array.
       *
       * Note: Returns the n largest non-null elements in the array, in descending
       * order. This does not use a stable sort, meaning the order of equivalent
       * elements is undefined.
       *
       * @example
       * ```typescript
       * // Get the largest 3 elements of the 'myArray' field.
       * field("myArray").arrayMaximumN(3);
       * ```
       *
       * @param n The number of elements to return.
       * @returns A new `Expression` representing the largest `n` elements.
       */
      arrayMaximumN(n: number): FunctionExpression;

      /**
       * Returns the largest `n` elements of the array.
       *
       * Note: Returns the n largest non-null elements in the array, in descending
       * order. This does not use a stable sort, meaning the order of equivalent
       * elements is undefined.
       *
       * @example
       * ```typescript
       * // Get the largest n elements of the 'myArray' field.
       * field("myArray").arrayMaximumN(field("count"));
       * ```
       *
       * @param n An expression evaluating to the number of elements to return.
       * @returns A new `Expression` representing the largest `n` elements.
       */
      arrayMaximumN(n: Expression): FunctionExpression;

      /**
       * Returns the minimum value in the array.
       *
       * @example
       * ```typescript
       * // Get the minimum value of the 'myArray' field.
       * field("myArray").arrayMinimum();
       * ```
       *
       * @returns A new `Expression` representing the minimum value.
       */
      arrayMinimum(): FunctionExpression;

      /**
       * Returns the smallest `n` elements of the array.
       *
       * Note: Returns the n smallest non-null elements in the array, in ascending
       * order. This does not use a stable sort, meaning the order of equivalent
       * elements is undefined.
       *
       * @example
       * ```typescript
       * // Get the smallest 3 elements of the 'myArray' field.
       * field("myArray").arrayMinimumN(3);
       * ```
       *
       * @param n The number of elements to return.
       * @returns A new `Expression` representing the smallest `n` elements.
       */
      arrayMinimumN(n: number): FunctionExpression;

      /**
       * Returns the smallest `n` elements of the array.
       *
       * Note: Returns the n smallest non-null elements in the array, in ascending
       * order. This does not use a stable sort, meaning the order of equivalent
       * elements is undefined.
       *
       * @example
       * ```typescript
       * // Get the smallest n elements of the 'myArray' field.
       * field("myArray").arrayMinimumN(field("count"));
       * ```
       *
       * @param n An expression evaluating to the number of elements to return.
       * @returns A new `Expression` representing the smallest `n` elements.
       */
      arrayMinimumN(n: Expression): FunctionExpression;

      /**
       * Returns the first index of the search value in the array, or -1 if not found.
       *
       * @example
       * ```typescript
       * // Get the first index of the value 3 in the 'myArray' field.
       * field("myArray").arrayIndexOf(3);
       * ```
       *
       * @param search The value to search for.
       * @returns A new `Expression` representing the index.
       */
      arrayIndexOf(search: unknown): FunctionExpression;

      /**
       * Returns the first index of the search value in the array, or -1 if not found.
       *
       * @example
       * ```typescript
       * // Get the first index of the value in 'searchVal' field in the 'myArray' field.
       * field("myArray").arrayIndexOf(field("searchVal"));
       * ```
       *
       * @param search An expression evaluating to the value to search for.
       * @returns A new `Expression` representing the index.
       */
      arrayIndexOf(search: Expression): FunctionExpression;

      /**
       * Returns the last index of the search value in the array, or -1 if not found.
       *
       * @example
       * ```typescript
       * // Get the last index of the value 3 in the 'myArray' field.
       * field("myArray").arrayLastIndexOf(3);
       * ```
       *
       * @param search The value to search for.
       * @returns A new `Expression` representing the index.
       */
      arrayLastIndexOf(search: unknown): FunctionExpression;

      /**
       * Returns the last index of the search value in the array, or -1 if not found.
       *
       * @example
       * ```typescript
       * // Get the last index of the value in 'searchVal' field in the 'myArray' field.
       * field("myArray").arrayLastIndexOf(field("searchVal"));
       * ```
       *
       * @param search An expression evaluating to the value to search for.
       * @returns A new `Expression` representing the index.
       */
      arrayLastIndexOf(search: Expression): FunctionExpression;

      /**
       * Returns all indices of the search value in the array.
       *
       * @example
       * ```typescript
       * // Get all indices of the value 3 in the 'myArray' field.
       * field("myArray").arrayIndexOfAll(3);
       * ```
       *
       * @param search The value to search for.
       * @returns A new `Expression` representing the indices.
       */
      arrayIndexOfAll(search: unknown): FunctionExpression;

      /**
       * Returns all indices of the search value in the array.
       *
       * @example
       * ```typescript
       * // Get all indices of the value in 'searchVal' field in the 'myArray' field.
       * field("myArray").arrayIndexOfAll(field("searchVal"));
       * ```
       *
       * @param search An expression evaluating to the value to search for.
       * @returns A new `Expression` representing the indices.
       */
      arrayIndexOfAll(search: Expression): FunctionExpression;

      /**
       * Creates an expression that checks if this expression is equal to any of the provided values or
       * expressions.
       *
       * @example
       * ```typescript
       * // Check if the 'category' field is either "Electronics" or the value of field 'primaryType'
       * field("category").equalAny(["Electronics", field("primaryType")]);
       * ```
       *
       * @param values An array of values or expressions to check against.
       * @returns A new `BooleanExpression` representing the 'IN' comparison.
       */
      equalAny(values: Array<Expression | unknown>): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is equal to any of the provided values or
       * expressions.
       *
       * @example
       * ```typescript
       * // Check if the 'category' field is either "Electronics" or the value of field 'primaryType'
       * field("category").equalAny(array(["Electronics", field("primaryType")]));
       * ```
       *
       * @param arrayExpression An expression that evaluates to an array of values to check against.
       * @returns A new `Expression` representing the 'IN' comparison.
       */
      equalAny(arrayExpression: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if this expression is not equal to any of the provided values or
       * expressions.
       *
       * @example
       * ```typescript
       * // Check if the 'status' field is neither "pending" nor the value of 'rejectedStatus'
       * field("status").notEqualAny(["pending", field("rejectedStatus")]);
       * ```
       *
       * @param values The values or expressions to check against.
       * @returns A new `Expression` representing the 'NotEqAny' comparison.
       */
      notEqualAny(values: Array<Expression | unknown>): BooleanExpression;

      /**
       * Creates an expression that checks if the current expression's value is not equal to any of the values within the array produced by the `arrayExpression`.
       *
       * @example
       * ```typescript
       * // Check if the 'status' field is not equal to any value in the array returned by the 'rejectedStatuses' field.
       * field("status").notEqualAny(field('rejectedStatuses'));
       * ```
       *
       * @param arrayExpression An `Expression` that evaluates to an array of values to compare against.
       * @returns A new `BooleanExpression` representing the result of the 'not equal to any' comparison.
       */
      notEqualAny(arrayExpression: Expression): BooleanExpression;

      /**
       * Creates an expression that checks if a field exists in the document.
       *
       * @example
       * ```typescript
       * // Check if the document has a field named "phoneNumber"
       * field("phoneNumber").exists();
       * ```
       *
       * @returns A new `BooleanExpression` representing the 'exists' check.
       */
      exists(): BooleanExpression;
      /**
       * Creates an expression that calculates the character length of a string in UTF-8.
       *
       * @example
       * ```typescript
       * // Get the character length of the 'name' field in its UTF-8 form.
       * field("name").charLength();
       * ```
       *
       * @returns A new `Expression` representing the length of the string.
       */
      charLength(): FunctionExpression;

      /**
       * Creates an expression that performs a case-sensitive string comparison.
       *
       * @example
       * ```typescript
       * // Check if the 'title' field contains the word "guide" (case-sensitive)
       * field("title").like("%guide%");
       * ```
       *
       * @param pattern The string pattern to search for. You can use "%" as a wildcard character within the pattern.
       * @returns A new `BooleanExpression` representing the 'like' comparison.
       */
      like(pattern: string): BooleanExpression;

      /**
       * Creates an expression that performs a case-sensitive string comparison.
       *
       * @example
       * ```typescript
       * // Check if the 'description' field matches a pattern from another field
       * field("description").like(field("searchPattern"));
       * ```
       *
       * @param pattern An `Expression` that evaluates to the string pattern to search for. You can use "%" as a wildcard character within the pattern.
       * @returns A new `BooleanExpression` representing the 'like' comparison.
       */
      like(pattern: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if a string contains a specified regular expression as a
       * substring.
       *
       * @example
       * ```typescript
       * // Check if the 'description' field contains "example" (case-insensitive)
       * field("description").regexContains("(?i)example");
       * ```
       *
       * @param pattern The regular expression to use for the search.
       * @returns A new `BooleanExpression` representing the 'contains' comparison.
       */
      regexContains(pattern: string): BooleanExpression;

      /**
       * Creates an expression that checks if a string contains a specified regular expression as a
       * substring.
       *
       * @example
       * ```typescript
       * // Check if the 'description' field contains the regular expression stored in field 'regex'
       * field("description").regexContains(field("regex"));
       * ```
       *
       * @param pattern The regular expression to use for the search.
       * @returns A new `BooleanExpression` representing the 'contains' comparison.
       */
      regexContains(pattern: Expression): BooleanExpression;

      /**
       * Creates an expression that returns the first substring of a string expression that matches
       * a specified regular expression.
       *
       * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
       *
       * @example
       * ```typescript
       * // Extract the domain from an email address
       * field("email").regexFind("@.+")
       * ```
       *
       * @param pattern - The regular expression to search for.
       * @returns A new {@link Expression} representing the regular expression find function.
       */
      regexFind(pattern: string): FunctionExpression;
      /**
       * Creates an expression that returns the first substring of a string expression that matches
       * a specified regular expression.
       *
       * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
       *
       * @example
       * ```typescript
       * // Extract the domain from an email address
       * field("email").regexFind(field("domain"))
       * ```
       *
       * @param pattern - The regular expression to search for.
       * @returns A new {@link Expression} representing the regular expression find function.
       */
      regexFind(pattern: Expression): FunctionExpression;
      /**
       *
       * Creates an expression that evaluates to a list of all substrings in this string expression that
       * match a specified regular expression.
       *
       * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
       *
       * @example
       * ```typescript
       * // Extract all hashtags from a post content field
       * field("content").regexFindAll("#[A-Za-z0-9_]+")
       * ```
       *
       * @param pattern - The regular expression to search for.
       * @returns A new {@link Expression} that evaluates to an array of matched substrings.
       */
      regexFindAll(pattern: string): FunctionExpression;
      /**
       *
       * Creates an expression that evaluates to a list of all substrings in this string expression that
       * match a specified regular expression.
       *
       * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
       *
       * @example
       * ```typescript
       * // Extract all names from a post content field
       * field("content").regexFindAll(field("names"))
       * ```
       *
       * @param pattern - The regular expression to search for.
       * @returns A new {@link Expression} that evaluates to an array of matched substrings.
       */
      regexFindAll(pattern: Expression): FunctionExpression;

      /**
       * Creates an expression that checks if a string matches a specified regular expression.
       *
       * @example
       * ```typescript
       * // Check if the 'email' field matches a valid email pattern
       * field("email").regexMatch("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
       * ```
       *
       * @param pattern The regular expression to use for the match.
       * @returns A new `Expression` representing the regular expression match.
       */
      regexMatch(pattern: string): BooleanExpression;

      /**
       * Creates an expression that checks if a string matches a specified regular expression.
       *
       * @example
       * ```typescript
       * // Check if the 'email' field matches a regular expression stored in another field.
       * field("email").regexMatch(field("regexPattern"));
       * ```
       *
       * @param pattern An expression that evaluates to the regular expression string to use for the match.
       * @returns A new `BooleanExpression` representing the result of the regular expression match.
       */
      regexMatch(pattern: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if a string contains a specified substring.
       *
       * @example
       * ```typescript
       * // Check if the 'description' field contains "example".
       * field("description").stringContains("example");
       * ```
       *
       * @param substring The substring to search for.
       * @returns A new `Expression` representing the 'contains' comparison.
       */
      stringContains(substring: string): BooleanExpression;

      /**
       * Creates an expression that checks if a string contains the string represented by another expression.
       *
       * @example
       * ```typescript
       * // Check if the 'description' field contains the value of the 'keyword' field.
       * field("description").stringContains(field("keyword"));
       * ```
       *
       * @param expr The expression representing the substring to search for.
       * @returns A new `BooleanExpression` representing the 'contains' comparison.
       */
      stringContains(expr: Expression): BooleanExpression;
      /**
       * Creates an expression that checks if a string starts with a given prefix.
       *
       * @example
       * ```typescript
       * // Check if the 'name' field starts with "Mr."
       * field("name").startsWith("Mr.");
       * ```
       *
       * @param prefix The prefix to check for.
       * @returns A new `Expression` representing the 'starts with' comparison.
       */
      startsWith(prefix: string): BooleanExpression;

      /**
       * Creates an expression that checks if the string value of the current expression starts with the string value of the given prefix expression.
       *
       * @example
       * ```typescript
       * // Check if the 'fullName' field starts with the value of the 'firstName' field
       * field("fullName").startsWith(field("firstName"));
       * ```
       *
       * @param prefix An expression whose string value will be used as the prefix to check against.
       * @returns A new `BooleanExpression` representing the 'starts with' comparison result.
       */
      startsWith(prefix: Expression): BooleanExpression;

      /**
       * Creates an expression that checks if a string ends with a given postfix.
       *
       * @example
       * ```typescript
       * // Check if the 'filename' field ends with ".txt"
       * field("filename").endsWith(".txt");
       * ```
       *
       * @param suffix The postfix to check for.
       * @returns A new `BooleanExpression` representing the 'ends with' comparison.
       */
      endsWith(suffix: string): BooleanExpression;
      /**
       * Creates an expression that checks if a string ends with a given postfix (represented as an
       * expression).
       *
       * @example
       * ```typescript
       * // Check if the 'url' field ends with the value of the 'extension' field
       * field("url").endsWith(field("extension"));
       * ```
       *
       * @param suffix The postfix expression to check for.
       * @returns A new `Expression` representing the 'ends with' comparison.
       */
      endsWith(suffix: Expression): BooleanExpression;
      /**
       * Creates an expression that converts a string to lowercase.
       *
       * @example
       * ```typescript
       * // Convert the 'name' field to lowercase
       * field("name").toLower();
       * ```
       *
       * @returns A new `Expression` representing the lowercase string.
       */
      toLower(): FunctionExpression;
      /**
       * Creates an expression that converts a string to uppercase.
       *
       * @example
       * ```typescript
       * // Convert the 'title' field to uppercase
       * field("title").toUpper();
       * ```
       *
       * @returns A new `Expression` representing the uppercase string.
       */
      toUpper(): FunctionExpression;
      /**
       * Creates an expression that removes leading and trailing characters from a string or byte array.
       *
       * @example
       * ```typescript
       * // Trim whitespace from the 'userInput' field
       * field("userInput").trim();
       *
       * // Trim quotes from the 'userInput' field
       * field("userInput").trim('"');
       * ```
       * @param valueToTrim Optional This parameter is treated as a set of characters or bytes that will be
       * trimmed from the input. If not specified, then whitespace will be trimmed.
       * @returns A new `Expr` representing the trimmed string or byte array.
       */
      trim(
        valueToTrim?: string | Expression | Uint8Array | Buffer,
      ): FunctionExpression;
      /**
       * Trims whitespace or a specified set of characters/bytes from the beginning of a string or byte array.
       *
       * @example
       * ```typescript
       * // Trim whitespace from the beginning of the 'userInput' field
       * field("userInput").ltrim();
       *
       * // Trim quotes from the beginning of the 'userInput' field
       * field("userInput").ltrim('"');
       * ```
       *
       * @param valueToTrim Optional. A string or byte array containing the characters/bytes to trim.
       * If not specified, whitespace will be trimmed.
       * @returns A new `Expression` representing the trimmed string.
       */
      ltrim(
        valueToTrim?: string | Expression | Uint8Array | Buffer,
      ): FunctionExpression;
      /**
       * Trims whitespace or a specified set of characters/bytes from the end of a string or byte array.
       *
       * @example
       * ```typescript
       * // Trim whitespace from the end of the 'userInput' field
       * field("userInput").rtrim();
       *
       * // Trim quotes from the end of the 'userInput' field
       * field("userInput").rtrim('"');
       * ```
       *
       * @param valueToTrim Optional. A string or byte array containing the characters/bytes to trim.
       * If not specified, whitespace will be trimmed.
       * @returns A new `Expression` representing the trimmed string or byte array.
       */
      rtrim(
        valueToTrim?: string | Expression | Uint8Array | Buffer,
      ): FunctionExpression;
      /**
       * Creates an expression that concatenates string expressions together.
       *
       * @example
       * ```typescript
       * // Combine the 'firstName', " ", and 'lastName' fields into a single string
       * field("firstName").stringConcat(constant(" "), field("lastName"));
       * ```
       *
       * @param secondString The additional expression or string literal to concatenate.
       * @param otherStrings Optional additional expressions or string literals to concatenate.
       * @returns A new `Expression` representing the concatenated string.
       */
      stringConcat(
        secondString: Expression | string,
        ...otherStrings: Array<Expression | string>
      ): FunctionExpression;
      /**
       * Creates an expression that finds the index of the first occurrence of a substring or byte sequence.
       *
       * @example
       * ```typescript
       * // Find the index of "foo" in the 'text' field
       * field("text").stringIndexOf("foo");
       * ```
       *
       * @param search The substring or byte sequence to search for.
       * @returns A new `Expression` representing the index of the first occurrence.
       */
      stringIndexOf(
        search: string | Expression | Uint8Array | Buffer,
      ): FunctionExpression;
      /**
       * Creates an expression that repeats a string or byte array a specified number of times.
       *
       * @example
       * ```typescript
       * // Repeat the 'label' field 3 times
       * field("label").stringRepeat(3);
       * ```
       *
       * @param repetitions The number of times to repeat the string or byte array.
       * @returns A new `Expression` representing the repeated string or byte array.
       */
      stringRepeat(repetitions: number | Expression): FunctionExpression;
      /**
       * Creates an expression that replaces all occurrences of a substring or byte sequence with a replacement.
       *
       * @example
       * ```typescript
       * // Replace all occurrences of "foo" with "bar" in the 'text' field
       * field("text").stringReplaceAll("foo", "bar");
       * ```
       *
       * @param find The substring or byte sequence to search for.
       * @param replacement The replacement string or byte sequence.
       * @returns A new `Expression` representing the string or byte array with replacements.
       */
      stringReplaceAll(
        find: string | Expression | Uint8Array | Buffer,
        replacement: string | Expression | Uint8Array | Buffer,
      ): FunctionExpression;
      /**
       * Creates an expression that replaces the first occurrence of a substring or byte sequence with a replacement.
       *
       * @example
       * ```typescript
       * // Replace the first occurrence of "foo" with "bar" in the 'text' field
       * field("text").stringReplaceOne("foo", "bar");
       * ```
       *
       * @param find The substring or byte sequence to search for.
       * @param replacement The replacement string or byte sequence.
       * @returns A new `Expression` representing the string or byte array with the replacement.
       */
      stringReplaceOne(
        find: string | Expression | Uint8Array | Buffer,
        replacement: string | Expression | Uint8Array | Buffer,
      ): FunctionExpression;
      /**
       * Creates an expression that reverses this string or bytes expression.
       *
       * @example
       * ```typescript
       * // Reverse the value of the 'myString' field.
       * field("myString").reverse();
       * ```
       *
       * @returns A new {@code Expression} representing the reversed string or bytes.
       */
      reverse(): FunctionExpression;
      /**
       * Creates an expression that calculates the length of this string expression in bytes.
       *
       * @example
       * ```typescript
       * // Calculate the length of the 'myString' field in bytes.
       * field("myString").byteLength();
       * ```
       *
       * @returns A new {@code Expression} representing the length of the string in bytes.
       */
      byteLength(): FunctionExpression;
      /**
       * Creates an expression that computes the ceiling of a numeric value.
       *
       * @example
       * ```typescript
       * // Compute the ceiling of the 'price' field.
       * field("price").ceil();
       * ```
       *
       * @returns A new {@code Expression} representing the ceiling of the numeric value.
       */
      ceil(): FunctionExpression;
      /**
       * Creates an expression that computes the floor of a numeric value.
       *
       * @example
       * ```typescript
       * // Compute the floor of the 'price' field.
       * field("price").floor();
       * ```
       *
       * @returns A new {@code Expression} representing the floor of the numeric value.
       */
      floor(): FunctionExpression;

      /**
       * Creates an expression that computes the absolute value of a numeric value.
       *
       * @example
       * ```typescript
       * // Compute the absolute value of the 'price' field.
       * field("price").abs();
       * ```
       *
       * @returns A new {@code Expr} representing the absolute value of the numeric value.
       */
      abs(): FunctionExpression;

      /**
       * Creates an expression that computes `e` (Euler's number) raised to the power of this expression's numeric value.
       *
       * @example
       * ```typescript
       * // Compute `e` to the power of the 'value' field.
       * field("value").exp();
       * ```
       *
       * @returns A new {@code FunctionExpression} representing `e` raised to the power of the numeric value.
       */
      exp(): FunctionExpression;
      /**
       * Creates an aggregation that counts the number of distinct values of the expression or field.
       *
       * @returns A new `AggregateFunction` representing the 'count_distinct' aggregation.
       */
      countDistinct(): AggregateFunction;
      /**
       * Accesses a value from a map (object) field using the provided key.
       *
       * @example
       * ```typescript
       * // Get the 'city' value from the 'address' map field
       * field("address").mapGet("city");
       * ```
       *
       * @param subfield The key to access in the map.
       * @returns A new `Expression` representing the value associated with the given key in the map.
       */
      mapGet(subfield: string): FunctionExpression;
      /**
       * Creates an expression that returns a new map with the specified entries added or updated.
       *
       * @remarks
       * Note that `mapSet` only performs shallow updates to the map. Setting a value to `null`
       * will retain the key with a `null` value. To remove a key entirely, use `mapRemove`.
       *
       * @example
       * ```typescript
       * // Set the 'city' to "San Francisco" in the 'address' map
       * field("address").mapSet("city", "San Francisco");
       * ```
       *
       * @param key - The key to set. Must be a string or a constant string expression.
       * @param value - The value to set.
       * @param moreKeyValues - Additional key-value pairs to set.
       * @returns A new `Expression` representing the map with the entries set.
       */
      mapSet(
        key: string | Expression,
        value: unknown,
        ...moreKeyValues: unknown[]
      ): FunctionExpression;
      /**
       * Creates an expression that returns the keys of a map.
       *
       * @remarks
       * While the backend generally preserves insertion order, relying on the
       * order of the output array is not guaranteed and should be avoided.
       *
       * @example
       * ```typescript
       * // Get the keys of the 'address' map
       * field("address").mapKeys();
       * ```
       *
       * @returns A new `Expression` representing the keys of the map.
       */
      mapKeys(): FunctionExpression;
      /**
       * Creates an expression that returns the values of a map.
       *
       * @remarks
       * While the backend generally preserves insertion order, relying on the
       * order of the output array is not guaranteed and should be avoided.
       *
       * @example
       * ```typescript
       * // Get the values of the 'address' map
       * field("address").mapValues();
       * ```
       *
       * @returns A new `Expression` representing the values of the map.
       */
      mapValues(): FunctionExpression;
      /**
       * Creates an expression that returns the entries of a map as an array of maps,
       * where each map contains a `"k"` property for the key and a `"v"` property for the value.
       * For example: `[{ k: "key1", v: "value1" }, ...]`.
       *
       * @remarks
       * While the backend generally preserves insertion order, relying on the
       * order of the output array is not guaranteed and should be avoided.
       *
       * @example
       * ```typescript
       * // Get the entries of the 'address' map
       * field("address").mapEntries();
       * ```
       *
       * @returns A new `Expression` representing the entries of the map.
       */
      mapEntries(): FunctionExpression;
      /**
       * Creates an expression that returns the value of a field from the document that results from the evaluation of this expression.
       *
       * @example
       * ```typescript
       * // Get the value of the "city" field in the "address" document.
       * field("address").getField("city")
       * ```
       *
       * @param key The field to access in the document.
       * @returns A new `Expression` representing the value of the field in the document.
       */
      getField(key: string | Expression): Expression;
      /**
       * Creates an aggregation that counts the number of stage inputs with valid evaluations of the
       * expression or field.
       *
       * @example
       * ```typescript
       * // Count the total number of products
       * field("productId").count().as("totalProducts");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'count' aggregation.
       */
      count(): AggregateFunction;
      /**
       * Creates an aggregation that calculates the sum of a numeric field across multiple stage inputs.
       *
       * @example
       * ```typescript
       * // Calculate the total revenue from a set of orders
       * field("orderAmount").sum().as("totalRevenue");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'sum' aggregation.
       */
      sum(): AggregateFunction;
      /**
       * Creates an aggregation that calculates the average (mean) of a numeric field across multiple
       * stage inputs.
       *
       * @example
       * ```typescript
       * // Calculate the average age of users
       * field("age").average().as("averageAge");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'average' aggregation.
       */
      average(): AggregateFunction;
      /**
       * Creates an aggregation that finds the minimum value of a field across multiple stage inputs.
       *
       * @example
       * ```typescript
       * // Find the lowest price of all products
       * field("price").minimum().as("lowestPrice");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'min' aggregation.
       */
      minimum(): AggregateFunction;
      /**
       * Creates an aggregation that finds the maximum value of a field across multiple stage inputs.
       *
       * @example
       * ```typescript
       * // Find the highest score in a leaderboard
       * field("score").maximum().as("highestScore");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'max' aggregation.
       */
      maximum(): AggregateFunction;
      /**
       * Creates an aggregation that finds the first value of an expression across multiple stage inputs.
       *
       * @example
       * ```typescript
       * // Find the first value of the 'rating' field
       * field("rating").first().as("firstRating");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'first' aggregation.
       */
      first(): AggregateFunction;
      /**
       * Creates an aggregation that finds the last value of an expression across multiple stage inputs.
       *
       * @example
       * ```typescript
       * // Find the last value of the 'rating' field
       * field("rating").last().as("lastRating");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'last' aggregation.
       */
      last(): AggregateFunction;
      /**
       * Creates an aggregation that collects all values of an expression across multiple stage inputs
       * into an array.
       *
       * @remarks
       * If the expression resolves to an absent value, it is converted to `null`.
       * The order of elements in the output array is not stable and shouldn't be relied upon.
       *
       * @example
       * ```typescript
       * // Collect all tags from books into an array
       * field("tags").arrayAgg().as("allTags");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'array_agg' aggregation.
       */
      arrayAgg(): AggregateFunction;
      /**
       * Creates an aggregation that collects all distinct values of an expression across multiple stage
       * inputs into an array.
       *
       * @remarks
       * If the expression resolves to an absent value, it is converted to `null`.
       * The order of elements in the output array is not stable and shouldn't be relied upon.
       *
       * @example
       * ```typescript
       * // Collect all distinct tags from books into an array
       * field("tags").arrayAggDistinct().as("allDistinctTags");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'array_agg_distinct' aggregation.
       */
      arrayAggDistinct(): AggregateFunction;
      /**
       * Creates an expression that returns the larger value between this expression and another expression, based on Firestore's value type ordering.
       *
       * @example
       * ```typescript
       * // Returns the larger value between the 'timestamp' field and the current timestamp.
       * field("timestamp").logicalMaximum(Function.currentTimestamp());
       * ```
       *
       * @param second The second expression or literal to compare with.
       * @param others Optional additional expressions or literals to compare with.
       * @returns A new {@code Expression} representing the logical max operation.
       */
      logicalMaximum(
        second: Expression | unknown,
        ...others: Array<Expression | unknown>
      ): FunctionExpression;
      /**
       * Creates an expression that returns the smaller value between this expression and another expression, based on Firestore's value type ordering.
       *
       * @example
       * ```typescript
       * // Returns the smaller value between the 'timestamp' field and the current timestamp.
       * field("timestamp").logicalMinimum(Function.currentTimestamp());
       * ```
       *
       * @param second The second expression or literal to compare with.
       * @param others Optional additional expressions or literals to compare with.
       * @returns A new {@code Expression} representing the logical min operation.
       */
      logicalMinimum(
        second: Expression | unknown,
        ...others: Array<Expression | unknown>
      ): FunctionExpression;
      /**
       * Creates an expression that calculates the length (number of dimensions) of this Firestore Vector expression.
       *
       * @example
       * ```typescript
       * // Get the vector length (dimension) of the field 'embedding'.
       * field("embedding").vectorLength();
       * ```
       *
       * @returns A new {@code Expression} representing the length of the vector.
       */
      vectorLength(): FunctionExpression;
      /**
       * Calculates the cosine distance between two vectors.
       *
       * @example
       * ```typescript
       * // Calculate the cosine distance between the 'userVector' field and the 'itemVector' field
       * field("userVector").cosineDistance(field("itemVector"));
       * ```
       *
       * @param vectorExpression The other vector (represented as an Expression) to compare against.
       * @returns A new `Expression` representing the cosine distance between the two vectors.
       */
      cosineDistance(vectorExpression: Expression): FunctionExpression;

      /**
       * Calculates the Cosine distance between two vectors.
       *
       * @example
       * ```typescript
       * // Calculate the Cosine distance between the 'embedding' field and a target vector
       * field("embedding").cosineDistance(FieldValue.vector([0.1, 0.2, 0.3]));
       *
       * // Calculate the Cosine distance using a plain number array
       * field("embedding").cosineDistance([0.1, 0.2, 0.3]);
       * ```
       *
       * @param vector The other vector to compare against, provided as either a `VectorValue` object or a plain `number[]` array.
       * @returns A new `FunctionExpression` representing the Cosine distance between the two vectors.
       */
      cosineDistance(vector: VectorValue | number[]): FunctionExpression;
      /**
       * Calculates the dot product between the current expression (representing a vector)
       * and another expression (representing a second vector).
       *
       * Both expressions are expected to resolve to an array of numbers (a vector) at runtime.
       *
       * @example
       * ```typescript
       * // Calculate the dot product between the 'features' field and the 'targetVector' field.
       * field("features").dotProduct(field("targetVector"));
       * ```
       *
       * @param vectorExpression An `Expression` representing the second vector.
       * @returns A new {@link FunctionExpression} representing the dot product of the two vectors.
       */
      dotProduct(vectorExpression: Expression): FunctionExpression;

      /**
       * Calculates the dot product between two vectors.
       *
       * @example
       * ```typescript
       * // Calculate the dot product between a feature vector and a target vector
       * field("features").dotProduct(FieldValue.vector([0.5, 0.8, 0.2]));
       * ```
       *
       * @param vector The other vector to calculate the dot product with. This can be a `VectorValue` object or a plain array of numbers.
       * @returns A new `Expression` representing the dot product between the two vectors.
       */
      dotProduct(vector: VectorValue | number[]): FunctionExpression;

      /**
       * Calculates the Euclidean distance between the vector represented by this expression and another vector expression.
       *
       * @example
       * ```typescript
       * // Calculate the Euclidean distance between two different vector fields.
       * field("vectorA").euclideanDistance(field("vectorB"));
       * ```
       *
       * @param vectorExpression An `Expression` that evaluates to the second vector (an array of numbers) for the distance calculation.
       * @returns A new {@link FunctionExpression} representing the Euclidean distance between the two vectors.
       */
      euclideanDistance(vectorExpression: Expression): FunctionExpression;
      /**
       * Calculates the Euclidean distance between two vectors.
       *
       * The `vector` parameter can be either a `VectorValue` object or a `number[]` (array of numbers).
       *
       * @example
       * ```typescript
       * // Calculate the Euclidean distance between the 'location' field and a target location using a VectorValue.
       * field("location").euclideanDistance(FieldValue.vector([37.7749, -122.4194]));
       *
       * // Calculate the Euclidean distance between the 'location' field and a target location using a number array.
       * field("location").euclideanDistance([37.7749, -122.4194]);
       * ```
       *
       * @param vector The other vector (as a `VectorValue` or `number[]`) to compare against.
       * @returns A new `Expression` representing the Euclidean distance between the two vectors.
       */
      euclideanDistance(vector: VectorValue | number[]): FunctionExpression;
      /**
       * Creates an expression that interprets this expression as the number of microseconds since the Unix epoch (1970-01-01 00:00:00 UTC)
       * and returns a timestamp.
       *
       * @example
       * ```typescript
       * // Interpret the 'microseconds' field as microseconds since epoch.
       * field("microseconds").unixMicrosToTimestamp();
       * ```
       *
       * @returns A new {@code Expression} representing the timestamp.
       */
      unixMicrosToTimestamp(): FunctionExpression;
      /**
       * Creates an expression that converts this timestamp expression to the number of microseconds since the Unix epoch (1970-01-01 00:00:00 UTC).
       *
       * @example
       * ```typescript
       * // Convert the 'timestamp' field to microseconds since epoch.
       * field("timestamp").timestampToUnixMicros();
       * ```
       *
       * @returns A new {@code Expression} representing the number of microseconds since epoch.
       */
      timestampToUnixMicros(): FunctionExpression;
      /**
       * Creates an expression that interprets this expression as the number of milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC)
       * and returns a timestamp.
       *
       * @example
       * ```typescript
       * // Interpret the 'milliseconds' field as milliseconds since epoch.
       * field("milliseconds").unixMillisToTimestamp();
       * ```
       *
       * @returns A new {@code Expression} representing the timestamp.
       */
      unixMillisToTimestamp(): FunctionExpression;
      /**
       * Creates an expression that converts this timestamp expression to the number of milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC).
       *
       * @example
       * ```typescript
       * // Convert the 'timestamp' field to milliseconds since epoch.
       * field("timestamp").timestampToUnixMillis();
       * ```
       *
       * @returns A new {@code Expression} representing the number of milliseconds since epoch.
       */
      timestampToUnixMillis(): FunctionExpression;
      /**
       * Creates an expression that interprets this expression as the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC)
       * and returns a timestamp.
       *
       * @example
       * ```typescript
       * // Interpret the 'seconds' field as seconds since epoch.
       * field("seconds").unixSecondsToTimestamp();
       * ```
       *
       * @returns A new {@code Expression} representing the timestamp.
       */
      unixSecondsToTimestamp(): FunctionExpression;
      /**
       * Creates an expression that converts this timestamp expression to the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC).
       *
       * @example
       * ```typescript
       * // Convert the 'timestamp' field to seconds since epoch.
       * field("timestamp").timestampToUnixSeconds();
       * ```
       *
       * @returns A new {@code Expression} representing the number of seconds since epoch.
       */
      timestampToUnixSeconds(): FunctionExpression;
      /**
       * Creates an expression that adds a specified amount of time to this timestamp expression.
       *
       * @example
       * ```typescript
       * // Add some duration determined by field 'unit' and 'amount' to the 'timestamp' field.
       * field("timestamp").timestampAdd(field("unit"), field("amount"));
       * ```
       *
       * @param unit The expression evaluates to unit of time, must be one of 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day'.
       * @param amount The expression evaluates to amount of the unit.
       * @returns A new {@code Expression} representing the resulting timestamp.
       */
      timestampAdd(unit: Expression, amount: Expression): FunctionExpression;
      /**
       * Creates an expression that adds a specified amount of time to this timestamp expression.
       *
       * @example
       * ```typescript
       * // Add 1 day to the 'timestamp' field.
       * field("timestamp").timestampAdd("day", 1);
       * ```
       *
       * @param unit The unit of time to add (e.g., "day", "hour").
       * @param amount The amount of time to add.
       * @returns A new {@code Expression} representing the resulting timestamp.
       */
      timestampAdd(unit: TimeUnit, amount: number): FunctionExpression;
      /**
       * Creates an expression that subtracts a specified amount of time from this timestamp expression.
       *
       * @example
       * ```typescript
       * // Subtract some duration determined by field 'unit' and 'amount' from the 'timestamp' field.
       * field("timestamp").timestampSubtract(field("unit"), field("amount"));
       * ```
       *
       * @param unit The expression evaluates to unit of time, must be one of 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day'.
       * @param amount The expression evaluates to amount of the unit.
       * @returns A new {@code Expression} representing the resulting timestamp.
       */
      timestampSubtract(
        unit: Expression,
        amount: Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that subtracts a specified amount of time from this timestamp expression.
       *
       * @example
       * ```typescript
       * // Subtract 1 day from the 'timestamp' field.
       * field("timestamp").timestampSubtract("day", 1);
       * ```
       *
       * @param unit The unit of time to subtract. Supported units are 'microsecond', 'millisecond', 'second', 'minute', 'hour', and 'day'.
       * @param amount The amount of time to subtract.
       * @returns A new {@code FunctionExpression} representing the resulting timestamp after subtraction.
       */
      timestampSubtract(unit: TimeUnit, amount: number): FunctionExpression;
      /**
       * Creates an expression that returns the document ID from a DocumentReference.
       *
       * @example
       * ```typescript
       * // Get the document ID for the current document.
       * field("__name__").documentId();
       * ```
       *
       * @returns A new {@code Expression} representing the documentId operation.
       */
      documentId(): FunctionExpression;
      /**
       *
       * Creates an expression that returns the parent document of a document reference.
       *
       * @example
       * ```typescript
       * // Get the parent document of a document reference.
       * field("__path__").parent();
       * ```
       *
       * @returns A new `Expression` representing the parent operation.
       */
      parent(): FunctionExpression;
      /**
       * Creates an expression that returns a substring of the results of this expression.
       *
       * @param position Index of the first character of the substring.
       * @param length Length of the substring. If not provided, the substring will
       * end at the end of the input.
       */
      substring(position: number, length?: number): FunctionExpression;
      /**
       * Creates an expression that returns a substring of the results of this expression.
       *
       * @param position An expression returning the index of the first character of the substring.
       * @param length An expression returning the length of the substring. If not provided the
       * substring will end at the end of the input.
       */
      substring(position: Expression, length?: Expression): FunctionExpression;
      /**
       * Creates an expression that indexes into an array from the beginning or end
       * and returns the element. If the index exceeds the array length, an error is
       * returned. A negative index, starts from the end.
       *
       * @example
       * ```typescript
       * // Return the value in the 'tags' field array at index `1`.
       * field('tags').arrayGet(1);
       * ```
       *
       * @param index The index of the element to return.
       * @returns A new Expression representing the 'arrayGet' operation.
       */
      arrayGet(index: number): FunctionExpression;
      /**
       * Creates an expression that indexes into an array from the beginning or end
       * and returns the element. If the index exceeds the array length, an error is
       * returned. A negative index, starts from the end.
       *
       * @example
       * ```typescript
       * // Return the value in the tags field array at index specified by field
       * // 'favoriteTag'.
       * field('tags').arrayGet(field('favoriteTag'));
       * ```
       *
       * @param indexExpr An Expression evaluating to the index of the element to return.
       * @returns A new Expression representing the 'arrayGet' operation.
       */
      arrayGet(indexExpr: Expression): FunctionExpression;
      /**
       * Creates an expression that checks if a given expression produces an error.
       *
       * @example
       * ```typescript
       * // Check if the result of a calculation is an error
       * field("title").arrayContains(1).isError();
       * ```
       *
       * @returns A new {@code BooleanExpression} representing the 'isError' check.
       */
      isError(): BooleanExpression;
      /**
       * Creates an expression that returns the result of the `catchExpr` argument
       * if there is an error, else return the result of this expression.
       *
       * @example
       * ```typescript
       * // Returns the first item in the title field arrays, or returns
       * // the entire title field if the array is empty or the field is another type.
       * field("title").arrayGet(0).ifError(field("title"));
       * ```
       *
       * @param catchExpr The catch expression that will be evaluated and
       * returned if this expression produces an error.
       * @returns A new {@code Expression} representing the 'ifError' operation.
       */
      ifError(catchExpr: Expression): FunctionExpression;
      /**
       * Creates an expression that returns the `catch` argument if there is an
       * error, else return the result of this expression.
       *
       * @example
       * ```typescript
       * // Returns the first item in the title field arrays, or returns
       * // "Default Title"
       * field("title").arrayGet(0).ifError("Default Title");
       * ```
       *
       * @param catchValue The value that will be returned if this expression
       * produces an error.
       * @returns A new {@code Expression} representing the 'ifError' operation.
       */
      ifError(catchValue: unknown): FunctionExpression;
      /**
       * Creates an expression that returns `true` if the result of this expression
       * is absent. Otherwise, returns `false` even if the value is `null`.
       *
       * @example
       * ```typescript
       * // Check if the field `value` is absent.
       * field("value").isAbsent();
       * ```
       *
       * @returns A new {@code BooleanExpression} representing the 'isAbsent' check.
       */
      isAbsent(): BooleanExpression;

      /**
       * Creates an expression that removes a key from the map produced by evaluating this expression.
       *
       * @example
       * ```typescript
       * // Removes the key 'baz' from the input map.
       * map({foo: 'bar', baz: true}).mapRemove('baz');
       * ```
       *
       * @param key The name of the key to remove from the input map.
       * @returns A new {@code FunctionExpression} representing the 'mapRemove' operation.
       */
      mapRemove(key: string): FunctionExpression;

      /**
       * Creates an expression that removes a key from the map produced by evaluating this expression.
       *
       * @example
       * ```typescript
       * // Removes the key 'baz' from the input map.
       * map({foo: 'bar', baz: true}).mapRemove(constant('baz'));
       * ```
       *
       * @param keyExpr An expression that produces the name of the key to remove from the input map.
       * @returns A new {@code FunctionExpression} representing the 'mapRemove' operation.
       */
      mapRemove(keyExpr: Expression): FunctionExpression;

      /**
       * Creates an expression that merges multiple map values.
       *
       * The first map in the merge operation is the expression on which `mapMerge` is called.
       *
       * @example
       * ```typescript
       * // Merges the map in the 'settings' field with a literal map and a map
       * // conditionally returned by another expression.
       * field('settings').mapMerge({ enabled: true }, conditional(field('isAdmin'), { admin: true }, {}))
       * ```
       *
       * @param secondMap A required second map to merge. This can be a literal object
       * or an expression that evaluates to a map.
       * @param otherMaps Optional additional maps to merge. Each can be a literal
       * object or an expression that evaluates to a map.
       *
       * @returns A new {@code FunctionExpression} representing the result of the map merge operation.
       */
      mapMerge(
        secondMap: Record<string, unknown> | Expression,
        ...otherMaps: Array<Record<string, unknown> | Expression>
      ): FunctionExpression;
      /**
       * Creates an expression that returns the value of this expression raised to the power of another expression.
       *
       * @example
       * ```typescript
       * // Raise the value of the 'base' field to the power of the 'exponent' field.
       * field("base").pow(field("exponent"));
       * ```
       *
       * @param exponent The expression to raise this expression to the power of.
       * @returns A new `Expression` representing the power operation.
       */
      pow(exponent: Expression): FunctionExpression;
      /**
       * Creates an expression that returns the value of this expression raised to the power of a constant value.
       *
       * @example
       * ```typescript
       * // Raise the value of the 'base' field to the power of 2.
       * field("base").pow(2);
       * ```
       *
       * @param exponent The constant value to raise this expression to the power of.
       * @returns A new `Expression` representing the power operation.
       */
      pow(exponent: number): FunctionExpression;
      /**
       * Creates an expression that truncates the numeric value to an integer.
       *
       * @example
       * ```typescript
       * // Truncate the 'rating' field.
       * field("rating").trunc();
       * ```
       *
       * @returns A new `Expression` representing the truncated value.
       */
      trunc(): FunctionExpression;
      /**
       * Creates an expression that truncates a numeric value to the specified number of decimal places.
       *
       * @example
       * ```typescript
       * // Truncate the value of the 'rating' field to two decimal places.
       * field("rating").trunc(2);
       * ```
       *
       * @param decimalPlaces A constant specifying the truncation precision in decimal places.
       * @returns A new `Expression` representing the truncated value.
       */
      trunc(decimalPlaces: number): FunctionExpression;
      /**
       * Creates an expression that truncates a numeric value to the specified number of decimal places.
       *
       * @example
       * ```typescript
       * // Truncate the value of the 'rating' field to two decimal places.
       * field("rating").trunc(constant(2));
       * ```
       *
       * @param decimalPlaces An expression specifying the truncation precision in decimal places.
       * @returns A new `Expression` representing the truncated value.
       */
      trunc(decimalPlaces: Expression): FunctionExpression;
      /**
       * Creates an expression that rounds a numeric value to the nearest whole number.
       *
       * @example
       * ```typescript
       * // Round the value of the 'price' field.
       * field("price").round();
       * ```
       *
       * @returns A new `Expression` representing the rounded value.
       */
      round(): FunctionExpression;
      /**
       * Creates an expression that rounds a numeric value to the nearest whole number.
       *
       * @example
       * ```typescript
       * // Round the value of the 'price' field.
       * field("price").round();
       * ```
       *
       * @returns A new `Expression` representing the rounded value.
       */
      round(): FunctionExpression;
      /**
       * Creates an expression that rounds a numeric value to the specified number of decimal places.
       *
       * @example
       * ```typescript
       * // Round the value of the 'price' field to two decimal places.
       * field("price").round(2);
       * ```
       *
       * @param decimalPlaces A constant specifying the rounding precision in decimal places.
       *
       * @returns A new `Expr` representing the rounded value.
       */
      round(decimalPlaces: number): FunctionExpression;
      /**
       * Creates an expression that rounds a numeric value to the specified number of decimal places.
       *
       * @example
       * ```typescript
       * // Round the value of the 'price' field to two decimal places.
       * field("price").round(constant(2));
       * ```
       *
       * @param decimalPlaces An expression specifying the rounding precision in decimal places.
       *
       * @returns A new `Expr` representing the rounded value.
       */
      round(decimalPlaces: Expression): FunctionExpression;
      /**
       * Creates an expression that returns the collection ID from a path.
       *
       * @example
       * ```typescript
       * // Get the collection ID from a path.
       * field("__name__").collectionId();
       * ```
       *
       * @returns A new {@code Expression} representing the collectionId operation.
       */
      collectionId(): FunctionExpression;
      /**
       * Creates an expression that calculates the length of a string, array, map, vector, or bytes.
       *
       * @example
       * ```typescript
       * // Get the length of the 'name' field.
       * field("name").length();
       *
       * // Get the number of items in the 'cart' array.
       * field("cart").length();
       * ```
       *
       * @returns A new `Expression` representing the length of the string, array, map, vector, or bytes.
       */
      length(): FunctionExpression;
      /**
       * Creates an expression that computes the natural logarithm of a numeric value.
       *
       * @example
       * ```typescript
       * // Compute the natural logarithm of the 'value' field.
       * field("value").ln();
       * ```
       *
       * @returns A new {@code Expression} representing the natural logarithm of the numeric value.
       */
      ln(): FunctionExpression;
      /**
       * Creates an expression that computes the square root of a numeric value.
       *
       * @example
       * ```typescript
       * // Compute the square root of the 'value' field.
       * field("value").sqrt();
       * ```
       *
       * @returns A new {@code Expression} representing the square root of the numeric value.
       */
      sqrt(): FunctionExpression;
      /**
       * Creates an expression that reverses a string.
       *
       * @example
       * ```typescript
       * // Reverse the value of the 'myString' field.
       * field("myString").stringReverse();
       * ```
       *
       * @returns A new {@code Expression} representing the reversed string.
       */
      stringReverse(): FunctionExpression;

      /**
       * Creates an expression that returns the `elseValue` argument if this expression results in an absent value, else
       * return the result of the this expression evaluation.
       *
       * @example
       * ```typescript
       * // Returns the value of the optional field 'optional_field', or returns 'default_value'
       * // if the field is absent.
       * field("optional_field").ifAbsent("default_value")
       * ```
       *
       * @param elseValue The value that will be returned if this Expression evaluates to an absent value.
       * @returns A new [Expression] representing the ifAbsent operation.
       */
      ifAbsent(elseValue: unknown): Expression;

      /**
       * Creates an expression that returns the `elseValue` argument if this expression results in an absent value, else
       * return the result of this expression evaluation.
       *
       * @example
       * ```typescript
       * // Returns the value of the optional field 'optional_field', or if that is
       * // absent, then returns the value of the field `
       * field("optional_field").ifAbsent(field('default_field'))
       * ```
       *
       * @param elseExpression The Expression that will be evaluated if this Expression evaluates to an absent value.
       * @returns A new [Expression] representing the ifAbsent operation.
       */
      ifAbsent(elseExpression: unknown): Expression;

      ifAbsent(elseValueOrExpression: Expression | unknown): Expression;

      /**
       * Creates an expression that returns the `elseValue` argument if this expression evaluates to null, else
       * return the result of this expression evaluation.
       *
       * @remarks
       * This function provides a fallback for both absent and explicit null values. In contrast, {@link ifAbsent}
       * only triggers for missing fields.
       *
       * @example
       * ```typescript
       * // Returns the user's display name, or returns "Anonymous" if the field is null.
       * field("displayName").ifNull("Anonymous")
       * ```
       *
       * @param elseValue The value that will be returned if this Expression evaluates to null.
       * @returns A new `Expression` representing the ifNull operation.
       */
      ifNull(elseValue: unknown): FunctionExpression;

      /**
       * Creates an expression that returns the `elseValue` argument if this expression evaluates to null, else
       * return the result of this expression evaluation.
       *
       * @remarks
       * This function provides a fallback for both absent and explicit null values. In contrast, {@link ifAbsent}
       * only triggers for missing fields.
       *
       * @example
       * ```typescript
       * // Returns the user's preferred name, or if that is null, returns their full name.
       * field("preferredName").ifNull(field("fullName"))
       * ```
       *
       * @param elseExpression The Expression that will be evaluated if this Expression evaluates to null.
       * @returns A new `Expression` representing the ifNull operation.
       */
      ifNull(elseExpression: Expression): FunctionExpression;

      /**
       * Creates an expression that returns the first non-null, non-absent argument, without evaluating
       * the rest of the arguments. When all arguments are null or absent, returns the last argument.
       *
       * @example
       * ```typescript
       * // Returns the value of the first non-null, non-absent field among 'preferredName', 'fullName',
       * // or the last argument if all previous fields are null.
       * field("preferredName").coalesce(field("fullName"), "Anonymous");
       * ```
       *
       * @param replacement The next expression or literal to evaluate.
       * @param others Additional expressions or literals to evaluate.
       * @returns A new [Expression] representing the coalesce operation.
       */
      coalesce(
        replacement: Expression | unknown,
        ...others: Array<Expression | unknown>
      ): FunctionExpression;

      /**
       * Creates an expression that joins the elements of an array into a string.
       *
       * @example
       * ```typescript
       * // Join the elements of the 'tags' field with the delimiter from the 'separator' field.
       * field("tags").join(field("separator"))
       * ```
       *
       * @param delimiterExpression The expression that evaluates to the delimiter string.
       * @returns A new Expression representing the join operation.
       */
      join(delimiterExpression: Expression): Expression;

      /**
       * Creates an expression that joins the elements of an array field into a string.
       *
       * @example
       * ```typescript
       * // Join the elements of the 'tags' field with a comma and space.
       * field("tags").join(", ")
       * ```
       *
       * @param delimiter The string to use as a delimiter.
       * @returns A new Expression representing the join operation.
       */
      join(delimiter: string): Expression;

      join(delimeterValueOrExpression: string | Expression): Expression;

      /**
       * Creates an expression that computes the base-10 logarithm of a numeric value.
       *
       * @example
       * ```typescript
       * // Compute the base-10 logarithm of the 'value' field.
       * field("value").log10();
       * ```
       *
       * @returns A new {@code Expr} representing the base-10 logarithm of the numeric value.
       */
      log10(): FunctionExpression;

      /**
       * Creates an expression that computes the sum of the elements in an array.
       *
       * @example
       * ```typescript
       * // Compute the sum of the elements in the 'scores' field.
       * field("scores").arraySum();
       * ```
       *
       * @returns A new {@code Expr} representing the sum of the elements in the array.
       */
      arraySum(): FunctionExpression;
      /**
       * Creates an expression that splits the result of this expression into an
       * array of substrings based on the provided delimiter.
       *
       * @example
       * ```typescript
       * // Split the 'scoresCsv' field on delimiter ','
       * field('scoresCsv').split(',')
       * ```
       *
       * @returns A new {@code Expression} representing the split function.
       */
      split(delimiter: string): FunctionExpression;

      /**
       * Creates an expression that splits the result of this expression into an
       * array of substrings based on the provided delimiter.
       *
       * @example
       * ```typescript
       * // Split the 'scores' field on delimiter ',' or ':' depending on the stored format
       * field('scores').split(conditional(field('format').equal('csv'), constant(','), constant(':'))
       * ```
       *
       * @returns A new {@code Expression} representing the split function.
       */
      split(delimiter: Expression): FunctionExpression;
      /**
       * Creates an expression that truncates a timestamp to a specified granularity.
       *
       * @example
       * ```typescript
       * // Truncate the 'createdAt' timestamp to the beginning of the day.
       * field('createdAt').timestampTruncate('day')
       * ```
       *
       * @param granularity The granularity to truncate to.
       * @param timezone The timezone to use for truncation. Valid values are from
       * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1".
       * @returns A new {Expression} representing the truncated timestamp.
       */
      timestampTruncate(
        granularity: TimeGranularity,
        timezone?: string | Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that truncates a timestamp to a specified granularity.
       *
       * @example
       * ```typescript
       * // Truncate the 'createdAt' timestamp to the granularity specified in the field 'granularity'.
       * field('createdAt').timestampTruncate(field('granularity'))
       * ```
       *
       * @param granularity The granularity to truncate to.
       * @param timezone The timezone to use for truncation. Valid values are from
       * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1".
       * @returns A new {Expression} representing the truncated timestamp.
       */
      timestampTruncate(
        granularity: Expression,
        timezone?: string | Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that calculates the difference between this timestamp and another timestamp.
       *
       * @example
       * ```typescript
       * // Calculate the difference determined by fields 'startTime' and 'unit'.
       * field("endTime").timestampDiff(field("startTime"), field("unit"));
       * ```
       *
       * @param start - The expression evaluating to the starting timestamp.
       * @param unit - The expression evaluates to a unit of time, must be one of 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day'.
       * @returns A new `Expression` representing the difference as an integer.
       */
      timestampDiff(start: Expression, unit: Expression): FunctionExpression;

      /**
       * Creates an expression that calculates the difference between this timestamp and another timestamp.
       *
       * @example
       * ```typescript
       * // Calculate the difference in days between 'endTime' and 'startTime' fields.
       * field("endTime").timestampDiff("startTime", "day");
       * ```
       *
       * @param start - The field name of the starting timestamp.
       * @param unit - The unit of time for the difference (e.g., "day", "hour").
       * @returns A new `Expression` representing the difference as an integer.
       */
      timestampDiff(
        start: string | Expression,
        unit: TimeUnit,
      ): FunctionExpression;

      /**
       * Creates an expression that extracts a specified part from this timestamp expression.
       *
       * @example
       * ```typescript
       * // Extract the year from the 'createdAt' field.
       * field('createdAt').timestampExtract('year')
       * ```
       *
       * @param part - The part to extract from the timestamp (e.g., "year", "month", "day").
       * @param timezone - The timezone to use for extraction. Valid values are from
       * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1."
       * Defaults to "UTC" if not specified.
       * @returns A new `Expression` representing the extracted part as an integer.
       */
      timestampExtract(
        part: TimePart,
        timezone?: string | Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that extracts a specified part from this timestamp expression.
       *
       * @example
       * ```typescript
       * // Extract the part specified by the field 'extractionPart' from 'createdAt'.
       * field('createdAt').timestampExtract(field('extractionPart'))
       * ```
       *
       * @param part - The expression evaluating to the part to extract.
       * @param timezone - The timezone to use for extraction. Valid values are from
       * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1."
       * Defaults to "UTC" if not specified.
       * @returns A new `Expression` representing the extracted part as an integer.
       */
      timestampExtract(
        part: Expression,
        timezone?: string | Expression,
      ): FunctionExpression;

      /**
       * Creates an expression that returns the data type of this expression's result, as a string.
       *
       * @example
       * ```typescript
       * // Get the data type of the value in field 'title'
       * field('title').type()
       * ```
       *
       * @returns A new {Expression} representing the data type.
       */
      type(): FunctionExpression;

      /**
       * Creates an expression that checks if the result of this expression is of the given type.
       *
       * @remarks Null or undefined fields evaluate to skip/error. Use `ifAbsent()` / `isAbsent()` to evaluate missing data.
       * Supported values for `type` are:
       * `'null'`, `'array'`, `'boolean'`, `'bytes'`, `'timestamp'`, `'geo_point'`, `'number'`,
       * `'int32'`, `'int64'`, `'float64'`, `'decimal128'`, `'map'`, `'reference'`, `'string'`,
       * `'vector'`, `'max_key'`, `'min_key'`, `'object_id'`, `'regex'`, `'request_timestamp'`.
       *
       * @example
       * ```typescript
       * // Check if the 'price' field is specifically an integer (not just 'number')
       * field('price').isType('int64');
       * ```
       *
       * @param type The type to check for.
       * @returns A new `BooleanExpression` that evaluates to true if the expression's result is of the given type, false otherwise.
       */
      isType(type: string): BooleanExpression;

      // TODO(search) enable with backend support
      // /**
      //  * Evaluates if the result of this `expression` is between
      //  * the `lowerBound` (inclusive) and `upperBound` (inclusive).
      //  *
      //  * @example
      //  * ```typescript
      //  * // Evaluate if the 'tireWidth' is between 2.2 and 2.4
      //  * field('tireWidth').between(constant(2.2), constant(2.4))
      //  *
      //  * // This is functionally equivalent to
      //  * and(field('tireWidth').greaterThanOrEqual(contant(2.2)), field('tireWidth').lessThanOrEqual(constant(2.4)))
      //  * ```
      //  *
      //  * @param lowerBound - Lower bound (inclusive) of the range.
      //  * @param upperBound - Upper bound (inclusive) of the range.
      //  * @returns A `BooleanExpression` representing the specified between comparion.
      //  */
      // between(
      //   lowerBound: Expression,
      //   upperBound: Expression,
      // ): BooleanExpression;
      //
      // /**
      //  * Evaluates if the result of this `expression` is between
      //  * the `lowerBound` (inclusive) and `upperBound` (inclusive).
      //  *
      //  * @example
      //  * ```typescript
      //  * // Evaluate if the 'tireWidth' is between 2.2 and 2.4
      //  * field('tireWidth').between(2.2, 2.4)
      //  *
      //  * // This is functionally equivalent to
      //  * and(field('tireWidth').greaterThanOrEqual(2.2), field('tireWidth').lessThanOrEqual(2.4))
      //  * ```
      //  *
      //  * @param lowerBound - Lower bound (inclusive) of the range.
      //  * @param upperBound - Upper bound (inclusive) of the range.
      //  * @returns A `BooleanExpression` representing the specified between comparion.
      //  */
      // between(lowerBound: unknown, upperBound: unknown): BooleanExpression;

      // TODO(search) enable with backend support
      // /**
      //  * Evaluates to an HTML-formatted text snippet that renders terms matching
      //  * the search query in `<b>bold</b>`.
      //  *
      //  * @remarks This Expression can only be used within a `Search` stage.
      //  *
      //  * @param rquery Define the search query using the search domain-specific language (DSL).
      //  * @returns An `Expression` representing the snippet function.
      //  */
      // snippet(rquery: string): Expression;
      //
      // /**
      //  * Evaluates to an HTML-formatted text snippet that renders terms matching
      //  * the search query in `<b>bold</b>`.
      //  *
      //  * @remarks This Expression can only be used within a `Search` stage.
      //  *
      //  * @param options Define how snippeting behaves.
      //  * @returns An `Expression` representing the snippet function.
      //  */
      // snippet(options: SnippetOptions): Expression;

      // TODO(new-expression): Add new expression method declarations above this line
      /**
       * Creates an `Ordering` that sorts documents in ascending order based on this expression.
       *
       * @example
       * ```typescript
       * // Sort documents by the 'name' field in ascending order
       * pipeline().collection("users")
       *   .sort(field("name").ascending());
       * ```
       *
       * @returns A new `Ordering` for ascending sorting.
       */
      ascending(): Ordering;
      /**
       * Creates an `Ordering` that sorts documents in descending order based on this expression.
       *
       * @example
       * ```typescript
       * // Sort documents by the 'createdAt' field in descending order
       * pipeline().collection("users")
       *   .sort(field("createdAt").descending());
       * ```
       *
       * @returns A new `Ordering` for descending sorting.
       */
      descending(): Ordering;
      /**
       * Assigns an alias to this expression.
       *
       * Aliases are useful for renaming fields in the output of a stage or for giving meaningful
       * names to calculated values.
       *
       * @example
       * ```typescript
       * // Calculate the total price and assign it the alias "totalPrice" and add it to the output.
       * pipeline().collection("items")
       *   .addFields(field("price").multiply(field("quantity")).as("totalPrice"));
       * ```
       *
       * @param name The alias to assign to this expression.
       * @returns A new `AliasedExpression` that wraps this
       *     expression and associates it with the provided alias.
       */
      as(name: string): AliasedExpression;
    }

    /**
     * Time unit used for timestamp functions.
     */
    export type TimeUnit =
      | 'microsecond'
      | 'millisecond'
      | 'second'
      | 'minute'
      | 'hour'
      | 'day';

    /**
     * Time granularity used for timestamp functions.
     */
    export type TimeGranularity =
      | TimeUnit
      | 'week'
      | 'week(monday)'
      | 'week(tuesday)'
      | 'week(wednesday)'
      | 'week(thursday)'
      | 'week(friday)'
      | 'week(saturday)'
      | 'week(sunday)'
      | 'isoweek'
      | 'month'
      | 'quarter'
      | 'year'
      | 'isoyear';

    /**
     * Specify time parts for `timestampExtract` expressions.
     */
    export type TimePart = TimeGranularity | 'dayofweek' | 'dayofyear';

    /**
     * An interface that represents a selectable expression.
     */
    export interface Selectable {
      selectable: true;
      /**
       * @internal
       */
      readonly _alias: string;
      /**
       * @internal
       */
      readonly _expr: Expression;
    }

    /**
     * Represents an aggregate function used within Firestore pipelines.
     * Aggregate functions perform a calculation across a set of documents and return a single result,
     * such as counting documents, summing numeric fields, or finding minimum/maximum values.
     */
    export class AggregateFunction {
      /**
       * @property expressionType The type of the aggregate expression, indicating the specific aggregate function (e.g., COUNT, SUM, AVG).
       */
      expressionType: ExpressionType;

      /**
       * @private
       * @internal
       * @param name
       * @param params
       */
      constructor(name: string, params: Expression[]);
      /**
       * Assigns an alias to this AggregateFunction. The alias specifies the name that
       * the aggregated value will have in the output document.
       *
       * @example
       * ```typescript
       * // Calculate the average price of all items and assign it the alias "averagePrice".
       * pipeline().collection("items")
       *   .aggregate(field("price").average().as("averagePrice"));
       * ```
       *
       * @param name The alias to assign to this AggregateFunction.
       * @returns A new `AliasedAggregate` that wraps this
       *     AggregateFunction and associates it with the provided alias.
       */
      as(name: string): AliasedAggregate;
    }

    /**
     * Represents an `AggregateFunction` that has been assigned an alias.
     * This class is used to associate an aggregate result with a name.
     */
    export class AliasedAggregate {
      /**
       * The underlying `AggregateFunction` that this aliased aggregate wraps.
       * @internal
       */
      readonly _aggregate: AggregateFunction;

      /**
       * Specifies the name of the property that will contain the aggregate result in the output document.
       * @internal
       */
      readonly _alias: string;
    }

    /**
     * Represents an expression that has been assigned an alias using the `.as()` method.
     *
     * This class wraps an existing `Expression` and associates it with a user-defined alias,
     * allowing the expression's result to be referred to by name in the output
     * of a Firestore pipeline query.
     */
    export class AliasedExpression implements Selectable {
      /**
       * @internal
       * Specifies that the instance is an AliasedExpression.
       */
      expressionType: ExpressionType;

      /**
       * Specifies that this class is selectable, meaning it contains an `Expression` and an alias,
       * and can be provided to the Select stage of a pipeline.
       */
      selectable: true;

      /**
       * @internal
       * The underlying expression that is being aliased.
       */
      readonly _expr: Expression;

      /**
       * @internal
       * Specifies the name of the property that will contain the aggregate result in the output document.
       */
      readonly _alias: string;
    }

    /**
     * Represents a reference to a field within a Firestore document or an output from a `Pipeline` stage.
     *
     * This class extends `Expression`. It is a type of expression that can be evaluated
     * within Firestore Pipelines. It also implements `Selectable`,
     * meaning instances of `Field` can be used to specify fields for selection in the {@link Pipeline.select} stage.
     *
     * `Field` instances are fundamental for constructing expressions that access document field values,
     * and for defining criteria for sorting, filtering, and projecting data in Firestore Pipelines.
     */
    export class Field extends Expression implements Selectable {
      /**
       * @internal Specifies that the instance is a Field.
       */
      readonly expressionType: ExpressionType;
      /**
       * Specifies that this class is selectable, meaning it contains an `Expression` and an alias,
       * and can be provided to the Select stage of a pipeline.
       */
      selectable: true;
      /**
       * Returns the name of the field.
       *
       * @example
       * ```typescript
       * const name = field("price").fieldName;
       * console.log(name); // "price"
       * ```
       *
       * @returns The name of the field.
       */
      get fieldName(): string;

      // TODO(search) enable with backend support
      // /**
      //  * Perform a full-text search on this field.
      //  *
      //  * @remarks This Expression can only be used within a `Search` stage.
      //  *
      //  * @param rquery Define the search query using the search domain-specific language (DSL).
      //  * @returns A `BooleanExpression` representing the matches function.
      //  */
      // matches(rquery: string | Expression): BooleanExpression;

      /**
       * Evaluates to the distance in meters between the location specified
       * by this field and the query location.
       *
       * @remarks This Expression can only be used within a `Search` stage.
       *
       * @example
       * ```typescript
       * const geoDistanceToUser = field('location').geoDistance(new GeoPoint(39.7541, -105.0002));
       *
       * db.pipeline().collection('restaurants').search({
       *   query: geoDistanceToUser.lessThanOrEqual(2000),
       *   sort: geoDistanceToUser.ascending()
       * })
       * ```
       *
       * @param location - Compute distance to this GeoPoint.
       */
      geoDistance(location: GeoPoint | Expression): Expression;

      /**
       * @internal
       * Returns the alias of the field, which is the field-name itself.
       *
       * @returns The field name itself.
       */
      get _alias(): string;
      /**
       * @internal
       * Self-referential getter that returns this.
       *
       * @returns This `Field` object.
       */
      get _expr(): Expression;
    }
    /**
     * Creates a {@code Field} instance representing the field at the given path.
     *
     * The path can be a simple field name (e.g., "name") or a dot-separated path to a nested field
     * (e.g., "address.city").
     *
     * @example
     * ```typescript
     * // Create a Field instance for the 'title' field
     * const titleField = field("title");
     *
     * // Create a Field instance for a nested field 'author.firstName'
     * const authorFirstNameField = field("author.firstName");
     * ```
     *
     * @param name The path to the field.
     * @returns A new {@code Field} instance representing the specified field.
     */
    export function field(name: string): Field;
    /**
     * Creates a new Field instance from a given FieldPath.
     *
     * @param path The FieldPath to convert into a Field.
     * @returns A new `Field` instance representing the specified path.
     */
    export function field(path: FieldPath): Field;

    /**
     * @internal
     * Represents a constant value that can be used as part of a Firestore pipeline expression.
     *
     * Instances of `Constant` are typically created via the top-level `constant()` function.
     *
     * @example
     * ```typescript
     * // Create a Constant instance for the number 10
     * const ten = constant(10);
     *
     * // Create a Constant instance for the string "hello"
     * const hello = constant("hello");
     * ```
     */
    export class Constant extends Expression {
      readonly expressionType: ExpressionType;
    }
    /**
     * Creates an `Expression` instance for a number value.
     *
     * @param value The number value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: number): Expression;
    /**
     * Creates an `Expression` instance for a string value.
     *
     * @param value The string value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: string): Expression;
    /**
     * Creates an `Expression` instance for a boolean value.
     *
     * @param value The boolean value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: boolean): BooleanExpression;
    /**
     * Creates an `Expression` instance for a null value.
     *
     * @param value The null value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: null): Expression;
    /**
     * Creates an `Expression` instance for a GeoPoint value.
     *
     * @param value The GeoPoint value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: GeoPoint): Expression;
    /**
     * Creates an `Expression` instance for a Timestamp value.
     *
     * @param value The Timestamp value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: Timestamp): Expression;
    /**
     * Creates an `Expression` instance for a Date value.
     *
     * @param value The Date value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: Date): Expression;
    /**
     * Creates an `Expression` instance for a Buffer | Uint8Array value.
     *
     * @param value The Buffer | Uint8Array value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: Buffer | Uint8Array): Expression;
    /**
     * Creates an `Expression` instance for a DocumentReference value.
     *
     * @param value The DocumentReference value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: DocumentReference): Expression;
    /**
     * Creates an `Expression` instance for a VectorValue value.
     *
     * @param value The VectorValue value.
     * @returns A new `Expression` instance.
     */
    export function constant(value: VectorValue): Expression;

    /**
     * Represents an expression that encapsulates a function call within the Firestore Pipelines.
     *
     * `FunctionExpression` extends `Expression` and is used to build complex queries and transformations
     * by applying various functions (e.g., `and`, `equal`, `ceil`) to fields or other expressions.
     *
     * You typically do not instantiate `FunctionExpression` directly. Instead, use the provided
     * top-level functions (like `and`, `equal`, {@link ceil}) or methods available
     * on `Expression` instances (e.g., {@link Expression#equal}, {@link Expression#lessThan}) to construct
     * `FunctionExpression` instances.
     *
     * @example
     * ```typescript
     * // Example of creating a FunctionExpression indirectly using helper functions:
     * const priceGreaterThan10 = field("price").greaterThan(10);
     * const combinedCondition = and(priceGreaterThan10, field("category").equal("books"));
     *
     * // 'priceGreaterThan10' and 'combinedCondition' are instances of FunctionExpression.
     * ```
     */
    export class FunctionExpression extends Expression {
      /**
       * @internal
       * Indicates that this expression is a `FunctionExpression`.
       */
      readonly expressionType: ExpressionType;
      /**
       * @private
       * @internal
       *
       * Initializes a new `FunctionExpression` instance with the given function name and parameters.
       *
       * @param name The name of the function.
       * @param params An array of `Expression` instances representing the parameters of the function.
       */
      constructor(name: string, params: Expression[]);
    }
    /**
     * An expression that evaluates to a boolean value.
     *
     * This expression type is useful for filter conditions.
     *
     */
    export abstract class BooleanExpression extends Expression {
      /**
       * Creates an aggregation that finds the count of input documents satisfying
       * this boolean expression.
       *
       * @example
       * ```typescript
       * // Find the count of documents with a score greater than 90
       * field("score").greaterThan(90).countIf().as("highestScore");
       * ```
       *
       * @returns A new `AggregateFunction` representing the 'countIf' aggregation.
       */
      countIf(): AggregateFunction;

      /**
       * Creates an expression that negates this boolean expression.
       *
       * @example
       * ```typescript
       * // Find documents where the 'tags' field does not contain 'completed'
       * field("tags").arrayContains("completed").not();
       * ```
       *
       * @returns A new {@code Expression} representing the negated filter condition.
       */
      not(): BooleanExpression;

      /**
       * Creates a conditional expression that evaluates to the 'then' expression
       * if `this` expression evaluates to `true`,
       * or evaluates to the 'else' expression if `this` expressions evaluates `false`.
       *
       * @example
       * ```typescript
       * // If 'age' is greater than 18, return "Adult"; otherwise, return "Minor".
       * field("age").greaterThanOrEqual(18).conditional(constant("Adult"), constant("Minor"));
       * ```
       *
       * @param thenExpr The expression to evaluate if the condition is true.
       * @param elseExpr The expression to evaluate if the condition is false.
       * @returns A new {@code Expr} representing the conditional expression.
       */
      conditional(
        thenExpr: Expression,
        elseExpr: Expression,
      ): FunctionExpression;

      /**
       *
       * Creates an expression that returns the `catch` argument if there is an
       * error, else return the result of this expression.
       *
       * @example
       * ```typescript
       * // Create an expression that protects against a divide by zero error
       * // but always returns a boolean expression.
       * constant(50).divide('length').gt(1).ifError(constant(false));
       * ```
       *
       * @param catchValue The value that will be returned if this expression
       * produces an error.
       * @returns A new {@code Expr} representing the 'ifError' operation.
       */
      ifError(catchValue: BooleanExpression): BooleanExpression;

      /**
       *
       * Creates an expression that returns the `catch` argument if there is an
       * error, else return the result of this expression.
       *
       * @example
       * ```typescript
       * // Create an expression that protects against a divide by zero error
       * // but always returns a boolean expression.
       * constant(50).divide('length').gt(1).ifError(false);
       * ```
       *
       * @param catchValue The value that will be returned if this expression
       * produces an error.
       * @returns A new {@code Expr} representing the 'ifError' operation.
       */
      ifError(catchValue: boolean): BooleanExpression;

      /**
       *
       * Creates an expression that returns the `catch` argument if there is an
       * error, else return the result of this expression.
       *
       * @example
       * ```typescript
       * // Create an expression that protects against a divide by zero error.
       * constant(50).divide('length').gt(1).ifError(constant(0));
       * ```
       *
       * @param catchValue The value that will be returned if this expression
       * produces an error.
       * @returns A new {@code Expr} representing the 'ifError' operation.
       */
      ifError(catchValue: Expression): FunctionExpression;

      /**
       *
       * Creates an expression that returns the `catch` argument if there is an
       * error, else return the result of this expression.
       *
       * @example
       * ```typescript
       * // Create an expression that protects against a divide by zero error.
       * constant(50).divide('length').gt(1).ifError(0);
       * ```
       *
       * @param catchValue The value that will be returned if this expression
       * produces an error.
       * @returns A new {@code Expr} representing the 'ifError' operation.
       */
      ifError(catchValue: unknown): FunctionExpression;
    }
    /**
     * Creates an aggregation that counts the number of stage inputs where the provided
     * boolean expression evaluates to true.
     *
     * @example
     * ```typescript
     * // Count the number of documents where 'is_active' field equals true
     * countIf(field("is_active").equal(true)).as("numActiveDocuments");
     * ```
     *
     * @param booleanExpr - The boolean expression to evaluate on each input.
     * @returns A new `AggregateFunction` representing the 'countIf' aggregation.
     */
    export function countIf(booleanExpr: BooleanExpression): AggregateFunction;
    /**
     * Creates an expression that indexes into an array from the beginning or end
     * and return the element. If the index exceeds the array length, an error is
     * returned. A negative index, starts from the end.
     *
     * @example
     * ```typescript
     * // Return the value in the tags field array at index 1.
     * arrayGet('tags', 1);
     * ```
     *
     * @param arrayField The name of the array field.
     * @param index The index of the element to return.
     * @returns A new Expression representing the 'arrayGet' operation.
     */
    export function arrayGet(
      arrayField: string,
      index: number,
    ): FunctionExpression;
    /**
     * Creates an expression that indexes into an array from the beginning or end
     * and return the element. If the index exceeds the array length, an error is
     * returned. A negative index, starts from the end.
     *
     * @example
     * ```typescript
     * // Return the value in the tags field array at index specified by field
     * // 'favoriteTag'.
     * arrayGet('tags', field('favoriteTag'));
     * ```
     *
     * @param arrayField The name of the array field.
     * @param indexExpr An Expression evaluating to the index of the element to return.
     * @returns A new Expression representing the 'arrayGet' operation.
     */
    export function arrayGet(
      arrayField: string,
      indexExpr: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that indexes into an array from the beginning or end
     * and return the element. If the index exceeds the array length, an error is
     * returned. A negative index, starts from the end.
     *
     * @example
     * ```typescript
     * // Return the value in the tags field array at index 1.
     * arrayGet(field('tags'), 1);
     * ```
     *
     * @param arrayExpression An Expression evaluating to an array.
     * @param index The index of the element to return.
     * @returns A new Expression representing the 'arrayGet' operation.
     */
    export function arrayGet(
      arrayExpression: Expression,
      index: number,
    ): FunctionExpression;
    /**
     * Creates an expression that indexes into an array from the beginning or end
     * and return the element. If the index exceeds the array length, an error is
     * returned. A negative index, starts from the end.
     *
     * @example
     * ```typescript
     * // Return the value in the tags field array at index specified by field
     * // 'favoriteTag'.
     * arrayGet(field('tags'), field('favoriteTag'));
     * ```
     *
     * @param arrayExpression An Expression evaluating to an array.
     * @param indexExpr An Expression evaluating to the index of the element to return.
     * @returns A new Expression representing the 'arrayGet' operation.
     */
    export function arrayGet(
      arrayExpression: Expression,
      indexExpr: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that checks if a given expression produces an error.
     *
     * @example
     * ```typescript
     * // Check if the result of a calculation is an error
     * isError(field("title").arrayContains(1));
     * ```
     *
     * @param value The expression to check.
     * @returns A new {@code BooleanExpression} representing the 'isError' check.
     */
    export function isError(value: Expression): BooleanExpression;
    /**
     *
     * Creates an expression that returns the `catch` argument if there is an
     * error, else return the result of the `try` argument evaluation.
     *
     * This overload is useful when a BooleanExpression is required.
     *
     * @example
     * ```typescript
     * // Create an expression that protects against a divide by zero error
     * // but always returns a boolean expression.
     * ifError(constant(50).divide('length').gt(1), constant(false));
     * ```
     *
     * @param tryExpr The try expression.
     * @param catchExpr The catch expression that will be evaluated and
     * returned if the tryExpr produces an error.
     * @returns A new {@code BooleanExpression} representing the 'ifError' operation.
     */
    export function ifError(
      tryExpr: BooleanExpression,
      catchExpr: BooleanExpression,
    ): BooleanExpression;

    /**
     *
     * Creates an expression that returns the `catch` argument if there is an
     * error, else return the result of the `try` argument evaluation.
     *
     * @example
     * ```typescript
     * // Returns the first item in the title field arrays, or returns
     * // the entire title field if the array is empty or the field is another type.
     * ifError(field("title").arrayGet(0), field("title"));
     * ```
     *
     * @param tryExpr The try expression.
     * @param catchExpr The catch expression that will be evaluated and
     * returned if the tryExpr produces an error.
     * @returns A new {@code Expression} representing the 'ifError' operation.
     */
    export function ifError(
      tryExpr: Expression,
      catchExpr: Expression,
    ): FunctionExpression;

    /**
     *
     * Creates an expression that returns the `catch` argument if there is an
     * error, else return the result of the `try` argument evaluation.
     *
     * @example
     * ```typescript
     * // Returns the first item in the title field arrays, or returns
     * // "Default Title"
     * ifError(field("title").arrayGet(0), "Default Title");
     * ```
     *
     * @param tryExpr The try expression.
     * @param catchValue The value that will be returned if the tryExpr produces an
     * error.
     * @returns A new {@code Expression} representing the 'ifError' operation.
     */
    export function ifError(
      tryExpr: Expression,
      catchValue: unknown,
    ): FunctionExpression;

    /**
     * Creates an expression that returns `true` if a value is absent. Otherwise,
     * returns `false` even if the value is `null`.
     *
     * @example
     * ```typescript
     * // Check if the field `value` is absent.
     * isAbsent(field("value"));
     * ```
     *
     * @param value The expression to check.
     * @returns A new {@code Expression} representing the 'isAbsent' check.
     */
    export function isAbsent(value: Expression): BooleanExpression;
    /**
     * Creates an expression that returns `true` if a field is absent. Otherwise,
     * returns `false` even if the field value is `null`.
     *
     * @example
     * ```typescript
     * // Check if the field `value` is absent.
     * isAbsent("value");
     * ```
     *
     * @param field The field to check.
     * @returns A new {@code Expression} representing the 'isAbsent' check.
     */
    export function isAbsent(field: string): BooleanExpression;

    /**
     * Creates an expression that removes a key from the map at the specified field name.
     *
     * ```
     * // Removes the key 'city' field from the map in the address field of the input document.
     * mapRemove('address', 'city');
     * ```
     *
     * @param mapField The name of a field containing a map value.
     * @param key The name of the key to remove from the input map.
     */
    export function mapRemove(
      mapField: string,
      key: string,
    ): FunctionExpression;

    /**
     * Creates an expression that removes a key from the map produced by evaluating another expression.
     *
     * @example
     * ```typescript
     * // Removes the key 'baz' from the input map.
     * mapRemove(map({foo: 'bar', baz: true}), 'baz');
     * ```
     *
     * @param mapExpr An expression that evaluates to a map value.
     * @param key The name of the key to remove from the input map.
     * @returns A new {@link FunctionExpression} representing the map with the specified key removed.
     */
    export function mapRemove(
      mapExpr: Expression,
      key: string,
    ): FunctionExpression;

    /**
     * Creates an expression that removes a key from the map at the specified field name.
     *
     * @example
     * ```typescript
     * // Removes the key 'city' field from the map in the address field of the input document.
     * mapRemove('address', constant('city'));
     * ```
     *
     * @param mapField The name of a field containing a map value.
     * @param keyExpr An expression that produces the name of the key to remove from the input map.
     * @returns A new {@code FunctionExpression} representing the map after the key has been removed.
     */
    export function mapRemove(
      mapField: string,
      keyExpr: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that removes a key from a map.
     *
     * The `mapRemove` function takes two expressions:
     * 1. An expression that evaluates to a map.
     * 2. An expression that evaluates to the string key to be removed from the map.
     *
     * @example
     * ```typescript
     * // Removes the key 'baz' from the input map.
     * mapRemove(map({foo: 'bar', baz: true}), constant('baz'));
     * ```
     *
     * @param mapExpr An expression that evaluates to a map value.
     * @param keyExpr An expression that evaluates to the string key to remove from the map.
     * @returns A new {@link FunctionExpression} representing the map with the specified key removed.
     */
    export function mapRemove(
      mapExpr: Expression,
      keyExpr: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that merges multiple map values.
     *
     * ```
     * // Merges the map in the settings field with, a map literal, and a map in
     * // that is conditionally returned by another expression
     * mapMerge('settings', { enabled: true }, conditional(field('isAdmin'), { admin: true}, {})
     * ```
     *
     * @param mapField Name of a field containing a map value that will be merged.
     * @param secondMap A required second map to merge. Represented as a literal or
     * an expression that returns a map.
     * @param otherMaps Optional additional maps to merge. Each map is represented
     * as a literal or an expression that returns a map.
     */
    export function mapMerge(
      mapField: string,
      secondMap: Record<string, unknown> | Expression,
      ...otherMaps: Array<Record<string, unknown> | Expression>
    ): FunctionExpression;
    /**
     * Creates an expression that merges multiple map values.
     *
     * ```
     * // Merges the map in the settings field with, a map literal, and a map in
     * // that is conditionally returned by another expression
     * mapMerge(field('settings'), { enabled: true }, conditional(field('isAdmin'), { admin: true}, {})
     * ```
     *
     * @param firstMap An expression or literal map value that will be merged.
     * @param secondMap A required second map to merge. Represented as a literal or
     * an expression that returns a map.
     * @param otherMaps Optional additional maps to merge. Each map is represented
     * as a literal or an expression that returns a map.
     */
    export function mapMerge(
      firstMap: Record<string, unknown> | Expression,
      secondMap: Record<string, unknown> | Expression,
      ...otherMaps: Array<Record<string, unknown> | Expression>
    ): FunctionExpression;

    /**
     * Creates an expression that extracts the document ID from a document reference.
     *
     * @example
     * ```typescript
     * // Get the document ID from a document reference.
     * documentId(field("__name__"));
     * ```
     *
     * @param documentPathExpr An expression evaluating to a document path.
     * @returns A new {@code FunctionExpression} representing the document ID as a string.
     */
    export function documentId(
      documentPathExpr: Expression,
    ): FunctionExpression;

    /**
     *
     * Creates an expression that returns the document ID from a path.
     *
     * @example
     * ```typescript
     * // Get the document ID from a path.
     * documentId(myDocumentReference);
     * ```
     *
     * @returns A new {@code Expr} representing the documentId operation.
     */
    export function documentId(
      documentPath: string | DocumentReference,
    ): FunctionExpression;

    /**
     * Creates an expression that returns the document ID from a path.
     *
     * @example
     * ```typescript
     * // Get the document ID from a path.
     * documentId(field("__path__"));
     * ```
     *
     * @returns A new {@code Expression} representing the documentId operation.
     */
    export function documentId(
      documentPathExpr: Expression,
    ): FunctionExpression;

    /**
     *
     * Creates an expression that returns the parent document of a document reference.
     *
     * @example
     * ```typescript
     * // Get the parent document of a document reference.
     * parent(myDocumentReference);
     * ```
     *
     * @param documentPath - A string path or DocumentReference to get the parent from.
     * @returns A new {@code Expression} representing the parent operation.
     */
    export function parent(
      documentPath: string | DocumentReference,
    ): FunctionExpression;

    /**
     *
     * Creates an expression that returns the parent document of a document reference.
     *
     * @example
     * ```typescript
     * // Get the parent document of a document reference.
     * parent(field("__path__"));
     * ```
     *
     * @param documentPathExpr - An Expression evaluating to a document reference.
     * @returns A new {@code Expression} representing the parent operation.
     */
    export function parent(documentPathExpr: Expression): FunctionExpression;

    /**
     * Creates an expression that returns a substring of a string or byte array.
     *
     * @param field The name of a field containing a string or byte array to compute the substring from.
     * @param position Index of the first character of the substring.
     * @param length Length of the substring.
     */
    export function substring(
      field: string,
      position: number,
      length?: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns a substring of a string or byte array.
     *
     * @param input An expression returning a string or byte array to compute the substring from.
     * @param position Index of the first character of the substring.
     * @param length Length of the substring.
     */
    export function substring(
      input: Expression,
      position: number,
      length?: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns a substring of a string or byte array.
     *
     * @param field The name of a field containing a string or byte array to compute the substring from.
     * @param position An expression that returns the index of the first character of the substring.
     * @param length An expression that returns the length of the substring.
     */
    export function substring(
      field: string,
      position: Expression,
      length?: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that returns a substring of a string or byte array.
     *
     * @example
     * ```typescript
     * // Get a substring of the 'myString' field from index 0 with length 5.
     * substring(field("myString"), 0, 5);
     * ```
     *
     * @param input An expression returning a string or byte array from which to extract the substring.
     * @param position An expression that returns the 0-based starting index of the substring.
     * @param length Optional. An expression that returns the length of the substring. If omitted, the substring extends to the end of the input.
     * @returns A new {@code FunctionExpression} representing the substring operation.
     */
    export function substring(
      input: Expression,
      position: Expression,
      length?: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that performs an addition operation on two or more numeric expressions or literal values.
     *
     * This function supports adding multiple values. For example, `add(a, b, c)` is equivalent to `add(add(a, b), c)`.
     *
     * @example
     * ```typescript
     * // Add the value of the 'quantity' field and the 'reserve' field.
     * add(field("quantity"), field("reserve"));
     *
     * // Add three values: a field, a literal number, and another field.
     * add(field("price"), 10, field("tax"));
     * ```
     *
     * @param first The initial numeric expression or literal value.
     * @param second The second numeric expression or literal value to add.
     * @param others Optional: Additional numeric expressions or literal values to add.
     * @returns A new {@code FunctionExpression} representing the sum of all provided arguments.
     */
    export function add(
      first: Expression,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;

    /**
     * Creates an expression that computes the sum of a field's value and one or more other expressions or literals.
     *
     * @example
     * ```typescript
     * // Add the value of the 'quantity' field to the value of the 'reserve' field.
     * add("quantity", field("reserve"));
     *
     * // Add the value of the 'price' field to a literal number.
     * add("price", 10);
     *
     * // Add the value of the 'total' field to the values of 'tax' and 'shipping' fields.
     * add("total", field("tax"), field("shipping"));
     * ```
     *
     * @param fieldName The name of the field whose value will be the first operand in the addition.
     * @param second The second operand, which can be an {@code Expression} or a literal value.
     * @param others Optional additional operands, each of which can be an {@code Expression} or a literal value.
     * @returns A new {@code Expression} representing the addition operation.
     */
    export function add(
      fieldName: string,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;
    /**
     * Creates an expression that subtracts two expressions.
     *
     * @example
     * ```typescript
     * // Subtract the 'discount' field from the 'price' field
     * subtract(field("price"), field("discount"));
     * ```
     *
     * @param minuend The expression to subtract from.
     * @param subtrahend The expression to subtract.
     * @returns A new {@code Expression} representing the subtraction operation.
     */
    export function subtract(
      minuend: Expression,
      subtrahend: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that subtracts one value from another.
     *
     * @example
     * ```typescript
     * // Subtract the constant value 2 from the 'value' field
     * subtract(field("value"), 2);
     * ```
     *
     * @param minuend The expression to subtract from.
     * @param subtrahend The value to subtract.
     * @returns A new {@code Expression} representing the subtraction operation.
     */
    export function subtract(
      minuend: Expression,
      subtrahend: unknown,
    ): FunctionExpression;
    /**
     * Creates an expression that subtracts an expression from a field's value.
     *
     * @example
     * ```typescript
     * // Subtract the 'discount' field from the 'price' field
     * subtract("price", field("discount"));
     * ```
     *
     * @param minuendFieldName The field name to subtract from.
     * @param subtrahend The expression to subtract.
     * @returns A new {@code Expression} representing the subtraction operation.
     */
    export function subtract(
      minuendFieldName: string,
      subtrahend: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that subtracts a value from a field's value.
     *
     *
     * @example
     * ```typescript
     * // Subtract 20 from the value of the 'total' field
     * subtract("total", 20);
     * ```
     *
     * @param minuendFieldName The name of the field to subtract from.
     * @param subtrahend The value to subtract.
     * @returns A new {@code Expression} representing the subtraction operation.
     */
    export function subtract(
      minuendFieldName: string,
      subtrahend: unknown,
    ): FunctionExpression;

    /**
     * Creates an expression that multiplies two or more values together.
     *
     * @example
     * ```typescript
     * // Multiply the 'quantity' field by the 'price' field
     * multiply(field("quantity"), field("price"));
     *
     * // Multiply three values together
     * multiply(field("a"), 2, field("b"));
     * ```
     *
     * @param first The first expression to multiply.
     * @param second The second expression or literal to multiply.
     * @param others Optional additional expressions or literals to multiply.
     * @returns A new {@code FunctionExpression} representing the multiplication operation.
     */
    export function multiply(
      first: Expression,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;

    /**
     * Creates an expression that multiplies a field's value by one or more other expressions or literal values.
     *
     * @example
     * ```typescript
     * // Multiply the 'quantity' field by the 'price' field
     * multiply("quantity", field("price"));
     * ```
     *
     * @param fieldName The name of the field whose value will be the initial operand of the multiplication.
     * @param second The second operand, which can be an `Expression` or a literal value, to be multiplied.
     * @param others Optional additional operands (`Expression` or literal values) to be included in the multiplication.
     * @returns A new {@link FunctionExpression} representing the multiplication operation.
     */
    export function multiply(
      fieldName: string,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;
    /**
     * Creates an expression that divides two expressions.
     *
     * @example
     * ```typescript
     * // Divide the 'total' field by the 'count' field
     * divide(field("total"), field("count"));
     * ```
     *
     * @param dividend The expression to be divided.
     * @param divisor The expression to divide by.
     * @returns A new {@code Expression} representing the division operation.
     */
    export function divide(
      dividend: Expression,
      divisor: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that divides an expression by a constant value.
     *
     * @example
     * ```typescript
     * // Divide the 'value' field by 10
     * divide(field("value"), 10);
     * ```
     *
     * @param dividend The expression to be divided.
     * @param divisor The constant value to divide by.
     * @returns A new {@code Expression} representing the division operation.
     */
    export function divide(
      dividend: Expression,
      divisor: unknown,
    ): FunctionExpression;
    /**
     * Creates an expression that divides a field's value by an expression.
     *
     * @example
     * ```typescript
     * // Divide the 'total' field by the 'count' field
     * divide("total", field("count"));
     * ```
     *
     * @param dividend The field name to be divided.
     * @param divisor The expression to divide by.
     * @returns A new {@code Expression} representing the division operation.
     */
    export function divide(
      dividend: string,
      divisor: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that divides a field's value by a constant value.
     *
     * @example
     * ```typescript
     * // Divide the 'value' field by 10
     * divide("value", 10);
     * ```
     *
     * @param dividend The field name to be divided.
     * @param divisor The constant value to divide by.
     * @returns A new {@code Expression} representing the division operation.
     */
    export function divide(
      dividend: string,
      divisor: unknown,
    ): FunctionExpression;
    /**
     * Creates an expression that calculates the modulo (remainder) of dividing two expressions.
     *
     * @example
     * ```typescript
     * // Calculate the remainder of dividing 'field1' by 'field2'.
     * mod(field("field1"), field("field2"));
     * ```
     *
     * @param left The dividend expression.
     * @param right The divisor expression.
     * @returns A new {@code Expression} representing the modulo operation.
     */
    export function mod(
      left: Expression,
      right: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that calculates the modulo (remainder) of dividing an expression by a constant.
     *
     * @example
     * ```typescript
     * // Calculate the remainder of dividing 'field1' by 5.
     * mod(field("field1"), 5);
     * ```
     *
     * @param expression The dividend expression.
     * @param value The divisor constant.
     * @returns A new {@code Expression} representing the modulo operation.
     */
    export function mod(
      expression: Expression,
      value: unknown,
    ): FunctionExpression;
    /**
     * Creates an expression that calculates the modulo (remainder) of dividing a field's value by an expression.
     *
     * @example
     * ```typescript
     * // Calculate the remainder of dividing 'field1' by 'field2'.
     * mod("field1", field("field2"));
     * ```
     *
     * @param fieldName The dividend field name.
     * @param expression The divisor expression.
     * @returns A new {@code Expression} representing the modulo operation.
     */
    export function mod(
      fieldName: string,
      expression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that calculates the modulo (remainder) of dividing a field's value by a constant.
     *
     * @example
     * ```typescript
     * // Calculate the remainder of dividing 'field1' by 5.
     * mod("field1", 5);
     * ```
     *
     * @param fieldName The dividend field name.
     * @param value The divisor constant.
     * @returns A new {@code Expression} representing the modulo operation.
     */
    export function mod(fieldName: string, value: unknown): FunctionExpression;

    /**
     * Creates an expression that constructs a Firestore map value from a given JavaScript object.
     * The keys of the object become the field names in the Firestore map, and the values become the field values.
     * Values can be literal values or other expressions (e.g., `Field.of()`).
     *
     * @example
     * ```typescript
     * // Create a map from the input object, where 'foo' is a literal string and 'baz' references the value
     * // of the 'baz' field from the document currently being processed by the pipeline.
     * map({foo: 'bar', baz: Field.of('baz')}).as('data');
     * ```
     *
     * @param elements The JavaScript object literal whose properties will be used to create the Firestore map expression.
     * @returns A new {@code FunctionExpression} representing the map function.
     */
    export function map(elements: Record<string, unknown>): FunctionExpression;
    /**
     * Creates an expression that creates a Firestore array value from a given JavaScript array.
     * Array values can be literals or other expressions (e.g., `Field.of()`).
     *
     * @example
     * ```typescript
     * // Create an array value from the input array and reference the 'baz' field value from the input document.
     * array(['bar', Field.of('baz')]).as('foo');
     * ```
     *
     * @param elements The input array to evaluate in the expression.
     * @returns A new {@code Expression} representing the array function.
     */
    export function array(elements: unknown[]): FunctionExpression;

    /**
     * Creates an expression that checks if two expressions are equal.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is equal to an expression
     * equal(field("age"), field("minAge").add(10));
     * ```
     *
     * @param left The first expression to compare.
     * @param right The second expression to compare.
     * @returns A new `BooleanExpression` representing the equality comparison.
     */
    export function equal(
      left: Expression,
      right: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is equal to a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is equal to 21
     * equal(field("age"), 21);
     * ```
     *
     * @param expression The expression to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the equality comparison.
     */
    export function equal(
      expression: Expression,
      value: unknown,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value is equal to another expression.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is equal to the 'limit' field
     * equal("age", field("limit"));
     * ```
     *
     * @param fieldName The name of the field to compare.
     * @param expression The expression to compare the field's value against.
     * @returns A new `BooleanExpression` representing the equality comparison.
     */
    export function equal(
      fieldName: string,
      expression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is equal to a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'city' field is equal to string constant "London"
     * equal("city", "London");
     * ```
     *
     * @param fieldName The field name to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the equality comparison.
     */
    export function equal(fieldName: string, value: unknown): BooleanExpression;
    /**
     * Creates an expression that checks if two expressions are not equal.
     *
     * @example
     * ```typescript
     * // Check if the 'status' field is not equal to field 'finalState'
     * notEqual(field("status"), field("finalState"));
     * ```
     *
     * @param left The first expression to compare.
     * @param right The second expression to compare.
     * @returns A new `Expression` representing the inequality comparison.
     */
    export function notEqual(
      left: Expression,
      right: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is not equal to a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'status' field is not equal to "completed"
     * notEqual(field("status"), "completed");
     * ```
     *
     * @param expression The expression to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the inequality comparison.
     */
    export function notEqual(
      expression: Expression,
      value: unknown,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value is not equal to an expression.
     *
     * @example
     * ```typescript
     * // Check if the 'status' field is not equal to the value of 'expectedStatus'
     * notEqual("status", field("expectedStatus"));
     * ```
     *
     * @param fieldName The field name to compare.
     * @param expression The expression to compare to.
     * @returns A new `BooleanExpression` representing the inequality comparison.
     */
    export function notEqual(
      fieldName: string,
      expression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is not equal to a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'country' field is not equal to "USA"
     * notEqual("country", "USA");
     * ```
     *
     * @param fieldName The field name to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the inequality comparison.
     */
    export function notEqual(
      fieldName: string,
      value: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if the first expression is less than the second expression.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is less than 30
     * lessThan(field("age"), field("limit"));
     * ```
     *
     * @param left The first expression to compare.
     * @param right The second expression to compare.
     * @returns A new `Expression` representing the less than comparison.
     */
    export function lessThan(
      left: Expression,
      right: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is less than a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is less than 30
     * lessThan(field("age"), 30);
     * ```
     *
     * @param expression The expression to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the less than comparison.
     */
    export function lessThan(
      expression: Expression,
      value: unknown,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value is less than an expression.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is less than the 'limit' field
     * lessThan("age", field("limit"));
     * ```
     *
     * @param fieldName The field name to compare.
     * @param expression The expression to compare to.
     * @returns A new `BooleanExpression` representing the less than comparison.
     */
    export function lessThan(
      fieldName: string,
      expression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is less than a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'price' field is less than 50
     * lessThan("price", 50);
     * ```
     *
     * @param fieldName The field name to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the less than comparison.
     */
    export function lessThan(
      fieldName: string,
      value: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if the first expression is less than or equal to the second
     * expression.
     *
     * @example
     * ```typescript
     * // Check if the 'quantity' field is less than or equal to 20
     * lessThanOrEqual(field("quantity"), field("limit"));
     * ```
     *
     * @param left The first expression to compare.
     * @param right The second expression to compare.
     * @returns A new `Expression` representing the less than or equal to comparison.
     */
    export function lessThanOrEqual(
      left: Expression,
      right: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a given expression's value is less than or equal to a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'quantity' field is less than or equal to 20
     * lessThanOrEqual(field("quantity"), 20);
     * ```
     *
     * @param expression The `Expression` to compare.
     * @param value The constant value to compare against.
     * @returns A new `BooleanExpression` representing the less than or equal to comparison.
     */
    export function lessThanOrEqual(
      expression: Expression,
      value: unknown,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value is less than or equal to another expression.
     *
     * @example
     * ```typescript
     * // Check if the 'quantity' field is less than or equal to the 'limit' field
     * lessThanOrEqual("quantity", field("limit"));
     * ```
     *
     * @param fieldName The name of the field whose value will be compared.
     * @param expression The expression to compare against the field's value.
     * @returns A new `BooleanExpression` representing the less than or equal to comparison.
     */
    export function lessThanOrEqual(
      fieldName: string,
      expression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is less than or equal to a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'score' field is less than or equal to 70
     * lessThanOrEqual("score", 70);
     * ```
     *
     * @param fieldName The field name to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the less than or equal to comparison.
     */
    export function lessThanOrEqual(
      fieldName: string,
      value: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if the first expression is greater than the second
     * expression.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is greater than 18
     * greaterThan(field("age"), constant(9).add(9));
     * ```
     *
     * @param left The first expression to compare.
     * @param right The second expression to compare.
     * @returns A new `Expression` representing the greater than comparison.
     */
    export function greaterThan(
      left: Expression,
      right: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is greater than a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'age' field is greater than 18
     * greaterThan(field("age"), 18);
     * ```
     *
     * @param expression The expression to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the greater than comparison.
     */
    export function greaterThan(
      expression: Expression,
      value: unknown,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value is greater than another expression.
     *
     * @example
     * ```typescript
     * // Check if the value of field 'age' is greater than the value of field 'limit'
     * greaterThan("age", field("limit"));
     * ```
     *
     * @param fieldName The name of the field to compare.
     * @param expression The expression to compare against.
     * @returns A new `BooleanExpression` representing the greater than comparison.
     */
    export function greaterThan(
      fieldName: string,
      expression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is greater than a constant value.
     *
     * @example
     * ```typescript
     * // Check if the 'price' field is greater than 100
     * greaterThan("price", 100);
     * ```
     *
     * @param fieldName The name of the field to compare.
     * @param value The constant value to compare to.
     * @returns A new `BooleanExpression` representing the greater than comparison.
     */
    export function greaterThan(
      fieldName: string,
      value: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if the first expression is greater than or equal to the
     * second expression.
     *
     * @example
     * ```typescript
     * // Check if the 'quantity' field is greater than or equal to the field "threshold"
     * greaterThanOrEqual(field("quantity"), field("threshold"));
     * ```
     *
     * @param left The first expression to compare.
     * @param right The second expression to compare.
     * @returns A new `Expression` representing the greater than or equal to comparison.
     */
    export function greaterThanOrEqual(
      left: Expression,
      right: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is greater than or equal to a constant
     * value.
     *
     * @example
     * ```typescript
     * // Check if the 'quantity' field is greater than or equal to 10
     * greaterThanOrEqual(field("quantity"), 10);
     * ```
     *
     * @param expression The expression to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the greater than or equal to comparison.
     */
    export function greaterThanOrEqual(
      expression: Expression,
      value: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is greater than or equal to an expression.
     *
     * @example
     * ```typescript
     * // Check if the value of field 'age' is greater than or equal to the value of field 'limit'
     * greaterThanOrEqual("age", field("limit"));
     * ```
     *
     * @param fieldName The field name to compare.
     * @param value The expression to compare to.
     * @returns A new `Expression` representing the greater than or equal to comparison.
     */
    export function greaterThanOrEqual(
      fieldName: string,
      value: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is greater than or equal to a constant
     * value.
     *
     * @example
     * ```typescript
     * // Check if the 'score' field is greater than or equal to 80
     * greaterThanOrEqual("score", 80);
     * ```
     *
     * @param fieldName The field name to compare.
     * @param value The constant value to compare to.
     * @returns A new `Expression` representing the greater than or equal to comparison.
     */
    export function greaterThanOrEqual(
      fieldName: string,
      value: unknown,
    ): BooleanExpression;

    /**
     *
     * Creates an expression that concatenates an array expression with other arrays.
     *
     * @example
     * ```typescript
     * // Combine the 'items' array with two new item arrays
     * arrayConcat(field("items"), [field("newItems"), field("otherItems")]);
     * ```
     *
     * @param firstArray The first array expression to concatenate to.
     * @param secondArray The second array expression or array literal to concatenate to.
     * @param otherArrays Optional additional array expressions or array literals to concatenate.
     * @returns A new {@code Expr} representing the concatenated array.
     */
    export function arrayConcat(
      firstArray: Expression,
      secondArray: Expression | unknown[],
      ...otherArrays: Array<Expression | unknown[]>
    ): FunctionExpression;

    /**
     *
     * Creates an expression that concatenates a field's array value with other arrays.
     *
     * @example
     * ```typescript
     * // Combine the 'items' array with two new item arrays
     * arrayConcat("items", [field("newItems"), field("otherItems")]);
     * ```
     *
     * @param firstArrayField The first array to concatenate to.
     * @param secondArray The second array expression or array literal to concatenate to.
     * @param otherArrays Optional additional array expressions or array literals to concatenate.
     * @returns A new {@code Expr} representing the concatenated array.
     */
    export function arrayConcat(
      firstArrayField: string,
      secondArray: Expression | unknown[],
      ...otherArrays: Array<Expression | unknown[]>
    ): FunctionExpression;

    /**
     * Creates an expression that checks if an array expression contains a specific element.
     *
     * @example
     * ```typescript
     * // Check if the 'colors' array contains the value of field 'selectedColor'
     * arrayContains(field("colors"), field("selectedColor"));
     * ```
     *
     * @param array The array expression to check.
     * @param element The element to search for in the array.
     * @returns A new {@code Expression} representing the 'array_contains' comparison.
     */
    export function arrayContains(
      array: Expression,
      element: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an array expression contains a specific element.
     *
     * @example
     * ```typescript
     * // Check if the 'colors' array contains "red"
     * arrayContains(field("colors"), "red");
     * ```
     *
     * @param array The array expression to check.
     * @param element The element to search for in the array.
     * @returns A new {@code Expression} representing the 'array_contains' comparison.
     */
    export function arrayContains(
      array: Expression,
      element: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's array value contains a specific element.
     *
     * @example
     * ```typescript
     * // Check if the 'colors' array contains the value of field 'selectedColor'
     * arrayContains("colors", field("selectedColor"));
     * ```
     *
     * @param fieldName The field name to check.
     * @param element The element to search for in the array.
     * @returns A new {@code Expression} representing the 'array_contains' comparison.
     */
    export function arrayContains(
      fieldName: string,
      element: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's array value contains a specific value.
     *
     * @example
     * ```typescript
     * // Check if the 'colors' array contains "red"
     * arrayContains("colors", "red");
     * ```
     *
     * @param fieldName The field name to check.
     * @param element The element to search for in the array.
     * @returns A new {@code Expression} representing the 'array_contains' comparison.
     */
    export function arrayContains(
      fieldName: string,
      element: unknown,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an array expression contains any of the specified
     * elements.
     *
     * @example
     * ```typescript
     * // Check if the 'categories' array contains either values from field "cate1" or "Science"
     * arrayContainsAny(field("categories"), [field("cate1"), "Science"]);
     * ```
     *
     * @param array The array expression to check.
     * @param values The elements to check for in the array.
     * @returns A new {@code Expression} representing the 'array_contains_any' comparison.
     */
    export function arrayContainsAny(
      array: Expression,
      values: Array<Expression | unknown>,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's array value contains any of the specified
     * elements.
     *
     * @example
     * ```typescript
     * // Check if the 'groups' array contains either the value from the 'userGroup' field
     * // or the value "guest"
     * arrayContainsAny("categories", [field("cate1"), "Science"]);
     * ```
     *
     * @param fieldName The field name to check.
     * @param values The elements to check for in the array.
     * @returns A new {@code Expression} representing the 'array_contains_any' comparison.
     */
    export function arrayContainsAny(
      fieldName: string,
      values: Array<Expression | unknown>,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an array expression contains any of the specified
     * elements.
     *
     * @example
     * ```typescript
     * // Check if the 'categories' array contains either values from field "cate1" or "Science"
     * arrayContainsAny(field("categories"), array([field("cate1"), "Science"]));
     * ```
     *
     * @param array The array expression to check.
     * @param values An expression that evaluates to an array, whose elements to check for in the array.
     * @returns A new {@code Expression} representing the 'array_contains_any' comparison.
     */
    export function arrayContainsAny(
      array: Expression,
      values: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's array value contains any of the specified
     * elements.
     *
     * @example
     * ```typescript
     * // Check if the 'groups' array contains either the value from the 'userGroup' field
     * // or the value "guest"
     * arrayContainsAny("categories", array([field("cate1"), "Science"]));
     * ```
     *
     * @param fieldName The field name to check.
     * @param values An expression that evaluates to an array, whose elements to check for in the array field.
     * @returns A new {@code Expression} representing the 'array_contains_any' comparison.
     */
    export function arrayContainsAny(
      fieldName: string,
      values: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an array expression contains all the specified elements.
     *
     * @example
     * ```typescript
     * // Check if the "tags" array contains all of the values: "SciFi", "Adventure", and the value from field "tag1"
     * arrayContainsAll(field("tags"), [field("tag1"), constant("SciFi"), "Adventure"]);
     * ```
     *
     * @param array The array expression to check.
     * @param values The elements to check for in the array.
     * @returns A new {@code Expression} representing the 'array_contains_all' comparison.
     */
    export function arrayContainsAll(
      array: Expression,
      values: Array<Expression | unknown>,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's array value contains all the specified values or
     * expressions.
     *
     * @example
     * ```typescript
     * // Check if the 'tags' array contains both of the values from field 'tag1', the value "SciFi", and "Adventure"
     * arrayContainsAll("tags", [field("tag1"), "SciFi", "Adventure"]);
     * ```
     *
     * @param fieldName The field name to check.
     * @param values The elements to check for in the array.
     * @returns A new {@code Expression} representing the 'array_contains_all' comparison.
     */
    export function arrayContainsAll(
      fieldName: string,
      values: Array<Expression | unknown>,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an array expression contains all the specified elements.
     *
     * The `array` parameter should be an expression that evaluates to an array.
     * The `arrayExpression` parameter should be an expression that evaluates to an array of elements
     * to check for within the `array`.
     *
     * @example
     * ```typescript
     * // Check if the "tags" array contains all elements from the "requiredTags" field.
     * arrayContainsAll(field("tags"), field("requiredTags"));
     *
     * // Check if the "items" array contains all elements from a constant array.
     * arrayContainsAll(field("items"), constant(["apple", "banana"]));
     * ```
     *
     * @param array An expression evaluating to the array to check.
     * @param arrayExpression An expression evaluating to an array of elements to check for.
     * @returns A new {@code BooleanExpression} representing the 'array_contains_all' comparison.
     */
    export function arrayContainsAll(
      array: Expression,
      arrayExpression: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's array value contains all the elements specified by another expression.
     *
     * @example
     * ```typescript
     * // Check if the 'tags' array contains all values present in the 'requiredTags' field.
     * arrayContainsAll("tags", field("requiredTags"));
     * ```
     *
     * @param fieldName The name of the array field to check.
     * @param arrayExpression An expression that evaluates to an array of values to check for.
     * @returns A new {@code BooleanExpression} representing the 'array_contains_all' comparison.
     */
    export function arrayContainsAll(
      fieldName: string,
      arrayExpression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that calculates the length of an array in a specified field.
     *
     * @example
     * ```typescript
     * // Get the number of items in field 'cart'
     * arrayLength('cart');
     * ```
     *
     * @param fieldName The name of the field containing an array to calculate the length of.
     * @returns A new {@code Expression} representing the length of the array.
     */
    export function arrayLength(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that calculates the length of an array expression.
     *
     * @example
     * ```typescript
     * // Get the number of items in the 'cart' array
     * arrayLength(field("cart"));
     * ```
     *
     * @param array The array expression to calculate the length of.
     * @returns A new {@code Expression} representing the length of the array.
     */
    export function arrayLength(array: Expression): FunctionExpression;

    /**
     * Creates an expression that returns the first element of an array.
     *
     * @example
     * ```typescript
     * // Get the first tag from the 'tags' array field
     * arrayFirst("tags");
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @returns A new {@code Expression} representing the first element.
     */
    export function arrayFirst(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that returns the first element of an array.
     *
     * @example
     * ```typescript
     * // Get the first tag from the 'tags' array field
     * arrayFirst(field("tags"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @returns A new {@code Expression} representing the first element.
     */
    export function arrayFirst(arrayExpression: Expression): FunctionExpression;
    /**
     * Creates an expression that returns the first `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the first 3 tags from the 'tags' array field
     * arrayFirstN("tags", 3);
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the first `n` elements.
     */
    export function arrayFirstN(
      fieldName: string,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the first `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the first n tags from the 'tags' array field
     * arrayFirstN("tags", field("count"));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the first `n` elements.
     */
    export function arrayFirstN(
      fieldName: string,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the first `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the first 3 elements from an array expression
     * arrayFirstN(field("tags"), 3);
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the first `n` elements.
     */
    export function arrayFirstN(
      arrayExpression: Expression,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the first `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the first n elements from an array expression
     * arrayFirstN(field("tags"), field("count"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the first `n` elements.
     */
    export function arrayFirstN(
      arrayExpression: Expression,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that indexes into an array from the beginning or end
     * and return the element. If the offset exceeds the array length, an error is
     * returned. A negative offset, starts from the end.
     *
     * @example
     * ```typescript
     * // Return the value in the tags field array at index 1.
     * arrayGet(field('tags'), 1);
     * ```
     *
     * @param arrayExpression An `Expression` evaluating to an array.
     * @param offset The index of the element to return.
     * @returns A new `Expression` representing the 'arrayGet' operation.
     */
    export function arrayIndexOf(
      fieldName: string,
      search: unknown | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the first index of the search value in an array.
     * Returns -1 if the value is not found.
     *
     * @example
     * ```typescript
     * // Get the index of "politics" in the 'tags' array field
     * arrayIndexOf(field("tags"), "politics");
     * ```
     *
     * @param arrayExpression The expression representing the array to search.
     * @param search The value to search for.
     * @returns A new {@code Expression} representing the index.
     */
    export function arrayIndexOf(
      arrayExpression: Expression,
      search: unknown | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns all indices of the search value in an array.
     *
     * @example
     * ```typescript
     * // Get all indices of 5 in the 'scores' array field
     * arrayIndexOfAll("scores", 5);
     * ```
     *
     * @param fieldName The name of the field containing the array to search.
     * @param search The value to search for.
     * @returns A new {@code Expression} representing the indices.
     */
    export function arrayIndexOfAll(
      fieldName: string,
      search: unknown | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns all indices of the search value in an array.
     *
     * @example
     * ```typescript
     * // Get all indices of 5 in the 'scores' array field
     * arrayIndexOfAll(field("scores"), 5);
     * ```
     *
     * @param arrayExpression The expression representing the array to search.
     * @param search The value to search for.
     * @returns A new {@code Expression} representing the indices.
     */
    export function arrayIndexOfAll(
      arrayExpression: Expression,
      search: unknown | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the last element of an array.
     *
     * @example
     * ```typescript
     * // Get the last tag from the 'tags' array field
     * arrayLast("tags");
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @returns A new {@code Expression} representing the last element.
     */
    export function arrayLast(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that returns the last element of an array.
     *
     * @example
     * ```typescript
     * // Get the last tag from the 'tags' array field
     * arrayLast(field("tags"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @returns A new {@code Expression} representing the last element.
     */
    export function arrayLast(arrayExpression: Expression): FunctionExpression;
    /**
     * Creates an expression that returns the last index of the search value in an array.
     * Returns -1 if the value is not found.
     *
     * @example
     * ```typescript
     * // Get the last index of "politics" in the 'tags' array field
     * arrayLastIndexOf("tags", "politics");
     * ```
     *
     * @param fieldName The name of the field containing the array to search.
     * @param search The value to search for.
     * @returns A new {@code Expression} representing the index.
     */
    export function arrayLastIndexOf(
      fieldName: string,
      search: unknown | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the last index of the search value in an array.
     * Returns -1 if the value is not found.
     *
     * @example
     * ```typescript
     * // Get the last index of "politics" in the 'tags' array field
     * arrayLastIndexOf(field("tags"), "politics");
     * ```
     *
     * @param arrayExpression The expression representing the array to search.
     * @param search The value to search for.
     * @returns A new {@code Expression} representing the index.
     */
    export function arrayLastIndexOf(
      arrayExpression: Expression,
      search: unknown | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the last `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the last 3 tags from the 'tags' array field
     * arrayLastN("tags", 3);
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the last `n` elements.
     */
    export function arrayLastN(
      fieldName: string,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the last `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the last n tags from the 'tags' array field
     * arrayLastN("tags", field("count"));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the last `n` elements.
     */
    export function arrayLastN(
      fieldName: string,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the last `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the last 3 elements from an array expression
     * arrayLastN(field("tags"), 3);
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the last `n` elements.
     */
    export function arrayLastN(
      arrayExpression: Expression,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the last `n` elements of an array.
     *
     * @example
     * ```typescript
     * // Get the last n elements from an array expression
     * arrayLastN(field("tags"), field("count"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the last `n` elements.
     */
    export function arrayLastN(
      arrayExpression: Expression,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the maximum value in an array.
     *
     * @example
     * ```typescript
     * // Get the maximum value from the 'scores' array field
     * arrayMaximum("scores");
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @returns A new {@code Expression} representing the maximum value.
     */
    export function arrayMaximum(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that returns the maximum value in an array.
     *
     * @example
     * ```typescript
     * // Get the maximum value from the 'scores' array field
     * arrayMaximum(field("scores"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @returns A new {@code Expression} representing the maximum value.
     */
    export function arrayMaximum(
      arrayExpression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the largest `n` elements of an array.
     *
     * Note: Returns the n largest non-null elements in the array, in descending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the top 3 scores from the 'scores' array field
     * arrayMaximumN("scores", 3);
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the largest `n` elements.
     */
    export function arrayMaximumN(
      fieldName: string,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the largest `n` elements of an array.
     *
     * Note: Returns the n largest non-null elements in the array, in descending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the top n scores from the 'scores' array field
     * arrayMaximumN("scores", field("count"));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the largest `n` elements.
     */
    export function arrayMaximumN(
      fieldName: string,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the largest `n` elements of an array.
     *
     * Note: Returns the n largest non-null elements in the array, in descending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the top 3 elements from an array expression
     * arrayMaximumN(field("scores"), 3);
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the largest `n` elements.
     */
    export function arrayMaximumN(
      arrayExpression: Expression,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the largest `n` elements of an array.
     *
     * Note: Returns the n largest non-null elements in the array, in descending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the top n elements from an array expression
     * arrayMaximumN(field("scores"), field("count"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the largest `n` elements.
     */
    export function arrayMaximumN(
      arrayExpression: Expression,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the minimum value in an array.
     *
     * @example
     * ```typescript
     * // Get the minimum value from the 'scores' array field
     * arrayMinimum("scores");
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @returns A new {@code Expression} representing the minimum value.
     */
    export function arrayMinimum(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that returns the minimum value in an array.
     *
     * @example
     * ```typescript
     * // Get the minimum value from the 'scores' array field
     * arrayMinimum(field("scores"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @returns A new {@code Expression} representing the minimum value.
     */
    export function arrayMinimum(
      arrayExpression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the smallest `n` elements of an array.
     *
     * Note: Returns the n smallest non-null elements in the array, in ascending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the bottom 3 scores from the 'scores' array field
     * arrayMinimumN("scores", 3);
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the smallest `n` elements.
     */
    export function arrayMinimumN(
      fieldName: string,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the smallest `n` elements of an array.
     *
     * Note: Returns the n smallest non-null elements in the array, in ascending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the bottom n scores from the 'scores' array field
     * arrayMinimumN(field("scores"), field("count"));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the smallest `n` elements.
     */
    export function arrayMinimumN(
      fieldName: string,
      n: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the smallest `n` elements of an array.
     *
     * Note: Returns the n smallest non-null elements in the array, in ascending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the bottom 3 scores from the 'scores' array field
     * arrayMinimumN(field("scores"), 3);
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n The number of elements to return.
     * @returns A new {@code Expression} representing the smallest `n` elements.
     */
    export function arrayMinimumN(
      arrayExpression: Expression,
      n: number,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the smallest `n` elements of an array.
     *
     * Note: Returns the n smallest non-null elements in the array, in ascending
     * order. This does not use a stable sort, meaning the order of equivalent
     * elements is undefined.
     *
     * @example
     * ```typescript
     * // Get the bottom n scores from the 'scores' array field
     * arrayMinimumN(field("scores"), field("count"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param n An expression evaluating to the number of elements to return.
     * @returns A new {@code Expression} representing the smallest `n` elements.
     */
    export function arrayMinimumN(
      arrayExpression: Expression,
      n: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that checks if an expression, when evaluated, is equal to any of the provided values or
     * expressions.
     *
     * @example
     * ```typescript
     * // Check if the 'category' field is either "Electronics" or value of field 'primaryType'
     * equalAny(field("category"), [constant("Electronics"), field("primaryType")]);
     * ```
     *
     * @param expression The expression whose results to compare.
     * @param values The values to check against.
     * @returns A new {@code Expression} representing the 'IN' comparison.
     */
    export function equalAny(
      expression: Expression,
      values: Array<Expression | unknown>,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is equal to any of the provided values.
     *
     * ```typescript
     * // Check if the 'category' field is set to a value in the disabledCategories field
     * equalAny(field("category"), field('disabledCategories'));
     * ```
     *
     * @param expression The expression whose results to compare.
     * @param arrayExpression An expression that evaluates to an array, whose elements to check for equality to the input.
     * @returns A new {@code Expression} representing the 'IN' comparison.
     */
    export function equalAny(
      expression: Expression,
      arrayExpression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is equal to any of the provided values or
     * expressions.
     *
     * ```typescript
     * // Check if the 'category' field is either "Electronics" or value of field 'primaryType'
     * equalAny("category", [constant("Electronics"), field("primaryType")]);
     * ```
     *
     * @param fieldName The field to compare.
     * @param values The values to check against.
     * @returns A new {@code Expression} representing the 'IN' comparison.
     */
    export function equalAny(
      fieldName: string,
      values: Array<Expression | unknown>,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value is equal to any of the elements
     * within the array that the provided expression evaluates to.
     *
     * This is equivalent to an 'IN' comparison in Firestore queries.
     *
     * ```typescript
     * // Check if the 'category' field's value is present in the 'allowedCategories' array field.
     * equalAny("category", field("allowedCategories"));
     * ```
     *
     * @param fieldName The name of the field to compare.
     * @param arrayExpression An expression that evaluates to an array. The function checks if the value of `fieldName` is equal to any element within this array.
     * @returns A new {@code BooleanExpression} representing the 'IN' comparison.
     */
    export function equalAny(
      fieldName: string,
      arrayExpression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if an expression is not equal to any of the provided values
     * or expressions.
     *
     * ```typescript
     * // Check if the 'status' field is neither "pending" nor the value of 'rejectedStatus'
     * notEqualAny(field("status"), ["pending", field("rejectedStatus")]);
     * ```
     *
     * @param element The expression to compare.
     * @param values The values to check against.
     * @returns A new {@code Expression} representing the 'NOT IN' comparison.
     */
    export function notEqualAny(
      element: Expression,
      values: Array<Expression | unknown>,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is not equal to any of the provided values
     * or expressions.
     *
     * ```typescript
     * // Check if the 'status' field is neither "pending" nor the value of 'rejectedStatus'
     * notEqualAny("status", [constant("pending"), field("rejectedStatus")]);
     * ```
     *
     * @param fieldName The field name to compare.
     * @param values The values to check against.
     * @returns A new {@code Expression} representing the 'NOT IN' comparison.
     */
    export function notEqualAny(
      fieldName: string,
      values: Array<Expression | unknown>,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a given element expression is not equal to any of the values
     * contained within an array expression. This is equivalent to a "NOT IN" operation.
     *
     * ```typescript
     * // Check if the 'status' field is not present in the array stored in the 'invalidStatuses' field.
     * notEqualAny(field("status"), field("invalidStatuses"));
     * ```
     *
     * @param element The expression representing the value to check.
     * @param arrayExpression An expression that evaluates to an array of values to check against.
     * @returns A new {@code BooleanExpression} representing the 'NOT IN' comparison.
     */
    export function notEqualAny(
      element: Expression,
      arrayExpression: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value is not equal to any of the values in the evaluated expression.
     *
     * ```typescript
     * // Check if the 'status' field is not equal to any value in the field 'rejectedStatuses'
     * notEqualAny("status", field("rejectedStatuses"));
     * ```
     *
     * @param fieldName The field name to compare.
     * @param arrayExpression The values to check against.
     * @returns A new {@code Expression} representing the 'NOT IN' comparison.
     */
    export function notEqualAny(
      fieldName: string,
      arrayExpression: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that performs a logical 'XOR' (exclusive OR) operation on two or more Boolean expressions.
     * The result is true if an odd number of the input expressions evaluate to true, and false otherwise.
     *
     * ```typescript
     * // Check if exactly one of the conditions is true: 'age' greater than 18, 'city' is "London",
     * // or 'status' is "active".
     * const condition = xor(
     *     greaterThan("age", 18),
     *     equal("city", "London"),
     *     equal("status", "active")
     * );
     * ```
     *
     * @param first The first Boolean expression.
     * @param second The second Boolean expression.
     * @param additionalConditions Optional: Additional Boolean expressions to include in the XOR operation.
     * @returns A new `BooleanExpression` representing the logical 'XOR' operation.
     */
    export function xor(
      first: BooleanExpression,
      second: BooleanExpression,
      ...additionalConditions: BooleanExpression[]
    ): BooleanExpression;
    /**
     * Creates a conditional expression that evaluates to a 'then' expression if a condition is true
     * and an 'else' expression if the condition is false.
     *
     * ```typescript
     * // If 'age' is greater than 18, return "Adult"; otherwise, return "Minor".
     * conditional(
     *     greaterThan("age", 18), constant("Adult"), constant("Minor"));
     * ```
     *
     * @param condition The condition to evaluate.
     * @param thenExpr The expression to evaluate if the condition is true.
     * @param elseExpr The expression to evaluate if the condition is false.
     * @returns A new {@code Expression} representing the conditional expression.
     */
    export function conditional(
      condition: BooleanExpression,
      thenExpr: Expression,
      elseExpr: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that negates a filter condition.
     *
     * ```typescript
     * // Find documents where the 'completed' field is NOT true
     * not(equal("completed", true));
     * ```
     *
     * @param booleanExpr The filter condition to negate.
     * @returns A new {@code Expression} representing the negated filter condition.
     */
    export function not(booleanExpr: BooleanExpression): BooleanExpression;
    /**
     * Creates an expression that returns the largest value between multiple input
     * expressions or literal values. Based on Firestore's value type ordering.
     *
     * ```typescript
     * // Returns the largest value between the 'field1' field, the 'field2' field,
     * // and 1000
     * logicalMaximum(field("field1"), field("field2"), 1000);
     * ```
     *
     * @param first The first operand expression.
     * @param second The second expression or literal.
     * @param others Optional additional expressions or literals.
     * @returns A new {@code Expression} representing the logical max operation.
     */
    export function logicalMaximum(
      first: Expression,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;
    /**
     * Creates an expression that returns the largest value between multiple input
     * expressions or literal values. Based on Firestore's value type ordering.
     *
     * ```typescript
     * // Returns the largest value between the 'field1' field, the 'field2' field,
     * // and 1000.
     * logicalMaximum("field1", field("field2"), 1000);
     * ```
     *
     * @param fieldName The first operand field name.
     * @param second The second expression or literal.
     * @param others Optional additional expressions or literals.
     * @returns A new {@code Expression} representing the logical max operation.
     */
    export function logicalMaximum(
      fieldName: string,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;
    /**
     * Creates an expression that returns the smallest value between multiple input
     * expressions and literal values. Based on Firestore's value type ordering.
     *
     * ```typescript
     * // Returns the smallest value between the 'field1' field, the 'field2' field,
     * // and 1000.
     * logicalMinimum(field("field1"), field("field2"), 1000);
     * ```
     *
     * @param first The first operand expression.
     * @param second The second expression or literal.
     * @param others Optional additional expressions or literals.
     * @returns A new {@code Expression} representing the logical min operation.
     */
    export function logicalMinimum(
      first: Expression,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;
    /**
     * Creates an expression that returns the smallest value between a field's value
     * and other input expressions or literal values.
     * Based on Firestore's value type ordering.
     *
     * ```typescript
     * // Returns the smallest value between the 'field1' field, the 'field2' field,
     * // and 1000.
     * logicalMinimum("field1", field("field2"), 1000);
     * ```
     *
     * @param fieldName The first operand field name.
     * @param second The second expression or literal.
     * @param others Optional additional expressions or literals.
     * @returns A new {@code Expression} representing the logical min operation.
     */
    export function logicalMinimum(
      fieldName: string,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;

    /**
     * Creates an expression that checks if a field exists.
     *
     * ```typescript
     * // Check if the document has a field named "phoneNumber"
     * exists(field("phoneNumber"));
     * ```
     *
     * @param value An expression representing the field to check for existence.
     * @returns A new {@code BooleanExpression} representing the 'exists' check.
     */
    export function exists(value: Expression): BooleanExpression;
    /**
     * Creates an expression that checks if a field exists.
     *
     * ```typescript
     * // Check if the document has a field named "phoneNumber"
     * exists("phoneNumber");
     * ```
     *
     * @param fieldName The field name to check.
     * @returns A new {@code Expression} representing the 'exists' check.
     */
    export function exists(fieldName: string): BooleanExpression;

    /**
     * Creates an expression that reverses a string.
     *
     * ```typescript
     * // Reverse the value of the 'myString' field.
     * reverse(field("myString"));
     * ```
     *
     * @param stringExpression An expression evaluating to a string value, which will be reversed.
     * @returns A new {@code Expression} representing the reversed string.
     */
    export function reverse(stringExpression: Expression): FunctionExpression;
    /**
     * Creates an expression that reverses a string value in the specified field.
     *
     * ```typescript
     * // Reverse the value of the 'myString' field.
     * reverse("myString");
     * ```
     *
     * @param field The name of the field representing the string to reverse.
     * @returns A new {@code Expression} representing the reversed string.
     */
    export function reverse(field: string): FunctionExpression;
    /**
     * Creates an expression that filters an array using a provided alias and predicate expression.
     *
     * ```typescript
     * // Get a filtered array of the 'scores' field containing only elements greater than 50.
     * arrayFilter("scores", "score", greaterThan(variable("score"), 50));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param alias The variable name to use for each element.
     * @param filter The predicate boolean expression to evaluate for each element.
     * @returns A new {@code Expression} representing the filtered array.
     */
    export function arrayFilter(
      fieldName: string,
      alias: string,
      filter: BooleanExpression,
    ): FunctionExpression;

    /**
     * Creates an expression that filters an array using a provided alias and predicate expression.
     *
     * ```typescript
     * // Filter "scores" to include only values greater than 50
     * arrayFilter(field("scores"), "score", greaterThan(variable("score"), 50));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param alias The variable name to use for each element.
     * @param filter The predicate boolean expression to evaluate for each element.
     * @returns A new {@code Expression} representing the filtered array.
     */
    export function arrayFilter(
      arrayExpression: Expression,
      alias: string,
      filter: BooleanExpression,
    ): FunctionExpression;

    /**
     * Creates an expression that transforms an array field using a provided alias and lambda expression.
     *
     * ```typescript
     * // Transform "scores" array by adding 10 to each score
     * arrayTransform("scores", "score", add(variable("score"), 10));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param elementAlias The variable name to use for each element.
     * @param transform The lambda expression used to transform the elements.
     * @returns A new `Expression` representing the transformed array.
     */
    export function arrayTransform(
      fieldName: string,
      elementAlias: string,
      transform: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that transforms an array using a provided alias and lambda expression.
     *
     * ```typescript
     * // Transform "scores" array by adding 10 to each score
     * arrayTransform(field("scores"), "score", add(variable("score"), 10));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param elementAlias The variable name to use for each element.
     * @param transform The lambda expression used to transform the elements.
     * @returns A new `Expression` representing the transformed array.
     */
    export function arrayTransform(
      arrayExpression: Expression,
      elementAlias: string,
      transform: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that transforms an array field using provided aliases and lambda expression with an index.
     *
     * ```typescript
     * // Transform "scores" array by adding the index to each score
     * arrayTransformWithIndex("scores", "score", "i", add(variable("score"), variable("i")));
     * ```
     *
     * @param fieldName The name of the field containing the array.
     * @param elementAlias The variable name to use for each element.
     * @param indexAlias The variable name to use for the current index.
     * @param transform The lambda expression used to transform the elements.
     * @returns A new `Expression` representing the transformed array.
     */
    export function arrayTransformWithIndex(
      fieldName: string,
      elementAlias: string,
      indexAlias: string,
      transform: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that transforms an array using provided aliases and lambda expression with an index.
     *
     * ```typescript
     * // Transform "scores" array by adding the index to each score
     * arrayTransformWithIndex(field("scores"), "score", "i", add(variable("score"), variable("i")));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param elementAlias The variable name to use for each element.
     * @param indexAlias The variable name to use for the current index.
     * @param transform The expression used to transform the elements.
     * @returns A new `Expression` representing the transformed array.
     */
    export function arrayTransformWithIndex(
      arrayExpression: Expression,
      elementAlias: string,
      indexAlias: string,
      transform: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that returns a slice of an array from `offset` with `length` elements.
     *
     * ```typescript
     * // Get 5 elements from the 'items' array field starting from index 2
     * arraySlice("items", 2, 5);
     *
     * // Get n elements from the 'items' array field starting from index 2
     * arraySlice("items", 2, field("length"));
     * ```
     *
     * @param arrayName The name of the field containing the array.
     * @param offset The starting offset.
     * @param length The optional length of the slice.
     * @returns A new {@code Expression} representing the sliced array.
     */
    export function arraySlice(
      arrayName: string,
      offset: number | Expression,
      length?: number | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that returns a slice of an array from `offset` with `length` elements.
     *
     * ```typescript
     * // Get 5 elements from an array expression starting from index 2
     * arraySlice(field("items"), 2, 5);
     *
     * // Get n elements from an array expression starting from index 2
     * arraySlice(field("items"), 2, field("length"));
     * ```
     *
     * @param arrayExpression The expression representing the array.
     * @param offset The starting offset.
     * @param length The optional length of the slice.
     * @returns A new {@code Expression} representing the sliced array.
     */
    export function arraySlice(
      arrayExpression: Expression,
      offset: number | Expression,
      length?: number | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that reverses an array.
     *
     * ```typescript
     * // Reverse the value of the 'myArray' field.
     * arrayReverse(field("myArray"));
     * ```
     *
     * @param arrayExpression An expression evaluating to an array value, which will be reversed.
     * @returns A new {@code Expression} representing the reversed array.
     */
    export function arrayReverse(
      arrayExpression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that reverses an array.
     *
     * ```typescript
     * // Reverse the value of the 'myArray' field.
     * arrayReverse("myArray");
     * ```
     *
     * @param fieldName The name of the field to reverse.
     * @returns A new {@code Expression} representing the reversed array.
     */
    export function arrayReverse(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that computes the ceiling of a numeric value.
     *
     * ```typescript
     * // Compute the ceiling of the 'price' field.
     * ceil(field("price"));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which the ceiling will be computed for.
     * @returns A new {@code Expression} representing the ceiling of the numeric value.
     */
    export function ceil(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that computes the ceiling of a numeric value.
     *
     * ```typescript
     * // Compute the ceiling of the 'price' field.
     * ceil("price");
     * ```
     *
     * @param fieldName The name of the field to compute the ceiling of.
     * @returns A new {@code Expression} representing the ceiling of the numeric value.
     */
    export function ceil(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that computes `e` (Euler's number) raised to the power of the given expression's result.
     *
     * This function is equivalent to `Math.exp()` in JavaScript.
     *
     * ```typescript
     * // Compute e to the power of 2.
     * exp(constant(2));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which will be used as the exponent for `e`.
     * @returns A new {@link FunctionExpression} representing `e` raised to the power of the input expression's result.
     */
    export function exp(expression: Expression): FunctionExpression;

    /**
     * Creates an expression that computes 'e' (Euler's number) raised to the power of the specified field's numeric value.
     *
     * ```typescript
     * // Compute 'e' to the power of the 'value' field.
     * exp('value');
     * ```
     *
     * @param fieldName The name of the field whose numeric value will be used as the exponent.
     * @returns A new {@code FunctionExpression} representing 'e' raised to the power of the numeric value.
     */
    export function exp(fieldName: string): FunctionExpression;
    /**
     * Creates an aggregation that counts the number of distinct values of an evaluated expression.
     *
     * @param expression The expression to count distinct values of.
     * @returns A new `AggregateFunction` representing the 'count_distinct' aggregation.
     */
    export function countDistinct(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that counts the number of distinct values of a field.
     *
     * @param fieldName The field to count distinct values of.
     * @returns A new `AggregateFunction` representing the 'count_distinct' aggregation.
     */
    export function countDistinct(fieldName: string): AggregateFunction;
    /**
     * Creates an expression that calculates the byte length of a string in UTF-8, or just the length of a Blob.
     *
     * ```typescript
     * // Calculate the length of the 'myString' field in bytes.
     * byteLength(field("myString"));
     * ```
     *
     * @param expr The expression representing the string.
     * @returns A new {@code Expression} representing the length of the string in bytes.
     */
    export function byteLength(expr: Expression): FunctionExpression;
    /**
     * Creates an expression that calculates the length of a string represented by a field in UTF-8 bytes, or just the length of a Blob.
     *
     * ```typescript
     * // Calculate the length of the 'myString' field in bytes.
     * byteLength("myString");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @returns A new {@code Expression} representing the length of the string in bytes.
     */
    export function byteLength(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that calculates the character length of a string field in UTF8.
     *
     * ```typescript
     * // Get the character length of the 'name' field in UTF-8.
     * charLength("name");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @returns A new {@code Expression} representing the length of the string.
     */
    export function charLength(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that calculates the character length of a string expression in UTF-8.
     *
     * ```typescript
     * // Get the character length of the 'name' field in UTF-8.
     * charLength(field("name"));
     * ```
     *
     * @param stringExpression The expression representing the string to calculate the length of.
     * @returns A new {@code Expression} representing the length of the string.
     */
    export function charLength(
      stringExpression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that performs a case-sensitive wildcard string comparison against a
     * field.
     *
     * ```typescript
     * // Check if the 'title' field contains the string "guide"
     * like("title", "%guide%");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param pattern The pattern to search for. You can use "%" as a wildcard character.
     * @returns A new {@code Expression} representing the 'like' comparison.
     */
    export function like(fieldName: string, pattern: string): BooleanExpression;
    /**
     * Creates an expression that performs a case-sensitive wildcard string comparison against a
     * field.
     *
     * ```typescript
     * // Check if the 'title' field contains the string "guide"
     * like("title", field("pattern"));
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param pattern The pattern to search for. You can use "%" as a wildcard character.
     * @returns A new {@code Expression} representing the 'like' comparison.
     */
    export function like(
      fieldName: string,
      pattern: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that performs a case-sensitive wildcard string comparison.
     *
     * ```typescript
     * // Check if the 'title' field contains the string "guide"
     * like(field("title"), "%guide%");
     * ```
     *
     * @param stringExpression The expression representing the string to perform the comparison on.
     * @param pattern The pattern to search for. You can use "%" as a wildcard character.
     * @returns A new {@code BooleanExpression} representing the 'like' comparison.
     */
    export function like(
      stringExpression: Expression,
      pattern: string,
    ): BooleanExpression;
    /**
     * Creates an expression that performs a case-sensitive wildcard string comparison.
     *
     * ```typescript
     * // Check if the 'title' field contains the string "guide"
     * like(field("title"), field("pattern"));
     * ```
     *
     * @param stringExpression The expression representing the string to perform the comparison on.
     * @param pattern The pattern to search for. You can use "%" as a wildcard character.
     * @returns A new {@code Expression} representing the 'like' comparison.
     */
    export function like(
      stringExpression: Expression,
      pattern: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string field contains a specified regular expression as
     * a substring.
     *
     * ```typescript
     * // Check if the 'description' field contains "example" (case-insensitive)
     * regexContains("description", "(?i)example");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param pattern The regular expression to use for the search.
     * @returns A new {@code Expression} representing the 'contains' comparison.
     */
    export function regexContains(
      fieldName: string,
      pattern: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string field contains a specified regular expression as
     * a substring.
     *
     * ```typescript
     * // Check if the 'description' field contains "example" (case-insensitive)
     * regexContains("description", field("pattern"));
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param pattern The regular expression to use for the search.
     * @returns A new {@code Expression} representing the 'contains' comparison.
     */
    export function regexContains(
      fieldName: string,
      pattern: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a string expression contains a specified regular
     * expression as a substring.
     *
     * ```typescript
     * // Check if the 'description' field contains "example" (case-insensitive)
     * regexContains(field("description"), "(?i)example");
     * ```
     *
     * @param stringExpression The expression representing the string to perform the regex comparison on.
     * @param pattern The regular expression string to search for within the `stringExpression`.
     * @returns A new {@code BooleanExpression} representing the result of the regex contains comparison.
     */
    export function regexContains(
      stringExpression: Expression,
      pattern: string,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a string expression contains a specified regular
     * expression as a substring.
     *
     * ```typescript
     * // Check if the 'description' field contains a pattern from another field.
     * regexContains(field("description"), field("searchPattern"));
     *
     * // Check if the 'productName' field contains "apple" or "orange".
     * regexContains(field("productName"), "apple|orange");
     * ```
     *
     * @param stringExpression The expression representing the string to perform the comparison on.
     * @param pattern The regular expression to use for the search.
     * @returns A new {@code BooleanExpression} representing the 'contains' comparison.
     */
    export function regexContains(
      stringExpression: Expression,
      pattern: Expression,
    ): BooleanExpression;

    /**
     *
     * Creates an expression that returns the first substring of a string field that matches a
     * specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract the domain name from an email field
     * regexFind("email", "@[A-Za-z0-9.-]+");
     * ```
     *
     * @param fieldName - The name of the field containing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} representing the regular expression find function.
     */
    export function regexFind(
      fieldName: string,
      pattern: string,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that returns the first substring of a string field that matches a
     * specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract a substring from 'email' based on a pattern stored in another field
     * regexFind("email", field("pattern"));
     * ```
     *
     * @param fieldName - The name of the field containing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} representing the regular expression find function.
     */
    export function regexFind(
      fieldName: string,
      pattern: Expression,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that returns the first substring of a string expression that matches
     * a specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract the domain from a lower-cased email address
     * regexFind(field("email"), "@[A-Za-z0-9.-]+");
     * ```
     *
     * @param stringExpression - The expression representing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} representing the regular expression find function.
     */
    export function regexFind(
      stringExpression: Expression,
      pattern: string,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that returns the first substring of a string expression that matches
     * a specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract a substring based on a dynamic pattern field
     * regexFind(field("email"), field("pattern"));
     * ```
     *
     * @param stringExpression - The expression representing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} representing the regular expression find function.
     */
    export function regexFind(
      stringExpression: Expression,
      pattern: Expression,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that evaluates to a list of all substrings in a string field that
     * match a specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract all hashtags from a post content field
     * regexFindAll("content", "#[A-Za-z0-9_]+");
     * ```
     *
     * @param fieldName - The name of the field containing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} that evaluates to an array of matched substrings.
     */
    export function regexFindAll(
      fieldName: string,
      pattern: string,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that evaluates to a list of all substrings in a string field that
     * match a specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract all matches from 'content' based on a pattern stored in another field
     * regexFindAll("content", field("pattern"));
     * ```
     *
     * @param fieldName - The name of the field containing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} that evaluates to an array of matched substrings.
     */
    export function regexFindAll(
      fieldName: string,
      pattern: Expression,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that evaluates to a list of all substrings in a string expression
     * that match a specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract all mentions from a lower-cased comment
     * regexFindAll(field("comment"), "@[A-Za-z0-9_]+");
     * ```
     *
     * @param stringExpression - The expression representing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} that evaluates to an array of matched substrings.
     */
    export function regexFindAll(
      stringExpression: Expression,
      pattern: string,
    ): FunctionExpression;
    /**
     *
     * Creates an expression that evaluates to a list of all substrings in a string expression
     * that match a specified regular expression.
     *
     * This expression uses the {@link https://github.com/google/re2/wiki/Syntax | RE2} regular expression syntax.
     *
     * @example
     * ```typescript
     * // Extract all matches based on a dynamic pattern expression
     * regexFindAll(field("comment"), field("pattern"));
     * ```
     *
     * @param stringExpression - The expression representing the string to search.
     * @param pattern - The regular expression to search for.
     * @returns A new {@link Expression} that evaluates to an array of matched substrings.
     */
    export function regexFindAll(
      stringExpression: Expression,
      pattern: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that checks if a string field matches a specified regular expression.
     *
     * ```typescript
     * // Check if the 'email' field matches a valid email pattern
     * regexMatch("email", "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param pattern The regular expression to use for the match.
     * @returns A new {@code Expression} representing the regular expression match.
     */
    export function regexMatch(
      fieldName: string,
      pattern: string,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a string field matches a specified regular expression.
     *
     * The `pattern` parameter is an `Expression` that evaluates to the regular expression string.
     * This allows for dynamic regex patterns, such as those stored in other fields.
     *
     * ```typescript
     * // Check if the 'email' field matches a regex pattern stored in the 'emailValidationRegex' field.
     * regexMatch("email", field("emailValidationRegex"));
     * ```
     *
     * @param fieldName The name of the field containing the string value to be matched.
     * @param pattern An `Expression` that evaluates to the regular expression string to use for the match.
     * @returns A new `BooleanExpression` representing the result of the regular expression match.
     */
    export function regexMatch(
      fieldName: string,
      pattern: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a string expression matches a specified regular
     * expression.
     *
     * ```typescript
     * // Check if the 'email' field matches a valid email pattern
     * regexMatch(field("email"), "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
     * ```
     *
     * @param stringExpression An expression that evaluates to the string to match against.
     * @param pattern The regular expression to use for the match.
     * @returns A new `BooleanExpression` representing the result of the regular expression match.
     */
    export function regexMatch(
      stringExpression: Expression,
      pattern: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string expression matches a specified regular
     * expression.
     *
     * ```typescript
     * // Check if the 'email' field matches a valid email pattern
     * regexMatch(field("email"), field("pattern"));
     * ```
     *
     * @param stringExpression The expression representing the string to match against.
     * @param pattern The regular expression to use for the match.
     * @returns A new {@code Expression} representing the regular expression match.
     */
    export function regexMatch(
      stringExpression: Expression,
      pattern: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string field contains a specified substring.
     *
     * ```typescript
     * // Check if the 'description' field contains "example".
     * stringContains("description", "example");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param substring The substring to search for.
     * @returns A new {@code Expression} representing the 'contains' comparison.
     */
    export function stringContains(
      fieldName: string,
      substring: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string field contains a substring specified by an expression.
     *
     * ```typescript
     * // Check if the 'description' field contains the value of the 'keyword' field.
     * stringContains("description", field("keyword"));
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @param substring The expression representing the substring to search for.
     * @returns A new {@code Expression} representing the 'contains' comparison.
     */
    export function stringContains(
      fieldName: string,
      substring: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string expression contains a specified substring.
     *
     * ```typescript
     * // Check if the 'description' field contains "example".
     * stringContains(field("description"), "example");
     * ```
     *
     * @param stringExpression The expression representing the string to perform the comparison on.
     * @param substring The substring to search for.
     * @returns A new {@code Expression} representing the 'contains' comparison.
     */
    export function stringContains(
      stringExpression: Expression,
      substring: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string expression contains a substring specified by another expression.
     *
     * ```typescript
     * // Check if the 'description' field contains the value of the 'keyword' field.
     * stringContains(field("description"), field("keyword"));
     * ```
     *
     * @param stringExpression The expression representing the string to perform the comparison on.
     * @param substring The expression representing the substring to search for.
     * @returns A new {@code Expression} representing the 'contains' comparison.
     */
    export function stringContains(
      stringExpression: Expression,
      substring: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value starts with a given prefix.
     *
     * ```typescript
     * // Check if the 'name' field starts with "Mr."
     * startsWith("name", "Mr.");
     * ```
     *
     * @param fieldName The field name to check.
     * @param prefix The prefix to check for.
     * @returns A new {@code Expression} representing the 'starts with' comparison.
     */
    export function startsWith(
      fieldName: string,
      prefix: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value starts with a given prefix.
     *
     * ```typescript
     * // Check if the 'fullName' field starts with the value of the 'firstName' field
     * startsWith("fullName", field("firstName"));
     * ```
     *
     * @param fieldName The field name to check.
     * @param prefix The expression representing the prefix.
     * @returns A new {@code Expression} representing the 'starts with' comparison.
     */
    export function startsWith(
      fieldName: string,
      prefix: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a string value, represented by an expression, starts with a given prefix.
     *
     * ```typescript
     * // Check if the 'name' field starts with "Mr."
     * startsWith(field("name"), "Mr.");
     * ```
     *
     * @param stringExpression An expression that evaluates to a string, which will be checked for the prefix.
     * @param prefix The string prefix to check for.
     * @returns A new {@code BooleanExpression} representing the 'starts with' comparison.
     */
    export function startsWith(
      stringExpression: Expression,
      prefix: string,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a string expression starts with a given prefix expression.
     *
     * ```typescript
     * // Check if the 'fullName' field starts with the value of the 'prefix' field.
     * startsWith(field("fullName"), field("prefix"));
     * ```
     *
     * @param stringExpression The string expression to check.
     * @param prefix The prefix expression to check for.
     * @returns A new {@code BooleanExpression} representing the 'starts with' comparison.
     */
    export function startsWith(
      stringExpression: Expression,
      prefix: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that checks if a field's value ends with a given suffix.
     *
     * ```typescript
     * // Check if the 'filename' field ends with ".txt"
     * endsWith("filename", ".txt");
     * ```
     *
     * @param fieldName The field name to check.
     * @param suffix The suffix to check for.
     * @returns A new `BooleanExpression` representing the 'ends with' comparison.
     */
    export function endsWith(
      fieldName: string,
      suffix: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a field's value ends with a given postfix.
     *
     * ```typescript
     * // Check if the 'url' field ends with the value of the 'extension' field
     * endsWith("url", field("extension"));
     * ```
     *
     * @param fieldName The field name to check.
     * @param suffix The expression representing the postfix.
     * @returns A new {@code Expression} representing the 'ends with' comparison.
     */
    export function endsWith(
      fieldName: string,
      suffix: Expression,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string expression ends with a given postfix.
     *
     * ```typescript
     * // Check if the result of concatenating 'firstName' and 'lastName' fields ends with "Jr."
     * endsWith(field("fullName"), "Jr.");
     * ```
     *
     * @param stringExpression The expression to check.
     * @param suffix The postfix to check for.
     * @returns A new {@code Expression} representing the 'ends with' comparison.
     */
    export function endsWith(
      stringExpression: Expression,
      suffix: string,
    ): BooleanExpression;
    /**
     * Creates an expression that checks if a string expression ends with a given postfix.
     *
     * ```typescript
     * // Check if the result of concatenating 'firstName' and 'lastName' fields ends with "Jr."
     * endsWith(field("fullName"), constant("Jr."));
     * ```
     *
     * @param stringExpression The expression to check.
     * @param suffix The postfix to check for.
     * @returns A new {@code Expression} representing the 'ends with' comparison.
     */
    export function endsWith(
      stringExpression: Expression,
      suffix: Expression,
    ): BooleanExpression;

    /**
     * Creates an expression that converts a string field to lowercase.
     *
     * ```typescript
     * // Convert the 'name' field to lowercase
     * toLower("name");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @returns A new {@code Expression} representing the lowercase string.
     */
    export function toLower(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that converts a string expression to lowercase.
     *
     * ```typescript
     * // Convert the 'name' field to lowercase
     * toLower(field("name"));
     * ```
     *
     * @param stringExpression The expression representing the string to convert to lowercase.
     * @returns A new {@code Expression} representing the lowercase string.
     */
    export function toLower(stringExpression: Expression): FunctionExpression;
    /**
     * Creates an expression that converts a string field to uppercase.
     *
     * ```typescript
     * // Convert the 'title' field to uppercase
     * toUpper("title");
     * ```
     *
     * @param fieldName The name of the field containing the string.
     * @returns A new {@code Expression} representing the uppercase string.
     */
    export function toUpper(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that converts a string expression to uppercase.
     *
     * ```typescript
     * // Convert the 'title' field to uppercase
     * toUpper(field("title"));
     * ```
     *
     * @param stringExpression The expression representing the string to convert to uppercase.
     * @returns A new {@code FunctionExpression} representing the uppercase string.
     */
    export function toUpper(stringExpression: Expression): FunctionExpression;
    /**
     *
     * Creates an expression that removes leading and trailing whitespace from a string or byte array.
     *
     * ```typescript
     * // Trim whitespace from the 'userInput' field
     * trim("userInput");
     *
     * // Trim quotes from the 'userInput' field
     * trim("userInput", '"');
     * ```
     *
     * @param fieldName The name of the field containing the string or byte array.
     * @param valueToTrim Optional This parameter is treated as a set of characters or bytes that will be
     * trimmed from the input. If not specified, then whitespace will be trimmed.
     * @returns A new {@code Expr} representing the trimmed string.
     */
    export function trim(
      fieldName: string,
      valueToTrim?: string | Expression,
    ): FunctionExpression;

    /**
     *
     * Creates an expression that removes leading and trailing characters from a string or byte array expression.
     *
     * ```typescript
     * // Trim whitespace from the 'userInput' field
     * trim(field("userInput"));
     *
     * // Trim quotes from the 'userInput' field
     * trim(field("userInput"), '"');
     * ```
     *
     * @param stringExpression The expression representing the string or byte array to trim.
     * @param valueToTrim Optional This parameter is treated as a set of characters or bytes that will be
     * trimmed from the input. If not specified, then whitespace will be trimmed.
     * @returns A new {@code Expr} representing the trimmed string or byte array.
     */
    export function trim(
      stringExpression: Expression,
      valueToTrim?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that concatenates multiple string values, which can be field names or other expressions that evaluate to strings, along with string literals.
     *
     * ```typescript
     * // Combine the 'firstName' field, a space, and the 'lastName' field into a single string.
     * stringConcat("firstName", " ", field("lastName"));
     * ```
     *
     * @param fieldName The name of the field to use as the initial string value for concatenation.
     * @param secondString An expression or string literal to concatenate.
     * @param otherStrings Optional additional expressions or literals (typically strings) to concatenate.
     * @returns A new {@code FunctionExpression} representing the concatenated string.
     */
    export function stringConcat(
      fieldName: string,
      secondString: Expression | string,
      ...otherStrings: Array<Expression | string>
    ): FunctionExpression;
    /**
     * Creates an expression that concatenates string expressions together.
     *
     * ```typescript
     * // Combine the 'firstName', " ", and 'lastName' fields into a single string
     * stringConcat(field("firstName"), " ", field("lastName"));
     * ```
     *
     * @param firstString The initial string expression to concatenate to.
     * @param secondString An expression or string literal to concatenate.
     * @param otherStrings Optional additional expressions or literals (typically strings) to concatenate.
     * @returns A new {@code Expression} representing the concatenated string.
     */
    export function stringConcat(
      firstString: Expression,
      secondString: Expression | string,
      ...otherStrings: Array<Expression | string>
    ): FunctionExpression;
    /**
     * Accesses a value from a map (object) field using the provided key.
     *
     * ```typescript
     * // Get the 'city' value from the 'address' map field
     * mapGet("address", "city");
     * ```
     *
     * @param fieldName The field name of the map field.
     * @param subField The key to access in the map.
     * @returns A new {@code Expression} representing the value associated with the given key in the map.
     */
    export function mapGet(
      fieldName: string,
      subField: string,
    ): FunctionExpression;
    /**
     * Accesses a value from a map (object) expression using the provided key.
     *
     * ```typescript
     * // Get the 'city' value from the 'address' map field
     * mapGet(field("address"), "city");
     * ```
     *
     * @param mapExpression The expression representing the map.
     * @param subField The key to access in the map.
     * @returns A new {@code Expression} representing the value associated with the given key in the map.
     */
    export function mapGet(
      mapExpression: Expression,
      subField: string,
    ): FunctionExpression;

    /**
     * Creates an expression that returns a new map with the specified entries added or updated.
     *
     * @remarks
     * This only performs shallow updates to the map. Setting a value to `null`
     * will retain the key with a `null` value. To remove a key entirely, use `mapRemove`.
     *
     * @example
     * ```typescript
     * // Set the 'city' to 'San Francisco' in the 'address' map field
     * mapSet("address", "city", "San Francisco");
     * ```
     *
     * @param mapField - The map field to set entries in.
     * @param key - The key to set. Must be a string or a constant string expression.
     * @param value - The value to set.
     * @param moreKeyValues - Additional key-value pairs to set.
     * @returns A new `Expression` representing the map with the entries set.
     */
    export function mapSet(
      mapField: string,
      key: string | Expression,
      value: unknown,
      ...moreKeyValues: unknown[]
    ): FunctionExpression;
    /**
     * Creates an expression that returns a new map with the specified entries added or updated.
     *
     * @remarks
     * This only performs shallow updates to the map. Setting a value to `null`
     * will retain the key with a `null` value. To remove a key entirely, use `mapRemove`.
     *
     * @example
     * ```typescript
     * // Set the 'city' to "San Francisco"
     * mapSet(map({"state": "California"}), "city", "San Francisco");
     * ```
     *
     * @param mapExpression - The expression representing the map.
     * @param key - The key to set. Must be a string or a constant string expression.
     * @param value - The value to set.
     * @param moreKeyValues - Additional key-value pairs to set.
     * @returns A new `Expression` representing the map with the entries set.
     */
    export function mapSet(
      mapExpression: Expression,
      key: string | Expression,
      value: unknown,
      ...moreKeyValues: unknown[]
    ): FunctionExpression;

    /**
     * Creates an expression that returns the keys of a map.
     *
     * @remarks
     * While the backend generally preserves insertion order, relying on the
     * order of the output array is not guaranteed and should be avoided.
     *
     * @example
     * ```typescript
     * // Get the keys of the 'address' map field
     * mapKeys("address");
     * ```
     *
     * @param mapField - The map field to get the keys of.
     * @returns A new `Expression` representing the keys of the map.
     */
    export function mapKeys(mapField: string): FunctionExpression;
    /**
     * Creates an expression that returns the keys of a map.
     *
     * @remarks
     * While the backend generally preserves insertion order, relying on the
     * order of the output array is not guaranteed and should be avoided.
     *
     * @example
     * ```typescript
     * // Get the keys of the map expression
     * mapKeys(map({"city": "San Francisco"}));
     * ```
     *
     * @param mapExpression - The expression representing the map to get the keys of.
     * @returns A new `Expression` representing the keys of the map.
     */
    export function mapKeys(mapExpression: Expression): FunctionExpression;

    /**
     * Creates an expression that returns the values of a map.
     *
     * @remarks
     * While the backend generally preserves insertion order, relying on the
     * order of the output array is not guaranteed and should be avoided.
     *
     * @example
     * ```typescript
     * // Get the values of the 'address' map field
     * mapValues("address");
     * ```
     *
     * @param mapField - The map field to get the values of.
     * @returns A new `Expression` representing the values of the map.
     */
    export function mapValues(mapField: string): FunctionExpression;
    /**
     * Creates an expression that returns the values of a map.
     *
     * @remarks
     * While the backend generally preserves insertion order, relying on the
     * order of the output array is not guaranteed and should be avoided.
     *
     * @example
     * ```typescript
     * // Get the values of the map expression
     * mapValues(map({"city": "San Francisco"}));
     * ```
     *
     * @param mapExpression - The expression representing the map to get the values of.
     * @returns A new `Expression` representing the values of the map.
     */
    export function mapValues(mapExpression: Expression): FunctionExpression;

    /**
     * Creates an expression that returns the entries of a map as an array of maps,
     * where each map contains a `"k"` property for the key and a `"v"` property for the value.
     * For example: `[{ k: "key1", v: "value1" }, ...]`.
     *
     * @remarks
     * While the backend generally preserves insertion order, relying on the
     * order of the output array is not guaranteed and should be avoided.
     *
     * @example
     * ```typescript
     * // Get the entries of the 'address' map field
     * mapEntries("address");
     * ```
     *
     * @param mapField - The map field to get the entries of.
     * @returns A new `Expression` representing the entries of the map.
     */
    export function mapEntries(mapField: string): FunctionExpression;
    /**
     * Creates an expression that returns the entries of a map as an array of maps,
     * where each map contains a `"k"` property for the key and a `"v"` property for the value.
     * For example: `[{ k: "key1", v: "value1" }, ...]`.
     *
     * @remarks
     * While the backend generally preserves insertion order, relying on the
     * order of the output array is not guaranteed and should be avoided.
     *
     * @example
     * ```typescript
     * // Get the entries of the map expression
     * mapEntries(map({"city": "San Francisco"}));
     * ```
     *
     * @param mapExpression - The expression representing the map to get the entries of.
     * @returns A new `Expression` representing the entries of the map.
     */
    export function mapEntries(mapExpression: Expression): FunctionExpression;

    /**
     * Creates an expression that gets a field from this map (object).
     *
     * @example
     * ```typescript
     * // Get the value of the "city" field in the "address" document.
     * getField(field("address"), "city")
     * ```
     *
     * @param expression The expression evaluating to the map from which the field will be extracted.
     * @param key The field to access in the document.
     * @returns A new `Expression` representing the value of the field in the document.
     */
    export function getField(expression: Expression, key: string): Expression;
    /**
     * Creates an expression that gets a field from this map (object).
     *
     * @example
     * ```typescript
     * // Get the value of the "city" field in the "address" document.
     * getField("address", "city")
     *
     * @param expression The expression evaluating to the map from which the field will be extracted.
     * @param keyExpr The expression representing the key to access in the document.
     * @returns A new `Expression` representing the value of the field in the document.
     */
    export function getField(
      expression: Expression,
      keyExpr: Expression,
    ): Expression;
    /**
     * Creates an expression that returns the value of a field from the document with the given field name.
     *
     * @example
     * ```typescript
     * // Get the value of the "city" field in the "address" document.
     * getField("address", "city")
     * ```
     *
     * @param fieldName The name of the field containing the map/document.
     * @param key The key to access.
     * @returns A new `Expression` representing the value of the field in the document.
     */
    export function getField(fieldName: string, key: string): Expression;
    /**
     * Creates an expression that returns the value of a field from the document with the given field name.
     *
     * @example
     * ```typescript
     * // Get the value of the "city" field in the "address" document.
     * getField("address", variable("addressField"))
     * ```
     *
     * @param fieldName The name of the field containing the map/document.
     * @param keyExpr The key expression to access.
     * @returns A new `Expression` representing the value of the field in the document.
     */
    export function getField(
      fieldName: string,
      keyExpr: Expression,
    ): Expression;

    /**
     * Creates an expression that retrieves the value of a variable bound via `define()`.
     *
     * @example
     * ```typescript
     * db.pipeline().collection("products")
     *   .define(
     *     field("price").multiply(0.9).as("discountedPrice"),
     *     field("stock").add(10).as("newStock")
     *   )
     *   .where(variable("discountedPrice").lessThan(100))
     *   .select(field("name"), variable("newStock"));
     * ```
     *
     * @param name - The name of the variable to retrieve.
     * @returns An `Expression` representing the variable's value.
     */
    export function variable(name: string): Expression;

    /**
     * Creates an expression that represents the current document being processed.
     *
     * @example
     * ```typescript
     * // Define the current document as a variable "doc"
     * firestore.pipeline().collection("books")
     *     .define(currentDocument().as("doc"))
     *     // Access a field from the defined document variable
     *     .select(variable("doc").getField("title"));
     * ```
     *
     * @returns An `Expression` representing the current document.
     */
    export function currentDocument(): Expression;

    /**
     * Creates an aggregation that counts the total number of stage inputs.
     *
     * ```typescript
     * // Count the total number of input documents
     * countAll().as("totalDocument");
     * ```
     *
     * @returns A new {@code AggregateFunction} representing the 'countAll' aggregation.
     */
    export function countAll(): AggregateFunction;
    /**
     * Creates an aggregation that counts the number of stage inputs with valid evaluations of the
     * provided expression.
     *
     * ```typescript
     * // Count the number of items where the price is greater than 10
     * count(field("price").greaterThan(10)).as("expensiveItemCount");
     * ```
     *
     * @param expression The expression to count.
     * @returns A new {@code AggregateFunction} representing the 'count' aggregation.
     */
    export function count(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that counts the number of stage inputs where the input field exists.
     *
     * ```typescript
     * // Count the total number of products
     * count("productId").as("totalProducts");
     * ```
     *
     * @param fieldName The name of the field to count.
     * @returns A new {@code AggregateFunction} representing the 'count' aggregation.
     */
    export function count(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that calculates the sum of values from an expression across multiple
     * stage inputs.
     *
     * ```typescript
     * // Calculate the total revenue from a set of orders
     * sum(field("orderAmount")).as("totalRevenue");
     * ```
     *
     * @param expression The expression to sum up.
     * @returns A new {@code AggregateFunction} representing the 'sum' aggregation.
     */
    export function sum(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that calculates the sum of a field's values across multiple stage
     * inputs.
     *
     * ```typescript
     * // Calculate the total revenue from a set of orders
     * sum("orderAmount").as("totalRevenue");
     * ```
     *
     * @param fieldName The name of the field containing numeric values to sum up.
     * @returns A new {@code AggregateFunction} representing the 'sum' aggregation.
     */
    export function sum(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that calculates the average (mean) of values from an expression across
     * multiple stage inputs.
     *
     * ```typescript
     * // Calculate the average age of users
     * average(field("age")).as("averageAge");
     * ```
     *
     * @param expression The expression representing the values to average.
     * @returns A new {@code AggregateFunction} representing the 'average' aggregation.
     */
    export function average(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that calculates the average (mean) of a field's values across multiple
     * stage inputs.
     *
     * ```typescript
     * // Calculate the average age of users
     * average("age").as("averageAge");
     * ```
     *
     * @param fieldName The name of the field containing numeric values to average.
     * @returns A new {@code AggregateFunction} representing the 'average' aggregation.
     */
    export function average(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that finds the minimum value of an expression across multiple stage
     * inputs.
     *
     * ```typescript
     * // Find the lowest price of all products
     * minimum(field("price")).as("lowestPrice");
     * ```
     *
     * @param expression The expression to find the minimum value of.
     * @returns A new {@code AggregateFunction} representing the 'min' aggregation.
     */
    export function minimum(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that finds the minimum value of a field across multiple stage inputs.
     *
     * ```typescript
     * // Find the lowest price of all products
     * minimum("price").as("lowestPrice");
     * ```
     *
     * @param fieldName The name of the field to find the minimum value of.
     * @returns A new {@code AggregateFunction} representing the 'min' aggregation.
     */
    export function minimum(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that finds the maximum value of an expression across multiple stage
     * inputs.
     *
     * ```typescript
     * // Find the highest score in a leaderboard
     * maximum(field("score")).as("highestScore");
     * ```
     *
     * @param expression The expression to find the maximum value of.
     * @returns A new {@code AggregateFunction} representing the 'max' aggregation.
     */
    export function maximum(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that finds the maximum value of a field across multiple stage inputs.
     *
     * ```typescript
     * // Find the highest score in a leaderboard
     * maximum("score").as("highestScore");
     * ```
     *
     * @param fieldName The name of the field to find the maximum value of.
     * @returns A new {@code AggregateFunction} representing the 'max' aggregation.
     */
    export function maximum(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that finds the first value of an expression across multiple stage
     * inputs.
     *
     * @example
     * ```typescript
     * // Find the first value of the 'rating' field
     * first(field("rating")).as("firstRating");
     * ```
     *
     * @param expression The expression to find the first value of.
     * @returns A new {@code AggregateFunction} representing the 'first' aggregation.
     */
    export function first(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that finds the first value of a field across multiple stage inputs.
     *
     * @example
     * ```typescript
     * // Find the first value of the 'rating' field
     * first("rating").as("firstRating");
     * ```
     *
     * @param fieldName The name of the field to find the first value of.
     * @returns A new {@code AggregateFunction} representing the 'first' aggregation.
     */
    export function first(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that finds the last value of an expression across multiple stage
     * inputs.
     *
     * @example
     * ```typescript
     * // Find the last value of the 'rating' field
     * last(field("rating")).as("lastRating");
     * ```
     *
     * @param expression The expression to find the last value of.
     * @returns A new {@code AggregateFunction} representing the 'last' aggregation.
     */
    export function last(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that finds the last value of a field across multiple stage inputs.
     *
     * @example
     * ```typescript
     * // Find the last value of the 'rating' field
     * last("rating").as("lastRating");
     * ```
     *
     * @param fieldName The name of the field to find the last value of.
     * @returns A new {@code AggregateFunction} representing the 'last' aggregation.
     */
    export function last(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that collects all values of an expression across multiple stage
     * inputs into an array.
     *
     * @remarks
     * If the expression resolves to an absent value, it is converted to `null`.
     * The order of elements in the output array is not stable and shouldn't be relied upon.
     *
     * @example
     * ```typescript
     * // Collect all tags from books into an array
     * arrayAgg(field("tags")).as("allTags");
     * ```
     *
     * @param expression The expression to collect values from.
     * @returns A new {@code AggregateFunction} representing the 'array_agg' aggregation.
     */
    export function arrayAgg(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that collects all values of a field across multiple stage inputs
     * into an array.
     *
     * @remarks
     * If the expression resolves to an absent value, it is converted to `null`.
     * The order of elements in the output array is not stable and shouldn't be relied upon.
     *
     * @example
     * ```typescript
     * // Collect all tags from books into an array
     * arrayAgg("tags").as("allTags");
     * ```
     *
     * @param fieldName The name of the field to collect values from.
     * @returns A new {@code AggregateFunction} representing the 'array_agg' aggregation.
     */
    export function arrayAgg(fieldName: string): AggregateFunction;
    /**
     * Creates an aggregation that collects all distinct values of an expression across multiple stage
     * inputs into an array.
     *
     * @remarks
     * If the expression resolves to an absent value, it is converted to `null`.
     * The order of elements in the output array is not stable and shouldn't be relied upon.
     *
     * @example
     * ```typescript
     * // Collect all distinct tags from books into an array
     * arrayAggDistinct(field("tags")).as("allDistinctTags");
     * ```
     * @param expression The expression to collect values from.
     * @returns A new {@code AggregateFunction} representing the 'array_agg_distinct' aggregation.
     */
    export function arrayAggDistinct(expression: Expression): AggregateFunction;
    /**
     * Creates an aggregation that collects all distinct values of a field across multiple stage inputs
     * into an array.
     *
     * @remarks
     * If the expression resolves to an absent value, it is converted to `null`.
     * The order of elements in the output array is not stable and shouldn't be relied upon.
     *
     * @example
     * ```typescript
     * // Collect all distinct tags from books into an array
     * arrayAggDistinct("tags").as("allDistinctTags");
     * ```
     * @param fieldName The name of the field to collect values from.
     * @returns A new {@code AggregateFunction} representing the 'array_agg_distinct' aggregation.
     */
    export function arrayAggDistinct(fieldName: string): AggregateFunction;
    /**
     * Calculates the Cosine distance between a field's vector value and a literal vector value.
     *
     * ```typescript
     * // Calculate the Cosine distance between the 'location' field and a target location
     * cosineDistance("location", [37.7749, -122.4194]);
     * ```
     *
     * @param fieldName The name of the field containing the first vector.
     * @param vector The other vector (as an array of doubles) or {@link VectorValue} to compare against.
     * @returns A new {@code Expression} representing the Cosine distance between the two vectors.
     */
    export function cosineDistance(
      fieldName: string,
      vector: number[] | VectorValue,
    ): FunctionExpression;
    /**
     * Calculates the Cosine distance between a field's vector value and a vector expression.
     *
     * ```typescript
     * // Calculate the cosine distance between the 'userVector' field and the 'itemVector' field
     * cosineDistance("userVector", field("itemVector"));
     * ```
     *
     * @param fieldName The name of the field containing the first vector.
     * @param vectorExpression The other vector (represented as an Expression) to compare against.
     * @returns A new {@code Expression} representing the cosine distance between the two vectors.
     */
    export function cosineDistance(
      fieldName: string,
      vectorExpression: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that computes the cosine distance between two vectors.
     *
     * The second argument can be either a vector literal (an array of numbers) or another vector expression.
     *
     * ```typescript
     * // Calculate the cosine distance between the 'location' field and a target location literal.
     * cosineDistance(field("location"), [37.7749, -122.4194]);
     * ```
     *
     * ```typescript
     * // Calculate the cosine distance between two vector fields.
     * cosineDistance(field("vector1"), field("vector2"));
     * ```
     *
     * @param vectorExpression The first vector, represented as an `Expression` (e.g., a field path).
     * @param vector The second vector, which can be either a numeric array literal (`number[]`) or another `Expression`.
     * @returns A new {@link FunctionExpression} representing the cosine distance.
     */
    export function cosineDistance(
      vectorExpression: Expression,
      vector: number[] | Expression,
    ): FunctionExpression;
    /**
     * Calculates the Cosine distance between two vector expressions.
     *
     * ```typescript
     * // Calculate the cosine distance between the 'userVector' field and the 'itemVector' field
     * cosineDistance(field("userVector"), field("itemVector"));
     * ```
     *
     * @param vectorExpression The first vector (represented as an Expression) to compare against.
     * @param otherVectorExpression The other vector (represented as an Expression) to compare against.
     * @returns A new {@code Expression} representing the cosine distance between the two vectors.
     */
    export function cosineDistance(
      vectorExpression: Expression,
      otherVectorExpression: Expression,
    ): FunctionExpression;
    /**
     * Calculates the dot product between a field's vector value and a double array.
     *
     * ```typescript
     * // Calculate the dot product distance between a feature vector and a target vector
     * dotProduct("features", [0.5, 0.8, 0.2]);
     * ```
     *
     * @param fieldName The name of the field containing the first vector.
     * @param vector The other vector (as an array of doubles or VectorValue) to calculate with.
     * @returns A new {@code Expression} representing the dot product between the two vectors.
     */
    export function dotProduct(
      fieldName: string,
      vector: number[] | VectorValue,
    ): FunctionExpression;

    /**
     * Calculates the dot product between a field's vector value and a vector expression.
     *
     * ```typescript
     * // Calculate the dot product of 'docVector1' with 'docVector2'
     * dotProduct("docVector1", field("docVector2"));
     * ```
     *
     * @param fieldName The name of the field containing the first vector.
     * @param vectorExpression The other vector (represented as an Expression) to calculate with.
     * @returns A new {@code Expression} representing the dot product between the two vectors.
     */
    export function dotProduct(
      fieldName: string,
      vectorExpression: Expression,
    ): FunctionExpression;

    /**
     * Calculates the dot product between a vector expression and another vector (either a number array or a VectorValue).
     *
     * ```typescript
     * // Calculate the dot product between a feature vector and a target vector
     * dotProduct(field("features"), [0.5, 0.8, 0.2]);
     * ```
     *
     * @param vectorExpression The first vector (represented as an Expression) to calculate with.
     * @param vector The other vector (as an array of numbers or VectorValue) to calculate with.
     * @returns A new {@code Expression} representing the dot product between the two vectors.
     */
    export function dotProduct(
      vectorExpression: Expression,
      vector: number[] | VectorValue,
    ): FunctionExpression;
    /**
     * Calculates the dot product between two vector expressions.
     *
     * ```typescript
     * // Calculate the dot product between two document vectors: 'docVector1' and 'docVector2'
     * dotProduct(field("docVector1"), field("docVector2"));
     * ```
     *
     * @param vectorExpression The first vector (represented as an Expression) to calculate with.
     * @param otherVectorExpression The other vector (represented as an Expression) to calculate with.
     * @returns A new {@code Expression} representing the dot product between the two vectors.
     */
    export function dotProduct(
      vectorExpression: Expression,
      otherVectorExpression: Expression,
    ): FunctionExpression;

    /**
     * Calculates the Euclidean distance between a field's vector value and another vector.
     * The other vector can be provided as a double array or a {@link VectorValue}.
     *
     * ```typescript
     * // Calculate the Euclidean distance between the 'location' field and a target location
     * euclideanDistance("location", [37.7749, -122.4194]);
     * ```
     *
     * @param fieldName The name of the field containing the first vector.
     * @param vector The other vector (as an array of doubles or VectorValue) to compare against.
     * @returns A new {@code Expression} representing the Euclidean distance between the two vectors.
     */
    export function euclideanDistance(
      fieldName: string,
      vector: number[] | VectorValue,
    ): FunctionExpression;
    /**
     * Calculates the Euclidean distance between a field's vector value and a vector expression.
     *
     * ```typescript
     * // Calculate the Euclidean distance between two vector fields: 'pointA' and 'pointB'
     * euclideanDistance("pointA", field("pointB"));
     * ```
     *
     * @param fieldName The name of the field containing the first vector.
     * @param vectorExpression The other vector (represented as an Expression) to compare against.
     * @returns A new {@code Expression} representing the Euclidean distance between the two vectors.
     */
    export function euclideanDistance(
      fieldName: string,
      vectorExpression: Expression,
    ): FunctionExpression;
    /**
     * Calculates the Euclidean distance between a vector expression and a double array.
     *
     * ```typescript
     * // Calculate the Euclidean distance between the 'location' field and a target location
     *
     * euclideanDistance(field("location"), [37.7749, -122.4194]);
     * ```
     *
     * @param vectorExpression The first vector (represented as an Expression) to compare against.
     * @param vector The other vector (as an array of doubles or VectorValue) to compare against.
     * @returns A new {@code Expression} representing the Euclidean distance between the two vectors.
     */
    export function euclideanDistance(
      vectorExpression: Expression,
      vector: number[] | VectorValue,
    ): FunctionExpression;
    /**
     * Calculates the Euclidean distance between two vector expressions.
     *
     * ```typescript
     * // Calculate the Euclidean distance between two vector fields: 'pointA' and 'pointB'
     * euclideanDistance(field("pointA"), field("pointB"));
     * ```
     *
     * @param vectorExpression The first vector (represented as an Expression) to compare against.
     * @param otherVectorExpression The other vector (represented as an Expression) to compare against.
     * @returns A new {@code Expression} representing the Euclidean distance between the two vectors.
     */
    export function euclideanDistance(
      vectorExpression: Expression,
      otherVectorExpression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that calculates the length of a Firestore Vector.
     *
     * ```typescript
     * // Get the vector length (dimension) of the field 'embedding'.
     * vectorLength(field("embedding"));
     * ```
     *
     * @param vectorExpression The expression representing the Firestore Vector.
     * @returns A new {@code Expression} representing the length of the array.
     */
    export function vectorLength(
      vectorExpression: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that calculates the length (dimension) of a Firestore Vector represented by a field.
     *
     * ```typescript
     * // Get the vector length (dimension) of the field 'embedding'.
     * vectorLength("embedding");
     * ```
     *
     * @param fieldName The name of the field representing the Firestore Vector.
     * @returns A new {@code FunctionExpression} representing the length (dimension) of the vector.
     */
    export function vectorLength(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that interprets an expression as the number of microseconds since the Unix epoch (1970-01-01 00:00:00 UTC)
     * and returns a timestamp.
     *
     * ```typescript
     * // Interpret the 'microseconds' field as microseconds since epoch.
     * unixMicrosToTimestamp(field("microseconds"));
     * ```
     *
     * @param expr The expression representing the number of microseconds since epoch.
     * @returns A new {@code Expression} representing the timestamp.
     */
    export function unixMicrosToTimestamp(expr: Expression): FunctionExpression;
    /**
     * Creates an expression that interprets a field's value as the number of microseconds since the Unix epoch (1970-01-01 00:00:00 UTC)
     * and returns a timestamp.
     *
     * ```typescript
     * // Interpret the 'microseconds' field as microseconds since epoch.
     * unixMicrosToTimestamp("microseconds");
     * ```
     *
     * @param fieldName The name of the field representing the number of microseconds since epoch.
     * @returns A new {@code Expression} representing the timestamp.
     */
    export function unixMicrosToTimestamp(
      fieldName: string,
    ): FunctionExpression;
    /**
     * Creates an expression that converts a timestamp expression to the number of microseconds since the Unix epoch (1970-01-01 00:00:00 UTC).
     *
     * ```typescript
     * // Convert the 'timestamp' field to microseconds since epoch.
     * timestampToUnixMicros(field("timestamp"));
     * ```
     *
     * @param expr The expression representing the timestamp.
     * @returns A new {@code Expression} representing the number of microseconds since epoch.
     */
    export function timestampToUnixMicros(expr: Expression): FunctionExpression;
    /**
     * Creates an expression that converts a timestamp field to the number of microseconds since the Unix epoch (1970-01-01 00:00:00 UTC).
     *
     * ```typescript
     * // Convert the 'timestamp' field to microseconds since epoch.
     * timestampToUnixMicros("timestamp");
     * ```
     *
     * @param fieldName The name of the field representing the timestamp.
     * @returns A new {@code Expression} representing the number of microseconds since epoch.
     */
    export function timestampToUnixMicros(
      fieldName: string,
    ): FunctionExpression;
    /**
     * Creates an expression that interprets an expression as the number of milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC)
     * and returns a timestamp.
     *
     * ```typescript
     * // Interpret the 'milliseconds' field as milliseconds since epoch.
     * unixMillisToTimestamp(field("milliseconds"));
     * ```
     *
     * @param expr The expression representing the number of milliseconds since epoch.
     * @returns A new {@code Expression} representing the timestamp.
     */
    export function unixMillisToTimestamp(expr: Expression): FunctionExpression;
    /**
     * Creates an expression that interprets a field's value as the number of milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC)
     * and returns a timestamp.
     *
     * ```typescript
     * // Interpret the 'milliseconds' field as milliseconds since epoch.
     * unixMillisToTimestamp("milliseconds");
     * ```
     *
     * @param fieldName The name of the field representing the number of milliseconds since epoch.
     * @returns A new {@code Expression} representing the timestamp.
     */
    export function unixMillisToTimestamp(
      fieldName: string,
    ): FunctionExpression;
    /**
     * Creates an expression that converts a timestamp expression to the number of milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC).
     *
     * ```typescript
     * // Convert the 'timestamp' field to milliseconds since epoch.
     * timestampToUnixMillis(field("timestamp"));
     * ```
     *
     * @param expr The expression representing the timestamp.
     * @returns A new {@code Expression} representing the number of milliseconds since epoch.
     */
    export function timestampToUnixMillis(expr: Expression): FunctionExpression;
    /**
     * Creates an expression that converts a timestamp field to the number of milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC).
     *
     * ```typescript
     * // Convert the 'timestamp' field to milliseconds since epoch.
     * timestampToUnixMillis("timestamp");
     * ```
     *
     * @param fieldName The name of the field representing the timestamp.
     * @returns A new {@code Expression} representing the number of milliseconds since epoch.
     */
    export function timestampToUnixMillis(
      fieldName: string,
    ): FunctionExpression;
    /**
     * Creates an expression that interprets an expression as the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC)
     * and returns a timestamp.
     *
     * ```typescript
     * // Interpret the 'seconds' field as seconds since epoch.
     * unixSecondsToTimestamp(field("seconds"));
     * ```
     *
     * @param expr The expression representing the number of seconds since epoch.
     * @returns A new {@code Expression} representing the timestamp.
     */
    export function unixSecondsToTimestamp(
      expr: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that interprets a field's value as the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC)
     * and returns a timestamp.
     *
     * ```typescript
     * // Interpret the 'seconds' field as seconds since epoch.
     * unixSecondsToTimestamp("seconds");
     * ```
     *
     * @param fieldName The name of the field representing the number of seconds since epoch.
     * @returns A new {@code Expression} representing the timestamp.
     */
    export function unixSecondsToTimestamp(
      fieldName: string,
    ): FunctionExpression;
    /**
     * Creates an expression that converts a timestamp expression to the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC).
     *
     * ```typescript
     * // Convert the 'timestamp' field to seconds since epoch.
     * timestampToUnixSeconds(field("timestamp"));
     * ```
     *
     * @param expr The expression representing the timestamp.
     * @returns A new {@code Expression} representing the number of seconds since epoch.
     */
    export function timestampToUnixSeconds(
      expr: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that converts a timestamp field to the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC).
     *
     * ```typescript
     * // Convert the 'timestamp' field to seconds since epoch.
     * timestampToUnixSeconds("timestamp");
     * ```
     *
     * @param fieldName The name of the field representing the timestamp.
     * @returns A new {@code Expression} representing the number of seconds since epoch.
     */
    export function timestampToUnixSeconds(
      fieldName: string,
    ): FunctionExpression;
    /**
     * Creates an expression that adds a specified amount of time to a timestamp.
     *
     * ```typescript
     * // Add some duration determined by field 'unit' and 'amount' to the 'timestamp' field.
     * timestampAdd(field("timestamp"), field("unit"), field("amount"));
     * ```
     *
     * @param timestamp The expression representing the timestamp.
     * @param unit The expression evaluates to unit of time, must be one of 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day'.
     * @param amount The expression evaluates to amount of the unit.
     * @returns A new {@code Expression} representing the resulting timestamp.
     */
    export function timestampAdd(
      timestamp: Expression,
      unit: Expression,
      amount: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that adds a specified amount of time to a timestamp.
     *
     * ```typescript
     * // Add 1 day to the 'timestamp' field.
     * timestampAdd(field("timestamp"), "day", 1);
     * ```
     *
     * @param timestamp The expression representing the timestamp.
     * @param unit The unit of time to add: 'microsecond', 'millisecond', 'second', 'minute', 'hour', or 'day'.
     * @param amount The amount of time to add.
     * @returns A new {@code Expression} representing the resulting timestamp.
     */
    export function timestampAdd(
      timestamp: Expression,
      unit: TimeUnit,
      amount: number,
    ): FunctionExpression;
    /**
     * Creates an expression that adds a specified amount of time to a timestamp represented by a field.
     *
     * ```typescript
     * // Add 1 day to the 'timestamp' field.
     * timestampAdd("timestamp", "day", 1);
     * ```
     *
     * @param fieldName The name of the field representing the timestamp.
     * @param unit The unit of time to add (e.g., "day", "hour").
     * @param amount The amount of time to add.
     * @returns A new {@code Expression} representing the resulting timestamp.
     */
    export function timestampAdd(
      fieldName: string,
      unit: TimeUnit,
      amount: number,
    ): FunctionExpression;
    /**
     * Creates an expression that subtracts a specified amount of time from a timestamp.
     *
     * ```typescript
     * // Subtract some duration determined by field 'unit' and 'amount' from the 'timestamp' field.
     * timestampSubtract(field("timestamp"), field("unit"), field("amount"));
     * ```
     *
     * @param timestamp The expression representing the timestamp.
     * @param unit The expression evaluates to unit of time, must be one of 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day'.
     * @param amount The expression evaluates to amount of the unit.
     * @returns A new {@code Expression} representing the resulting timestamp.
     */
    export function timestampSubtract(
      timestamp: Expression,
      unit: Expression,
      amount: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that subtracts a specified amount of time from a timestamp.
     *
     * ```typescript
     * // Subtract 1 day from the 'timestamp' field.
     * timestampSubtract(field("timestamp"), "day", 1);
     * ```
     *
     * @param timestamp The expression representing the timestamp.
     * @param unit The unit of time to subtract (e.g., "day", "hour").
     * @param amount The amount of time to subtract.
     * @returns A new {@code Expression} representing the resulting timestamp.
     */
    export function timestampSubtract(
      timestamp: Expression,
      unit: TimeUnit,
      amount: number,
    ): FunctionExpression;
    /**
     * Creates an expression that subtracts a specified amount of time from a timestamp represented by a field.
     *
     * ```typescript
     * // Subtract 1 day from the 'timestamp' field.
     * timestampSubtract("timestamp", "day", 1);
     * ```
     *
     * @param fieldName The name of the field representing the timestamp.
     * @param unit The unit of time to subtract (e.g., "day", "hour").
     * @param amount The amount of time to subtract.
     * @returns A new {@code Expression} representing the resulting timestamp.
     */
    export function timestampSubtract(
      fieldName: string,
      unit: TimeUnit,
      amount: number,
    ): FunctionExpression;

    /**
     *
     * Creates an expression that evaluates to the current server timestamp.
     *
     * ```typescript
     * // Get the current server timestamp
     * currentTimestamp()
     * ```
     *
     * @returns A new Expression representing the current server timestamp.
     */
    export function currentTimestamp(): FunctionExpression;

    /**
     * Creates an expression that performs a logical 'AND' operation on multiple filter conditions.
     *
     * ```typescript
     * // Check if the 'age' field is greater than 18 AND the 'city' field is "London" AND
     * // the 'status' field is "active"
     * const condition = and(greaterThan("age", 18), equal("city", "London"), equal("status", "active"));
     * ```
     *
     * @param first The first filter condition.
     * @param second The second filter condition.
     * @param more Additional filter conditions to 'AND' together.
     * @returns A new {@code Expression} representing the logical 'AND' operation.
     */
    export function and(
      first: BooleanExpression,
      second: BooleanExpression,
      ...more: BooleanExpression[]
    ): BooleanExpression;
    /**
     * Creates an expression that performs a logical 'OR' operation on multiple filter conditions.
     *
     * ```typescript
     * // Check if the 'age' field is greater than 18 OR the 'city' field is "London" OR
     * // the 'status' field is "active"
     * const condition = or(greaterThan("age", 18), equal("city", "London"), equal("status", "active"));
     * ```
     *
     * @param first The first filter condition.
     * @param second The second filter condition.
     * @param more Additional filter conditions to 'OR' together.
     * @returns A new {@code Expression} representing the logical 'OR' operation.
     */
    export function or(
      first: BooleanExpression,
      second: BooleanExpression,
      ...more: BooleanExpression[]
    ): BooleanExpression;

    /**
     * Creates an expression that performs a logical 'NOR' operation on multiple filter conditions.
     *
     * @example
     * ```typescript
     * // Check if neither the 'age' field is greater than 18 nor the 'city' field is "London"
     * const condition = nor(
     *   greaterThan("age", 18),
     *   equal("city", "London")
     * );
     * ```
     * @param first The first filter condition.
     * @param second The second filter condition.
     * @param more - Additional filter conditions to 'NOR' together.
     * @returns A new {@code Expression} representing the logical 'NOR' operation.
     */
    export function nor(
      first: BooleanExpression,
      second: BooleanExpression,
      ...more: BooleanExpression[]
    ): BooleanExpression;

    /**
     * Creates an expression that evaluates to the result corresponding to the first true condition.
     *
     * @remarks
     * This function behaves like a `switch` statement. It accepts an alternating sequence of conditions
     * and their corresponding results.
     * If an odd number of arguments is provided, the final argument serves as a default fallback result.
     * If no default is provided and no condition evaluates to true, it throws an error.
     *
     * @example
     * ```typescript
     * // Return "Active" if field "status" is 1, "Pending" if field "status" is 2,
     * // and default to "Unknown" if none of the conditions are true.
     * switchOn(
     *   equal(field("status"), 1), constant("Active"),
     *   equal(field("status"), 2), constant("Pending"),
     *   constant("Unknown")
     * )
     * ```
     *
     * @param condition - The first condition to check.
     * @param result - The result if the first condition is true.
     * @param others - Additional conditions and results, and optionally a default value.
     * @returns A new {@code Expression} representing the switch operation.
     */
    export function switchOn(
      condition: BooleanExpression,
      result: Expression,
      ...others: Array<BooleanExpression | Expression>
    ): FunctionExpression;

    /**
     * Creates an expression that returns the value of the base expression raised to the power of the exponent expression.
     *
     * ```typescript
     * // Raise the value of the 'base' field to the power of the 'exponent' field.
     * pow(field("base"), field("exponent"));
     * ```
     *
     * @param base The expression to raise to the power of the exponent.
     * @param exponent The expression to raise the base to the power of.
     * @returns A new `Expression` representing the power operation.
     */
    export function pow(
      base: Expression,
      exponent: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that returns the value of the base expression raised to the power of the exponent.
     *
     * ```typescript
     * // Raise the value of the 'base' field to the power of 2.
     * pow(field("base"), 2);
     * ```
     *
     * @param base The expression to raise to the power of the exponent.
     * @param exponent The constant value to raise the base to the power of.
     * @returns A new `Expression` representing the power operation.
     */
    export function pow(base: Expression, exponent: number): FunctionExpression;
    /**
     * Creates an expression that returns the value of the base field raised to the power of the exponent expression.
     *
     * ```typescript
     * // Raise the value of the 'base' field to the power of the 'exponent' field.
     * pow("base", field("exponent"));
     * ```
     *
     * @param base The name of the field to raise to the power of the exponent.
     * @param exponent The expression to raise the base to the power of.
     * @returns A new `Expression` representing the power operation.
     */
    export function pow(base: string, exponent: Expression): FunctionExpression;
    /**
     * Creates an expression that returns the value of the base field raised to the power of the exponent.
     *
     * ```typescript
     * // Raise the value of the 'base' field to the power of 2.
     * pow("base", 2);
     * ```
     *
     * @param base The name of the field to raise to the power of the exponent.
     * @param exponent The constant value to raise the base to the power of.
     * @returns A new `Expression` representing the power operation.
     */
    export function pow(base: string, exponent: number): FunctionExpression;
    /**
     * Creates an expression that returns the collection ID from a path.
     *
     * ```typescript
     * // Get the collection ID from a path.
     * collectionId(field("__name__"));
     * ```
     *
     * @param expression An expression evaluating to a path, which the collection ID will be extracted from.
     * @returns A new {@code Expression} representing the collectionId operation.
     */
    export function collectionId(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that returns the collection ID from a path.
     *
     * ```typescript
     * // Get the collection ID from a path.
     * collectionId("__name__");
     * ```
     *
     * @param fieldName The name of the field to get the collection ID from.
     * @returns A new {@code Expression} representing the collectionId operation.
     */
    export function collectionId(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that calculates the length of a string, array, map, vector, or bytes.
     *
     * ```typescript
     * // Get the length of the 'name' field.
     * length(field("name"));
     *
     * // Get the number of items in the 'cart' array.
     * length(field("cart"));
     * ```
     *
     * @param expression An expression evaluating to a string, array, map, vector, or bytes, which the length will be calculated for.
     * @returns A new `Expression` representing the length of the string, array, map, vector, or bytes.
     */
    export function length(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that calculates the length of a string, array, map, vector, or bytes.
     *
     * ```typescript
     * // Get the length of the 'name' field.
     * length("name");
     *
     * // Get the number of items in the 'cart' array.
     * length("cart");
     * ```
     *
     * @param fieldName The name of the field to calculate the length of.
     * @returns A new `Expression` representing the length of the string, array, map, vector, or bytes.
     */
    export function length(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that reverses a string.
     *
     * ```typescript
     * // Reverse the value of the 'myString' field.
     * stringReverse(field("myString"));
     * ```
     *
     * @param stringExpression An expression evaluating to a string value, which will be reversed.
     * @returns A new {@code Expression} representing the reversed string.
     */
    export function stringReverse(
      stringExpression: Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that reverses a string value in the specified field.
     *
     * ```typescript
     * // Reverse the value of the 'myString' field.
     * stringReverse("myString");
     * ```
     *
     * @param field The name of the field representing the string to reverse.
     * @returns A new {@code Expression} representing the reversed string.
     */
    export function stringReverse(field: string): FunctionExpression;

    /**
     * Creates an expression that concatenates strings, arrays, or blobs. Types cannot be mixed.
     *
     * ```typescript
     * // Concatenate the 'firstName' and 'lastName' fields with a space in between.
     * concat(field("firstName"), " ", field("lastName"))
     * ```
     *
     * @param first The first expressions to concatenate.
     * @param second The second literal or expression to concatenate.
     * @param others Additional literals or expressions to concatenate.
     * @returns A new `Expression` representing the concatenation.
     */
    export function concat(
      first: Expression,
      second: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;

    /**
     * Creates an expression that computes the absolute value of a numeric value.
     *
     * @param expr The expression to compute the absolute value of.
     * @returns A new {@code Expr} representing the absolute value of the numeric value.
     */
    export function abs(expr: Expression): FunctionExpression;

    /**
     * Creates an expression that returns the `elseExpr` argument if `ifExpr` is absent, else return
     * the result of the `ifExpr` argument evaluation.
     *
     * ```typescript
     * // Returns the value of the optional field 'optional_field', or returns 'default_value'
     * // if the field is absent.
     * ifAbsent(field("optional_field"), constant("default_value"))
     * ```
     *
     * @param ifExpr The expression to check for absence.
     * @param elseExpr The expression that will be evaluated and returned if [ifExpr] is absent.
     * @returns A new Expression representing the ifAbsent operation.
     */
    export function ifAbsent(
      ifExpr: Expression,
      elseExpr: Expression,
    ): Expression;

    /**
     * Creates an expression that returns the `elseValue` argument if `ifExpr` is absent, else
     * return the result of the `ifExpr` argument evaluation.
     *
     * ```typescript
     * // Returns the value of the optional field 'optional_field', or returns 'default_value'
     * // if the field is absent.
     * ifAbsent(field("optional_field"), "default_value")
     * ```
     *
     * @param ifExpr The expression to check for absence.
     * @param elseValue The value that will be returned if `ifExpr` evaluates to an absent value.
     * @returns A new [Expression] representing the ifAbsent operation.
     */
    export function ifAbsent(
      ifExpr: Expression,
      elseValue: unknown,
    ): Expression;

    /**
     * Creates an expression that returns the `elseExpr` argument if `ifFieldName` is absent, else
     * return the value of the field.
     *
     * ```typescript
     * // Returns the value of the optional field 'optional_field', or returns the value of
     * // 'default_field' if 'optional_field' is absent.
     * ifAbsent("optional_field", field("default_field"))
     * ```
     *
     * @param ifFieldName The field to check for absence.
     * @param elseExpr The expression that will be evaluated and returned if `ifFieldName` is
     * absent.
     * @returns A new Expression representing the ifAbsent operation.
     */
    export function ifAbsent(
      ifFieldName: string,
      elseExpr: Expression,
    ): Expression;

    /**
     * Creates an expression that returns the `elseExpr` argument if `ifExpr` is null, else
     * return the result of the `ifExpr` argument evaluation.
     *
     * @remarks
     * This function provides a fallback for both absent and explicit null values. In contrast,
     * {@link ifAbsent} only triggers for missing fields.
     *
     * @example
     * ```typescript
     * // Returns the user's preferred name, or if that is null, returns their full name.
     * ifNull(field("preferredName"), field("fullName"))
     * ```
     *
     * @param ifExpr The expression to check for null.
     * @param elseExpr The value that will be returned if `ifExpr` evaluates to null.
     * @returns A new {@code Expression} representing the ifNull operation.
     */
    export function ifNull(
      ifExpr: Expression,
      elseExpr: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that returns the `elseValue` argument if `ifExpr` is null, else
     * return the result of the `ifExpr` argument evaluation.
     *
     * @remarks
     * This function provides a fallback for both absent and explicit null values. In contrast,
     * {@link ifAbsent} only triggers for missing fields.
     *
     * @example
     * ```typescript
     * // Returns the user's display name, or returns "Anonymous" if the field is null.
     * ifNull(field("displayName"), "Anonymous")
     * ```
     *
     * @param ifExpr The expression to check for null.
     * @param elseValue The value that will be returned if `ifExpr` evaluates to null.
     * @returns A new {@code Expression} representing the ifNull operation.
     */
    export function ifNull(
      ifExpr: Expression,
      elseValue: unknown,
    ): FunctionExpression;

    /**
     * Creates an expression that returns the `elseExpr` argument if `ifFieldName` is null, else
     * return the value of the field.
     *
     * @remarks
     * This function provides a fallback for both absent and explicit null values. In contrast,
     * {@link ifAbsent} only triggers for missing fields.
     *
     * @example
     * ```typescript
     * // Returns the user's preferred name, or if that is null, returns their full name.
     * ifNull("preferredName", field("fullName"))
     * ```
     *
     * @param ifFieldName The field to check for null.
     * @param elseExpr The expression that will be evaluated and returned if `ifFieldName` is
     * null.
     * @returns A new {@code Expression} representing the ifNull operation.
     */
    export function ifNull(
      ifFieldName: string,
      elseExpr: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that returns the `elseValue` argument if `ifFieldName` is null, else
     * return the value of the field.
     *
     * @remarks
     * This function provides a fallback for both absent and explicit null values. In contrast,
     * {@link ifAbsent} only triggers for missing fields.
     *
     * @example
     * ```typescript
     * // Returns the user's display name, or returns "Anonymous" if the field is null.
     * ifNull("displayName", "Anonymous")
     * ```
     *
     * @param ifFieldName The field to check for null.
     * @param elseValue The value that will be returned if `ifFieldName` is null.
     * @returns A new {@code Expression} representing the ifNull operation.
     */
    export function ifNull(
      ifFieldName: string,
      elseValue: unknown,
    ): FunctionExpression;

    /**
     * Creates an expression that returns the first non-null, non-absent argument, without evaluating
     * the rest of the arguments. When all arguments are null or absent, returns the last argument.
     *
     * @example
     * ```typescript
     * // Returns the value of the first non-null, non-absent field among 'preferredName', 'fullName',
     * // or the last argument if all previous fields are null.
     * coalesce(field("preferredName"), field("fullName"), constant("Anonymous"))
     * ```
     *
     * @param expression The first expression to evaluate.
     * @param replacement The next expression or literal to evaluate.
     * @param others Additional expressions or literals to evaluate.
     * @returns A new [Expression] representing the coalesce operation.
     */
    export function coalesce(
      expression: Expression,
      replacement: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;

    /**
     * Creates an expression that returns the first non-null, non-absent argument, without evaluating
     * the rest of the arguments. When all arguments are null or absent, returns the last argument.
     *
     * @example
     * ```typescript
     * // Returns the value of the first non-null, non-absent field among 'preferredName', 'fullName',
     * // or the last argument if all previous fields are null.
     * coalesce("preferredName", field("fullName"), constant("Anonymous"))
     * ```
     *
     * @param fieldName The first field name to evaluate.
     * @param replacement The next expression or literal to evaluate.
     * @param others Additional expressions or literals to evaluate.
     * @returns A new [Expression] representing the coalesce operation.
     */
    export function coalesce(
      fieldName: string,
      replacement: Expression | unknown,
      ...others: Array<Expression | unknown>
    ): FunctionExpression;

    /**
     * Creates an expression that joins the elements of an array into a string.
     *
     * ```typescript
     * // Join the elements of the 'tags' field with a comma and space.
     * join("tags", ", ")
     * ```
     *
     * @param arrayFieldName The name of the field containing the array.
     * @param delimiter The string to use as a delimiter.
     * @returns A new Expression representing the join operation.
     */
    export function join(arrayFieldName: string, delimiter: string): Expression;

    /**
     * Creates an expression that joins the elements of an array into a string.
     *
     * ```typescript
     * // Join an array of string using the delimiter from the 'separator' field.
     * join(array(['foo', 'bar']), field("separator"))
     * ```
     *
     * @param arrayExpression An expression that evaluates to an array.
     * @param delimiterExpression The expression that evaluates to the delimiter string.
     * @returns A new Expression representing the join operation.
     */
    export function join(
      arrayExpression: Expression,
      delimiterExpression: Expression,
    ): Expression;

    /**
     * Creates an expression that joins the elements of an array into a string.
     *
     * ```typescript
     * // Join the elements of the 'tags' field with a comma and space.
     * join(field("tags"), ", ")
     * ```
     *
     * @param arrayExpression An expression that evaluates to an array.
     * @param delimiter The string to use as a delimiter.
     * @returns A new Expression representing the join operation.
     */
    export function join(
      arrayExpression: Expression,
      delimiter: string,
    ): Expression;

    /**
     * Creates an expression that computes the base-10 logarithm of a numeric value.
     *
     * ```typescript
     * // Compute the base-10 logarithm of the 'value' field.
     * log10("value");
     * ```
     *
     * @param fieldName The name of the field to compute the base-10 logarithm of.
     * @returns A new `Expr` representing the base-10 logarithm of the numeric value.
     */
    export function log10(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that computes the base-10 logarithm of a numeric value.
     *
     * ```typescript
     * // Compute the base-10 logarithm of the 'value' field.
     * log10(field("value"));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which the base-10 logarithm will be computed for.
     * @returns A new `Expr` representing the base-10 logarithm of the numeric value.
     */
    export function log10(expression: Expression): FunctionExpression;

    /**
     * Creates an expression that computes the sum of the elements in an array.
     *
     * ```typescript
     * // Compute the sum of the elements in the 'scores' field.
     * arraySum("scores");
     * ```
     *
     * @param fieldName The name of the field to compute the sum of.
     * @returns A new `Expr` representing the sum of the elements in the array.
     */
    export function arraySum(fieldName: string): FunctionExpression;

    /**
     * Creates an expression that computes the sum of the elements in an array.
     *
     * ```typescript
     * // Compute the sum of the elements in the 'scores' field.
     * arraySum(field("scores"));
     * ```
     *
     * @param expression An expression evaluating to a numeric array, which the sum will be computed for.
     * @returns A new `Expr` representing the sum of the elements in the array.
     */
    export function arraySum(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that computes the natural logarithm of a numeric value.
     *
     * ```typescript
     * // Compute the natural logarithm of the 'value' field.
     * ln(field("value"));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which the natural logarithm will be computed for.
     * @returns A new {@code Expression} representing the natural logarithm of the numeric value.
     */
    export function ln(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that computes the natural logarithm of a numeric value.
     *
     * ```typescript
     * // Compute the natural logarithm of the 'value' field.
     * ln("value");
     * ```
     *
     * @param fieldName The name of the field to compute the natural logarithm of.
     * @returns A new {@code Expression} representing the natural logarithm of the numeric value.
     */
    export function ln(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that generates a random number between 0.0 and 1.0 but not including 1.0.
     *
     * @example
     * ```typescript
     * // Generate a random number between 0.0 and 1.0.
     * rand();
     * ```
     *
     * @returns A new {@code Expression} representing the rand operation.
     */
    export function rand(): FunctionExpression;
    /**
     * Creates an expression that rounds a numeric value to the nearest whole number.
     *
     * ```typescript
     * // Round the value of the 'price' field.
     * round(field("price"));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which will be rounded.
     * @returns A new `Expression` representing the rounded value.
     */
    export function round(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that rounds a numeric value to the nearest whole number.
     *
     * ```typescript
     * // Round the value of the 'price' field.
     * round("price");
     * ```
     *
     * @param fieldName The name of the field to round.
     * @returns A new `Expression` representing the rounded value.
     */
    export function round(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that rounds a numeric value to the specified number of decimal places.
     *
     * ```typescript
     * // Round the value of the 'price' field to two decimal places.
     * round("price", 2);
     * ```
     *
     * @param fieldName The name of the field to round.
     * @param decimalPlaces A constant or expression specifying the rounding precision in decimal places.
     * @returns A new `Expr` representing the rounded value.
     */
    export function round(
      fieldName: string,
      decimalPlaces: number | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that rounds a numeric value to the specified number of decimal places.
     *
     * ```typescript
     * // Round the value of the 'price' field to two decimal places.
     * round(field("price"), constant(2));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which will be rounded.
     * @param decimalPlaces A constant or expression specifying the rounding precision in decimal places.
     * @returns A new `Expr` representing the rounded value.
     */
    export function round(
      expression: Expression,
      decimalPlaces: number | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that truncates the numeric value of a field to an integer.
     *
     * @example
     * ```typescript
     * // Truncate the value of the 'rating' field.
     * trunc("rating");
     * ```
     *
     * @param fieldName The name of the field containing the number to truncate.
     * @returns A new {@code Expression} representing the truncated value.
     */
    export function trunc(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that truncates the numeric value of an expression to an integer.
     *
     * @example
     * ```typescript
     * // Truncate the value of the 'rating' field.
     * trunc(field("rating"));
     * ```
     *
     * @param expression - An expression evaluating to a numeric value, which will be truncated.
     * @returns A new {@code Expression} representing the truncated value.
     */
    export function trunc(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that truncates a numeric value to the specified number of decimal places.
     *
     * @example
     * ```typescript
     * // Truncate the value of the 'rating' field to two decimal places.
     * trunc("rating", 2);
     * ```
     *
     * @param fieldName The name of the field to truncate.
     * @param decimalPlaces A constant or expression specifying the truncation precision in decimal places.
     * @returns A new {@code Expression} representing the truncated value.
     */
    export function trunc(
      fieldName: string,
      decimalPlaces: number | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that truncates a numeric value to the specified number of decimal places.
     *
     * @example
     * ```typescript
     * // Truncate the value of the 'rating' field to two decimal places.
     * trunc(field("rating"), constant(2));
     * ```
     *
     * @param expression - An expression evaluating to a numeric value, which will be truncated.
     * @param decimalPlaces - A constant or expression specifying the truncation precision in decimal places.
     * @returns A new {@code Expression} representing the truncated value.
     */
    export function trunc(
      expression: Expression,
      decimalPlaces: number | Expression,
    ): FunctionExpression;
    /**
     * Creates an expression that computes the square root of a numeric value.
     *
     * ```typescript
     * // Compute the square root of the 'value' field.
     * sqrt(field("value"));
     * ```
     *
     * @param expression An expression evaluating to a numeric value, which the square root will be computed for.
     * @returns A new {@code Expression} representing the square root of the numeric value.
     */
    export function sqrt(expression: Expression): FunctionExpression;
    /**
     * Creates an expression that computes the square root of a numeric value.
     *
     * ```typescript
     * // Compute the square root of the 'value' field.
     * sqrt("value");
     * ```
     *
     * @param fieldName The name of the field to compute the square root of.
     * @returns A new {@code Expression} representing the square root of the numeric value.
     */
    export function sqrt(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that splits the value of a field on the provided delimiter.
     *
     * @example
     * ```typescript
     * // Split the 'scoresCsv' field on delimiter ','
     * split('scoresCsv', ',')
     * ```
     *
     * @param fieldName Split the value in this field.
     * @param delimiter Split on this delimiter.
     *
     * @returns A new {@code Expression} representing the split function.
     */
    export function split(
      fieldName: string,
      delimiter: string,
    ): FunctionExpression;

    /**
     * Creates an expression that splits the value of a field on the provided delimiter.
     *
     * @example
     * ```typescript
     * // Split the 'scores' field on delimiter ',' or ':' depending on the stored format
     * split('scores', conditional(field('format').equal('csv'), constant(','), constant(':'))
     * ```
     *
     * @param fieldName Split the value in this field.
     * @param delimiter Split on this delimiter returned by evaluating this expression.
     *
     * @returns A new {@code Expression} representing the split function.
     */
    export function split(
      fieldName: string,
      delimiter: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that splits a string into an array of substrings based on the provided delimiter.
     *
     * @example
     * ```typescript
     * // Split the 'scoresCsv' field on delimiter ','
     * split(field('scoresCsv'), ',')
     * ```
     *
     * @param expression Split the result of this expression.
     * @param delimiter Split on this delimiter.
     *
     * @returns A new {@code Expression} representing the split function.
     */
    export function split(
      expression: Expression,
      delimiter: string,
    ): FunctionExpression;

    /**
     * Creates an expression that splits a string into an array of substrings based on the provided delimiter.
     *
     * @example
     * ```typescript
     * // Split the 'scores' field on delimiter ',' or ':' depending on the stored format
     * split(field('scores'), conditional(field('format').equal('csv'), constant(','), constant(':'))
     * ```
     *
     * @param expression Split the result of this expression.
     * @param delimiter Split on this delimiter returned by evaluating this expression.
     *
     * @returns A new {@code Expression} representing the split function.
     */
    export function split(
      expression: Expression,
      delimiter: Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that truncates a timestamp to a specified granularity.
     *
     * @example
     * ```typescript
     * // Truncate the 'createdAt' timestamp to the beginning of the day.
     * timestampTruncate('createdAt', 'day')
     * ```
     *
     * @param fieldName Truncate the timestamp value contained in this field.
     * @param granularity The granularity to truncate to.
     * @param timezone The timezone to use for truncation. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1".
     * @returns A new {Expression} representing the truncated timestamp.
     */
    export function timestampTruncate(
      fieldName: string,
      granularity: TimeGranularity,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that truncates a timestamp to a specified granularity.
     *
     * @example
     * ```typescript
     * // Truncate the 'createdAt' timestamp to the granularity specified in the field 'granularity'.
     * timestampTruncate('createdAt', field('granularity'))
     * ```
     *
     * @param fieldName Truncate the timestamp value contained in this field.
     * @param granularity The granularity to truncate to.
     * @param timezone The timezone to use for truncation. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1".
     * @returns A new {Expression} representing the truncated timestamp.
     */
    export function timestampTruncate(
      fieldName: string,
      granularity: Expression,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that truncates a timestamp to a specified granularity.
     *
     * @example
     * ```typescript
     * // Truncate the 'createdAt' timestamp to the beginning of the day.
     * timestampTruncate(field('createdAt'), 'day')
     * ```
     *
     * @param timestampExpression Truncate the timestamp value that is returned by this expression.
     * @param granularity The granularity to truncate to.
     * @param timezone The timezone to use for truncation. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1".
     * @returns A new {Expression} representing the truncated timestamp.
     */
    export function timestampTruncate(
      timestampExpression: Expression,
      granularity: TimeGranularity,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that truncates a timestamp to a specified granularity.
     *
     * @example
     * ```typescript
     * // Truncate the 'createdAt' timestamp to the granularity specified in the field 'granularity'.
     * timestampTruncate(field('createdAt'), field('granularity')
     * ```
     *
     * @param timestampExpression Truncate the timestamp value that is returned by this expression.
     * @param granularity The granularity to truncate to.
     * @param timezone The timezone to use for truncation. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1".
     * @returns A new {Expression} representing the truncated timestamp.
     */
    export function timestampTruncate(
      timestampExpression: Expression,
      granularity: Expression,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that calculates the difference between two timestamps.
     *
     * @example
     * ```typescript
     * // Calculate the difference in days between 'endTime' and 'startTime' fields.
     * timestampDiff('endTime', 'startTime', 'day')
     * ```
     *
     * @param endFieldName - The name of the field representing the ending timestamp.
     * @param startFieldName - The name of the field representing the starting timestamp.
     * @param unit - The unit of time for the difference (e.g., "day", "hour").
     * @returns A new {@code Expression} representing the difference as an integer.
     */
    export function timestampDiff(
      endFieldName: string,
      startFieldName: string,
      unit: TimeUnit | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that calculates the difference between two timestamps.
     *
     * @example
     * ```typescript
     * // Calculate the difference in days between 'endTime' field and a starting timestamp expression.
     * timestampDiff('endTime', field('startTime'), 'day')
     * ```
     *
     * @param endFieldName - The name of the field representing the ending timestamp.
     * @param startExpression - The starting timestamp for the difference calculation.
     * @param unit - The unit of time for the difference (e.g., "day", "hour").
     * @returns A new {@code Expression} representing the difference as an integer.
     */
    export function timestampDiff(
      endFieldName: string,
      startExpression: Expression,
      unit: TimeUnit | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that calculates the difference between two timestamps.
     *
     * @example
     * ```typescript
     * // Calculate the difference in days between an ending timestamp expression and 'startTime' field.
     * timestampDiff(field('endTime'), 'startTime', 'day')
     * ```
     *
     * @param endExpression - The ending timestamp for the difference calculation.
     * @param startFieldName - The name of the field representing the starting timestamp.
     * @param unit - The unit of time for the difference (e.g., "day", "hour").
     * @returns A new {@code Expression} representing the difference as an integer.
     */
    export function timestampDiff(
      endExpression: Expression,
      startFieldName: string,
      unit: TimeUnit | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that calculates the difference between two timestamps.
     *
     * @example
     * ```typescript
     * // Calculate the difference in days between two timestamp expressions.
     * timestampDiff(field('endTime'), field('startTime'), 'day')
     * ```
     *
     * @param endExpression - The ending timestamp for the difference calculation.
     * @param startExpression - The starting timestamp for the difference calculation.
     * @param unit - The unit of time for the difference (e.g., "day", "hour").
     * @returns A new {@code Expression} representing the difference as an integer.
     */
    export function timestampDiff(
      endExpression: Expression,
      startExpression: Expression,
      unit: TimeUnit | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that extracts a specified part from a timestamp.
     *
     * @example
     * ```typescript
     * // Extract the year from the 'createdAt' timestamp.
     * timestampExtract('createdAt', 'year')
     * ```
     *
     * @param fieldName - The name of the field representing the timestamp.
     * @param part - The part to extract from the timestamp (e.g., "year", "month", "day").
     * @param timezone - The timezone to use for extraction. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1."
     * Defaults to "UTC" if not specified.
     * @returns A new {@code Expression} representing the extracted part as an integer.
     */
    export function timestampExtract(
      fieldName: string,
      part: TimePart,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that extracts a specified part from a timestamp.
     *
     * @example
     * ```typescript
     * // Extract the part specified by the field 'part' from 'createdAt'.
     * timestampExtract('createdAt', field('part'))
     * ```
     *
     * @param fieldName - The name of the field representing the timestamp.
     * @param part - The expression evaluating to the part to extract.
     * @param timezone - The timezone to use for extraction. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1."
     * Defaults to "UTC" if not specified.
     * @returns A new {@code Expression} representing the extracted part as an integer.
     */
    export function timestampExtract(
      fieldName: string,
      part: Expression,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that extracts a specified part from a timestamp.
     *
     * @example
     * ```typescript
     * // Extract the year from the timestamp returned by the expression.
     * timestampExtract(field('createdAt'), 'year')
     * ```
     *
     * @param timestampExpression - The expression evaluating to the timestamp.
     * @param part - The part to extract from the timestamp (e.g., "year", "month", "day").
     * @param timezone - The timezone to use for extraction. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1."
     * Defaults to "UTC" if not specified.
     * @returns A new {@code Expression} representing the extracted part as an integer.
     */
    export function timestampExtract(
      timestampExpression: Expression,
      part: TimePart,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     * Creates an expression that extracts a specified part from a timestamp.
     *
     * @example
     * ```typescript
     * // Extract the part specified by the field 'part' from the timestamp.
     * timestampExtract(field('createdAt'), field('part'))
     * ```
     *
     * @param timestampExpression - The expression evaluating to the timestamp.
     * @param part - The expression evaluating to the part to extract.
     * @param timezone - The timezone to use for extraction. Valid values are from
     * the TZ database (e.g., "America/Los_Angeles") or in the format "Etc/GMT-1."
     * Defaults to "UTC" if not specified.
     * @returns A new {@code Expression} representing the extracted part as an integer.
     */
    export function timestampExtract(
      timestampExpression: Expression,
      part: Expression,
      timezone?: string | Expression,
    ): FunctionExpression;

    /**
     *
     * An enumeration of the different types generated by the Firestore backend.
     *
     * <ul>
     *  <li>Numerics evaluate directly to backend representation (`int64` or `float64`), not JS `number`.</li>
     *  <li>JavaScript `Date` and firestore `Timestamp` objects strictly evaluate to `'timestamp'`.</li>
     *  <li>Advanced configurations parsing backend types (such as `decimal128`, `max_key` or `min_key` from BSON) are also incorporated in this union string type. Note that `decimal128` is a backend-only numeric type that the JavaScript SDK cannot create natively, but can be evaluated in pipelines.</li>
     * </ul>
     */
    export type Type =
      | 'null'
      | 'array'
      | 'boolean'
      | 'bytes'
      | 'timestamp'
      | 'geo_point'
      | 'number'
      | 'int32'
      | 'int64'
      | 'float64'
      | 'decimal128'
      | 'map'
      | 'reference'
      | 'string'
      | 'vector'
      | 'max_key'
      | 'min_key'
      | 'object_id'
      | 'regex'
      | 'request_timestamp';

    /**
     * Creates an expression that returns the data type of the data in the specified field.
     *
     * @example
     * ```typescript
     * // Get the data type of the value in field 'title'
     * type('title')
     * ```
     *
     * @returns A new {Expression} representing the data type.
     */
    export function type(fieldName: string): FunctionExpression;
    /**
     * Creates an expression that returns the data type of an expression's result.
     *
     * @example
     * ```typescript
     * // Get the data type of a conditional expression
     * type(conditional(exists('foo'), constant(1), constant(true)))
     * ```
     *
     * @returns A new {Expression} representing the data type.
     */
    export function type(expression: Expression): FunctionExpression;

    /**
     * Creates an expression that checks if the value in the specified field is of the given type.
     *
     * @remarks Null or undefined fields evaluate to skip/error. Use `ifAbsent()` / `isAbsent()` to evaluate missing data.
     * Supported values for `type` are:
     * `'null'`, `'array'`, `'boolean'`, `'bytes'`, `'timestamp'`, `'geo_point'`, `'number'`,
     * `'int32'`, `'int64'`, `'float64'`, `'decimal128'`, `'map'`, `'reference'`, `'string'`,
     * `'vector'`, `'max_key'`, `'min_key'`, `'object_id'`, `'regex'`, `'request_timestamp'`.
     *
     * @example
     * ```typescript
     * // Check if the 'price' field is a floating point number (evaluating to true inside pipeline conditionals)
     * isType('price', 'float64');
     * ```
     *
     * @param fieldName The name of the field to check.
     * @param type The type to check for.
     * @returns A new `BooleanExpression` that evaluates to true if the field's value is of the given type, false otherwise.
     */
    export function isType(fieldName: string, type: string): BooleanExpression;
    /**
     * Creates an expression that checks if the result of an expression is of the given type.
     *
     * @remarks Null or undefined fields evaluate to skip/error. Use `ifAbsent()` / `isAbsent()` to evaluate missing data.
     * Supported values for `type` are:
     * `'null'`, `'array'`, `'boolean'`, `'bytes'`, `'timestamp'`, `'geo_point'`, `'number'`,
     * `'int32'`, `'int64'`, `'float64'`, `'decimal128'`, `'map'`, `'reference'`, `'string'`,
     * `'vector'`, `'max_key'`, `'min_key'`, `'object_id'`, `'regex'`, `'request_timestamp'`.
     *
     * @example
     * ```typescript
     * // Check if the result of a calculation is a number
     * isType(add('count', 1), 'number')
     * ```
     *
     * @param expression The expression to check.
     * @param type The type to check for.
     * @returns A new `BooleanExpression` that evaluates to true if the expression's result is of the given type, false otherwise.
     */
    export function isType(
      expression: Expression,
      type: string,
    ): BooleanExpression;

    // TODO(search) enable with backend support
    // /**
    //  * @beta
    //  * Perform a full-text search on the specified field.
    //  *
    //  * @remarks This Expression can only be used within a `Search` stage.
    //  *
    //  * @param searchField Search the specified field.
    //  * @param rquery Define the search query using the search domain-specific language (DSL).
    //  * @returns A `BooleanExpression` representing the matches function.
    //  */
    // export function matches(
    //   searchField: string | Field,
    //   rquery: string | Expression,
    // ): BooleanExpression;

    /**
     * Perform a full-text search on all indexed search fields in the document.
     *
     * @remarks This Expression can only be used within a `Search` stage.
     *
     * @example
     * ```typescript
     * db.pipeline().collection('restaurants').search({
     *   query: documentMatches('waffles OR pancakes')
     * })
     * ```
     *
     * @param rquery Define the search query using the search domain-specific language (DSL).
     * @returns A `BooleanExpression` representing the documentMatches function.
     */
    export function documentMatches(
      rquery: string | Expression,
    ): BooleanExpression;

    /**
     * @beta
     *
     * Evaluates to the search score that reflects the topicality of the document
     * to all of the text predicates (for example: `documentMatches`)
     * in the search query. If `SearchOptions.query` is not set or does not contain
     * any text predicates, then this score will always be `0`.
     *
     * @example
     * ```typescript
     * db.pipeline().collection('restaurants').search({
     *   query: 'waffles',
     *   sort: score().descending()
     * })
     * ```
     *
     * @remarks This Expression can only be used within a `Search` stage.
     * @returns An `Expression` representing the score function.
     */
    export function score(): Expression;

    // TODO(search) enable with backend support
    // /**
    //  * Evaluates to an HTML-formatted text snippet that highlights terms matching
    //  * the search query in `<b>bold</b>`.
    //  *
    //  * @example
    //  * ```typescript
    //  * db.pipeline().collection('restaurants').search({
    //  *   query: 'waffles',
    //  *   addFields: { snippet: snippet('menu', 'waffles') }
    //  * })
    //  * ```
    //  *
    //  * @remarks This Expression can only be used within a `Search` stage.
    //  *
    //  * @param searchField Search the specified field for matching terms.
    //  * @param rquery Define the search query using the search domain-specific language (DSL).
    //  * @returns An `Expression` representing the snippet function.
    //  */
    // export function snippet(
    //   searchField: string | Field,
    //   rquery: string,
    // ): Expression;
    //
    // /**
    //  * Evaluates to an HTML-formatted text snippet that highlights terms matching
    //  * the search query in `<b>bold</b>`.
    //  *
    //  * @remarks This Expression can only be used within a `Search` stage.
    //  *
    //  * @param searchField Search the specified field for matching terms.
    //  * @param options Define the search query using the search domain-specific language (DSL).
    //  * @returns An `Expression` representing the snippet function.
    //  */
    // export function snippet(
    //   searchField: string | Field,
    //   options: SnippetOptions,
    // ): Expression;

    /**
     * @beta
     *
     * Evaluates to the distance in meters between the location in the specified
     * field and the query location.
     *
     * @example
     * ```typescript
     * db.pipeline().collection('restaurants').search({
     *   query: 'waffles',
     *   sort: geoDistance('location', new GeoPoint(37.0, -122.0)).ascending()
     * })
     * ```
     *
     * @remarks This Expression can only be used within a `Search` stage.
     *
     * @param fieldName - Specifies the field in the document which contains
     * the first GeoPoint for distance computation.
     * @param location - Compute distance to this GeoPoint.
     * @returns An `Expression` representing the geoDistance function.
     */
    export function geoDistance(
      fieldName: string | Field,
      location: GeoPoint | Expression,
    ): Expression;

    // TODO(search) enable when supported by the backend
    // /**
    //  * Evaluates if the value in the field specified by `fieldName` is between
    //  * the evaluated values for `lowerBound` (inclusive) and `upperBound` (inclusive).
    //  *
    //  * @example
    //  * ```typescript
    //  * // Evaluate if the 'tireWidth' is between 2.2 and 2.4
    //  * between('tireWidth', constant(2.2), constant(2.4))
    //  *
    //  * // This is functionally equivalent to
    //  * and(greaterThanOrEqual('tireWidth', constant(2.2)), lessThanOrEqual('tireWidth', constant(2.4)))
    //  * ```
    //  *
    //  * @param fieldName - Evaluate if the value stored in this field is between the lower and upper bounds.
    //  * @param lowerBound - An `Expression` that evaluates to the lower bound (inclusive) of the range.
    //  * @param upperBound - An `Expression` that evaluates to the upper bound (inclusive) of the range.
    //  * @returns A `BooleanExpression` representing the specified between comparion.
    //  */
    // export function between(
    //   fieldName: string,
    //   lowerBound: Expression,
    //   upperBound: Expression,
    // ): BooleanExpression;
    //
    // /**
    //  * Evaluates if the value in the field specified by `fieldName` is between
    //  * the values for `lowerBound` (inclusive) and `upperBound` (inclusive).
    //  *
    //  * @example
    //  * ```typescript
    //  * // Evaluate if the 'tireWidth' is between 2.2 and 2.4
    //  * between('tireWidth', 2.2, 2.4)
    //  *
    //  * // This is functionally equivalent to
    //  * and(greaterThanOrEqual('tireWidth', 2.2), lessThanOrEqual('tireWidth', 2.4))
    //  * ```
    //  *
    //  * @param fieldName - Evaluate if the value stored in this field is between the lower and upper bounds.
    //  * @param lowerBound - Lower bound (inclusive) of the range.
    //  * @param upperBound - Upper bound (inclusive) of the range.
    //  * @returns A `BooleanExpression` representing the specified between comparion.
    //  */
    // export function between(
    //   fieldName: string,
    //   lowerBound: unknown,
    //   upperBound: unknown,
    // ): BooleanExpression;
    //
    // /**
    //  * Evaluates if the result of the specified `expression` is between
    //  * the results of `lowerBound` (inclusive) and `upperBound` (inclusive).
    //  *
    //  * @example
    //  * ```typescript
    //  * // Evaluate if the 'tireWidth' is between 2.2 and 2.4
    //  * between(field('tireWidth'), constant(2.2), constant(2.4))
    //  *
    //  * // This is functionally equivalent to
    //  * and(greaterThanOrEqual(field('tireWidth'), constant(2.2)), lessThanOrEqual(field('tireWidth'), constant(2.4)))
    //  * ```
    //  *
    //  * @param expression - Evaluate if the result of this expression is between the lower and upper bounds
    //  * @param lowerBound - An `Expression` that evaluates to the lower bound (inclusive) of the range.
    //  * @param upperBound - An `Expression` that evaluates to the upper bound (inclusive) of the range.
    //  * @returns A `BooleanExpression` representing the specified between comparion.
    //  */
    // export function between(
    //   expression: Expression,
    //   lowerBound: Expression,
    //   upperBound: Expression,
    // ): BooleanExpression;
    //
    // /**
    //  * Evaluates if the result of the specified `expression` is between
    //  * the `lowerBound` (inclusive) and `upperBound` (inclusive).
    //  *
    //  * @example
    //  * ```typescript
    //  * // Evaluate if the 'tireWidth' is between 2.2 and 2.4
    //  * between(field('tireWidth'), 2.2, 2.4)
    //  *
    //  * // This is functionally equivalent to
    //  * and(greaterThanOrEqual(field('tireWidth'), 2.2), lessThanOrEqual(field('tireWidth'), 2.4))
    //  * ```
    //  *
    //  * @param expression - Evaluate if the result of this expression is between the lower and upper bounds.
    //  * @param lowerBound - Lower bound (inclusive) of the range.
    //  * @param upperBound - Upper bound (inclusive) of the range.
    //  * @returns A `BooleanExpression` representing the specified between comparion.
    //  */
    // export function between(
    //   expression: Expression,
    //   lowerBound: unknown,
    //   upperBound: unknown,
    // ): BooleanExpression;

    // TODO(new-expression): Add new top-level expression function declarations above this line
    /**
     * Creates an `Ordering` that sorts documents in ascending order based on an expression.
     *
     * ```typescript
     * // Sort documents by the 'name' field in lowercase in ascending order
     * pipeline().collection("users")
     *   .sort(ascending(field("name").toLower()));
     * ```
     *
     * @param expr The expression to create an ascending ordering for.
     * @returns A new `Ordering` for ascending sorting.
     */
    export function ascending(expr: Expression): Ordering;
    /**
     * Creates an `Ordering` that sorts documents in ascending order based on a field.
     *
     * ```typescript
     * // Sort documents by the 'name' field in ascending order
     * pipeline().collection("users")
     *   .sort(ascending("name"));
     * ```
     *
     * @param fieldName The field to create an ascending ordering for.
     * @returns A new `Ordering` for ascending sorting.
     */
    export function ascending(fieldName: string): Ordering;
    /**
     * Creates an `Ordering` that sorts documents in descending order based on an expression.
     *
     * ```typescript
     * // Sort documents by the 'name' field in lowercase in descending order
     * pipeline().collection("users")
     *   .sort(descending(field("name").toLower()));
     * ```
     *
     * @param expr The expression to create a descending ordering for.
     * @returns A new `Ordering` for descending sorting.
     */
    export function descending(expr: Expression): Ordering;
    /**
     * Creates an `Ordering` that sorts documents in descending order based on a field.
     *
     * ```typescript
     * // Sort documents by the 'name' field in descending order
     * pipeline().collection("users")
     *   .sort(descending("name"));
     * ```
     *
     * @param fieldName The field to create a descending ordering for.
     * @returns A new `Ordering` for descending sorting.
     */
    export function descending(fieldName: string): Ordering;
    /**
     * Represents an ordering criterion for sorting documents in a Firestore pipeline.
     *
     * You create `Ordering` instances using the `ascending` and `descending` helper functions.
     */
    export class Ordering {
      readonly expr: Expression;
      readonly direction: 'ascending' | 'descending';
    }

    /**
     * Provides the entry point for defining the data source of a Firestore `Pipeline`.
     *
     * Use the methods of this class (e.g., {@link PipelineSource#collection}, {@link PipelineSource#collectionGroup},
     * {@link PipelineSource#database}, or {@link PipelineSource#documents}) to specify the initial data
     * for your pipeline, such as a collection, a collection group, the entire database, or a set of specific documents.
     */
    export class PipelineSource {
      /**
       * Specifies the source for a new pipeline as a Firestore collection.
       * This method allows you to start a data pipeline by defining the collection
       * from which documents will be read.
       *
       * @param collectionPath The path to the collection as a string (e.g., 'users/alovelace/chats')
       *                       or a {@link CollectionReference} object.
       * @returns A new `Pipeline` object configured to read from the specified collection.
       *
       * @example
       * ```typescript
       * // Using a string path
       * const pipeline1 = firestore.pipeline().collection('myCollection');
       *
       * // Using a CollectionReference
       * const collectionRef = firestore.collection('anotherCollection');
       * const pipeline2 = firestore.pipeline().collection(collectionRef);
       * ```
       */
      collection(collectionPath: string | CollectionReference): Pipeline;
      /**
       * Returns all documents from the entire collection. The collection can be nested.
       * @param options - Options defining how this CollectionStage is evaluated.
       */
      collection(options: CollectionStageOptions): Pipeline;
      /**
       * Specifies the source as a collection group.
       *
       * @param collectionId The ID of the collection group.
       * @returns A new Pipeline object with the collection group as the source.
       */
      collectionGroup(collectionId: string): Pipeline;

      /**
       * Creates a new `Pipeline` stage that queries all documents belonging to a collection
       * with the ID specified in the provided `options`, regardless of the document's parent.
       *
       * A collection group query can be used to query collections that have the same ID but
       * are located at different paths.
       *
       * ```typescript
       * // Query all 'cities' collections regardless of their parent document.
       * const citiesPipeline = firestore.collectionGroup({ collectionId: 'cities' });
       * ```
       *
       * @param options Options defining how this CollectionGroupStage is evaluated, including the `collectionId`.
       * @returns A new `Pipeline` instance representing the collection group stage.
       */
      collectionGroup(options: CollectionGroupStageOptions): Pipeline;
      /**
       * Specifies the source as a database.
       *
       * @returns A new Pipeline object with the database as the source.
       */
      database(): Pipeline;
      /**
       * Returns all documents from the entire database.
       * @param options - Options defining how a DatabaseStage is evaluated.
       */
      database(options: DatabaseStageOptions): Pipeline;
      /**
       * Specifies the source as a set of documents.
       *
       * @param docs The document references.
       * @returns A new Pipeline object with the documents as the source.
       */
      documents(docs: Array<string | DocumentReference>): Pipeline;
      /**
       * Set the pipeline's source to the documents specified by the given paths and DocumentReferences.
       *
       * @param options - Options defining how this DocumentsStage is evaluated.
       *
       * @throws {@FirestoreError} Thrown if any of the provided DocumentReferences target a different project or database than the pipeline.
       */
      documents(options: DocumentsStageOptions): Pipeline;
      /**
       * Convert the given Query into an equivalent Pipeline.
       *
       * @param query A Query to be converted into a Pipeline.
       *
       * @throws {@FirestoreError} Thrown if any of the provided DocumentReferences target a different project or database than the pipeline.
       */
      createFrom(query: Query): Pipeline;
    }

    /**
     * Creates a new Pipeline targeted at a subcollection relative to the current document context.
     * This creates a pipeline without a database instance, suitable for embedding as a subquery.
     * If executed directly, this pipeline will fail.
     *
     * @param path - The relative path to the subcollection.
     * @returns A new `Pipeline` object configured to read from the specified subcollection.
     */
    export function subcollection(path: string): Pipeline;
    /**
     * Creates a new Pipeline targeted at a subcollection relative to the current document context.
     *
     * @param options - Options defining how this SubcollectionStage is evaluated.
     * @returns A new `Pipeline` object configured to read from the specified subcollection.
     */
    export function subcollection(options: SubcollectionStageOptions): Pipeline;

    /**
     * The Pipeline class provides a flexible and expressive framework for building complex data
     * transformation and query pipelines for Firestore.
     *
     * A pipeline takes data sources, such as Firestore collections or collection groups, and applies
     * a series of stages that are chained together. Each stage takes the output from the previous stage
     * (or the data source) and produces an output for the next stage (or as the final output of the
     * pipeline).
     *
     * Expressions can be used within each stage to filter and transform data through the stage.
     *
     * NOTE: The chained stages do not prescribe exactly how Firestore will execute the pipeline.
     * Instead, Firestore only guarantees that the result is the same as if the chained stages were
     * executed in order.
     *
     * Usage Examples:
     *
     * ```typescript
     * const db: Firestore; // Assumes a valid firestore instance.
     *
     * // Example 1: Select specific fields and rename 'rating' to 'bookRating'
     * const results1 = await db.pipeline()
     *     .collection("books")
     *     .select("title", "author", Field.of("rating").as("bookRating"))
     *     .execute();
     *
     * // Example 2: Filter documents where 'genre' is "Science Fiction" and 'published' is after 1950
     * const results2 = await db.pipeline()
     *     .collection("books")
     *     .where(and(Field.of("genre").equal("Science Fiction"), Field.of("published").greaterThan(1950)))
     *     .execute();
     *
     * // Example 3: Calculate the average rating of books published after 1980
     * const results3 = await db.pipeline()
     *     .collection("books")
     *     .where(Field.of("published").greaterThan(1980))
     *     .aggregate(average(Field.of("rating")).as("averageRating"))
     *     .execute();
     * ```
     */
    export class Pipeline {
      /**
       * Adds new fields to outputs from previous stages.
       *
       * This stage allows you to compute values on-the-fly based on existing data from previous
       * stages or constants. You can use this to create new fields or overwrite existing ones (if there
       * is name overlaps).
       *
       * The added fields are defined using `Selectable`s, which can be:
       *
       * - `Field`: References an existing document field.
       * - `Expression`: Either a literal value (see {@link constant}) or a computed value
       *   (see {@FunctionExpression}) with an assigned alias using {@link Expression#as}.
       *
       *
       * ```typescript
       * firestore.pipeline().collection("books")
       *   .addFields(
       *     field("rating").as("bookRating"), // Rename 'rating' to 'bookRating'
       *     add(5, field("quantity")).as("totalCost")  // Calculate 'totalCost'
       *   );
       * ```
       *
       * @param field The first field to add to the documents, specified as a `Selectable`.
       * @param additionalFields Optional additional fields to add to the documents, specified as `Selectable`s.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      addFields(field: Selectable, ...additionalFields: Selectable[]): Pipeline;
      /**
       * Adds new fields to outputs from previous stages.
       *
       * This stage allows you to compute values on-the-fly based on existing data from previous
       * stages or constants. You can use this to create new fields or overwrite existing ones (if there
       * is name overlaps).
       *
       * The added fields are defined using `Selectable`s, which can be:
       *
       * - `Field`: References an existing document field.
       * - `Expression`: Either a literal value (see {@link constant}) or a computed value
       *   (see {@FunctionExpression}) with an assigned alias using {@link Expression#as}.
       *
       *
       * ```typescript
       * firestore.pipeline().collection("books")
       *   .addFields(
       *     field("rating").as("bookRating"), // Rename 'rating' to 'bookRating'
       *     add(5, field("quantity")).as("totalCost")  // Calculate 'totalCost'
       *   );
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      addFields(options: AddFieldsStageOptions): Pipeline;
      /**
       * Remove fields from outputs of previous stages.
       *
       *
       * ```typescript
       * firestore.pipeline().collection('books')
       *   // removes field 'rating' and 'cost' from the previous stage outputs.
       *   .removeFields(
       *     field('rating'),
       *     'cost'
       *   );
       * ```
       *
       * @param fieldValue The first field to remove.
       * @param additionalFields Optional additional fields to remove.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      removeFields(
        fieldValue: Field | string,
        ...additionalFields: Array<Field | string>
      ): Pipeline;

      /**
       * Creates a stage that removes specified fields from the outputs of previous stages in the pipeline.
       *
       * This is useful for reducing the data transferred, by excluding fields
       * that are no longer needed after certain pipeline operations.
       *
       *
       * ```typescript
       * firestore.pipeline().collection('books')
       *   // Removes the 'rating' and 'cost' fields from the documents
       *   // processed by the preceding stages.
       *   .removeFields({
       *     fields: [
       *       field('rating'),
       *       'cost'
       *     ]
       *   });
       * ```
       *
       * @param options - An object containing the configuration for this stage.
       *   @param options.fields - An array of field names (strings) or `Expression` objects
       *     representing the fields to be removed from the output.
       * @returns A new `Pipeline` object with this stage appended to the stage list.
       */
      removeFields(options: RemoveFieldsStageOptions): Pipeline;

      /**
       * Binds one or more expressions to variable names within the pipeline's scope.
       *
       * The `define` stage establishes a variable environment for the pipeline. It assigns
       * the provided expressions to specific aliases. These variables remain in scope for all
       * subsequent stages (and any nested subqueries), where they can be referenced using the
       * `variable()` function.
       *
       * This is primarily used to improve query ergonomics by preventing the duplication of
       * complex expression trees, or to explicitly pass state from an outer pipeline into an
       * inner subquery.
       *
       * @example
       * ```typescript
       * // Bind a mathematical expression to a variable to cleanly reference it multiple times.
       * db.pipeline().collection("products")
       *   .define(
       *     field("price").multiply(0.8).as("discountedPrice")
       *   )
       *   .where(variable("discountedPrice").lessThan(50))
       *   .select("name", variable("discountedPrice"));
       * ```
       *
       * @param aliasedExpression - The first expression to bind to a variable.
       * @param additionalExpressions - Optional additional expressions to bind to a variable.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      define(
        aliasedExpression: AliasedExpression,
        ...additionalExpressions: AliasedExpression[]
      ): Pipeline;
      /**
       * Binds one or more expressions to variable names within the pipeline's scope.
       *
       * The `define` stage establishes a variable environment for the pipeline. It assigns
       * the provided expressions to specific aliases. These variables remain in scope for all
       * subsequent stages (and any nested subqueries), where they can be referenced using the
       * `variable()` function.
       *
       * This is primarily used to improve query ergonomics by preventing the duplication of
       * complex expression trees, or to explicitly pass state from an outer pipeline into an
       * inner subquery.
       *
       * @example
       * ```typescript
       * // Bind a mathematical expression to a variable to cleanly reference it multiple times.
       * db.pipeline().collection("products")
       *   .define({
       *     variables: [field("price").multiply(0.8).as("discountedPrice")]
       *   })
       *   .where(variable("discountedPrice").lessThan(50))
       *   .select("name", variable("discountedPrice"));
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      define(options: DefineStageOptions): Pipeline;

      /**
       * Converts this Pipeline into an expression that evaluates to an array of map (objects), where each result document of the pipeline is represented as a map in the returned array.
       *
       * <p>Result Unwrapping:</p>
       * <ul>
       *  <li>If the items have a single field, their values are unwrapped and returned directly in the array.</li>
       *  <li>If the items have multiple fields, they are returned as objects in the array.</li>
       * </ul>
       *
       * @example
       * ```typescript
       * // Get a list of reviewers for each book
       * db.pipeline().collection("books")
       *     .define(field("id").as("current_book_id"))
       *     .addFields(
       *         db.pipeline().collection("reviews")
       *             .where(field("book_id").equal(variable("current_book_id")))
       *             .select(field("reviewer"))
       *             .toArrayExpression()
       *             .as("reviewers");
       *     )
       * ```
       *
       * Output:
       * ```json
       * [
       *   {
       *     "id": "1",
       *     "title": "1984",
       *     "reviewers": ["Alice", "Bob"]
       *   }
       * ]
       * ```
       *
       * Multiple Fields:
       * ```typescript
       * // Get a list of reviews (reviewer and rating) for each book
       * db.pipeline().collection("books")
       *     .define(field("id").as("book_id"))
       *     .addFields(
       *         db.pipeline().collection("reviews")
       *             .where(field("book_id").equal(variable("book_id")))
       *             .select(field("reviewer"), field("rating"))
       *             .toArrayExpression()
       *             .as("reviews"));
       * ```
       *
       * Output:
       * ```json
       * [
       *   {
       *     "id": "1",
       *     "title": "1984",
       *     "reviews": [
       *       { "reviewer": "Alice", "rating": 5 },
       *       { "reviewer": "Bob", "rating": 4 }
       *     ]
       *   }
       * ]
       * ```
       *
       * @returns An `Expression` representing the execution of this pipeline.
       */
      toArrayExpression(): Expression;

      /**
       * Converts this Pipeline into an expression that evaluates to a single scalar result.
       *
       * <p><b>Runtime Validation:</b> The runtime validates that the result set contains zero or one item. If
       * zero items, it evaluates to `null`.</p>
       *
       * <p>Result Unwrapping:</p>
       * <ul>
       *  <li>If the item has a single field, its value is unwrapped and returned directly.</li>
       *  <li>If the item has multiple fields, they are returned as an object.</li>
       * </ul>
       *
       * @example
       * ```typescript
       * // Calculate average rating for a restaurant
       * db.pipeline().collection("restaurants")
       *     .define(field("id").as("current_restaurant_id"))
       *     .addFields(
       *       db.pipeline().collection("reviews")
       *         .where(field("restaurant_id").equal(variable("current_restaurant_id")))
       *         .aggregate(average("rating").as("avg"))
       *         // Unwraps the single "avg" field to a scalar double
       *         .toScalarExpression().as("average_rating")
       *    );
       * ```
       *
       * Output:
       * ```json
       * {
       *   "name": "The Burger Joint",
       *   "average_rating": 4.5
       * }
       * ```
       *
       * Multiple Fields:
       * ```typescript
       * // Calculate average rating AND count for a restaurant
       * db.pipeline().collection("restaurants")
       *     .define(field("id").as("current_restaurant_id"))
       *     .addFields(
       *       db.pipeline().collection("reviews")
       *         .where(field("restaurant_id").equal(variable("current_restaurant_id")))
       *         .aggregate(
       *           average("rating").as("avg"),
       *           count().as("count")
       *         )
       *         // Returns an object with "avg" and "count" fields
       *         .toScalarExpression().as("stats")
       *    );
       * ```
       *
       * Output:
       * ```json
       * {
       *   "name": "The Burger Joint",
       *   "stats": {
       *     "avg": 4.5,
       *     "count": 100
       *   }
       * }
       * ```
       *
       * @returns An `Expression` representing the execution of this pipeline.
       */
      toScalarExpression(): Expression;

      /**
       * Selects or creates a set of fields from the outputs of previous stages.
       *
       * <p>The selected fields are defined using `Selectable` expressions, which can be:
       *
       * <ul>
       *   <li>{@code string}: The name of an existing field.</li>
       *   <li>`Field`: A reference to an existing field.</li>
       *   <li>`Expression`: An expression (e.g., a {@link FunctionExpression}) that represents the result of an expression.,
       *       The Expression must be aliased using {@link Expression#as}.</li>
       * </ul>
       *
       *
       * ```typescript
       * firestore.pipeline().collection("books")
       *   .select(
       *     "firstName",
       *     field("lastName"),
       *     field("address").toUppercase().as("upperAddress"),
       *   );
       * ```
       *
       * @param selection The first field to include in the output documents, specified as a {@link
       *     Pipelines.Selectable} expression or a string value representing the field name.
       * @param additionalSelections Optional additional fields to include in the output documents, specified as {@link
       *     Pipelines.Selectable} expressions or {@code string} values representing field names.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      select(
        selection: Selectable | string,
        ...additionalSelections: Array<Selectable | string>
      ): Pipeline;

      /**
       * Selects or creates a set of fields from the outputs of previous stages.
       *
       * <p>The selected fields are defined using `Selectable` expressions, which can be:
       *
       * <ul>
       *   <li>{@code string}: The name of an existing field.</li>
       *   <li>`Field`: A reference to an existing field.</li>
       *   <li>`Expression`: An expression (e.g., a {@link FunctionExpression}) that represents the result of an expression.,
       *       The Expression must be aliased using {@link Expression#as}.</li>
       * </ul>
       *
       * If no selections are provided within the `options` (i.e., the `fields` array is empty),
       * the output of this stage will be an empty document. If the intention is to add new fields
       * without replacing existing ones, consider using {@link Pipeline#addFields} instead.
       *
       *
       * ```typescript
       * db.pipeline().collection("books")
       *   .select({
       *     fields: [
       *       "firstName",
       *       field("lastName"),
       *       field("address").toUppercase().as("upperAddress"),
       *     ]
       *   });
       * ```
       *
       * @param options An object of type {@link SelectStageOptions} that defines the selection criteria for this stage.
       *                It is expected to contain a `fields` property, which is an array of `Selectable` expressions.
       * @returns A new `Pipeline` object with this select stage appended to its list of stages.
       */
      select(options: SelectStageOptions): Pipeline;
      /**
       * @beta
       * Performs a delete operation on documents from previous stages.
       *
       * @return A new {@link Pipeline} object with this stage appended to the stage list.
       */
      delete(): Pipeline;
      /**
       * @beta
       * Performs an update operation using documents from previous stages.
       *
       * @return A new {@link Pipeline} object with this stage appended to the stage list.
       */
      update(): Pipeline;
      /**
       * @beta
       * Performs an update operation using documents from previous stages.
       *
       * @param transformedFields - The list of transformations to apply.
       * @return A new {@link Pipeline} object with this stage appended to the stage list.
       */
      update(transformedFields: AliasedExpression[]): Pipeline;
      /**
       * Filters the documents from previous stages to only include those matching the specified {@link
       * BooleanExpression}.
       *
       * <p>This stage allows you to apply conditions to the data, similar to a "WHERE" clause in SQL.
       * You can filter documents based on their field values, using implementations of {@link
       * BooleanExpression}, typically including but not limited to:
       *
       * <ul>
       *   <li>field comparators: {@link Function#equal}, {@link Function#lessThan} (less than), {@link
       *       Function#greaterThan} (greater than), etc.</li>
       *   <li>logical operators: {@link Function#and}, {@link Function#or}, {@link Function#not}, etc.</li>
       *   <li>advanced functions: {@link Function#regexMatch}, {@link
       *       Function#arrayContains}, etc.</li>
       * </ul>
       *
       *
       * ```typescript
       * firestore.pipeline().collection("books")
       *   .where(
       *     and(
       *         greaterThan(field("rating"), 4.0),   // Filter for ratings greater than 4.0
       *         field("genre").equal("Science Fiction") // Equivalent to greaterThan("genre", "Science Fiction")
       *     )
       *   );
       * ```
       *
       * @param condition The `BooleanExpression` to apply.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      where(condition: BooleanExpression): Pipeline;
      /**
       * Filters the documents from previous stages to only include those matching the specified {@link
       * BooleanExpression}.
       *
       * <p>This stage allows you to apply conditions to the data, similar to a "WHERE" clause in SQL.
       * You can filter documents based on their field values, using implementations of {@link
       * BooleanExpression}, typically including but not limited to:
       *
       * <ul>
       *   <li>field comparators: {@link Function#equal}, {@link Function#lessThan} (less than), {@link
       *       Function#greaterThan} (greater than), etc.</li>
       *   <li>logical operators: {@link Function#and}, {@link Function#or}, {@link Function#not}, etc.</li>
       *   <li>advanced functions: {@link Function#regexMatch}, {@link
       *       Function#arrayContains}, etc.</li>
       * </ul>
       *
       *
       * ```typescript
       * firestore.pipeline().collection("books")
       *   .where({
       *     filter: and(
       *         greaterThan(field("rating"), 4.0),   // Filter for ratings greater than 4.0
       *         field("genre").equal("Science Fiction") // Equivalent to greaterThan("genre", "Science Fiction")
       *     )
       *   });
       * ```
       *
       * @param options An object that specifies the filtering criteria. It is expected to contain a `filter` property of type `BooleanExpression`.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      where(options: WhereStageOptions): Pipeline;
      /**
       * Skips the first `offset` number of documents from the results of previous stages.
       *
       * <p>This stage is useful for implementing pagination in your pipelines, allowing you to retrieve
       * results in chunks. It is typically used in conjunction with `limit` to control the
       * size of each page.
       *
       *
       * ```typescript
       * // Retrieve the second page of 20 results
       * firestore.pipeline().collection("books")
       *     .sort(Field.of("published").descending())
       *     .offset(20)  // Skip the first 20 results
       *     .limit(20);   // Take the next 20 results
       * ```
       *
       * @param offset The number of documents to skip.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      offset(offset: number): Pipeline;

      /**
       * Skips a specified number of documents from the results of previous stages.
       *
       * This stage is useful for implementing pagination in your pipelines, enabling you to
       * retrieve results in manageable chunks. It is commonly used alongside {@link Pipeline.limit}
       * to define the size of each page.
       *
       * ```typescript
       * // Retrieve the second page of 20 results
       * firestore.pipeline().collection('books')
       *     .sort(field('published').descending())
       *     .offset(20)  // Skip the first 20 results
       *     .limit(20);   // Take the next 20 results
       * ```
       *
       * @param options An object containing the configuration for the offset stage,
       *   including the number of documents to skip.
       * @returns A new `Pipeline` object with this stage appended to the stage list.
       */
      offset(options: OffsetStageOptions): Pipeline;
      /**
       * Limits the maximum number of documents returned by previous stages to `limit`.
       *
       * <p>This stage is particularly useful when you want to retrieve a controlled subset of data from
       * a potentially large result set. It's often used for:
       *
       * <ul>
       *   <li>**Pagination:** In combination with `offset` to retrieve specific pages of
       *       results.</li>
       *   <li>**Limiting Data Retrieval:** To prevent excessive data transfer and improve performance,
       *       especially when dealing with large collections.</li>
       * </ul>
       *
       *
       * ```typescript
       * // Limit the results to the top 10 highest-rated books
       * firestore.pipeline().collection("books")
       *     .sort(Field.of("rating").descending())
       *     .limit(10);
       * ```
       *
       * @param limit The maximum number of documents to return.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      limit(limit: number): Pipeline;

      /**
       * Limits the maximum number of documents returned by previous stages.
       *
       * <p>This stage is particularly useful when you want to retrieve a controlled subset of data from
       * a potentially large result set. It's often used for:
       *
       * <ul>
       *   <li><b>Pagination:</b> In combination with `offset` to retrieve specific pages of
       *       results.</li>
       *   <li><b>Limiting Data Retrieval:</b> To prevent excessive data transfer and improve performance,
       *       especially when dealing with large collections.</li>
       * </ul>
       *
       *
       * ```typescript
       * // Limit the results to the top 10 highest-rated books
       * firestore.pipeline().collection('books')
       *     .sort(field('rating').descending())
       *     .limit({ limit: 10 });
       * ```
       *
       * @param options - An object that specifies the limit. It must contain a `limit` property, which is a number representing the maximum number of documents to return.
       * @returns A new `Pipeline` object with this stage appended to the stage list.
       */
      limit(options: LimitStageOptions): Pipeline;
      /**
       * Returns a set of distinct values from the inputs to this stage.
       *
       * This stage runs through the results from previous stages to include only results with
       * unique combinations of `Expression` values.
       *
       * The parameters to this stage are defined using `Selectable` expressions or strings:
       *
       * - {@code string}: Name of an existing field
       * - `Field`: References an existing document field.
       * - `AliasedExpression`: Represents the result of a function with an assigned alias name
       *   using {@link Expression#as}.
       *
       *
       * ```typescript
       * // Get a list of unique author names in uppercase and genre combinations.
       * firestore.pipeline().collection("books")
       *     .distinct(toUppercase(field("author")).as("authorName"), field("genre"), "publishedAt")
       *     .select("authorName");
       * ```
       *
       * @param group The `Selectable` expression or field name to consider when determining
       *     distinct value combinations.
       * @param additionalGroups Optional additional `Selectable` expressions to consider when determining distinct
       *     value combinations or strings representing field names.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      distinct(
        group: string | Selectable,
        ...additionalGroups: Array<string | Selectable>
      ): Pipeline;
      /**
       * Returns a set of distinct values from the inputs to this stage.
       *
       * This stage runs through the results from previous stages to include only results with
       * unique combinations of `Expression` values (`Field`, {@link Function}, etc).
       *
       * The parameters to this stage are defined using `Selectable` expressions or strings:
       *
       * - {@code string}: Name of an existing field
       * - `Field`: References an existing document field.
       * - `AliasedExpression`: Represents the result of a function with an assigned alias name
       *   using {@link Expression#as}.
       *
       *
       * ```typescript
       * // Get a list of unique author names in uppercase and genre combinations.
       * firestore.pipeline().collection("books")
       *     .distinct(toUppercase(field("author")).as("authorName"), field("genre"), "publishedAt")
       *     .select("authorName");
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      distinct(options: DistinctStageOptions): Pipeline;
      /**
       * Performs aggregation operations on the documents from previous stages.
       *
       * <p>This stage allows you to calculate aggregate values over a set of documents. You define the
       * aggregations to perform using `AliasedAggregate` expressions which are typically results of
       * calling {@link Expression#as} on `AggregateFunction` instances.
       *
       *
       * ```typescript
       * // Calculate the average rating and the total number of books
       * firestore.pipeline().collection("books")
       *     .aggregate(
       *         field("rating").average().as("averageRating"),
       *         countAll().as("totalBooks")
       *     );
       * ```
       *
       * @param accumulator The first `AliasedAggregate`, wrapping an `AggregateFunction`
       *     and providing a name for the accumulated results.
       * @param additionalAccumulators Optional additional `AliasedAggregate`, each wrapping an `AggregateFunction`
       *     and providing a name for the accumulated results.
       * @returns A new Pipeline object with this stage appended to the stage list.
       */
      aggregate(
        accumulator: AliasedAggregate,
        ...additionalAccumulators: AliasedAggregate[]
      ): Pipeline;
      /**
       * Performs optionally grouped aggregation operations on the documents from previous stages.
       *
       * <p>This stage allows you to calculate aggregate values over a set of documents, optionally
       * grouped by one or more fields or functions. You can specify:
       *
       * <ul>
       *   <li>**Grouping Fields or Functions:** One or more fields or functions to group the documents
       *       by. For each distinct combination of values in these fields, a separate group is created.
       *       If no grouping fields are provided, a single group containing all documents is used. Not
       *       specifying groups is the same as putting the entire inputs into one group.</li>
       *   <li>**Accumulators:** One or more accumulation operations to perform within each group. These
       *       are defined using `AliasedAggregate` expressions, which are typically created by
       *       calling {@link Expression#as} on `AggregateFunction` instances. Each aggregation
       *       calculates a value (e.g., sum, average, count) based on the documents within its group.</li>
       * </ul>
       *
       *
       * ```typescript
       * // Calculate the average rating for each genre.
       * firestore.pipeline().collection("books")
       *   .aggregate({
       *       accumulators: [average(field("rating")).as("avg_rating")]
       *       groups: ["genre"]
       *       });
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage
       * list.
       */
      aggregate(options: AggregateStageOptions): Pipeline;
      /**
       * Performs a vector proximity search on the documents from the previous stage, returning the
       * K-nearest documents based on the specified query `vectorValue` and `distanceMeasure`. The
       * returned documents will be sorted in order from nearest to furthest from the query `vectorValue`.
       *
       *
       * ```typescript
       * // Find the 10 most similar books based on the book description.
       * const bookDescription = "Lorem ipsum...";
       * const queryVector: number[] = ...; // compute embedding of `bookDescription`
       *
       * firestore.pipeline().collection("books")
       *     .findNearest({
       *       field: 'embedding',
       *       vectorValue: queryVector,
       *       distanceMeasure: 'euclidean',
       *       limit: 10,                        // optional
       *       distanceField: 'computedDistance' // optional
       *     });
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      findNearest(options: FindNearestStageOptions): Pipeline;

      /**
       * Fully overwrites all fields in a document with those coming from a nested map.
       *
       * <p>This stage allows you to emit a map value as a document. Each key of the map becomes a field
       * on the document that contains the corresponding value.
       *
       *
       * ```typescript
       * // Input.
       * // {
       * //  'name': 'John Doe Jr.',
       * //  'parents': {
       * //    'father': 'John Doe Sr.',
       * //    'mother': 'Jane Doe'
       * //   }
       * // }
       *
       * // Emit parents as document.
       * firestore.pipeline().collection('people').replaceWith('parents');
       *
       * // Output
       * // {
       * //  'father': 'John Doe Sr.',
       * //  'mother': 'Jane Doe'
       * // }
       * ```
       *
       * @param fieldName The name of the field containing the nested map.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      replaceWith(fieldName: string): Pipeline;

      /**
       * Fully replaces all fields in a document with the fields from a map expression.
       *
       * <p>This stage allows you to transform the current document into a new one
       * by providing an `Expression` that evaluates to a map. Each key-value pair
       * in the resulting map will become a field-value pair in the document.
       *
       *
       * ```typescript
       * // Input document:
       * // {
       * //   'firstName': 'John',
       * //   'lastName': 'Doe',
       * //   'age': 30
       * // }
       *
       * // Replace the document's fields with a new map.
       * // The 'fullName' field will be created by concatenating 'firstName' and 'lastName'.
       * // The 'status' field will be a new static value.
       * firestore.pipeline().collection('users').replaceWith(map({
       *   fullName: concat(field('firstName'), ' ', field('lastName')),
       *   status: 'active'
       * }));
       *
       * // Output document:
       * // {
       * //   'fullName': 'John Doe',
       * //   'status': 'active'
       * // }
       * ```
       *
       * @param expr An `Expression` that evaluates to a map. The key-value pairs of this map will replace the document's fields.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      replaceWith(expr: Expression): Pipeline;

      /**
       * Fully overwrites all fields in a document with those coming from a map.
       *
       * <p>This stage allows you to transform the current document into a new one
       * by defining its new structure using a map expression. Each key in the
       * provided map expression becomes a field in the new document, with its
       * corresponding value. Values within the map can be literal values or
       * expressions that refer to fields from the input document.
       *
       *
       * ```typescript
       * // Input document:
       * // {
       * //  'productId': 'P123',
       * //  'itemName': 'Laptop',
       * //  'price': 1200,
       * //  'details': {
       * //    'weight': '2kg',
       * //    'color': 'silver'
       * //   }
       * // }
       *
       * // Replace the document with a new structure, selecting and renaming fields,
       * // and adding new literal values.
       * firestore.pipeline().collection('products').replaceWith(map({
       *   id: field('productId'),
       *   productName: field('itemName'),
       *   displayPrice: concat('$', field('price')),
       *   category: 'Electronics',
       *   weightInKg: field('details.weight')
       * }));
       *
       * // Output document:
       * // {
       * //  'id': 'P123',
       * //  'productName': 'Laptop',
       * //  'displayPrice': '$1200',
       * //  'category': 'Electronics',
       * //  'weightInKg': '2kg'
       * // }
       * ```
       *
       * @param options - An object that specifies the map expression to use for replacement.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      replaceWith(options: ReplaceWithStageOptions): Pipeline;

      /**
       * Performs a pseudo-random sampling of documents from the previous stage in the pipeline.
       *
       * This stage filters documents pseudo-randomly, returning a specified number of documents.
       *
       * Examples:
       *
       * ```typescript
       * // Sample 25 books, if available.
       * firestore.pipeline().collection('books')
       *     .sample(25);
       * ```
       *
       * @param documents The maximum number of documents to sample.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      sample(documents: number): Pipeline;
      /**
       * Performs a pseudo-random sampling of the documents from the previous stage.
       *
       * <p>This stage will filter documents pseudo-randomly. The 'options' parameter specifies how
       * sampling will be performed. See {@code SampleOptions} for more information.
       *
       * <p>Examples:
       *
       * // Sample 10 books, if available.
       * firestore.pipeline().collection("books")
       *     .sample({ documents: 10 });
       *
       * // Sample 50% of books.
       * firestore.pipeline().collection("books")
       *     .sample({ percentage: 0.5 });
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      sample(options: SampleStageOptions): Pipeline;
      /**
       * Performs union of all documents from two pipelines, including duplicates.
       *
       * <p>This stage will pass through documents from previous stage, and also pass through documents
       * from previous stage of the `other` {@code Pipeline} given in parameter. The order of documents
       * emitted from this stage is undefined.
       *
       *
       * ```typescript
       * // Emit documents from books collection and magazines collection.
       * firestore.pipeline().collection('books')
       *     .union(firestore.pipeline().collection('magazines'));
       * ```
       *
       * @param other The other {@code Pipeline} that is part of union.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      union(other: Pipeline): Pipeline;
      /**
       * Performs union of all documents from two pipelines, including duplicates.
       *
       * <p>This stage will pass through documents from previous stage, and also pass through documents
       * from previous stage of the `other` {@code Pipeline} given in parameter. The order of documents
       * emitted from this stage is undefined.
       *
       *
       * ```typescript
       * // Emit documents from books collection and magazines collection.
       * firestore.pipeline().collection('books')
       *     .union(firestore.pipeline().collection('magazines'));
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      union(options: UnionStageOptions): Pipeline;
      /**
       * Produces a document for each element in an input array.
       *
       * For each previous stage document, this stage will emit zero or more augmented documents. The
       * input array specified by the `selectable` parameter, will emit an augmented document for each input array element. The input array element will
       * augment the previous stage document by setting the `alias` field  with the array element value.
       *
       * When `selectable` evaluates to a non-array value (ex: number, null, absent), then the stage becomes a no-op for
       * the current input document, returning it as is with the `alias` field absent.
       *
       * No documents are emitted when `selectable` evaluates to an empty array.
       *
       *
       * ```typescript
       * // Input:
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tags": [ "comedy", "space", "adventure" ], ... }
       *
       * // Emit a book document for each tag of the book.
       * firestore.pipeline().collection("books")
       *     .unnest(field("tags").as('tag'), 'tagIndex');
       *
       * // Output:
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tag": "comedy", "tagIndex": 0, ... }
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tag": "space", "tagIndex": 1, ... }
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tag": "adventure", "tagIndex": 2, ... }
       * ```
       *
       * @param selectable A selectable expression defining the field to unnest and the alias to use for each un-nested element in the output documents.
       * @param indexField An optional string value specifying the field path to write the offset (starting at zero) into the array the un-nested element is from
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      unnest(selectable: Selectable, indexField?: string): Pipeline;
      /**
       * Produces a document for each element in an input array.
       *
       * For each previous stage document, this stage will emit zero or more augmented documents. The
       * input array specified by the `selectable` parameter, will emit an augmented document for each input array element. The input array element will
       * augment the previous stage document by setting the `alias` field  with the array element value.
       *
       * When `selectable` evaluates to a non-array value (ex: number, null, absent), then the stage becomes a no-op for
       * the current input document, returning it as is with the `alias` field absent.
       *
       * No documents are emitted when `selectable` evaluates to an empty array.
       *
       *
       * ```typescript
       * // Input:
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tags": [ "comedy", "space", "adventure" ], ... }
       *
       * // Emit a book document for each tag of the book.
       * firestore.pipeline().collection("books")
       *     .unnest(field("tags").as('tag'), 'tagIndex');
       *
       * // Output:
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tag": "comedy", "tagIndex": 0, ... }
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tag": "space", "tagIndex": 1, ... }
       * // { "title": "The Hitchhiker's Guide to the Galaxy", "tag": "adventure", "tagIndex": 2, ... }
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      unnest(options: UnnestStageOptions): Pipeline;
      /**
       * @beta
       *
       * Add a search stage to the Pipeline.
       *
       * @remarks This must be the first stage of the pipeline.
       * @remarks A limited set of expressions are supported in the search stage.
       *
       * @example
       * ```typescript
       * db.pipeline().collection('restaurants').search({
       *   query: documentMatches('breakfast')
       * })
       * ```
       *
       * @param options - An object that specifies required and optional parameters
       *                  for the stage.
       * @return A new `Pipeline` object with this stage appended to the stage list.
       */
      search(options: SearchStageOptions): Pipeline;
      /**
       * Sorts the documents from previous stages based on one or more `Ordering` criteria.
       *
       * <p>This stage allows you to order the results of your pipeline. You can specify multiple {@link
       * Ordering} instances to sort by multiple fields in ascending or descending order. If documents
       * have the same value for a field used for sorting, the next specified ordering will be used. If
       * all orderings result in equal comparison, the documents are considered equal and the order is
       * unspecified.
       *
       *
       * ```typescript
       * // Sort books by rating in descending order, and then by title in ascending order for books
       * // with the same rating
       * firestore.pipeline().collection("books")
       *     .sort(
       *         Ordering.of(field("rating")).descending(),
       *         Ordering.of(field("title"))  // Ascending order is the default
       *     );
       * ```
       *
       * @param ordering The first `Ordering` instance specifying the sorting criteria.
       * @param additionalOrderings Optional additional `Ordering` instances specifying the additional sorting criteria.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      sort(ordering: Ordering, ...additionalOrderings: Ordering[]): Pipeline;
      /**
       * Sorts the documents from previous stages based on one or more `Ordering` criteria.
       *
       * <p>This stage allows you to order the results of your pipeline. You can specify multiple {@link
       * Ordering} instances to sort by multiple fields in ascending or descending order. If documents
       * have the same value for a field used for sorting, the next specified ordering will be used. If
       * all orderings result in equal comparison, the documents are considered equal and the order is
       * unspecified.
       *
       *
       * ```typescript
       * // Sort books by rating in descending order, and then by title in ascending order for books
       * // with the same rating
       * firestore.pipeline().collection("books")
       *     .sort(
       *         Ordering.of(field("rating")).descending(),
       *         Ordering.of(field("title"))  // Ascending order is the default
       *     );
       * ```
       *
       * @param options - An object that specifies required and optional parameters for the stage.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      sort(options: SortStageOptions): Pipeline;
      /**
       * Adds a raw stage to the pipeline.
       *
       * <p>This method provides a flexible way to extend the pipeline's functionality by adding custom
       * stages. Each raw stage is defined by a unique `name` and a set of `params` that control its
       * behavior.
       *
       * <p>Example (Assuming there is no "where" stage available in SDK):
       *
       * ```typescript
       * // Assume we don't have a built-in "where" stage
       * firestore.pipeline().collection("books")
       *     .rawStage("where", [Field.of("published").lessThan(1900)]) // Custom "where" stage
       *     .select("title", "author");
       * ```
       *
       * @param name The unique name of the raw stage to add.
       * @param params A list of parameters to configure the raw stage's behavior.
       * @returns A new {@code Pipeline} object with this stage appended to the stage list.
       */
      rawStage(name: string, params: any[]): Pipeline;
      /**
       * Executes this pipeline and returns a Promise to represent the asynchronous operation.
       *
       * <p>The returned Promise can be used to track the progress of the pipeline execution
       * and retrieve the results (or handle any errors) asynchronously.
       *
       * <p>The pipeline results are returned in a `PipelineSnapshot` object, which contains a list of
       * `PipelineResult` objects. Each `PipelineResult` typically represents a single key/value map that
       * has passed through all the stages of the pipeline, however this might differ depending on the stages involved
       * in the pipeline. For example:
       *
       * <ul>
       *   <li>If there are no stages or only transformation stages, each `PipelineResult`
       *       represents a single document.</li>
       *   <li>If there is an aggregation, only a single `PipelineResult` is returned,
       *       representing the aggregated results over the entire dataset .</li>
       *   <li>If there is an aggregation stage with grouping, each `PipelineResult` represents a
       *       distinct group and its associated aggregated values.</li>
       * </ul>
       *
       *
       * ```typescript
       * const futureResults = await firestore.pipeline().collection("books")
       *     .where(greaterThan(Field.of("rating"), 4.5))
       *     .select("title", "author", "rating")
       *     .execute();
       * ```
       *
       * @param pipelineExecuteOptions - Optionally specify pipeline execution behavior.
       * @returns A Promise representing the asynchronous pipeline execution.
       */
      execute(
        pipelineExecuteOptions?: PipelineExecuteOptions,
      ): Promise<PipelineSnapshot>;

      /**
       * Executes this pipeline and streams the results as `PipelineResult`s.
       *
       * @returns {NodeJS.ReadableStream} A Node.js ReadableStream that emits `PipelineResult` objects.
       *
       * @example
       * ```typescript
       * firestore.pipeline().collection("books")
       *     .where(greaterThan(Field.of("rating"), 4.5))
       *     .select("title", "author", "rating")
       *     .stream()
       *     .on('data', (pipelineResult) => {
       *       console.log(pipelineResult);
       *     })
       *     .on('end', () => {
       *       console.log('Stream ended.');
       *     });
       * ```
       */
      stream(): NodeJS.ReadableStream;
    }
    /**
     * Options defining how a Pipeline is evaluated.
     */
    export type PipelineExecuteOptions = {
      /**
       * Specifies the index mode for the query.
       */
      indexMode?: 'recommended';
      /**
       * @beta Options used to configure explain queries. */
      explainOptions?: {
        /**
         * The explain mode configures what explain data
         * and query results are returned from the Pipeline query.
         *
         * `"execute"` - [DEFAULT] Execute the Pipeline and return results
         * `"analyze"` - Plan the query and execute, returning both the planner
         *               information and the Pipeline query results.
         */
        mode?: 'execute' | 'analyze';
        /**
         * Specifies the output format of the query planner information.
         */
        outputFormat?: 'text';
      };
      /**
       * An escape hatch to set options not known at SDK build time. These values
       * will be passed directly to the Firestore backend and not used by the SDK.
       *
       * The option name will be used as provided. And must match the name
       * format used by the backend (hint: use a snake_case_name).
       *
       * Custom option values can be any type supported
       * by Firestore (for example: string, boolean, number, map, …). Value types
       * not known to the SDK will be rejected.
       *
       * Values specified in rawOptions will take precedence over any options
       * with the same name set by the SDK.
       *
       * Override the `example_option`:
       * ```
       *   execute({
       *     pipeline: myPipeline,
       *     rawOptions: {
       *       // Override `example_option`. This will not
       *       // merge with the existing `example_option` object.
       *       "example_option": {
       *         foo: "bar"
       *       }
       *     }
       *   }
       * ```
       *
       * `rawOptions` supports dot notation, if you want to override
       * a nested option.
       * ```
       *   execute({
       *     pipeline: myPipeline,
       *     rawOptions: {
       *       // Override `example_option.foo` and do not override
       *       // any other properties of `example_option`.
       *       "example_option.foo": "bar"
       *     }
       *   }
       * ```
       */
      rawOptions?: {
        [name: string]: unknown;
      };
    };
    /**
     * Options defining how a Stage is evaluated.
     */
    export type StageOptions = {
      /**
       * An escape hatch to set options not known at SDK build time. These values
       * will be passed directly to the Firestore backend and not used by the SDK.
       *
       * The option name will be used as provided. And must match the name
       * format used by the backend (hint: use a snake_case_name).
       *
       * Raw option values can be any type supported
       * by Firestore (for example: string, boolean, number, map, …). Value types
       * not known to the SDK will be rejected.
       *
       * Values specified in rawOptions will take precedence over any options
       * with the same name set by the SDK.
       *
       * `rawOptions` supports dot notation, if you want to override
       * a nested option.
       */
      rawOptions?: {
        [name: string]: unknown;
      };
    };
    /**
     * Options defining how a CollectionStage is evaluated. See {@link PipelineSource.collection}.
     */
    export type CollectionStageOptions = StageOptions & {
      /**
       * Name or reference to the collection that will be used as the Pipeline source.
       */
      collection: string | CollectionReference;

      /**
       * Specifies the name of an index to be used for a query, overriding the query optimizer's default choice.
       * This can be useful for performance tuning in specific scenarios where the default index selection
       * does not yield optimal performance.
       *
       * @remarks This property is optional. When provided, it should be the exact name of the index to force.
       */
      forceIndex?: string;
    };

    /**
     * Defines the configuration options for a {@link CollectionGroupStage} within a pipeline.
     * This type extends {@link StageOptions} and provides specific settings for how a collection group
     * is identified and processed during pipeline execution.
     *
     * @see {@link PipelineSource.collectionGroup} to create a collection group stage.
     */
    export type CollectionGroupStageOptions = StageOptions & {
      /**
       * ID of the collection group to use as the Pipeline source.
       */
      collectionId: string;

      /**
       * Specifies the name of an index to be used for a query, overriding the query optimizer's default choice.
       * This can be useful for performance tuning in specific scenarios where the default index selection
       * does not yield optimal performance.
       *
       * @remarks This property is optional. When provided, it should be the exact name of the index to force.
       */
      forceIndex?: string;
    };

    /**
     * Options defining how a SubcollectionStage is evaluated.
     */
    export type SubcollectionStageOptions = StageOptions & {
      /**
       * The relative path to the subcollection.
       */
      path: string;
    };

    /**
     * Options defining how a DefineStage is evaluated. See {@link Pipeline.define}.
     */
    export type DefineStageOptions = StageOptions & {
      /**
       * The variables to define.
       */
      variables: AliasedExpression[];
    };

    /**
     * Options defining how a DatabaseStage is evaluated. See {@link PipelineSource.database}.
     */
    export type DatabaseStageOptions = StageOptions & {};
    /**
     * Options defining how a DocumentsStage is evaluated. See {@link PipelineSource.documents}.
     */
    export type DocumentsStageOptions = StageOptions & {
      /**
       * An array of paths and DocumentReferences specifying the individual documents that will be the source of this pipeline.
       * The converters for these DocumentReferences will be ignored and not have an effect on this pipeline.
       * There must be at least one document specified in the array.
       */
      docs: Array<string | DocumentReference>;
    };

    /**
     * Options defining how an AddFieldsStage is evaluated. See {@link Pipeline.addFields}.
     */
    export type AddFieldsStageOptions = StageOptions & {
      /**
       *  The fields to add to each document, specified as a `Selectable`.
       *  At least one field is required.
       */
      fields: Selectable[];
    };
    /**
     * Options defining how a RemoveFieldsStage is evaluated. See {@link Pipeline.removeFields}.
     */
    export type RemoveFieldsStageOptions = StageOptions & {
      /**
       * The fields to remove from each document.
       */
      fields: Array<Field | string>;
    };
    /**
     * Options defining how a SelectStage is evaluated. See {@link Pipeline.select}.
     */
    export type SelectStageOptions = StageOptions & {
      /**
       * The fields to include in the output documents, specified as `Selectable` expression
       * or as a string value indicating the field name.
       */
      selections: Array<Selectable | string>;
    };
    /**
     * Options defining how a WhereStage is evaluated. See {@link Pipeline.where}.
     */
    export type WhereStageOptions = StageOptions & {
      /**
       * The `BooleanExpression` to apply as a filter for each input document to this stage.
       */
      condition: BooleanExpression;
    };
    /**
     * Options defining how an OffsetStage is evaluated. See {@link Pipeline.offset}.
     */
    export type OffsetStageOptions = StageOptions & {
      /**
       * The number of documents to skip.
       */
      offset: number;
    };
    /**
     * Options defining how a LimitStage is evaluated. See {@link Pipeline.limit}.
     */
    export type LimitStageOptions = StageOptions & {
      /**
       * The maximum number of documents to return.
       */
      limit: number;
    };
    /**
     * Options defining how a DistinctStage is evaluated. See {@link Pipeline.distinct}.
     */
    export type DistinctStageOptions = StageOptions & {
      /**
       * The `Selectable` expressions or field names to consider when determining
       * distinct value combinations (groups).
       */
      groups: Array<string | Selectable>;
    };
    /**
     * Options defining how an AggregateStage is evaluated. See {@link Pipeline.aggregate}.
     */
    export type AggregateStageOptions = StageOptions & {
      /**
       * The `AliasedAggregate` values specifying aggregate operations to
       * perform on the input documents.
       */
      accumulators: AliasedAggregate[];
      /**
       * The `Selectable` expressions or field names to consider when determining
       * distinct value combinations (groups), which will be aggregated over.
       */
      groups?: Array<string | Selectable>;
    };
    /**
     * Options defining how a FindNearestStage is evaluated. See {@link Pipeline.findNearest:VectorQueryOptions}.
     */
    export type FindNearestStageOptions = StageOptions & {
      /**
       * Specifies the field to be used. This can be a string representing the field path
       * (e.g., 'fieldName', 'nested.fieldName') or an object of type `Field`
       * representing a more complex field expression.
       */
      field: Field | string;
      /**
       * Specifies the query vector value, to which the vector distance will be computed.
       */
      vectorValue: VectorValue | number[];
      /**
       * Specifies the method used to compute the distance between vectors.
       *
       * Possible values are:
       * - `'euclidean'`: Euclidean distance.
       * - `'cosine'`: Cosine similarity.
       * - `'dot_product'`: Dot product.
       */
      distanceMeasure: 'euclidean' | 'cosine' | 'dot_product';
      /**
       * The maximum number of documents to return from the FindNearest stage.
       */
      limit?: number;
      /**
       * If set, specifies the field on the output documents that will contain
       * the computed vector distance for the document. If not set, the computed
       * vector distance will not be returned.
       */
      distanceField?: string;
    };
    /**
     * Options defining how a ReplaceWithStage is evaluated. See {@link Pipeline.replaceWith}.
     */
    export type ReplaceWithStageOptions = StageOptions & {
      /**
       * The name of a field that contains a map or an `Expression` that
       * evaluates to a map.
       */
      map: Expression | string;
    };
    /**
     * Defines the options for evaluating a sample stage within a pipeline.
     * This type combines common {@link StageOptions} with a specific configuration
     * where only one of the defined sampling methods can be applied.
     *
     * See {@link Pipeline.sample} to create a sample stage..
     */
    export type SampleStageOptions = StageOptions &
      OneOf<{
        /**
         * If set, specifies the sample rate as a percentage of the
         * input documents.
         *
         * Cannot be set when `documents: number` is set.
         */
        percentage: number;
        /**
         * If set, specifies the sample rate as a total number of
         * documents to sample from the input documents.
         *
         * Cannot be set when `percentage: number` is set.
         */
        documents: number;
      }>;
    /**
     * Options defining how a UnionStage is evaluated. See {@link Pipeline.union}.
     */
    export type UnionStageOptions = StageOptions & {
      /**
       * Specifies the other Pipeline to union with.
       */
      other: Pipeline;
    };

    /**
     * Represents the specific options available for configuring an `UnnestStage` within a pipeline.
     */
    export type UnnestStageOptions = StageOptions & {
      /**
       * A `Selectable` object that defines an array expression to be un-nested
       * and the alias for the un-nested field.
       */
      selectable: Selectable;
      /**
       * If set, specifies the field on the output documents that will contain the
       * offset (starting at zero) that the element is from the original array.
       */
      indexField?: string;
    };
    /**
     * Options defining how a SortStage is evaluated. See {@link Pipeline.sort}.
     */
    export type SortStageOptions = StageOptions & {
      /**
       * Orderings specify how the input documents are sorted.
       * One or more ordering are required.
       */
      orderings: Ordering[];
    };

    ///**
    // * @beta
    // * Specifies if the `matches` and `snippet` expressions will enhance the user
    // * provided query to perform matching of synonyms, misspellings, lemmatization,
    // * stemming.
    // *
    // * required - search will fail if the query enhancement times out or if the query
    // *                    enhancement is not supported by the project's DRZ compliance
    // *                    requirements.
    // * preferred - search will fall back to the un-enhanced, user provided query, if
    // *                    the query enhancement fails.
    // */
    // TODO(search) enable with backend support
    // export type QueryEnhancement = 'disabled' | 'required' | 'preferred';

    /**
     * @beta
     *
     * Options defining how a SearchStage is evaluated. See {@link @firebase/firestore/pipelines#Pipeline.(search)}.
     */
    export type SearchStageOptions = StageOptions & {
      /**
       * Specifies the search query that will be used to query and score documents
       * by the search stage.
       *
       * The query can be expressed as an `Expression`, which will be used to score
       * and filter the results. Not all expressions supported by Pipelines
       * are supported in the Search query.
       *
       * @example
       * ```typescript
       * db.pipeline().collection('restaurants').search({
       *   query: documentMatches('breakfast')
       * })
       * ```
       *
       * The query can also be expressed as a string in the search domain-specific language (DSL):
       *
       * @example
       * ```typescript
       * db.pipeline().collection('restaurants').search({
       *   query: 'breakfast'
       * })
       * ```
       */
      query: BooleanExpression | string;

      ///**
      // * The BCP-47 language code of text in the search query, such as, “en-US” or “sr-Latn”
      // */
      // TODO(search) enable with backend support
      //languageCode?: string;

      // TODO(search) add indexPartition after languageCode

      ///**
      // * The maximum number of documents to retrieve. Documents will be retrieved in the
      // * pre-sort order specified by the search index.
      // */
      // TODO(search) enable with backend support
      //retrievalDepth?: number;

      /**
       * Orderings specify how the input documents are sorted.
       * One or more ordering are required.
       */
      sort?: Ordering | Ordering[];

      // /**
      //  * The number of documents to skip.
      //  */
      // TODO(search) enable with backend support
      // offset?: number;

      // /**
      //  * The maximum number of documents to return from the Search stage.
      //  */
      // TODO(search) enable with backend support
      // limit?: number;

      // /**
      //  * The fields to keep or add to each document,
      //  * specified as an array of {@link @firebase/firestore/pipelines#Selectable}.
      //  */
      // TODO(search) enable with backend support
      // select?: Array<Selectable | string>;

      /**
       * The fields to add to each document, specified as a {@link @firebase/firestore/pipelines#Selectable}.
       */
      addFields?: Selectable[];

      // /**
      //  * Define the query expansion behavior used by full-text search expressions
      //  * in this search stage.
      //  */
      // TODO(search) enable with backend support
      // queryEnhancement?: QueryEnhancement;
    };

    // TODO(search) enable with backend support
    // /**
    //  * @beta
    //  * Options defining how a snippet expression is evaluated.
    //  */
    // export type SnippetOptions = {
    //   /**
    //    * Define the search query using the search domain-specific language (DSL).
    //    */
    //   rquery: string;
    //
    //   /**
    //    * The maximum width of the string estimated for a variable width font. The
    //    * unit is tenths of ems. The default is `160`.
    //    */
    //   maxSnippetWidth?: number;
    //
    //   /**
    //    * The maximum number of non-contiguous pieces of text in the returned snippet.
    //    * The default is `1`.
    //    */
    //   maxSnippets?: number;
    //
    //   /**
    //    * The string to join the pieces. The default value is '\n'
    //    */
    //   separator?: string;
    // };

    /**
     * Represents a field value within the explain statistics, which can be a primitive type (null, string, number, boolean)
     * or a recursively defined object where keys are strings and values are also `ExplainStatsFieldValue`.
     */
    export type ExplainStatsFieldValue =
      | null
      | string
      | number
      | boolean
      | {
          [key: string]: ExplainStatsFieldValue;
        }
      | ExplainStatsFieldValue[];

    /**
     * Represents the explanation statistics for a `Pipeline` query execution.
     * These statistics are available when the query is executed with explain or analyze
     * options enabled, providing insights into the query's performance and execution plan.
     */
    export class ExplainStats {
      /**
       * When explain stats were requested with `outputFormat = 'text'`, this returns
       * the explain stats string verbatium as returned from the Firestore backend.
       *
       * If explain stats were requested with `outputFormat = 'json'`, this returns
       * the explain stats as stringified JSON, which was returned from the Firestore backend.
       */
      get text(): string;
      /**
       * Returns the explain stats as an encoded protocol buffer message, typically wrapped in a `google.protobuf.Any` format.
       * This object includes a `type_url` field that identifies the specific type of the serialized message.
       * The caller is responsible for deserializing and unpacking this proto message to access the explain stats.
       */
      get rawData(): {
        type_url?: string | null;
        value?: Uint8Array | null;
      };
    }

    /**
     * Represents the results of a Firestore pipeline execution.
     *
     * A `PipelineSnapshot` contains zero or more `PipelineResult` objects
     * representing the documents returned by a pipeline query. It provides methods
     * to iterate over the documents and access metadata about the query results.
     *
     * @example
     * ```typescript
     * const snapshot = await firestore
     *   .pipeline()
     *   .collection('myCollection')
     *   .where(field('value').greaterThan(10))
     *   .execute();
     *
     * snapshot.results.forEach(doc => {
     *   console.log(doc.id, '=>', doc.data());
     * });
     * ```
     */
    export class PipelineSnapshot {
      /**
       * The Pipeline on which you called `execute()` in order to get this
       * `PipelineSnapshot`.
       */
      get pipeline(): Pipeline;

      /**
       * @beta An array of all the results in the `PipelineSnapshot`. */
      get results(): PipelineResult[];

      /**
       * The time at which the pipeline producing this result was executed.
       */
      get executionTime(): Timestamp;

      /**
       * Return stats from query explain.
       *
       * If `explainOptions.mode` was set to `execute` or left unset, then this returns `undefined`.
       */
      get explainStats(): ExplainStats | undefined;
    }

    /**
     * A PipelineResult contains data read from a Firestore Pipeline. The data can be extracted with the
     * `data()` or `get(String)` methods.
     *
     * <p>If the PipelineResult represents a non-document result, `ref` will return a undefined
     * value.
     */
    export class PipelineResult {
      readonly createTime: Timestamp | undefined;
      readonly updateTime: Timestamp | undefined;
      /**
       * The reference of the document, if it is a document; otherwise `undefined`.
       */
      get ref(): DocumentReference | undefined;

      /**
       * The ID of the document for which this PipelineResult contains data.
       * Returns `undefined` if the PipelineResult does not represent a document.
       */
      get id(): string | undefined;

      /**
       * Retrieves all fields of the document from the query result as a plain JavaScript object.
       *
       * @returns {DocumentData} An object containing all fields in the document.
       *
       * @example
       * ```typescript
       * let p = firestore.pipeline().collection('col');
       *
       * p.execute().then(results => {
       *   let data = results[0].data();
       *   console.log(`Retrieved data: ${JSON.stringify(data)}`);
       * });
       * ```
       */
      data(): DocumentData;
      /**
       * Retrieves the field specified by `field`.
       *
       * @param {string|FieldPath} fieldPath The field path
       * (e.g. 'foo' or 'foo.bar') to a specific field.
       * @returns {*} The data at the specified field location or undefined if no
       * such field exists.
       *
       * @example
       * ```typescript
       * let p = firestore.pipeline().collection('col');
       *
       * p.execute().then(results => {
       *   let field = results[0].get('a.b');
       *   console.log(`Retrieved field value: ${field}`);
       * });
       * ```
       */
      // We deliberately use `any` in the external API to not impose type-checking
      // on end users.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get(fieldPath: string | FieldPath): any;

      /**
       * Checks if this `PipelineResult` is equal to the provided `other` object.
       * Equality is determined by comparing the document's data and path.
       *
       * @param other The `PipelineResult` to compare against.
       * @returns `true` if this `PipelineResult` is equal to the provided value; `false` otherwise.
       */
      isEqual(other: PipelineResult): boolean;
    }
  }
}
declare module '@google-cloud/firestore' {
  export = FirebaseFirestore;
}
