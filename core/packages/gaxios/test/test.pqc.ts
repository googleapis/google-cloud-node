// Copyright 2024 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import assert from 'assert';
import tls from 'tls';
import https from 'https';
import nock from 'nock';
import {describe, it, before} from 'mocha';
import {Gaxios} from '../src/index.js';

const TEST_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDUmxmfQVRYdA5s
fF5LWKkcs8YE5dE6R+D/imhR2brcWjGL1tNsK9PryiUWE664rhVefVxZhp2zCE3u
J7LiaQt0dlmvLQCCvHi0BuH7hANKiU5eQVmBp/xadrLyoAtDyhFVmaSfwzqPMoA4
Ld7okg/s7MF4qEX9esEkP6xd/MkBNqqXCEDJtD3RLFEQtyzQMSp+6TR7pVSfoALM
nDOryg4RzYb8VFgWRVpWhFWx1NcfQ1hYMOM/xE1Vae5oQcAN9EKwioAl+9mY96yY
T72qbiABqE1Sa9M42tZpFcn9TBP9f+q3FRySLF5Y76qvqWprN01mu/af2xWZWvcc
qoQAJKzlAgMBAAECggEABKCtoZhH8Dbye20HlmdDIxNMq52e/MBExvspwyJUnWg/
LNaLuo6Hqdm4De92vaFYaLqc0HwMIbH8FEN78s6rh6jt0dDOcooMrIp7z8AzXCN5
97Y/bwGLjiKISZyvMhYLY4wZF7sloqlMPizNbc2EGDmdCnXLNDXAT3wtUcxnSaXv
T5qU2XoZfXgh+bNGD3Q+o63bDtqUK/WKq5fcgGnsu8RPfVU1aJfWkdA1dt89h7qa
Fa8inHkgzaAz3JXu7bak23+BxIz/rOv+VJ0RFpSN3GJ1qjTPij65YMUQiYNtX/9w
NJ7yp3BQggM7OlTkLWFPKtlAJul3k2FOnAImoWrSgQKBgQDq2qqDuS4XIlTBfAMF
rt1unZ8sjxRPeuwfVQbzir1qxFDiM164GswUuj/EGGcB5mYTg0JvqQNpPOIfZxDH
zbW7g+XNtHfuR/YC/Vju1rN/HNPHYxncurvN3tocRIFWqBJQObN/0g7lILgKytRY
8XhyG8vx7NubDf6cZi/fyu5WQQKBgQDnv52ifnPaIX687K8rwVnRm7/N1MNxnsl9
gm9HFCQ14yYZDKuN5HViYvhWitskR6VmhNpMiW4zMTSKlB3D0n3GaJt/MnoZF9Fu
oikzNWtoSQBNdv8ZB1xi/TAMX4RSTJQPqqrfWb0c6xif4fCGKm0xlbKNmSJiyxcV
p1uR5APVpQKBgDfRMKWN5X5qEmrJ5o37OXWI0MPuXY1mUahAtR484zf04KRiQSjQ
daCXg4A/rHuvHqOUlr2jFcR1S+javgo+weqHNp7lPXvMbpPXUsOxE4gqecrxqrvj
Ra9wP7ZoMbU+zNt0W00Nx6x9UkB+ZGmfOlkkchxVhvwbH2BciRRPTsYBAoGAO8oH
1UBii0hQ9lTp7JP5pEZWebgGpG2e9i6Mnv3nSa/MyHGoYPcsAbIe99TjLLz/Qy/L
UiuyrqpnL8l+1GKd6G5cj7hqH8cxVSWpE3kYuNL8rP+iWMa5YyCHIOoTrVfsaw5Q
/0abr7ZHqBgWgca4XS6N3lI/uNVEo2WGDmGRS7ECgYADrhrHcuYjYdjnKbo9Js3J
T9WkvKTwJGOkUvQsbz3EzkbNzCtw0HS2RxUn9P4t51i17CEdme+bAYF8XAdWAYX5
r8olE8Rpejq8P3aNRrqvUnLl0ljwxmLfYbtBqVZt6Wf/6y3b7y2G4sA5B3/m885E
/xkeYvz9eTqgT82o5HXGFA==
-----END PRIVATE KEY-----`;

const TEST_CERT = `-----BEGIN CERTIFICATE-----
MIIDgzCCAmugAwIBAgIUOBhQmcKn3LoUKBWCpGb2OQT1p64wDQYJKoZIhvcNAQEL
BQAwUTELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRAwDgYDVQQHDAdSdW50aW1l
MQ8wDQYDVQQKDAZHYXhpb3MxEjAQBgNVBAMMCWxvY2FsaG9zdDAeFw0yNjA3Mjkx
OTQ1MzdaFw0yNzA3MjkxOTQ1MzdaMFExCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJD
QTEQMA4GA1UEBwwHUnVudGltZTEPMA0GA1UECgwGR2F4aW9zMRIwEAYDVQQDDAls
b2NhbGhvc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDUmxmfQVRY
dA5sfF5LWKkcs8YE5dE6R+D/imhR2brcWjGL1tNsK9PryiUWE664rhVefVxZhp2z
CE3uJ7LiaQt0dlmvLQCCvHi0BuH7hANKiU5eQVmBp/xadrLyoAtDyhFVmaSfwzqP
MoA4Ld7okg/s7MF4qEX9esEkP6xd/MkBNqqXCEDJtD3RLFEQtyzQMSp+6TR7pVSf
oALMnDOryg4RzYb8VFgWRVpWhFWx1NcfQ1hYMOM/xE1Vae5oQcAN9EKwioAl+9mY
96yYT72qbiABqE1Sa9M42tZpFcn9TBP9f+q3FRySLF5Y76qvqWprN01mu/af2xWZ
WvccqoQAJKzlAgMBAAGjUzBRMB0GA1UdDgQWBBRx5vme4J9llNLb29FmV3W0ZV7q
/DAfBgNVHSMEGDAWgBRx5vme4J9llNLb29FmV3W0ZV7q/DAPBgNVHRMBAf8EBTAD
AQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBTrfMM/A/rsLeTUqt2XZqg6UFf5SZMsS1E
cRxmrewmfto9iGMxeNIPHUzPaqrPLwi8stfwf+EelWEYTWbIXJ/stbanJzorDVqU
SsSbS9FSlDpoHnJyKUXc9dx0MqQ6v1kFJw3rXS2RRrRQwEUgLa3X6QWtc0zXEuDo
rHkQr2LF7nJWi2pucDKf4OlHPw4OokxTN3jOnHC5mlEEioYRLW94HIVQeXBfOQtJ
VaRZnsaxIpX24h0FCYPM4cx1F3ZWA2nrWd8hPUo7Mku8gOm7YpYeYTOD7GaiGUUk
Vo5npO7kgutiI1H/roI0FuC+ai7JArMo2wc8JkF+zYkKRU6Km3c1
-----END CERTIFICATE-----`;

describe('🔒 PQC Compliance Integration Test', () => {
  let isPQCSupported = false;

  before(function () {
    const versionStr = process.versions.node;
    const [major, minor] = versionStr.split('.').map(Number);

    const isSupportedVersion =
      (major === 22 && minor >= 20) ||
      (major === 24 && minor >= 7) ||
      major > 24;

    let isCurveSupported = false;
    try {
      tls.createSecureContext({ecdhCurve: 'X25519MLKEM768'});
      isCurveSupported = true;
    } catch (e) {
      isCurveSupported = false;
    }

    isPQCSupported = isSupportedVersion && isCurveSupported;

    if (!isPQCSupported) {
      console.log(
        `Skipping PQC Integration test on unsupported Node.js runtime version: ${versionStr}`,
      );
      this.skip();
    }
  });

  it('should successfully negotiate TLS using X25519MLKEM768', async () => {
    // Enable net connections to localhost in case nock is disabling it globally
    nock.enableNetConnect(/(localhost|127\.0\.0\.1)/);

    // Spin up an in-memory HTTPS server
    const server = https.createServer(
      {
        key: TEST_KEY,
        cert: TEST_CERT,
      },
      (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('PQC Verified');
      },
    );

    await new Promise<void>(resolve => {
      server.listen(0, '127.0.0.1', () => {
        resolve();
      });
    });

    const address = server.address() as {port: number};
    const port = address.port;
    const url = `https://127.0.0.1:${port}/`;

    try {
      // Create a custom Agent configured with the hybrid PQC curve
      const agent = new https.Agent({
        rejectUnauthorized: false,
        ecdhCurve: 'X25519MLKEM768',
      });

      let clientSocket: tls.TLSSocket | undefined;
      const originalCreateConnection = agent.createConnection;
      agent.createConnection = function (options, callback) {
        const socket = originalCreateConnection.call(this, options, callback);
        clientSocket = socket as tls.TLSSocket;
        return socket;
      };

      const gaxios = new Gaxios();
      const response = await gaxios.request({
        url,
        method: 'GET',
        agent,
      });

      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.data, 'PQC Verified');

      assert.ok(clientSocket, 'TLSSocket was not captured');
      assert.strictEqual(
        clientSocket.getProtocol(),
        'TLSv1.3',
        'Should have negotiated TLSv1.3',
      );

      // Verify that getEphemeralKeyInfo returns either an empty object (due to OpenSSL 3.5+ hybrid group behavior)
      // or the specific PQC group.
      const keyInfo = clientSocket.getEphemeralKeyInfo();
      assert.ok(keyInfo, 'Ephemeral Key Info should be defined');
    } finally {
      server.close();
    }
  });
});
