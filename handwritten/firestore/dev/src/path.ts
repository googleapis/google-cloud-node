/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {google} from '../protos/firestore_v1_proto_api';
import {compareUtf8Strings, primitiveComparator} from './order';

import {isObject} from './util';
import {
  customObjectMessage,
  invalidArgumentMessage,
  validateMinNumberOfArguments,
  validateString,
} from './validate';

import api = google.firestore.v1;

/*!
 * The default database ID for this Firestore client. We do not yet expose the
 * ability to use different databases.
 */
export const DEFAULT_DATABASE_ID = '(default)';

/*!
 * A regular expression to verify an absolute Resource Path in Firestore. It
 * extracts the project ID, the database name and the relative resource path
 * if available.
 *
 * @type {RegExp}
 */
const RESOURCE_PATH_RE =
  /^projects\/([^/]+)\/databases\/([^/]+)(?:\/documents(?:\/([^/]+(?:\/[^/]+)*))?)?$/;

/*!
 * A regular expression to verify whether a field name can be passed to the
 * backend without escaping.
 *
 * @type {RegExp}
 */
const UNESCAPED_FIELD_NAME_RE = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/*!
 * A regular expression to verify field paths that are passed to the API as
 * strings. Field paths that do not match this expression have to be provided
 * as a [FieldPath]{@link FieldPath} object.
 *
 * @type {RegExp}
 */
const FIELD_PATH_RE = /^[^*~/[\]]+$/;

/**
 * An abstract class representing a Firestore path.
 *
 * Subclasses have to implement `split()` and `canonicalString()`.
 *
 * @private
 * @internal
 * @class
 */
abstract class Path<T> {
  /**
   * Creates a new Path with the given segments.
   *
   * @private
   * @internal
   * @private
   * @param segments Sequence of parts of a path.
   */
  constructor(protected readonly segments: string[]) {}

  /**
   * Returns the number of segments of this field path.
   *
   * @private
   * @internal
   */
  get size(): number {
    return this.segments.length;
  }

  abstract construct(segments: string[] | string): T;
  abstract split(relativePath: string): string[];

  /**
   * Create a child path beneath the current level.
   *
   * @private
   * @internal
   * @param relativePath Relative path to append to the current path.
   * @returns The new path.
   */
  append(relativePath: Path<T> | string): T {
    if (relativePath instanceof Path) {
      return this.construct(this.segments.concat(relativePath.segments));
    }
    return this.construct(this.segments.concat(this.split(relativePath)));
  }

  /**
   * Returns the path of the parent node.
   *
   * @private
   * @internal
   * @returns The new path or null if we are already at the root.
   */
  parent(): T | null {
    if (this.segments.length === 0) {
      return null;
    }

    return this.construct(this.segments.slice(0, this.segments.length - 1));
  }

  /**
   * Checks whether the current path is a prefix of the specified path.
   *
   * @private
   * @internal
   * @param other The path to check against.
   * @returns 'true' iff the current path is a prefix match with 'other'.
   */
  isPrefixOf(other: Path<T>): boolean {
    if (other.segments.length < this.segments.length) {
      return false;
    }

    for (let i = 0; i < this.segments.length; i++) {
      if (this.segments[i] !== other.segments[i]) {
        return false;
      }
    }

    return true;
  }

  /**
   * Compare the current path against another Path object.
   *
   * Compare the current path against another Path object. Paths are compared segment by segment,
   * prioritizing numeric IDs (e.g., "__id123__") in numeric ascending order, followed by string
   * segments in lexicographical order.
   *
   * @private
   * @internal
   * @param other The path to compare to.
   * @returns -1 if current < other, 1 if current > other, 0 if equal
   */
  compareTo(other: Path<T>): number {
    const len = Math.min(this.segments.length, other.segments.length);
    for (let i = 0; i < len; i++) {
      const comparison = this.compareSegments(
        this.segments[i],
        other.segments[i],
      );
      if (comparison !== 0) {
        return comparison;
      }
    }
    return primitiveComparator(this.segments.length, other.segments.length);
  }

