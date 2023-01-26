// Copyright 2020 Google LLC
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
//
import * as _helpers from './helpers';
import * as protos from '../protos/protos';

const enhancedTypesJson = require('./enhanced-types.json');

interface JsonNode {
  [index: string]: string[] | JsonNode | JsonNode[];
}

interface PrototypedObject {
  prototype: Function;
}

interface NestedNamespace {
  [index: string]: PrototypedObject | NestedNamespace;
}

// Walk the tree of nested namespaces contained within the enhanced-types.json file
function walkNamespaces(
  jsonNode: JsonNode,
  rootNamespace: NestedNamespace
): void {
  for (const namespaceName in jsonNode) {
    if (Object.hasOwnProperty.call(jsonNode, namespaceName)) {
      const namespace = rootNamespace[namespaceName];

      // Get the namespace object from JSON
      const namespaceJsonObject = jsonNode[namespaceName];

      // Verify that this is an array node.
      if (
        namespace &&
        namespaceJsonObject &&
        Array.isArray(namespaceJsonObject)
      ) {
        // Assign the methods to this list of types.
        assignMethodsToMessages(
          namespace as NestedNamespace,
          namespaceJsonObject as string[]
        );

        // Check if this is another node.
      } else if (
        namespace &&
        namespaceJsonObject &&
        typeof namespaceJsonObject === 'object' &&
        !Array.isArray(namespaceJsonObject)
      ) {
        // Iterate over the next level of namespaces
        walkNamespaces(namespaceJsonObject, namespace as NestedNamespace);
      }
    }
  }
}

// Assign the toValue() and fromValue() helper methods to the enhanced message objects.
function assignMethodsToMessages(
  // tslint:disable-next-line no-any
  namespace: NestedNamespace,
  messages: string[]
): void {
  for (const message of messages) {
    if (message in namespace) {
      const enhancedMessage: PrototypedObject = namespace[
        message
      ] as PrototypedObject;
      if (enhancedMessage) {
        Object.assign(enhancedMessage.prototype, _helpers.addToValue());

        // Capture reference to `enhancedMessage` class in closure below.
        const _addFromValue = {
          fromValue: (value: object): object | undefined => {
            const messageType = enhancedMessage as unknown as protobuf.Type;
            const message = messageType.create();
            const convertedValue = _helpers.fromValue(value);
            if (convertedValue !== undefined) {
              Object.assign(message, convertedValue);
              return message;
            }
            return undefined;
          },
        };
        Object.assign(enhancedMessage, _addFromValue);
      }
    }
  }
}

export function _enhance(apiVersion: string): void {
  const schemaRoot = enhancedTypesJson[apiVersion]['schema'];
  const namespaceRoot = (
    protos.google.cloud.aiplatform as unknown as NestedNamespace
  )[apiVersion] as NestedNamespace;
  const namespaceSchemaRoot = namespaceRoot['schema'];
  walkNamespaces(schemaRoot, namespaceSchemaRoot as NestedNamespace);
}
