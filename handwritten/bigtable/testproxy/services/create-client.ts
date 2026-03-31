// Copyright 2022 Google LLC
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

import {ClientImplMaker, normalizeCallback} from './utils';
import {google} from '../protos/protos';

import * as grpc from '@grpc/grpc-js';
import {Bigtable} from '../../src';
import {createBigtableClient} from './utils/bigtable-client';
import {log} from './utils/log';

function durationToMilliseconds(
  duration: google.protobuf.Duration | google.protobuf.IDuration,
) {
  const secondsInMs = parseInt(duration.seconds as string, 10) * 1000;
  const nanosInMs = duration.nanos! / 1000000;
  return secondsInMs + nanosInMs;
}

type ICreateClientRequest = google.bigtable.testproxy.ICreateClientRequest;
type ICreateClientResponse = google.bigtable.testproxy.ICreateClientResponse;

interface HasCredential {
  callCredential?: {jsonServiceAccount: string};
}

interface MethodConfig {
  timeout_millis: number;
  retry_codes_name: string;
  retry_params_name: string;
}

export const createClient: ClientImplMaker<
  ICreateClientRequest,
  ICreateClientResponse
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    // TODO: Handle refresh periods
    const {request} = rawRequest;
    const clientConfig = JSON.parse(
      JSON.stringify(require('../../src/v2/bigtable_client_config.json')),
    );
    const {
      callCredential,
      clientId,
      projectId,
      instanceId,
      dataTarget: apiEndpoint,
      appProfileId,
    } = request as ICreateClientRequest & HasCredential;

    if (!(clientId && projectId && instanceId && apiEndpoint)) {
      throw Object.assign(
        new Error(
          'clientId, projectId, instanceId, and apiEndpoint must be provided.',
        ),
        {code: grpc.status.INVALID_ARGUMENT},
      );
    }

    log.info(
      'create client %s (%s)',
      clientId,
      clientMap.has(clientId) ? 'exists' : "doesn't exist",
    );

    if (clientMap.has(clientId)) {
      throw Object.assign(new Error(`Client ${clientId} already exists`), {
        code: grpc.status.ALREADY_EXISTS,
      });
    }

    // TODO: Implement support to SSL connection
    let authClient;
    if (callCredential && callCredential.jsonServiceAccount) {
      authClient = JSON.parse(callCredential.jsonServiceAccount);
    }
    if (request.perOperationTimeout) {
      /**
       * This block of code ensures the server times out for every method call
       * after the amount of time specified in request.perOperationTimeout.
       */
      Object.entries(
        clientConfig.interfaces['google.bigtable.v2.Bigtable'].methods,
      ).forEach(([, v]) => {
        (v as MethodConfig).timeout_millis = durationToMilliseconds(
          request.perOperationTimeout!,
        );
      });
    }

    const options = {
      projectId,
      apiEndpoint,
      authClient,
      appProfileId: appProfileId!,
      clientConfig,
    };
    log.info('created bigtable client %s', clientId);
    const bigtable = new Bigtable(options);
    createBigtableClient(bigtable);
    clientMap.set(clientId!, bigtable);
    return {};
  });
