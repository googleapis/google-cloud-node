// Copyright 2021-2024 Google LLC
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

import {EventEmitter} from 'events';
import * as process from 'process';
import * as util from 'util';
import {Colours} from './colours';

// Some functions (as noted) are based on the Node standard library, from
// the following file:
//
// https://github.com/nodejs/node/blob/main/lib/internal/util/debuglog.js

/**
 * This module defines an ad-hoc debug logger for Google Cloud Platform
 * client libraries in Node. An ad-hoc debug logger is a tool which lets
 * users use an external, unified interface (in this case, environment
 * variables) to determine what logging they want to see at runtime. This
 * isn't necessarily fed into the console, but is meant to be under the
 * control of the user. The kind of logging that will be produced by this
 * is more like "call retry happened", not "events you'd want to record
 * in Cloud Logger".
 *
 * More for Googlers implementing libraries with it:
 * go/cloud-client-logging-design
 */

/**
 * Possible log levels. These are a subset of Cloud Observability levels.
 * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#LogSeverity
 */
export enum LogSeverity {
  DEFAULT = 'DEFAULT',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

/**
 * A set of suggested log metadata fields.
 */
export interface LogFields {
  /**
   * Log level - undefined/null === DEFAULT.
   */
  severity?: LogSeverity;

  /**
   * If this log is associated with an OpenTelemetry trace, you can put the
   * trace ID here to pass on that association.
   */
  telemetryTraceId?: string;

  /**
   * If this log is associated with an OpenTelemetry trace, you can put the
   * span ID here to pass on that association.
   */
  telemetrySpanId?: string;

  /**
   * This is a catch-all for any other items you might want to go into
   * structured logs. Library implementers, please see the spec docs above
   * for the items envisioned to go here.
   */
  other?: unknown;
}

/**
 * Adds typings for event sinks.
 */
export declare interface AdhocDebugLogger {
  on(
    event: 'log',
    listener: (fields: LogFields, args: unknown[]) => void
  ): this;
  on(event: string, listener: Function): this;
}

/**
 * Our logger instance. This actually contains the meat of dealing
 * with log lines, including EventEmitter. This contains the function
 * that will be passed back to users of the package.
 */
export class AdhocDebugLogger extends EventEmitter {
  // Our namespace (system/subsystem/etc)
  namespace: string;

  // The function we'll call with new log lines.
  // Should be built in Node util stuff, or the "debug" package, or whatever.
  upstream: AdhocDebugLogCallable;

  // Self-referential function wrapper that calls invoke() on us.
  func: AdhocDebugLogFunction;

  /**
   * @param upstream The backend will pass a function that will be
   *   called whenever our logger function is invoked.
   */
  constructor(namespace: string, upstream: AdhocDebugLogCallable) {
    super();

    this.namespace = namespace;
    this.upstream = upstream;
    this.func = Object.assign(this.invoke.bind(this), {
      // Also add an instance pointer back to us.
      instance: this,

      // And pull over the EventEmitter functionality.
      on: (event: string, listener: (args: unknown[]) => void) =>
        this.on(event, listener),
    }) as unknown as AdhocDebugLogFunction;

    // Convenience methods for log levels.
    this.func.debug = (...args) =>
      this.invokeSeverity(LogSeverity.DEBUG, ...args);
    this.func.info = (...args) =>
      this.invokeSeverity(LogSeverity.INFO, ...args);
    this.func.warn = (...args) =>
      this.invokeSeverity(LogSeverity.WARNING, ...args);
    this.func.error = (...args) =>
      this.invokeSeverity(LogSeverity.ERROR, ...args);
    this.func.sublog = (namespace: string) => log(namespace, this.func);
  }

  invoke(fields: LogFields, ...args: unknown[]): void {
    // Push out any upstream logger first.
    if (this.upstream) {
      try {
        this.upstream(fields, ...args);
      } catch (e) {
        // Swallow exceptions to avoid interfering with other logging.
      }
    }

    // Emit sink events.
    try {
      this.emit('log', fields, args);
    } catch (e) {
      // Swallow exceptions to avoid interfering with other logging.
    }
  }

