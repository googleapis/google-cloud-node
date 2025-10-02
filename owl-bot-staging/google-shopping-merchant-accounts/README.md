[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Merchant API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-shopping/accounts.svg)](https://www.npmjs.org/package/@google-shopping/accounts)

Merchant API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Merchant API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/accounts/latest)
* [Merchant API Documentation](https://developers.google.com/merchant/api)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

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

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| list account issues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_issue_service.list_account_issues.js) |
| get account relationship | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_relationships_service.get_account_relationship.js) |
| list account relationships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_relationships_service.list_account_relationships.js) |
| update account relationship | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_relationships_service.update_account_relationship.js) |
| approve account service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_services_service.approve_account_service.js) |
| get account service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_services_service.get_account_service.js) |
| list account services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_services_service.list_account_services.js) |
| propose account service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_services_service.propose_account_service.js) |
| reject account service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/account_services_service.reject_account_service.js) |
| create and configure account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/accounts_service.create_and_configure_account.js) |
| delete account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/accounts_service.delete_account.js) |
| get account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/accounts_service.get_account.js) |
| list accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/accounts_service.list_accounts.js) |
| list sub accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/accounts_service.list_sub_accounts.js) |
| update account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/accounts_service.update_account.js) |
| get autofeed settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/autofeed_settings_service.get_autofeed_settings.js) |
| update autofeed settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/autofeed_settings_service.update_autofeed_settings.js) |
| get automatic improvements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/automatic_improvements_service.get_automatic_improvements.js) |
| update automatic improvements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/automatic_improvements_service.update_automatic_improvements.js) |
| get business identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/business_identity_service.get_business_identity.js) |
| update business identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/business_identity_service.update_business_identity.js) |
| get business info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/business_info_service.get_business_info.js) |
| update business info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/business_info_service.update_business_info.js) |
| create checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/checkout_settings_service.create_checkout_settings.js) |
| delete checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/checkout_settings_service.delete_checkout_settings.js) |
| get checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/checkout_settings_service.get_checkout_settings.js) |
| update checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/checkout_settings_service.update_checkout_settings.js) |
| get developer registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/developer_registration_service.get_developer_registration.js) |
| register gcp | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/developer_registration_service.register_gcp.js) |
| unregister gcp | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/developer_registration_service.unregister_gcp.js) |
| get email preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/email_preferences_service.get_email_preferences.js) |
| update email preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/email_preferences_service.update_email_preferences.js) |
| link gbp account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/gbp_accounts_service.link_gbp_account.js) |
| list gbp accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/gbp_accounts_service.list_gbp_accounts.js) |
| claim homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/homepage_service.claim_homepage.js) |
| get homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/homepage_service.get_homepage.js) |
| unclaim homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/homepage_service.unclaim_homepage.js) |
| update homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/homepage_service.update_homepage.js) |
| find lfp providers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/lfp_providers_service.find_lfp_providers.js) |
| link lfp provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/lfp_providers_service.link_lfp_provider.js) |
| create omnichannel setting | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/omnichannel_settings_service.create_omnichannel_setting.js) |
| get omnichannel setting | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/omnichannel_settings_service.get_omnichannel_setting.js) |
| list omnichannel settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/omnichannel_settings_service.list_omnichannel_settings.js) |
| request inventory verification | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/omnichannel_settings_service.request_inventory_verification.js) |
| update omnichannel setting | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/omnichannel_settings_service.update_omnichannel_setting.js) |
| create online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/online_return_policy_service.create_online_return_policy.js) |
| delete online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/online_return_policy_service.delete_online_return_policy.js) |
| get online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/online_return_policy_service.get_online_return_policy.js) |
| list online return policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/online_return_policy_service.list_online_return_policies.js) |
| disable program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/programs_service.disable_program.js) |
| enable program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/programs_service.enable_program.js) |
| get program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/programs_service.get_program.js) |
| list programs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/programs_service.list_programs.js) |
| batch create regions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.batch_create_regions.js) |
| batch delete regions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.batch_delete_regions.js) |
| batch update regions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.batch_update_regions.js) |
| create region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.create_region.js) |
| delete region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.delete_region.js) |
| get region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.get_region.js) |
| list regions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.list_regions.js) |
| update region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/regions_service.update_region.js) |
| get shipping settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/shipping_settings_service.get_shipping_settings.js) |
| insert shipping settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/shipping_settings_service.insert_shipping_settings.js) |
| shopping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/snippet_metadata_google.shopping.merchant.accounts.v1.json) |
| get terms of service agreement state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/terms_of_service_agreement_state_service.get_terms_of_service_agreement_state.js) |
| retrieve for application terms of service agreement state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/terms_of_service_agreement_state_service.retrieve_for_application_terms_of_service_agreement_state.js) |
| accept terms of service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/terms_of_service_service.accept_terms_of_service.js) |
| get terms of service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/terms_of_service_service.get_terms_of_service.js) |
| retrieve latest terms of service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/terms_of_service_service.retrieve_latest_terms_of_service.js) |
| create user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/user_service.create_user.js) |
| delete user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/user_service.delete_user.js) |
| get user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/user_service.get_user.js) |
| list users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/user_service.list_users.js) |
| update user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1/user_service.update_user.js) |
| list account issues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_issue_service.list_account_issues.js) |
| get account tax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.get_account_tax.js) |
| list account tax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.list_account_tax.js) |
| update account tax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/account_tax_service.update_account_tax.js) |
| create and configure account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.create_and_configure_account.js) |
| delete account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.delete_account.js) |
| get account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.get_account.js) |
| list accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.list_accounts.js) |
| list sub accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.list_sub_accounts.js) |
| update account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/accounts_service.update_account.js) |
| get autofeed settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/autofeed_settings_service.get_autofeed_settings.js) |
| update autofeed settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/autofeed_settings_service.update_autofeed_settings.js) |
| get automatic improvements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/automatic_improvements_service.get_automatic_improvements.js) |
| update automatic improvements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/automatic_improvements_service.update_automatic_improvements.js) |
| get business identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_identity_service.get_business_identity.js) |
| update business identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_identity_service.update_business_identity.js) |
| get business info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_info_service.get_business_info.js) |
| update business info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/business_info_service.update_business_info.js) |
| create checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/checkout_settings_service.create_checkout_settings.js) |
| delete checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/checkout_settings_service.delete_checkout_settings.js) |
| get checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/checkout_settings_service.get_checkout_settings.js) |
| update checkout settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/checkout_settings_service.update_checkout_settings.js) |
| get email preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/email_preferences_service.get_email_preferences.js) |
| update email preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/email_preferences_service.update_email_preferences.js) |
| link gbp account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/gbp_accounts_service.link_gbp_account.js) |
| list gbp accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/gbp_accounts_service.list_gbp_accounts.js) |
| claim homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.claim_homepage.js) |
| get homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.get_homepage.js) |
| unclaim homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.unclaim_homepage.js) |
| update homepage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/homepage_service.update_homepage.js) |
| find lfp providers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/lfp_providers_service.find_lfp_providers.js) |
| link lfp provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/lfp_providers_service.link_lfp_provider.js) |
| create omnichannel setting | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/omnichannel_settings_service.create_omnichannel_setting.js) |
| get omnichannel setting | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/omnichannel_settings_service.get_omnichannel_setting.js) |
| list omnichannel settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/omnichannel_settings_service.list_omnichannel_settings.js) |
| request inventory verification | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/omnichannel_settings_service.request_inventory_verification.js) |
| update omnichannel setting | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/omnichannel_settings_service.update_omnichannel_setting.js) |
| create online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.create_online_return_policy.js) |
| delete online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.delete_online_return_policy.js) |
| get online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.get_online_return_policy.js) |
| list online return policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.list_online_return_policies.js) |
| update online return policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/online_return_policy_service.update_online_return_policy.js) |
| disable program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.disable_program.js) |
| enable program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.enable_program.js) |
| get program | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.get_program.js) |
| list programs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/programs_service.list_programs.js) |
| create region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.create_region.js) |
| delete region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.delete_region.js) |
| get region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.get_region.js) |
| list regions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.list_regions.js) |
| update region | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/regions_service.update_region.js) |
| get shipping settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/shipping_settings_service.get_shipping_settings.js) |
| insert shipping settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/shipping_settings_service.insert_shipping_settings.js) |
| shopping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/snippet_metadata_google.shopping.merchant.accounts.v1beta.json) |
| get terms of service agreement state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_agreement_state_service.get_terms_of_service_agreement_state.js) |
| retrieve for application terms of service agreement state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_agreement_state_service.retrieve_for_application_terms_of_service_agreement_state.js) |
| accept terms of service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.accept_terms_of_service.js) |
| get terms of service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.get_terms_of_service.js) |
| retrieve latest terms of service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/terms_of_service_service.retrieve_latest_terms_of_service.js) |
| create user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.create_user.js) |
| delete user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.delete_user.js) |
| get user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.get_user.js) |
| list users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.list_users.js) |
| update user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples/generated/v1beta/user_service.update_user.js) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=merchantapi.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-accounts
