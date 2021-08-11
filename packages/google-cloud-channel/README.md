[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Channel API: Node.js Client](https://github.com/googleapis/nodejs-channel)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/channel.svg)](https://www.npmjs.org/package/@google-cloud/channel)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-channel/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-channel)




Channel client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-channel/blob/main/CHANGELOG.md).

* [Cloud Channel API Node.js Client API Reference][client-docs]
* [Cloud Channel API Documentation][product-docs]
* [github.com/googleapis/nodejs-channel](https://github.com/googleapis/nodejs-channel)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud Channel API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/channel
```


### Using the client library

```javascript
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

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-channel/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-channel/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-channel&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Cloud Channel API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-channel/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-channel/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/channel/latest
[product-docs]: https://cloud.google.com/channel/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudchannel.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
