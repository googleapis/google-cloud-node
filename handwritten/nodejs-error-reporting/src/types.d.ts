
declare module '@google-cloud/common' {
  import * as request from 'request';

  type LogFunction = (message: any, ...args: any[]) => void;

  export interface Logger {
    error: LogFunction;
    warn: LogFunction;
    info: LogFunction;
    debug: LogFunction;
    silly: LogFunction;
  }

  export interface LoggerOptions {
    level?: string;
    levels?: string[];
    tag?: string;
  }

  export const logger: {
    (options?: LoggerOptions | string): Logger;
    LEVELS: string[];
  };

  export class Service {
    constructor(config: ServiceConfig, options: ServiceAuthenticationConfig);
    request(options: request.Options,
      cb: (
        err: Error | null,
        body: any,
        response: request.RequestResponse
      ) => void): void;
  }

  export interface ServiceConfig {
    packageJson?: any;
    projectIdRequired?: boolean;
    baseUrl?: string;
    scopes?: string[];
    // TODO: `auth-client.ts` assumes that `projectId` and `customEndpoint`
    //       are properties of `ServiceConfig`.  Determine if it is.
    projectId?: string;
    customEndpoint?: boolean;
  }

  export interface ServiceAuthenticationConfig {
    projectId?: string;
    keyFilename?: string;
    email?: string;
    credentials?: {
      client_email?: string;
      private_key?: string;
    };
  }
}
