[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Address Validation API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-addressvalidation)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/addressvalidation.svg)](https://www.npmjs.org/package/@googlemaps/addressvalidation)




 client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-addressvalidation/CHANGELOG.md).

* [Address Validation API Node.js Client API Reference][client-docs]
* [Address Validation API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-maps-addressvalidation](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-addressvalidation)

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
1.  [Enable the Address Validation API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @googlemaps/addressvalidation
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
 *  Required. The address being validated. Unformatted addresses should be
 *  submitted via `address_lines` google.type.PostalAddress.address_lines.
 *  The total length of the fields in this input must not exceed 300
 *  characters.
 *  Supported regions can be found in the
 *  FAQ (https://developers.google.com/maps/documentation/address-validation/faq#which_regions_are_currently_supported).
 *  The language_code google.type.PostalAddress.language_code  value in the
 *  input address is reserved for future uses and is ignored today. The
 *  validated address result will be populated based on the preferred language
 *  for the given address, as identified by the system.
 *  The Address Validation API ignores the values in
 *  recipients google.type.PostalAddress.recipients  and
 *  organization google.type.PostalAddress.organization. Any values in those
 *  fields will be discarded and not returned. Please do not set them.
 */
// const address = {}
/**
 *  This field must be empty for the first address validation request. If
 *  more requests are necessary to fully validate a single address (for
 *  example if the changes the user makes after the initial validation need to
 *  be re-validated), then each followup request must populate this field with
 *  the
 *  response_id google.maps.addressvalidation.v1.ValidateAddressResponse.response_id
 *  from the very first response in the validation sequence.
 */
// const previousResponseId = 'abc123'
/**
 *  Enables USPS CASS compatible mode. This affects _only_ the
 *  google.maps.addressvalidation.v1.ValidationResult.usps_data  field of
 *  google.maps.addressvalidation.v1.ValidationResult. Note: for USPS CASS
 *  enabled requests for addresses in Puerto Rico, a
 *  google.type.PostalAddress.region_code  of the `address` must be provided
 *  as "PR", or an google.type.PostalAddress.administrative_area  of the
 *  `address` must be provided as "Puerto Rico" (case-insensitive) or "PR".
 *  It's recommended to use a componentized `address`, or alternatively specify
 *  at least two google.type.PostalAddress.address_lines  where the first line
 *  contains the street number and name and the second line contains the city,
 *  state, and zip code.
 */
// const enableUspsCass = true

// Imports the Addressvalidation library
// eslint-disable-next-line node/no-missing-require
const {AddressValidationClient} = require('@googlemaps/addressvalidation').v1;

// Instantiates a client
const addressvalidationClient = new AddressValidationClient();

async function callValidateAddress() {
  // Construct request
  const request = {
    address: {
      regionCode: 'US',
      addressLines: ['1600 Amphitheatre Pkwy', 'Mountain View CA 94040'],
    },
  };

  // Run request
  const response = await addressvalidationClient.validateAddress(request);
  console.log(response);
}

callValidateAddress();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-addressvalidation/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Address_validation.provide_validation_feedback | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-addressvalidation/samples/generated/v1/address_validation.provide_validation_feedback.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-addressvalidation/samples/generated/v1/address_validation.provide_validation_feedback.js,packages/google-maps-addressvalidation/samples/README.md) |
| Address_validation.validate_address | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-addressvalidation/samples/generated/v1/address_validation.validate_address.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-addressvalidation/samples/generated/v1/address_validation.validate_address.js,packages/google-maps-addressvalidation/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-addressvalidation/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-addressvalidation/samples/quickstart.js,packages/google-maps-addressvalidation/samples/README.md) |



The [Address Validation API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @googlemaps/addressvalidation@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/addressvalidation/latest
[product-docs]: https://mapsplatform.google.com/maps-products/address-validation/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=addressvalidation.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
