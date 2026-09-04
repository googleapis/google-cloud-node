/**
 * Copyright 2020 Google LLC
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

// This file implements gRPC to HTTP transcoding, as described in
// https://cloud.google.com/endpoints/docs/grpc-service-config/reference/rpc/google.api#grpc-transcoding

import {JSONObject, JSONValue} from 'proto3-json-serializer';
import {Field} from 'protobufjs';
import {google} from '../protos/http';
import {toCamelCase as snakeToCamelCase} from './util';

export interface TranscodedRequest {
  httpMethod: 'get' | 'post' | 'put' | 'patch' | 'delete';
  url: string;
  queryString: string;
  data: string | {};
}

const httpOptionName = '(google.api.http)';
const proto3OptionalName = 'proto3_optional';

// The following type is here only to make tests type safe
type allowedOptions = '(google.api.method_signature)';

// List of methods as defined in google/api/http.proto (see HttpRule)
const supportedHttpMethods: Array<'get' | 'put' | 'post' | 'patch' | 'delete'> =
  ['get', 'post', 'put', 'patch', 'delete'];

export type ParsedOptionsType = Array<
  {
    [httpOptionName]?: google.api.IHttpRule;
  } & {
    [option in allowedOptions]?: {} | string | number;
  }
>;

export function getField(
  request: JSONObject,
  field: string,
  allowObjects = false, // in most cases, we need leaf fields
): JSONValue | undefined {
  const parts = field.split('.');
  let value: JSONValue = request;
  for (const part of parts) {
    if (typeof value !== 'object') {
      return undefined;
    }
    value = (value as JSONObject)[part] as JSONValue;
  }
  if (
    !allowObjects &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null
  ) {
    return undefined;
  }
  return value;
}

export function deepCopyWithoutMatchedFields(
  request: JSONObject,
  fieldsToSkip: Set<string>,
  fullNamePrefix = '',
): JSONObject {
  if (typeof request !== 'object' || request === null) {
    return request;
  }
  const copy = Object.assign({}, request);
  for (const key in copy) {
    if (fieldsToSkip.has(`${fullNamePrefix}${key}`)) {
      delete copy[key];
      continue;
    }
    const nextFullNamePrefix = `${fullNamePrefix}${key}.`;
    if (Array.isArray(copy[key])) {
      // a field of an array cannot be addressed as "request.field", so we omit the skipping logic for array descendants
      copy[key] = (copy[key] as JSONObject[]).map(value =>
        deepCopyWithoutMatchedFields(value, new Set()),
      );
    } else if (typeof copy[key] === 'object' && copy[key] !== null) {
      copy[key] = deepCopyWithoutMatchedFields(
        copy[key] as JSONObject,
        fieldsToSkip,
        nextFullNamePrefix,
      );
    }
  }
  return copy;
}

export function deleteField(request: JSONObject, field: string): void {
  const parts = field.split('.');
  while (parts.length > 1) {
    if (typeof request !== 'object') {
      return;
    }
    const part = parts.shift() as string;
    request = request[part] as JSONObject;
  }
  const part = parts.shift() as string;
  if (typeof request !== 'object') {
    return;
  }
  delete request[part];
}

// Validates a single path segment matched by a single wildcard (*).
// Checks that the segment is not exactly '.' or '..' (directory traversal indicators).
function validateUriPathSegment(propertyName: string, value: string): void {
  if (value === '.' || value === '..') {
    throw new Error(`Invalid value ${value} for ${propertyName}`);
  }
}

// Validates a multi-segment path matched by a double wildcard (**).
// Splitting by slash, it checks that no individual segment is exactly '.' or '..'.
// This segment-by-segment check prevents directory traversal while allowing
// legitimate resource names containing dots (e.g., domain-scoped project IDs).
function validateUriPath(propertyName: string, value: string): void {
  if (value) {
    // Split by slash and check for exact segment matches of '.' or '..' rather
    // than using a simple string.includes('.') check. This avoids rejecting
    // valid domain-scoped resource segments (e.g. projects/example.com:project-id).
    const segments = value.split('/');
    if (segments.some(segment => segment === '.' || segment === '..')) {
      throw new Error(`Value for ${propertyName} must not contain segments that are exactly . or ..`);
    }
  }
}

export function buildQueryStringComponents(
  request: JSONObject,
  prefix = '',
): string[] {
  const resultList = [];
  for (const key in request) {
    const requestValue = request[key];
    if (Array.isArray(requestValue)) {
      for (const value of requestValue as JSONObject[]) {
        resultList.push(
          `${prefix}${encodeWithoutSlashes(key)}=${encodeWithoutSlashes(
            value.toString(),
          )}`,
        );
      }
    } else if (typeof requestValue === 'object' && requestValue !== null) {
      resultList.push(
        ...buildQueryStringComponents(requestValue as JSONObject, `${key}.`),
      );
    } else {
      resultList.push(
        `${prefix}${encodeWithoutSlashes(key)}=${encodeWithoutSlashes(
          requestValue === null || requestValue === undefined ? 'null' : requestValue.toString(),
        )}`,
      );
    }
  }
  return resultList;
}

/**
 * Percent-encodes a string according to RFC 3986, preserving only unreserved
 * characters (alpha-numeric, '-', '_', '.', and '~'). All other characters,
 * including slashes ('/'), are percent-encoded.
 *
 * This is necessary because encodeURIComponent natively encodes URL-unsafe
 * characters like ?, #, $, &, +, etc., but preserves !, ', (, ), and *.
 * To ensure strict compliance, we manually encode those preserved characters.
 *
 * @param {string} str - The input string to encode.
 * @returns {string} The percent-encoded string.
 */
