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
 * @example
 * ```ts
 * // Input:
 * 'https://example.com/v1/{+parent}/databases/{databaseId}/documents/{+documentPath}'
 *
 * // Output:
 * [
 *   { param: 'parent', wildcard: '**' },
 *   { param: 'databaseId', wildcard: '*' },
 *   { param: 'documentPath', wildcard: '**' }
 * ]
 * ```
 *
 * @param urlTemplate The RFC 6570 URI template string
 * @returns Array of parameter names and their associated wildcard pattern
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
    const parameterValue = params[param];
    if (parameterValue === undefined || parameterValue === null) {
      continue;
    }
    if (wildcard === '**') {
      // This block applies the core logic of google-gax's applyPattern method,
      // but is greatly simplified because the wildcard type ('**') is already known.
      // As a result, we do not need to convert arbitrary patterns into regular
      // expressions, match against field values, extract capture groups, or
      // scan and dispatch validation for variable wildcard types. We can directly
      // validate against traversal segments and encode with slashes preserved.
      const encodeParam = (val: string) => {
        validateUriPath(param, val);
        return encodeWithoutSlashes(val);
      };
      params[param] = Array.isArray(parameterValue)
        ? parameterValue.map(item => encodeParam(String(item)))
        : encodeParam(String(parameterValue));
    } else {
      // For single-segment parameters (*), only validation against path traversal (. and ..)
      // is needed here. Character percent-encoding is handled automatically by url-template later
      // when urlTemplate.parse(url).expand(params) is called in createAPIRequestAsync.
      if (Array.isArray(parameterValue)) {
        parameterValue.forEach(item =>
          validateUriPathSegment(param, String(item)),
        );
      } else {
        validateUriPathSegment(param, String(parameterValue));
      }
    }
  }
}
