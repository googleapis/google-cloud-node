// Copyright 2023 Google LLC
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

import {Visitor, types} from '@babel/core';

export interface PluginOptions {
  opts?: {
    variableIdentifier?: string;
    replacementValue?: boolean;
  };
}

export default function toggleESMFlagVariable(): {
  visitor: Visitor<PluginOptions>;
} {
  return {
    visitor: {
      VariableDeclarator(path, state) {
        const opts = state.opts || {};
        const variableIdentifier = opts.variableIdentifier || 'isEsm';
        const replacementValue = opts.replacementValue || false;
        const {node} = path;
        const identifier = node.id as types.Identifier;
        if (
          identifier.name === variableIdentifier &&
          node.init?.type === 'BooleanLiteral'
        ) {
          node.init.value = replacementValue;
        }
      },
    },
  };
}
