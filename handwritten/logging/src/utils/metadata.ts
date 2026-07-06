/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

import * as fs from 'fs';
import * as gcpMetadata from 'gcp-metadata';
import {GCPEnv, GoogleAuth} from 'google-auth-library';
import {promisify} from 'util';

import {ServiceContext} from '../index';

const readFile = promisify(fs.readFile);

function zoneFromQualifiedZone(qualified: string): string | undefined {
  // Some parsing is necessary. Metadata service returns a fully
  // qualified zone name: 'projects/{projectId}/zones/{zone}'. Logging
  // wants just the zone part.
  //
  return qualified.split('/').pop();
}

function regionFromQualifiedZone(qualified: string): string | undefined {
  // Parses the region from the zone. Used for GCF and GCR which dynamically
  // allocate zones.
  const zone = zoneFromQualifiedZone(qualified);
  const region =
    zone === undefined ? undefined : zone.slice(0, zone.lastIndexOf('-'));
  return region;
}

/**
 * Create a descriptor for Cloud Functions.
 *
 * @returns {object}
 */
export async function getCloudFunctionDescriptor() {
  // If the region is already available via an environment variable, don't delay the function by pinging metaserver.
  let region = undefined;
  if (!(process.env.GOOGLE_CLOUD_REGION || process.env.FUNCTION_REGION)) {
    const qualifiedZone = await gcpMetadata.instance('zone');
    region = regionFromQualifiedZone(qualifiedZone);
  }
  /**
   * In GCF versions after Node 8, K_SERVICE is the preferred way to
   * get the function name. We still check for GOOGLE_CLOUD_REGION and FUNCTION_REGION for backwards Node runtime compatibility.
   */
  return {
    type: 'cloud_function',
    labels: {
      function_name: process.env.K_SERVICE || process.env.FUNCTION_NAME,
      region:
        process.env.GOOGLE_CLOUD_REGION ||
        process.env.FUNCTION_REGION ||
        region,
    },
  };
}

/**
 * Create a descriptor for Cloud Run.
 *
 * @returns {object}
 */
export async function getCloudRunDescriptor() {
  const qualifiedZone = await gcpMetadata.instance('zone');
  const location = regionFromQualifiedZone(qualifiedZone);
  return {
    type: 'cloud_run_revision',
    labels: {
      location,
      service_name: process.env.K_SERVICE,
      revision_name: process.env.K_REVISION,
      configuration_name: process.env.K_CONFIGURATION,
    },
  };
}

/**
 * Create a descriptor for Google App Engine.
 *
 * @returns {object}
 */
export async function getGAEDescriptor() {
  const qualifiedZone = await gcpMetadata.instance('zone');
  const zone = zoneFromQualifiedZone(qualifiedZone);
  return {
    type: 'gae_app',
    labels: {
      module_id: process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME,
      version_id: process.env.GAE_VERSION,
      zone,
    },
  };
}

/**
 * Create a descriptor for Google Compute Engine.
 * @return {object}
 */
export async function getGCEDescriptor() {
  const idResponse = await gcpMetadata.instance('id');
  const zoneResponse = await gcpMetadata.instance('zone');
  // Some parsing is necessary. Metadata service returns a fully
  // qualified zone name: 'projects/{projectId}/zones/{zone}'. Logging
  // wants just the zone part.
  //
  const zone = zoneFromQualifiedZone(zoneResponse);
  return {
    type: 'gce_instance',
    labels: {
      // idResponse can be BigNumber when the id too large for JavaScript
      // numbers. Use a toString() to uniformly convert to a string.
      instance_id: idResponse.toString(),
      zone,
    },
  };
}

export const KUBERNETES_NAMESPACE_ID_PATH =
  '/var/run/secrets/kubernetes.io/serviceaccount/namespace';

/**
 * Create a descriptor for Google Container Engine.
 *
 * @return {object}
 */
export async function getGKEDescriptor() {
  // Cloud Logging Monitored Resource for 'container' requires
  // cluster_name and namespace_id fields. Note that these *need* to be
  // snake_case. The namespace_id is not easily available from inside the
  // container, but we can get the namespace_name. Logging has been using the
  // namespace_name in place of namespace_id for a while now. Log correlation
  // with metrics may not necessarily work however.
  //
  const resp = await gcpMetadata.instance('attributes/cluster-name');
  const qualifiedZone = await gcpMetadata.instance('zone');
  const location = zoneFromQualifiedZone(qualifiedZone);
  let namespace = '';
  try {
    namespace = await readFile(KUBERNETES_NAMESPACE_ID_PATH, 'utf8');
  } catch (err) {
    // Ignore errors (leave namespace as a nil string).
  }

  return {
    type: 'k8s_container',
    labels: {
      location,
      cluster_name: resp,
      namespace_name: namespace,
      pod_name: process.env.HOSTNAME,
      // Users must manually supply container name for now.
      // This may be autodetected in the future, pending b/145137070.
      container_name: process.env.CONTAINER_NAME,
    },
  };
}

/**
 * Create a global descriptor.
 *
 * @returns {object}
 */
export function getGlobalDescriptor() {
  return {
    type: 'global',
  };
}

/**
 * Attempt to contact the metadata service and determine,
 * based on request success and environment variables, what type of resource
 * the library is operating on.
 */
export async function getDefaultResource(auth: GoogleAuth) {
  const env = await auth.getEnv();
  switch (env) {
    case GCPEnv.KUBERNETES_ENGINE:
      return getGKEDescriptor().catch(() => getGlobalDescriptor());
    case GCPEnv.APP_ENGINE:
      return getGAEDescriptor().catch(() => getGlobalDescriptor());
    case GCPEnv.CLOUD_FUNCTIONS:
      return getCloudFunctionDescriptor().catch(() => getGlobalDescriptor());
    case GCPEnv.CLOUD_RUN:
      return getCloudRunDescriptor().catch(() => getGlobalDescriptor());
    case GCPEnv.COMPUTE_ENGINE:
      return getGCEDescriptor().catch(() => getGlobalDescriptor());
    default:
      return getGlobalDescriptor();
  }
}

/**
 * For logged errors, users can provide a service context. This enables errors
 * to be picked up Cloud Error Reporting. For more information see
 * [this guide]{@link
 * https://cloud.google.com/error-reporting/docs/formatting-error-messages} and
 * the [official documentation]{@link
 * https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext}.
 */
export async function detectServiceContext(
  auth: GoogleAuth
): Promise<ServiceContext | null> {
  const env = await auth.getEnv();
  switch (env) {
    case GCPEnv.APP_ENGINE:
      return {
        service: process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME,
        version: process.env.GAE_VERSION || process.env.GAE_MODULE_VERSION,
      };
    case GCPEnv.CLOUD_FUNCTIONS:
      return {
        service: process.env.FUNCTION_NAME,
      };
    // On Kubernetes we use the pod-name to describe the service. Currently,
    // we acquire the pod-name from within the pod through env var `HOSTNAME`.
    case GCPEnv.KUBERNETES_ENGINE:
      return {
        service: process.env.HOSTNAME,
      };
    case GCPEnv.CLOUD_RUN:
      return {
        service: process.env.K_SERVICE,
      };
    case GCPEnv.COMPUTE_ENGINE:
      return null;
    default:
      return null;
  }
}
