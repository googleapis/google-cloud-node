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

import {
  decodeValue,
  getSpannerTypeCodeFromOid,
  registerCustomParserHook,
} from './codec.js';

export type TypeParser = (value: any) => any;

/**
 * TypeParserRegistry implements standard node-postgres (pg.types) type parser
 * registration and retrieval by PostgreSQL Object Identifier (OID), unifying
 * default decoding logic with decodeValue.
 */
class TypeParserRegistry {
  private customParsers = new Map<string, TypeParser>();

  /**
   * Returns whether a custom type parser has been registered for this OID.
   */
  hasCustomParser(oid: number | string): boolean {
    return this.customParsers.has(`${oid}`);
  }

  /**
   * Retrieves the active type parser for a given PostgreSQL OID and optional format.
   * If no custom parser is registered, reuses core Spanner decodeValue logic.
   */
  getTypeParser(oid: number | string, format?: string): TypeParser {
    const key = `${oid}`;
    const custom = this.customParsers.get(key);
    if (custom) {
      return custom;
    }

    const oidNum = typeof oid === 'number' ? oid : parseInt(oid, 10);
    const typeCode = getSpannerTypeCodeFromOid(oidNum);

    return (val: any) => decodeValue(val, {code: typeCode}, false);
  }

  /**
   * Registers a custom type parser function for a given PostgreSQL OID.
   * Supports both setTypeParser(oid, parserFn) and setTypeParser(oid, format, parserFn).
   */
  setTypeParser(
    oid: number | string,
    formatOrParser: string | TypeParser,
    parseFn?: TypeParser
  ): void {
    let fn: TypeParser | undefined;
    if (typeof formatOrParser === 'function') {
      fn = formatOrParser;
    } else if (typeof parseFn === 'function') {
      fn = parseFn;
    }

    if (fn) {
      this.customParsers.set(`${oid}`, fn);
    }
  }

  /**
   * Resets all custom type parsers to defaults.
   */
  reset(): void {
    this.customParsers.clear();
  }
}

const registry = new TypeParserRegistry();

registerCustomParserHook((oid: number) => {
  return registry.hasCustomParser(oid) ? registry.getTypeParser(oid) : null;
});

export function hasCustomParser(oid: number | string): boolean {
  return registry.hasCustomParser(oid);
}

export const types = {
  getTypeParser: (oid: number | string, format?: string) =>
    registry.getTypeParser(oid, format),
  setTypeParser: (
    oid: number | string,
    formatOrParser: string | TypeParser,
    parseFn?: TypeParser
  ) => registry.setTypeParser(oid, formatOrParser, parseFn),
  reset: () => registry.reset(),
};
