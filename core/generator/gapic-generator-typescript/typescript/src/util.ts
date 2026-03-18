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

import type * as protos from '../../protos/index.js';

export function commonPrefix(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }
  let result = '';
  while (result.length < strings[0].length) {
    // try one more character
    const next = result + strings[0][result.length];
    if (strings.every(str => str.startsWith(next))) {
      result = next;
    } else {
      break;
    }
  }
  return result;
}

// Convert a Duration to (possibly fractional) seconds.
export function seconds(duration: protos.google.protobuf.IDuration): number {
  return Number(duration.seconds || 0) + Number(duration.nanos || 0) * 1e-9;
}

// Convert a Duration to (possibly fractional) milliseconds.
export function milliseconds(
  duration: protos.google.protobuf.IDuration,
): number {
  return (
    Number(duration.seconds || 0) * 1000 + Number(duration.nanos || 0) * 1e-6
  );
}

export function isDigit(value: string): boolean {
  return /^\d+$/.test(value);
}

String.prototype.capitalize = function (this: string): string {
  if (this.length === 0) {
    return this;
  }
  return this[0].toUpperCase() + this.slice(1);
};

String.prototype.words = function (
  this: string,
  protobufJsStyle = false,
): string[] {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  let arg = this;
  if (protobufJsStyle) {
    // treat multiple capital letters as one word
    // e.g. CreateOSPolicy => create, os, policy
    // (the default would've been create, o, s, policy)
    arg = this.replace(/([A-Z])([A-Z]+)([A-Z])/g, (str: string) => {
      return (
        str[0] +
        str.slice(1, str.length - 1).toLowerCase() +
        str[str.length - 1]
      );
    });
  }
  // split on spaces, non-alphanumeric, or capital letters
  return arg
    .split(/(?=[A-Z])|[\s\W_]+/)
    .filter(w => w.length > 0)
    .map(w => w.toLowerCase());
};

String.prototype.toCamelCase = function (
  this: string,
  protobufJsStyle = false,
): string {
  const words = this.words(protobufJsStyle);
  if (words.length === 0) {
    return this;
  }
  const result = [words[0]];
  result.push(
    ...words.slice(1).map(w => {
      if (isDigit(w)) {
        return '_' + w;
      }
      return w.capitalize();
    }),
  );
  return result.join('');
};

String.prototype.toPascalCase = function (
  this: string,
  protobufJsStyle = false,
): string {
  const words = this.words(protobufJsStyle);
  if (words.length === 0) {
    return this;
  }
  const result = words.map(w => w.capitalize());
  return result.join('');
};

String.prototype.toKebabCase = function (
  this: string,
  protobufJsStyle = false,
): string {
  const words = this.words(protobufJsStyle);
  if (words.length === 0) {
    return this;
  }
  return words.join('-');
};

String.prototype.toSnakeCase = function (
  this: string,
  protobufJsStyle = false,
): string {
  const words = this.words(protobufJsStyle);
  if (words.length === 0) {
    return this;
  }
  return words.join('_');
};

Array.prototype.toCamelCaseString = function (
  this: string[],
  joiner: string,
): string {
  return this.map(part => part.toCamelCase()).join(joiner);
};

Array.prototype.toSnakeCaseString = function (
  this: string[],
  joiner: string,
): string {
  return this.map(part => part.toSnakeCase()).join(joiner);
};

export function getResourceNameByPattern(
  pattern: string,
  resource: protos.google.api.IResourceDescriptor,
): string {
  const elements = pattern.split('/');
  const name = [];
  // Multi pattern like: `projects/{project}/cmekSettings`, we need to append `cmekSettings` to the name.
  // Or it will be duplicate with `project/{project}`
  // Iterate the elements, if it comes in pairs: user/{userId}, we take `userId` as part of the name.
  // if it comes as `profile` with no following `/{profile_id}`, we take `profile` as part of the name.
  // So for pattern: `user/{user_id}/profile/blurbs/{blurb_id}`, name will be `userId_profile_blurbId`
  while (elements.length > 0) {
    // There is a very weird edge case in which if a resource turns from singular to plural (or, supports both)
    // They can turn into the same name. Example is project_location_cmekConfig and project_location_cmek_config,
    // Which turn into the same name with camelCase (therefore not unique).
    // This branch uses the plural resource to distinguish the name.
    if (elements[0] === resource.plural && resource.singular) {
      name.push(elements[0]);
      break;
    }
    const eleName = elements.shift();
    if (elements.length === 0) {
      name.push(eleName);
      break;
    } else {
      const nextEle = elements[0];
      if (nextEle.match(/(?<=\{).*?(?=(?:=.*?)?\})/g)) {
        elements.shift();
        const params = nextEle.match(/(?<=\{).*?(?=(?:=.*?)?\})/g);
        if (params!.length === 1) {
          name.push(params![0]);
        } else {
          // For non-slash resource 'organization/{organization}/tasks/{task_id}{task_name}/result'
          // Take parameters that match pattern [{task_id}, {task_name}] and combine them as part of the name.
          const params = nextEle.match(/(?<=\{).*?(?=(?:=.*?)?\})/g);
          name.push(params!.join('_'));
        }
      } else {
        if (eleName!.match(/{[a-zA-Z_]+(?:=.*?)?}/g)) {
          continue;
        } else {
          name.push(eleName);
        }
      }
    }
  }
  return name.join('_');
}

// For the given path template, extract the field name and prepare the regular
// expression to extract the field value.
// For example, for "/projects/{project=*}", the field name
// is "project", and the regex will extract the part of the string that
// corresponds to the curly brackets.
export function processPathTemplate(
  pathTemplate: string,
): {fieldSend: string; messageRegex: string} | null {
  // Find the template part
  const patternMatch = pathTemplate.match(/{(\w+)[=}]/);
  if (!patternMatch) {
    return null;
  }
  const fieldSend = patternMatch[1];

  let messageRegex = pathTemplate;
  messageRegex = messageRegex.replace(/{(\w+)}/, (_match, group) => {
    return `{${group}=*}`;
  });
  messageRegex = messageRegex.replace(/(\/?)(\*+)/g, (_match, slash, stars) => {
    if (stars === '*') {
      return slash + '[^/]+';
    }
    if (slash === '/') {
      return '(?:/.*)?';
    }
    return '(?:.*)?';
  });
  messageRegex = messageRegex.replace(
    /{(\w+)=([^}]+)}/,
    (_match, before, after) => {
      return `(?<${before}>${after})`;
    },
  );

  return {fieldSend, messageRegex};
}
