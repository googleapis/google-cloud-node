// Copyright 2017 Google LLC
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

'use strict';

const {OAuth2Client} = require('google-auth-library');
const http = require('http');
const url = require('url');
const open = require('open');
const destroyer = require('server-destroy');

// Download your OAuth2 configuration from the Google Developer Console.
/**
 * @example
 * require('./oauth2.keys.json');
 */
const keys = {};

/**
 * Start by acquiring a pre-authenticated oAuth2 client.
 */
async function main() {
  const oAuth2Client = await getAuthenticatedClient();
  // Make a simple request to the People API using our pre-authenticated client. The `request()` method
  // takes an GaxiosOptions object.  Visit https://github.com/JustinBeckwith/gaxios.
  const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
  const res = await oAuth2Client.request({url});
  console.log(res.data);
}

/**
 * Create a new OAuth2Client, and go through the OAuth2 content workflow.
 * Return the full client to the callback.
 */
async function getAuthenticatedClient() {
  // create an oAuth client to authorize the API call. Secrets are kept in a
  // `keys.json` file, which should be downloaded from the Google Developers
  // Console.
  const oAuth2Client = new OAuth2Client(keys.web);

  // Generate a code_verifier and code_challenge
  const codes = await oAuth2Client.generateCodeVerifierAsync();
  console.log(codes);

  // Generate the url that will be used for the consent dialog.
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    // When using `generateCodeVerifier`, make sure to use code_challenge_method 'S256'.
    code_challenge_method: 'S256',
    // Pass along the generated code challenge.
    code_challenge: codes.codeChallenge,
  });

  // Open an http server to accept the oauth callback. In this simple example,
  // the only request to our webserver is to /oauth2callback?code=<code>.
  return new Promise((resolve, reject) => {
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/oauth2callback') > -1) {
            // acquire the code from the querystring, and close the web server.
            const qs = new url.URL(req.url, 'http://localhost:3000')
              .searchParams;
            const code = qs.get('code');
            console.log(`Code is ${code}`);
            res.end('Authentication successful! Please return to the console.');
            server.destroy();

            // Now that we have the code, use that to acquire tokens.
            // Pass along the generated code verifier that matches our code challenge.
            const r = await oAuth2Client.getToken({
              code,
              codeVerifier: codes.codeVerifier,
            });

            // Make sure to set the credentials on the OAuth2 client.
            oAuth2Client.setCredentials(r.tokens);
            console.info('Tokens acquired.');
            resolve(oAuth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        open(authorizeUrl, {wait: false}).then(cp => cp.unref());
      });
    destroyer(server);
  });
}

main().catch(console.error);
