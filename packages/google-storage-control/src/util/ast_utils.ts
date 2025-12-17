// Copyright 2025 Google LLC
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

import * as ts from 'typescript';

const EXCLUDED_FUNCTION_TERMS: string[] = [];
const AST_TYPES_TO_INCLUDE: string[] = ['MethodDeclaration', 'GetAccessor'];

type NameMethodPair = [
  ts.PropertyName,
  ts.MethodDeclaration | ts.GetAccessorDeclaration,
];
type MethodDocstringMap = Map<string, string>;
let foundNodes: NameMethodPair[] = [];
const methodDocstrings: MethodDocstringMap = new Map();
let sourceFile: ts.SourceFile;

/**
 * This is a helper function to get the escaped text from a AST node.
 * The `name` property of a MethodDeclaration or Parameter can be one of several types.
 * In our use case, we know it's an Identifier, so we can safely cast it to get the
 * human-readable name.
 *
 * @param {ts.PropertyName | ts.BindingName} name - The node to get the name from.
 * @returns {string} The escaped text of the node's name.
 */
function getEscapedText(name: ts.PropertyName | ts.BindingName): string {
  name = name as ts.Identifier;
  const nameEscapedText = name.escapedText as string;
  return nameEscapedText;
}

/**
 * This is a helper function to generate the overloaded method signatures for a given method.
 *
 * @param {ts.MethodDeclaration | ts.GetAccessorDeclaration} node - The AST node for the method.
 * @returns {string} The overloaded method signatures.
 */
function getOverloadedMethod(
  node: ts.MethodDeclaration | ts.GetAccessorDeclaration,
): string {
  if (ts.isGetAccessorDeclaration(node) || !node.body) {
    return '';
  }

  const functionName = getEscapedText(node.name);
  const parameters = node.parameters;

  // We are looking for standard GAPIC methods which have this signature pattern
  if (parameters.length < 2 || parameters.length > 3) {
    return '';
  }

  const requestParam = parameters[0];
  const optionsOrCallbackParam = parameters[1];

  // Not a standard GAPIC method if the params don't have types
  if (!requestParam.type || !optionsOrCallbackParam.type || !node.type) {
    return '';
  }

  const requestParamName = getEscapedText(requestParam.name);
  const requestType = requestParam.type.getText(sourceFile);

  // Extract Promise and Callback types from return type
  let promiseReturnType = '';
  if (ts.isUnionTypeNode(node.type)) {
    const promiseTypeNode = node.type.types.find(
      t =>
        t.kind === ts.SyntaxKind.TypeReference &&
        t.getText(sourceFile).startsWith('Promise'),
    );
    if (promiseTypeNode) {
      promiseReturnType = promiseTypeNode.getText(sourceFile);
    }
  } else if (node.type.getText(sourceFile).startsWith('Promise')) {
    promiseReturnType = node.type.getText(sourceFile);
  }

  // If there's no promise return type, it's not a method we need to overload.
  if (!promiseReturnType) {
    return '';
  }

  // Extract Callback type from the `optionsOrCallback` parameter
  let callbackType = '';
  if (ts.isUnionTypeNode(optionsOrCallbackParam.type)) {
    const callbackTypeNode = optionsOrCallbackParam.type.types.find(
      t =>
        t.kind === ts.SyntaxKind.TypeReference &&
        (t.getText(sourceFile).startsWith('Callback') ||
          t.getText(sourceFile).startsWith('PaginationCallback')),
    );
    if (callbackTypeNode) {
      callbackType = callbackTypeNode.getText(sourceFile);
    }
  }

  // If there's no callback type, it's not a method we need to overload.
  if (!callbackType) {
    return '';
  }

  // Make request param non-optional for callback signatures
  const requiredRequestType = requestType.replace('?', '');

  const promiseSignature = `\n${functionName}(${requestParamName}?: ${requestType}, options?: CallOptions): ${promiseReturnType};`;
  const callbackWithOptionsSignature = `\n${functionName}(${requestParamName}: ${requiredRequestType}, options: CallOptions, callback: ${callbackType}): void;`;
  const callbackWithoutOptionsSignature = `\n${functionName}(${requestParamName}: ${requiredRequestType}, callback: ${callbackType}): void;`;

  return (
    promiseSignature +
    callbackWithOptionsSignature +
    callbackWithoutOptionsSignature
  );
}