export function encodeWithSlashes(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g, // Characters preserved by encodeURIComponent
    character => '%' + character.charCodeAt(0).toString(16).toUpperCase()
  );
}

/**
 * Percent-encodes a string according to RFC 3986, preserving unreserved
 * characters (alpha-numeric, '-', '_', '.', and '~') and slashes ('/'). All other
 * characters are percent-encoded.
 *
 * @param {string} str - The input string to encode.
 * @returns {string} The percent-encoded string with slashes preserved.
 */
export function encodeWithoutSlashes(str: string): string {
  return str.split('/').map(encodeWithSlashes).join('/');
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function applyPattern(
  pattern: string,
  fieldValue: string,
  propertyName = 'resource', // Used to provide precise error messages when path validation fails
): string | undefined {
  if (!pattern || pattern === '*') {
    validateUriPathSegment(propertyName, fieldValue);
    return encodeWithSlashes(fieldValue);
  }

  if (!pattern.includes('*') && pattern !== fieldValue) {
    return undefined;
  }

  // since we're converting the pattern to a regex, make necessary precautions:
  const regex = new RegExp(
    '^' +
      escapeRegExp(pattern)
        .replace(/\\\*\\\*/g, '(.+)')
        .replace(/\\\*/g, '([^/]+)') +
      '$',
  );

  const match = fieldValue.match(regex);
  if (!match) {
    return undefined;
  }

  // Identify the segments and wildcards in pattern to perform validation in order of appearance
  const wildcards: string[] = pattern.match(/\*\*|\*/g) || [];

  // Check the captured group values
  for (let i = 1; i < match.length; i++) {
    const groupVal = match[i];
    if (groupVal !== undefined && groupVal !== null) {
      const wildcardType = wildcards[i - 1];
      if (wildcardType === '*') {
        validateUriPathSegment(propertyName, groupVal);
      } else if (wildcardType === '**') {
        validateUriPath(propertyName, groupVal);
      }
    }
  }

  return encodeWithoutSlashes(fieldValue);
}

function fieldToCamelCase(field: string): string {
  const parts = field.split('.');
  return parts.map(part => snakeToCamelCase(part)).join('.');
}

interface MatchResult {
  matchedFields: string[];
  url: string;
}

export function match(
  request: JSONObject,
  pattern: string,
): MatchResult | undefined {
  let url = pattern;
  const matchedFields = [];
  for (;;) {
    const match = url.match(/^(.*)\{([^}=]+)(?:=([^}]*))?\}(.*)/);
    if (!match) {
      break;
    }
    const [, before, field, pattern, after] = match;
    const camelCasedField = fieldToCamelCase(field);
    matchedFields.push(fieldToCamelCase(camelCasedField));
    const fieldValue = getField(request, camelCasedField);
    if (fieldValue === undefined) {
      return undefined;
    }
    const appliedPattern = applyPattern(
      pattern,
      fieldValue === null ? 'null' : fieldValue!.toString(),
      camelCasedField,
    );
    if (appliedPattern === undefined) {
      return undefined;
    }
    url = before + appliedPattern + after;
  }

  return {matchedFields, url};
}

