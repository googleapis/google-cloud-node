// Copyright 2019 Google LLC
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

import * as querystring from 'querystring';

export function normalize<T = {}, U = Function>(
  optionsOrCallback?: T | U,
  cb?: U
) {
  const options = (
    typeof optionsOrCallback === 'object' ? optionsOrCallback : {}
  ) as T;
  const callback = (
    typeof optionsOrCallback === 'function' ? optionsOrCallback : cb
  )! as U;
  return {options, callback};
}

/**
 * Flatten an object into an Array of arrays, [[key, value], ..].
 * Implements Object.entries() for Node.js <8
 * @internal
 */
export function objectEntries<T>(obj: {[key: string]: T}): Array<[string, T]> {
  return Object.keys(obj).map(key => [key, obj[key]] as [string, T]);
}

/**
 * Encode `str` with encodeURIComponent, plus these
 * reserved characters: `! * ' ( )`.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent| MDN: fixedEncodeURIComponent}
 *
 * @param {string} str The URI component to encode.
 * @return {string} The encoded string.
 */
export function fixedEncodeURIComponent(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    c => '%' + c.charCodeAt(0).toString(16).toUpperCase()
  );
}

/**
 * URI encode `uri` for generating signed URLs, using fixedEncodeURIComponent.
 *
 * Encode every byte except `A-Z a-Z 0-9 ~ - . _`.
 *
 * @param {string} uri The URI to encode.
 * @param [boolean=false] encodeSlash If `true`, the "/" character is not encoded.
 * @return {string} The encoded string.
 */
export function encodeURI(uri: string, encodeSlash: boolean): string {
  // Split the string by `/`, and conditionally rejoin them with either
  // %2F if encodeSlash is `true`, or '/' if `false`.
  return uri
    .split('/')
    .map(fixedEncodeURIComponent)
    .join(encodeSlash ? '%2F' : '/');
}

/**
 * Serialize an object to a URL query string using util.encodeURI(uri, true).
 * @param {string} url The object to serialize.
 * @return {string} Serialized string.
 */
export function qsStringify(qs: querystring.ParsedUrlQueryInput): string {
  return querystring.stringify(qs, '&', '=', {
    encodeURIComponent: (component: string) => encodeURI(component, true),
  });
}

export function objectKeyToLowercase<T>(object: {[key: string]: T}) {
  const newObj: {[key: string]: T} = {};
  for (let key of Object.keys(object)) {
    const value = object[key];
    key = key.toLowerCase();
    newObj[key] = value;
  }
  return newObj;
}

/**
 * JSON encode str, with unicode \u+ representation.
 * @param {object} obj The object to encode.
 * @return {string} Serialized string.
 */
export function unicodeJSONStringify(obj: object) {
  return JSON.stringify(obj).replace(
    /[\u0080-\uFFFF]/g,
    (char: string) =>
      '\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4)
  );
}

/**
 * Converts the given objects keys to snake_case
 * @param {object} obj object to convert keys to snake case.
 * @returns {object} object with keys converted to snake case.
 */
export function convertObjKeysToSnakeCase(obj: object): object {
  if (obj instanceof Date || obj instanceof RegExp) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(convertObjKeysToSnakeCase);
  }
  if (obj instanceof Object) {
    return Object.keys(obj).reduce((acc, cur) => {
      const s =
        cur[0].toLocaleLowerCase() +
        cur.slice(1).replace(/([A-Z]+)/g, (match, p1) => {
          return `_${p1.toLowerCase()}`;
        });

      acc[s] = convertObjKeysToSnakeCase(obj[cur as keyof Object]);
      return acc;
    }, Object());
  }

  return obj;
}

/**
 * Formats the provided date object as a UTC ISO string.
 * @param {Date} dateTimeToFormat date object to be formatted.
 * @param {boolean} includeTime flag to include hours, minutes, seconds in output.
 * @param {string} dateDelimiter delimiter between date components.
 * @param {string} timeDelimiter delimiter between time components.
 * @returns {string} UTC ISO format of provided date obect.
 */
export function formatAsUTCISO(
  dateTimeToFormat: Date,
  includeTime = false,
  dateDelimiter = '',
  timeDelimiter = ''
): string {
  const year = dateTimeToFormat.getUTCFullYear();
  const month = dateTimeToFormat.getUTCMonth() + 1;
  const day = dateTimeToFormat.getUTCDate();
  const hour = dateTimeToFormat.getUTCHours();
  const minute = dateTimeToFormat.getUTCMinutes();
  const second = dateTimeToFormat.getUTCSeconds();

  let resultString = `${year.toString().padStart(4, '0')}${dateDelimiter}${month
    .toString()
    .padStart(2, '0')}${dateDelimiter}${day.toString().padStart(2, '0')}`;
  if (includeTime) {
    resultString = `${resultString}T${hour
      .toString()
      .padStart(2, '0')}${timeDelimiter}${minute
      .toString()
      .padStart(2, '0')}${timeDelimiter}${second.toString().padStart(2, '0')}Z`;
  }

  return resultString;
}

/**
 * Attempts to retrieve package.json from either the typescript or build context.
 * @returns {object} object representation of package.json
 */
export function getPackageJSON(): ReturnType<JSON['parse']> {
  let packageJson: ReturnType<JSON['parse']> = undefined;
  const possiblePaths = ['../../package.json', '../package.json'];

  for (const path of possiblePaths) {
    try {
      packageJson = require(path);
      break;
    } catch {
      packageJson = undefined;
    }
  }

  if (packageJson) {
    return packageJson;
  }

  throw new Error('Unable to find package.json');
}
