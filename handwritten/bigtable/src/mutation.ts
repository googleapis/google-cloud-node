// Copyright 2016 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import arrify = require('arrify');
import * as is from 'is';
import * as Long from 'long';

import {google as btTypes} from '../protos/protos';

export type IMutation = btTypes.bigtable.v2.IMutation;
export type IMutateRowRequest = btTypes.bigtable.v2.IMutateRowRequest;
export type ISetCell = btTypes.bigtable.v2.Mutation.ISetCell;

export type Bytes = string | Buffer;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Data = any;
/*
The Data type is expected to be in the following format:
{
  columnFamily1: {
    column1: Cell,
    column2: Cell
  },
  columnFamily2: {
    otherColumn1: Cell,
    otherColumn2: Cell
  }
}
Where the Cell data type has the following structure:
Uint8Array | string | {
  value: Uint8Array|string,
  timestamp: number|Long|string,
}
*/
export interface JsonObj {
  [k: string]: string | JsonObj;
}
export type Value = string | number | boolean;

export interface ParsedColumn {
  family: string | null;
  qualifier: string | null | undefined;
}
export interface ConvertFromBytesOptions {
  userOptions?: ConvertFromBytesUserOptions;
  isPossibleNumber?: boolean;
}
export interface ConvertFromBytesUserOptions {
  decode?: boolean;
  encoding?: BufferEncoding;
}
export interface MutationConstructorObj {
  key: string;
  method: string;
  data: Data;
}
export interface MutationSettingsObj {
  follows?: ValueObj;
  column?: string;
  time?: {start: Date | number; end: Date | number};
}
export interface TimeRange {
  [k: string]: number | string | undefined;
  startTimestampMicros?: number;
  endTimestampMicros?: number;
}
export interface SetCellObj {
  [k: string]: string | ISetCell | undefined;
  setCell?: ISetCell;
}
export interface ValueObj {
  [k: string]: Buffer | Value | ValueObj;
}

/**
 * Formats table mutations to be in the expected proto format.
 *
 * @private
 *
 * @class
 * @param {object} mutation
 *
 * @example
 * ```
 * const mutation = new Mutation({
 *   key: 'gwashington',
 *   method: 'insert',
 *   data: {
 *     jadams: 1
 *   }
 * });
 * ```
 */
export class Mutation {
  key: string;
  method: string;
  data: Data;
  constructor(mutation: MutationConstructorObj) {
    this.key = mutation.key;
    this.method = mutation.method;
    this.data = mutation.data;
  }

  /**
   * Parses "bytes" returned from proto service.
   *
   * @param {string} bytes - Base64 encoded string.
   * @param {object} [options] Options to device return types
   * @param {boolean} [options.isPossibleNumber] Check if byte is number
   * @param {object} [options.userOptions]
   * @param {boolean} [options.userOptions.decode] Check if decode is required
   * @param {boolean} [options.userOptions.encoding] The encoding to use when
   *     converting the buffer to a string.
   * @returns {string|number|buffer}
   * @private
   */
  static convertFromBytes(
    bytes: Buffer | string,
    options?: ConvertFromBytesOptions,
  ): Buffer | Value | string {
    const buf =
      bytes instanceof Buffer ? bytes : Buffer.from(bytes as string, 'base64');
    if (options && options.isPossibleNumber && buf.length === 8) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const num = Long.fromBytes(buf as any).toNumber();

      if (Number.isSafeInteger(num)) {
        return num;
      }
    }

    const userOptions = (options && options.userOptions) || {};

    if (userOptions.decode === false) {
      return buf;
    }

