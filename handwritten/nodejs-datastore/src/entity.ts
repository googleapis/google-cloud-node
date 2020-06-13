/* eslint-disable no-inner-declarations */
// Copyright 2014 Google LLC
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

import arrify = require('arrify');
import * as extend from 'extend';
import * as is from 'is';
import {Query, QueryProto, IntegerTypeCastOptions} from './query';
import {PathType} from '.';
import {protobuf as Protobuf} from 'google-gax';
import * as path from 'path';
import {google} from '../protos/protos';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace entity {
  export interface InvalidKeyErrorOptions {
    code: string;
  }

  export class InvalidKeyError extends Error {
    constructor(opts: InvalidKeyErrorOptions) {
      const errorMessages = {
        MISSING_KIND: 'A key should contain at least a kind.',
        MISSING_ANCESTOR_ID: 'Ancestor keys require an id or name.',
      } as {[index: string]: string};
      super(errorMessages[opts.code]);
      this.name = 'InvalidKey';
    }
  }

  /**
   * A symbol to access the Key object from an entity object.
   *
   * @type {symbol}
   * @private
   */
  export const KEY_SYMBOL: unique symbol = Symbol('KEY');

  /**
   * Build a Datastore Double object. For long doubles, a string can be
   * provided.
   *
   * @class
   * @param {number} value The double value.
   *
   * @example
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const aDouble = datastore.double(7.3);
   */
  export class Double {
    type: string;
    value: number;
    constructor(value: number) {
      /**
       * @name Double#type
       * @type {string}
       */
      this.type = 'DatastoreDouble';
      /**
       * @name Double#value
       * @type {number}
       */
      this.value = value;
    }
  }

  /**
   * Check if something is a Datastore Double object.
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   */
  export function isDsDouble(value?: {}) {
    return value instanceof entity.Double;
  }

  /**
   * Check if a value is a Datastore Double object converted from JSON.
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   */
  export function isDsDoubleLike(value: unknown) {
    const maybeDsDouble = value as Double;
    return (
      isDsDouble(maybeDsDouble) ||
      (is.object(maybeDsDouble) &&
        is.number(maybeDsDouble.value) &&
        maybeDsDouble.type === 'DatastoreDouble')
    );
  }

  /**
   * Build a Datastore Int object. For long integers, a string can be provided.
   *
   * @class
   * @param {number|string} value The integer value.
   * @param {object} [typeCastOptions] Configuration to convert
   *     values of `integerValue` type to a custom value. Must provide an
   *     `integerTypeCastFunction` to handle `integerValue` conversion.
   * @param {function} typeCastOptions.integerTypeCastFunction A custom user
   *     provided function to convert `integerValue`.
   * @param {sting|string[]} [typeCastOptions.properties] `Entity` property
   *     names to be converted using `integerTypeCastFunction`.
   *
   * @example
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const anInt = datastore.int(7);
   */
  export class Int extends Number {
    type: string;
    value: string;
    typeCastFunction?: Function;
    typeCastProperties?: string[];
    private _entityPropertyName: string | undefined;
    constructor(
      value: number | string | ValueProto,
      typeCastOptions?: IntegerTypeCastOptions
    ) {
      super(typeof value === 'object' ? value.integerValue : value);
      this._entityPropertyName =
        typeof value === 'object' ? value.propertyName : undefined;
      this.value =
        typeof value === 'object'
          ? value.integerValue.toString()
          : value.toString();
      /**
       * @name Int#type
       * @type {string}
       */
      this.type = 'DatastoreInt';
      /**
       * @name Int#value
       * @type {string}
       */
      if (typeCastOptions) {
        this.typeCastFunction = typeCastOptions.integerTypeCastFunction;
        if (typeof typeCastOptions.integerTypeCastFunction !== 'function') {
          throw new Error(
            'integerTypeCastFunction is not a function or was not provided.'
          );
        }

        this.typeCastProperties = typeCastOptions.properties
          ? arrify(typeCastOptions.properties)
          : undefined;
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valueOf(): any {
      let shouldCustomCast = this.typeCastFunction ? true : false;
      if (
        this.typeCastProperties &&
        !this.typeCastProperties.includes(this._entityPropertyName!)
      ) {
        shouldCustomCast = false;
      }

      if (shouldCustomCast) {
        try {
          return this.typeCastFunction!(this.value);
        } catch (error) {
          error.message = `integerTypeCastFunction threw an error:\n\n  - ${error.message}`;
          throw error;
        }
      } else {
        return decodeIntegerValue({
          integerValue: this.value,
          propertyName: this._entityPropertyName,
        });
      }
    }

    toJSON(): Json {
      return {type: this.type, value: this.value};
    }
  }

  /**
   * Check if something is a Datastore Int object.
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   */
  export function isDsInt(value?: {}) {
    return value instanceof entity.Int;
  }

  /**
   * Check if a value is a Datastore Int object converted from JSON.
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   */
  export function isDsIntLike(value: unknown) {
    const maybeDsInt = value as Int;
    return (
      isDsInt(maybeDsInt) ||
      (is.object(maybeDsInt) &&
        is.string(maybeDsInt.value) &&
        maybeDsInt.type === 'DatastoreInt')
    );
  }

  export interface Coordinates {
    latitude: number;
    longitude: number;
  }

  /**
   * Build a Datastore Geo Point object.
   *
   * @class
   * @param {object} coordinates Coordinate value.
   * @param {number} coordinates.latitude Latitudinal value.
   * @param {number} coordinates.longitude Longitudinal value.
   *
   * @example
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const coordinates = {
   *   latitude: 40.6894,
   *   longitude: -74.0447
   * };
   *
   * const geoPoint = datastore.geoPoint(coordinates);
   */
  export class GeoPoint {
    value: Coordinates;
    constructor(coordinates: Coordinates) {
      /**
       * Coordinate value.
       *
       * @name GeoPoint#coordinates
       * @type {object}
       * @property {number} latitude Latitudinal value.
       * @property {number} longitude Longitudinal value.
       */
      this.value = coordinates;
    }
  }

  /**
   * Check if something is a Datastore Geo Point object.
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   */
  export function isDsGeoPoint(value?: {}) {
    return value instanceof entity.GeoPoint;
  }

  export interface KeyOptions {
    namespace?: string;
    path: PathType[];
  }

  /**
   * Build a Datastore Key object.
   *
   * @class
   * @param {object} options Configuration object.
   * @param {array} options.path Key path.
   * @param {string} [options.namespace] Optional namespace.
   *
   * @example
   * //-
   * // Create an incomplete key with a kind value of `Company`.
   * //-
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key('Company');
   *
   * @example
   * //-
   * // Create a complete key with a kind value of `Company` and id`123`.
   * //-
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key(['Company', 123]);
   *
   * @example
   * //-
   * // If the ID integer is outside the bounds of a JavaScript Number
   * // object, create an Int.
   * //-
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key([
   *   'Company',
   *   datastore.int('100000000000001234')
   * ]);
   *
   * @example
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * // Create a complete key with a kind value of `Company` and name `Google`.
   * // Note: `id` is used for numeric identifiers and `name` is used otherwise.
   * const key = datastore.key(['Company', 'Google']);
   *
   * @example
   * //-
   * // Create a complete key from a provided namespace and path.
   * //-
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key({
   *   namespace: 'My-NS',
   *   path: ['Company', 123]
   * });
   *
   * @example <caption>Serialize the key for later re-use.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key({
   *   namespace: 'My-NS',
   *   path: ['Company', 123]
   * });
   * // Later...
   * const key = datastore.key(key.serialized);
   */
  export class Key {
    namespace?: string;
    id?: string;
    name?: string;
    kind: string;
    parent?: Key;
    path!: Array<string | number>;

    constructor(options: KeyOptions) {
      /**
       * @name Key#namespace
       * @type {string}
       */
      this.namespace = options.namespace;

      options.path = [].slice.call(options.path);

      if (options.path.length % 2 === 0) {
        const identifier = options.path.pop();

        if (
          is.number(identifier) ||
          isDsInt(identifier) ||
          isDsIntLike(identifier)
        ) {
          this.id = (((identifier as {}) as Int).value || identifier) as string;
        } else if (is.string(identifier)) {
          this.name = identifier as string;
        }
      }

      this.kind = options.path.pop() as string;

      if (options.path.length > 0) {
        this.parent = new Key(options);
      }

      // `path` is computed on demand to consider any changes that may have been
      // made to the key.
      /**
       * @name Key#path
       * @type {array}
       */
      Object.defineProperty(this, 'path', {
        enumerable: true,
        get() {
          return arrify(this.parent && this.parent.path).concat([
            this.kind,
            this.name || this.id,
          ]);
        },
      });
    }

    /**
     * Access the `serialized` property for a library-compatible way to re-use a
     * key.
     *
     * @returns {object}
     *
     * @example
     * const key = datastore.key({
     *   namespace: 'My-NS',
     *   path: ['Company', 123]
     * });
     *
     * // Later...
     * const key = datastore.key(key.serialized);
     */
    get serialized() {
      const serializedKey = {
        namespace: this.namespace,
        path: [this.kind, this.name || new Int(this.id!)],
      };

      if (this.parent) {
        serializedKey.path = this.parent.serialized.path.concat(
          serializedKey.path
        );
      }

      return serializedKey;
    }
  }

  /**
   * Check if something is a Datastore Key object.
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   */
  export function isDsKey(value?: {}) {
    return value instanceof entity.Key;
  }

  /**
   * Convert a protobuf `integerValue`.
   *
   * @private
   * @param {object} value The `integerValue` to convert.
   */
  function decodeIntegerValue(value: ValueProto) {
    const num = Number(value.integerValue);
    if (!Number.isSafeInteger(num)) {
      throw new Error(
        'We attempted to return all of the numeric values, but ' +
          (value.propertyName ? value.propertyName + ' ' : '') +
          'value ' +
          value.integerValue +
          " is out of bounds of 'Number.MAX_SAFE_INTEGER'.\n" +
          "To prevent this error, please consider passing 'options.wrapNumbers=true' or\n" +
          "'options.wrapNumbers' as\n" +
          '{\n' +
          '  integerTypeCastFunction: provide <your_custom_function>\n' +
          '  properties: optionally specify property name(s) to be custom casted\n' +
          '}\n'
      );
    }
    return num;
  }

  /**
   * @typedef {object} IntegerTypeCastOptions Configuration to convert
   *     values of `integerValue` type to a custom value. Must provide an
   *     `integerTypeCastFunction` to handle `integerValue` conversion.
   * @property {function} integerTypeCastFunction A custom user
   *     provided function to convert `integerValue`.
   * @property {string | string[]} [properties] `Entity` property
   *     names to be converted using `integerTypeCastFunction`.
   */
  /**
   * Convert a protobuf Value message to its native value.
   *
   * @private
   * @param {object} valueProto The protobuf Value message to convert.
   * @param {boolean | IntegerTypeCastOptions} [wrapNumbers=false] Wrap values of integerValue type in
   *     {@link Datastore#Int} objects.
   *     If a `boolean`, this will wrap values in {@link Datastore#Int} objects.
   *     If an `object`, this will return a value returned by
   *     `wrapNumbers.integerTypeCastFunction`.
   *     Please see {@link IntegerTypeCastOptions} for options descriptions.
   * @returns {*}
   *
   * @example
   * decodeValueProto({
   *   booleanValue: false
   * });
   * // false
   *
   * decodeValueProto({
   *   stringValue: 'Hi'
   * });
   * // 'Hi'
   *
   * decodeValueProto({
   *   blobValue: Buffer.from('68656c6c6f')
   * });
   * // <Buffer 68 65 6c 6c 6f>
   */
  export function decodeValueProto(
    valueProto: ValueProto,
    wrapNumbers?: boolean | IntegerTypeCastOptions
  ) {
    const valueType = valueProto.valueType!;
    const value = valueProto[valueType];

    switch (valueType) {
      case 'arrayValue': {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return value.values.map((val: any) =>
          entity.decodeValueProto(val, wrapNumbers)
        );
      }

      case 'blobValue': {
        return Buffer.from(value, 'base64');
      }

      case 'nullValue': {
        return null;
      }

      case 'doubleValue': {
        return Number(value);
      }

      case 'integerValue': {
        return wrapNumbers
          ? typeof wrapNumbers === 'object'
            ? new entity.Int(valueProto, wrapNumbers).valueOf()
            : new entity.Int(valueProto, undefined)
          : decodeIntegerValue(valueProto);
      }

      case 'entityValue': {
        return entity.entityFromEntityProto(value, wrapNumbers);
      }

      case 'keyValue': {
        return entity.keyFromKeyProto(value);
      }

      case 'timestampValue': {
        const milliseconds = Number(value.nanos) / 1e6;
        return new Date(Number(value.seconds) * 1000 + milliseconds);
      }

      default: {
        return value;
      }
    }
  }

  /**
   * Convert any native value to a protobuf Value message object.
   *
   * @private
   * @param {*} value Native value.
   * @returns {object}
   *
   * @example
   * encodeValue('Hi');
   * // {
   * //   stringValue: 'Hi'
   * // }
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function encodeValue(value: any, property: string): ValueProto {
    const valueProto: ValueProto = {};

    if (is.boolean(value)) {
      valueProto.booleanValue = value;
      return valueProto;
    }

    if (is.null(value)) {
      valueProto.nullValue = 0;
      return valueProto;
    }

    if (typeof value === 'number') {
      if (Number.isInteger(value)) {
        if (!Number.isSafeInteger(value)) {
          process.emitWarning(
            'IntegerOutOfBoundsWarning: ' +
              "the value for '" +
              property +
              "' property is outside of bounds of a JavaScript Number.\n" +
              "Use 'Datastore.int(<integer_value_as_string>)' to preserve accuracy during the upload."
          );
        }
        value = new entity.Int(value);
      } else {
        value = new entity.Double(value);
      }
    }

    if (isDsInt(value)) {
      valueProto.integerValue = (value as Int).value;
      return valueProto;
    }

    if (isDsDouble(value)) {
      valueProto.doubleValue = (value as Double).value;
      return valueProto;
    }

    if (isDsGeoPoint(value)) {
      valueProto.geoPointValue = (value as GeoPoint).value;
      return valueProto;
    }

    if (value instanceof Date) {
      const seconds = value.getTime() / 1000;

      valueProto.timestampValue = {
        seconds: Math.floor(seconds),
        nanos: value.getMilliseconds() * 1e6,
      };

      return valueProto;
    }

    if (is.string(value)) {
      valueProto.stringValue = value;
      return valueProto;
    }

    if (value instanceof Buffer) {
      valueProto.blobValue = value;
      return valueProto;
    }

    if (Array.isArray(value)) {
      valueProto.arrayValue = {
        values: value.map(val => entity.encodeValue(val, property)),
      };
      return valueProto;
    }

    if (isDsKey(value)) {
      valueProto.keyValue = entity.keyToKeyProto(value);
      return valueProto;
    }

    if (is.object(value)) {
      if (!is.empty(value)) {
        value = extend(true, {}, value);

        for (const prop in value) {
          value[prop] = entity.encodeValue(value[prop], prop);
        }
      }

      valueProto.entityValue = {
        properties: value,
      };

      return valueProto;
    }

    throw new Error('Unsupported field value, ' + value + ', was provided.');
  }

  /**
   * Convert any entity protocol to a plain object.
   *
   * @todo Use registered metadata if provided.
   *
   * @private
   * @param {object} entityProto The protocol entity object to convert.
   * @param {boolean | IntegerTypeCastOptions} [wrapNumbers=false] Wrap values of integerValue type in
   *     {@link Datastore#Int} objects.
   *     If a `boolean`, this will wrap values in {@link Datastore#Int} objects.
   *     If an `object`, this will return a value returned by
   *     `wrapNumbers.integerTypeCastFunction`.
   *     Please see {@link IntegerTypeCastOptions} for options descriptions.
   * @returns {object}
   *
   * @example
   * entityFromEntityProto({
   *   properties: {
   *     map: {
   *       name: {
   *         value: {
   *           valueType: 'stringValue',
   *           stringValue: 'Stephen'
   *         }
   *       }
   *     }
   *   }
   * });
   * // {
   * //   name: 'Stephen'
   * // }
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function entityFromEntityProto(
    entityProto: EntityProto,
    wrapNumbers?: boolean | IntegerTypeCastOptions
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const entityObject: any = {};
    const properties = entityProto.properties || {};

    for (const property in properties) {
      const value = properties[property];
      value.propertyName = property;
      entityObject[property] = entity.decodeValueProto(value, wrapNumbers);
    }

    return entityObject;
  }

  /**
   * Convert an entity object to an entity protocol object.
   *
   * @private
   * @param {object} entityObject The entity object to convert.
   * @returns {object}
   *
   * @example
   * entityToEntityProto({
   *   excludeFromIndexes: [
   *     'name'
   *   ],
   *   data: {
   *     name: 'Burcu',
   *     legit: true
   *   }
   * });
   * // {
   * //   key: null,
   * //   properties: {
   * //     name: {
   * //       stringValue: 'Burcu'
   * //       excludeFromIndexes: true
   * //     },
   * //     legit: {
   * //       booleanValue: true
   * //     }
   * //   }
   * // }
   */
  export function entityToEntityProto(entityObject: EntityObject): EntityProto {
    const properties = entityObject.data;
    const excludeFromIndexes = entityObject.excludeFromIndexes;

    const entityProto: EntityProto = {
      key: null,

      properties: Object.keys(properties).reduce(
        (encoded, key) => {
          encoded[key] = entity.encodeValue(properties[key], key);
          return encoded;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {} as any
      ),
    };

    if (excludeFromIndexes && excludeFromIndexes.length > 0) {
      excludeFromIndexes.forEach((excludePath: string) => {
        excludePathFromEntity(entityProto, excludePath);
      });
    }

    return entityProto;

    function excludePathFromEntity(entity: EntityProto, path: string) {
      const arrayIndex = path.indexOf('[]');
      const entityIndex = path.indexOf('.');
      const wildcardIndex = path.indexOf('.*');

      const hasArrayPath = arrayIndex > -1;
      const hasEntityPath = entityIndex > -1;
      const hasWildCard = wildcardIndex > -1;

      if (!hasArrayPath && !hasEntityPath) {
        // This is the path end node. Traversal ends here in either case.
        if (entity.properties) {
          if (
            entity.properties[path] &&
            // array properties should be excluded with [] syntax:
            !entity.properties[path].arrayValue
          ) {
            // This is the property to exclude!
            entity.properties[path].excludeFromIndexes = true;
          }
        } else if (!path) {
          // This is a primitive or entity root that should be excluded.
          entity.excludeFromIndexes = true;
        }
        return;
      }

      let delimiterIndex;
      if (hasArrayPath && hasEntityPath) {
        delimiterIndex = Math.min(arrayIndex, entityIndex);
      } else {
        delimiterIndex = Math.max(arrayIndex, entityIndex);
      }

      const firstPathPartIsArray = delimiterIndex === arrayIndex;
      const firstPathPartIsEntity = delimiterIndex === entityIndex;

      const delimiter = firstPathPartIsArray ? '[]' : '.';
      const splitPath = path.split(delimiter);
      const firstPathPart = splitPath.shift()!;
      const remainderPath = splitPath.join(delimiter).replace(/^(\.|\[\])/, '');

      if (
        !(entity.properties && entity.properties[firstPathPart]) &&
        !hasWildCard
      ) {
        // Either a primitive or an entity for which this path doesn't apply.
        return;
      }

      if (
        firstPathPartIsArray &&
        // check also if the property in question is actually an array value.
        entity.properties![firstPathPart].arrayValue &&
        // check if wildcard is not applied
        !hasWildCard
      ) {
        const array = entity.properties![firstPathPart].arrayValue;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        array.values.forEach((value: any) => {
          if (remainderPath === '') {
            // We want to exclude *this* array property, which is
            // equivalent with excluding all its values
            // (including entity values at their roots):
            excludePathFromEntity(
              value,
              remainderPath // === ''
            );
          } else {
            // Path traversal continues at value.entityValue,
            // if it is an entity, or must end at value.
            excludePathFromEntity(
              value.entityValue || value,
              remainderPath // !== ''
            );
          }
        });
      } else if (firstPathPartIsArray && hasWildCard && remainderPath === '*') {
        const array = entity.properties![firstPathPart].arrayValue;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        array.values.forEach((value: any) => {
          if (value.entityValue) {
            excludePathFromEntity(value.entityValue, '.*');
          } else {
            excludePathFromEntity(value, '');
          }
        });
      } else if (firstPathPartIsEntity) {
        if (firstPathPart === '') {
          Object.keys(entity.properties!).forEach(path => {
            const newPath = entity.properties![path].arrayValue
              ? path + '[].*'
              : path + '.*';
            excludePathFromEntity(entity, newPath);
          });
        } else {
          if (hasWildCard && remainderPath === '*') {
            const parentEntity = entity.properties![firstPathPart].entityValue;

            if (parentEntity) {
              Object.keys(parentEntity.properties).forEach(path => {
                const newPath = parentEntity.properties[path].arrayValue
                  ? path + '[].*'
                  : path + '.*';
                excludePathFromEntity(parentEntity, newPath);
              });
            } else {
              excludePathFromEntity(entity, firstPathPart);
            }
          } else {
            const parentEntity = entity.properties![firstPathPart].entityValue;
            excludePathFromEntity(parentEntity, remainderPath);
          }
        }
      }
    }
  }

  /**
   * Convert an API response array to a qualified Key and data object.
   *
   * @private
   * @param {object[]} results The response array.
   * @param {object} results.entity An entity object.
   * @param {object} results.entity.key The entity's key.
   * @param {boolean | IntegerTypeCastOptions} [wrapNumbers=false] Wrap values of integerValue type in
   *     {@link Datastore#Int} objects.
   *     If a `boolean`, this will wrap values in {@link Datastore#Int} objects.
   *     If an `object`, this will return a value returned by
   *     `wrapNumbers.integerTypeCastFunction`.
   *     Please see {@link IntegerTypeCastOptions} for options descriptions.
   *
   * @example
   * request_('runQuery', {}, (err, response) => {
   *   const entityObjects = formatArray(response.batch.entityResults);
   *   // {
   *   //   key: {},
   *   //   data: {
   *   //     fieldName: 'value'
   *   //   }
   *   // }
   *   //
   * });
   */
  export function formatArray(
    results: ResponseResult[],
    wrapNumbers?: boolean | IntegerTypeCastOptions
  ) {
    return results.map(result => {
      const ent = entity.entityFromEntityProto(result.entity!, wrapNumbers);
      ent[entity.KEY_SYMBOL] = entity.keyFromKeyProto(result.entity!.key!);
      return ent;
    });
  }

  /**
   * Find the properties which value size is large than 1500 bytes,
   * with excludeLargeProperties enabled, automatically exclude properties from indexing.
   * This will allow storing string values larger than 1500 bytes
   *
   * @param entities Datastore key object(s).
   * @param path namespace of provided entity properties
   * @param properties properties which value size is large than 1500 bytes
   */
  export function findLargeProperties_(
    entities: Entities,
    path: string,
    properties: string[] = []
  ) {
    const MAX_DATASTORE_VALUE_LENGTH = 1500;
    if (Array.isArray(entities)) {
      for (const entry of entities) {
        if (entry && entry.name && entry.value) {
          if (
            is.string(entry.value) &&
            Buffer.from(entry.value).length > MAX_DATASTORE_VALUE_LENGTH
          ) {
            entry.excludeFromIndexes = true;
          } else {
            continue;
          }
        }
        findLargeProperties_(entry, path.concat('[]'), properties);
      }
    } else if (is.object(entities)) {
      const keys = Object.keys(entities);
      for (const key of keys) {
        findLargeProperties_(
          entities[key],
          path.concat(`${path ? '.' : ''}${key}`),
          properties
        );
      }
    } else if (
      is.string(entities) &&
      Buffer.from(entities).length > MAX_DATASTORE_VALUE_LENGTH
    ) {
      if (properties.indexOf(path) < 0) {
        properties.push(path);
      }
    }
    return properties;
  }

  /**
   * Check if a key is complete.
   *
   * @private
   * @param {Key} key The Key object.
   * @returns {boolean}
   *
   * @example
   * isKeyComplete(new Key(['Company', 'Google'])); // true
   * isKeyComplete(new Key('Company')); // false
   */
  export function isKeyComplete(key: Key) {
    const lastPathElement = entity.keyToKeyProto(key).path!.pop()!;
    return !!(lastPathElement.id || lastPathElement.name);
  }

  /**
   * Convert a key protocol object to a Key object.
   *
   * @private
   * @param {object} keyProto The key protocol object to convert.
   * @returns {Key}
   *
   * @example
   * const key = keyFromKeyProto({
   *   partitionId: {
   *     projectId: 'project-id',
   *     namespaceId: ''
   *   },
   *   path: [
   *     {
   *       kind: 'Kind',
   *       id: '4790047639339008'
   *     }
   *   ]
   * });
   */
  export function keyFromKeyProto(keyProto: KeyProto): Key {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const keyOptions: any = {
      path: [],
    };

    if (keyProto.partitionId && keyProto.partitionId.namespaceId) {
      keyOptions.namespace = keyProto.partitionId.namespaceId;
    }

    keyProto.path!.forEach((path, index) => {
      keyOptions.path.push(path.kind);

      let id = path[path.idType!];

      if (path.idType === 'id') {
        id = new entity.Int(id);
      }

      if (is.defined(id)) {
        keyOptions.path.push(id);
      } else if (index < keyProto.path!.length - 1) {
        throw new InvalidKeyError({
          code: 'MISSING_ANCESTOR_ID',
        });
      }
    });

    return new entity.Key(keyOptions);
  }

  /**
   * Convert a Key object to a key protocol object.
   *
   * @private
   * @param {Key} key The Key object to convert.
   * @returns {object}
   *
   * @example
   * const keyProto = keyToKeyProto(new Key(['Company', 1]));
   * // {
   * //   path: [
   * //     {
   * //       kind: 'Company',
   * //       id: 1
   * //     }
   * //   ]
   * // }
   */
  export function keyToKeyProto(key: Key): KeyProto {
    if (is.undefined(key.kind)) {
      throw new InvalidKeyError({
        code: 'MISSING_KIND',
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const keyProto: KeyProto = {
      path: [],
    };

    if (key.namespace) {
      keyProto.partitionId = {
        namespaceId: key.namespace,
      };
    }

    let numKeysWalked = 0;

    // Reverse-iterate over the Key objects.
    do {
      if (numKeysWalked > 0 && is.undefined(key.id) && is.undefined(key.name)) {
        // This isn't just an incomplete key. An ancestor key is incomplete.
        throw new InvalidKeyError({
          code: 'MISSING_ANCESTOR_ID',
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pathElement: any = {
        kind: key.kind,
      };

      if (is.defined(key.id)) {
        pathElement.id = key.id;
      }

      if (is.defined(key.name)) {
        pathElement.name = key.name;
      }

      keyProto.path!.unshift(pathElement);
    } while ((key = key.parent!) && ++numKeysWalked);

    return keyProto;
  }

  /**
   * Convert a query object to a query protocol object.
   *
   * @private
   * @param {object} q The query object to convert.
   * @returns {object}
   *
   * @example
   * queryToQueryProto({
   *   namespace: '',
   *   kinds: [
   *     'Kind'
   *   ],
   *   filters: [],
   *   orders: [],
   *   groupByVal: [],
   *   selectVal: [],
   *   startVal: null,
   *   endVal: null,
   *   limitVal: -1,
   *   offsetVal: -1
   * });
   * // {
   * //   projection: [],
   * //   kinds: [
   * //     {
   * //       name: 'Kind'
   * //     }
   * //   ],
   * //   order: [],
   * //   groupBy: []
   * // }
   */
  export function queryToQueryProto(query: Query): QueryProto {
    const OP_TO_OPERATOR = {
      '=': 'EQUAL',
      '>': 'GREATER_THAN',
      '>=': 'GREATER_THAN_OR_EQUAL',
      '<': 'LESS_THAN',
      '<=': 'LESS_THAN_OR_EQUAL',
      HAS_ANCESTOR: 'HAS_ANCESTOR',
    };

    const SIGN_TO_ORDER = {
      '-': 'DESCENDING',
      '+': 'ASCENDING',
    };

    const queryProto: QueryProto = {
      distinctOn: query.groupByVal.map(groupBy => {
        return {
          name: groupBy,
        };
      }),

      kind: query.kinds.map(kind => {
        return {
          name: kind,
        };
      }),

      order: query.orders.map(order => {
        return {
          property: {
            name: order.name,
          },
          direction: SIGN_TO_ORDER[order.sign],
        };
      }),

      projection: query.selectVal.map(select => {
        return {
          property: {
            name: select,
          },
        };
      }),
    };

    if (query.endVal) {
      queryProto.endCursor = query.endVal;
    }

    if (query.limitVal > 0) {
      queryProto.limit = {
        value: query.limitVal,
      };
    }

    if (query.offsetVal > 0) {
      queryProto.offset = query.offsetVal;
    }

    if (query.startVal) {
      queryProto.startCursor = query.startVal;
    }

    if (query.filters.length > 0) {
      const filters = query.filters.map(filter => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value: any = {};

        if (filter.name === '__key__') {
          value.keyValue = entity.keyToKeyProto(filter.val);
        } else {
          value = entity.encodeValue(filter.val, filter.name);
        }

        return {
          propertyFilter: {
            property: {
              name: filter.name,
            },
            op: OP_TO_OPERATOR[filter.op],
            value,
          },
        };
      });

      queryProto.filter = {
        compositeFilter: {
          filters,
          op: 'AND',
        },
      };
    }

    return queryProto;
  }

  /**
   * URL safe key encoding and decoding helper utility.
   *
   *  This is intended to work with the "legacy" representation of a
   * datastore "Key" used within Google App Engine (a so-called "Reference").
   *
   * @private
   * @class
   */
  export class URLSafeKey {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protos: any;

    constructor() {
      this.protos = this.loadProtos_();
    }

    /**
     *  Load AppEngine protobuf file.
     *
     *  @private
     */
    loadProtos_() {
      const root = new Protobuf.Root();
      const loadedRoot = root.loadSync(
        path.join(__dirname, '..', 'protos', 'app_engine_key.proto')
      );
      loadedRoot.resolveAll();
      return loadedRoot.nested;
    }

    /**
     * Convert key to url safe base64 encoded string.
     *
     * @private
     * @param {string} projectId Project Id.
     * @param {entity.Key} key Entity key object.
     * @param {string} locationPrefix Optional .
     *  The location prefix of an App Engine project ID.
     *  Often this value is 's~', but may also be 'e~', or other location prefixes
     *  currently unknown.
     * @returns {string} base64 endocded urlsafe key.
     */

    legacyEncode(
      projectId: string,
      key: entity.Key,
      locationPrefix?: string
    ): string {
      const elements: {}[] = [];
      let currentKey = key;

      do {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const element: any = {
          type: currentKey.kind,
        };

        if (is.defined(currentKey.id)) {
          element.id = currentKey.id;
        }

        if (is.defined(currentKey.name)) {
          element.name = currentKey.name;
        }

        elements.unshift(element);
        currentKey = currentKey.parent!;
      } while (currentKey);

      if (locationPrefix) {
        projectId = `${locationPrefix}${projectId}`;
      }

      const reference = {
        app: projectId,
        namespace: key.namespace,
        path: {element: elements},
      };

      const buffer = this.protos.Reference.encode(reference).finish();
      return this.convertToBase64_(buffer);
    }

    /**
     * Helper to convert URL safe key string to entity key object
     *
     * This is intended to work with the "legacy" representation of a
     * datastore "Key" used within Google App Engine (a so-called "Reference").
     *
     * @private
     * @param {entity.Key} key Entity key object.
     * @param {string} locationPrefix Optional .
     *  The location prefix of an App Engine project ID.
     *  Often this value is 's~', but may also be 'e~', or other location prefixes
     *  currently unknown.
     * @returns {string} Created urlsafe key.
     */

    legacyDecode(key: string): entity.Key {
      const buffer = this.convertToBuffer_(key);
      const message = this.protos.Reference.decode(buffer);
      const reference = this.protos.Reference.toObject(message, {
        longs: String,
      });
      const pathElements: PathType[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reference.path.element.forEach((element: any) => {
        pathElements.push(element.type);

        if (is.defined(element.name)) {
          pathElements.push(element.name);
        }

        if (is.defined(element.id)) {
          pathElements.push(new entity.Int(element.id as number));
        }
      });

      const keyOptions: entity.KeyOptions = {
        path: pathElements,
      };

      if (!is.empty(reference.namespace)) {
        keyOptions.namespace = reference.namespace;
      }

      return new entity.Key(keyOptions);
    }

    /**
     * Convert buffer to base64 encoding.
     *
     * @private
     * @param {Buffer} buffer
     * @returns {string} Base64 encoded string.
     */
    convertToBase64_(buffer: Buffer): string {
      return buffer
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    /**
     * Rebuild base64 from encoded url safe string and convert to buffer.
     *
     * @private
     * @param {string} val Encoded url safe string.
     * @returns {string} Base64 encoded string.
     */
    convertToBuffer_(val: string): Buffer {
      val = val.replace(/-/g, '+').replace(/_/g, '/');
      while (val.length % 4) {
        val += '=';
      }

      return Buffer.from(val, 'base64');
    }
  }
}

export interface ValueProto {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
  valueType?: string;
  values?: ValueProto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  propertyName?: string;
}

export interface EntityProto {
  key?: KeyProto | null;
  properties?: {[k: string]: ValueProto};
  excludeFromIndexes?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Entity = any;
export type Entities = Entity | Entity[];

interface KeyProtoPathElement extends google.datastore.v1.Key.IPathElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
  idType?: string;
}

export interface KeyProto {
  partitionId?: google.datastore.v1.IPartitionId | null;
  path?: KeyProtoPathElement[] | null;
}

export interface ResponseResult {
  entity: EntityProto;
}

export interface EntityObject {
  data: {[k: string]: Entity};
  excludeFromIndexes: string[];
}

export interface Json {
  [field: string]: string;
}
