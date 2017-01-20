/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

module.exports.isValid = isValid;

/**
 * Validates if the AST represented by the node has obvious side-effects.
 * It catches the most common cases such as assignments, method calls, and
 * control flow. It doesn't (presently) catch property access that may end
 * up calling accessors.
 *
 * @param {Object} node AST Node (as per the Mozilla Parser API)
 * @return {boolean} if the exper
 */
function isValid(node) {
  // Empty expression is allowed
  if (node === null) { return true; }

  switch (node.type) {
    case 'Program':
      return node.body.every(isValid);

    //
    // S T A T E M E N T S
    //
    case 'EmptyStatement':
      return true;
    case 'ExpressionStatement':
      return isValid(node.expression);
    case 'BlockStatement':
      return node.body.every(isValid);
    case 'LabeledStatement':
      return isValid(node.body);

    //
    // E X P R E S S I O N S
    //
    case 'AssignmentExpression':
    case 'CallExpression':
    case 'FunctionExpression':
    case 'NewExpression':
    case 'UpdateExpression':
      return false;

    case 'Identifier':
    case 'Literal':
    case 'ThisExpression':
      return true;

    case 'ArrayExpression':
      return node.elements.every(isValid);

    case 'BinaryExpression':
    case 'LogicalExpression':
      return isValid(node.left) && isValid(node.right);

    case 'ConditionalExpression':
      return isValid(node.test) && isValid(node.alternate) &&
        isValid(node.consequent);

    case 'MemberExpression':
      return isValid(node.object) && isValid(node.property);

    case 'ObjectExpression':
      // every property is a valid expression
      return node.properties.every(function(prop){
        return isValid(prop.value);
      });

    case 'SequenceExpression':
      return node.expressions.every(isValid);

    case 'UnaryExpression':
      return isValid(node.argument);

    case 'SpreadElement':
      return isValid(node.argument);

    case 'TemplateLiteral':
      return node.quasis.every(isValid) && node.expressions.every(isValid);
    case 'TaggedTemplateExpression':
      return isValid(node.tag) && isValid(node.quasi);
    case 'TemplateElement':
      return true;

    default:
      return false;
  }
}