    return buf.toString(userOptions.encoding);
  }

  /**
   * Converts data into a buffer for proto service.
   *
   * @param {string} data - The data to be sent.
   * @returns {buffer}
   * @private
   */
  static convertToBytes(data: Buffer | Data): Buffer | Data {
    if (data instanceof Buffer) {
      return data;
    }

    if (is.number(data)) {
      return Buffer.from(Long.fromNumber(data as number).toBytesBE());
    }

    try {
      return Buffer.from(data as string);
    } catch (e) {
      return data;
    }
  }

  /**
   * Takes date objects and creates a time range.
   *
   * @param {date} start - The start date.
   * @param {date} end - The end date.
   * @returns {object}
   * @private
   */
  static createTimeRange(start: Date | number, end: Date | number): TimeRange {
    const range: TimeRange = {};

    if (is.date(start)) {
      range.startTimestampMicros = (start as Date).getTime() * 1000;
    }

    if (is.date(end)) {
      range.endTimestampMicros = (end as Date).getTime() * 1000;
    }

    return range;
  }

  /**
   * Formats an `insert` mutation to what the proto service expects.
   *
   * @param {object} data - The entity data.
   * @returns {object[]}
   *
   * @example
   * ```
   * Mutation.encodeSetCell({
   *   follows: {
   *     gwashington: 1,
   *     alincoln: 1
   *   }
   * });
   * // [
   * //   {
   * //     setCell: {
   * //       familyName: 'follows',
   * //       columnQualifier: 'gwashington', // as buffer
   * //       timestampMicros: -1, // -1 means to use the server time
   * //       value: 1 // as buffer
   * //     }
   * //   }, {
   * //     setCell: {
   * //       familyName: 'follows',
   * //       columnQualifier: 'alincoln', // as buffer
   * //       timestampMicros: new Date(), // uses the client's current time
   * //       value: 1 // as buffer
   * //     }
   * //   }
   * // ]
   * ```
   * @private
   */
  static encodeSetCell(data: Data): SetCellObj[] {
    const mutations: SetCellObj[] = [];

    Object.keys(data).forEach(familyName => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const family = (data as any)[familyName];

      Object.keys(family).forEach(cellName => {
        let cell = family[cellName];

        if (!is.object(cell) || cell instanceof Buffer) {
          cell = {
            value: cell,
          };
        }

        let timestamp = cell.timestamp || new Date();

        if (is.date(timestamp)) {
          timestamp = timestamp.getTime() * 1000;
        }

        const setCell = {
          familyName,
          columnQualifier: Mutation.convertToBytes(cellName),
          timestampMicros: timestamp,
          value: Mutation.convertToBytes(cell.value),
        } as ISetCell;

        mutations.push({setCell});
      });
    });

    return mutations;
  }

  /**
   * Formats a `delete` mutation to what the proto service expects. Depending
   * on what data is supplied to this method, it will return an object that can
   * will do one of the following:
   *
   * * Delete specific cells from a column.
   * * Delete all cells contained with a specific family.
   * * Delete all cells from an entire rows.
   *
   * @param {object} data - The entry data.
   * @returns {object}
   *
   * @example
   * ```
   * Mutation.encodeDelete([
   *   'follows:gwashington'
   * ]);
   * // {
   * //   deleteFromColumn: {
   * //     familyName: 'follows',
   * //     columnQualifier: 'gwashington', // as buffer
   * //     timeRange: null // optional
   * //   }
   * // }
   *
   * Mutation.encodeDelete([
   *   'follows'
   * ]);
   * // {
   * //   deleteFromFamily: {
   * //     familyName: 'follows'
   * //   }
   * // }
   *
   * Mutation.encodeDelete();
   * // {
   * //   deleteFromRow: {}
   * // }
   *
   * // It's also possible to specify a time range when deleting specific
   * // columns.
   *
   * Mutation.encodeDelete([
   *   {
   *     column: 'follows:gwashington',
   *     time: {
   *       start: new Date('March 21, 2000'),
   *       end: new Date('March 21, 2001')
   *     }
   *   }
   * ]);
   * ```
   * @private
   */
  static encodeDelete(data?: Data | Data[]): IMutation[] {
    if (!data) {
      return [
        {
          deleteFromRow: {},
        },
      ];
    }

    return (arrify(data) as Data[]).map(mutation => {
      if (is.string(mutation)) {
        mutation = {
          column: mutation,
        } as MutationSettingsObj;
      }

      const column = Mutation.parseColumnName(
        (mutation as MutationSettingsObj).column!,
      );

      if (!column.qualifier) {
        return {
          deleteFromFamily: {
            familyName: column.family,
          },
        };
      }

      let timeRange: TimeRange | undefined;

      if ((mutation as MutationSettingsObj).time) {
        timeRange = Mutation.createTimeRange(
          (mutation as MutationSettingsObj).time!.start as Date,
          (mutation as MutationSettingsObj).time!.end as Date,
        );
      }

      return {
        deleteFromColumn: {
          familyName: column.family!,
          columnQualifier: Mutation.convertToBytes(
            column.qualifier,
          ) as Uint8Array,
          timeRange,
        },
      };
    });
  }

  /**
   * Creates a new Mutation object and returns the proto JSON form.
   *
   * @param {object} mutation - The entity data.
   * @returns {object}
   * @private
   */
  static parse(mutation: Mutation): IMutateRowRequest {
    if (!(mutation instanceof Mutation)) {
      mutation = new Mutation(mutation);
    }

    return mutation.toProto();
  }

  /**
   * Parses a column name into an object.
   *
   * @param {string} column - The column name.
   * @returns {object}
   *
   * @example
   * ```
   * Mutation.parseColumnName('follows:gwashington');
   * // {
   * //  family: 'follows',
   * //  qualifier: 'gwashington'
   * // }
   * ```
   * @private
   */
  static parseColumnName(columnName: string): ParsedColumn {
    const colonIdx = columnName.indexOf(':');

    if (colonIdx === -1) {
      // columnName does not contain ':'
      return {
        family: columnName,
        qualifier: undefined,
      };
    }

    return {
      family: columnName.slice(0, colonIdx),
      qualifier: columnName.slice(colonIdx + 1),
    };
  }

  /**
   * Converts the mutation object into proto friendly JSON.
   *
   * @returns {object}
   * @private
   */
  toProto(): IMutateRowRequest {
    const mutation: IMutateRowRequest = {};

    if (this.key) {
      mutation.rowKey = Mutation.convertToBytes(this.key) as Uint8Array;
    }

    if (this.method === Mutation.methods.INSERT) {
      mutation.mutations = Mutation.encodeSetCell(this.data);
    } else if (this.method === Mutation.methods.DELETE) {
      mutation.mutations = Mutation.encodeDelete(this.data);
    }

    return mutation;
  }

  /**
   * Mutation methods
   *
   * @private
   *
   * INSERT => setCell
   * DELETE => deleteFrom*
   */
  static methods = {
    INSERT: 'insert',
    DELETE: 'delete',
  };
}
