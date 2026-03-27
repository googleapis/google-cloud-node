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

import {BigtableTableAdminClient} from './v2';
import {LROperation, CallOptions, ClientOptions} from 'google-gax';
import type * as gax from 'google-gax';

import {google} from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');

/**
 * Service for creating, configuring, and deleting Cloud Bigtable tables.
 * Provides access to the table schemas only, not the data stored within
 * the tables.
 *
 * While users may create an instance of this class using the standard GAPIC
 * constructor parameters, it's recommended to obtain one by way of the
 * Bigtable.getTableAdminClient() method so that authentication and
 * configuration are all handled uniformly.
 *
 * @class
 * @memberof admin
 */
export class TableAdminClient extends BigtableTableAdminClient {
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback,
  ) {
    super(opts, gaxInstance);

    const protoFilesRoot = this.pGaxModule.protobufFromJSON(jsonProtos);

    // This one isn't included since it's not a directly callable method on the proto.
    const optimizeRestoredTableResponse = protoFilesRoot.lookup(
      '.google.bigtable.admin.v2.Table',
    ) as gax.protobuf.Type;
    const optimizeRestoredTableMetadata = protoFilesRoot.lookup(
      '.google.bigtable.admin.v2.OptimizeRestoredTableMetadata',
    ) as gax.protobuf.Type;
    this.descriptors.longrunning['optimizeRestoredTable'] =
      new this.pGaxModule.LongrunningDescriptor(
        this.operationsClient,
        optimizeRestoredTableResponse.decode.bind(
          optimizeRestoredTableResponse,
        ),
        optimizeRestoredTableMetadata.decode.bind(
          optimizeRestoredTableMetadata,
        ),
      );
  }

  // We want to use the same gax module as the base class, but it's private.
  private get pGaxModule() {
    return this['_gaxModule'];
  }

  // We want to use the same logger as the base class, but it's private.
  private get pLog() {
    return this['_log'];
  }

  /*
   * This one doesn't get generated in GAPIC, because it's "hidden" in proto
   * return types rather than being part of a method. This helper does the same
   * thing as e.g. checkRestoreTableStatus.
   */
  /**
   * Check the status of the long running operation returned when the `restoreTable()`
   * LRO has concluded.
   *
   * @param {String} name
   *   The operation name that will be passed.
   * @returns {Promise} - The promise which resolves to an object.
   *   The decoded operation object has result and metadata field to get information from.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
   *   for more details and examples.
   */
  async checkOptimizeRestoredTableProgress(
    name: string,
  ): Promise<
    LROperation<
      google.bigtable.admin.v2.Table,
      google.bigtable.admin.v2.OptimizeRestoredTableMetadata
    >
  > {
    this.pLog.info('optimizeRestoredTable long-running');
    const request =
      new this.pGaxModule.operationsProtos.google.longrunning.GetOperationRequest(
        {name},
      );
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new this.pGaxModule.Operation(
      operation,
      this.descriptors.longrunning.optimizeRestoredTable,
      this.pGaxModule.createDefaultBackoffSettings(),
    );
    return decodeOperation as LROperation<
      google.bigtable.admin.v2.Table,
      google.bigtable.admin.v2.OptimizeRestoredTableMetadata
    >;
  }

  /**
   * Waits for a table to become consistent. This gets a consistency check token
   * for you, and waits until its status has returned `consistent`.
   *
   * @param tableName The name of the table to check
   * @param [token] An existing token string, if one exists
   * @param [options] CallOptions, if desired
   * @returns A Promise that completes when the table is consistent
   */
  async waitForConsistency(
    tableName: string,
    token?: string,
    options?: CallOptions,
  ): Promise<void> {
    const checkIntervalSeconds = 5;

    // 1. Generate a consistency token (or use the one the user passed)
    let resolvedToken = token;
    if (!resolvedToken) {
      const [generatedToken] = await this.generateConsistencyToken(
        {
          name: tableName,
        },
        options,
      );
      resolvedToken = generatedToken.consistencyToken!;
    }

    let isConsistent = false;
    while (!isConsistent) {
      // 2. Check for consistency
      const request = {
        name: tableName,
        consistencyToken: resolvedToken,
      };
      const [consistent] = await this.checkConsistency(request, options);

      // Protos assume optional, so just be sure.
      isConsistent = consistent.consistent ?? false;

      if (isConsistent) {
        return;
      } else {
        await new Promise(resolve => {
          setTimeout(resolve, checkIntervalSeconds * 1000);
        });
      }
    }
  }
}