export function flattenObject(request: JSONObject): JSONObject {
  const result: JSONObject = {};
  for (const key in request) {
    if (request[key] === undefined) {
      continue;
    }

    if (Array.isArray(request[key])) {
      // According to the http.proto comments, a repeated field may only
      // contain primitive types, so no extra recursion here.
      result[key] = request[key];
      continue;
    }

    if (typeof request[key] === 'object' && request[key] !== null) {
      const nested = flattenObject(request[key] as JSONObject);
      for (const nestedKey in nested) {
        result[`${key}.${nestedKey}`] = nested[nestedKey];
      }
      continue;
    }

    result[key] = request[key];
  }

  return result;
}

export function isProto3OptionalField(field: Field) {
  return field && field.options && field.options![proto3OptionalName];
}

export function transcode(
  request: JSONObject,
  parsedOptions: ParsedOptionsType,
): TranscodedRequest | undefined {
  const httpRules = [];
  for (const option of parsedOptions) {
    if (!(httpOptionName in option)) {
      continue;
    }

    const httpRule = option[httpOptionName] as google.api.IHttpRule;
    httpRules.push(httpRule);

    if (httpRule?.additional_bindings) {
      const additionalBindings = Array.isArray(httpRule.additional_bindings)
        ? httpRule.additional_bindings
        : [httpRule.additional_bindings];
      httpRules.push(...additionalBindings);
    }
  }

  for (const httpRule of httpRules) {
    for (const httpMethod of supportedHttpMethods) {
      if (!(httpMethod in httpRule)) {
        continue;
      }
      const pathTemplate = httpRule[
        httpMethod as keyof google.api.IHttpRule
      ] as string;
      const matchResult = match(request, pathTemplate);
      if (matchResult === undefined) {
        continue;
      }
      const {url, matchedFields} = matchResult;

      let data: JSONObject | JSONValue | undefined =
        deepCopyWithoutMatchedFields(request, new Set(matchedFields));
      if (httpRule.body === '*') {
        return {httpMethod, url, queryString: '', data};
      }

      // one field possibly goes to request data, others go to query string
      const queryStringObject = data;
      if (httpRule.body) {
        data = getField(
          queryStringObject,
          fieldToCamelCase(httpRule.body),
          /*allowObjects:*/ true,
        );
        deleteField(queryStringObject, fieldToCamelCase(httpRule.body));
      } else {
        data = '';
      }
      const queryStringComponents =
        buildQueryStringComponents(queryStringObject);
      const queryString = queryStringComponents.join('&');
      if (
        !data ||
        (typeof data === 'object' && Object.keys(data).length === 0)
      ) {
        data = '';
      }
      return {httpMethod, url, queryString, data};
    }
  }
  return undefined;
}

// Override the protobuf json's the http rules.
export function overrideHttpRules(
  httpRules: Array<google.api.IHttpRule>,
  protoJson: protobuf.Root,
) {
  for (const rule of httpRules) {
    if (!rule.selector) {
      continue;
    }
    const rpc = protoJson.lookup(rule.selector) as protobuf.Method;
    // Not support override on non-exist RPC or a RPC without an annotation.
    // We could reconsider if we have the use case later.
    if (!rpc || !rpc.parsedOptions) {
      continue;
    }
    for (const item of rpc.parsedOptions) {
      if (!(httpOptionName in item)) {
        continue;
      }
      const httpOptions = item[httpOptionName];
      for (const httpMethod in httpOptions) {
        if (httpMethod in rule) {
          if (httpMethod === 'additional_bindings') {
            continue;
          }
          httpOptions[httpMethod] =
            rule[httpMethod as keyof google.api.IHttpRule];
        }
        if (rule.additional_bindings) {
          httpOptions['additional_bindings'] = !httpOptions[
            'additional_bindings'
          ]
            ? []
            : Array.isArray(httpOptions['additional_bindings'])
              ? httpOptions['additional_bindings']
              : [httpOptions['additional_bindings']];
          // Make the additional_binding to be an array if it is not.
          httpOptions['additional_bindings'].push(...rule.additional_bindings);
        }
      }
    }
  }
}
