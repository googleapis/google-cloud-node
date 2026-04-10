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

import {Entity, entity} from '../entity';

/*
Entity data passed into save in non array form will be of type SaveNonArrayData
and does not require name and value properties.
 */
type SaveNonArrayData = {
  [k: string]: Entity;
};

/*
Entity data passed into save in an array form will be of type SaveArrayData
so will have name and value defined because the source code of save requires a
name and a value to be defined or else an error will be thrown.
 */
interface SaveArrayData {
  name: {
    toString(): string;
  };
  value: Entity;
  excludeFromIndexes?: boolean;
}

/*
When saving an entity, data in the data property of the entity is of type
SaveDataValue. The data can either be in array form in which case it will
match the SaveArrayData[] data type or it can be in non-array form where
it will match the SaveNonArrayData data type.
 */
export type SaveDataValue = SaveArrayData[] | SaveNonArrayData;

/*
An Entity passed into save will include a Key object contained either inside
a `key` property or inside a property indexed by the Key Symbol. If it is
the former then it will be of type SaveEntityWithoutKeySymbol.
 */
interface SaveEntityWithoutKeySymbol {
  key: entity.Key;
  data: SaveDataValue;
  excludeFromIndexes?: string[];
}

/*
An Entity passed into save will include a Key object contained either inside
a `key` property or inside a property indexed by the Key Symbol. If it is
the latter then it will be of type SaveEntityWithKeySymbol.
 */
interface SaveEntityWithKeySymbol {
  [entity.KEY_SYMBOL]: entity.Key;
  data: SaveDataValue;
}

/*
Entities passed into the first argument of the save function are expected to be
of type SaveEntity[] after being turned into an array. We could change the
signature of save later to enforce this, but doing so would be a breaking change
so we just cast this value to SaveEntity[] for now to enable strong type
enforcement throughout this function.
 */
export type SaveEntity = SaveEntityWithoutKeySymbol | SaveEntityWithKeySymbol;
