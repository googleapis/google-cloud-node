import {AdhocDebugLogger} from './logging-utils';

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
 * When the user receives a log function (below), this will be the basic function
 * call interface for it.
 */
export interface AdhocDebugLogCallable {
  (fields: LogFields, ...args: unknown[]): void;
}

/**
 * Adds typing info for the EventEmitter we're adding to the returned function.
 */
export interface AdhocDebugLogFunction extends AdhocDebugLogCallable {
  instance: AdhocDebugLogger;
  on(
    event: 'log',
    listener: (fields: LogFields, args: unknown[]) => void,
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
 */
export interface DebugLogBackend {
  /**
   * Outputs a log to this backend.
   *
   * @param namespace The "system" that will be used for filtering. This may also
   * include a "subsystem" in the form "system:subsystem".
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
