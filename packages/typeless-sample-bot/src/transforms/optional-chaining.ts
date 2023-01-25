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

import * as Babel from '@babel/types';
import {NodePathSingle, VisitorPlugin} from './babel.js';

// Because optional chaining is still a proposal in many versions of Node,
// go ahead and convert it to plain '.'. It should work in TypeScript.
export default function optionalChaining(): VisitorPlugin {
  return {
    visitor: {
      OptionalCallExpression(path: NodePathSingle) {
        const node = path.node as Babel.OptionalCallExpression;
        path.replaceWith(Babel.callExpression(node.callee, node.arguments));
      },
      OptionalMemberExpression(path: NodePathSingle) {
        const node = path.node as Babel.OptionalMemberExpression;
        path.replaceWith(
          Babel.memberExpression(
            node.object,
            node.property,
            node.computed,
            node.optional
          )
        );
      },
      LogicalExpression(path: NodePathSingle) {
        const node = path.node as Babel.LogicalExpression;
        if (node.operator === '??') {
          path.replaceWith(
            Babel.logicalExpression('||', node.left, node.right)
          );
        }
      },
    },
  };
}
