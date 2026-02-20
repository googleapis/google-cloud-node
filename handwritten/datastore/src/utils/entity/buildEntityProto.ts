// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {entity, Entity, EntityProto, ValueProto} from '../../entity';
import {EntityProtoReduceAccumulator, EntityProtoReduceData} from '../../index';
import addExcludeFromIndexes = entity.addExcludeFromIndexes;

/**
 * This function builds the entity proto from the entity object. We cannot
 * rely on entity.entityToEntityProto for this because this function is only
 * designed to be used for non-array entities.
 *
 */
export function buildEntityProto(entityObject: Entity) {
  let entityProto: EntityProto = {};
  if (Array.isArray(entityObject.data)) {
    // This code builds the right entityProto from the entityObject
    entityProto.properties = entityObject.data.reduce(
      (acc: EntityProtoReduceAccumulator, data: EntityProtoReduceData) => {
        const value = entity.encodeValue(data.value, data.name.toString());

        if (typeof data.excludeFromIndexes === 'boolean') {
          const excluded = data.excludeFromIndexes;
          let values = value.arrayValue && value.arrayValue.values;

          if (values) {
            values = values.map((x: ValueProto) => {
              x.excludeFromIndexes = excluded;
              return x;
            });
          } else {
            value.excludeFromIndexes = data.excludeFromIndexes;
          }
        }

        acc[data.name] = value;

        return acc;
      },
      {},
    );
    // This code adds excludeFromIndexes in the right places
    addExcludeFromIndexes(entityObject.excludeFromIndexes, entityProto);
  } else {
    // This code builds the right entityProto from the entityObject
    entityProto = entity.entityToEntityProto(entityObject);
  }
  return entityProto;
}
