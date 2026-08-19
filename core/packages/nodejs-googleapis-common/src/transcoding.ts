// Copyright 2026 Google LLC
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

/**
 * Validates a single path segment matched by a single wildcard (*) or {param}.
 * Checks that the segment is not exactly '.' or '..' (directory traversal indicators).
 *
 * @param propertyName Name of the parameter being validated
 * @param value Value of the path segment
 */
function validateUriPathSegment(
  propertyName: string,
  value: string,
): void {
  if (value === '.' || value === '..') {
    throw new Error(`Invalid value ${value} for ${propertyName}`);
  }
}

/**
 * Validates a multi-segment path matched by a double wildcard (**) or {+param}.
 * Splitting by slash, it checks that no individual segment is exactly '.' or '..'.
 * This segment-by-segment check prevents directory traversal while allowing
 * legitimate resource names containing dots (e.g., domain-scoped project IDs).
 *
 * @param propertyName Name of the parameter being validated
 * @param value Value of the multi-segment path
 */
function validateUriPath(
  propertyName: string,
  value: string,
): void {
  if (value) {
    const segments = value.split('/');
    if (segments.some(segment => segment === '.' || segment === '..')) {
      throw new Error(
        `Value for ${propertyName} must not contain segments that are exactly . or ..`,
      );
    }
  }
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
 * @param str The input string to encode
 * @returns The percent-encoded string
 */
function encodeWithSlashes(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g, // Characters preserved by encodeURIComponent
    character => '%' + character.charCodeAt(0).toString(16).toUpperCase(),
  );
}

/**
 * Percent-encodes a string according to RFC 3986, preserving unreserved
 * characters (alpha-numeric, '-', '_', '.', and '~') and slashes ('/'). All other
 * characters are percent-encoded.
 *
 * @param str The input string to encode
 * @returns The percent-encoded string with slashes preserved
 */
function encodeWithoutSlashes(str: string): string {
  return str.split('/').map(encodeWithSlashes).join('/');
}

/**
 * Extracts template parameters and their corresponding wildcard types ('*' or '**').
 *
 * @param urlTemplate The RFC 6570 URI template string
 */
function extractTemplateParams(urlTemplate: string): Array<{
  param: string;
  wildcard: '*' | '**';
}> {
  const paramMap = new Map<string, '*' | '**'>();
  const matches = urlTemplate.matchAll(/\{([^}]+)\}/g);

  for (const match of matches) {
    const expression = match[1];
    const wildcard: '*' | '**' = expression.startsWith('+') ? '**' : '*';
    const firstChar = expression.charAt(0);
    const rawExpr = ['+', '#', '.', '/', ';', '?', '&'].includes(firstChar)
      ? expression.slice(1)
      : expression;
    const vars = rawExpr.split(',');
    for (const v of vars) {
      const paramName = v.replace(/^([^:*]+).*/, '$1').trim();
      if (paramName) {
        if (!paramMap.has(paramName) || wildcard === '**') {
          paramMap.set(paramName, wildcard);
        }
      }
    }
  }

  return Array.from(paramMap.entries()).map(([param, wildcard]) => ({
    param,
    wildcard,
  }));
}

/**
 * Modifies the pathParams array in-place to normalize / un-alias parameters
 * that have trailing underscores (e.g. 'resource_' -> 'resource') due to
 * conflicts with JavaScript reserved words.
 *
 * @param pathParams List of path parameter names to normalize in-place
 */
export function normalizePathParams(pathParams?: string[]): void {
  if (!pathParams || !Array.isArray(pathParams)) {
    return;
  }
  for (let i = 0; i < pathParams.length; i++) {
    if (pathParams[i].slice(-1) === '_') {
      pathParams[i] = pathParams[i].slice(0, -1);
    }
  }
}

/**
 * Validates path parameters against traversal attacks ('.' and '..') and encodes
 * multi-segment parameters in params so that reserved characters (query params, fragments, etc.)
 * cannot be injected into the path. Modifies params in-place.
 *
 * @param urlTemplate URL template associated with the request (e.g. url, mediaUrl)
 * @param params Request parameters dictionary (modified in-place)
 */
export function validateAndEncodeParams(
  urlTemplate: string | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>,
): void {
  // Early return if params is undefined, null, or not an object, or if urlTemplate is missing
  if (!params || typeof params !== 'object' || !urlTemplate) {
    return;
  }

  // Identify the parameters and wildcards in the URL template
  const templateParams = extractTemplateParams(urlTemplate);

  for (const {param, wildcard} of templateParams) {
    const val = params[param];
    if (val === undefined || val === null) {
      continue;
    }
    const isArray = Array.isArray(val);
    const items: unknown[] = isArray ? val : [val];
    const match = [null, ...items.map(String)];
    const wildcards = items.map(() => wildcard);
    const propertyName = param;

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

    if (wildcard === '**') {
      params[param] = isArray
        ? val.map(item => encodeWithoutSlashes(String(item)))
        : encodeWithoutSlashes(String(val));
    }
  }
}
