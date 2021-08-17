# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/bigquery-data-transfer?activeTab=versions

### [2.2.7](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.6...v2.2.7) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#487](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/487)) ([79fda9a](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/79fda9aa1a3eb5e840d299201fdc599314018d6c))

### [2.2.6](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.5...v2.2.6) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#485](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/485)) ([023c672](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/023c672f38514833a6c426705ad15100197b0f21))

### [2.2.5](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.4...v2.2.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#477](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/477)) ([aa0e611](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/aa0e6115e861006b6eabf0e58d3de8033d365918))

### [2.2.4](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.3...v2.2.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#475](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/475)) ([5039af0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/5039af0c7bef6acf9b5a2c3ca0a876cfa1ea90ce))

### [2.2.3](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.2...v2.2.3) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#472](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/472)) ([9f43f07](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/9f43f07aa530741ee7690d4dcc0c6d15023e7cb1))

### [2.2.2](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.1...v2.2.2) (2021-06-30)


### Bug Fixes

* make request optional in all cases ([#467](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/467)) ([30a0585](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/30a05858eaff80ac57fc9b4d59c129750ee01082))

### [2.2.1](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.2.0...v2.2.1) (2021-06-07)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#450](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/450)) ([8872637](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/88726378bab4349b653160b9dfcda7ed142c87d9))
* GoogleAdsError missing using generator version after 1.3.0 ([#460](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/460)) ([585f7d8](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/585f7d89b879faa9ae5127eb2b53c233c9ba1028))
* use require() to load JSON protos ([#453](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/453)) ([ceae869](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/ceae8690c4d1b2b1edf7255f484d7885edc1dbf1))

## [2.2.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.1.2...v2.2.0) (2021-01-09)


### Features

* introduce style enumeration ([#422](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/422)) ([f07e2a0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/f07e2a07db04138d7bfe268915e9ca0b60f7a8f3))

### [2.1.2](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.1.1...v2.1.2) (2020-11-25)


### Bug Fixes

* do not modify options object, use defaultScopes ([#413](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/413)) ([c239061](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/c2390614214c4c0c95972f4400785deba0d15a22))

### [2.1.1](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.1.0...v2.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#374](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/374)) ([f97cb56](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/f97cb56af111684f4c4f5d1a1da62decfdae5ea6))

## [2.1.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v2.0.0...v2.1.0) (2020-06-15)


### Features

* move ts target to es2018 from es2016 ([#363](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/363)) ([e731cd2](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/e731cd2875ab443565df5dd8af955a7618d8a35d))


### Bug Fixes

* proper fallback option handling ([e8ecb1d](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/e8ecb1dcf415d5576f64ee46989939fe61bfe860))
* regen protos and unit test ([#358](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/358)) ([74010a6](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/74010a6961c23d1d5d162df5ac151402749d01b6))
* remove eslint, update gax, fix generated protos, run the generator ([#344](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/344)) ([886c3da](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/886c3da12770a16f762f348195939ca5a37ead38))
* synth clean for src/index  ([#357](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/357)) ([458ea3a](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/458ea3a3e5adc964b5f695d8f68e3409a3f4d230))

## [2.0.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.5.3...v2.0.0) (2020-04-10)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* move API to typescript code generation (#300)

### Features

* bump release level to GA ([#296](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/296)) ([8d1850a](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/8d1850ad542efb7d6f5ceac245f6e69c6f0550ed))
* deferred client initialization ([#321](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/321)) ([dc667b3](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/dc667b31d22796946bf94a01ece0cb60d083049c))
* drop node8 support, support for async iterators ([#335](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/335)) ([e9a9b24](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/e9a9b240159d9dd8e22e99bc733b5ff6a023b769))
* export protos in src/index.ts ([7426c53](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/7426c53e19b040c60b2c12267eb494b5db90b32a))
* move API to typescript code generation ([#300](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/300)) ([9094a74](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/9094a74364a8b1a19dff53926453d4a777d5fb21))
* use first party client oauth ([b687434](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/b687434b6f11e8f3539cc07b7bd8c8234211286a))


### Bug Fixes

* export explicit version from protos.js ([#339](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/339)) ([5ed9ed0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/5ed9ed0117e697711098602a0c7270faa99eb9d5))
* pass x-goog-request-params header for streaming calls ([1af9266](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/1af926661ef293b920849562a9106799b212d793))

### [1.5.3](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.5.2...v1.5.3) (2020-01-21)


### Bug Fixes

* proto resource annotation removed, no code change ([9e0873f](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/9e0873f62f925e7dad871b0e96edc074e833d151))

### [1.5.2](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.5.1...v1.5.2) (2019-12-09)


### Bug Fixes

* change resource type TransferRun to Run to be consistent with gapic configs ([993eb79](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/993eb79b7398720b7882006f96b54b21ba365217))

### [1.5.1](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.5.0...v1.5.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([9e22425](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/9e22425c970f92348cab350c9b5604d0a406220e))

## [1.5.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.4.1...v1.5.0) (2019-11-13)


### Features

* **docs:** bump release level to beta ([#268](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/268)) ([90f199b](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/90f199b479e850bdf13a7e9a83e2c353866ac854))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#266](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/266)) ([cbe1699](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/cbe1699dcc26f000cb5456fd44c3259b596a84cb))

### [1.4.1](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.4.0...v1.4.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#261](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/261)) ([cefa817](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/cefa817cdab3dc2db527336408d971ede5541e2a))

## [1.4.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.3.0...v1.4.0) (2019-10-08)


### Bug Fixes

* use compatible version of google-gax ([0bacf46](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/0bacf46))


### Features

* support new proto field options ([#252](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/252)) ([261e075](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/261e075))

## [1.3.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.2.5...v1.3.0) (2019-09-06)


### Features

* load protos from JSON, grpc-fallback support ([86df420](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/86df420))

### [1.2.5](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.2.4...v1.2.5) (2019-08-26)


### Bug Fixes

* populate correct version # in x-goog-api-client header ([937f1ac](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/937f1ac))

### [1.2.4](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.2.3...v1.2.4) (2019-08-08)


### Bug Fixes

* allow calls with no request, add JSON proto ([8fd5422](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/8fd5422))

### [1.2.3](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.2.2...v1.2.3) (2019-07-16)


### Bug Fixes

* update to the latest version of the service ([#232](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/232)) ([a08f503](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/a08f503))

### [1.2.2](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.2.1...v1.2.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#229](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/229)) ([2ec1152](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/2ec1152))

### [1.2.1](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.2.0...v1.2.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#225](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/225)) ([85726ce](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/85726ce))

## [1.2.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.1.0...v1.2.0) (2019-06-07)


### Features

* adds startManualTransferRuns, enableDataTransferService, and isDataTransferServiceEnabled methods ([4a45c8f](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/4a45c8f))

## [1.1.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#219](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/219)) ([c8e6ca0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/c8e6ca0))

## [1.0.0](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/compare/v0.5.1...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#194)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#192](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/192)) ([417634a](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/417634a))
* DEADLINE_EXCEEDED is no longer retried ([fb87d7c](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/fb87d7c))
* DEADLINE_EXCEEDED retry code is idempotent ([#203](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/203)) ([d0ff039](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/d0ff039))
* **deps:** update dependency google-gax to v1 ([#202](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/202)) ([245cf09](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/245cf09))


### Build System

* upgrade engines field to >=8.10.0 ([#194](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/issues/194)) ([39eca4f](https://www.github.com/googleapis/nodejs-bigquery-data-transfer/commit/39eca4f))

## v0.5.1

03-12-2019 13:53 PDT

This patch release contains a few bug fixes, dependency updates, and doc improvements.  Enjoy!

### Bug Fixes
- fix: throw on invalid credentials ([#167](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/167))
- fix: do not require projectId for samples ([#147](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/147))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#158](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/158))

### Documentation
- docs: update comments on protos ([#172](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/172))
- docs: update API doc comments ([#171](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/171))
- docs: update links in contrib guide ([#169](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/169))
- docs: update contributing path in README ([#164](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/164))
- docs: move CONTRIBUTING.md to root ([#163](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/163))
- docs: add lint/fix example to contributing guide ([#160](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/160))

### Internal / Testing Changes
- chore: update require statement code style
- build: Add docuploader credentials to node publish jobs ([#175](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/175))
- build: use node10 to run samples-test, system-test etc ([#174](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/174))
- build: update release configuration
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#168](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/168))
- build: create docs test npm scripts ([#166](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/166))
- build: test using @grpc/grpc-js in CI ([#165](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/165))
- refactor: improve generated code style ([#162](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/162))
- chore(deps): update dependency eslint-config-prettier to v4 ([#157](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/157))
- chore: update the date in the copyright header. ([#156](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/156))
- build(docs): ignore www.gstatic.com/bigquerydatatransfer link ([#152](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/152))
- build: check broken links in generated docs ([#148](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/148))
- nit: reordered message types

## v0.5.0

12-21-2018 10:19 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#119](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/119))
- refactor: remove unused deps ([#115](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/115))
- chore(deps): update dependency through2 to v3 ([#113](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/113))
- fix(deps): update dependency google-gax to ^0.20.0 ([#83](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/83))
- fix(deps): update dependency google-gax to ^0.19.0 ([#73](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/73))
- fix(deps): update dependency google-gax to ^0.18.0 ([#63](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/63))

### Documentation
- docs: update readme badges ([#130](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/130))
- fix(samples): fix the sample and add a system test ([#127](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/127))
- docs(samples): updated samples code to use async await ([#124](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/124))

### Internal / Testing Changes
- refactor: modernize the sample tests ([#144](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/144))
- chore(build): inject yoshi automation key ([#143](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/143))
- chore: update nyc and eslint configs ([#142](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/142))
- chore: fix publish.sh permission +x ([#140](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/140))
- fix(build): fix Kokoro release script ([#139](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/139))
- build: add Kokoro configs for autorelease ([#138](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/138))
- chore: always nyc report before calling codecov ([#135](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/135))
- chore: nyc ignore build/test by default ([#134](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/134))
- chore: update license file ([#132](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/132))
- fix(build): fix system key decryption ([#128](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/128))
- chore: add a synth.metadata
- chore: update eslintignore config ([#118](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/118))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#117](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/117))
- chore: drop contributors from multiple places ([#116](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/116))
- chore: use latest npm on Windows ([#114](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/114))
- chore: update CircleCI config ([#112](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/112))
- chore: include build in eslintignore ([#109](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/109))
- chore(deps): update dependency eslint-plugin-node to v8 ([#105](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/105))
- chore: update issue templates ([#104](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/104))
- chore: remove old issue template ([#102](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/102))
- build: run tests on node11 ([#101](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/101))
- chores(build): do not collect sponge.xml from windows builds ([#100](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/100))
- chores(build): run codecov on continuous builds ([#99](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/99))
- chore: update new issue template ([#98](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/98))
- build: fix codecov uploading on Kokoro ([#95](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/95))
- Update kokoro config ([#93](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/93))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#92](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/92))
- test: remove appveyor config ([#89](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/89))
- Update the CI config ([#88](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/88))
- Enable prefer-const in the eslint config ([#86](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/86))
- Enable no-var in eslint ([#85](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/85))
- Switch to let/const ([#84](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/84))
- Update CI config ([#82](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/82))
- Add templating to synth and update CI ([#80](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/80))
- Retry npm install in CI ([#79](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/79))
- Re-generate library using /synth.py ([#76](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/76))
- chore(deps): update dependency nyc to v13 ([#74](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/74))
- chore(deps): update dependency eslint-config-prettier to v3 ([#72](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/72))
- chore: do not use npm ci ([#71](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/71))
- chore: ignore package-lock.json ([#68](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/68))
- chore(deps): lock file maintenance ([#67](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/67))
- chore(deps): lock file maintenance ([#66](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/66))
- chore: update renovate config ([#65](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/65))
- remove that whitespace ([#64](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/64))
- chore(deps): lock file maintenance ([#62](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/62))
- chore: move mocha options to mocha.opts ([#60](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/60))
- chore: require node 8 for samples ([#61](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/61))
- chore(deps): lock file maintenance ([#59](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/59))
- chore(deps): update dependency eslint-plugin-node to v7 ([#56](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/56))
- test: use strictEqual in tests ([#57](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/57))
- chore(deps): lock file maintenance ([#55](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/55))
- fix(deps): update dependency @google-cloud/bigquery-data-transfer to ^0.4.0 ([#54](https://github.com/googleapis/nodejs-bigquery-data-transfer/pull/54))

## v0.4.0

### Implementation Changes
- Re-generate library using /synth.py (#51)
 - Interal proto changes (additional bindings)
 - DEPRECATION: transfer_type field option has no effect
 - See: https://github.com/googleapis/googleapis/compare/abe00527f...master

#### BREAKING CHANGE
In this version we dropped support for NodeJS 4.x and 9.x. Your code might break if you're using this library on non LTS versions.
- fix: drop support for node.js 4.x and 9.x (#47)

### Dependencies
- chore(deps): update dependency eslint to v5 (#44)
- chore(package): update nyc to version 12.0.2 (#35)
- fix: update all dependencies (#33)

### Internal / Testing Changes
- refactor: drop repo-tool as an exec wrapper (#42)
- fix: update linking for samples (#39)
- Configure Renovate (#37)
- update gax and synth.py (#43)
- chore(build): use `npm ci` instead of `npm install` (#49)
- chore: the ultimate fix for repo-tools EPERM (#31)
- chore: timeout for system test (#30)
- chore: test on node10 (#28)
- chore: one more workaround for repo-tools EPERM (#26)
- chore: workaround for repo-tools EPERM (#25)
- chore: make samples depend on the current version (#24)
- chore: setup nighty build in CircleCI (#23)
