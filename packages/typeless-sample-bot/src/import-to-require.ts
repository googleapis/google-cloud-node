// Copyright 2021 Google LLC
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

// https://lihautan.com/step-by-step-guide-for-writing-a-babel-transformation/
// https://lihautan.com/babel-ast-explorer/
// https://github.com/esamattis/babel-plugin-ts-optchain/blob/master/packages/babel-plugin-ts-optchain/src/plugin.ts

import * as Babel from '@babel/types';
import {Node, NodePath, Visitor} from '@babel/traverse';

type NodePathArray = NodePath<Babel.Node>[];
type NodePathSingle = NodePath<Babel.Node>;
type NodePathMaybe = NodePathSingle | NodePathArray;

function getArray(path: NodePathSingle, subPathName: string): NodePathArray {
  return path.get(subPathName) as NodePathArray;
}

function getIdentifier(path: NodePath, subPathName: string): string {
  const nodeSingle = path.get(subPathName) as NodePathSingle;
  const nodeIdentifier = nodeSingle.node as Babel.Identifier;
  return nodeIdentifier.name;
}

function getStringValue(path: NodePath, subPathName: string): string {
  const nodeSingle = path.get(subPathName) as NodePathSingle;
  const stringLiteral = nodeSingle.node as Babel.StringLiteral;
  return stringLiteral.value;
}

// ImportDeclaration
function specificImport(path: NodePathSingle) {
  const specifiers: NodePathArray = getArray(path, 'specifiers');
  const ids = specifiers.map((s: NodePathSingle) => {
    // s: ImportSpecifier
    const importedName = getIdentifier(s, 'imported');
    const localName = getIdentifier(s, 'local');
    if (importedName !== localName) {
      console.error('Imported name', importedName, 'is not the same as local name', localName);
      return '';
    } else {
      return importedName;
    }
  });
  const from = getStringValue(path, 'source');
  const properties = ids.map(id => {
    return Babel.objectProperty(
      /* key */ Babel.identifier(id),
      /* value */ Babel.identifier(id),
      /* computed */ false,
      /* shorthand */ true
    );
  });

  const declarator = Babel.variableDeclarator(
    Babel.objectPattern(properties),
    Babel.callExpression(Babel.identifier('require'), [Babel.stringLiteral(from)])
  );

  const replacement = Babel.inherits(
    Babel.variableDeclaration('const', [declarator]), path.node
  );
  path.replaceWith(replacement);
}

// ImportDeclaration
function wildcardImport(path: NodePathSingle) {
  const specifiers: NodePathArray = getArray(path, 'specifiers');
  const ns = getIdentifier(specifiers[0], 'local');
  const from = getStringValue(path, 'source');

  const declarator = Babel.variableDeclarator(
    Babel.identifier(ns),
    Babel.callExpression(Babel.identifier('require'), [Babel.stringLiteral(from)])
  );

  const replacement = Babel.inherits(
    Babel.variableDeclaration('const', [declarator]),
    path.node
  );
  path.replaceWith(replacement);
}

interface VisitorPlugin {
  visitor: Visitor<unknown>;
}

export default function importToRequire(): VisitorPlugin {
  return {
    visitor: {
      ImportDeclaration(path: NodePathSingle) {
        const specifiers = path.get('specifiers') as NodePathArray;
        if (specifiers && specifiers.length > 0) {
          if (specifiers[0].isImportSpecifier()) {
            specificImport(path);
          } else if (specifiers[0].isImportNamespaceSpecifier()) {
            wildcardImport(path);
          }
          path.skip();
        }
      }
    },
  };
}
