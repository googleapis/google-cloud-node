/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import yargs from 'yargs';
import * as path from 'path';
import * as fs from 'fs';
import {CloudExecutorImpl} from './cloud-executor-impl';
import {CloudUtil} from './cloud-util';
import {HealthImplementation} from 'grpc-health-check';
import {ReflectionService} from '@grpc/reflection';

const PROTO_PATH = path.join(
  __dirname,
  '../../protos/google/spanner/executor/v1/cloud_executor.proto',
);

const OPTION_SPANNER_PORT = 'spanner_port';
const OPTION_PROXY_PORT = 'proxy_port';
const OPTION_CERTIFICATE = 'cert';
const OPTION_SERVICE_KEY_FILE = 'service_key_file';
const OPTION_USE_PLAIN_TEXT_CHANNEL = 'use_plain_text_channel';
const OPTION_ENABLE_GRPC_FAULT_INJECTOR = 'enable_grpc_fault_injector';

/**
 * Acts as a proxy server that forwards incoming gRPC requests to the underlying
 * Spanner CloudExecutor implementation.
 */
export class WorkerProxy {
  public static spannerPort = 0;
  public static proxyPort = 0;
  public static cert = '';
  public static serviceKeyFile = '';

  public static usePlainTextChannel = false;
  public static enableGrpcFaultInjector = false;
  public static openTelemetrySdk: any;

  public static readonly PROJECT_ID = 'spanner-cloud-systest';
  public static readonly CLOUD_TRACE_ENDPOINT =
    'staging-cloudtrace.sandbox.googleapis.com:443';

  private static readonly MIN_PORT = 0;
  private static readonly MAX_PORT = 65535;
  private static readonly TRACE_SAMPLING_RATE = 0.01;

  /**
   * Parses and builds the command line options for the worker proxy.
   */
  public static buildOptions(args: string[]): any {
    const parser = yargs(args);

    parser.option(OPTION_SPANNER_PORT, {
      type: 'number',
      description: 'Port of Spanner Frontend to which to send requests.',
    });
    parser.option(OPTION_PROXY_PORT, {
      type: 'number',
      description: 'Proxy port to start worker proxy on.',
    });
    parser.option(OPTION_CERTIFICATE, {
      type: 'string',
      description: 'Certificate used to connect to Spanner GFE.',
    });
    parser.option(OPTION_SERVICE_KEY_FILE, {
      type: 'string',
      description: 'Service key file used to set authentication.',
    });
    parser.option(OPTION_USE_PLAIN_TEXT_CHANNEL, {
      type: 'boolean',
      description:
        'Use a plain text gRPC channel (intended for the Cloud Spanner Emulator).',
    });
    parser.option(OPTION_ENABLE_GRPC_FAULT_INJECTOR, {
      type: 'boolean',
      description: 'Enable grpc fault injector in cloud client executor.',
    });

    try {
      return parser.parseSync();
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  /**
   * Main entry point to spin up the gRPC server and start the worker proxy.
   */
  public static async main(args: string[]) {
    const commandLine = this.buildOptions(args);

    if (commandLine[OPTION_SPANNER_PORT] === undefined) {
      throw new Error(
        'Spanner proxyPort need to be assigned in order to start worker proxy.',
      );
    }
    this.spannerPort = commandLine[OPTION_SPANNER_PORT];
    if (this.spannerPort < this.MIN_PORT || this.spannerPort > this.MAX_PORT) {
      throw new Error(
        'Spanner proxyPort must be between ' +
          this.MIN_PORT +
          ' and ' +
          this.MAX_PORT,
      );
    }

    if (commandLine[OPTION_PROXY_PORT] === undefined) {
      throw new Error(
        'Proxy port need to be assigned in order to start worker proxy.',
      );
    }
    this.proxyPort = commandLine[OPTION_PROXY_PORT];
    if (this.proxyPort < this.MIN_PORT || this.proxyPort > this.MAX_PORT) {
      throw new Error(
        'Proxy port must be between ' + this.MIN_PORT + ' and ' + this.MAX_PORT,
      );
    }

    if (!commandLine[OPTION_CERTIFICATE]) {
      throw new Error(
        'Certificate need to be assigned in order to start worker proxy.',
      );
    }
    this.cert = commandLine[OPTION_CERTIFICATE];

    if (commandLine[OPTION_SERVICE_KEY_FILE]) {
      this.serviceKeyFile = commandLine[OPTION_SERVICE_KEY_FILE];
    }

    this.usePlainTextChannel = !!commandLine[OPTION_USE_PLAIN_TEXT_CHANNEL];
    this.enableGrpcFaultInjector =
      !!commandLine[OPTION_ENABLE_GRPC_FAULT_INJECTOR];

    // Setup the OpenTelemetry for tracing
    this.openTelemetrySdk = await CloudUtil.setupOpenTelemetrySdk();

    // Check if proto file exists
    if (!fs.existsSync(PROTO_PATH)) {
      throw new Error(`Proto file not found at ${PROTO_PATH}`);
    }

    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: false,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [
        path.join(__dirname, '../../protos'),
        path.join(__dirname, '../../../node_modules/google-proto-files'),
        path.join(__dirname, '../../../node_modules/google-gax/build/protos'),
      ],
    });
    const protoDescriptor = grpc.loadPackageDefinition(
      packageDefinition,
    ) as any;
    const spannerExecutorProxy =
      protoDescriptor.google.spanner.executor.v1.SpannerExecutorProxy;

    let server: grpc.Server;
    for (;;) {
      try {
        const cloudExecutorImpl = new CloudExecutorImpl();

        server = new grpc.Server();
        server.addService(
          spannerExecutorProxy.service,
          cloudExecutorImpl as any,
        );

        const healthImpl = new HealthImplementation({
          '': 'SERVING',
        });
        healthImpl.addToServer(server);
        const reflection = new ReflectionService(packageDefinition);
        reflection.addToServer(server);

        const bindAddr = `0.0.0.0:${WorkerProxy.proxyPort}`;
        const port = await new Promise<number>((resolve, reject) => {
          server.bindAsync(
            bindAddr,
            grpc.ServerCredentials.createInsecure(),
            (err, port) => {
              if (err) {
                return reject(err);
              }
              resolve(port);
            },
          );
        });

        console.info(`Server started on proxyPort: ${port}`);
        break;
      } catch (e) {
        console.warn(
          `Failed to start server on proxyPort ${this.proxyPort}`,
          e,
        );
        // Wait briefly before retrying to avoid tight loop
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    const shutdown = () => {
      // eslint-disable-next-line n/no-process-exit
      setTimeout(() => process.exit(1), 2000).unref();
      server.tryShutdown(() => {
        this.openTelemetrySdk
          .shutdown()
          .then(() => console.info('Tracing terminated'))
          .catch(error => console.error('Error terminating tracing', error))
          // eslint-disable-next-line n/no-process-exit
          .finally(() => process.exit(0));
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);

    process.on('uncaughtException', err => {
      console.error('Uncaught Exception:', err);
      shutdown();
    });

    process.on('unhandledRejection', reason => {
      console.error('Unhandled Rejection:', reason);
      shutdown();
    });
  }
}
if (require.main === module) {
  WorkerProxy.main(process.argv.slice(2)).catch(err => {
    console.error('Failed to start worker proxy: ', err);
    throw err;
  });
}
