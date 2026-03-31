// Copyright 2024 Google LLC
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

import {Data, Mutation, Bytes} from '../../../../src/mutation';
import * as protos from '../../../protos/protos';

/**
 * Inverts the Mutation.parse function. Reconstructs a Mutation object from its
 * protobuf representation.
 *
 * @param {protos.google.bigtable.v2.IMutateRowRequest} req The protobuf representation of the mutation.
 * @returns {Mutation} The reconstructed Mutation object.
 */
export function mutationParseInverse(req: {
  mutations: protos.google.bigtable.v2.IMutation[];
}): Mutation {
  let method: string | undefined;
  let data: Data;

  if (req.mutations && req.mutations.length > 0) {
    if (req.mutations[0].setCell) {
      method = Mutation.methods.INSERT;
      const localData = {} as any;

      req.mutations.forEach(m => {
        const cell = m.setCell;
        if (cell) {
          const family = cell.familyName!;
          const qualifier = Mutation.convertFromBytes(
            cell.columnQualifier! as Bytes,
          );

          // Now TypeScript knows that 'data' is an object, and 'family' is a string key
          if (!localData[family]) {
            localData[family] = {};
          }
          localData[family][qualifier as string] = {
            value: Mutation.convertFromBytes(cell?.value as Bytes),
            timestamp: cell?.timestampMicros,
          };
        }
      });
      data = localData;
    } else if (
      req.mutations.some(
        m => m.deleteFromColumn || m.deleteFromFamily || m.deleteFromRow,
      )
    ) {
      method = Mutation.methods.DELETE;
      const localData: Data[] = [];

      req.mutations.forEach(m => {
        if (m.deleteFromColumn) {
          const col = m.deleteFromColumn;

          const column = {
            family: col?.familyName,
            qualifier: Mutation.convertFromBytes(col?.columnQualifier as Bytes),
          };

          const qualifier = `${column.family}:${column.qualifier}`;

          if (
            col?.timeRange?.startTimestampMicros &&
            col?.timeRange.endTimestampMicros
          ) {
            const time = {
              start: col?.timeRange?.startTimestampMicros,
              end: col?.timeRange.endTimestampMicros,
            };
            localData.push({column: qualifier, time});
          } else {
            localData.push(qualifier);
          }
        } else if (m.deleteFromFamily) {
          localData.push(m.deleteFromFamily?.familyName);
        } else if (m.deleteFromRow) {
          localData.push({}); // Represent deleteFromRow as an empty object
        }
      });
      data = localData;
    }
  }

  return {method: method!, data} as Mutation; // method cannot be undefined here, assert non-null
}
