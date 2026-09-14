import {Spanner, SpannerOptions} from '@google-cloud/spanner';
import * as grpc from '@grpc/grpc-js';

/**
 * Creates a strongly-configured Spanner client instance.
 */
export function createSpannerClient(projectId: string, host?: string): Spanner {
  const options: SpannerOptions = {
    projectId: projectId,
  };

  if (host) {
    let endpoint = host;
    // Strip http:// or https:// prefixes if they exist, as gRPC apiEndpoint expects host:port
    if (endpoint.startsWith('http://')) {
      endpoint = endpoint.substring(7);
    } else if (endpoint.startsWith('https://')) {
      endpoint = endpoint.substring(8);
    }

    // If connecting to a local endpoint, disable SSL/authentication via environment or standard custom channel settings
    if (
      endpoint.startsWith('localhost:') ||
      endpoint.startsWith('127.0.0.1:')
    ) {
      const parts = endpoint.split(':');
      options.apiEndpoint = parts[0];
      options.port = parseInt(parts[1], 10);
      options.sslCreds = grpc.credentials.createInsecure();
    } else {
      options.apiEndpoint = endpoint;
    }
  }

  return new Spanner(options);
}
