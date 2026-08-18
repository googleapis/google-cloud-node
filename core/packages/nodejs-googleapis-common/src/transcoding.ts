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
export function validateSingleSegment(
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
export function validateMultiSegment(
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
 * Aliases for compatibility with GAX naming conventions.
 */
export const validateUriPathSegment = validateSingleSegment;
export const validateUriPath = validateMultiSegment;

/**
 * Percent-encodes a string, preserving only unreserved characters
 * (alpha-numeric, '-', '_', '.', and '~'). All other characters,
 * including slashes ('/'), are percent-encoded.
 *
 * @param str The input string to encode
 * @returns The percent-encoded string
 */
export function encodeWithSlashes(str: string): string {
  return encodeURIComponent(str);
}

/**
 * Percent-encodes a string, preserving unreserved characters and slashes ('/').
 * All other characters are percent-encoded.
 *
 * @param str The input string to encode
 * @returns The percent-encoded string with slashes preserved
 */
export function encodeWithoutSlashes(str: string): string {
  return str.split('/').map(encodeURIComponent).join('/');
}

/**
 * Extracts template parameter names and classifies them as multi-segment or single-segment.
 *
 * @param urlTemplate The RFC 6570 URI template string
 */
export function extractTemplateParams(urlTemplate: string): {
  multiSegmentParams: Set<string>;
  singleSegmentParams: Set<string>;
} {
  const multiSegmentParams = new Set<string>();
  const singleSegmentParams = new Set<string>();
  const regex = /\{([^}]+)\}/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(urlTemplate)) !== null) {
    const expression = match[1];
    if (expression.startsWith('+')) {
      const vars = expression.slice(1).split(',');
      for (const v of vars) {
        const paramName = v.replace(/^([^:*]+).*/, '$1').trim();
        if (paramName) {
          multiSegmentParams.add(paramName);
        }
      }
    } else {
      const firstChar = expression.charAt(0);
      const rawExpr = ['#', '.', '/', ';', '?', '&'].includes(firstChar)
        ? expression.slice(1)
        : expression;
      const vars = rawExpr.split(',');
      for (const v of vars) {
        const paramName = v.replace(/^([^:*]+).*/, '$1').trim();
        if (paramName) {
          singleSegmentParams.add(paramName);
        }
      }
    }
  }

  return {multiSegmentParams, singleSegmentParams};
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
 * @param urlTemplates List of URL templates associated with the request (e.g. url, mediaUrl)
 * @param params Request parameters dictionary (modified in-place)
 */
export function validateAndEncodeParams(
  urlTemplates: (string | undefined)[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>,
): void {
  // Early return if params is undefined, null, or not an object
  if (!params || typeof params !== 'object') {
    return;
  }

  // Track which parameters are multi-segment ({+param}) vs single-segment ({param}).
  // - Multi-segment parameters allow slashes ('/') for hierarchical resource paths,
  //   requiring segment-by-segment traversal checks and strict percent-encoding with slashes preserved.
  // - Single-segment parameters disallow slashes and are automatically percent-encoded by url-template,
  //   requiring only direct '.' and '..' traversal validation.
  const multiSegmentParams = new Set<string>();
  const singleSegmentParams = new Set<string>();

  // 1. Scan provided URL templates (options.url and parameters.mediaUrl) to extract parameter names
  for (const tmpl of urlTemplates) {
    if (tmpl) {
      const extracted = extractTemplateParams(tmpl);
      for (const p of extracted.multiSegmentParams) {
        multiSegmentParams.add(p);
      }
      for (const p of extracted.singleSegmentParams) {
        singleSegmentParams.add(p);
      }
    }
  }

  // 2. Process multi-segment parameters ({+param}):
  // - Validate that no individual path segment is '.' or '..' (rejecting path traversal while
  //   permitting valid domain-scoped names like 'projects/example.com:my-project').
  // - Pre-encode with encodeWithoutSlashes so that reserved characters ('?', '#', '$', '&', '=')
  //   are strictly percent-encoded according to RFC 3986 before url-template reserved expansion runs,
  //   preventing query parameter and fragment injection while keeping slashes ('/') intact.
  for (const param of multiSegmentParams) {
    const val = params[param];
    if (val !== undefined && val !== null) {
      if (Array.isArray(val)) {
        for (const item of val) {
          validateMultiSegment(param, String(item));
        }
        params[param] = val.map(item => encodeWithoutSlashes(String(item)));
      } else {
        validateMultiSegment(param, String(val));
        params[param] = encodeWithoutSlashes(String(val));
      }
    }
  }

  // 3. Process single-segment parameters ({param}):
  // - Validate that the segment is not exactly '.' or '..' to block path traversal.
  // - Note: We do NOT pre-encode single-segment values here because url-template standard expansion
  //   ({param}) automatically applies strict percent-encoding to all reserved characters;
  //   pre-encoding would lead to double percent-encoding (%25...).
  for (const param of singleSegmentParams) {
    // Skip if already processed under multiSegmentParams
    if (multiSegmentParams.has(param)) {
      continue;
    }
    const val = params[param];
    if (val !== undefined && val !== null) {
      if (Array.isArray(val)) {
        for (const item of val) {
          validateSingleSegment(param, String(item));
        }
      } else {
        validateSingleSegment(param, String(val));
      }
    }
  }
}