  private compareSegments(lhs: string, rhs: string): number {
    const isLhsNumeric = this.isNumericId(lhs);
    const isRhsNumeric = this.isNumericId(rhs);

    if (isLhsNumeric && !isRhsNumeric) {
      // Only lhs is numeric
      return -1;
    } else if (!isLhsNumeric && isRhsNumeric) {
      // Only rhs is numeric
      return 1;
    } else if (isLhsNumeric && isRhsNumeric) {
      // both numeric
      return this.compareNumbers(
        this.extractNumericId(lhs),
        this.extractNumericId(rhs),
      );
    } else {
      // both non-numeric
      return compareUtf8Strings(lhs, rhs);
    }
  }

  // Checks if a segment is a numeric ID (starts with "__id" and ends with "__").
  private isNumericId(segment: string): boolean {
    return segment.startsWith('__id') && segment.endsWith('__');
  }

  //  Extracts the long number from a numeric ID segment.
  private extractNumericId(segment: string): bigint {
    return BigInt(segment.substring(4, segment.length - 2));
  }

  private compareNumbers(lhs: bigint, rhs: bigint): number {
    if (lhs < rhs) {
      return -1;
    } else if (lhs > rhs) {
      return 1;
    } else {
      return 0;
    }
  }

  /**
   * Returns a copy of the underlying segments.
   *
   * @private
   * @internal
   * @returns A copy of the segments that make up this path.
   */
  toArray(): string[] {
    return this.segments.slice();
  }

  /**
   * Pops the last segment from this `Path` and returns a newly constructed
   * `Path`.
   *
   * @private
   * @internal
   * @returns The newly created Path.
   */
  popLast(): T {
    return this.construct(this.segments.slice(0, -1));
  }

  /**
   * Returns the last segment from this `Path`;
   *
   * @private
   * @internal
   * @returns The last segment of this Path.
   */
  lastSegment(): string {
    return this.get(this.size - 1);
  }

  /**
   * Returns the path segment at the specified index.
   * @param index
   */
  get(index: number): string {
    return this.segments[index];
  }

