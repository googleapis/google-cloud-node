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
    fromLibName?: string;
    toLibName?: string;
  };
}

export default function replaceESMMockingLib(): {
  visitor: Visitor<PluginOptions>;
} {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const opts = state.opts || {};
        const fromLib = opts.fromLibName || 'esmock';
        const toLib = opts.toLibName || 'proxyquire';
        const {node} = path;

        node.specifiers.forEach(spec => {
          if (spec.local.name !== fromLib) {
            return;
          }
          spec.local.name = spec.local.name.replace(fromLib, toLib);
        });

        if (node.source.value !== fromLib) {
          return;
        }
        node.source.value = node.source.value.replace(fromLib, toLib);
      },
      CallExpression(path, state) {
        const opts = state.opts || {};
        const fromLib = opts.fromLibName || 'esmock';
        const toLib = opts.toLibName || 'proxyquire';
        const {node} = path;

        if (types.isIdentifier(node.callee)) {
          if (node.callee.name !== fromLib) {
            return;
          }

          node.callee.name = toLib;
          path.parentPath.replaceWith(types.expressionStatement(node));
        }
      },
    },
  };
}
