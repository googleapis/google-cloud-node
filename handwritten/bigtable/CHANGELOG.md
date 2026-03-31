# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/bigtable?activeTab=versions

## [6.5.0](https://github.com/googleapis/nodejs-bigtable/compare/v6.4.1...v6.5.0) (2026-01-28)


### Features

* Admin function modernization ([#1748](https://github.com/googleapis/nodejs-bigtable/issues/1748)) ([a0f216e](https://github.com/googleapis/nodejs-bigtable/commit/a0f216e68d8e90000d00bba49899e9306dd687f9))


### Bug Fixes

* Client side metrics should record the version number of @google-cloud/bigtable not the customer package version ([#1752](https://github.com/googleapis/nodejs-bigtable/issues/1752)) ([3e532ab](https://github.com/googleapis/nodejs-bigtable/commit/3e532ab657409c7acd09008c143c41d36d9efd41))
* Correct project id on client side metrics by avoiding getProjectId calls with the metric service client ([#1757](https://github.com/googleapis/nodejs-bigtable/issues/1757)) ([a719d9f](https://github.com/googleapis/nodejs-bigtable/commit/a719d9f295c91e5b63592e34954059a9fa8fd8b3))
* **deps:** Update dependency arrify to v2.0.1 ([#1588](https://github.com/googleapis/nodejs-bigtable/issues/1588)) ([fccdbbb](https://github.com/googleapis/nodejs-bigtable/commit/fccdbbb0309191a731c23b196a4c19c59e057cd7))
* Record grpc code string for client side metrics instead of grpc code number ([#1754](https://github.com/googleapis/nodejs-bigtable/issues/1754)) ([be5b598](https://github.com/googleapis/nodejs-bigtable/commit/be5b598dd3fbb08e6c7bb5960b8c04a7e54da16a))

## [6.4.1](https://github.com/googleapis/nodejs-bigtable/compare/v6.4.0...v6.4.1) (2025-09-09)


### Bug Fixes

* Directly import JS-native impl for crc32c on non-x64 platforms to avoid segfault ([#1715](https://github.com/googleapis/nodejs-bigtable/issues/1715)) ([9848963](https://github.com/googleapis/nodejs-bigtable/commit/98489637befe779df0438f466eecb0428222a29a))

## [6.4.0](https://github.com/googleapis/nodejs-bigtable/compare/v6.3.0...v6.4.0) (2025-08-21)


### Features

* Enable csm by default ([#1695](https://github.com/googleapis/nodejs-bigtable/issues/1695)) ([9744aa3](https://github.com/googleapis/nodejs-bigtable/commit/9744aa355e87c2170019c52b58d1045160f19e7c))
* For application latencies timed stream a few cosmetic changes are needed ([#1645](https://github.com/googleapis/nodejs-bigtable/issues/1645)) ([75d1a6f](https://github.com/googleapis/nodejs-bigtable/commit/75d1a6f5bc8d8cd74214bdf3c9db9d06786f9575))

## [6.3.0](https://github.com/googleapis/nodejs-bigtable/compare/v6.2.0...v6.3.0) (2025-08-11)


### Features

* Add client side metrics for checkAndMutateRow calls ([#1661](https://github.com/googleapis/nodejs-bigtable/issues/1661)) ([c258ea1](https://github.com/googleapis/nodejs-bigtable/commit/c258ea1b29203aad3eaaf9cfe64ddabb8c1018bf))
* Add client side metrics for readModifyWriteRow calls ([#1656](https://github.com/googleapis/nodejs-bigtable/issues/1656)) ([2129312](https://github.com/googleapis/nodejs-bigtable/commit/2129312401bf9f5b8e51b13ac576cb765de401df))
* Client side metrics support for mutateRows ([#1638](https://github.com/googleapis/nodejs-bigtable/issues/1638)) ([7601e4d](https://github.com/googleapis/nodejs-bigtable/commit/7601e4da115ff6a5da411cc857917b579c70ced7))
* Collect client side metrics for sampleRowKeys calls ([#1660](https://github.com/googleapis/nodejs-bigtable/issues/1660)) ([6ed98fa](https://github.com/googleapis/nodejs-bigtable/commit/6ed98faefe446e67f83fd5394aae30374fd3ec3a))
* For client side metrics, record metrics as MUTATE_ROW for single row mutates ([#1650](https://github.com/googleapis/nodejs-bigtable/issues/1650)) ([f190a8c](https://github.com/googleapis/nodejs-bigtable/commit/f190a8c322498ddfbe73406759a43a268c16bdc4))
* Record ReadRows application latencies for client side metrics ([#1647](https://github.com/googleapis/nodejs-bigtable/issues/1647)) ([8af801b](https://github.com/googleapis/nodejs-bigtable/commit/8af801b3ecd7ff5e30e6c8cc67bd4123bdf34ee9))


### Bug Fixes

* FirstResponseLatencies should only be collected for readRows calls ([#1658](https://github.com/googleapis/nodejs-bigtable/issues/1658)) ([99cf5a6](https://github.com/googleapis/nodejs-bigtable/commit/99cf5a6010249ed0eedd88f23b2d32cacb106c07))

## [6.2.0](https://github.com/googleapis/nodejs-bigtable/compare/v6.1.0...v6.2.0) (2025-07-23)


### Features

* Add client side metrics collection to readRows calls ([#1571](https://github.com/googleapis/nodejs-bigtable/issues/1571)) ([71f4d78](https://github.com/googleapis/nodejs-bigtable/commit/71f4d78422137c88f1521be45004982367dbda31))
* Add plumbing to support unary calls for client side metric collection ([#1631](https://github.com/googleapis/nodejs-bigtable/issues/1631)) ([c267ede](https://github.com/googleapis/nodejs-bigtable/commit/c267ede0140aa29bc75feada93899a4945980375))
* Add support for Execute Query ([#1613](https://github.com/googleapis/nodejs-bigtable/issues/1613)) ([e3894ed](https://github.com/googleapis/nodejs-bigtable/commit/e3894edf4fc881153432f77ce976141397dc0348))
* Initial timed stream implementation for application latencies ([#1639](https://github.com/googleapis/nodejs-bigtable/issues/1639)) ([ca490e8](https://github.com/googleapis/nodejs-bigtable/commit/ca490e80f2359156475e52c5f72fe0a9fe8e9740))


### Bug Fixes

* In Client-side metrics makes sure that the right views get created for the right metrics ([#1590](https://github.com/googleapis/nodejs-bigtable/issues/1590)) ([6cb7cdd](https://github.com/googleapis/nodejs-bigtable/commit/6cb7cddf42ff1fe29b2ae4a729739bc12c3d4942))

## [6.1.0](https://github.com/googleapis/nodejs-bigtable/compare/v6.0.0...v6.1.0) (2025-05-30)


### Features

* Add full support for Universe Domain ([#1604](https://github.com/googleapis/nodejs-bigtable/issues/1604)) ([4562e23](https://github.com/googleapis/nodejs-bigtable/commit/4562e2329e734c0c9d9f00cfa83aa2be13e9a7fe))

## [6.0.0](https://github.com/googleapis/nodejs-bigtable/compare/v5.1.2...v6.0.0) (2025-04-22)


### ⚠ BREAKING CHANGES

* migrate to Node 18 ([#1582](https://github.com/googleapis/nodejs-bigtable/issues/1582))

### Features

* Add fields and the BackupType proto for Hot Backups ([#1439](https://github.com/googleapis/nodejs-bigtable/issues/1439)) ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))
* Add MergeToCell to Mutation APIs ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))
* Add min, max, hll aggregators and more types ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))
* Add plumbing PR for client side metrics to support the open telemetry instruments ([#1569](https://github.com/googleapis/nodejs-bigtable/issues/1569)) ([c37a451](https://github.com/googleapis/nodejs-bigtable/commit/c37a451c52ff5639fc9f5e76c88e93ba549fe6c9))
* Add the MetricsCollector for client side metrics ([#1566](https://github.com/googleapis/nodejs-bigtable/issues/1566)) ([d475ef2](https://github.com/googleapis/nodejs-bigtable/commit/d475ef2131ab1d18d70b2666d9f3405ad8a21449))
* Add the plumbing for application blocking latencies client side metrics ([#1575](https://github.com/googleapis/nodejs-bigtable/issues/1575)) ([967f440](https://github.com/googleapis/nodejs-bigtable/commit/967f440fbcdc29040dddfae561b03f3c3462b671))
* Bigtable authorized views requests on the Data plane ([#1509](https://github.com/googleapis/nodejs-bigtable/issues/1509)) ([da373b5](https://github.com/googleapis/nodejs-bigtable/commit/da373b5dcc51b459527c0797ac237c073364ca36))
* Move the metrics handler fixture ([#1570](https://github.com/googleapis/nodejs-bigtable/issues/1570)) ([c97ebcc](https://github.com/googleapis/nodejs-bigtable/commit/c97ebcc6b9b8c36e0f39b79dd3ab75aaef6c52c5))
* Publish ProtoRows Message ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))
* Publish the Cloud Bigtable ExecuteQuery API ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))
* Update Go Bigtable import path ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))
* Update Go Datastore import path ([433a8e3](https://github.com/googleapis/nodejs-bigtable/commit/433a8e347b21dbdba5b810141ecedbcc0daa9177))


### Bug Fixes

* Address assertion error in TestReadRows_Retry_LastScannedRow conformance test ([#1521](https://github.com/googleapis/nodejs-bigtable/issues/1521)) ([0552638](https://github.com/googleapis/nodejs-bigtable/commit/0552638ca4c820dadcd66633d1f555ab3e5b1937))
* Check and mutate generic header conformance test ([#1551](https://github.com/googleapis/nodejs-bigtable/issues/1551)) ([7f1099a](https://github.com/googleapis/nodejs-bigtable/commit/7f1099afbd5af1639b843285a9ce6358f067e50e))
* Conformance test sample rowkeys generic deadline ([#1562](https://github.com/googleapis/nodejs-bigtable/issues/1562)) ([2fdf98f](https://github.com/googleapis/nodejs-bigtable/commit/2fdf98f9398761046f41bd58e00258f0d4963a3d))
* Fix plumbing errors for client side metrics collection ([#1583](https://github.com/googleapis/nodejs-bigtable/issues/1583)) ([574c2f4](https://github.com/googleapis/nodejs-bigtable/commit/574c2f473e88174c05889e0294b2d25de2ad11dd))
* Fix TestReadRows_Generic_CloseClient conformance test by passing grpc status codes for closed client errors ([#1524](https://github.com/googleapis/nodejs-bigtable/issues/1524)) ([8524174](https://github.com/googleapis/nodejs-bigtable/commit/8524174d9214c4391e9f1c06458c206acd685dc2))
* Paused scan test is now fixed  ([#1539](https://github.com/googleapis/nodejs-bigtable/issues/1539)) ([d009a8f](https://github.com/googleapis/nodejs-bigtable/commit/d009a8f9bb86c2efa192e98e565cd7b305700ff9))
* Sample rowkey generic header conformance test ([#1550](https://github.com/googleapis/nodejs-bigtable/issues/1550)) ([6ef7671](https://github.com/googleapis/nodejs-bigtable/commit/6ef76713dc8823cfb2131a60f3a09174d42b655c))
* TestMutateRow_Generic_Headers ([#1540](https://github.com/googleapis/nodejs-bigtable/issues/1540)) ([f6176c1](https://github.com/googleapis/nodejs-bigtable/commit/f6176c110f832dbacc14ac60fa1870e69aa139ce))
* Update owlbot.py to exculde sync repo ([#1549](https://github.com/googleapis/nodejs-bigtable/issues/1549)) ([f1ad565](https://github.com/googleapis/nodejs-bigtable/commit/f1ad565b321b0d45baed5c3304b4a9990c4b9c41))
* Update sync-repo-settings.yaml to make owl bot optional ([#1547](https://github.com/googleapis/nodejs-bigtable/issues/1547)) ([d745412](https://github.com/googleapis/nodejs-bigtable/commit/d745412dd43965d5d8ac7f83c823314043bc0fca))
* Use the universe domain if it is provided by the user ([#1563](https://github.com/googleapis/nodejs-bigtable/issues/1563)) ([d26ecb8](https://github.com/googleapis/nodejs-bigtable/commit/d26ecb8d2260b434d2f37abf28b92e50db25c45d))


### Miscellaneous Chores

* Migrate to Node 18 ([#1582](https://github.com/googleapis/nodejs-bigtable/issues/1582)) ([e50b67d](https://github.com/googleapis/nodejs-bigtable/commit/e50b67da62f9640c10a32bd9e0ff067fc522a7b0))

## [5.1.2](https://github.com/googleapis/nodejs-bigtable/compare/v5.1.1...v5.1.2) (2024-07-22)


### Bug Fixes

* Throw away excess data in order to avoid delivering duplicate data ([#1453](https://github.com/googleapis/nodejs-bigtable/issues/1453)) ([069239d](https://github.com/googleapis/nodejs-bigtable/commit/069239dce83498293e86851d37ad5943b5d919da))

## [5.1.1](https://github.com/googleapis/nodejs-bigtable/compare/v5.1.0...v5.1.1) (2024-07-11)


### Bug Fixes

* Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ([#1444](https://github.com/googleapis/nodejs-bigtable/issues/1444)) ([2d8de32](https://github.com/googleapis/nodejs-bigtable/commit/2d8de3247595a08c5cd0f7b42a59eb44dd255797))
* Remove custom readrows retry logic and rely on gax for retries ([#1422](https://github.com/googleapis/nodejs-bigtable/issues/1422)) ([3e0a46e](https://github.com/googleapis/nodejs-bigtable/commit/3e0a46e1a9bf68ac8f4b74f9a202291d00681074))

## [5.1.0](https://github.com/googleapis/nodejs-bigtable/compare/v5.0.0...v5.1.0) (2024-05-28)


### Features

* Add feature for copying backups ([#1153](https://github.com/googleapis/nodejs-bigtable/issues/1153)) ([91f85b5](https://github.com/googleapis/nodejs-bigtable/commit/91f85b53340b9bf0bfb4620a4027333890030efe))
* Add String type with Utf8Raw encoding to Bigtable API ([#1419](https://github.com/googleapis/nodejs-bigtable/issues/1419)) ([724b711](https://github.com/googleapis/nodejs-bigtable/commit/724b7118972e6697e3fd648b5d6ce2d047ab2b6a))
* Publish Automated Backups protos ([#1391](https://github.com/googleapis/nodejs-bigtable/issues/1391)) ([17838ed](https://github.com/googleapis/nodejs-bigtable/commit/17838eda19b001e322765c33a83a756eeeb68963))
* Trusted Private Cloud support, use the universeDomain parameter ([#1386](https://github.com/googleapis/nodejs-bigtable/issues/1386)) ([c0c287e](https://github.com/googleapis/nodejs-bigtable/commit/c0c287e2d386758609f57f3efee78b18fc9d8b7d))


### Bug Fixes

* **deps:** Update dependency @google-cloud/precise-date to v4 ([#1318](https://github.com/googleapis/nodejs-bigtable/issues/1318)) ([9dcef90](https://github.com/googleapis/nodejs-bigtable/commit/9dcef901b0cc7a52afb4c3f85622bd08e67d7429))
* Extend timeouts for deleting snapshots, backups and tables ([#1387](https://github.com/googleapis/nodejs-bigtable/issues/1387)) ([1a6f59a](https://github.com/googleapis/nodejs-bigtable/commit/1a6f59afd238ccda4427251cbe0c71c8db37568e))
* Fix flakey test by extending timeout ([#1350](https://github.com/googleapis/nodejs-bigtable/issues/1350)) ([906ac79](https://github.com/googleapis/nodejs-bigtable/commit/906ac796e3aaf724d00607854162bdefedcee96d))
* Improve retry logic for streaming API calls ([#1372](https://github.com/googleapis/nodejs-bigtable/issues/1372)) ([e8083a4](https://github.com/googleapis/nodejs-bigtable/commit/e8083a4c71e0523e196911fbf6262ff8fe6272de))
* Remove the watermarks ([#1313](https://github.com/googleapis/nodejs-bigtable/issues/1313)) ([0126a0e](https://github.com/googleapis/nodejs-bigtable/commit/0126a0ea1e4b6a845acb4e5600ddb3082443d310))

## [5.0.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.6.1...v5.0.0) (2023-08-10)


### ⚠ BREAKING CHANGES

* upgrade to Node 14 ([#1311](https://github.com/googleapis/nodejs-bigtable/issues/1311))

### Miscellaneous Chores

* Upgrade to Node 14 ([#1311](https://github.com/googleapis/nodejs-bigtable/issues/1311)) ([4330cb2](https://github.com/googleapis/nodejs-bigtable/commit/4330cb238ec887e85456cde0f18f3881caca5e14))

## [4.6.1](https://github.com/googleapis/nodejs-bigtable/compare/v4.6.0...v4.6.1) (2023-05-30)


### Bug Fixes

* Properly handle asynchronous read from stream ([#1284](https://github.com/googleapis/nodejs-bigtable/issues/1284)) ([55d86ba](https://github.com/googleapis/nodejs-bigtable/commit/55d86baaf554247c0c3d063fc790a37569f3e77b)). This could result in silently dropped rows in a `createReadStream`. The bug is active when the `ReadRows` stream would be piped into a consumer that would defer the processing of the rows until the next event loop run (i.e. use a `Transform` that would defer the callback invocation via `setTimeout()`).


## [4.6.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.5.2...v4.6.0) (2023-05-26)


### Features

* Add ChangeStreamConfig to CreateTable and UpdateTable ([#1269](https://github.com/googleapis/nodejs-bigtable/issues/1269)) ([2b05fa4](https://github.com/googleapis/nodejs-bigtable/commit/2b05fa4c7ad37fa4478f5de3cf5645b44b34ecfc))

## [4.5.2](https://github.com/googleapis/nodejs-bigtable/compare/v4.5.1...v4.5.2) (2023-05-24)


### Bug Fixes

* Parsing for qualifiers with colon characters ([#1277](https://github.com/googleapis/nodejs-bigtable/issues/1277)) ([b80f533](https://github.com/googleapis/nodejs-bigtable/commit/b80f5338ae1721659c61e48d80ba976c148c8087))

## [4.5.1](https://github.com/googleapis/nodejs-bigtable/compare/v4.5.0...v4.5.1) (2023-04-28)


### Bug Fixes

* Remove bigtable instances left over when system tests run ([#1265](https://github.com/googleapis/nodejs-bigtable/issues/1265)) ([0526612](https://github.com/googleapis/nodejs-bigtable/commit/0526612c1023816053775fa1956cbb8b97f49b00))

## [4.5.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.4.0...v4.5.0) (2023-03-20)


### Features

* Add npm run compile to the testproxy command ([#1258](https://github.com/googleapis/nodejs-bigtable/issues/1258)) ([52c06a2](https://github.com/googleapis/nodejs-bigtable/commit/52c06a2684824f10e218856f632da7e4e252b2bf))


### Bug Fixes

* Always set the retry attempt to 0 for now ([#1251](https://github.com/googleapis/nodejs-bigtable/issues/1251)) ([5ee6f19](https://github.com/googleapis/nodejs-bigtable/commit/5ee6f19f6dd6fee0d48e692242e99c1966bb8df6))

## [4.4.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.3.0...v4.4.0) (2023-03-01)


### Features

* Add new_partitions field for CloseStream for Cloud Bigtable ChangeStream ([#1247](https://github.com/googleapis/nodejs-bigtable/issues/1247)) ([ecbdb52](https://github.com/googleapis/nodejs-bigtable/commit/ecbdb52ddc920bd493b284fb7d96b359a2f773f9))

## [4.3.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.2.0...v4.3.0) (2023-02-10)


### Features

* Publish the Cloud Bigtable Change Streams ([#1237](https://github.com/googleapis/nodejs-bigtable/issues/1237)) ([000a353](https://github.com/googleapis/nodejs-bigtable/commit/000a353f05fa65bc0a7dc551c777ac55c6c08875))


### Bug Fixes

* Out of order read rows fix ([#1231](https://github.com/googleapis/nodejs-bigtable/issues/1231)) ([7dbaa6e](https://github.com/googleapis/nodejs-bigtable/commit/7dbaa6eebc5df6c073c78ff77f38b70c3e6f29d5))

## [4.2.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.1.1...v4.2.0) (2023-01-31)


### Features

* Added SuggestConversationSummary RPC ([#1182](https://github.com/googleapis/nodejs-bigtable/issues/1182)) ([355925e](https://github.com/googleapis/nodejs-bigtable/commit/355925ee519fa27e216a76c500ab8c94de1d2c96))

## [4.1.1](https://github.com/googleapis/nodejs-bigtable/compare/v4.1.0...v4.1.1) (2023-01-30)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#1186](https://github.com/googleapis/nodejs-bigtable/issues/1186)) ([4b1dd6e](https://github.com/googleapis/nodejs-bigtable/commit/4b1dd6e8d0f1b215a3e8183e5893e9dd01c15eed))
* Pipe metadata along ([#1178](https://github.com/googleapis/nodejs-bigtable/issues/1178)) ([0822e4d](https://github.com/googleapis/nodejs-bigtable/commit/0822e4d17d28e47b5377d6d3853a4c5bc125a2e9))

## [4.1.0](https://github.com/googleapis/nodejs-bigtable/compare/v4.0.5...v4.1.0) (2022-09-26)


### Features

* Publish the RequestStats proto ([#1177](https://github.com/googleapis/nodejs-bigtable/issues/1177)) ([89dfc83](https://github.com/googleapis/nodejs-bigtable/commit/89dfc83b4fed199d70934c34ab7f4c4d17796418))

## [4.0.5](https://github.com/googleapis/nodejs-bigtable/compare/v4.0.4...v4.0.5) (2022-09-23)


### Bug Fixes

* Test is less restrictive to allow changes ([#1160](https://github.com/googleapis/nodejs-bigtable/issues/1160)) ([7d05b96](https://github.com/googleapis/nodejs-bigtable/commit/7d05b96f0adcbcdab2598ea52bc6a60005c7251b))

## [4.0.4](https://github.com/googleapis/nodejs-bigtable/compare/v4.0.3...v4.0.4) (2022-09-14)


### Bug Fixes

* **deps:** Use grpc-gcp v1.0.0 ([#1156](https://github.com/googleapis/nodejs-bigtable/issues/1156)) ([6196424](https://github.com/googleapis/nodejs-bigtable/commit/61964246cc79b0cb70f18d6bc1e524c01fdd51b0))

## [4.0.3](https://github.com/googleapis/nodejs-bigtable/compare/v4.0.2...v4.0.3) (2022-09-09)


### Bug Fixes

* **deps:** Update dependency uuid to v9 ([#1152](https://github.com/googleapis/nodejs-bigtable/issues/1152)) ([dea0425](https://github.com/googleapis/nodejs-bigtable/commit/dea0425df05218cf7fb42e4ef72f3952782f7bbb))
* Wait for instances to get created in all samples ([#1149](https://github.com/googleapis/nodejs-bigtable/issues/1149)) ([c9dd9c6](https://github.com/googleapis/nodejs-bigtable/commit/c9dd9c614b963763b361394332ad227a86eb0de9))

## [4.0.2](https://github.com/googleapis/nodejs-bigtable/compare/v4.0.1...v4.0.2) (2022-08-27)


### Bug Fixes

* add operation ([#1145](https://github.com/googleapis/nodejs-bigtable/issues/1145)) ([3a1e282](https://github.com/googleapis/nodejs-bigtable/commit/3a1e2827990729df078fe1d075c100ace1833a96))
* do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-bigtable/issues/1553)) ([#1148](https://github.com/googleapis/nodejs-bigtable/issues/1148)) ([262d3d7](https://github.com/googleapis/nodejs-bigtable/commit/262d3d729211da7fa23043c64de59ba67de2ce5b))
* use google-gax v3.3.0 ([262d3d7](https://github.com/googleapis/nodejs-bigtable/commit/262d3d729211da7fa23043c64de59ba67de2ce5b))

## [4.0.1](https://github.com/googleapis/nodejs-bigtable/compare/v4.0.0...v4.0.1) (2022-08-25)


### Bug Fixes

* change import long to require ([#1139](https://github.com/googleapis/nodejs-bigtable/issues/1139)) ([a7079bc](https://github.com/googleapis/nodejs-bigtable/commit/a7079bc414b9d9e64cd47766c68d41740c9ce9e3))
* **deps:** update dependency @google-cloud/bigtable to v4 ([#1127](https://github.com/googleapis/nodejs-bigtable/issues/1127)) ([c88801a](https://github.com/googleapis/nodejs-bigtable/commit/c88801a8cd872a6bb837e8880f8e7294b6255fb7))
* fixed the closed client test ([#1138](https://github.com/googleapis/nodejs-bigtable/issues/1138)) ([7f6f0e6](https://github.com/googleapis/nodejs-bigtable/commit/7f6f0e629a7b3f15c9d4bab06b3209d35656d992))
* Integration test close function again ([#1103](https://github.com/googleapis/nodejs-bigtable/issues/1103)) ([10dcd21](https://github.com/googleapis/nodejs-bigtable/commit/10dcd217a6f276f53f58f3cd89650040d7b88089))
* Make a ten minute timeout for delete operations ([#1143](https://github.com/googleapis/nodejs-bigtable/issues/1143)) ([94e61dd](https://github.com/googleapis/nodejs-bigtable/commit/94e61dd05134d2d1cb4e04a94f7a4f927da90ea2))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bigtable/issues/1546)) ([#1140](https://github.com/googleapis/nodejs-bigtable/issues/1140)) ([5bea48f](https://github.com/googleapis/nodejs-bigtable/commit/5bea48f9fcf50575453f6ee85881785e07917543))
* Wait for long running operation on flakey test ([#1141](https://github.com/googleapis/nodejs-bigtable/issues/1141)) ([7be90ee](https://github.com/googleapis/nodejs-bigtable/commit/7be90ee1011ad44f2f6cd998443a95b73aaa2c55))

## [4.0.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.12.0...v4.0.0) (2022-07-04)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#1089)

### Features

* Autoscaler ([#1077](https://github.com/googleapis/nodejs-bigtable/issues/1077)) ([e5f6fdb](https://github.com/googleapis/nodejs-bigtable/commit/e5f6fdb5345a19055be812c59796a2e08ea45345))
* Errors from gax layer ([#1090](https://github.com/googleapis/nodejs-bigtable/issues/1090)) ([ecae5f3](https://github.com/googleapis/nodejs-bigtable/commit/ecae5f3bc00210c44513a40895a3c128938383bf))
* Multi cluster routing ([#1007](https://github.com/googleapis/nodejs-bigtable/issues/1007)) ([3468cd9](https://github.com/googleapis/nodejs-bigtable/commit/3468cd99f3ea82d06b76359087a82845394dfd03))
* Remove need to pass location parameter along ([#1093](https://github.com/googleapis/nodejs-bigtable/issues/1093)) ([75c1a30](https://github.com/googleapis/nodejs-bigtable/commit/75c1a301cd3ec91c7b251b384307687d081525b9))


### Bug Fixes

* **deps:** update dependency @google-cloud/precise-date to v3 ([#1097](https://github.com/googleapis/nodejs-bigtable/issues/1097)) ([e8a5ab8](https://github.com/googleapis/nodejs-bigtable/commit/e8a5ab8bc2dd800a78c625ecb42c230c446e092f))
* **deps:** update dependency @google-cloud/projectify to v3 ([#1102](https://github.com/googleapis/nodejs-bigtable/issues/1102)) ([b997a6b](https://github.com/googleapis/nodejs-bigtable/commit/b997a6b7be9f58a2d2d4884527260a643ae84252))
* **deps:** update dependency @google-cloud/promisify to v3 ([#1085](https://github.com/googleapis/nodejs-bigtable/issues/1085)) ([62fc17e](https://github.com/googleapis/nodejs-bigtable/commit/62fc17ea517f9b61270b9227226619bd0259a553))
* **deps:** update dependency grpc-gcp to v0.4.2 ([#1074](https://github.com/googleapis/nodejs-bigtable/issues/1074)) ([54f4202](https://github.com/googleapis/nodejs-bigtable/commit/54f42024c0d3b6dcb117c8ac9811ff14d413454d))
* fixes for dynamic routing and streaming descriptors ([#1088](https://github.com/googleapis/nodejs-bigtable/issues/1088)) ([bdca7d1](https://github.com/googleapis/nodejs-bigtable/commit/bdca7d18308d5cb1797f6fab5603e55fb3f726b2))


### Build System

* update library to use Node 12 ([#1089](https://github.com/googleapis/nodejs-bigtable/issues/1089)) ([033bfc8](https://github.com/googleapis/nodejs-bigtable/commit/033bfc878c2aeb40cc40ca66f905e47810f42c12))

## [3.13.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.12.0...v3.13.0) (2022-05-11)


### Features

* Multi cluster routing ([#1007](https://github.com/googleapis/nodejs-bigtable/issues/1007)) ([3468cd9](https://github.com/googleapis/nodejs-bigtable/commit/3468cd99f3ea82d06b76359087a82845394dfd03))


### Bug Fixes

* **deps:** update dependency grpc-gcp to v0.4.2 ([#1074](https://github.com/googleapis/nodejs-bigtable/issues/1074)) ([54f4202](https://github.com/googleapis/nodejs-bigtable/commit/54f42024c0d3b6dcb117c8ac9811ff14d413454d))

## [3.12.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.11.0...v3.12.0) (2022-04-13)


### Features

* enable retries for RESOURCE_EXHAUSTED an simplify error codes ([#1070](https://github.com/googleapis/nodejs-bigtable/issues/1070)) ([6832df7](https://github.com/googleapis/nodejs-bigtable/commit/6832df7e5cd863b9c7f0dc67b0602cb8f579d59f))

## [3.11.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.10.0...v3.11.0) (2022-04-13)


### Features

* send retry attempt header to ease debugging ([#1068](https://github.com/googleapis/nodejs-bigtable/issues/1068)) ([37f9b3c](https://github.com/googleapis/nodejs-bigtable/commit/37f9b3c841ce34c2a7f4ab140de86eab584b51b9))

## [3.10.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.9.4...v3.10.0) (2022-04-06)


### Features

* Add ListHotTablets API method and protobufs ([#1057](https://github.com/googleapis/nodejs-bigtable/issues/1057)) ([2b175ac](https://github.com/googleapis/nodejs-bigtable/commit/2b175ac515948711b2ed9f34136255f69445e02a))
* AuditConfig for IAM v1 ([#1061](https://github.com/googleapis/nodejs-bigtable/issues/1061)) ([d1b5f1a](https://github.com/googleapis/nodejs-bigtable/commit/d1b5f1aca4464b5e344de19e892dcf889243c578))
* enable channel pooling ([#1065](https://github.com/googleapis/nodejs-bigtable/issues/1065)) ([6c3c397](https://github.com/googleapis/nodejs-bigtable/commit/6c3c397d080750b696024266a114e12b2db8ab04))


### Bug Fixes

* disable retry-request, add exponential backoff in mutateRows and readRows ([#1060](https://github.com/googleapis/nodejs-bigtable/issues/1060)) ([3718011](https://github.com/googleapis/nodejs-bigtable/commit/3718011e6d09a062e8e8c3dba822e060340e8b50))
* retry rst_stream errors ([#1059](https://github.com/googleapis/nodejs-bigtable/issues/1059)) ([90de80f](https://github.com/googleapis/nodejs-bigtable/commit/90de80f7f32e644a0762579afe37951714ac7271))

### [3.9.4](https://github.com/googleapis/nodejs-bigtable/compare/v3.9.3...v3.9.4) (2022-03-16)


### Bug Fixes

* do not cancel stream after server returned ok or cancelled status ([#1029](https://github.com/googleapis/nodejs-bigtable/issues/1029)) ([33754a2](https://github.com/googleapis/nodejs-bigtable/commit/33754a2c0cc180cd6ab6e34d722e34c35df9e757))

### [3.9.3](https://github.com/googleapis/nodejs-bigtable/compare/v3.9.2...v3.9.3) (2022-03-16)


### Bug Fixes

* fix createReadStream retry from sending a full table scan ([#1026](https://github.com/googleapis/nodejs-bigtable/issues/1026)) ([f926992](https://github.com/googleapis/nodejs-bigtable/commit/f9269926bed0858d122ab6019a9b1e4c33e4307a))

### [3.9.2](https://github.com/googleapis/nodejs-bigtable/compare/v3.9.1...v3.9.2) (2022-02-03)


### Bug Fixes

* manual generate library for ongoing stream on closed client ([#1011](https://github.com/googleapis/nodejs-bigtable/issues/1011)) ([b6fec4c](https://github.com/googleapis/nodejs-bigtable/commit/b6fec4ccfebd616b1d79da05817e82d59fdcbe9d))

### [3.9.1](https://github.com/googleapis/nodejs-bigtable/compare/v3.9.0...v3.9.1) (2022-02-01)


### Bug Fixes

* update to latest generator with fix for regex bug ([#1000](https://github.com/googleapis/nodejs-bigtable/issues/1000)) ([6a26c07](https://github.com/googleapis/nodejs-bigtable/commit/6a26c07da47c8bcc4ccb399e9289f078e7827780))

## [3.9.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.8.0...v3.9.0) (2022-01-18)


### Features

* add Autoscaling API ([#963](https://github.com/googleapis/nodejs-bigtable/issues/963)) ([86d21e8](https://github.com/googleapis/nodejs-bigtable/commit/86d21e8a63449bbf04e26612f44432e33043cc03))


### Bug Fixes

* add close() in the wrapper ([#986](https://github.com/googleapis/nodejs-bigtable/issues/986)) ([839f429](https://github.com/googleapis/nodejs-bigtable/commit/839f429f707bc7f528e49625af974cf2ab1bde38))

## [3.8.0](https://github.com/googleapis/nodejs-bigtable/compare/v3.7.0...v3.8.0) (2022-01-12)


### Features

* Add create_time to Instance ([#953](https://github.com/googleapis/nodejs-bigtable/issues/953)) ([de3fc03](https://github.com/googleapis/nodejs-bigtable/commit/de3fc035092a45e032d53aeaa352e98ad9233213))


### Bug Fixes

* **deps:** gax to 2.27.1 ([#949](https://github.com/googleapis/nodejs-bigtable/issues/949)) ([0111143](https://github.com/googleapis/nodejs-bigtable/commit/0111143eaee7c93aedb2891867a981f9d63c4f02))
* fix retry logic in mutate and read ([#980](https://github.com/googleapis/nodejs-bigtable/issues/980)) ([bfa84e1](https://github.com/googleapis/nodejs-bigtable/commit/bfa84e1490d396456d8efbd0fced84b0c71f88a8))

## [3.7.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.6.0...v3.7.0) (2021-09-27)


### Features

* turns on self-signed JWT feature flag ([#931](https://www.github.com/googleapis/nodejs-bigtable/issues/931)) ([e16df4b](https://www.github.com/googleapis/nodejs-bigtable/commit/e16df4b482a9d9888a02d8b82250ca1bb01bc18a))

## [3.6.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.5.4...v3.6.0) (2021-08-19)


### Features

* Publish new fields to support cluster group routing for Cloud Bigtable ([#928](https://www.github.com/googleapis/nodejs-bigtable/issues/928)) ([52ce890](https://www.github.com/googleapis/nodejs-bigtable/commit/52ce89019fa3f4365f06692db6d7ce3d28aa74a6))


### Bug Fixes

* **build:** migrate to using main branch ([#925](https://www.github.com/googleapis/nodejs-bigtable/issues/925)) ([135391f](https://www.github.com/googleapis/nodejs-bigtable/commit/135391f4462744d02f51a7351ef8edd8e39034ad))
* **deps:** google-gax v2.24.1 ([#927](https://www.github.com/googleapis/nodejs-bigtable/issues/927)) ([4869718](https://www.github.com/googleapis/nodejs-bigtable/commit/48697180ed43109e310ae924c8dda0b6a43c5a36))

### [3.5.4](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.5.3...v3.5.4) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#914](https://www.github.com/googleapis/nodejs-bigtable/issues/914)) ([f5292e1](https://www.github.com/googleapis/nodejs-bigtable/commit/f5292e1a6899213f229ddaa18cdf13b239487de4))

### [3.5.3](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.5.2...v3.5.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#912](https://www.github.com/googleapis/nodejs-bigtable/issues/912)) ([18198ab](https://www.github.com/googleapis/nodejs-bigtable/commit/18198ab199b4b88847eca70f9087032723c4a324))

### [3.5.2](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.5.1...v3.5.2) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#907](https://www.github.com/googleapis/nodejs-bigtable/issues/907)) ([cf661df](https://www.github.com/googleapis/nodejs-bigtable/commit/cf661df12da9dfd02e97d343a2110ce6099891b9))

### [3.5.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.5.0...v3.5.1) (2021-06-22)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#873](https://www.github.com/googleapis/nodejs-bigtable/issues/873)) ([9b7c8ca](https://www.github.com/googleapis/nodejs-bigtable/commit/9b7c8ca3acfa5957924735304d6f7f2e8a91bd04))
* make request optional in all cases ([#901](https://www.github.com/googleapis/nodejs-bigtable/issues/901)) ([0591d53](https://www.github.com/googleapis/nodejs-bigtable/commit/0591d53efeb4b6e5c8f5188e8186e7272932f0e1))

## [3.5.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.4.0...v3.5.0) (2021-05-05)


### Features

* implement support for clusters with CMEK encryption ([#855](https://www.github.com/googleapis/nodejs-bigtable/issues/855)) ([0d5d8e6](https://www.github.com/googleapis/nodejs-bigtable/commit/0d5d8e66bb3ce7947903795a5ea0c74362327ebf))

## [3.4.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.3.1...v3.4.0) (2021-05-04)


### Features

* implement restore table to a different instance feature ([#830](https://www.github.com/googleapis/nodejs-bigtable/issues/830)) ([#863](https://www.github.com/googleapis/nodejs-bigtable/issues/863)) ([c900b0a](https://www.github.com/googleapis/nodejs-bigtable/commit/c900b0a2bce3d91decbac716da879953966af8c9))

### [3.3.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.3.0...v3.3.1) (2021-04-20)


### Bug Fixes

* remove common protos ([#853](https://www.github.com/googleapis/nodejs-bigtable/issues/853)) ([d08f481](https://www.github.com/googleapis/nodejs-bigtable/commit/d08f4816205dd5562c280779d5f4c6708cb792be))

## [3.3.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.2.0...v3.3.0) (2021-03-08)


### Features

* add CMEK fields ([#845](https://www.github.com/googleapis/nodejs-bigtable/issues/845)) ([0381fb7](https://www.github.com/googleapis/nodejs-bigtable/commit/0381fb7da68492b85f8a3359d5fb97ca4898810e))
* introduce style enumeration ([#833](https://www.github.com/googleapis/nodejs-bigtable/issues/833)) ([99b7617](https://www.github.com/googleapis/nodejs-bigtable/commit/99b7617e215126fc36ef3c3ebefb244e0d8d2242))
* **protos:** update BigtableTableAdmin GetIamPolicy, change DeleteAppProfileRequest.ignore_warnings to REQUIRED ([59a0d26](https://www.github.com/googleapis/nodejs-bigtable/commit/59a0d269d5196991dd395e671d7d5f54ce449005))


### Bug Fixes

* **browser:** check for fetch on window ([#824](https://www.github.com/googleapis/nodejs-bigtable/issues/824)) ([a38cbcc](https://www.github.com/googleapis/nodejs-bigtable/commit/a38cbcca1660bc40fe137acb973bf62f3c55754e))
* Renaming region tags to not conflict with documentation snippets ([#834](https://www.github.com/googleapis/nodejs-bigtable/issues/834)) ([5d3e8f7](https://www.github.com/googleapis/nodejs-bigtable/commit/5d3e8f721c2a32a33bf41baa1ed237fb90f7cbd6))
* **retry:** restore grpc_service_config for CreateBackup and RestoreTable ([#851](https://www.github.com/googleapis/nodejs-bigtable/issues/851)) ([3ff2828](https://www.github.com/googleapis/nodejs-bigtable/commit/3ff282855f4f9a52a89bca8d087c1423e71bd7c6))
* set keepalive configuration ([#836](https://www.github.com/googleapis/nodejs-bigtable/issues/836)) ([8105dea](https://www.github.com/googleapis/nodejs-bigtable/commit/8105dea272de44e69915d3e62e5b5add106b54cb))


## [3.2.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.1.1...v3.2.0) (2020-11-07)


### Features

* add backup level IAM policy controls ([#799](https://www.github.com/googleapis/nodejs-bigtable/issues/799)) ([0f3b8b3](https://www.github.com/googleapis/nodejs-bigtable/commit/0f3b8b3042001f9c47dc1f153c94f1b19a625504))


### Bug Fixes

* do not modify options object, use defaultScopes ([#819](https://www.github.com/googleapis/nodejs-bigtable/issues/819)) ([8ad7ab1](https://www.github.com/googleapis/nodejs-bigtable/commit/8ad7ab191e41f18ff2de9803d520f1c05a4940b5))

### [3.1.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.1.0...v3.1.1) (2020-10-16)


### Bug Fixes

* **deps:** update dependency dot-prop to v6 ([#806](https://www.github.com/googleapis/nodejs-bigtable/issues/806)) ([edf65be](https://www.github.com/googleapis/nodejs-bigtable/commit/edf65bee1b75faac44a6ce15cdf7fab14a3a4405))

## [3.1.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.0.1...v3.1.0) (2020-09-10)


### Features

* add gapic getAppProfilesStream method ([#771](https://www.github.com/googleapis/nodejs-bigtable/issues/771)) ([c694ae5](https://www.github.com/googleapis/nodejs-bigtable/commit/c694ae5a9875c2862ecc001f9e5f6bd8212483fa))
* getAppProfilesStream emits (if there are any failed locations present) decorated error with failedLocations info ([#795](https://www.github.com/googleapis/nodejs-bigtable/issues/795)) ([dbb19fe](https://www.github.com/googleapis/nodejs-bigtable/commit/dbb19fed8ffcd6c5737b65dbe202b3031e4d3387))
* introduce Backups ([#794](https://www.github.com/googleapis/nodejs-bigtable/issues/794)) ([7979e39](https://www.github.com/googleapis/nodejs-bigtable/commit/7979e3958cf4d1c21f24dc2bfd9fd0e245506fd5))
* remove through2 dependency ([#770](https://www.github.com/googleapis/nodejs-bigtable/issues/770)) ([29c85d8](https://www.github.com/googleapis/nodejs-bigtable/commit/29c85d828fd7606c24d44a3ee8d5633967a1c089))
* respect pageSize and pageToken from gaxOptions ([#781](https://www.github.com/googleapis/nodejs-bigtable/issues/781)) ([3ca5de3](https://www.github.com/googleapis/nodejs-bigtable/commit/3ca5de3af142d0015209ee1281a767f6fd5a5093))


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#797](https://www.github.com/googleapis/nodejs-bigtable/issues/797)) ([3a50ecf](https://www.github.com/googleapis/nodejs-bigtable/commit/3a50ecf081e4846372c147eeb7a1806ed0aa981f))

### [3.0.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v3.0.0...v3.0.1) (2020-07-09)


### Bug Fixes

* **deps:** update dependency @google-cloud/bigtable to v3 ([#756](https://www.github.com/googleapis/nodejs-bigtable/issues/756)) ([e5e8189](https://www.github.com/googleapis/nodejs-bigtable/commit/e5e8189b3254a7a1d216f5380b6e88c7cdeb0c5e))
* typeo in nodejs .gitattribute ([#759](https://www.github.com/googleapis/nodejs-bigtable/issues/759)) ([843d1da](https://www.github.com/googleapis/nodejs-bigtable/commit/843d1daa9bdf30b8a5ab612967fbd8652723612d))

## [3.0.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.3.2...v3.0.0) (2020-07-06)


### ⚠ BREAKING CHANGES

* **types:** cluster.setMetadata(): only node count is updatable on an existing cluster; getInstancesCallback/Response: dropped nextQuery property as it is deprecated for this method, exposed failedLocations property; instance.createCluster(): removed unsupported params serveNodes and defaultStorageType
* drop node8 support, support for async iterators (#682)

### Features

* check status of long running operation by its name ([#724](https://www.github.com/googleapis/nodejs-bigtable/issues/724)) ([f2c1675](https://www.github.com/googleapis/nodejs-bigtable/commit/f2c1675d3c5352bc5a9083a7eb0a3666815e5854))
* Cloud Bigtable Managed Backup service ([21f585b](https://www.github.com/googleapis/nodejs-bigtable/commit/21f585b97aa88b95d04153984a71c51b029b57fe))
* Cloud functions example for Bigtable ([#728](https://www.github.com/googleapis/nodejs-bigtable/issues/728)) ([95a5db4](https://www.github.com/googleapis/nodejs-bigtable/commit/95a5db49cb896c82487b87638c3ad5cb4b81e91c))
* drop node8 support, support for async iterators ([#682](https://www.github.com/googleapis/nodejs-bigtable/issues/682)) ([2834e93](https://www.github.com/googleapis/nodejs-bigtable/commit/2834e93a7a6aec4ffff439850d07aa7f9ef79e7f))
* drop support for node.js 8.x ([#669](https://www.github.com/googleapis/nodejs-bigtable/issues/669)) ([7ec9150](https://www.github.com/googleapis/nodejs-bigtable/commit/7ec9150331bf5337879d91a146a713e51702164b))
* export protos in src/index.ts ([edac2c5](https://www.github.com/googleapis/nodejs-bigtable/commit/edac2c5b5c97ae301ef70776621d5cd0add79f5d))
* move to Typescript code generation ([#631](https://www.github.com/googleapis/nodejs-bigtable/issues/631)) ([6749aa5](https://www.github.com/googleapis/nodejs-bigtable/commit/6749aa5b1f56e7204ffdea7daab0217525e220ce))
* **secrets:** begin migration to secret manager from keystore ([#740](https://www.github.com/googleapis/nodejs-bigtable/issues/740)) ([85eb5d2](https://www.github.com/googleapis/nodejs-bigtable/commit/85eb5d278d5969e1b03e0a52eb08664d13f25f46))
* update bigtable grpc service config ([#747](https://www.github.com/googleapis/nodejs-bigtable/issues/747)) ([be27a70](https://www.github.com/googleapis/nodejs-bigtable/commit/be27a7022a5a3d3f704b65350d76a57385a0c2df))


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v3 and handle stream ending ([#704](https://www.github.com/googleapis/nodejs-bigtable/issues/704)) ([d8ada04](https://www.github.com/googleapis/nodejs-bigtable/commit/d8ada04a189ecb3e3628b55f5a2883b5d18727fe))
* **deps:** update dependency @google-cloud/paginator to v3 ([#674](https://www.github.com/googleapis/nodejs-bigtable/issues/674)) ([9abcaee](https://www.github.com/googleapis/nodejs-bigtable/commit/9abcaee8160c89de4258b0ad0a9185f5ada634df))
* **deps:** update dependency @google-cloud/projectify to v2 ([#673](https://www.github.com/googleapis/nodejs-bigtable/issues/673)) ([b0a7aa8](https://www.github.com/googleapis/nodejs-bigtable/commit/b0a7aa8ff93b7d359cd728d240af1203aee2ffc2))
* **deps:** update dependency @google-cloud/promisify to v2 ([#672](https://www.github.com/googleapis/nodejs-bigtable/issues/672)) ([5a7d66f](https://www.github.com/googleapis/nodejs-bigtable/commit/5a7d66f061ae20e9e763d3477c38ee845f06fac7))
* **deps:** update dependency escape-string-regexp to v3 ([#697](https://www.github.com/googleapis/nodejs-bigtable/issues/697)) ([799dcca](https://www.github.com/googleapis/nodejs-bigtable/commit/799dccace91bb4742e54efcf64b688815c0f086d))
* **deps:** update dependency escape-string-regexp to v4 ([#719](https://www.github.com/googleapis/nodejs-bigtable/issues/719)) ([5c54e70](https://www.github.com/googleapis/nodejs-bigtable/commit/5c54e7089c146dedf8610e6ed730554921e24f32))
* **deps:** update dependency uuid to v8 ([#723](https://www.github.com/googleapis/nodejs-bigtable/issues/723)) ([998ec84](https://www.github.com/googleapis/nodejs-bigtable/commit/998ec842344dd2ca79736bc14dd4fa4c4b72eb25))
* **docs:** contigous to contiguous ([#637](https://www.github.com/googleapis/nodejs-bigtable/issues/637)) ([9d09d37](https://www.github.com/googleapis/nodejs-bigtable/commit/9d09d375b29bc21fcccd2c5341dc5d2046e00b7e))
* cluster id store as undefined in createInstance request ([#654](https://www.github.com/googleapis/nodejs-bigtable/issues/654)) ([809c719](https://www.github.com/googleapis/nodejs-bigtable/commit/809c7198ac933d3efea05b4451cdc327b0871598))
* **types:** improve types in index.ts ([#720](https://www.github.com/googleapis/nodejs-bigtable/issues/720)) ([508d1f9](https://www.github.com/googleapis/nodejs-bigtable/commit/508d1f9e0c5b089d7a649eb1dd9e6fc166d17f7e))
* clusterId issue in sample test(should list zones) ([#684](https://www.github.com/googleapis/nodejs-bigtable/issues/684)) ([b92dfc5](https://www.github.com/googleapis/nodejs-bigtable/commit/b92dfc58aa44cc19faaeee06c53309a032009e32))
* doc for create instance cluster id ([#642](https://www.github.com/googleapis/nodejs-bigtable/issues/642)) ([838837c](https://www.github.com/googleapis/nodejs-bigtable/commit/838837c643d61861ecbb15636375620a914aad86))
* export all available types ([#691](https://www.github.com/googleapis/nodejs-bigtable/issues/691)) ([63bb2ec](https://www.github.com/googleapis/nodejs-bigtable/commit/63bb2ec9d496148edfc31f3e716c26fda31dcb24))
* handle fallback option properly ([21f8fef](https://www.github.com/googleapis/nodejs-bigtable/commit/21f8fef9f2c08be458478d1f2ccd0be5c60446c5))
* improve types for instance ([#655](https://www.github.com/googleapis/nodejs-bigtable/issues/655)) ([4910e77](https://www.github.com/googleapis/nodejs-bigtable/commit/4910e779fb8168f6e6a7d76bf1a444c793aa7682))
* improve types for row ([#661](https://www.github.com/googleapis/nodejs-bigtable/issues/661)) ([340689e](https://www.github.com/googleapis/nodejs-bigtable/commit/340689e639e79a7fca7c6e022d4d95bd414f0003))
* improve TypeScript types ([#646](https://www.github.com/googleapis/nodejs-bigtable/issues/646)) ([f4e1b86](https://www.github.com/googleapis/nodejs-bigtable/commit/f4e1b862ab94e82312413f0b983dd67fdab24f8a))
* improve TypeScript types ([#650](https://www.github.com/googleapis/nodejs-bigtable/issues/650)) ([b54830f](https://www.github.com/googleapis/nodejs-bigtable/commit/b54830fb2ec52811c101661bce7db5d421841567))
* improve typescript types ([#663](https://www.github.com/googleapis/nodejs-bigtable/issues/663)) ([47b506a](https://www.github.com/googleapis/nodejs-bigtable/commit/47b506ae8843d78d18cef76cb19a90320a770966))
* improve typescript types for Table class ([#641](https://www.github.com/googleapis/nodejs-bigtable/issues/641)) ([68179d1](https://www.github.com/googleapis/nodejs-bigtable/commit/68179d194aeb8246e3c19e0072085cf82cf3f609))
* make sure generated protos.js have unique root name ([#690](https://www.github.com/googleapis/nodejs-bigtable/issues/690)) ([cc695db](https://www.github.com/googleapis/nodejs-bigtable/commit/cc695dbd0365c1ca6451d9d4e766e63000475b67))
* Point to team in correct org ([#729](https://www.github.com/googleapis/nodejs-bigtable/issues/729)) ([998dc4b](https://www.github.com/googleapis/nodejs-bigtable/commit/998dc4b5a41bcd7a1e12250623486cbe6ac9ab12))
* reduce through2 usage ([#711](https://www.github.com/googleapis/nodejs-bigtable/issues/711)) ([dd84765](https://www.github.com/googleapis/nodejs-bigtable/commit/dd847652eb00dd14f42211d5c9e20817aca7081b))
* remove eslint, update gax, fix generated protos, run the generator ([#699](https://www.github.com/googleapis/nodejs-bigtable/issues/699)) ([85b8585](https://www.github.com/googleapis/nodejs-bigtable/commit/85b858572018380c7a335d09d17c5629ad7fe3a3))
* **types:** stricter types are now enforced ([#733](https://www.github.com/googleapis/nodejs-bigtable/issues/733)) ([dfd22a2](https://www.github.com/googleapis/nodejs-bigtable/commit/dfd22a208ead6e97a3964354be55025c53acbf66))
* row.exists out of memory errors ([#676](https://www.github.com/googleapis/nodejs-bigtable/issues/676)) ([191aa0f](https://www.github.com/googleapis/nodejs-bigtable/commit/191aa0f577989227ebdd9a8d7718869fc623b1e9))
* update types for app profile ([#649](https://www.github.com/googleapis/nodejs-bigtable/issues/649)) ([271d480](https://www.github.com/googleapis/nodejs-bigtable/commit/271d480ada622da7ffc4bc4da64a8626dc0e0e71))
* UpdateBackupRequest.backup is a resource, not a resource reference - remove annotation ([#725](https://www.github.com/googleapis/nodejs-bigtable/issues/725)) ([0802552](https://www.github.com/googleapis/nodejs-bigtable/commit/0802552cf8d9ac4de77b231b2b26cbfc87434064))

### [2.3.2](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.3.1...v2.3.2) (2020-02-12)


### Bug Fixes

* migrate to new proto annotations ([#604](https://www.github.com/googleapis/nodejs-bigtable/issues/604)) ([e095c5a](https://www.github.com/googleapis/nodejs-bigtable/commit/e095c5a85f86fde44e7560c4599894d61180afbe))

### [2.3.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.3.0...v2.3.1) (2019-12-27)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([0c6232d](https://www.github.com/googleapis/nodejs-bigtable/commit/0c6232df47194b2d43e86c484f25d6f3b933b605))
* **types:** overload for bigtable.getInstances ([#579](https://www.github.com/googleapis/nodejs-bigtable/issues/579)) ([91a07ba](https://www.github.com/googleapis/nodejs-bigtable/commit/91a07bab35c6ec4b8c4143c6499914aa34ef3689))

## [2.3.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.2.3...v2.3.0) (2019-12-03)


### Features

* implement instance and table level IAM policy ([#584](https://www.github.com/googleapis/nodejs-bigtable/issues/584)) ([5c22968](https://www.github.com/googleapis/nodejs-bigtable/commit/5c229685dacf8bebda6e030d21a2bbf2ed2cec76))
* **samples:** adds read and filter snippets ([#586](https://www.github.com/googleapis/nodejs-bigtable/issues/586)) ([896d024](https://www.github.com/googleapis/nodejs-bigtable/commit/896d02454b359f90c93e88c760ad699aa6999341)), closes [#584](https://www.github.com/googleapis/nodejs-bigtable/issues/584)


### Bug Fixes

* safe integer bounds conversion ([#576](https://www.github.com/googleapis/nodejs-bigtable/issues/576)) ([a1cd9c0](https://www.github.com/googleapis/nodejs-bigtable/commit/a1cd9c0ad5f732a13f12784f18fb895f9765ea4f))
* **deps:** update dependency yargs to v15 ([#583](https://www.github.com/googleapis/nodejs-bigtable/issues/583)) ([b95c430](https://www.github.com/googleapis/nodejs-bigtable/commit/b95c430796175f03d063ad863d685752d0534dcd))

### [2.2.3](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.2.2...v2.2.3) (2019-11-12)


### Bug Fixes

* **docs:** add jsdoc-region-tag plugin ([#571](https://www.github.com/googleapis/nodejs-bigtable/issues/571)) ([3159302](https://www.github.com/googleapis/nodejs-bigtable/commit/315930236ec396c3743d4929087e2d6565224072))
* include long in types ([1cb65a4](https://www.github.com/googleapis/nodejs-bigtable/commit/1cb65a47553ab93572bfd95825074ab362ecd9f8))

### [2.2.2](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.2.1...v2.2.2) (2019-11-11)


### Bug Fixes

* **docs:** fix missing snippets in sample documentation ([af6e15a](https://www.github.com/googleapis/nodejs-bigtable/commit/af6e15a1df3106368efa8a7fb1f81f0eb8e8663f))

### [2.2.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.2.0...v2.2.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#558](https://www.github.com/googleapis/nodejs-bigtable/issues/558)) ([02d48ee](https://www.github.com/googleapis/nodejs-bigtable/commit/02d48eee4a0f903abafb5f9f5a261bb06ab3b18c))

## [2.2.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.1.0...v2.2.0) (2019-10-09)


### Bug Fixes

* do not exclude d.ts files, and add install test ([#545](https://www.github.com/googleapis/nodejs-bigtable/issues/545)) ([60acdf8](https://www.github.com/googleapis/nodejs-bigtable/commit/60acdf8))
* use compatible version of google-gax ([588509b](https://www.github.com/googleapis/nodejs-bigtable/commit/588509b))


### Features

* .d.ts for protos ([#542](https://www.github.com/googleapis/nodejs-bigtable/issues/542)) ([3acf841](https://www.github.com/googleapis/nodejs-bigtable/commit/3acf841))

## [2.1.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.0.5...v2.1.0) (2019-09-09)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([e0478d7](https://www.github.com/googleapis/nodejs-bigtable/commit/e0478d7))
* use correct version for x-goog-api-client ([#533](https://www.github.com/googleapis/nodejs-bigtable/issues/533)) ([1614e9e](https://www.github.com/googleapis/nodejs-bigtable/commit/1614e9e))


### Features

* load protos from JSON, grpc-fallback support, IAM protos ([#536](https://www.github.com/googleapis/nodejs-bigtable/issues/536)) ([04404a4](https://www.github.com/googleapis/nodejs-bigtable/commit/04404a4))

### [2.0.5](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.0.4...v2.0.5) (2019-08-13)


### Bug Fixes

* allow calls with no request, add JSON proto ([fb6ced6](https://www.github.com/googleapis/nodejs-bigtable/commit/fb6ced6))
* **deps:** use the latest extend ([#529](https://www.github.com/googleapis/nodejs-bigtable/issues/529)) ([7090c39](https://www.github.com/googleapis/nodejs-bigtable/commit/7090c39))
* **types:** Include TypeScript types with module ([#527](https://www.github.com/googleapis/nodejs-bigtable/issues/527)) ([cd9e517](https://www.github.com/googleapis/nodejs-bigtable/commit/cd9e517))

### [2.0.4](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.0.3...v2.0.4) (2019-08-01)


### Bug Fixes

* cancel streaming grpc request when user ends stream ([#507](https://www.github.com/googleapis/nodejs-bigtable/issues/507)) ([2b4297c](https://www.github.com/googleapis/nodejs-bigtable/commit/2b4297c))

### [2.0.3](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.0.2...v2.0.3) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @google-cloud/paginator to v2 ([#513](https://www.github.com/googleapis/nodejs-bigtable/issues/513)) ([f4fdb7e](https://www.github.com/googleapis/nodejs-bigtable/commit/f4fdb7e))
* **deps:** update dependency google-auth-library to v5 ([#514](https://www.github.com/googleapis/nodejs-bigtable/issues/514)) ([b3ef8f1](https://www.github.com/googleapis/nodejs-bigtable/commit/b3ef8f1))
* **deps:** update dependency pumpify to v2 ([#515](https://www.github.com/googleapis/nodejs-bigtable/issues/515)) ([309e625](https://www.github.com/googleapis/nodejs-bigtable/commit/309e625))

### [2.0.2](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.0.1...v2.0.2) (2019-07-23)


### Bug Fixes

* modified timeout and retry parameters ([451bba9](https://www.github.com/googleapis/nodejs-bigtable/commit/451bba9))

### [2.0.1](https://www.github.com/googleapis/nodejs-bigtable/compare/v2.0.0...v2.0.1) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#502](https://www.github.com/googleapis/nodejs-bigtable/issues/502)) ([8b4a93e](https://www.github.com/googleapis/nodejs-bigtable/commit/8b4a93e))

## [2.0.0](https://www.github.com/googleapis/nodejs-bigtable/compare/v1.0.1...v2.0.0) (2019-06-24)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#463)

### Bug Fixes

* **deps:** update dependency @google-cloud/common-grpc to v1 ([#478](https://www.github.com/googleapis/nodejs-bigtable/issues/478)) ([40197e4](https://www.github.com/googleapis/nodejs-bigtable/commit/40197e4))
* **deps:** update dependency @google-cloud/paginator to ^0.2.0 ([a25627c](https://www.github.com/googleapis/nodejs-bigtable/commit/a25627c)), closes [#8203](https://www.github.com/googleapis/nodejs-bigtable/issues/8203)
* **deps:** update dependency @google-cloud/paginator to v1 ([#468](https://www.github.com/googleapis/nodejs-bigtable/issues/468)) ([ae06ec2](https://www.github.com/googleapis/nodejs-bigtable/commit/ae06ec2))
* **deps:** update dependency @google-cloud/projectify to v1 ([#466](https://www.github.com/googleapis/nodejs-bigtable/issues/466)) ([6c6dd40](https://www.github.com/googleapis/nodejs-bigtable/commit/6c6dd40))
* **deps:** update dependency @google-cloud/promisify to ^0.4.0 ([#420](https://www.github.com/googleapis/nodejs-bigtable/issues/420)) ([d5c2862](https://www.github.com/googleapis/nodejs-bigtable/commit/d5c2862))
* **deps:** update dependency @google-cloud/promisify to v1 ([#467](https://www.github.com/googleapis/nodejs-bigtable/issues/467)) ([5473fb9](https://www.github.com/googleapis/nodejs-bigtable/commit/5473fb9))
* **deps:** update dependency arrify to v2 ([e29f9aa](https://www.github.com/googleapis/nodejs-bigtable/commit/e29f9aa))
* **deps:** update dependency dot-prop to v5 ([#455](https://www.github.com/googleapis/nodejs-bigtable/issues/455)) ([3949356](https://www.github.com/googleapis/nodejs-bigtable/commit/3949356))
* **deps:** update dependency escape-string-regexp to v2 ([#457](https://www.github.com/googleapis/nodejs-bigtable/issues/457)) ([d923b58](https://www.github.com/googleapis/nodejs-bigtable/commit/d923b58))
* **deps:** update dependency google-auth-library to v4 ([#475](https://www.github.com/googleapis/nodejs-bigtable/issues/475)) ([a58547c](https://www.github.com/googleapis/nodejs-bigtable/commit/a58547c))
* **deps:** update dependency google-gax to ^0.26.0 ([#461](https://www.github.com/googleapis/nodejs-bigtable/issues/461)) ([4462869](https://www.github.com/googleapis/nodejs-bigtable/commit/4462869))
* **deps:** update dependency google-gax to v1 ([#476](https://www.github.com/googleapis/nodejs-bigtable/issues/476)) ([adfeb9c](https://www.github.com/googleapis/nodejs-bigtable/commit/adfeb9c))
* **deps:** update dependency yargs to v13 ([#417](https://www.github.com/googleapis/nodejs-bigtable/issues/417)) ([fac8d4e](https://www.github.com/googleapis/nodejs-bigtable/commit/fac8d4e))
* "requires_billing " should be "requires_billing" ([#498](https://www.github.com/googleapis/nodejs-bigtable/issues/498)) ([c9f6f7e](https://www.github.com/googleapis/nodejs-bigtable/commit/c9f6f7e))
* DEADLINE_EXCEEDED is no longer retried ([c1190d3](https://www.github.com/googleapis/nodejs-bigtable/commit/c1190d3))
* DEADLINE_EXCEEDED retry code is idempotent ([#477](https://www.github.com/googleapis/nodejs-bigtable/issues/477)) ([2783944](https://www.github.com/googleapis/nodejs-bigtable/commit/2783944))
* throw on invalid credentials ([#418](https://www.github.com/googleapis/nodejs-bigtable/issues/418)) ([5b836fd](https://www.github.com/googleapis/nodejs-bigtable/commit/5b836fd))
* **docs:** move to new client docs URL ([#499](https://www.github.com/googleapis/nodejs-bigtable/issues/499)) ([acfe7c2](https://www.github.com/googleapis/nodejs-bigtable/commit/acfe7c2))


### Build System

* upgrade engines field to >=8.10.0 ([#463](https://www.github.com/googleapis/nodejs-bigtable/issues/463)) ([35cb71f](https://www.github.com/googleapis/nodejs-bigtable/commit/35cb71f))


### Features

* support apiEndpoint override ([#500](https://www.github.com/googleapis/nodejs-bigtable/issues/500)) ([89124f6](https://www.github.com/googleapis/nodejs-bigtable/commit/89124f6))
* update the admin APIs ([#485](https://www.github.com/googleapis/nodejs-bigtable/issues/485)) ([c76fba9](https://www.github.com/googleapis/nodejs-bigtable/commit/c76fba9))

## v1.0.1

01-29-2019 16:49 PST

### Bug Fixes
- fix: Prevent error when `decode: false` option is set in createReadStream. ([#403](https://github.com/googleapis/nodejs-bigtable/pull/403))

### Dependencies
- fix(deps): update dependency @google-cloud/common-grpc to ^0.10.0 ([#408](https://github.com/googleapis/nodejs-bigtable/pull/408))
- fix(deps): update dependency google-gax to ^0.24.0 ([#405](https://github.com/googleapis/nodejs-bigtable/pull/405))
- fix(deps): update dependency google-auth-library to v3 ([#402](https://github.com/googleapis/nodejs-bigtable/pull/402))
- fix(deps): update dependency concat-stream to v2 ([#396](https://github.com/googleapis/nodejs-bigtable/pull/396))

### Documentation
- refactor: modernize the samples a bit ([#398](https://github.com/googleapis/nodejs-bigtable/pull/398))
- docs: Added example region-tags for app-profile object ([#288](https://github.com/googleapis/nodejs-bigtable/pull/288))
- fix(docs): fix namespaces causing 404s ([#385](https://github.com/googleapis/nodejs-bigtable/pull/385))
- docs: update readme badges ([#379](https://github.com/googleapis/nodejs-bigtable/pull/379))

## v1.0.0

11-13-2018 08:31 PST


### Implementation Changes
- Empty column qualifiers are no longer rejected ([#353](https://github.com/googleapis/nodejs-bigtable/pull/353))

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#366](https://github.com/googleapis/nodejs-bigtable/pull/366))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#364](https://github.com/googleapis/nodejs-bigtable/pull/364))

### Documentation
- Added example region-tag for Family.js ([#262](https://github.com/googleapis/nodejs-bigtable/pull/262))
- Added example region-tags for cluster object ([#284](https://github.com/googleapis/nodejs-bigtable/pull/284))
- chore: drop contributors from multiple places ([#363](https://github.com/googleapis/nodejs-bigtable/pull/363))
- fix(samples): Fixing the Hello world ([#339](https://github.com/googleapis/nodejs-bigtable/pull/339))

### Internal / Testing Changes
- chore: update eslintignore config ([#365](https://github.com/googleapis/nodejs-bigtable/pull/365))
- refactor: use object.assign and drop lodash.flatten ([#362](https://github.com/googleapis/nodejs-bigtable/pull/362))
- chore: remove a few unused dependencies ([#358](https://github.com/googleapis/nodejs-bigtable/pull/358))
- chore: use latest npm on Windows ([#361](https://github.com/googleapis/nodejs-bigtable/pull/361))
- chore: fix and run the linter ([#357](https://github.com/googleapis/nodejs-bigtable/pull/357))
- fix(deps): update dependency through2 to v3 ([#359](https://github.com/googleapis/nodejs-bigtable/pull/359))
- Cleanup of `ChunkTransformer` ([#355](https://github.com/googleapis/nodejs-bigtable/pull/355))
- chore: update CircleCI config ([#352](https://github.com/googleapis/nodejs-bigtable/pull/352))
- chore: include build in eslintignore ([#349](https://github.com/googleapis/nodejs-bigtable/pull/349))
- chore(deps): update dependency eslint-plugin-node to v8 ([#345](https://github.com/googleapis/nodejs-bigtable/pull/345))
- chore: update issue templates ([#344](https://github.com/googleapis/nodejs-bigtable/pull/344))
- chore: remove old issue template ([#340](https://github.com/googleapis/nodejs-bigtable/pull/340))
- build: run tests on node11 ([#338](https://github.com/googleapis/nodejs-bigtable/pull/338))

## v0.16.1

### Dependencies
- fix(deps): update dependency @google-cloud/bigtable to ^0.16.0 ([#326](https://github.com/googleapis/nodejs-bigtable/pull/326))

### Documentation
- Clean up the "hello world" code sample ([#328](https://github.com/googleapis/nodejs-bigtable/pull/328))
- fix(docs): make Filter class public should it shows up in docs ([#331](https://github.com/googleapis/nodejs-bigtable/pull/331))

### Internal / Testing Changes
- chores(build): run codecov on continuous builds ([#334](https://github.com/googleapis/nodejs-bigtable/pull/334))
- chore: update new issue template ([#332](https://github.com/googleapis/nodejs-bigtable/pull/332))
- Fix some issues in the contributing instructions. ([#325](https://github.com/googleapis/nodejs-bigtable/pull/325))

## v0.16.0

### Implementation Changes
- Restricted combinations of row selection on read rows. ([#315](https://github.com/googleapis/nodejs-bigtable/pull/315))
- table.exists uses getTable with a Name only view for better perofrmance. ([#280](https://github.com/googleapis/nodejs-bigtable/pull/280))

### New Features
- Added Table.getReplicationStates ([#279](https://github.com/googleapis/nodejs-bigtable/pull/279))

### Dependencies
- chore(deps): update dependency sinon to v7 ([#321](https://github.com/googleapis/nodejs-bigtable/pull/321))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#317](https://github.com/googleapis/nodejs-bigtable/pull/317))
- fix(deps): update dependency @google-cloud/common-grpc to ^0.9.0 ([#307](https://github.com/googleapis/nodejs-bigtable/pull/307))
- fix(deps): update dependency google-gax to ^0.20.0 ([#302](https://github.com/googleapis/nodejs-bigtable/pull/302))
- chore(deps): update dependency nyc to v13 ([#285](https://github.com/googleapis/nodejs-bigtable/pull/285))
- fix(deps): update dependency @google-cloud/common-grpc to ^0.8.0 ([#289](https://github.com/googleapis/nodejs-bigtable/pull/289))
- fix(deps): update dependency google-auth-library to v2 ([#290](https://github.com/googleapis/nodejs-bigtable/pull/290))
- fix(deps): update dependency google-gax to ^0.19.0 ([#281](https://github.com/googleapis/nodejs-bigtable/pull/281))
- chore(deps): update dependency eslint-config-prettier to v3 ([#274](https://github.com/googleapis/nodejs-bigtable/pull/274))
- fix(deps): update dependency google-gax to ^0.18.0 ([#263](https://github.com/googleapis/nodejs-bigtable/pull/263))

### Documentation
- Added @example tags to src/table.js ([#239](https://github.com/googleapis/nodejs-bigtable/pull/239))
- Added example region-tags for row object ([#266](https://github.com/googleapis/nodejs-bigtable/pull/266))
- documentation update for getTables ([#311](https://github.com/googleapis/nodejs-bigtable/pull/311))
- move instance snippet tests to document-snippets/tests ([#308](https://github.com/googleapis/nodejs-bigtable/pull/308))
- Added @example tags to src/instance.js ([#222](https://github.com/googleapis/nodejs-bigtable/pull/222)) ([#252](https://github.com/googleapis/nodejs-bigtable/pull/252))

### Internal / Testing Changes
- build: fix codecov uploading on Kokoro ([#323](https://github.com/googleapis/nodejs-bigtable/pull/323))
- test: System test fix ([#322](https://github.com/googleapis/nodejs-bigtable/pull/322))
- Update kokoro config ([#318](https://github.com/googleapis/nodejs-bigtable/pull/318))
- build: prevent system/sample-test from leaking credentials
- Update the kokoro config ([#313](https://github.com/googleapis/nodejs-bigtable/pull/313))
- test: remove appveyor config ([#312](https://github.com/googleapis/nodejs-bigtable/pull/312))
- Update the CI config ([#310](https://github.com/googleapis/nodejs-bigtable/pull/310))
- Fix the linter ([#306](https://github.com/googleapis/nodejs-bigtable/pull/306))
- Enable prefer-const in the eslint config ([#305](https://github.com/googleapis/nodejs-bigtable/pull/305))
- Enable no-var in eslint ([#304](https://github.com/googleapis/nodejs-bigtable/pull/304))
- Re-generate library using /synth.py ([#303](https://github.com/googleapis/nodejs-bigtable/pull/303))
- test: throw on deprecation ([#264](https://github.com/googleapis/nodejs-bigtable/pull/264))
- Update CI config ([#300](https://github.com/googleapis/nodejs-bigtable/pull/300))
- Split usage of common module ([#297](https://github.com/googleapis/nodejs-bigtable/pull/297))
- Retry npm install in CI ([#295](https://github.com/googleapis/nodejs-bigtable/pull/295))
- Re-generate library using /synth.py ([#292](https://github.com/googleapis/nodejs-bigtable/pull/292))
- Re-generate library using /synth.py ([#287](https://github.com/googleapis/nodejs-bigtable/pull/287))
- Update the CI config ([#283](https://github.com/googleapis/nodejs-bigtable/pull/283))
- Update synth.py ([#276](https://github.com/googleapis/nodejs-bigtable/pull/276))
- chore: make the CircleCI config consistent ([#282](https://github.com/googleapis/nodejs-bigtable/pull/282))
- Re-generate library using /synth.py ([#277](https://github.com/googleapis/nodejs-bigtable/pull/277))
- build: add repo_name to synth.py ([#275](https://github.com/googleapis/nodejs-bigtable/pull/275))
- chore: run prettier for auto-generated code ([#273](https://github.com/googleapis/nodejs-bigtable/pull/273))
- chore: do not use npm ci ([#272](https://github.com/googleapis/nodejs-bigtable/pull/272))
- Re-generate library using /synth.py ([#270](https://github.com/googleapis/nodejs-bigtable/pull/270))
- chore: ignore package-lock.json ([#269](https://github.com/googleapis/nodejs-bigtable/pull/269))
- chore(deps): lock file maintenance ([#268](https://github.com/googleapis/nodejs-bigtable/pull/268))
- chore(deps): lock file maintenance ([#267](https://github.com/googleapis/nodejs-bigtable/pull/267))
- chore: update renovate config ([#265](https://github.com/googleapis/nodejs-bigtable/pull/265))
- chore(deps): lock file maintenance ([#261](https://github.com/googleapis/nodejs-bigtable/pull/261))
- Use assert.deepStrictEqual instead of deepEqual. ([#253](https://github.com/googleapis/nodejs-bigtable/pull/253))
- test: use strictEqual in tests ([#250](https://github.com/googleapis/nodejs-bigtable/pull/250))