  /**
   * Returns `true` if this path is the immediate
   * parent of the given `potentialChild` path.
   * @param potentialChild
   */
  isImmediateParentOf(potentialChild: this): boolean {
    if (this.size + 1 !== potentialChild.size) {
      return false;
    }

    for (let i = 0; i < this.size; i++) {
      if (this.get(i) !== potentialChild.get(i)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Returns true if this `Path` is equal to the provided value.
   *
   * @private
   * @internal
   * @param other The value to compare against.
   * @returns true if this `Path` is equal to the provided value.
   */
  isEqual(other: Path<T>): boolean {
    return this === other || this.compareTo(other) === 0;
  }
}

/**
 * A slash-separated path for navigating resources within the current Firestore
 * instance.
 *
 * @private
 * @internal
 */
export class ResourcePath extends Path<ResourcePath> {
  /**
   * A default instance pointing to the root collection.
   * @private
   * @internal
   */
  static EMPTY = new ResourcePath();

  /**
   * Constructs a ResourcePath.
   *
   * @private
   * @internal
   * @param segments Sequence of names of the parts of the path.
   */
  constructor(...segments: string[]) {
    super(segments);
  }

  /**
   * Indicates whether this path points to a document.
   * @private
   * @internal
   */
  get isDocument(): boolean {
    return this.segments.length > 0 && this.segments.length % 2 === 0;
  }

  /**
   * Indicates whether this path points to a collection.
   * @private
   * @internal
   */
  get isCollection(): boolean {
    return this.segments.length % 2 === 1;
  }

  /**
   * The last component of the path.
   * @private
   * @internal
   */
  get id(): string | null {
    if (this.segments.length > 0) {
      return this.segments[this.segments.length - 1];
    }
    return null;
  }

  /**
   * Returns the location of this path relative to the root of the project's
   * database.
   * @private
   * @internal
   */
  get relativeName(): string {
    return this.segments.join('/');
  }

  /**
   * Constructs a new instance of ResourcePath.
   *
   * @private
   * @internal
   * @param segments Sequence of parts of the path.
   * @returns The newly created ResourcePath.
   */
  construct(segments: string[]): ResourcePath {
    return new ResourcePath(...segments);
  }

  /**
   * Splits a string into path segments, using slashes as separators.
   *
   * @private
   * @internal
   * @param relativePath The path to split.
   * @returns The split path segments.
   */
  split(relativePath: string): string[] {
    // We may have an empty segment at the beginning or end if they had a
    // leading or trailing slash (which we allow).
    return relativePath.split('/').filter(segment => segment.length > 0);
  }

  /**
   * Converts this path to a fully qualified ResourcePath.
   *
   * @private
   * @internal
   * @param projectId The project ID of the current Firestore project.
   * @returns A fully-qualified resource path pointing to the same element.
   */
  toQualifiedResourcePath(
    projectId: string,
    databaseId: string,
  ): QualifiedResourcePath {
    return new QualifiedResourcePath(projectId, databaseId, ...this.segments);
  }
}

/**
 * A slash-separated path that includes a project and database ID for referring
 * to resources in any Firestore project.
 *
 * @private
 * @internal
 */
export class QualifiedResourcePath extends ResourcePath {
  /**
   * The project ID of this path.
   */
  readonly projectId: string;

  /**
   * The database ID of this path.
   */
  readonly databaseId: string;

  /**
   * Constructs a Firestore Resource Path.
   *
   * @private
   * @internal
   * @param projectId The Firestore project id.
   * @param databaseId The Firestore database id.
   * @param segments Sequence of names of the parts of the path.
   */
  constructor(projectId: string, databaseId: string, ...segments: string[]) {
    super(...segments);

    this.projectId = projectId;
    this.databaseId = databaseId;
  }

  /**
   * String representation of the path relative to the database root.
   * @private
   * @internal
   */
  get relativeName(): string {
    return this.segments.join('/');
  }

  /**
   * Creates a resource path from an absolute Firestore path.
   *
   * @private
   * @internal
   * @param absolutePath A string representation of a Resource Path.
   * @returns The new ResourcePath.
   */
  static fromSlashSeparatedString(absolutePath: string): QualifiedResourcePath {
    const elements = RESOURCE_PATH_RE.exec(absolutePath);

    if (elements) {
      const project = elements[1];
      const database = elements[2];
      const root = new QualifiedResourcePath(project, database);

      if (!elements[3]) {
        return root;
      } else {
        return root.append(elements[3]);
      }
    }

    throw new Error(`Resource name '${absolutePath}' is not valid.`);
  }

  /**
   * Create a child path beneath the current level.
   *
   * @private
   * @internal
   * @param relativePath Relative path to append to the current path.
   * @returns The new path.
   */
  append(relativePath: ResourcePath | string): QualifiedResourcePath {
    // `super.append()` calls `QualifiedResourcePath.construct()` when invoked
    // from here and returns a QualifiedResourcePath.
    return super.append(relativePath) as QualifiedResourcePath;
  }

  /**
   * Create a child path beneath the current level.
   *
   * @private
   * @internal
   * @returns The new path.
   */
  parent(): QualifiedResourcePath | null {
    return super.parent() as QualifiedResourcePath | null;
  }

  /**
   * String representation of a ResourcePath as expected by the API.
   *
   * @private
   * @internal
   * @returns The representation as expected by the API.
   */
  get formattedName(): string {
    const components = [
      'projects',
      this.projectId,
      'databases',
      this.databaseId,
      'documents',
      ...this.segments,
    ];
    return components.join('/');
  }

  /**
   * Constructs a new instance of ResourcePath. We need this instead of using
   * the normal constructor because polymorphic 'this' doesn't work on static
   * methods.
   *
   * @private
   * @internal
   * @param segments Sequence of names of the parts of the path.
   * @returns The newly created QualifiedResourcePath.
   */
  construct(segments: string[]): QualifiedResourcePath {
    return new QualifiedResourcePath(
      this.projectId,
      this.databaseId,
      ...segments,
    );
  }

  /**
   * Convenience method to match the ResourcePath API. This method always
   * returns the current instance.
   *
   * @private
   * @internal
   */
  toQualifiedResourcePath(): QualifiedResourcePath {
    return this;
  }

  /**
   * Compare the current path against another ResourcePath object.
   *
   * @private
   * @internal
   * @param other The path to compare to.
   * @returns -1 if current < other, 1 if current > other, 0 if equal
   */
  compareTo(other: ResourcePath): number {
    if (other instanceof QualifiedResourcePath) {
      if (this.projectId < other.projectId) {
        return -1;
      }
      if (this.projectId > other.projectId) {
        return 1;
      }

      if (this.databaseId < other.databaseId) {
        return -1;
      }
      if (this.databaseId > other.databaseId) {
        return 1;
      }
    }

    return super.compareTo(other);
  }

  /**
   * Converts this ResourcePath to the Firestore Proto representation.
   * @private
   * @internal
   */
  toProto(): api.IValue {
    return {
      referenceValue: this.formattedName,
    };
  }
}

/**
 * Validates that the given string can be used as a relative or absolute
 * resource path.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param resourcePath The path to validate.
 * @throws if the string can't be used as a resource path.
 */
export function validateResourcePath(
  arg: string | number,
  resourcePath: string,
): void {
  if (typeof resourcePath !== 'string' || resourcePath === '') {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        'resource path',
      )} Path must be a non-empty string.`,
    );
  }

  if (resourcePath.indexOf('//') >= 0) {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        'resource path',
      )} Paths must not contain //.`,
    );
  }
}

