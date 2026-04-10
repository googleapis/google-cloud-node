// Copyright 2025 Google LLC
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

import {entity, PropertyTransform} from '../../entity';
import {google} from '../../../protos/protos';
import IValue = google.datastore.v1.IValue;
import ServerValue = google.datastore.v1.PropertyTransform.ServerValue;

/**
 * This method takes the user supplied transforms object and returns a list of
 * corresponding transforms that are instead in the shape of the protos so that
 * they can be included in the grpc request to the service directly.
 *
 * @param transforms The transforms supplied by the user that the user intends
 * to apply.
 */
export function buildPropertyTransforms(transforms: PropertyTransform[]) {
  const propertyTransforms: google.datastore.v1.IPropertyTransform[] = [];
  transforms.forEach((transform: PropertyTransform) => {
    const property = transform.property;
    // If the user's transform has a setToServerValue property then ensure the
    // propertyTransforms sent in the request have a setToServerValue transform.
    if (transform.setToServerValue) {
      propertyTransforms.push({
        property,
        setToServerValue: ServerValue.REQUEST_TIME,
      });
    }
    // If the transform has an 'increment', 'maximum' or 'minimum' property then
    // add the corresponding property transform to the propertyTransforms in the
    // request.
    ['increment', 'maximum', 'minimum'].forEach(type => {
      const castedType = type as 'increment' | 'maximum' | 'minimum';
      if (transform[castedType]) {
        propertyTransforms.push({
          property,
          [castedType]: entity.encodeValue(
            parseFloat(transform[castedType]),
            property,
          ) as IValue,
        });
      }
    });
    // If the transform has an 'appendMissingElements' or 'removeAllFromArray'
    // property then add the corresponding property transform to the
    // propertyTransforms in the request.
    ['appendMissingElements', 'removeAllFromArray'].forEach(type => {
      const castedType = type as 'appendMissingElements' | 'removeAllFromArray';
      if (transform[castedType]) {
        propertyTransforms.push({
          property,
          [castedType]: {
            values: transform[castedType].map(element => {
              return entity.encodeValue(element, property) as IValue;
            }),
          },
        });
      }
    });
  });
  return propertyTransforms;
}
