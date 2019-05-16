// Copyright 2019 Google LLC
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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Represents an expression text. Example:
 *
 *     title: "User account presence"
 *     description: "Determines whether the request has a user account"
 *     expression: "size(request.user) > 0"
 *
 * @property {string} expression
 *   Textual representation of an expression in
 *   Common Expression Language syntax.
 *
 *   The application context of the containing message determines which
 *   well-known feature set of CEL is supported.
 *
 * @property {string} title
 *   An optional title for the expression, i.e. a short string describing
 *   its purpose. This can be used e.g. in UIs which allow to enter the
 *   expression.
 *
 * @property {string} description
 *   An optional description of the expression. This is a longer text which
 *   describes the expression, e.g. when hovered over it in a UI.
 *
 * @property {string} location
 *   An optional string indicating the location of the expression for error
 *   reporting, e.g. a file name and a position in the file.
 *
 * @typedef Expr
 * @memberof google.type
 * @see [google.type.Expr definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/type/expr.proto}
 */
const Expr = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};