// Disable global fetch to force standard HTTPS socket fallback in GCP exporters
delete (globalThis as any).fetch;
console.log('Disabled global fetch API successfully.');

// Disable keep-alive on the global HTTPS agent to prevent GCE connection resets (Premature close)
import * as https from 'https';
if (https.globalAgent) {
  (https.globalAgent as any).keepAlive = false;
  if ((https.globalAgent as any).options) {
    (https.globalAgent as any).options.keepAlive = false;
  }
}
console.log('Disabled global HTTPS agent keep-alive successfully.');
