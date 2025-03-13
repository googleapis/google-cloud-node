[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Merchant API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-accounts)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-shopping/accounts.svg)](https://www.npmjs.org/package/@google-shopping/accounts)




Merchant API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-accounts/CHANGELOG.md).

* [Merchant API Node.js Client API Reference][client-docs]
* [Merchant API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-shopping-merchant-accounts](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-accounts)

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
1.  [Enable the Merchant API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-shopping/accounts
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The account to list regions for.
 *  Format: `accounts/{account}`
 */
// const parent = 'accounts/abc123'
/**
 *  Optional. The maximum number of regions to return. The service may return
 *  fewer than this value.
 *  If unspecified, at most 50 regions will be returned.
 *  The maximum value is 1000; values above 1000 will be coerced to 1000.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListRegions` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListRegions` must
 *  match the call that provided the page token.
 */
// const pageToken = 'abc123'

// Imports the Accounts library
const {RegionsServiceClient} = require('@google-shopping/accounts').v1beta;

// Instantiates a client
const accountsClient = new RegionsServiceClient();

async function callListRegions() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = accountsClient.listRegionsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListRegions();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-accounts/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Account_issue_service.list_account_issues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_issue_service.list_account_issues.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_issue_service.list_account_issues.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Account_tax_service.get_account_tax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.get_account_tax.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.get_account_tax.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Account_tax_service.list_account_tax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.list_account_tax.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.list_account_tax.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Account_tax_service.update_account_tax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.update_account_tax.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.update_account_tax.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Accounts_service.create_and_configure_account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.create_and_configure_account.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.create_and_configure_account.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Accounts_service.delete_account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.delete_account.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.delete_account.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Accounts_service.get_account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.get_account.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.get_account.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Accounts_service.list_accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.list_accounts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.list_accounts.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Accounts_service.list_sub_accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.list_sub_accounts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.list_sub_accounts.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Accounts_service.update_account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.update_account.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.update_account.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Autofeed_settings_service.get_autofeed_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/autofeed_settings_service.get_autofeed_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/autofeed_settings_service.get_autofeed_settings.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Autofeed_settings_service.update_autofeed_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/autofeed_settings_service.update_autofeed_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/autofeed_settings_service.update_autofeed_settings.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Business_identity_service.get_business_identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_identity_service.get_business_identity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_identity_service.get_business_identity.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Business_identity_service.update_business_identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_identity_service.update_business_identity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_identity_service.update_business_identity.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Business_info_service.get_business_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_info_service.get_business_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_info_service.get_business_info.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Business_info_service.update_business_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_info_service.update_business_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_info_service.update_business_info.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Email_preferences_service.get_email_preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/email_preferences_service.get_email_preferences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/email_preferences_service.get_email_preferences.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Email_preferences_service.update_email_preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/email_preferences_service.update_email_preferences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/email_preferences_service.update_email_preferences.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Homepage_service.claim_homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.claim_homepage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.claim_homepage.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Homepage_service.get_homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.get_homepage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.get_homepage.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Homepage_service.unclaim_homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.unclaim_homepage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.unclaim_homepage.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Homepage_service.update_homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.update_homepage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.update_homepage.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Online_return_policy_service.get_online_return_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.get_online_return_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.get_online_return_policy.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Online_return_policy_service.list_online_return_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.list_online_return_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.list_online_return_policies.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Programs_service.disable_program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.disable_program.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.disable_program.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Programs_service.enable_program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.enable_program.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.enable_program.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Programs_service.get_program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.get_program.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.get_program.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Programs_service.list_programs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.list_programs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.list_programs.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Regions_service.create_region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.create_region.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.create_region.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Regions_service.delete_region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.delete_region.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.delete_region.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Regions_service.get_region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.get_region.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.get_region.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Regions_service.list_regions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.list_regions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.list_regions.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Regions_service.update_region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.update_region.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.update_region.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Shipping_settings_service.get_shipping_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/shipping_settings_service.get_shipping_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/shipping_settings_service.get_shipping_settings.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Shipping_settings_service.insert_shipping_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/shipping_settings_service.insert_shipping_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/shipping_settings_service.insert_shipping_settings.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Terms_of_service_agreement_state_service.get_terms_of_service_agreement_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_agreement_state_service.get_terms_of_service_agreement_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_agreement_state_service.get_terms_of_service_agreement_state.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Terms_of_service_agreement_state_service.retrieve_for_application_terms_of_service_agreement_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_agreement_state_service.retrieve_for_application_terms_of_service_agreement_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_agreement_state_service.retrieve_for_application_terms_of_service_agreement_state.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Terms_of_service_service.accept_terms_of_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.accept_terms_of_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.accept_terms_of_service.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Terms_of_service_service.get_terms_of_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.get_terms_of_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.get_terms_of_service.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Terms_of_service_service.retrieve_latest_terms_of_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.retrieve_latest_terms_of_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.retrieve_latest_terms_of_service.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| User_service.create_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.create_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.create_user.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| User_service.delete_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.delete_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.delete_user.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| User_service.get_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.get_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.get_user.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| User_service.list_users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.list_users.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.list_users.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| User_service.update_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.update_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.update_user.js,packages/google-shopping-merchant-accounts/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-accounts/samples/quickstart.js,packages/google-shopping-merchant-accounts/samples/README.md) |



The [Merchant API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-shopping/accounts@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/merchantapi/latest
[product-docs]: https://developers.google.com/merchant/api
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=merchantapi.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