  invokeSeverity(severity: LogSeverity, ...args: unknown[]): void {
    this.invoke({severity}, ...args);
  }
}

/**
 * This can be used in place of a real logger while waiting for Promises or disabling logging.
 */
export const placeholder = new AdhocDebugLogger('', () => {}).func;

/**
 * When the user receives a log function (below), this will be the basic function
 * call interface for it.
 */
export interface AdhocDebugLogCallable {
  (fields: LogFields, ...args: unknown[]): void;
}

/**
 * Adds typing info for the EventEmitter we're adding to the returned function.
 *
 * Note that this interface may change at any time, as we're reserving the
 * right to add new backends at the logger level.
 *
 * @private
 * @internal
 */
export interface AdhocDebugLogFunction extends AdhocDebugLogCallable {
  instance: AdhocDebugLogger;
  on(
    event: 'log',
    listener: (fields: LogFields, args: unknown[]) => void
  ): this;

  debug(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
  sublog(namespace: string): AdhocDebugLogFunction;
}

/**
 * One of these can be passed to support a third-party backend, like "debug".
 * We're splitting this out because ESM can complicate optional module loading.
 *
 * Note that this interface may change at any time, as we're reserving the
 * right to add new backends at the logger level.
 *
 * @private
 * @internal
 */
export interface DebugLogBackend {
  /**
   * Outputs a log to this backend.
   *
   * @param namespace The "system" that will be used for filtering. This may also
   *   include a "subsystem" in the form "system:subsystem".
   * @param fields Logging fields to be included as metadata.
   * @param args Any parameters to passed to a utils.format() type formatter.
   */
  log(namespace: string, fields: LogFields, ...args: unknown[]): void;

  /**
   * Passes in the system/subsystem filters from the global environment variables.
   * This lets the backend merge with any native ones.
   *
   * @param filters A list of wildcards matching systems or system:subsystem pairs.
   */
  setFilters(filters: string[]): void;
}

/**
 * The base class for debug logging backends. It's possible to use this, but the
 * same non-guarantees above still apply (unstable interface, etc).
 *
 * @private
 * @internal
 */
export abstract class DebugLogBackendBase implements DebugLogBackend {
  cached = new Map<string, AdhocDebugLogCallable>();
  filters: string[] = [];
  filtersSet = false;

  constructor() {
    // Look for the Node config variable for what systems to enable. We'll store
    // these for the log method below, which will call setFilters() once.
    let nodeFlag = process.env[env.nodeEnables] ?? '*';
    if (nodeFlag === 'all') {
      nodeFlag = '*';
    }
    this.filters = nodeFlag.split(',');
  }

  /**
   * Creates a callback function that we can call to send log lines out.
   *
   * @param namespace The system/subsystem namespace.
   */
  abstract makeLogger(namespace: string): AdhocDebugLogCallable;

  /**
   * Provides a callback for the subclass to hook if it needs to do something
   * specific with `this.filters`.
   */
  abstract setFilters(): void;

  log(namespace: string, fields: LogFields, ...args: unknown[]): void {
    try {
      if (!this.filtersSet) {
        this.setFilters();
        this.filtersSet = true;
      }

      let logger = this.cached.get(namespace);
      if (!logger) {
        logger = this.makeLogger(namespace);
        this.cached.set(namespace, logger);
      }
      logger(fields, ...args);
    } catch (e) {
      // Silently ignore all errors; we don't want them to interfere with
      // the user's running app.
      // e;
      console.error(e);
    }
  }
}

// The basic backend. This one definitely works, but it's less feature-filled.
//
// Rather than using util.debuglog, this implements the same basic logic directly.
// The reason for this decision is that debuglog checks the value of the
// NODE_DEBUG environment variable before any user code runs; we therefore
// can't pipe our own enables into it (and util.debuglog will never print unless
// the user duplicates it into NODE_DEBUG, which isn't reasonable).
//
class NodeBackend extends DebugLogBackendBase {
  // Default to allowing all systems, since we gate earlier based on whether the
  // variable is empty.
  enabledRegexp = /.*/g;

  isEnabled(namespace: string): boolean {
    return this.enabledRegexp.test(namespace);
  }

