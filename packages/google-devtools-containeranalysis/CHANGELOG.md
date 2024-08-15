# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/containeranalysis?activeTab=versions

## [5.6.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.5.0...containeranalysis-v5.6.0) (2024-08-09)


### Features

* [containeranalysis] A new field `version` is added to message `.grafeas.v1.ComplianceOccurrence` ([#5586](https://github.com/googleapis/google-cloud-node/issues/5586)) ([f60f2f9](https://github.com/googleapis/google-cloud-node/commit/f60f2f901ce9aa4e51237246f359a6acf7f3d5b1))

## [5.5.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.4.0...containeranalysis-v5.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [5.4.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.3.0...containeranalysis-v5.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [5.3.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.2.0...containeranalysis-v5.3.0) (2024-03-23)


### Features

* [containeranalysis] A new field `in_toto_slsa_provenance_v1` is added to message `BuildOccurrence` ([#5134](https://github.com/googleapis/google-cloud-node/issues/5134)) ([e15c0fa](https://github.com/googleapis/google-cloud-node/commit/e15c0fa84d38e7bfd1e1ff2551b6b39ccbbd8554))

## [5.2.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.1.1...containeranalysis-v5.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5029](https://github.com/googleapis/google-cloud-node/issues/5029)) ([09e59ad](https://github.com/googleapis/google-cloud-node/commit/09e59ad6e34001a33d01894ccd5a0643f1a84883))

## [5.1.1](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.1.0...containeranalysis-v5.1.1) (2023-09-11)


### Bug Fixes

* Publication issues with containeranalysis and policytroubleshooter ([#4628](https://github.com/googleapis/google-cloud-node/issues/4628)) ([2ba7b48](https://github.com/googleapis/google-cloud-node/commit/2ba7b489e6109e5bf3d5e7276a0b94558ebd48d0))

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.0.1...containeranalysis-v5.1.0) (2023-09-06)


### Features

* [containeranalysis] add ExportSBOM API method ([#4607](https://github.com/googleapis/google-cloud-node/issues/4607)) ([8443053](https://github.com/googleapis/google-cloud-node/commit/8443053fb025ea54d4381e622684776b99b8081c))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [5.0.1](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v5.0.0...containeranalysis-v5.0.1) (2023-08-09)


### Bug Fixes

* **deps:** Update dependency @google-cloud/grafeas to v5 ([#4512](https://github.com/googleapis/google-cloud-node/issues/4512)) ([10458cd](https://github.com/googleapis/google-cloud-node/commit/10458cd35c9083c6c94d320a32d858aa4321a4aa))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v4.7.0...containeranalysis-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.7.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v4.6.1...containeranalysis-v4.7.0) (2023-04-24)


### Features

* [containeranalysis] add enum for grafeas v1 cvss to support both cvss v2 and v3 ([#4163](https://github.com/googleapis/google-cloud-node/issues/4163)) ([0904936](https://github.com/googleapis/google-cloud-node/commit/090493643ae86992c44e31963e1ba774d97b79d4))


### Bug Fixes

* [containeranalysis] scope GeneratePackagesSummary method to v1beta1 http path ([#4196](https://github.com/googleapis/google-cloud-node/issues/4196)) ([e1841e7](https://github.com/googleapis/google-cloud-node/commit/e1841e71f1be28ec607fa6f00c6f624909bd7981))

## [4.6.1](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v4.6.0...containeranalysis-v4.6.1) (2023-04-13)


### Bug Fixes

* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.6.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v4.5.0...containeranalysis-v4.6.0) (2023-03-28)


### Features

* [containeranalysis] Add VULNERABILITY_ASSESSMENT Note type to grafeas v1 API, adds Vex_Assessment derived from the Note to resources' occurrences, VEX notes now be written to add CVE assessments ([#4070](https://github.com/googleapis/google-cloud-node/issues/4070)) ([ec484a6](https://github.com/googleapis/google-cloud-node/commit/ec484a6f369d2df6dc73a798501c8937caf5634b))
* [containeranalysis] remove the unimplemented ScanConfig API method and resources ([a3b26fc](https://github.com/googleapis/google-cloud-node/commit/a3b26fc4052a72858f837a45237c9df88289fb75))

## [4.5.0](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v4.4.2...containeranalysis-v4.5.0) (2023-03-13)


### Features

* [containeranalysis] Import of Grafeas from Github ([#4050](https://github.com/googleapis/google-cloud-node/issues/4050)) ([1323ead](https://github.com/googleapis/google-cloud-node/commit/1323ead136e4352f44ccf57498b4aaa473533322))

## [4.4.2](https://github.com/googleapis/google-cloud-node/compare/containeranalysis-v4.4.1...containeranalysis-v4.4.2) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [4.4.1](https://github.com/googleapis/nodejs-containeranalysis/compare/v4.4.0...v4.4.1) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#447](https://github.com/googleapis/nodejs-containeranalysis/issues/447)) ([c0631d5](https://github.com/googleapis/nodejs-containeranalysis/commit/c0631d54928b9fe6df493f79883341e66d19f0ca))
* Regenerated protos JS and TS definitions ([#451](https://github.com/googleapis/nodejs-containeranalysis/issues/451)) ([9710e71](https://github.com/googleapis/nodejs-containeranalysis/commit/9710e715ef10471e536b5329e1e71ffe8b7265ec))

## [4.4.0](https://github.com/googleapis/nodejs-containeranalysis/compare/v4.3.0...v4.4.0) (2022-10-06)


### Features

* Add new analysis status and cvss version fields ([#443](https://github.com/googleapis/nodejs-containeranalysis/issues/443)) ([2b4db8e](https://github.com/googleapis/nodejs-containeranalysis/commit/2b4db8ee9859823e32de8256853429adf88cf207))

## [4.3.0](https://github.com/googleapis/nodejs-containeranalysis/compare/v4.2.0...v4.3.0) (2022-09-22)


### Features

* Accept google-gax instance as a parameter ([#433](https://github.com/googleapis/nodejs-containeranalysis/issues/433)) ([51e82fd](https://github.com/googleapis/nodejs-containeranalysis/commit/51e82fd484752113c48efba4ff42ac838b961056))


### Bug Fixes

* Better support for fallback mode ([#427](https://github.com/googleapis/nodejs-containeranalysis/issues/427)) ([c63417b](https://github.com/googleapis/nodejs-containeranalysis/commit/c63417b5728a83518ffd83602d94acc3d537328c))
* Change import long to require ([#428](https://github.com/googleapis/nodejs-containeranalysis/issues/428)) ([4fd0750](https://github.com/googleapis/nodejs-containeranalysis/commit/4fd075018b8fc34cac0712aff3b15c61096016af))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-containeranalysis/issues/1553)) ([#432](https://github.com/googleapis/nodejs-containeranalysis/issues/432)) ([ea51fef](https://github.com/googleapis/nodejs-containeranalysis/commit/ea51fef4bb638eb1e2da9de5817a44e5652e404e))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-containeranalysis/issues/1546)) ([#431](https://github.com/googleapis/nodejs-containeranalysis/issues/431)) ([a0e674f](https://github.com/googleapis/nodejs-containeranalysis/commit/a0e674fcf24bac4a870ead8dfc9357609a868981))
* use google-gax v3.3.0 ([ea51fef](https://github.com/googleapis/nodejs-containeranalysis/commit/ea51fef4bb638eb1e2da9de5817a44e5652e404e))

## [4.2.0](https://github.com/googleapis/nodejs-containeranalysis/compare/v4.1.0...v4.2.0) (2022-07-04)


### Features

* support regapic LRO ([1290f13](https://github.com/googleapis/nodejs-containeranalysis/commit/1290f1322a788735340ac1c10b57a38d78396bb8))


### Bug Fixes

* **deps:** update dependency @google-cloud/grafeas to v4 ([#420](https://github.com/googleapis/nodejs-containeranalysis/issues/420)) ([6e40ebe](https://github.com/googleapis/nodejs-containeranalysis/commit/6e40ebe146d61bb6594c3b7e76514250843a5ff0))
* **issue-417:** adding additional asserts to track flaky error ([#421](https://github.com/googleapis/nodejs-containeranalysis/issues/421)) ([23cd446](https://github.com/googleapis/nodejs-containeranalysis/commit/23cd446962c3e2a3ec00981d87dd9d41c17873ee))

## [4.1.0](https://github.com/googleapis/nodejs-containeranalysis/compare/v4.0.0...v4.1.0) (2022-06-10)


### Features

* Import of Grafeas from Github ([#413](https://github.com/googleapis/nodejs-containeranalysis/issues/413)) ([fda2b32](https://github.com/googleapis/nodejs-containeranalysis/commit/fda2b3218680d9f0b81435ba9913d150eeded826))


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to v3 ([#410](https://github.com/googleapis/nodejs-containeranalysis/issues/410)) ([fb503c8](https://github.com/googleapis/nodejs-containeranalysis/commit/fb503c89c6e0b8af7c4a4c60cddae7cf8727bd2b))

## [4.0.0](https://github.com/googleapis/nodejs-containeranalysis/compare/v3.4.0...v4.0.0) (2022-05-17)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#408)

### Bug Fixes

* Flaky pubsub test ([#394](https://github.com/googleapis/nodejs-containeranalysis/issues/394)) ([eb74ba8](https://github.com/googleapis/nodejs-containeranalysis/commit/eb74ba886c2a3397d57b3f99fca0fe1df1216f2d))


### Build System

* update library to use Node 12 ([#408](https://github.com/googleapis/nodejs-containeranalysis/issues/408)) ([4aeecf8](https://github.com/googleapis/nodejs-containeranalysis/commit/4aeecf8ea7c476aa3dab167766121eeec7346a85))

## [3.4.0](https://github.com/googleapis/nodejs-containeranalysis/compare/v3.3.0...v3.4.0) (2022-04-05)


### Features

* AuditConfig for IAM v1 ([#388](https://github.com/googleapis/nodejs-containeranalysis/issues/388)) ([f4d14d7](https://github.com/googleapis/nodejs-containeranalysis/commit/f4d14d7734054b8bd7037b189e7af1876e119f51))

## [3.3.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.2.0...v3.3.0) (2021-11-11)


### Features

* Updating the grafeas protos to include compliance and intoto attestation protos ([#352](https://www.github.com/googleapis/nodejs-containeranalysis/issues/352)) ([ea334fb](https://www.github.com/googleapis/nodejs-containeranalysis/commit/ea334fb38ba769af3e7473db9414db0850d2bbdb))

## [3.2.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.8...v3.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#339](https://www.github.com/googleapis/nodejs-containeranalysis/issues/339)) ([98de66a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/98de66a7ad503a0b1e5f4d3f8fd94f49ac156dfa))

### [3.1.8](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.7...v3.1.8) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#336](https://www.github.com/googleapis/nodejs-containeranalysis/issues/336)) ([3fbaf02](https://www.github.com/googleapis/nodejs-containeranalysis/commit/3fbaf02e2dc83730d1222255ad2f6ab6d34f4be0))
* **deps:** google-gax v2.24.1 ([#338](https://www.github.com/googleapis/nodejs-containeranalysis/issues/338)) ([6f0b19a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/6f0b19a20b73f542c6e88f954fc3e159b9e73f82))

### [3.1.7](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.6...v3.1.7) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#326](https://www.github.com/googleapis/nodejs-containeranalysis/issues/326)) ([9e3f627](https://www.github.com/googleapis/nodejs-containeranalysis/commit/9e3f62734cecd16c7bae394665b50e7212f55158))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#329](https://www.github.com/googleapis/nodejs-containeranalysis/issues/329)) ([5403fb4](https://www.github.com/googleapis/nodejs-containeranalysis/commit/5403fb42c84354d439ea8f6414b6b7e28c57f5c1))

### [3.1.6](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.5...v3.1.6) (2021-07-01)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#322](https://www.github.com/googleapis/nodejs-containeranalysis/issues/322)) ([3c841c0](https://www.github.com/googleapis/nodejs-containeranalysis/commit/3c841c05e58e128080384321e1145d56c4b94cdf))

### [3.1.5](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.4...v3.1.5) (2021-06-30)


### Bug Fixes

* make request optional in all cases ([#318](https://www.github.com/googleapis/nodejs-containeranalysis/issues/318)) ([35e8196](https://www.github.com/googleapis/nodejs-containeranalysis/commit/35e81964f971d4272b0c14f4e8b6e790229ba803))

### [3.1.4](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.3...v3.1.4) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#308](https://www.github.com/googleapis/nodejs-containeranalysis/issues/308)) ([040323a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/040323ad90f03e1d50ecb0036c3bf62352eada09))

### [3.1.3](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.2...v3.1.3) (2021-05-12)


### Bug Fixes

* use require() to load JSON protos ([#301](https://www.github.com/googleapis/nodejs-containeranalysis/issues/301)) ([46bed2e](https://www.github.com/googleapis/nodejs-containeranalysis/commit/46bed2e0b0dadaae2504f2c765d13f2d46f4a0b0))

### [3.1.2](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.1...v3.1.2) (2021-05-07)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#298](https://www.github.com/googleapis/nodejs-containeranalysis/issues/298)) ([74b5257](https://www.github.com/googleapis/nodejs-containeranalysis/commit/74b5257e95447dbb4b6652f6b7292eb1c27d403b))

### [3.1.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.1.0...v3.1.1) (2021-04-27)


### Bug Fixes

* specify valid go_package option ([#293](https://www.github.com/googleapis/nodejs-containeranalysis/issues/293)) ([84ba201](https://www.github.com/googleapis/nodejs-containeranalysis/commit/84ba201c2d2eb81faf36461cf1ff3bfccf33f5ed))

## [3.1.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.0.1...v3.1.0) (2021-01-14)


### Features

* adds style enum ([641da22](https://www.github.com/googleapis/nodejs-containeranalysis/commit/641da22ad3af60cff2e9f796d47d267d4d414f37))

### [3.0.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v3.0.0...v3.0.1) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#267](https://www.github.com/googleapis/nodejs-containeranalysis/issues/267)) ([003a128](https://www.github.com/googleapis/nodejs-containeranalysis/commit/003a128f84f0a7cdcff34ba77dc60d88a4d7969b))

## [3.0.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v2.1.1...v3.0.0) (2020-11-16)


### ⚠ BREAKING CHANGES

* added getVulnerabilityOccurrencesSummary to v1 (#263)

### Features

* added getVulnerabilityOccurrencesSummary to v1 ([#263](https://www.github.com/googleapis/nodejs-containeranalysis/issues/263)) ([8f3ff4c](https://www.github.com/googleapis/nodejs-containeranalysis/commit/8f3ff4c09d7272592e4599ff8f33c7d90b4dd308))

### [2.1.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v2.1.0...v2.1.1) (2020-07-10)


### Bug Fixes

* typeo in nodejs .gitattribute ([#231](https://www.github.com/googleapis/nodejs-containeranalysis/issues/231)) ([c87033a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/c87033a3c14065f7b461b4fc04751e67a40f2325))

## [2.1.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v2.0.0...v2.1.0) (2020-06-28)


### Features

* check status of long running operation by its name ([#209](https://www.github.com/googleapis/nodejs-containeranalysis/issues/209)) ([45420a3](https://www.github.com/googleapis/nodejs-containeranalysis/commit/45420a304799cbb1114b0dbde866fcbbb10c3390))
* move ts target to es2018 from es2016 ([#220](https://www.github.com/googleapis/nodejs-containeranalysis/issues/220)) ([7397f8f](https://www.github.com/googleapis/nodejs-containeranalysis/commit/7397f8f29a31da5f50b2e9d658a40395dec41772))


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to v2 ([#215](https://www.github.com/googleapis/nodejs-containeranalysis/issues/215)) ([83cf246](https://www.github.com/googleapis/nodejs-containeranalysis/commit/83cf2460b925c3f287dbb643eeea83d7ba958322))
* handle fallback option properly ([#225](https://www.github.com/googleapis/nodejs-containeranalysis/issues/225)) ([623535d](https://www.github.com/googleapis/nodejs-containeranalysis/commit/623535de84418c8b2b9dfafe1d9f49c898f0c5d5))
* remove unneeded common protos in generated proto list ([#207](https://www.github.com/googleapis/nodejs-containeranalysis/issues/207)) ([3cdfed3](https://www.github.com/googleapis/nodejs-containeranalysis/commit/3cdfed35ea873951dd1eb8228707c412b2747b8d))
* synth.py clean up for multiple version ([#214](https://www.github.com/googleapis/nodejs-containeranalysis/issues/214)) ([67ce7d7](https://www.github.com/googleapis/nodejs-containeranalysis/commit/67ce7d71377377974b00058e63cf8cffceb72dbe))

## [2.0.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.10.0...v2.0.0) (2020-04-23)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#167](https://www.github.com/googleapis/nodejs-containeranalysis/issues/167)) ([8990c34](https://www.github.com/googleapis/nodejs-containeranalysis/commit/8990c34e6b8f77fb7771f8f525a34e95cdaab104))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#180](https://www.github.com/googleapis/nodejs-containeranalysis/issues/180)) ([1f75445](https://www.github.com/googleapis/nodejs-containeranalysis/commit/1f754450685c13b224de818052936a10d711e4fc))
* **deps:** update dependency @google-cloud/grafeas to v3 ([#189](https://www.github.com/googleapis/nodejs-containeranalysis/issues/189)) ([df59146](https://www.github.com/googleapis/nodejs-containeranalysis/commit/df59146d4433b10953761989e9059e5a82d66832))
* **samples:** should use effective_severity field ([#200](https://www.github.com/googleapis/nodejs-containeranalysis/issues/200)) ([7e6146d](https://www.github.com/googleapis/nodejs-containeranalysis/commit/7e6146d1c98b964564253f17cf953b1f422a9b56))

## [1.10.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.9.0...v1.10.0) (2020-03-06)


### Features

* deferred client initialization ([#152](https://www.github.com/googleapis/nodejs-containeranalysis/issues/152)) ([0a01d71](https://www.github.com/googleapis/nodejs-containeranalysis/commit/0a01d71cc9b7f45c78215838d13c506e316d904d))

## [1.9.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.8.0...v1.9.0) (2020-02-29)


### Features

* export protos in src/index.ts ([29af69b](https://www.github.com/googleapis/nodejs-containeranalysis/commit/29af69b2e1af8763ee892d9325d089e401198330))

## [1.8.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.7.1...v1.8.0) (2020-02-12)


### Features

* move API to typescript code generation ([#135](https://www.github.com/googleapis/nodejs-containeranalysis/issues/135)) ([b2d88af](https://www.github.com/googleapis/nodejs-containeranalysis/commit/b2d88af53e958360b1c91035b8ac5d9cbb0a37e5))

### [1.7.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.7.0...v1.7.1) (2020-02-05)


### Bug Fixes

* proto annotations; enum, bytes, and Long types now accept strings ([34b461f](https://www.github.com/googleapis/nodejs-containeranalysis/commit/34b461f4f721fbf0bd1908518d1a9f16ff180270))

## [1.7.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.6.1...v1.7.0) (2020-01-02)


### Features

* add options for attestation and vulnerability requests ([#114](https://www.github.com/googleapis/nodejs-containeranalysis/issues/114)) ([1c3c4b0](https://www.github.com/googleapis/nodejs-containeranalysis/commit/1c3c4b08b5b3560a5d583a876417f21895badfd1))

### [1.6.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.6.0...v1.6.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([9a171a3](https://www.github.com/googleapis/nodejs-containeranalysis/commit/9a171a3b10b3a0bf6bf746ac8f093c349062f61e))

## [1.6.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.5.1...v1.6.0) (2019-11-19)


### Features

* add resource descriptors ([#109](https://www.github.com/googleapis/nodejs-containeranalysis/issues/109)) ([f06a0a3](https://www.github.com/googleapis/nodejs-containeranalysis/commit/f06a0a3f646dbc276628217104aa630697e9f789))


### Bug Fixes

* import long into proto ts declaration file ([#103](https://www.github.com/googleapis/nodejs-containeranalysis/issues/103)) ([1b31db6](https://www.github.com/googleapis/nodejs-containeranalysis/commit/1b31db607243d73a936e12e9e00252fe87716014))
* **docs:** bump release level to GA ([#107](https://www.github.com/googleapis/nodejs-containeranalysis/issues/107)) ([15366fa](https://www.github.com/googleapis/nodejs-containeranalysis/commit/15366fa0e805ba0e707cc41c2610ea6dec9f791a))
* **docs:** snippets are now replaced in jsdoc comments ([#102](https://www.github.com/googleapis/nodejs-containeranalysis/issues/102)) ([29523b1](https://www.github.com/googleapis/nodejs-containeranalysis/commit/29523b1b14142c04d8010f87db366c14f83035ef))

### [1.5.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.5.0...v1.5.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#96](https://www.github.com/googleapis/nodejs-containeranalysis/issues/96)) ([4d03e9a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/4d03e9a4b116753b28029d7e171b8dc4409938ac))

## [1.5.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.4.0...v1.5.0) (2019-10-09)


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to v1 ([#84](https://www.github.com/googleapis/nodejs-containeranalysis/issues/84)) ([3592d57](https://www.github.com/googleapis/nodejs-containeranalysis/commit/3592d57))
* use compatible version of google-gax ([894a286](https://www.github.com/googleapis/nodejs-containeranalysis/commit/894a286))


### Features

* .d.ts for protos ([#86](https://www.github.com/googleapis/nodejs-containeranalysis/issues/86)) ([0c2c19c](https://www.github.com/googleapis/nodejs-containeranalysis/commit/0c2c19c))

## [1.4.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.3.3...v1.4.0) (2019-09-16)


### Bug Fixes

* set proper version # for x-goog-api-client ([8245809](https://www.github.com/googleapis/nodejs-containeranalysis/commit/8245809))
* **deps:** update dependency @google-cloud/pubsub to ^0.32.0 ([#81](https://www.github.com/googleapis/nodejs-containeranalysis/issues/81)) ([7116630](https://www.github.com/googleapis/nodejs-containeranalysis/commit/7116630))
* **docs:** remove anchor from reference doc link ([658df48](https://www.github.com/googleapis/nodejs-containeranalysis/commit/658df48))


### Features

* load protos from JSON, grpc-fallback support ([766fa96](https://www.github.com/googleapis/nodejs-containeranalysis/commit/766fa96))

### [1.3.3](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.3.2...v1.3.3) (2019-08-16)


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to ^0.31.0 ([#71](https://www.github.com/googleapis/nodejs-containeranalysis/issues/71)) ([fcc304a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/fcc304a))

### [1.3.2](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.3.1...v1.3.2) (2019-08-03)


### Bug Fixes

* allow calls with no request, add JSON proto ([4483e7e](https://www.github.com/googleapis/nodejs-containeranalysis/commit/4483e7e))

### [1.3.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.3.0...v1.3.1) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to ^0.30.0 ([#59](https://www.github.com/googleapis/nodejs-containeranalysis/issues/59)) ([d2871b6](https://www.github.com/googleapis/nodejs-containeranalysis/commit/d2871b6))

## [1.3.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.2.2...v1.3.0) (2019-07-15)


### Features

* add occurrencePath template method ([#57](https://www.github.com/googleapis/nodejs-containeranalysis/issues/57)) ([9d66e07](https://www.github.com/googleapis/nodejs-containeranalysis/commit/9d66e07))

### [1.2.2](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.2.1...v1.2.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#51](https://www.github.com/googleapis/nodejs-containeranalysis/issues/51)) ([1e1fb10](https://www.github.com/googleapis/nodejs-containeranalysis/commit/1e1fb10))

### [1.2.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.2.0...v1.2.1) (2019-06-24)


### Bug Fixes

* **docs:** don't yet advertise ga, as there may be some breaking changes coming ([#49](https://www.github.com/googleapis/nodejs-containeranalysis/issues/49)) ([55d96bf](https://www.github.com/googleapis/nodejs-containeranalysis/commit/55d96bf))

## [1.2.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.1.0...v1.2.0) (2019-06-19)


### Features

* adds getGrafeasClient() method on ContainerAnalysisClient instance ([#46](https://www.github.com/googleapis/nodejs-containeranalysis/issues/46)) ([0f03c96](https://www.github.com/googleapis/nodejs-containeranalysis/commit/0f03c96))

## [1.1.0](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.0.2...v1.1.0) (2019-06-18)


### Features

* add v1 client ([#43](https://www.github.com/googleapis/nodejs-containeranalysis/issues/43)) ([0707792](https://www.github.com/googleapis/nodejs-containeranalysis/commit/0707792))

### [1.0.2](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.0.1...v1.0.2) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#39](https://www.github.com/googleapis/nodejs-containeranalysis/issues/39)) ([debea92](https://www.github.com/googleapis/nodejs-containeranalysis/commit/debea92))

### [1.0.1](https://www.github.com/googleapis/nodejs-containeranalysis/compare/v1.0.0...v1.0.1) (2019-06-11)


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to ^0.29.0 ([#36](https://www.github.com/googleapis/nodejs-containeranalysis/issues/36)) ([2a74034](https://www.github.com/googleapis/nodejs-containeranalysis/commit/2a74034))

## 1.0.0 (2019-06-08)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#2)

### Bug Fixes

* **deps:** update dependency google-gax to v1 ([22b33b7](https://www.github.com/googleapis/nodejs-containeranalysis/commit/22b33b7))
* **deps:** update dependency google-gax to v1 ([#14](https://www.github.com/googleapis/nodejs-containeranalysis/issues/14)) ([84e489b](https://www.github.com/googleapis/nodejs-containeranalysis/commit/84e489b))
* **docs:** fix dead links ([#16](https://www.github.com/googleapis/nodejs-containeranalysis/issues/16)) ([0dee92f](https://www.github.com/googleapis/nodejs-containeranalysis/commit/0dee92f))
* do not fail test if nyc did not run ([1e2f13a](https://www.github.com/googleapis/nodejs-containeranalysis/commit/1e2f13a))


### Build System

* upgrade engines field to >=8.10.0 ([#2](https://www.github.com/googleapis/nodejs-containeranalysis/issues/2)) ([e95e090](https://www.github.com/googleapis/nodejs-containeranalysis/commit/e95e090))


### Features

* add doc expressions and update CI ([#8](https://www.github.com/googleapis/nodejs-containeranalysis/issues/8)) ([e712189](https://www.github.com/googleapis/nodejs-containeranalysis/commit/e712189))
* support apiEndpoint override in client constructor ([#34](https://www.github.com/googleapis/nodejs-containeranalysis/issues/34)) ([9146c76](https://www.github.com/googleapis/nodejs-containeranalysis/commit/9146c76))
