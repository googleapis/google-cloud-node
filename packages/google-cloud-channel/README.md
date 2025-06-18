[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Channel API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-channel)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/channel.svg)](https://www.npmjs.org/package/@google-cloud/channel)




Channel client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-channel/CHANGELOG.md).

* [Cloud Channel API Node.js Client API Reference][client-docs]
* [Cloud Channel API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-channel](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-channel)

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
1.  [Set up authentication][auth] so you can access the
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

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-channel/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_channel_reports_service.fetch_report_results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.fetch_report_results.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.fetch_report_results.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_reports_service.list_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.list_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.list_reports.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_reports_service.run_report_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.run_report_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.run_report_job.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.activate_entitlement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.activate_entitlement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.activate_entitlement.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.cancel_entitlement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.cancel_entitlement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.cancel_entitlement.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.change_offer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_offer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_offer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.change_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_parameters.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.change_renewal_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_renewal_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_renewal_settings.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.check_cloud_identity_accounts_exist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.check_cloud_identity_accounts_exist.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.check_cloud_identity_accounts_exist.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.create_channel_partner_link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_link.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_link.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.create_channel_partner_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.create_customer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.create_customer_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.create_entitlement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_entitlement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_entitlement.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.delete_channel_partner_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_channel_partner_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_channel_partner_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.delete_customer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.delete_customer_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.get_channel_partner_link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_link.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_link.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.get_channel_partner_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.get_customer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.get_customer_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.get_entitlement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_entitlement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_entitlement.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.import_customer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.import_customer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.import_customer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_channel_partner_links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_links.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_links.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_channel_partner_repricing_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_repricing_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_repricing_configs.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_customer_repricing_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customer_repricing_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customer_repricing_configs.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_customers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customers.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_entitlement_changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlement_changes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlement_changes.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_entitlements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlements.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlements.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_offers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_offers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_offers.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_products | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_products.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_products.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_purchasable_offers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_offers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_offers.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_purchasable_skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_skus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_skus.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_sku_group_billable_skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_group_billable_skus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_group_billable_skus.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_sku_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_groups.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_skus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_skus.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_subscribers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_subscribers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_subscribers.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_transferable_offers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_offers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_offers.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.list_transferable_skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_skus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_skus.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.lookup_offer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.lookup_offer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.lookup_offer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.provision_cloud_identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.provision_cloud_identity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.provision_cloud_identity.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.query_eligible_billing_accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.query_eligible_billing_accounts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.query_eligible_billing_accounts.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.register_subscriber | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.register_subscriber.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.register_subscriber.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.start_paid_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.start_paid_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.start_paid_service.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.suspend_entitlement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.suspend_entitlement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.suspend_entitlement.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.transfer_entitlements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.transfer_entitlements_to_google | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements_to_google.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements_to_google.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.unregister_subscriber | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.unregister_subscriber.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.unregister_subscriber.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.update_channel_partner_link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_link.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_link.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.update_channel_partner_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.update_customer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer.js,packages/google-cloud-channel/samples/README.md) |
| Cloud_channel_service.update_customer_repricing_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer_repricing_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer_repricing_config.js,packages/google-cloud-channel/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/quickstart.js,packages/google-cloud-channel/samples/README.md) |



The [Cloud Channel API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/channel@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/channel/latest
[product-docs]: https://cloud.google.com/channel/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudchannel.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
