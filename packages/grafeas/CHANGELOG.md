# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/grafeas?activeTab=versions

## [5.5.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v5.4.0...grafeas-v5.5.0) (2024-08-19)


### Features

* [grafeas] A new field `version` is added to message `.grafeas.v1.ComplianceOccurrence` ([#5585](https://github.com/googleapis/google-cloud-node/issues/5585)) ([f9cfc54](https://github.com/googleapis/google-cloud-node/commit/f9cfc5463b02af3296df3e647633597730122ae8))

## [5.4.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v5.3.0...grafeas-v5.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [5.3.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v5.2.0...grafeas-v5.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5193](https://github.com/googleapis/google-cloud-node/issues/5193)) ([333b409](https://github.com/googleapis/google-cloud-node/commit/333b40951a255ecfab249bd6e7ace5877270ec85))

## [5.2.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v5.1.0...grafeas-v5.2.0) (2024-03-23)


### Features

* [grafeas] A new field `in_toto_slsa_provenance_v1` is added to message `BuildOccurrence` ([#5133](https://github.com/googleapis/google-cloud-node/issues/5133)) ([31c36a8](https://github.com/googleapis/google-cloud-node/commit/31c36a88987e2dd68c70fb6220b5bf1311239d2d))

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v5.0.1...grafeas-v5.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5029](https://github.com/googleapis/google-cloud-node/issues/5029)) ([09e59ad](https://github.com/googleapis/google-cloud-node/commit/09e59ad6e34001a33d01894ccd5a0643f1a84883))

## [5.0.1](https://github.com/googleapis/google-cloud-node/compare/grafeas-v5.0.0...grafeas-v5.0.1) (2023-09-06)


### Bug Fixes

* [storagetransfer,grafeas] simplify logic for HTTP/1.1 REST fallback option ([#4590](https://github.com/googleapis/google-cloud-node/issues/4590)) ([14fffdf](https://github.com/googleapis/google-cloud-node/commit/14fffdf46568466e9ae02d5585da9721aa9ad83c))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v4.5.0...grafeas-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4466](https://github.com/googleapis/google-cloud-node/issues/4466)) ([fa1520c](https://github.com/googleapis/google-cloud-node/commit/fa1520c3eb526efd3523d9cea349ed31683d5889))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.5.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v4.4.1...grafeas-v4.5.0) (2023-04-24)


### Features

* [grafeas] add enum for grafeas v1 cvss to support both cvss v2 and v3 ([#4167](https://github.com/googleapis/google-cloud-node/issues/4167)) ([d9cf3bd](https://github.com/googleapis/google-cloud-node/commit/d9cf3bd09e06f53bfe650619df5c039a2b918af9))

## [4.4.1](https://github.com/googleapis/google-cloud-node/compare/grafeas-v4.4.0...grafeas-v4.4.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.4.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v4.3.0...grafeas-v4.4.0) (2023-03-28)


### Features

* [grafeas] Add VULNERABILITY_ASSESSMENT Note type to grafeas v1 API, adds Vex_Assessment derived from the Note to resources' occurrences, VEX notes now be written to add CVE assessments ([#4069](https://github.com/googleapis/google-cloud-node/issues/4069)) ([c0d401d](https://github.com/googleapis/google-cloud-node/commit/c0d401de0df43b36c4b2d1511c436eb90a7cf446))

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/grafeas-v4.2.2...grafeas-v4.3.0) (2023-03-06)


### Features

* [grafeas] Import of Grafeas from Github ([#4049](https://github.com/googleapis/google-cloud-node/issues/4049)) ([146700d](https://github.com/googleapis/google-cloud-node/commit/146700d2fa0d5ee8fc7a262700e0819b50ede21c))

## [4.2.2](https://github.com/googleapis/google-cloud-node/compare/grafeas-v4.2.1...grafeas-v4.2.2) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3991](https://github.com/googleapis/google-cloud-node/issues/3991)) ([c6326d9](https://github.com/googleapis/google-cloud-node/commit/c6326d90abb9b649b25052e4afe7b3eb0f65bcb4))

## [4.2.1](https://github.com/googleapis/nodejs-grafeas/compare/v4.2.0...v4.2.1) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#374](https://github.com/googleapis/nodejs-grafeas/issues/374)) ([620c235](https://github.com/googleapis/nodejs-grafeas/commit/620c23512940c1d18de7d5424ea2a765e13286f3))
* Regenerated protos JS and TS definitions ([#378](https://github.com/googleapis/nodejs-grafeas/issues/378)) ([e6ec5ef](https://github.com/googleapis/nodejs-grafeas/commit/e6ec5efd1b20b0f1345fed651ce6f70c2af15e64))

## [4.2.0](https://github.com/googleapis/nodejs-grafeas/compare/v4.1.2...v4.2.0) (2022-10-06)


### Features

* Add new analysis status and cvss version fields ([#370](https://github.com/googleapis/nodejs-grafeas/issues/370)) ([96d287a](https://github.com/googleapis/nodejs-grafeas/commit/96d287ac6e62709a06aec118306f4c9f1b42f5d6))

## [4.1.2](https://github.com/googleapis/nodejs-grafeas/compare/v4.1.1...v4.1.2) (2022-09-22)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#365](https://github.com/googleapis/nodejs-grafeas/issues/365)) ([31ddb47](https://github.com/googleapis/nodejs-grafeas/commit/31ddb47402a6cd1dc56170d6a61954b46de0678e))

## [4.1.1](https://github.com/googleapis/nodejs-grafeas/compare/v4.1.0...v4.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#364](https://github.com/googleapis/nodejs-grafeas/issues/364)) ([2029b14](https://github.com/googleapis/nodejs-grafeas/commit/2029b145ec102e2852bf91a2e529cdee7fcd4275))
* Better support for fallback mode ([#358](https://github.com/googleapis/nodejs-grafeas/issues/358)) ([57c5c7f](https://github.com/googleapis/nodejs-grafeas/commit/57c5c7f023fafa33b041aff2031b0a1c381bf4d0))
* Change import long to require ([#359](https://github.com/googleapis/nodejs-grafeas/issues/359)) ([9ad8458](https://github.com/googleapis/nodejs-grafeas/commit/9ad8458e976f178be462bfe60dd393816f1a8a77))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-grafeas/issues/1553)) ([#363](https://github.com/googleapis/nodejs-grafeas/issues/363)) ([7655119](https://github.com/googleapis/nodejs-grafeas/commit/76551192a851920e4d92d93cd2ef5687504c91e1))

## [4.1.0](https://github.com/googleapis/nodejs-grafeas/compare/v4.0.0...v4.1.0) (2022-07-05)


### Features

* support regapic LRO ([0b9a987](https://github.com/googleapis/nodejs-grafeas/commit/0b9a9870ddccd9ef9631dd01c2a73d260317d301))

## [4.0.0](https://github.com/googleapis/nodejs-grafeas/compare/v3.6.1...v4.0.0) (2022-06-10)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#347)

### Features

* Import of Grafeas from Github ([#351](https://github.com/googleapis/nodejs-grafeas/issues/351)) ([8aa9f5d](https://github.com/googleapis/nodejs-grafeas/commit/8aa9f5dd79a6c67e4ec062ceff5d6efca7673a15))


### Build System

* update library to use Node 12 ([#347](https://github.com/googleapis/nodejs-grafeas/issues/347)) ([31bd179](https://github.com/googleapis/nodejs-grafeas/commit/31bd179301b3096929a4ce4ab57b27cbb538e8eb))

### [3.6.1](https://github.com/googleapis/nodejs-grafeas/compare/v3.6.0...v3.6.1) (2022-03-14)


### Bug Fixes

* Make the library compatible with the latest version of the vulnerability occurrence proto ([4268b06](https://github.com/googleapis/nodejs-grafeas/commit/4268b06cd0e34faaaeb7e806fbb22d8906c653de))

## [3.6.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.5.0...v3.6.0) (2021-11-03)


### Features

* Updating the grafeas protos to include compliance and intoto attestation protos ([#304](https://www.github.com/googleapis/nodejs-grafeas/issues/304)) ([858689d](https://www.github.com/googleapis/nodejs-grafeas/commit/858689d0c2d3e387b1e0a154fd4ff1a22b127859))

## [3.5.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.6...v3.5.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#289](https://www.github.com/googleapis/nodejs-grafeas/issues/289)) ([7a05903](https://www.github.com/googleapis/nodejs-grafeas/commit/7a059030dcf1d392b62d9f31de4408031124c333))

### [3.4.6](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.5...v3.4.6) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#286](https://www.github.com/googleapis/nodejs-grafeas/issues/286)) ([a59ed5b](https://www.github.com/googleapis/nodejs-grafeas/commit/a59ed5b2fa7858d80d14e8eb453fe80ebf9d68ae))
* **deps:** google-gax v2.24.1 ([#288](https://www.github.com/googleapis/nodejs-grafeas/issues/288)) ([27b9979](https://www.github.com/googleapis/nodejs-grafeas/commit/27b9979f0777f147ba473ef0b221ad45d9e49323))

### [3.4.5](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.4...v3.4.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#278](https://www.github.com/googleapis/nodejs-grafeas/issues/278)) ([95ff28c](https://www.github.com/googleapis/nodejs-grafeas/commit/95ff28cbde6a6b1ff89831d15ee8b0e370164109))

### [3.4.4](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.3...v3.4.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#276](https://www.github.com/googleapis/nodejs-grafeas/issues/276)) ([77c20ba](https://www.github.com/googleapis/nodejs-grafeas/commit/77c20baf72fb222bad038dd61c14f8a16e1f9052))

### [3.4.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.2...v3.4.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#274](https://www.github.com/googleapis/nodejs-grafeas/issues/274)) ([0555a47](https://www.github.com/googleapis/nodejs-grafeas/commit/0555a47a964fc89ef7c43f14523f2429536018f0))
* make request optional in all cases ([#270](https://www.github.com/googleapis/nodejs-grafeas/issues/270)) ([4be58c5](https://www.github.com/googleapis/nodejs-grafeas/commit/4be58c5a6260e02bc3f85ac606449ef27a53ebc4))

### [3.4.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.1...v3.4.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#262](https://www.github.com/googleapis/nodejs-grafeas/issues/262)) ([2713381](https://www.github.com/googleapis/nodejs-grafeas/commit/27133818c3b6ef89ef5bb53a001af7b6634f60b0))

### [3.4.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.0...v3.4.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#253](https://www.github.com/googleapis/nodejs-grafeas/issues/253)) ([2bd6c8d](https://www.github.com/googleapis/nodejs-grafeas/commit/2bd6c8d88cdc36bd18f71c407816af7fb62da4ed))
* use require() to load JSON protos ([#256](https://www.github.com/googleapis/nodejs-grafeas/issues/256)) ([c5a5925](https://www.github.com/googleapis/nodejs-grafeas/commit/c5a5925b396de53e147e192880ff8639eb315474))

## [3.4.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.3...v3.4.0) (2021-01-09)


### Features

* adds style enumeration ([#223](https://www.github.com/googleapis/nodejs-grafeas/issues/223)) ([c1318e4](https://www.github.com/googleapis/nodejs-grafeas/commit/c1318e483c8ed39ed45d9a5391c075131ef63a71))

### [3.3.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.2...v3.3.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#217](https://www.github.com/googleapis/nodejs-grafeas/issues/217)) ([9fe7715](https://www.github.com/googleapis/nodejs-grafeas/commit/9fe77152c54eb74f40cbfc9ba42f1a497a1642fb))

### [3.3.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.1...v3.3.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#213](https://www.github.com/googleapis/nodejs-grafeas/issues/213)) ([4e2cada](https://www.github.com/googleapis/nodejs-grafeas/commit/4e2cadaed5cc892ca6ae1318fa82146a4f1160dc))

### [3.3.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.0...v3.3.1) (2020-08-21)


### Bug Fixes

* update descriptor logic ([#188](https://www.github.com/googleapis/nodejs-grafeas/issues/188)) ([df14677](https://www.github.com/googleapis/nodejs-grafeas/commit/df146775dc37b2de99c7bb44516c8163669da795))
* use gax protobuf reference ([#187](https://www.github.com/googleapis/nodejs-grafeas/issues/187)) ([c5f2d35](https://www.github.com/googleapis/nodejs-grafeas/commit/c5f2d353e61be0607fc35924cd7348ea076c102c))

## [3.3.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.2.0...v3.3.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#165](https://www.github.com/googleapis/nodejs-grafeas/issues/165)) ([b65bb34](https://www.github.com/googleapis/nodejs-grafeas/commit/b65bb3426c839f6514826d87c7a65ae7dcb85b8d))


### Bug Fixes

* handle fallback option properly ([#169](https://www.github.com/googleapis/nodejs-grafeas/issues/169)) ([466c05c](https://www.github.com/googleapis/nodejs-grafeas/commit/466c05ce28351b276a6a890997a8c1da743be650))

## [3.2.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.1.0...v3.2.0) (2020-06-04)


### Features

* add proto3Optional field ([#161](https://www.github.com/googleapis/nodejs-grafeas/issues/161)) ([1ff0ef4](https://www.github.com/googleapis/nodejs-grafeas/commit/1ff0ef472b1907b2ca0e2b2efc1f5f2087e9d747))

## [3.1.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.0.0...v3.1.0) (2020-05-08)


### Features

* change export in protos.js to google_cloud_grafeas_3_0_0_protos ([#150](https://www.github.com/googleapis/nodejs-grafeas/issues/150)) ([364f9c9](https://www.github.com/googleapis/nodejs-grafeas/commit/364f9c9c012bbd5bf60d6cd3288b06ba7a46155b))


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.8.0 ([#143](https://www.github.com/googleapis/nodejs-grafeas/issues/143)) ([13be859](https://www.github.com/googleapis/nodejs-grafeas/commit/13be859361752c50a08b86614320fc8ef61ff125))
* regenerate unit tests ([#157](https://www.github.com/googleapis/nodejs-grafeas/issues/157)) ([4d05016](https://www.github.com/googleapis/nodejs-grafeas/commit/4d05016a71c6e1244fee1c189ff799d85a634636))
* synth.py clean up for multiple version ([#158](https://www.github.com/googleapis/nodejs-grafeas/issues/158)) ([526d686](https://www.github.com/googleapis/nodejs-grafeas/commit/526d6862a8d80453d55c2577555af15e9e0c7f55))

## [3.0.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.7.0...v3.0.0) (2020-04-12)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#130](https://www.github.com/googleapis/nodejs-grafeas/issues/130)) ([74d809b](https://www.github.com/googleapis/nodejs-grafeas/commit/74d809b9ede6edd844cef6db0315383df32671f5))


### Bug Fixes

* export explicit version from protos.js ([#135](https://www.github.com/googleapis/nodejs-grafeas/issues/135)) ([289f055](https://www.github.com/googleapis/nodejs-grafeas/commit/289f055a2375db09e9199c0e7534771facaef146))
* remove eslint, update gax, fix generated protos, run the generator ([#139](https://www.github.com/googleapis/nodejs-grafeas/issues/139)) ([86c96aa](https://www.github.com/googleapis/nodejs-grafeas/commit/86c96aaa3507e6d76b75042aac945838db335eec))

## [2.7.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.6.0...v2.7.0) (2020-03-06)


### Features

* deferred client initialization ([#115](https://www.github.com/googleapis/nodejs-grafeas/issues/115)) ([dae70de](https://www.github.com/googleapis/nodejs-grafeas/commit/dae70dee2844a14b12fa64ed2ca530613d6c7e16))

## [2.6.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.5.2...v2.6.0) (2020-03-03)


### Features

* export protos in src/index.ts ([09db103](https://www.github.com/googleapis/nodejs-grafeas/commit/09db103ae572a97031984cf07fc444c586ed2fd2))


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([c44a06b](https://www.github.com/googleapis/nodejs-grafeas/commit/c44a06baf2c7fc390b14af2596fb5fe03fde54a7))
* **deps:** update dependency @grpc/grpc-js to ^0.7.0 ([#114](https://www.github.com/googleapis/nodejs-grafeas/issues/114)) ([7976bef](https://www.github.com/googleapis/nodejs-grafeas/commit/7976bef684efe1eb8ea4a02851df984b1340f0e4))

### [2.5.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.5.1...v2.5.2) (2020-02-01)


### Bug Fixes

* update resource references in protos ([8252114](https://www.github.com/googleapis/nodejs-grafeas/commit/8252114799a771c2e5b91cda2912a7e87f1f579a))

### [2.5.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.5.0...v2.5.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([7917d43](https://www.github.com/googleapis/nodejs-grafeas/commit/7917d43c82c6c43d5ef4a3ec99f934fba6f89928))

## [2.5.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.4.0...v2.5.0) (2020-01-25)


### Features

* move to typescript code generation ([#83](https://www.github.com/googleapis/nodejs-grafeas/issues/83)) ([7c921ab](https://www.github.com/googleapis/nodejs-grafeas/commit/7c921ab4e30bb5c27379e226e24d88d4a93c8413))

## [2.4.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.3...v2.4.0) (2020-01-09)


### Features

* proto update: UpgradeNotes added ([86f2d90](https://www.github.com/googleapis/nodejs-grafeas/commit/86f2d90ea924f6067e08299635e051c5dd03a1a2))

### [2.3.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.2...v2.3.3) (2020-01-02)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([e05d7ff](https://www.github.com/googleapis/nodejs-grafeas/commit/e05d7ff66b12d2b14a7e65fba355f64f5ce578f0))
* **docs:** bump release level to GA ([#64](https://www.github.com/googleapis/nodejs-grafeas/issues/64)) ([7dcae38](https://www.github.com/googleapis/nodejs-grafeas/commit/7dcae38bf3dd3f52656c98b7f342a068e0bc4577))

### [2.3.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.1...v2.3.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#60](https://www.github.com/googleapis/nodejs-grafeas/issues/60)) ([668c16f](https://www.github.com/googleapis/nodejs-grafeas/commit/668c16f5c2773ebd580930d3e97c8c3328852688))

### [2.3.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.0...v2.3.1) (2019-11-08)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#53](https://www.github.com/googleapis/nodejs-grafeas/issues/53)) ([6d45413](https://www.github.com/googleapis/nodejs-grafeas/commit/6d4541373dbc0ca6da27903666ad1ec8d1fbefed))

## [2.3.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.2.0...v2.3.0) (2019-10-09)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.6.0 ([#42](https://www.github.com/googleapis/nodejs-grafeas/issues/42)) ([5dd652e](https://www.github.com/googleapis/nodejs-grafeas/commit/5dd652e))
* use compatible version of google-gax ([e241c53](https://www.github.com/googleapis/nodejs-grafeas/commit/e241c53))


### Features

* .d.ts for protos ([#44](https://www.github.com/googleapis/nodejs-grafeas/issues/44)) ([acccd3c](https://www.github.com/googleapis/nodejs-grafeas/commit/acccd3c))

## [2.2.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.5...v2.2.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([c79eae1](https://www.github.com/googleapis/nodejs-grafeas/commit/c79eae1))

### [2.1.5](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.4...v2.1.5) (2019-08-28)


### Bug Fixes

* **docs:** stop linking reference documents to anchor ([4551cdf](https://www.github.com/googleapis/nodejs-grafeas/commit/4551cdf))

### [2.1.4](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.3...v2.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([631b896](https://www.github.com/googleapis/nodejs-grafeas/commit/631b896))

### [2.1.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.2...v2.1.3) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.5.0 ([#25](https://www.github.com/googleapis/nodejs-grafeas/issues/25)) ([d6681ea](https://www.github.com/googleapis/nodejs-grafeas/commit/d6681ea))

### [2.1.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.1...v2.1.2) (2019-06-26)


### Bug Fixes

* changes to default values in vulnerability.proto ([de6dcda](https://www.github.com/googleapis/nodejs-grafeas/commit/de6dcda))
* **docs:** link to reference docs section on googleapis.dev ([#23](https://www.github.com/googleapis/nodejs-grafeas/issues/23)) ([4e8f852](https://www.github.com/googleapis/nodejs-grafeas/commit/4e8f852))

### [2.1.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.0...v2.1.1) (2019-06-19)


### Bug Fixes

* **revert:** revert exposing NoteKind enum; automate jsdoc fix ([#19](https://www.github.com/googleapis/nodejs-grafeas/issues/19)) ([4366cac](https://www.github.com/googleapis/nodejs-grafeas/commit/4366cac))

## [2.1.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.0.0...v2.1.0) (2019-06-19)


### Features

* add NoteKind enum ([#17](https://www.github.com/googleapis/nodejs-grafeas/issues/17)) ([5738516](https://www.github.com/googleapis/nodejs-grafeas/commit/5738516))

## [2.0.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v1.0.0...v2.0.0) (2019-06-18)


### ⚠ BREAKING CHANGES

* remove build signature support (#14)

### Bug Fixes

* **docs:** move to new client docs URL ([#12](https://www.github.com/googleapis/nodejs-grafeas/issues/12)) ([12ece17](https://www.github.com/googleapis/nodejs-grafeas/commit/12ece17))


### Code Refactoring

* remove build signature support ([#14](https://www.github.com/googleapis/nodejs-grafeas/issues/14)) ([d13ec5f](https://www.github.com/googleapis/nodejs-grafeas/commit/d13ec5f))

## 1.0.0 (2019-06-06)


### Bug Fixes

* delete protos added to wrong path ([29418de](https://www.github.com/googleapis/nodejs-grafeas/commit/29418de))
* get tests passing so that we can land and release module ([#10](https://www.github.com/googleapis/nodejs-grafeas/issues/10)) ([4a0c0e4](https://www.github.com/googleapis/nodejs-grafeas/commit/4a0c0e4))


### Features

* initial implementation of library ([66f09bb](https://www.github.com/googleapis/nodejs-grafeas/commit/66f09bb))
* initial implementation of library ([#1](https://www.github.com/googleapis/nodejs-grafeas/issues/1)) ([744da47](https://www.github.com/googleapis/nodejs-grafeas/commit/744da47))
* support apiEndpoint override in client constructor ([#9](https://www.github.com/googleapis/nodejs-grafeas/issues/9)) ([25ecc0c](https://www.github.com/googleapis/nodejs-grafeas/commit/25ecc0c))
