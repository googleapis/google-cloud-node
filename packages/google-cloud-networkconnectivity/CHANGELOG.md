# Changelog

## [1.5.0](https://github.com/googleapis/nodejs-network-connectivity/compare/v1.4.2...v1.5.0) (2022-02-08)


### Features

* Add LocationMetadata message feat: Add RoutingVPC.required_for_new_site_to_site_data_transfer_spokes field docs: Update comments to reflect that spokes can now be created with data transfer disabled ([#114](https://github.com/googleapis/nodejs-network-connectivity/issues/114)) ([4cbecd9](https://github.com/googleapis/nodejs-network-connectivity/commit/4cbecd92941e66f1ba7f72879a3b36e23b4b4de2))

### [1.4.2](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.4.1...v1.4.2) (2021-11-23)


### Bug Fixes

* Mark a couple networkconnectivity API fields as required, to match implemented behavior ([308e54f](https://www.github.com/googleapis/nodejs-network-connectivity/commit/308e54fbb9785ac4c77afd833f05c9f9683211ea))

### [1.4.1](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.4.0...v1.4.1) (2021-09-08)


### Bug Fixes

* **build:** update branch to main ([#81](https://www.github.com/googleapis/nodejs-network-connectivity/issues/81)) ([7c3a917](https://www.github.com/googleapis/nodejs-network-connectivity/commit/7c3a9179e1b2a770c6cdd16d8cf935c99b5cc9eb))

## [1.4.0](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.3.0...v1.4.0) (2021-08-25)


### Features

* Add hub.routing_vpcs field docs: Specify that site_to_site_data_transfer field must be set to true ([cfc63fa](https://www.github.com/googleapis/nodejs-network-connectivity/commit/cfc63fa4dcb74f99d0dae8df45530a1139ac7c36))
* Remove ActivateSpoke and DeactivateSpoke methods ([#78](https://www.github.com/googleapis/nodejs-network-connectivity/issues/78)) ([cfc63fa](https://www.github.com/googleapis/nodejs-network-connectivity/commit/cfc63fa4dcb74f99d0dae8df45530a1139ac7c36))

## [1.3.0](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.2.1...v1.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#76](https://www.github.com/googleapis/nodejs-network-connectivity/issues/76)) ([9ef53f9](https://www.github.com/googleapis/nodejs-network-connectivity/commit/9ef53f9ecd0fc572824984b9f948a7919384ffe8))

### [1.2.1](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.2.0...v1.2.1) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#74](https://www.github.com/googleapis/nodejs-network-connectivity/issues/74)) ([e8c6f45](https://www.github.com/googleapis/nodejs-network-connectivity/commit/e8c6f45241e83e35dfddb22c708336b1d2e1c0a2))

## [1.2.0](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.6...v1.2.0) (2021-07-30)


### Features

* Add files for Network Connectivity v1 API. ([#68](https://www.github.com/googleapis/nodejs-network-connectivity/issues/68)) ([5028509](https://www.github.com/googleapis/nodejs-network-connectivity/commit/5028509d9a0ec649596b11a60906d23e68ff684d))

### [1.1.6](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.5...v1.1.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#64](https://www.github.com/googleapis/nodejs-network-connectivity/issues/64)) ([dea7b0e](https://www.github.com/googleapis/nodejs-network-connectivity/commit/dea7b0e623a99483d05fec6a1b7ea422f686e86c))

### [1.1.5](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.4...v1.1.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#62](https://www.github.com/googleapis/nodejs-network-connectivity/issues/62)) ([7156523](https://www.github.com/googleapis/nodejs-network-connectivity/commit/7156523ebe8d49457d2d57b77db048ce3ab47d4f))

### [1.1.4](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.3...v1.1.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#59](https://www.github.com/googleapis/nodejs-network-connectivity/issues/59)) ([3f81f41](https://www.github.com/googleapis/nodejs-network-connectivity/commit/3f81f4139e316a97a76b5482478d44d5a8cc173a))

### [1.1.3](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.2...v1.1.3) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#54](https://www.github.com/googleapis/nodejs-network-connectivity/issues/54)) ([598fb23](https://www.github.com/googleapis/nodejs-network-connectivity/commit/598fb232c03e46a169b898be134261eed6948c97))

### [1.1.2](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.1...v1.1.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#47](https://www.github.com/googleapis/nodejs-network-connectivity/issues/47)) ([bc0944e](https://www.github.com/googleapis/nodejs-network-connectivity/commit/bc0944e2320a10abc9e2a8bb36ff48bff904c9c3))

### [1.1.1](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#39](https://www.github.com/googleapis/nodejs-network-connectivity/issues/39)) ([2564f8e](https://www.github.com/googleapis/nodejs-network-connectivity/commit/2564f8e86d03e6c4b98f46c8b9ed2be35ad6550a))
* use require() to load JSON protos ([#42](https://www.github.com/googleapis/nodejs-network-connectivity/issues/42)) ([9632da3](https://www.github.com/googleapis/nodejs-network-connectivity/commit/9632da36d550a4775b34d4ab54300eae00960b41))

## [1.1.0](https://www.github.com/googleapis/nodejs-network-connectivity/compare/v1.0.0...v1.1.0) (2021-03-02)


### Features

* Add state field in resources docs: Minor changes ([#11](https://www.github.com/googleapis/nodejs-network-connectivity/issues/11)) ([22193b9](https://www.github.com/googleapis/nodejs-network-connectivity/commit/22193b9cb8e767f0b93a17c353f4cb1b38acf317))

## 1.0.0 (2021-02-16)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add initial samples and tests ([#2](https://www.github.com/googleapis/nodejs-network-connectivity/issues/2)) ([c94271a](https://www.github.com/googleapis/nodejs-network-connectivity/commit/c94271a424a855cb085aeb2874f7e8bf2edc84a1))
* initial stub of library ([c1d7ea0](https://www.github.com/googleapis/nodejs-network-connectivity/commit/c1d7ea0d5ae0b2f816c340d46b508a6eb33e7d83))
