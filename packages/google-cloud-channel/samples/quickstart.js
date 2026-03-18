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
//
const {OAuth2Client} = require('google-auth-library');
const {grpc} = require('google-gax');
const http = require('http');
const url = require('url');
const open = require('open');
const destroyer = require('server-destroy');

// [START nodejs_channel_quickstart]
// Reads the secrets from a `oauth2.keys.json` file, which should be downloaded
// from the Google Developers Console and saved in the same directory with the
// sample app.

// This sample app only calls read-only methods from the Channel API. Include
// additional scopes if calling methods that modify the configuration.
const SCOPES = ['https://www.googleapis.com/auth/apps.order'];

async function listCustomers(authClient, accountNumber) {
  // Imports the Google Cloud client library
  const {CloudChannelServiceClient} = require('@google-cloud/channel');

  // Instantiates a client using OAuth2 credentials.
  const sslCreds = grpc.credentials.createSsl();
  const credentials = grpc.credentials.combineChannelCredentials(
    sslCreds,
    grpc.credentials.createFromGoogleCredential(authClient)
  );

  // Instantiates a client
  const client = new CloudChannelServiceClient({
    sslCreds: credentials,
  });

  // Calls listCustomers() method
  const customers = await client.listCustomers({
    parent: `accounts/${accountNumber}`,
  });
  console.info(customers);
}

/**
 * Create a new OAuth2Client, and go through the OAuth2 content
 * workflow.  Return the full client to the callback.
 */
function getAuthenticatedClient(keys) {
  return new Promise((resolve, reject) => {
    // Create an oAuth client to authorize the API call. Secrets are kept in a
    // `keys.json` file, which should be downloaded from the Google Developers
    // Console.
    const oAuth2Client = new OAuth2Client(
      keys.web.client_id,
      keys.web.client_secret,
      // The first redirect URL from the `oauth2.keys.json` file will be used
      // to generate the OAuth2 callback URL. Update the line below or edit
      // the redirect URL in the Google Developers Console if needed.
      // This sample app expects the callback URL to be
      // 'http://localhost:3000/oauth2callback'
      keys.web.redirect_uris[0]
    );

    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES.join(' '),
    });

    // Open an http server to accept the oauth callback. In this example, the
    // only request to our webserver is to /oauth2callback?code=<code>
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/oauth2callback') > -1) {
            // Acquire the code from the querystring, and close the web
            // server.
            const qs = new url.URL(req.url, 'http://localhost:3000')
              .searchParams;
            const code = qs.get('code');
            console.log(`Code is ${code}`);
            res.end('Authentication successful! Please return to the console.');
            server.destroy();

            // Now that we have the code, use that to acquire tokens.
            const r = await oAuth2Client.getToken(code);
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
        // Open the browser to the authorize url to start the workflow.
        // This line will not work if you are running the code in the
        // environment where a browser is not available. In this case,
        // copy the URL and open it manually in a browser.
        console.info(`Opening the browser with URL: ${authorizeUrl}`);
        open(authorizeUrl, {wait: false}).then(cp => cp.unref());
      });
    destroyer(server);
  });
}

async function main(accountNumber, keys) {
  // TODO: uncomment with your account number
  // const accountNumber = '1234'

  // TODO: uncomment this line with your oAuth2 file
  //const keys = require('./oauth2.keys.json');

  getAuthenticatedClient(keys).then(authClient =>
    listCustomers(authClient, accountNumber)
  );
}
// [END nodejs_channel_quickstart]

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