/**
 * This is a helper function to get the kind of a AST node.
 *
 * @param {ts.Node} node - The node to get the kind from.
 * @returns {string} The kind of the node.
 */
function getKind(node: ts.Node) {
  if (!node) {
    return '';
  }
  return ts.SyntaxKind[node.kind];
}

/**
 * This function recursively traverses the AST of a file and extracts all the
 * method declarations that we want to include in our generated client.
 *
 * @param {ts.Node} node - The current node in the AST.
 * @param {string} client - The name of the client being processed.
 */
function extract(node: ts.Node, client: string): void {
  const kind = getKind(node);
  if (AST_TYPES_TO_INCLUDE.includes(kind)) {
    if (ts.isMethodDeclaration(node) || ts.isGetAccessorDeclaration(node)) {
      const nameEscapedText = getEscapedText(node.name);
      if (methodDocstrings.get(nameEscapedText) === undefined) {
        const commentRanges = ts.getLeadingCommentRanges(
          sourceFile.getFullText(),
          node.getFullStart(),
        );
        let docString = '';
        if (commentRanges) {
          commentRanges.map(r => {
            docString = docString.concat(
              sourceFile!.getFullText().slice(r.pos, r.end),
            );
            if (r.hasTrailingNewLine) {
              docString = docString.concat('\n');
            }
          });
        }
        methodDocstrings.set(nameEscapedText, docString);
      }

      if (node.body) {
        foundNodes.push([node.name, node]);
      }
    }
  }
  ts.forEachChild(node, childNode => {
    extract(childNode, client);
  });
}

/**
 * This function contains the logic to traverse each file and pull in the nodes
 * from the AST that contain elements we want to use. It then generates the
 * source code for the methods of our uber client.
 *
 * @param {string} file - The path to the file to process.
 * @param {string} client - The name of the client being processed.
 * @returns {string} The generated source code for the methods.
 */