/**
 * A dot-separated path for navigating sub-objects (e.g. nested maps) within a document.
 *
 * @class
 */
export class FieldPath extends Path<FieldPath> implements firestore.FieldPath {
  /**
   * A special sentinel value to refer to the ID of a document.
   *
   * @private
   * @internal
   */
  private static _DOCUMENT_ID = new FieldPath('__name__');

  /**
   * @private
   * @internal
   * Defines the minimum number of segments allowed in a FieldPath
   */
  get _minNumSegments(): number {
    return 1;
  }

  /**
   * Constructs a Firestore Field Path.
   *
   * @param {...string} segments Sequence of field names that form this path.
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   * let fieldPath = new FieldPath('f.o.o', 'bar');
   *
   * query.where(fieldPath, '==', 42).get().then(snapshot => {
   *   snapshot.forEach(document => {
   *     console.log(`Document contains {'f.o.o' : {'bar' : 42}}`);
   *   });
   * });
   * ```
   */
  constructor(...segments: string[]) {
    if (Array.isArray(segments[0])) {
      throw new Error(
        'The FieldPath constructor no longer supports an array as its first argument. ' +
          'Please unpack your array and call FieldPath() with individual arguments.',
      );
    }

    for (let i = 0; i < segments.length; ++i) {
      validateString(i, segments[i]);
      if (segments[i].length === 0) {
        throw new Error(`Element at index ${i} should not be an empty string.`);
      }
    }

    super(segments);

    validateMinNumberOfArguments('FieldPath', segments, this._minNumSegments);
  }

  /**
   * A special FieldPath value to refer to the ID of a document. It can be used
   * in queries to sort or filter by the document ID.
   *
   * @returns {FieldPath}
   */
  static documentId(): FieldPath {
    return FieldPath._DOCUMENT_ID;
  }

  /**
   * Create an empty FieldPath.
   * @private
   * @internal
   *
   * @returns {FieldPath}
   */
  static _emptyPath(): FieldPath {
    const result = new FieldPath('empty');
    result.segments.pop();
    return result;
  }

  /**
   * Turns a field path argument into a [FieldPath]{@link FieldPath}.
   * Supports FieldPaths as input (which are passed through) and dot-separated
   * strings.
   *
   * @private
   * @internal
   * @param {string|FieldPath} fieldPath The FieldPath to create.
   * @returns {FieldPath} A field path representation.
   */
  static fromArgument(fieldPath: string | firestore.FieldPath): FieldPath {
    // validateFieldPath() is used in all public API entry points to validate
    // that fromArgument() is only called with a Field Path or a string.
    return fieldPath instanceof FieldPath
      ? fieldPath
      : new FieldPath(...(fieldPath as string).split('.'));
  }

