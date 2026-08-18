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
 * Strictly percent-encodes a string according to RFC 3986.
 * This is necessary because encodeURIComponent natively encodes URL-unsafe
 * characters like ?, #, $, &, +, etc., but preserves !, ', (, ), and *.
 * To ensure strict compliance, we manually encode those preserved characters.
 *
 * @param str The input string to encode
 * @returns The strictly percent-encoded string
 */
export function strictEncodeURIComponent(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    character => '%' + character.charCodeAt(0).toString(16).toUpperCase(),
  );
}

/**
 * Percent-encodes a string according to RFC 3986, preserving only unreserved
 * characters (alpha-numeric, '-', '_', '.', and '~'). All other characters,
 * including slashes ('/'), are percent-encoded.
 *
 * @param str The input string to encode
 * @returns The percent-encoded string
 */
export function encodeWithSlashes(str: string): string {
  return [...str]
    .map(c => (c.match(/[-_.~0-9a-zA-Z]/) ? c : strictEncodeURIComponent(c)))
    .join('');
}

/**
 * Percent-encodes a string according to RFC 3986, preserving unreserved
 * characters (alpha-numeric, '-', '_', '.', and '~') and slashes ('/'). All other
 * characters are percent-encoded.
 *
 * @param str The input string to encode
 * @returns The percent-encoded string with slashes preserved
 */
export function encodeWithoutSlashes(str: string): string {
  return [...str]
    .map(c => (c.match(/[-_.~0-9a-zA-Z/]/) ? c : strictEncodeURIComponent(c)))
    .join('');
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
 * Validates path parameters against traversal attacks ('.' and '..') and encodes
 * multi-segment parameters so that reserved characters (query params, fragments, etc.)
 * cannot be injected into the path.
 *
 * @param urlTemplates List of URL templates associated with the request (e.g. url, mediaUrl)
 * @param params Request parameters dictionary (modified in-place)
 * @param pathParams List of path parameter names
 */
export function validateAndEncodePathParams(
  urlTemplates: (string | undefined)[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>,
  pathParams?: string[],
): void {
  if (!params || typeof params !== 'object') {
    return;
  }
  const multiSegmentParams = new Set<string>();
  const singleSegmentParams = new Set<string>();

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

  if (pathParams && Array.isArray(pathParams)) {
    for (const p of pathParams) {
      const normalizedP = p.replace(/_$/, '');
      if (!multiSegmentParams.has(p) && !multiSegmentParams.has(normalizedP)) {
        singleSegmentParams.add(p);
        if (normalizedP !== p) {
          singleSegmentParams.add(normalizedP);
        }
      }
    }
  }

  // Validate and encode multi-segment parameters
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

  // Validate single-segment parameters
  for (const param of singleSegmentParams) {
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