  makeLogger(namespace: string): AdhocDebugLogCallable {
    if (!this.enabledRegexp.test(namespace)) {
      return () => {};
    }

    return (fields: LogFields, ...args: unknown[]) => {
      // TODO: `fields` needs to be turned into a string here, one way or another.
      const nscolour = `${Colours.green}${namespace}${Colours.reset}`;
      const pid = `${Colours.yellow}${process.pid}${Colours.reset}`;
      let level: string;
      switch (fields.severity) {
        case LogSeverity.ERROR:
          level = `${Colours.red}${fields.severity}${Colours.reset}`;
          break;
        case LogSeverity.INFO:
          level = `${Colours.magenta}${fields.severity}${Colours.reset}`;
          break;
        case LogSeverity.WARNING:
          level = `${Colours.yellow}${fields.severity}${Colours.reset}`;
          break;
        default:
          level = fields.severity ?? LogSeverity.DEFAULT;
          break;
      }
      const msg = util.formatWithOptions({colors: Colours.enabled}, ...args);

      const filteredFields: LogFields = Object.assign({}, fields);
      delete filteredFields.severity;
      const fieldsJson = Object.getOwnPropertyNames(filteredFields).length
        ? JSON.stringify(filteredFields)
        : '';
      const fieldsColour = fieldsJson
        ? `${Colours.grey}${fieldsJson}${Colours.reset}`
        : '';

      console.error(
        '%s [%s|%s] %s%s',
        pid,
        nscolour,
        level,
        msg,
        fieldsJson ? ` ${fieldsColour}` : ''
      );
    };
  }

  // Regexp patterns below are from here:
  // https://github.com/nodejs/node/blob/c0aebed4b3395bd65d54b18d1fd00f071002ac20/lib/internal/util/debuglog.js#L36
  setFilters(): void {
    const totalFilters = this.filters.join(',');
    const regexp = totalFilters
      .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
      .replace(/\*/g, '.*')
      .replace(/,/g, '$|^');
    this.enabledRegexp = new RegExp(`^${regexp}$`, 'i');
  }
}

/**
 * @returns A backend based on Node util.debuglog; this is the default.
 */
export function getNodeBackend(): DebugLogBackend {
  return new NodeBackend();
}

// Based on the npm "debug" package. Adds colour, time offsets, and other
// useful things, but requires the user to import another package.
//
// Note: using the proper types here introduces an extra dependency
// we don't want, so for the moment, they'll be notational only.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebugPackage = any; // debug.Debug
class DebugBackend extends DebugLogBackendBase {
  debugPkg: DebugPackage;

  constructor(pkg: DebugPackage) {
    super();
    this.debugPkg = pkg;
  }

  makeLogger(namespace: string): AdhocDebugLogCallable {
    const debugLogger = this.debugPkg(namespace);
    return (fields: LogFields, ...args: unknown[]) => {
      // TODO: `fields` needs to be turned into a string here.
      debugLogger(args[0] as string, ...args.slice(1));
    };
  }

  setFilters(): void {
    const existingFilters = process.env['NODE_DEBUG'] ?? '';
    process.env['NODE_DEBUG'] = `${existingFilters}${
      existingFilters ? ',' : ''
    }${this.filters.join(',')}`;
  }
}

/**
 * Creates a "debug" package backend. The user must call require('debug') and pass
 * the resulting object to this function.
 *
 * ```
 *  setBackend(getDebugBackend(require('debug')))
 * ```
 *
 * https://www.npmjs.com/package/debug
 *
 * Note: Google does not explicitly endorse or recommend this package; it's just
 * being provided as an option.
 *
 * @returns A backend based on the npm "debug" package.
 */
export function getDebugBackend(debugPkg: DebugPackage): DebugLogBackend {
  return new DebugBackend(debugPkg);
}

/**
 * This pretty much works like the Node logger, but it outputs structured
 * logging JSON matching Google Cloud's ingestion specs. Rather than handling
 * its own output, it wraps another backend. The passed backend must be a subclass
 * of `DebugLogBackendBase` (any of the backends exposed by this package will work).
 */
class StructuredBackend extends DebugLogBackendBase {
  upstream: DebugLogBackendBase;

  constructor(upstream?: DebugLogBackend) {
    super();
    this.upstream = (upstream as DebugLogBackendBase) ?? undefined;
  }