function ast(file: string, client: string): [string, string][] {
  const program = ts.createProgram([file], {allowJs: true});
  sourceFile = program.getSourceFile(file)!;
  if (!sourceFile) {
    throw new Error(`Could not find source file: ${file}`);
  }

  // Run the extract function with the script's arguments
  extract(sourceFile, client);
  program.getTypeChecker();

  return foundNodes.map(f => {
    let output = '';
    const [name, node] = f;
    const escapedName = getEscapedText(name);

    // create function name
    const functionName = `${escapedName}`;
    let isExcludedFunction = false;
    for (const term of EXCLUDED_FUNCTION_TERMS) {
      if (functionName.search(term) >= 0) {
        isExcludedFunction = true;
        break;
      }
    }

    const isStatic = node.modifiers?.some(
      m => m.kind === ts.SyntaxKind.StaticKeyword,
    );
    if (!isExcludedFunction) {
      const docString = methodDocstrings.get(functionName);
      output = output.concat(`\n\n${docString}`);
      output = output.concat(getOverloadedMethod(node));
      if (isStatic) {
        output = output.concat('\tstatic ');
      }
      if (ts.isGetAccessorDeclaration(node)) {
        output = output.concat('get ');
      }
      output = output.concat(`\t${functionName}(`);
      // add parameters - pull in their name, whether they're optional or not, and their type
      let parametersList = '';
      let argumentsList = '';
      if (ts.isMethodDeclaration(node)) {
        for (let i = 0; i < node.parameters.length; i++) {
          const name = getEscapedText(node.parameters[i].name);
          const questionToken = node.parameters[i].questionToken ? '?' : '';
          const typeString = node.parameters[i].type?.getFullText();
          let parameter = `${name}${questionToken}: ${typeString}`;

          parametersList = parametersList.concat(name);
          if (name === 'optionsOrCallback') {
            argumentsList = argumentsList.concat('options');
          } else {
            argumentsList = argumentsList.concat(name);
          }
          if (i !== node.parameters.length - 1) {
            parameter += ',';
            parametersList += ',';
            argumentsList += ',';
          }
          output = output.concat(`\n\t\t${parameter}`);
        }
      }
      output = output.concat(')');

      if (node.type) {
        output = output.concat(`:${node.type.getFullText()}`);
      }

      const clientName = parseClientName(client);

      // call underlying client function
      if (node.body) {
        let body = '';
        if (ts.isGetAccessorDeclaration(node)) {
          if (isStatic) {
            body = `
              return ${client}.${functionName};`;
          } else {
            body = `
              return this.${clientName}.${functionName};`;
          }
        } else if (functionName === 'close') {
          body = `
    return Promise.all([
      this.storageControlInternal.close(),
      this.storageClient.close(),
    ]).then(() => {});
`;
        } else if (functionName === 'getProjectId') {
          body = `
    if (callback) {
      this.${clientName}.getProjectId(callback);
      return;
    }
    return this.${clientName}.getProjectId();
`;
        } else {
          const hasRequestArg = node.parameters.some(
            p => getEscapedText(p.name) === 'request',
          );

          // If there's no 'request' parameter, it's a simple helper method.
          if (
            !hasRequestArg ||
            functionName.endsWith('Stream') ||
            functionName.endsWith('Async')
          ) {
            body = `
              return this.${clientName}.${functionName}(${argumentsList});`;
          }
          // Otherwise, it's a GAPIC method (streaming or standard).
          else {
            body = `
                request = request || {};
                let options: any;
                if (typeof optionsOrCallback === 'function' && callback === undefined) {
                    callback = optionsOrCallback;
                    options = {};
                }
                else {
                    options = optionsOrCallback as any;
                }
                if (callback === undefined){
                  return this.${clientName}.${functionName}(request, options);
                }
                return this.${clientName}.${functionName}(${argumentsList});
            `;
          }
        }
        output = output.concat(`{\n${body}\n}`);
      }
    }
    const functionKey = isStatic ? `static_${functionName}` : functionName;
    return [functionKey, output];
  });
}

/**
 * This function loops through the files and calls the AST function on them.
 *
 * @param {string[]} files - A list of file paths to process.
 * @param {string[]} clients - A list of client names to process.
 * @returns {string} The generated source code for all the methods.
 */
export function astHelper(files: string[], clients: string[]) {
  const functions = new Map<string, string>();
  for (const f in files) {
    foundNodes = [];
    const client = clients[f];
    const newFunctions = ast(files[f], client);
    for (const [name, source] of newFunctions) {
      if (functions.has(name)) {
        if (client === 'storageControlInternalClient') {
          functions.set(name, source);
        }
      } else {
        functions.set(name, source);
      }
    }
  }
  let output = '';
  functions.forEach(source => {
    output += source;
  });
  return output;
}

/**
 * This function converts client types to the names we'll use for variables.
 *
 * @param {string} client - The name of the client.
 * @returns {string} The name of the client in camel case.
 */
export function parseClientName(client: string) {
  return client.charAt(0).toLowerCase() + client.slice(1);
}

/**
 * This function returns all the public property declarations in a file.
 *
 * @param {string} file - The path to the file to process.
 * @returns {Map<string, string>} A map of public property names to their full text.
 */
export function getPropertyDeclarations(file: string): Map<string, string> {
  const program = ts.createProgram([file], {allowJs: true});
  const sourceFile = program.getSourceFile(file)!;
  if (!sourceFile) {
    throw new Error(`Could not find source file: ${file}`);
  }
  const properties = new Map<string, string>();

  function visit(node: ts.Node) {
    if (ts.isPropertyDeclaration(node)) {
      const isPrivate = node.modifiers?.some(
        m => m.kind === ts.SyntaxKind.PrivateKeyword,
      );
      if (!isPrivate) {
        const propertyName = getEscapedText(node.name);
        if (!propertyName.startsWith('_') && !propertyName.startsWith('#')) {
          properties.set(propertyName, node.getFullText(sourceFile));
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return properties;
}
