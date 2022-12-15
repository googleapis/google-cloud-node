// Copyright 2022 Google LLC
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

// Reference notes:
// https://lihautan.com/step-by-step-guide-for-writing-a-babel-transformation/
// https://lihautan.com/babel-ast-explorer/
// https://github.com/esamattis/babel-plugin-ts-optchain/blob/master/packages/babel-plugin-ts-optchain/src/plugin.ts

import {NodePath, Visitor} from '@babel/traverse';
import * as Babel from '@babel/types';

export interface VisitorPlugin {
  visitor: Visitor<unknown>;
}

export type NodePathArray = NodePath<Babel.Node>[];
export type NodePathSingle = NodePath<Babel.Node>;