  makeLogger(namespace: string): AdhocDebugLogCallable {
    const debugLogger = this.upstream?.makeLogger(namespace);
    return (fields: LogFields, ...args: unknown[]) => {
      const severity = fields.severity ?? LogSeverity.INFO;
      const json = Object.assign(
        {
          severity,
          message: util.format(...args),
        },
        fields
      );

      const jsonString = JSON.stringify(json);
      if (debugLogger) {
        debugLogger(fields, jsonString);
      } else {
        console.log('%s', jsonString);
      }
    };
  }

  setFilters(): void {
    this.upstream?.setFilters();
  }
}

/**
 * Creates a "structured logging" backend. This pretty much works like the
 * Node logger, but it outputs structured logging JSON matching Google
 * Cloud's ingestion specs instead of plain text.
 *
 * ```
 *  setBackend(getStructuredBackend())
 * ```
 *
 * @param upstream If you want to use something besides the Node backend to
 *   write the actual log lines into, pass that here.
 * @returns A backend based on Google Cloud structured logging.
 */
export function getStructuredBackend(
  upstream?: DebugLogBackend
): DebugLogBackend {
  return new StructuredBackend(upstream);
}

/**
 * The environment variables that we standardized on, for all ad-hoc logging.
 */
export const env = {
  /**
   * Filter wildcards specific to the Node syntax, and similar to the built-in
   * utils.debuglog() environment variable. If missing, disables logging.
   */
  nodeEnables: 'GOOGLE_SDK_NODE_LOGGING',
};

// Keep a copy of all namespaced loggers so users can reliably .on() them.
// Note that these cached functions will need to deal with changes in the backend.
const loggerCache = new Map<string, AdhocDebugLogger>();

// Our current global backend. This might be:
let cachedBackend: DebugLogBackend | null | undefined = undefined;

/**
 * Set the backend to use for our log output.
 * - A backend object
 * - null to disable logging
 * - undefined for "nothing yet", defaults to the Node backend
 *
 * @param backend Results from one of the get*Backend() functions.
 */
export function setBackend(backend: DebugLogBackend | null | undefined) {
  cachedBackend = backend;
  loggerCache.clear();
}

/**
 * Creates a logging function. Multiple calls to this with the same namespace
 * will produce the same logger, with the same event emitter hooks.
 *
 * Namespaces can be a simple string ("system" name), or a qualified string
 * (system:subsystem), which can be used for filtering, or for "system:*".
 *
 * @param namespace The namespace, a descriptive text string.
 * @returns A function you can call that works similar to console.log().
 */
export function log(
  namespace: string,
  parent?: AdhocDebugLogFunction
): AdhocDebugLogFunction {
  // If the enable environment variable isn't set, do nothing. The user
  // can still choose to set a backend of their choice using the manual
  // `setBackend()`.
  if (!cachedBackend) {
    const enablesFlag = process.env[env.nodeEnables];
    if (!enablesFlag) {
      return placeholder;
    }
  }

  // This might happen mostly if the typings are dropped in a user's code,
  // or if they're calling from JavaScript.
  if (!namespace) {
    return placeholder;
  }

  // Handle sub-loggers.
  if (parent) {
    namespace = `${parent.instance.namespace}:${namespace}`;
  }

  // Reuse loggers so things like event sinks are persistent.
  const existing = loggerCache.get(namespace);
  if (existing) {
    return existing.func;
  }

  // Do we have a backend yet?
  if (cachedBackend === null) {
    // Explicitly disabled.
    return placeholder;
  } else if (cachedBackend === undefined) {
    // One hasn't been made yet, so default to Node.
    cachedBackend = getNodeBackend();
  }

  // The logger is further wrapped so we can handle the backend changing out.
  const logger: AdhocDebugLogger = (() => {
    let previousBackend: DebugLogBackend | undefined = undefined;
    const newLogger = new AdhocDebugLogger(
      namespace,
      (fields: LogFields, ...args: unknown[]) => {
        if (previousBackend !== cachedBackend) {
          // Did the user pass a custom backend?
          if (cachedBackend === null) {
            // Explicitly disabled.
            return;
          } else if (cachedBackend === undefined) {
            // One hasn't been made yet, so default to Node.
            cachedBackend = getNodeBackend();
          }

          previousBackend = cachedBackend;
        }

        cachedBackend?.log(namespace, fields, ...args);
      }
    );
    return newLogger;
  })();

  loggerCache.set(namespace, logger);
  return logger.func;
}