  /**
   * String representation of a FieldPath as expected by the API.
   *
   * @private
   * @internal
   * @override
   * @returns {string} The representation as expected by the API.
   */
  get formattedName(): string {
    return this.segments
      .map(str => {
        return UNESCAPED_FIELD_NAME_RE.test(str)
          ? str
          : '`' + str.replace(/\\/g, '\\\\').replace(/`/g, '\\`') + '`';
      })
      .join('.');
  }

  /**
   * Returns a string representation of this path.
   *
   * @private
   * @internal
   * @returns A string representing this path.
   */
  toString(): string {
    return this.formattedName;
  }

  /**
   * Splits a string into path segments, using dots as separators.
   *
   * @private
   * @internal
   * @override
   * @param {string} fieldPath The path to split.
   * @returns {Array.<string>} - The split path segments.
   */
  split(fieldPath: string): string[] {
    return fieldPath.split('.');
  }

  /**
   * Constructs a new instance of FieldPath. We need this instead of using
   * the normal constructor because polymorphic 'this' doesn't work on static
   * methods.
   *
   * @private
   * @internal
   * @override
   * @param segments Sequence of field names.
   * @returns The newly created FieldPath.
   */
  construct(segments: string[]): FieldPath {
    return new FieldPath(...segments);
  }

  /**
   * Returns true if this `FieldPath` is equal to the provided value.
   *
   * @param {*} other The value to compare against.
   * @returns {boolean} true if this `FieldPath` is equal to the provided value.
   */
  isEqual(other: FieldPath): boolean {
    return super.isEqual(other);
  }
}
/**
 * A dot-separated path for navigating ObjectValues.
 * This type is like its parent, FieldPath, except
 * it allows for zero length segments.
 *
 * @private
 * @internal
 * @class
 */
export class ObjectValueFieldPath extends FieldPath {
  /**
   * Zero length field paths are allowed in object value traverse.
   */
  get _minNumSegments(): number {
    return 0;
  }

  constructor(...segments: string[]) {
    super(...segments);
  }

  static fromDotNotation(path: string): ObjectValueFieldPath {
    return new ObjectValueFieldPath(...path.split('.'));
  }

  /**
   * Constructs a new instance of FieldPath. We need this instead of using
   * the normal constructor because polymorphic 'this' doesn't work on static
   * methods.
   *
   * @private
   * @internal
   * @override
   * @param segments Sequence of field names.
   * @returns The newly created FieldPath.
   */
  construct(segments: string[]): FieldPath {
    return new ObjectValueFieldPath(...segments);
  }
}

/**
 * Validates that the provided value can be used as a field path argument.
 *
 * @private
 * @internal
 * @param arg The argument name or argument index (for varargs methods).
 * @param fieldPath The value to verify.
 * @throws if the string can't be used as a field path.
 */
export function validateFieldPath(
  arg: string | number,
  fieldPath: unknown,
): asserts fieldPath is string | FieldPath {
  if (fieldPath instanceof FieldPath) {
    return;
  }

  if (fieldPath === undefined) {
    throw new Error(
      invalidArgumentMessage(arg, 'field path') +
        ' The path cannot be omitted.',
    );
  }

  if (isObject(fieldPath) && fieldPath.constructor.name === 'FieldPath') {
    throw new Error(customObjectMessage(arg, fieldPath));
  }

  if (typeof fieldPath !== 'string') {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        'field path',
      )} Paths can only be specified as strings or via a FieldPath object.`,
    );
  }

  if (fieldPath.indexOf('..') >= 0) {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        'field path',
      )} Paths must not contain ".." in them.`,
    );
  }

  if (fieldPath.startsWith('.') || fieldPath.endsWith('.')) {
    throw new Error(
      `${invalidArgumentMessage(
        arg,
        'field path',
      )} Paths must not start or end with ".".`,
    );
  }

  if (!FIELD_PATH_RE.test(fieldPath)) {
    throw new Error(`${invalidArgumentMessage(
      arg,
      'field path',
    )} Paths can't be empty and must not contain
    "*~/[]".`);
  }
}
