# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/gcp-metadata?activeTab=versions

## [8.1.2](https://github.com/googleapis/google-cloud-node-core/compare/gcp-metadata-v8.1.1...gcp-metadata-v8.1.2) (2025-10-29)


### Bug Fixes

* Gcp metadata ts issues. ([#110](https://github.com/googleapis/google-cloud-node-core/issues/110)) ([c51b901](https://github.com/googleapis/google-cloud-node-core/commit/c51b901a96c9a1e7b76ea2a0dbf183d2174c0ced))

## [8.1.1](https://github.com/googleapis/google-cloud-node-core/compare/gcp-metadata-v7.0.1...gcp-metadata-v8.1.1) (2025-10-13)


### ⚠ BREAKING CHANGES

* typescript@3.7.x has breaking changes; compiler now targets es2015
* monorepo migration
* upgrade to node 18 ([#627](https://github.com/googleapis/google-cloud-node-core/issues/627))
* upgrade to Node 14, and update gaxios, ts, and gts ([#571](https://github.com/googleapis/google-cloud-node-core/issues/571))
* drop node 10, update typescript to 4.6.3 ([#519](https://github.com/googleapis/google-cloud-node-core/issues/519))
* typescript@3.7.x has breaking changes; compiler now targets es2015
* drops Node 8 from engines field ([#315](https://github.com/googleapis/google-cloud-node-core/issues/315))

### Features

* Add `gcf-owl-bot[bot]` to `ignoreAuthors` ([#450](https://github.com/googleapis/google-cloud-node-core/issues/450)) ([7db1f92](https://github.com/googleapis/google-cloud-node-core/commit/7db1f928edddf732b5f7da02b852d556f771a050))
* Add `universe` metadata handler ([#596](https://github.com/googleapis/google-cloud-node-core/issues/596)) ([cfca19a](https://github.com/googleapis/google-cloud-node-core/commit/cfca19a0192e7cb558f493a3067c175691e0bdaa))
* Add ECONNREFUSED to list of known errors for isAvailable() ([#309](https://github.com/googleapis/google-cloud-node-core/issues/309)) ([1372fdc](https://github.com/googleapis/google-cloud-node-core/commit/1372fdcce50d45103e2097420dadf2b908a01495))
* Add environment variable for configuring environment detection ([#275](https://github.com/googleapis/google-cloud-node-core/issues/275)) ([51ef6e4](https://github.com/googleapis/google-cloud-node-core/commit/51ef6e4480f74a2196730564354918d895f96361))
* Add support for GCE_METADATA_HOST environment variable ([#406](https://github.com/googleapis/google-cloud-node-core/issues/406)) ([04ee1b8](https://github.com/googleapis/google-cloud-node-core/commit/04ee1b8356cc033e96f87d800b9a042ce813c92c))
* Bulk Metadata Requests ([#598](https://github.com/googleapis/google-cloud-node-core/issues/598)) ([782ac9c](https://github.com/googleapis/google-cloud-node-core/commit/782ac9c9dac955ea7cf1df97b198ed50e45461c9))
* Cache response from isAvailable() method ([#274](https://github.com/googleapis/google-cloud-node-core/issues/274)) ([6f68346](https://github.com/googleapis/google-cloud-node-core/commit/6f68346c2b1007ff163d1bf52fb00453a9036e59))
* Drops Node 8 from engines field ([#315](https://github.com/googleapis/google-cloud-node-core/issues/315)) ([2ef14f2](https://github.com/googleapis/google-cloud-node-core/commit/2ef14f28cd7cd35cb475fe69f9d4581f3123ddd7))
* Export `gcp-residency` tools ([#552](https://github.com/googleapis/google-cloud-node-core/issues/552)) ([6fde6e5](https://github.com/googleapis/google-cloud-node-core/commit/6fde6e5e87fb066eeae317f111b913c1d8b6a7fe))
* Extend GCP Residency Detection Support ([#528](https://github.com/googleapis/google-cloud-node-core/issues/528)) ([da98aaf](https://github.com/googleapis/google-cloud-node-core/commit/da98aafa4a14447ed353501424fdb20d7aacb594))
* Introduces the GCE_METADATA_IP to allow using a different IP address for the GCE metadata server. ([#346](https://github.com/googleapis/google-cloud-node-core/issues/346)) ([04f2050](https://github.com/googleapis/google-cloud-node-core/commit/04f2050eeaa9c3abefab116bb56360c16885c19f))
* Metadata Server Detection Configuration ([#562](https://github.com/googleapis/google-cloud-node-core/issues/562)) ([add7286](https://github.com/googleapis/google-cloud-node-core/commit/add728653a1ed4e38015fc45ac9eae1762d48a2b))
* Release 6.2.0 ([#641](https://github.com/googleapis/google-cloud-node-core/issues/641)) ([cb27c2b](https://github.com/googleapis/google-cloud-node-core/commit/cb27c2bef34b5aba71656abca6b58e01ffa4f9f2))
* Remove gts extension from tsconfig in gcp-metadata ([#66](https://github.com/googleapis/google-cloud-node-core/issues/66)) ([25cbd89](https://github.com/googleapis/google-cloud-node-core/commit/25cbd891347c78aab387903f7fc419d1af78dbe3))
* Significantly increase timeout if GCF environment detected ([#300](https://github.com/googleapis/google-cloud-node-core/issues/300)) ([8cdd7e0](https://github.com/googleapis/google-cloud-node-core/commit/8cdd7e050bfd4c6026be7f3bf6103e0de1a3bae9))


### Bug Fixes

* Add extra logging for incorrect headers ([#637](https://github.com/googleapis/google-cloud-node-core/issues/637)) ([b100ef4](https://github.com/googleapis/google-cloud-node-core/commit/b100ef4fefe7a642252470944bf6c60a3a5cbdb5))
* Apache license URL ([#468](https://github.com/googleapis/google-cloud-node-core/issues/468)) ([#336](https://github.com/googleapis/google-cloud-node-core/issues/336)) ([8a3cf41](https://github.com/googleapis/google-cloud-node-core/commit/8a3cf41eccc0588e8c4df59e4c457d26b40929d0))
* **build:** Switch primary branch to main ([#481](https://github.com/googleapis/google-cloud-node-core/issues/481)) ([aaabae4](https://github.com/googleapis/google-cloud-node-core/commit/aaabae49243c42510d4e3210021d5a8a3d75cc7c))
* **deps:** Pin TypeScript below 3.7.0 ([c58a544](https://github.com/googleapis/google-cloud-node-core/commit/c58a544a54b3131312ad5a6ec63738eb3a5ae9fe))
* **deps:** Roll back dependency gcp-metadata to ^4.1.0 ([#373](https://github.com/googleapis/google-cloud-node-core/issues/373)) ([f17bd29](https://github.com/googleapis/google-cloud-node-core/commit/f17bd290389da7250ce795efc203225c006cd32e))
* **deps:** Update dependency gaxios to v3 ([#326](https://github.com/googleapis/google-cloud-node-core/issues/326)) ([5aa5f48](https://github.com/googleapis/google-cloud-node-core/commit/5aa5f488579b0e3ecaef7d99856fe3340c53be46))
* **deps:** Update dependency gaxios to v4 ([#420](https://github.com/googleapis/google-cloud-node-core/issues/420)) ([180cea4](https://github.com/googleapis/google-cloud-node-core/commit/180cea49b1df670c1b971ec0f594a986d37b0c5b))
* **deps:** Update dependency google-logging-utils to v1 ([#638](https://github.com/googleapis/google-cloud-node-core/issues/638)) ([8ca0217](https://github.com/googleapis/google-cloud-node-core/commit/8ca021709420166ce31ea27f6b7c28917a26193a))
* **deps:** Update dependency json-bigint to ^0.4.0 ([#378](https://github.com/googleapis/google-cloud-node-core/issues/378)) ([b4d7964](https://github.com/googleapis/google-cloud-node-core/commit/b4d79646fb578aa40423b4cc139aff39cabe6253))
* **deps:** Update dependency json-bigint to v1 ([#382](https://github.com/googleapis/google-cloud-node-core/issues/382)) ([ff797a7](https://github.com/googleapis/google-cloud-node-core/commit/ff797a7702bb872144d92abd13217d2e15baa12c))
* **deps:** Update gaxios ([#257](https://github.com/googleapis/google-cloud-node-core/issues/257)) ([16de8a9](https://github.com/googleapis/google-cloud-node-core/commit/16de8a9ca5026951c3ddd5b9e3f251c1d328a384))
* Do not check secondary host if GCE_METADATA_IP set ([#352](https://github.com/googleapis/google-cloud-node-core/issues/352)) ([88e4f74](https://github.com/googleapis/google-cloud-node-core/commit/88e4f741653c06cb4cd64b72084d6334320c4fe1))
* **docs:** Add jsdoc-region-tag plugin ([#264](https://github.com/googleapis/google-cloud-node-core/issues/264)) ([3069049](https://github.com/googleapis/google-cloud-node-core/commit/306904906b2037d0f36c46c1270a897a5a7363db))
* FastFailMetadataRequest should not reject, if response already happened ([#273](https://github.com/googleapis/google-cloud-node-core/issues/273)) ([3b93082](https://github.com/googleapis/google-cloud-node-core/commit/3b93082babdb27343c9070d0005a3783a52d49fb))
* Gcp-metadata sample tests ([#76](https://github.com/googleapis/google-cloud-node-core/issues/76)) ([d11dfa9](https://github.com/googleapis/google-cloud-node-core/commit/d11dfa908a13ff8b756a2eaed6c92ba09e59905d))
* Increase time in gcp-metadata system-test ([#75](https://github.com/googleapis/google-cloud-node-core/issues/75)) ([9b19752](https://github.com/googleapis/google-cloud-node-core/commit/9b197525814e442823575d8b77121ba0f4b342cd))
* **isAvailable:** Handle EHOSTDOWN and EHOSTUNREACH error codes ([#291](https://github.com/googleapis/google-cloud-node-core/issues/291)) ([cbfb588](https://github.com/googleapis/google-cloud-node-core/commit/cbfb58841841e712210f1724e2004e43c4f060b0))
* Lint and docs ([#77](https://github.com/googleapis/google-cloud-node-core/issues/77)) ([eba0f27](https://github.com/googleapis/google-cloud-node-core/commit/eba0f276f31f8d86f959f1cd673c7e581d1bcd6a))
* Lint and docs scripts ([#73](https://github.com/googleapis/google-cloud-node-core/issues/73)) ([b09bbcb](https://github.com/googleapis/google-cloud-node-core/commit/b09bbcbcc0846553443366998a9b174442d98cbd))
* Monorepo migration ([86a7376](https://github.com/googleapis/google-cloud-node-core/commit/86a7376da60852dae8eacf9ca97a6d302b6b7eb4))
* Remove the space from the log system string ([#653](https://github.com/googleapis/google-cloud-node-core/issues/653)) ([6e999e9](https://github.com/googleapis/google-cloud-node-core/commit/6e999e9e7030da5ce4ba09687be2628ec06a0778))
* Repo Metadata ([#595](https://github.com/googleapis/google-cloud-node-core/issues/595)) ([d6abe2f](https://github.com/googleapis/google-cloud-node-core/commit/d6abe2f736501f1a7d2906ce2c6ea403475d5a52))
* Tsconfig in gcp-metadata ([#68](https://github.com/googleapis/google-cloud-node-core/issues/68)) ([80a338c](https://github.com/googleapis/google-cloud-node-core/commit/80a338c41b8a6bc2d139621b426e6097df0f3606))
* Typeo in nodejs .gitattribute ([#371](https://github.com/googleapis/google-cloud-node-core/issues/371)) ([cc61764](https://github.com/googleapis/google-cloud-node-core/commit/cc61764a8ac4dd5ac16c1ee4f14cb52e55e784a6))
* Warn rather than throwing when we fail to connect to metadata server ([#351](https://github.com/googleapis/google-cloud-node-core/issues/351)) ([538288c](https://github.com/googleapis/google-cloud-node-core/commit/538288c98c66f0710cd9c61565a95359698833ec))


### Miscellaneous Chores

* Migrate code from googleapis/gcp-metadata ([#53](https://github.com/googleapis/google-cloud-node-core/issues/53)) ([46bb52b](https://github.com/googleapis/google-cloud-node-core/commit/46bb52b5fdcf3dbed50b5a34ad3f86a63e1d2a20))
* Release 8.1.1 ([c4cb31d](https://github.com/googleapis/google-cloud-node-core/commit/c4cb31d10c65d5f4b3581fc9bfdf15b885e98ffd))
* Release 8.1.1 ([5b68ad8](https://github.com/googleapis/google-cloud-node-core/commit/5b68ad832c845c7e04f2ee80699bed7e7744d46c))
* Release 8.1.1 ([142a89d](https://github.com/googleapis/google-cloud-node-core/commit/142a89d0332d0e1a3fdb26849c13a7d006774c81))
* Release 8.1.1 ([b421074](https://github.com/googleapis/google-cloud-node-core/commit/b421074c29d3da95d698cb949384c89cbc92644c))
* Release 8.1.1 ([882cd99](https://github.com/googleapis/google-cloud-node-core/commit/882cd991b77520b4a6aceb75289c08956efacc79))
* Release 8.1.1 ([9b90266](https://github.com/googleapis/google-cloud-node-core/commit/9b90266e07edc748cd57df898e9e4c5a222e231a))
* Release 8.1.1 ([a493710](https://github.com/googleapis/google-cloud-node-core/commit/a493710bfc56ed275a13fd5ebe72a0acf8d50ad7))
* Release 8.1.1 ([cb196c9](https://github.com/googleapis/google-cloud-node-core/commit/cb196c9c9b129b10f7d186aa0c9ca7e3c6969616))
* Upgrade to Node 14, and update gaxios, ts, and gts ([#571](https://github.com/googleapis/google-cloud-node-core/issues/571)) ([b1242ac](https://github.com/googleapis/google-cloud-node-core/commit/b1242ac60937e9d144e50af4b7cd5d75821b0935))
* Upgrade to node 18 ([#627](https://github.com/googleapis/google-cloud-node-core/issues/627)) ([824fb17](https://github.com/googleapis/google-cloud-node-core/commit/824fb1793f1e0806e7f0e70f35f65d939b5b502b))


### Build System

* Drop node 10, update typescript to 4.6.3 ([#519](https://github.com/googleapis/google-cloud-node-core/issues/519)) ([c9d21ae](https://github.com/googleapis/google-cloud-node-core/commit/c9d21aea86caac0b11c21a1b3788a23c88179e42))
* Switch to latest typescirpt/gts ([#317](https://github.com/googleapis/google-cloud-node-core/issues/317)) ([5769f19](https://github.com/googleapis/google-cloud-node-core/commit/5769f191e8c3fa7919f7a91b51fc8db59131c601))

## [7.0.1](https://github.com/googleapis/gcp-metadata/compare/v7.0.0...v7.0.1) (2025-06-25)


### Bug Fixes

* Update package.json to correct value ([4b72e08](https://github.com/googleapis/gcp-metadata/commit/4b72e08b117a1b1f044984c733edb79c076d6dd6))

## [7.0.0](https://github.com/googleapis/gcp-metadata/compare/v6.1.0...v7.0.0) (2025-06-10)


### ⚠ BREAKING CHANGES

* upgrade to node 18 ([#627](https://github.com/googleapis/gcp-metadata/issues/627))

### Features

* Release 6.2.0 ([#641](https://github.com/googleapis/gcp-metadata/issues/641)) ([cbad405](https://github.com/googleapis/gcp-metadata/commit/cbad405a1c862bcc3c4f9d64f6ce0e906b437397))


### Bug Fixes

* Add extra logging for incorrect headers ([#637](https://github.com/googleapis/gcp-metadata/issues/637)) ([06c2886](https://github.com/googleapis/gcp-metadata/commit/06c2886291d5ab764cc00641e3226f87f7e1c433))
* **deps:** Update dependency google-logging-utils to v1 ([#638](https://github.com/googleapis/gcp-metadata/issues/638)) ([36a0f58](https://github.com/googleapis/gcp-metadata/commit/36a0f583cf5dd8f0a59c24e8b023d8cb1653d98c))
* Remove the space from the log system string ([#653](https://github.com/googleapis/gcp-metadata/issues/653)) ([acf3503](https://github.com/googleapis/gcp-metadata/commit/acf350369e06be05b3da5687ccc0be7ae9000787))


### Miscellaneous Chores

* Upgrade to node 18 ([#627](https://github.com/googleapis/gcp-metadata/issues/627)) ([19359b6](https://github.com/googleapis/gcp-metadata/commit/19359b6fbea8ff2ed0793a86674b084bd781a91c))

## [6.1.0](https://github.com/googleapis/gcp-metadata/compare/v6.0.0...v6.1.0) (2023-11-10)


### Features

* Add `universe` metadata handler ([#596](https://github.com/googleapis/gcp-metadata/issues/596)) ([0c02016](https://github.com/googleapis/gcp-metadata/commit/0c02016756754cddde6c4402fac1ceb6a318e82d))
* Bulk Metadata Requests ([#598](https://github.com/googleapis/gcp-metadata/issues/598)) ([0a51378](https://github.com/googleapis/gcp-metadata/commit/0a513788537173570f9910d368dd36717de7233b))


### Bug Fixes

* Repo Metadata ([#595](https://github.com/googleapis/gcp-metadata/issues/595)) ([470a872](https://github.com/googleapis/gcp-metadata/commit/470a8722df2b2fb2da1b076b73414d2e28a3ff4e))

## [6.0.0](https://github.com/googleapis/gcp-metadata/compare/v5.3.0...v6.0.0) (2023-07-17)


### ⚠ BREAKING CHANGES

* upgrade to Node 14, and update gaxios, ts, and gts ([#571](https://github.com/googleapis/gcp-metadata/issues/571))

### Miscellaneous Chores

* Upgrade to Node 14, and update gaxios, ts, and gts ([#571](https://github.com/googleapis/gcp-metadata/issues/571)) ([88ff3ff](https://github.com/googleapis/gcp-metadata/commit/88ff3ff3d9bd8be32126e7fe76cbf33e401f8db7))

## [5.3.0](https://github.com/googleapis/gcp-metadata/compare/v5.2.0...v5.3.0) (2023-06-28)


### Features

* Metadata Server Detection Configuration ([#562](https://github.com/googleapis/gcp-metadata/issues/562)) ([8c7c715](https://github.com/googleapis/gcp-metadata/commit/8c7c715f1fc22ad65554a745a93915713ca6698f))

## [5.2.0](https://github.com/googleapis/gcp-metadata/compare/v5.1.0...v5.2.0) (2023-01-03)


### Features

* Export `gcp-residency` tools ([#552](https://github.com/googleapis/gcp-metadata/issues/552)) ([ba9ae24](https://github.com/googleapis/gcp-metadata/commit/ba9ae24331b53199f81e97b6a88414050cfcf546))

## [5.1.0](https://github.com/googleapis/gcp-metadata/compare/v5.0.1...v5.1.0) (2022-12-07)


### Features

* Extend GCP Residency Detection Support ([#528](https://github.com/googleapis/gcp-metadata/issues/528)) ([2b35bb0](https://github.com/googleapis/gcp-metadata/commit/2b35bb0e6fb1a18294aeeebba91a6bf7b400385a))

## [5.0.1](https://github.com/googleapis/gcp-metadata/compare/v5.0.0...v5.0.1) (2022-09-09)


### Bug Fixes

* Remove pip install statements ([#1546](https://github.com/googleapis/gcp-metadata/issues/1546)) ([#529](https://github.com/googleapis/gcp-metadata/issues/529)) ([064c64c](https://github.com/googleapis/gcp-metadata/commit/064c64cec160ffe645e6946a5125960e3e269d7f))

## [5.0.0](https://github.com/googleapis/gcp-metadata/compare/v4.3.1...v5.0.0) (2022-04-22)


### ⚠ BREAKING CHANGES

* drop node 10, update typescript to 4.6.3 (#519)

### Build System

* drop node 10, update typescript to 4.6.3 ([#519](https://github.com/googleapis/gcp-metadata/issues/519)) ([688749b](https://github.com/googleapis/gcp-metadata/commit/688749bc50407f3cd127a0b10ae09487d6fe5aea))

### [4.3.1](https://www.github.com/googleapis/gcp-metadata/compare/v4.3.0...v4.3.1) (2021-09-02)


### Bug Fixes

* **build:** switch primary branch to main ([#481](https://www.github.com/googleapis/gcp-metadata/issues/481)) ([8a7965c](https://www.github.com/googleapis/gcp-metadata/commit/8a7965c47c077ef766e4b416358630c0b24b0af2))

## [4.3.0](https://www.github.com/googleapis/gcp-metadata/compare/v4.2.1...v4.3.0) (2021-06-10)


### Features

* add `gcf-owl-bot[bot]` to `ignoreAuthors` ([#450](https://www.github.com/googleapis/gcp-metadata/issues/450)) ([6a0f9ad](https://www.github.com/googleapis/gcp-metadata/commit/6a0f9ad09b6d16370d08c5d60541ce3ef64a9f97))

### [4.2.1](https://www.github.com/googleapis/gcp-metadata/compare/v4.2.0...v4.2.1) (2020-10-29)


### Bug Fixes

* **deps:** update dependency gaxios to v4 ([#420](https://www.github.com/googleapis/gcp-metadata/issues/420)) ([b99fb07](https://www.github.com/googleapis/gcp-metadata/commit/b99fb0764b8dbb8b083f73b8007816914db4f09a))

## [4.2.0](https://www.github.com/googleapis/gcp-metadata/compare/v4.1.4...v4.2.0) (2020-09-15)


### Features

* add support for GCE_METADATA_HOST environment variable ([#406](https://www.github.com/googleapis/gcp-metadata/issues/406)) ([eaf128a](https://www.github.com/googleapis/gcp-metadata/commit/eaf128ad5afc4357cde72d19b017b9474c070fea))

### [4.1.4](https://www.github.com/googleapis/gcp-metadata/compare/v4.1.3...v4.1.4) (2020-07-15)


### Bug Fixes

* **deps:** update dependency json-bigint to v1 ([#382](https://www.github.com/googleapis/gcp-metadata/issues/382)) ([ab4d8c3](https://www.github.com/googleapis/gcp-metadata/commit/ab4d8c3022903206d433bafc47c27815c6f85e36))

### [4.1.3](https://www.github.com/googleapis/gcp-metadata/compare/v4.1.2...v4.1.3) (2020-07-13)


### Bug Fixes

* **deps:** update dependency json-bigint to ^0.4.0 ([#378](https://www.github.com/googleapis/gcp-metadata/issues/378)) ([b214280](https://www.github.com/googleapis/gcp-metadata/commit/b2142807928c8c032509277900d35fccd1023f0f))

### [4.1.2](https://www.github.com/googleapis/gcp-metadata/compare/v4.1.1...v4.1.2) (2020-07-10)


### Bug Fixes

* **deps:** roll back dependency gcp-metadata to ^4.1.0 ([#373](https://www.github.com/googleapis/gcp-metadata/issues/373)) ([a45adef](https://www.github.com/googleapis/gcp-metadata/commit/a45adefd92418faa08c8a5014cedb844d1eb3ae6))

### [4.1.1](https://www.github.com/googleapis/gcp-metadata/compare/v4.1.0...v4.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#371](https://www.github.com/googleapis/gcp-metadata/issues/371)) ([5b4bb1c](https://www.github.com/googleapis/gcp-metadata/commit/5b4bb1c85e67e3ef0a6d1ec2ea316d560e03092f))

## [4.1.0](https://www.github.com/googleapis/gcp-metadata/compare/v4.0.1...v4.1.0) (2020-05-05)


### Features

* Introduces the GCE_METADATA_IP to allow using a different IP address for the GCE metadata server. ([#346](https://www.github.com/googleapis/gcp-metadata/issues/346)) ([ec0f82d](https://www.github.com/googleapis/gcp-metadata/commit/ec0f82d022b4b3aac95e94ee1d8e53cfac3b14a4))


### Bug Fixes

* do not check secondary host if GCE_METADATA_IP set ([#352](https://www.github.com/googleapis/gcp-metadata/issues/352)) ([64fa7d6](https://www.github.com/googleapis/gcp-metadata/commit/64fa7d68cbb76f455a3bfdcb27d58e7775eb789a))
* warn rather than throwing when we fail to connect to metadata server ([#351](https://www.github.com/googleapis/gcp-metadata/issues/351)) ([754a6c0](https://www.github.com/googleapis/gcp-metadata/commit/754a6c07d1a72615cbb5ebf9ee04475a9a12f1c0))

### [4.0.1](https://www.github.com/googleapis/gcp-metadata/compare/v4.0.0...v4.0.1) (2020-04-14)


### Bug Fixes

* **deps:** update dependency gaxios to v3 ([#326](https://www.github.com/googleapis/gcp-metadata/issues/326)) ([5667178](https://www.github.com/googleapis/gcp-metadata/commit/5667178429baff71ad5dab2a96f97f27b2106d57))
* apache license URL ([#468](https://www.github.com/googleapis/gcp-metadata/issues/468)) ([#336](https://www.github.com/googleapis/gcp-metadata/issues/336)) ([195dcd2](https://www.github.com/googleapis/gcp-metadata/commit/195dcd2d227ba496949e7ec0dcd77e5b9269066c))

## [4.0.0](https://www.github.com/googleapis/gcp-metadata/compare/v3.5.0...v4.0.0) (2020-03-19)


### ⚠ BREAKING CHANGES

* typescript@3.7.x has breaking changes; compiler now targets es2015
* drops Node 8 from engines field (#315)

### Features

* drops Node 8 from engines field ([#315](https://www.github.com/googleapis/gcp-metadata/issues/315)) ([acb6233](https://www.github.com/googleapis/gcp-metadata/commit/acb62337e8ba7f0b259ae4e553f19c5786207d84))


### Build System

* switch to latest typescirpt/gts ([#317](https://www.github.com/googleapis/gcp-metadata/issues/317)) ([fbb7158](https://www.github.com/googleapis/gcp-metadata/commit/fbb7158be62c9f1949b69079e35113be1e10495c))

## [3.5.0](https://www.github.com/googleapis/gcp-metadata/compare/v3.4.0...v3.5.0) (2020-03-03)


### Features

* add ECONNREFUSED to list of known errors for isAvailable() ([#309](https://www.github.com/googleapis/gcp-metadata/issues/309)) ([17ff6ea](https://www.github.com/googleapis/gcp-metadata/commit/17ff6ea361d02de31463532d4ab4040bf6276e0b))

## [3.4.0](https://www.github.com/googleapis/gcp-metadata/compare/v3.3.1...v3.4.0) (2020-02-24)


### Features

* significantly increase timeout if GCF environment detected ([#300](https://www.github.com/googleapis/gcp-metadata/issues/300)) ([8e507c6](https://www.github.com/googleapis/gcp-metadata/commit/8e507c645f69a11f508884b3181dc4414e579fcc))

### [3.3.1](https://www.github.com/googleapis/gcp-metadata/compare/v3.3.0...v3.3.1) (2020-01-30)


### Bug Fixes

* **isAvailable:** handle EHOSTDOWN and EHOSTUNREACH error codes ([#291](https://www.github.com/googleapis/gcp-metadata/issues/291)) ([ba8d9f5](https://www.github.com/googleapis/gcp-metadata/commit/ba8d9f50eac6cf8b439c1b66c48ace146c75f6e2))

## [3.3.0](https://www.github.com/googleapis/gcp-metadata/compare/v3.2.3...v3.3.0) (2019-12-16)


### Features

* add environment variable for configuring environment detection ([#275](https://www.github.com/googleapis/gcp-metadata/issues/275)) ([580cfa4](https://www.github.com/googleapis/gcp-metadata/commit/580cfa4a5f5d0041aa09ae85cfc5a4575dd3957f))
* cache response from isAvailable() method ([#274](https://www.github.com/googleapis/gcp-metadata/issues/274)) ([a05e13f](https://www.github.com/googleapis/gcp-metadata/commit/a05e13f1d1d61b1f9b9b1703bc37cdbdc022c93b))


### Bug Fixes

* fastFailMetadataRequest should not reject, if response already happened ([#273](https://www.github.com/googleapis/gcp-metadata/issues/273)) ([a6590c4](https://www.github.com/googleapis/gcp-metadata/commit/a6590c4fd8bc2dff3995c83d4c9175d5bd9f5e4a))

### [3.2.3](https://www.github.com/googleapis/gcp-metadata/compare/v3.2.2...v3.2.3) (2019-12-12)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([e4bf622](https://www.github.com/googleapis/gcp-metadata/commit/e4bf622e6654a51ddffc0921a15250130591db2f))

### [3.2.2](https://www.github.com/googleapis/gcp-metadata/compare/v3.2.1...v3.2.2) (2019-11-13)


### Bug Fixes

* **docs:** add jsdoc-region-tag plugin ([#264](https://www.github.com/googleapis/gcp-metadata/issues/264)) ([af8362b](https://www.github.com/googleapis/gcp-metadata/commit/af8362b5a35d270af00cb3696bbf7344810e9b0c))

### [3.2.1](https://www.github.com/googleapis/gcp-metadata/compare/v3.2.0...v3.2.1) (2019-11-08)


### Bug Fixes

* **deps:** update gaxios ([#257](https://www.github.com/googleapis/gcp-metadata/issues/257)) ([ba6e0b6](https://www.github.com/googleapis/gcp-metadata/commit/ba6e0b668635b4aa4ed10535ff021c02b2edf5ea))

## [3.2.0](https://www.github.com/googleapis/gcp-metadata/compare/v3.1.0...v3.2.0) (2019-10-10)


### Features

* add DEBUG_AUTH for digging into authentication issues ([#254](https://www.github.com/googleapis/gcp-metadata/issues/254)) ([804156d](https://www.github.com/googleapis/gcp-metadata/commit/804156d))

## [3.1.0](https://www.github.com/googleapis/gcp-metadata/compare/v3.0.0...v3.1.0) (2019-10-07)


### Features

* don't throw on ENETUNREACH ([#250](https://www.github.com/googleapis/gcp-metadata/issues/250)) ([88f2101](https://www.github.com/googleapis/gcp-metadata/commit/88f2101))

## [3.0.0](https://www.github.com/googleapis/gcp-metadata/compare/v2.0.4...v3.0.0) (2019-09-17)


### ⚠ BREAKING CHANGES

* isAvailable now tries both DNS and IP, choosing whichever responds first (#239)

### Features

* isAvailable now tries both DNS and IP, choosing whichever responds first ([#239](https://www.github.com/googleapis/gcp-metadata/issues/239)) ([25bc116](https://www.github.com/googleapis/gcp-metadata/commit/25bc116))

### [2.0.4](https://www.github.com/googleapis/gcp-metadata/compare/v2.0.3...v2.0.4) (2019-09-13)


### Bug Fixes

* IP address takes 15 seconds to timeout, vs., metadata returning immediately ([#235](https://www.github.com/googleapis/gcp-metadata/issues/235)) ([d04207b](https://www.github.com/googleapis/gcp-metadata/commit/d04207b))
* use 3s timeout rather than 15 default ([#237](https://www.github.com/googleapis/gcp-metadata/issues/237)) ([231ca5c](https://www.github.com/googleapis/gcp-metadata/commit/231ca5c))

### [2.0.3](https://www.github.com/googleapis/gcp-metadata/compare/v2.0.2...v2.0.3) (2019-09-12)


### Bug Fixes

* use IP for metadata server ([#233](https://www.github.com/googleapis/gcp-metadata/issues/233)) ([20a15cb](https://www.github.com/googleapis/gcp-metadata/commit/20a15cb))

### [2.0.2](https://www.github.com/googleapis/gcp-metadata/compare/v2.0.1...v2.0.2) (2019-08-26)


### Bug Fixes

* allow calls with no request, add JSON proto ([#224](https://www.github.com/googleapis/gcp-metadata/issues/224)) ([dc758b1](https://www.github.com/googleapis/gcp-metadata/commit/dc758b1))

### [2.0.1](https://www.github.com/googleapis/gcp-metadata/compare/v2.0.0...v2.0.1) (2019-06-26)


### Bug Fixes

* **docs:** make anchors work in jsdoc ([#212](https://www.github.com/googleapis/gcp-metadata/issues/212)) ([9174b43](https://www.github.com/googleapis/gcp-metadata/commit/9174b43))

## [2.0.0](https://www.github.com/googleapis/gcp-metadata/compare/v1.0.0...v2.0.0) (2019-05-07)


### Bug Fixes

* **deps:** update dependency gaxios to v2 ([#191](https://www.github.com/googleapis/gcp-metadata/issues/191)) ([ac8c1ef](https://www.github.com/googleapis/gcp-metadata/commit/ac8c1ef))


### Build System

* upgrade engines field to >=8.10.0 ([#194](https://www.github.com/googleapis/gcp-metadata/issues/194)) ([97c23c8](https://www.github.com/googleapis/gcp-metadata/commit/97c23c8))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#194)

## v1.0.0

02-14-2019 16:00 PST

### Bug Fixes
- fix: ask gaxios for text and not json ([#152](https://github.com/googleapis/gcp-metadata/pull/152))

### Documentation
- docs: update links in contrib guide ([#168](https://github.com/googleapis/gcp-metadata/pull/168))
- docs: add lint/fix example to contributing guide ([#160](https://github.com/googleapis/gcp-metadata/pull/160))

### Internal / Testing Changes
- build: use linkinator for docs test ([#166](https://github.com/googleapis/gcp-metadata/pull/166))
- chore(deps): update dependency @types/tmp to v0.0.34 ([#167](https://github.com/googleapis/gcp-metadata/pull/167))
- build: create docs test npm scripts ([#165](https://github.com/googleapis/gcp-metadata/pull/165))
- test: run system tests on GCB ([#157](https://github.com/googleapis/gcp-metadata/pull/157))
- build: test using @grpc/grpc-js in CI ([#164](https://github.com/googleapis/gcp-metadata/pull/164))
- chore: move CONTRIBUTING.md to root ([#162](https://github.com/googleapis/gcp-metadata/pull/162))
- chore(deps): update dependency gcx to v0.1.1 ([#159](https://github.com/googleapis/gcp-metadata/pull/159))
- chore(deps): update dependency gcx to v0.1.0 ([#158](https://github.com/googleapis/gcp-metadata/pull/158))
- chore(deps): update dependency gcx to v0.0.4 ([#155](https://github.com/googleapis/gcp-metadata/pull/155))
- chore(deps): update dependency googleapis to v37 ([#156](https://github.com/googleapis/gcp-metadata/pull/156))
- build: ignore googleapis.com in doc link check ([#153](https://github.com/googleapis/gcp-metadata/pull/153))
- build: check broken links in generated docs ([#149](https://github.com/googleapis/gcp-metadata/pull/149))
- chore(build): inject yoshi automation key ([#148](https://github.com/googleapis/gcp-metadata/pull/148))

## v0.9.3

12-10-2018 16:16 PST

### Dependencies
- chore(deps): update dependency googleapis to v36 ([#135](https://github.com/googleapis/gcp-metadata/pull/135))
- chore(deps): use gaxios for http requests ([#121](https://github.com/googleapis/gcp-metadata/pull/121))
- chore(deps): update dependency gts to ^0.9.0 ([#123](https://github.com/googleapis/gcp-metadata/pull/123))

### Internal / Testing Changes
- fix(build): fix Kokoro release script ([#141](https://github.com/googleapis/gcp-metadata/pull/141))
- Release v0.9.2 ([#140](https://github.com/googleapis/gcp-metadata/pull/140))
- build: add Kokoro configs for autorelease ([#138](https://github.com/googleapis/gcp-metadata/pull/138))
- Release gcp-metadata v0.9.1 ([#139](https://github.com/googleapis/gcp-metadata/pull/139))
- chore: always nyc report before calling codecov ([#134](https://github.com/googleapis/gcp-metadata/pull/134))
- chore: nyc ignore build/test by default ([#133](https://github.com/googleapis/gcp-metadata/pull/133))
- Sync repo build files ([#131](https://github.com/googleapis/gcp-metadata/pull/131))
- fix(build): fix system key decryption ([#128](https://github.com/googleapis/gcp-metadata/pull/128))
- refactor: use execa, move post install test to system ([#127](https://github.com/googleapis/gcp-metadata/pull/127))
- chore: add a synth.metadata
- test: add a system test ([#126](https://github.com/googleapis/gcp-metadata/pull/126))
- chore: update eslintignore config ([#122](https://github.com/googleapis/gcp-metadata/pull/122))
- chore: use latest npm on Windows ([#120](https://github.com/googleapis/gcp-metadata/pull/120))
- chore: update CircleCI config ([#119](https://github.com/googleapis/gcp-metadata/pull/119))
- chore: include build in eslintignore ([#115](https://github.com/googleapis/gcp-metadata/pull/115))

## v0.9.2

12-10-2018 14:01 PST

- chore(deps): update dependency googleapis to v36 ([#135](https://github.com/googleapis/gcp-metadata/pull/135))
- chore: always nyc report before calling codecov ([#134](https://github.com/googleapis/gcp-metadata/pull/134))
- chore: nyc ignore build/test by default ([#133](https://github.com/googleapis/gcp-metadata/pull/133))
- chore: Re-generated  to pick up changes in the API or client library generator. ([#131](https://github.com/googleapis/gcp-metadata/pull/131))
- fix(build): fix system key decryption ([#128](https://github.com/googleapis/gcp-metadata/pull/128))
- chore(deps): use gaxios for http requests ([#121](https://github.com/googleapis/gcp-metadata/pull/121))
- refactor: use execa, move post install test to system ([#127](https://github.com/googleapis/gcp-metadata/pull/127))
- chore: add a synth.metadata
- test: add a system test ([#126](https://github.com/googleapis/gcp-metadata/pull/126))
- chore(deps): update dependency gts to ^0.9.0 ([#123](https://github.com/googleapis/gcp-metadata/pull/123))
- chore: update eslintignore config ([#122](https://github.com/googleapis/gcp-metadata/pull/122))
- chore: use latest npm on Windows ([#120](https://github.com/googleapis/gcp-metadata/pull/120))
- chore: update CircleCI config ([#119](https://github.com/googleapis/gcp-metadata/pull/119))
- chore: include build in eslintignore ([#115](https://github.com/googleapis/gcp-metadata/pull/115))
- build: add Kokoro configs for autorelease ([#138](https://github.com/googleapis/gcp-metadata/pull/138))

## v0.9.1

12-10-2018 11:53 PST

- chore(deps): update dependency googleapis to v36 ([#135](https://github.com/googleapis/gcp-metadata/pull/135))
- chore: always nyc report before calling codecov ([#134](https://github.com/googleapis/gcp-metadata/pull/134))
- chore: nyc ignore build/test by default ([#133](https://github.com/googleapis/gcp-metadata/pull/133))
- chore: Re-generated  to pick up changes in the API or client library generator. ([#131](https://github.com/googleapis/gcp-metadata/pull/131))
- fix(build): fix system key decryption ([#128](https://github.com/googleapis/gcp-metadata/pull/128))
- chore(deps): use gaxios for http requests ([#121](https://github.com/googleapis/gcp-metadata/pull/121))
- refactor: use execa, move post install test to system ([#127](https://github.com/googleapis/gcp-metadata/pull/127))
- chore: add a synth.metadata
- test: add a system test ([#126](https://github.com/googleapis/gcp-metadata/pull/126))
- chore(deps): update dependency gts to ^0.9.0 ([#123](https://github.com/googleapis/gcp-metadata/pull/123))
- chore: update eslintignore config ([#122](https://github.com/googleapis/gcp-metadata/pull/122))
- chore: use latest npm on Windows ([#120](https://github.com/googleapis/gcp-metadata/pull/120))
- chore: update CircleCI config ([#119](https://github.com/googleapis/gcp-metadata/pull/119))
- chore: include build in eslintignore ([#115](https://github.com/googleapis/gcp-metadata/pull/115))

## v0.9.0

10-26-2018 13:10 PDT

- feat: allow custom headers ([#109](https://github.com/googleapis/gcp-metadata/pull/109))
- chore: update issue templates ([#108](https://github.com/googleapis/gcp-metadata/pull/108))
- chore: remove old issue template ([#106](https://github.com/googleapis/gcp-metadata/pull/106))
- build: run tests on node11 ([#105](https://github.com/googleapis/gcp-metadata/pull/105))
- chores(build): do not collect sponge.xml from windows builds ([#104](https://github.com/googleapis/gcp-metadata/pull/104))
- chores(build): run codecov on continuous builds ([#102](https://github.com/googleapis/gcp-metadata/pull/102))
- chore(deps): update dependency nock to v10 ([#103](https://github.com/googleapis/gcp-metadata/pull/103))
- chore: update new issue template ([#101](https://github.com/googleapis/gcp-metadata/pull/101))
- build: fix codecov uploading on Kokoro ([#97](https://github.com/googleapis/gcp-metadata/pull/97))
- Update kokoro config ([#95](https://github.com/googleapis/gcp-metadata/pull/95))
- Update CI config ([#93](https://github.com/googleapis/gcp-metadata/pull/93))
- Update kokoro config ([#91](https://github.com/googleapis/gcp-metadata/pull/91))
- Re-generate library using /synth.py ([#90](https://github.com/googleapis/gcp-metadata/pull/90))
- test: remove appveyor config ([#89](https://github.com/googleapis/gcp-metadata/pull/89))
- Update kokoro config ([#88](https://github.com/googleapis/gcp-metadata/pull/88))
- Enable prefer-const in the eslint config ([#87](https://github.com/googleapis/gcp-metadata/pull/87))
- Enable no-var in eslint ([#86](https://github.com/googleapis/gcp-metadata/pull/86))

### New Features

A new option, `headers`, has been added to allow metadata queries to be sent with custom headers.

## v0.8.0

**This release has breaking changes**.  Please take care when upgrading to the latest version.

#### Dropped support for Node.js 4.x and 9.x
This library is no longer tested against versions 4.x and 9.x of Node.js.  Please upgrade to the latest supported LTS version!

#### Return type of `instance()` and `project()` has changed
The `instance()` and `project()` methods are much more selective about which properties they will accept.

The only accepted properties are `params` and `properties`.  The `instance()` and `project()` methods also now directly return the data instead of a response object.

#### Changes in how large number valued properties are handled

Previously large number-valued properties were being silently losing precision when
returned by this library (as a number). In the cases where a number valued property
returned by the metadata service is too large to represent as a JavaScript number, we
will now return the value as a BigNumber (from the bignumber.js) library. Numbers that
do fit into the JavaScript number range will continue to be returned as numbers.
For more details see [#74](https://github.com/googleapis/gcp-metadata/pull/74).

### Breaking Changes
- chore: drop support for node.js 4 and 9 ([#68](https://github.com/googleapis/gcp-metadata/pull/68))
- fix: quarantine axios config ([#62](https://github.com/googleapis/gcp-metadata/pull/62))

### Implementation Changes
- fix: properly handle large numbers in responses ([#74](https://github.com/googleapis/gcp-metadata/pull/74))

### Dependencies
- chore(deps): update dependency pify to v4 ([#73](https://github.com/googleapis/gcp-metadata/pull/73))

### Internal / Testing Changes
- Move to the new github org ([#84](https://github.com/googleapis/gcp-metadata/pull/84))
- Update CI config ([#83](https://github.com/googleapis/gcp-metadata/pull/83))
- Retry npm install in CI ([#81](https://github.com/googleapis/gcp-metadata/pull/81))
- Update CI config ([#79](https://github.com/googleapis/gcp-metadata/pull/79))
- chore(deps): update dependency nyc to v13 ([#77](https://github.com/googleapis/gcp-metadata/pull/77))
- add key for system tests
- increase kitchen test timeout
- add a lint npm script
- update npm scripts
- add a synth file and run it ([#75](https://github.com/googleapis/gcp-metadata/pull/75))
- chore(deps): update dependency assert-rejects to v1 ([#72](https://github.com/googleapis/gcp-metadata/pull/72))
- chore: ignore package-log.json ([#71](https://github.com/googleapis/gcp-metadata/pull/71))
- chore: update renovate config ([#70](https://github.com/googleapis/gcp-metadata/pull/70))
- test: throw on deprecation
- chore(deps): update dependency typescript to v3 ([#67](https://github.com/googleapis/gcp-metadata/pull/67))
- chore: make it OSPO compliant ([#66](https://github.com/googleapis/gcp-metadata/pull/66))
- chore(deps): update dependency gts to ^0.8.0 ([#65](https://github.com/googleapis/gcp-metadata/pull/65))
