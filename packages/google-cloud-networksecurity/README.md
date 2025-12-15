[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Network Security API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/network-security.svg)](https://www.npmjs.org/package/@google-cloud/network-security)

Network Security API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Network Security API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/networksecurity/latest)


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
1.  [Enable the Network Security API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/network-security
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| add address group items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.add_address_group_items.js) |
| clone address group items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.clone_address_group_items.js) |
| create address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.create_address_group.js) |
| delete address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.delete_address_group.js) |
| get address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.get_address_group.js) |
| list address group references | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.list_address_group_references.js) |
| list address groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.list_address_groups.js) |
| remove address group items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.remove_address_group_items.js) |
| update address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/address_group_service.update_address_group.js) |
| create authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.create_authorization_policy.js) |
| create client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.create_client_tls_policy.js) |
| create server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.create_server_tls_policy.js) |
| delete authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.delete_authorization_policy.js) |
| delete client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.delete_client_tls_policy.js) |
| delete server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.delete_server_tls_policy.js) |
| get authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.get_authorization_policy.js) |
| get client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.get_client_tls_policy.js) |
| get server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.get_server_tls_policy.js) |
| list authorization policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.list_authorization_policies.js) |
| list client tls policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.list_client_tls_policies.js) |
| list server tls policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.list_server_tls_policies.js) |
| update authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.update_authorization_policy.js) |
| update client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.update_client_tls_policy.js) |
| update server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/network_security.update_server_tls_policy.js) |
| add address group items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.add_address_group_items.js) |
| clone address group items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.clone_address_group_items.js) |
| create address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.create_address_group.js) |
| delete address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.delete_address_group.js) |
| get address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.get_address_group.js) |
| list address group references | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.list_address_group_references.js) |
| list address groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.list_address_groups.js) |
| remove address group items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.remove_address_group_items.js) |
| update address group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/organization_address_group_service.update_address_group.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1/snippet_metadata_google.cloud.networksecurity.v1.json) |
| create dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/dns_threat_detector_service.create_dns_threat_detector.js) |
| delete dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/dns_threat_detector_service.delete_dns_threat_detector.js) |
| get dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/dns_threat_detector_service.get_dns_threat_detector.js) |
| list dns threat detectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/dns_threat_detector_service.list_dns_threat_detectors.js) |
| update dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/dns_threat_detector_service.update_dns_threat_detector.js) |
| create firewall endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.create_firewall_endpoint.js) |
| create firewall endpoint association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.create_firewall_endpoint_association.js) |
| delete firewall endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.delete_firewall_endpoint.js) |
| delete firewall endpoint association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.delete_firewall_endpoint_association.js) |
| get firewall endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.get_firewall_endpoint.js) |
| get firewall endpoint association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.get_firewall_endpoint_association.js) |
| list firewall endpoint associations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.list_firewall_endpoint_associations.js) |
| list firewall endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.list_firewall_endpoints.js) |
| update firewall endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.update_firewall_endpoint.js) |
| update firewall endpoint association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/firewall_activation.update_firewall_endpoint_association.js) |
| create intercept deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.create_intercept_deployment.js) |
| create intercept deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.create_intercept_deployment_group.js) |
| create intercept endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.create_intercept_endpoint_group.js) |
| create intercept endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.create_intercept_endpoint_group_association.js) |
| delete intercept deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.delete_intercept_deployment.js) |
| delete intercept deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.delete_intercept_deployment_group.js) |
| delete intercept endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.delete_intercept_endpoint_group.js) |
| delete intercept endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.delete_intercept_endpoint_group_association.js) |
| get intercept deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.get_intercept_deployment.js) |
| get intercept deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.get_intercept_deployment_group.js) |
| get intercept endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.get_intercept_endpoint_group.js) |
| get intercept endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.get_intercept_endpoint_group_association.js) |
| list intercept deployment groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.list_intercept_deployment_groups.js) |
| list intercept deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.list_intercept_deployments.js) |
| list intercept endpoint group associations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.list_intercept_endpoint_group_associations.js) |
| list intercept endpoint groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.list_intercept_endpoint_groups.js) |
| update intercept deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.update_intercept_deployment.js) |
| update intercept deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.update_intercept_deployment_group.js) |
| update intercept endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.update_intercept_endpoint_group.js) |
| update intercept endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/intercept.update_intercept_endpoint_group_association.js) |
| create mirroring deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.create_mirroring_deployment.js) |
| create mirroring deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.create_mirroring_deployment_group.js) |
| create mirroring endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.create_mirroring_endpoint_group.js) |
| create mirroring endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.create_mirroring_endpoint_group_association.js) |
| delete mirroring deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.delete_mirroring_deployment.js) |
| delete mirroring deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.delete_mirroring_deployment_group.js) |
| delete mirroring endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.delete_mirroring_endpoint_group.js) |
| delete mirroring endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.delete_mirroring_endpoint_group_association.js) |
| get mirroring deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.get_mirroring_deployment.js) |
| get mirroring deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.get_mirroring_deployment_group.js) |
| get mirroring endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.get_mirroring_endpoint_group.js) |
| get mirroring endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.get_mirroring_endpoint_group_association.js) |
| list mirroring deployment groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.list_mirroring_deployment_groups.js) |
| list mirroring deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.list_mirroring_deployments.js) |
| list mirroring endpoint group associations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.list_mirroring_endpoint_group_associations.js) |
| list mirroring endpoint groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.list_mirroring_endpoint_groups.js) |
| update mirroring deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.update_mirroring_deployment.js) |
| update mirroring deployment group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.update_mirroring_deployment_group.js) |
| update mirroring endpoint group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.update_mirroring_endpoint_group.js) |
| update mirroring endpoint group association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/mirroring.update_mirroring_endpoint_group_association.js) |
| create authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_authorization_policy.js) |
| create authz policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_authz_policy.js) |
| create backend authentication config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_backend_authentication_config.js) |
| create client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_client_tls_policy.js) |
| create gateway security policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_gateway_security_policy.js) |
| create gateway security policy rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_gateway_security_policy_rule.js) |
| create server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_server_tls_policy.js) |
| create tls inspection policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_tls_inspection_policy.js) |
| create url list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.create_url_list.js) |
| delete authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_authorization_policy.js) |
| delete authz policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_authz_policy.js) |
| delete backend authentication config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_backend_authentication_config.js) |
| delete client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_client_tls_policy.js) |
| delete gateway security policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_gateway_security_policy.js) |
| delete gateway security policy rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_gateway_security_policy_rule.js) |
| delete server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_server_tls_policy.js) |
| delete tls inspection policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_tls_inspection_policy.js) |
| delete url list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.delete_url_list.js) |
| get authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_authorization_policy.js) |
| get authz policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_authz_policy.js) |
| get backend authentication config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_backend_authentication_config.js) |
| get client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_client_tls_policy.js) |
| get gateway security policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_gateway_security_policy.js) |
| get gateway security policy rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_gateway_security_policy_rule.js) |
| get server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_server_tls_policy.js) |
| get tls inspection policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_tls_inspection_policy.js) |
| get url list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.get_url_list.js) |
| list authorization policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_authorization_policies.js) |
| list authz policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_authz_policies.js) |
| list backend authentication configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_backend_authentication_configs.js) |
| list client tls policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_client_tls_policies.js) |
| list gateway security policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_gateway_security_policies.js) |
| list gateway security policy rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_gateway_security_policy_rules.js) |
| list server tls policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_server_tls_policies.js) |
| list tls inspection policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_tls_inspection_policies.js) |
| list url lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.list_url_lists.js) |
| update authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_authorization_policy.js) |
| update authz policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_authz_policy.js) |
| update backend authentication config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_backend_authentication_config.js) |
| update client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_client_tls_policy.js) |
| update gateway security policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_gateway_security_policy.js) |
| update gateway security policy rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_gateway_security_policy_rule.js) |
| update server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_server_tls_policy.js) |
| update tls inspection policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_tls_inspection_policy.js) |
| update url list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/network_security.update_url_list.js) |
| create security profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.create_security_profile.js) |
| create security profile group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.create_security_profile_group.js) |
| delete security profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.delete_security_profile.js) |
| delete security profile group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.delete_security_profile_group.js) |
| get security profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.get_security_profile.js) |
| get security profile group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.get_security_profile_group.js) |
| list security profile groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.list_security_profile_groups.js) |
| list security profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.list_security_profiles.js) |
| update security profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.update_security_profile.js) |
| update security profile group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/organization_security_profile_group_service.update_security_profile_group.js) |
| create partner s s e gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.create_partner_s_s_e_gateway.js) |
| delete partner s s e gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.delete_partner_s_s_e_gateway.js) |
| get partner s s e gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.get_partner_s_s_e_gateway.js) |
| get s s e gateway reference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.get_s_s_e_gateway_reference.js) |
| list partner s s e gateways | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.list_partner_s_s_e_gateways.js) |
| list s s e gateway references | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.list_s_s_e_gateway_references.js) |
| update partner s s e gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_gateway_service.update_partner_s_s_e_gateway.js) |
| create partner s s e realm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.create_partner_s_s_e_realm.js) |
| create s a c attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.create_s_a_c_attachment.js) |
| create s a c realm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.create_s_a_c_realm.js) |
| delete partner s s e realm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.delete_partner_s_s_e_realm.js) |
| delete s a c attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.delete_s_a_c_attachment.js) |
| delete s a c realm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.delete_s_a_c_realm.js) |
| get partner s s e realm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.get_partner_s_s_e_realm.js) |
| get s a c attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.get_s_a_c_attachment.js) |
| get s a c realm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.get_s_a_c_realm.js) |
| list partner s s e realms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.list_partner_s_s_e_realms.js) |
| list s a c attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.list_s_a_c_attachments.js) |
| list s a c realms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/s_s_e_realm_service.list_s_a_c_realms.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1alpha1/snippet_metadata_google.cloud.networksecurity.v1alpha1.json) |
| create dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/dns_threat_detector_service.create_dns_threat_detector.js) |
| delete dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/dns_threat_detector_service.delete_dns_threat_detector.js) |
| get dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/dns_threat_detector_service.get_dns_threat_detector.js) |
| list dns threat detectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/dns_threat_detector_service.list_dns_threat_detectors.js) |
| update dns threat detector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/dns_threat_detector_service.update_dns_threat_detector.js) |
| create authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.create_authorization_policy.js) |
| create client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.create_client_tls_policy.js) |
| create server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.create_server_tls_policy.js) |
| delete authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.delete_authorization_policy.js) |
| delete client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.delete_client_tls_policy.js) |
| delete server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.delete_server_tls_policy.js) |
| get authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.get_authorization_policy.js) |
| get client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.get_client_tls_policy.js) |
| get server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.get_server_tls_policy.js) |
| list authorization policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.list_authorization_policies.js) |
| list client tls policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.list_client_tls_policies.js) |
| list server tls policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.list_server_tls_policies.js) |
| update authorization policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.update_authorization_policy.js) |
| update client tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.update_client_tls_policy.js) |
| update server tls policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/network_security.update_server_tls_policy.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples/generated/v1beta1/snippet_metadata_google.cloud.networksecurity.v1beta1.json) |


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
For example, `npm install @google-cloud/network-security@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=networksecurity.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networksecurity
