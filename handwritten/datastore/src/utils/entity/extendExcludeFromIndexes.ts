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

import {entity, Entity} from '../../entity';

/**
 * This function extends the excludeFromIndexes list when it finds
 * large properties in the entity object. The extended excludeFromIndexes
 * list is then used when building the entity proto.
 *
 * @param {Entity} entityObject The entity object to parse for properties to
 * add to the excludeFromIndexes list.
 */
export function extendExcludeFromIndexes(entityObject: Entity) {
  if (entityObject.excludeLargeProperties) {
    if (Array.isArray(entityObject.data)) {
      // This code populates the excludeFromIndexes list with the right values.
      entityObject.data.forEach(
        (data: {
          name: {
            toString(): string;
          };
          value: Entity;
          excludeFromIndexes?: boolean;
        }) => {
          entityObject.excludeFromIndexes = entity.findLargeProperties_(
            data.value,
            data.name.toString(),
            entityObject.excludeFromIndexes,
          );
        },
      );
    } else {
      entityObject.excludeFromIndexes = entity.findLargeProperties_(
        entityObject.data,
        '',
        entityObject.excludeFromIndexes,
      );
    }
  }
}
