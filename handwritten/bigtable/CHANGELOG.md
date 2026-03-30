# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/bigtable?activeTab=versions

## [3.2.3](https://github.com/googleapis/google-cloud-node/compare/bigtable-v6.5.0...bigtable-v3.2.3) (2026-03-30)


### ⚠ BREAKING CHANGES

* migrate to Node 18 ([#1582](https://github.com/googleapis/google-cloud-node/issues/1582))
* upgrade to Node 14 ([#1311](https://github.com/googleapis/google-cloud-node/issues/1311))
* update library to use Node 12 ([#1089](https://github.com/googleapis/google-cloud-node/issues/1089))
* remove failedLocation from getInstancesCallback/Response ([#755](https://github.com/googleapis/google-cloud-node/issues/755))
* **types:** cluster.setMetadata(): only node count is updatable on an existing cluster; getInstancesCallback/Response: dropped nextQuery property as it is deprecated for this method, exposed failedLocations property; instance.createCluster(): removed unsupported params serveNodes and defaultStorageType
* drop node8 support, support for async iterators ([#682](https://github.com/googleapis/google-cloud-node/issues/682))

### Features

* Accept google-gax instance as a parameter ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Add Autoscaling API ([#963](https://github.com/googleapis/google-cloud-node/issues/963)) ([799552b](https://github.com/googleapis/google-cloud-node/commit/799552b797f124bf5a1b002e878cae73679ee3d6))
* Add backup level IAM policy controls ([#799](https://github.com/googleapis/google-cloud-node/issues/799)) ([3f42335](https://github.com/googleapis/google-cloud-node/commit/3f423353f2ab46fbe255c06a52c69794f5b50a3e))
* Add ChangeStreamConfig to CreateTable and UpdateTable ([#1269](https://github.com/googleapis/google-cloud-node/issues/1269)) ([6e7b8b6](https://github.com/googleapis/google-cloud-node/commit/6e7b8b681515b3f5fb7ed5a1de57b8c85b38830f))
* Add client side metrics collection to readRows calls ([#1571](https://github.com/googleapis/google-cloud-node/issues/1571)) ([c60c4f3](https://github.com/googleapis/google-cloud-node/commit/c60c4f3b0d6128a9acfc96a2d9b9686a62387d39))
* Add client side metrics for checkAndMutateRow calls ([#1661](https://github.com/googleapis/google-cloud-node/issues/1661)) ([97da7b9](https://github.com/googleapis/google-cloud-node/commit/97da7b9f623146595922bf2ed575fe52265e699b))
* Add client side metrics for readModifyWriteRow calls ([#1656](https://github.com/googleapis/google-cloud-node/issues/1656)) ([5f2ce5a](https://github.com/googleapis/google-cloud-node/commit/5f2ce5af458079edef3735948aae2e6a37bc5e0b))
* Add CMEK fields ([#845](https://github.com/googleapis/google-cloud-node/issues/845)) ([93f5f03](https://github.com/googleapis/google-cloud-node/commit/93f5f03f2913044e7537087ccc1c222d066aef5f))
* Add create_time to Instance ([#953](https://github.com/googleapis/google-cloud-node/issues/953)) ([a116c2e](https://github.com/googleapis/google-cloud-node/commit/a116c2e9982bea298e3f540af474fbb0e5279e42))
* Add feature for copying backups ([#1153](https://github.com/googleapis/google-cloud-node/issues/1153)) ([f481a31](https://github.com/googleapis/google-cloud-node/commit/f481a31c86f30047056ac593081df1131ade6d8f))
* Add fields and the BackupType proto for Hot Backups ([#1439](https://github.com/googleapis/google-cloud-node/issues/1439)) ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))
* Add full support for Universe Domain ([#1604](https://github.com/googleapis/google-cloud-node/issues/1604)) ([e7d7cbe](https://github.com/googleapis/google-cloud-node/commit/e7d7cbeb745c99e6d609a2172cac371c0daef1de))
* Add gapic getAppProfilesStream method ([#771](https://github.com/googleapis/google-cloud-node/issues/771)) ([89f1dd7](https://github.com/googleapis/google-cloud-node/commit/89f1dd77567ac0804d135e05ad45abfdb67023c0))
* Add ListHotTablets API method and protobufs ([#1057](https://github.com/googleapis/google-cloud-node/issues/1057)) ([2334577](https://github.com/googleapis/google-cloud-node/commit/233457762e33892ed61fd2e4fc547f20e2889c36))
* Add MergeToCell to Mutation APIs ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))
* Add min, max, hll aggregators and more types ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))
* Add new_partitions field for CloseStream for Cloud Bigtable ChangeStream ([#1247](https://github.com/googleapis/google-cloud-node/issues/1247)) ([81aaa32](https://github.com/googleapis/google-cloud-node/commit/81aaa32581b1a00cb3ddef0a9d90f6b5bb0b600a))
* Add npm run compile to the testproxy command ([#1258](https://github.com/googleapis/google-cloud-node/issues/1258)) ([bd523fe](https://github.com/googleapis/google-cloud-node/commit/bd523fe0ef9e69bcf320db05a225ed2112ba6b54))
* Add plumbing PR for client side metrics to support the open telemetry instruments ([#1569](https://github.com/googleapis/google-cloud-node/issues/1569)) ([eff2468](https://github.com/googleapis/google-cloud-node/commit/eff2468eab0df3cf964f42a54bb0660ceb861c4f))
* Add plumbing to support unary calls for client side metric collection ([#1631](https://github.com/googleapis/google-cloud-node/issues/1631)) ([1dc4b77](https://github.com/googleapis/google-cloud-node/commit/1dc4b777e2f5697073e932418f03045ecae81209))
* Add storage_utilization_gib_per_node to Autoscaling target ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Add String type with Utf8Raw encoding to Bigtable API ([#1419](https://github.com/googleapis/google-cloud-node/issues/1419)) ([2d395a6](https://github.com/googleapis/google-cloud-node/commit/2d395a6b4bebd6c64c3f69313bba8b7c1d3b367c))
* Add support for Execute Query ([#1613](https://github.com/googleapis/google-cloud-node/issues/1613)) ([646fe55](https://github.com/googleapis/google-cloud-node/commit/646fe55d7102e6194613353e4c36faac712edc33))
* Add the MetricsCollector for client side metrics ([#1566](https://github.com/googleapis/google-cloud-node/issues/1566)) ([f9ad230](https://github.com/googleapis/google-cloud-node/commit/f9ad23087a83e8d00dc388d45708842b6065df06))
* Add the plumbing for application blocking latencies client side metrics ([#1575](https://github.com/googleapis/google-cloud-node/issues/1575)) ([e4e6081](https://github.com/googleapis/google-cloud-node/commit/e4e60817bbf42abbbf8e76463bfeb024cc87e790))
* Add WarmAndPing request for channel priming ([43dc6c1](https://github.com/googleapis/google-cloud-node/commit/43dc6c19978a78fa0a39097a8a9b4b45b23ad163))
* Added SuggestConversationSummary RPC ([#1182](https://github.com/googleapis/google-cloud-node/issues/1182)) ([f7528bb](https://github.com/googleapis/google-cloud-node/commit/f7528bb93ec28eae13aa9fb53582160117c651f6))
* AuditConfig for IAM v1 ([#1061](https://github.com/googleapis/google-cloud-node/issues/1061)) ([2f6012b](https://github.com/googleapis/google-cloud-node/commit/2f6012b1dd391d4d40c12eabd7cfe1554fc27efc))
* Autoscaler ([#1077](https://github.com/googleapis/google-cloud-node/issues/1077)) ([25dfef6](https://github.com/googleapis/google-cloud-node/commit/25dfef644994df5ca5836cb240cf8439fc7424d3))
* Bigtable authorized views requests on the Data plane ([#1509](https://github.com/googleapis/google-cloud-node/issues/1509)) ([e3d10f2](https://github.com/googleapis/google-cloud-node/commit/e3d10f23942fa7fcf428584a24a611fa1869ebc8))
* Check status of long running operation by its name ([#724](https://github.com/googleapis/google-cloud-node/issues/724)) ([1584639](https://github.com/googleapis/google-cloud-node/commit/15846395e741168a9d00e55fb958198b55297183))
* Client side metrics support for mutateRows ([#1638](https://github.com/googleapis/google-cloud-node/issues/1638)) ([627f1af](https://github.com/googleapis/google-cloud-node/commit/627f1af8404974abcf8a0713b42b4342d06d5152))
* Cloud Bigtable Managed Backup service ([367391e](https://github.com/googleapis/google-cloud-node/commit/367391ec43df4c0ce4badd3b3a1a228925076672))
* Cloud Bigtable Undelete Table service and message proto files ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Cloud functions example for Bigtable ([#728](https://github.com/googleapis/google-cloud-node/issues/728)) ([3b40610](https://github.com/googleapis/google-cloud-node/commit/3b406107d8d330f39fc34abc37c8031cdbc83aed))
* Collect client side metrics for sampleRowKeys calls ([#1660](https://github.com/googleapis/google-cloud-node/issues/1660)) ([f32a6f3](https://github.com/googleapis/google-cloud-node/commit/f32a6f3d476228a451971890e2cb683dfb381ace))
* Drop node8 support, support for async iterators ([#682](https://github.com/googleapis/google-cloud-node/issues/682)) ([07081d2](https://github.com/googleapis/google-cloud-node/commit/07081d2d0ae26f154e971326ae1ec09f51c4ff55))
* Drop support for node.js 8.x ([#669](https://github.com/googleapis/google-cloud-node/issues/669)) ([51f02bf](https://github.com/googleapis/google-cloud-node/commit/51f02bfa448b96c7413a82692e86f7c903d8ab68))
* Enable channel pooling ([#1065](https://github.com/googleapis/google-cloud-node/issues/1065)) ([95e7f82](https://github.com/googleapis/google-cloud-node/commit/95e7f8219be3b71133d81f4c52962d743cb00a22))
* Enable csm by default ([#1695](https://github.com/googleapis/google-cloud-node/issues/1695)) ([1e896ae](https://github.com/googleapis/google-cloud-node/commit/1e896ae56e86c0105468211809712e5b9a32290b))
* Enable retries for RESOURCE_EXHAUSTED an simplify error codes ([#1070](https://github.com/googleapis/google-cloud-node/issues/1070)) ([66dfb1f](https://github.com/googleapis/google-cloud-node/commit/66dfb1f32d2b78ad2de66289d53be428dc5d6e13))
* Errors from gax layer ([#1090](https://github.com/googleapis/google-cloud-node/issues/1090)) ([7102726](https://github.com/googleapis/google-cloud-node/commit/71027261635522985894155164958c7d2700dd29))
* Export protos in src/index.ts ([13cf030](https://github.com/googleapis/google-cloud-node/commit/13cf03032d4ef84000516e38f3152b2025ef20e2))
* For application latencies timed stream a few cosmetic changes are needed ([#1645](https://github.com/googleapis/google-cloud-node/issues/1645)) ([94effa5](https://github.com/googleapis/google-cloud-node/commit/94effa585238ec4d3fe46273d730f7e0b2ca60f8))
* For client side metrics, record metrics as MUTATE_ROW for single row mutates ([#1650](https://github.com/googleapis/google-cloud-node/issues/1650)) ([c469b34](https://github.com/googleapis/google-cloud-node/commit/c469b3466a7c8c5b039b93e9c0e726c0d7703322))
* GetAppProfilesStream emits (if there are any failed locations present) decorated error with failedLocations info ([#795](https://github.com/googleapis/google-cloud-node/issues/795)) ([7117512](https://github.com/googleapis/google-cloud-node/commit/7117512e3a4b2fd4734dc1dea11be005e2fc31b6))
* Implement restore table to a different instance feature ([#830](https://github.com/googleapis/google-cloud-node/issues/830)) ([#863](https://github.com/googleapis/google-cloud-node/issues/863)) ([b61e10a](https://github.com/googleapis/google-cloud-node/commit/b61e10a66f8e82e5fbc7777a33406a1c864868fc))
* Implement support for clusters with CMEK encryption ([#855](https://github.com/googleapis/google-cloud-node/issues/855)) ([d86e81b](https://github.com/googleapis/google-cloud-node/commit/d86e81bf0b7c9fcc8ea714008b7408f31aee9b22))
* Initial timed stream implementation for application latencies ([#1639](https://github.com/googleapis/google-cloud-node/issues/1639)) ([6faea05](https://github.com/googleapis/google-cloud-node/commit/6faea05219d2a51d5233cca17c1f64450d502700))
* Introduce Backups ([#794](https://github.com/googleapis/google-cloud-node/issues/794)) ([97079e2](https://github.com/googleapis/google-cloud-node/commit/97079e296abc2abe5335a89746884153cae2fb67))
* Introduce style enumeration ([#833](https://github.com/googleapis/google-cloud-node/issues/833)) ([050476f](https://github.com/googleapis/google-cloud-node/commit/050476f71ffa723c3239763f8bc958b924b1439b))
* Modernization part 2 ([#1748](https://github.com/googleapis/google-cloud-node/issues/1748)) ([e7bbdda](https://github.com/googleapis/google-cloud-node/commit/e7bbdda81f747315b0cf68e0d47867297dbb2f8f))
* Move the metrics handler fixture ([#1570](https://github.com/googleapis/google-cloud-node/issues/1570)) ([b8f2aad](https://github.com/googleapis/google-cloud-node/commit/b8f2aad2daeb983b21e8d0a7784749c37ee8a98f))
* Move to Typescript code generation ([#631](https://github.com/googleapis/google-cloud-node/issues/631)) ([ff384bb](https://github.com/googleapis/google-cloud-node/commit/ff384bb359daadc487d6146ab219684bb71dfb26))
* Multi cluster routing ([#1007](https://github.com/googleapis/google-cloud-node/issues/1007)) ([5e10eb2](https://github.com/googleapis/google-cloud-node/commit/5e10eb21400b40b41a179348d57872d4e08a1a61))
* **protos:** Update BigtableTableAdmin GetIamPolicy, change DeleteAppProfileRequest.ignore_warnings to REQUIRED ([e060cde](https://github.com/googleapis/google-cloud-node/commit/e060cdeba9b6460f42351a8ea010d948a7817d84))
* Publish Automated Backups protos ([#1391](https://github.com/googleapis/google-cloud-node/issues/1391)) ([f01dc79](https://github.com/googleapis/google-cloud-node/commit/f01dc794ad9e02b62f60c4cb744293c772227ead))
* Publish new fields ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Publish new fields to support cluster group routing for Cloud Bigtable ([#928](https://github.com/googleapis/google-cloud-node/issues/928)) ([75cd3ac](https://github.com/googleapis/google-cloud-node/commit/75cd3ac423292a2430591daec5d70f946316d9e3))
* Publish ProtoRows Message ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))
* Publish the Cloud Bigtable Change Streams ([#1237](https://github.com/googleapis/google-cloud-node/issues/1237)) ([366b011](https://github.com/googleapis/google-cloud-node/commit/366b0112e8149957ca77aaa653d0bdec43d92a45))
* Publish the Cloud Bigtable ExecuteQuery API ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))
* Publish the RequestStats proto ([#1177](https://github.com/googleapis/google-cloud-node/issues/1177)) ([6eb8723](https://github.com/googleapis/google-cloud-node/commit/6eb8723710d6808216b7e8d0873a6fc3aed9c4dd))
* Record ReadRows application latencies for client side metrics ([#1647](https://github.com/googleapis/google-cloud-node/issues/1647)) ([90a1d8d](https://github.com/googleapis/google-cloud-node/commit/90a1d8d7e0158cbbf5f9c68d8cb7b71befd2bfee))
* Remove need to pass location parameter along ([#1093](https://github.com/googleapis/google-cloud-node/issues/1093)) ([7323b20](https://github.com/googleapis/google-cloud-node/commit/7323b203b659d2e837679896929dbe88e398f30e))
* Remove through2 dependency ([#770](https://github.com/googleapis/google-cloud-node/issues/770)) ([674b7fa](https://github.com/googleapis/google-cloud-node/commit/674b7fa78995ae6ebd303640b449cfa73d670c20))
* Respect pageSize and pageToken from gaxOptions ([#781](https://github.com/googleapis/google-cloud-node/issues/781)) ([d1518ad](https://github.com/googleapis/google-cloud-node/commit/d1518ad4e0a90ec81a6913b8a4ff575181798208))
* **secrets:** Begin migration to secret manager from keystore ([#740](https://github.com/googleapis/google-cloud-node/issues/740)) ([61dab93](https://github.com/googleapis/google-cloud-node/commit/61dab939c0b86d18a0e4157517ffb9cb428c581d))
* Send retry attempt header to ease debugging ([#1068](https://github.com/googleapis/google-cloud-node/issues/1068)) ([b68f849](https://github.com/googleapis/google-cloud-node/commit/b68f849722cbc00d86675abbb0658b5e57123964))
* Support regapic LRO ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Trusted Private Cloud support, use the universeDomain parameter ([#1386](https://github.com/googleapis/google-cloud-node/issues/1386)) ([028f1d1](https://github.com/googleapis/google-cloud-node/commit/028f1d114ca7cc2d79570bfd55bd4f20aa93d986))
* Turns on self-signed JWT feature flag ([#931](https://github.com/googleapis/google-cloud-node/issues/931)) ([481a987](https://github.com/googleapis/google-cloud-node/commit/481a987fe0f3bdf655efd93e5fdfe8d198665774))
* Update bigtable grpc service config ([#747](https://github.com/googleapis/google-cloud-node/issues/747)) ([2c770a5](https://github.com/googleapis/google-cloud-node/commit/2c770a5051325e64a28ce43e5e9d3413ba49ea62))
* Update Go Bigtable import path ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))
* Update Go Datastore import path ([d28d28f](https://github.com/googleapis/google-cloud-node/commit/d28d28fa1090fa8bf2509721cf5e78629d26318a))


### Bug Fixes

* Add close() in the wrapper ([#986](https://github.com/googleapis/google-cloud-node/issues/986)) ([a3bfe1e](https://github.com/googleapis/google-cloud-node/commit/a3bfe1e1b161fcccb49f96d077487d57f04a12cc))
* Address assertion error in TestReadRows_Retry_LastScannedRow conformance test ([#1521](https://github.com/googleapis/google-cloud-node/issues/1521)) ([72f0b6e](https://github.com/googleapis/google-cloud-node/commit/72f0b6e3f136682fe6c00587c1ccfe5971b511ac))
* Always set the retry attempt to 0 for now ([#1251](https://github.com/googleapis/google-cloud-node/issues/1251)) ([ee48908](https://github.com/googleapis/google-cloud-node/commit/ee489086f013746c88544b6f0e8d71cb88b66271))
* Better support for fallback mode ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* **browser:** Check for fetch on window ([#824](https://github.com/googleapis/google-cloud-node/issues/824)) ([83764c0](https://github.com/googleapis/google-cloud-node/commit/83764c03e6b25e1a574a59c4e5cb0d7cdc84d42b))
* **build:** Migrate to using main branch ([#925](https://github.com/googleapis/google-cloud-node/issues/925)) ([cacedc9](https://github.com/googleapis/google-cloud-node/commit/cacedc9c5106dfa9b1273c1dd08ba1b5f57bf50c))
* Change import long to require ([#1139](https://github.com/googleapis/google-cloud-node/issues/1139)) ([b879026](https://github.com/googleapis/google-cloud-node/commit/b879026f7583cdb67d5ed39818f4de2437df592a))
* Check and mutate generic header conformance test ([#1551](https://github.com/googleapis/google-cloud-node/issues/1551)) ([3221d14](https://github.com/googleapis/google-cloud-node/commit/3221d1481f4880bd7ae368244d63876e478b338f))
* Client side metrics should record the version number of @google-cloud/bigtable not the customer package version ([#1752](https://github.com/googleapis/google-cloud-node/issues/1752)) ([098c811](https://github.com/googleapis/google-cloud-node/commit/098c8119ce4f2d220f9726a7246446469babe9fa))
* Cluster id store as undefined in createInstance request ([#654](https://github.com/googleapis/google-cloud-node/issues/654)) ([d345f22](https://github.com/googleapis/google-cloud-node/commit/d345f22f8f458109589ec40f7f08a22ca3194449))
* Conformance test sample rowkeys generic deadline ([#1562](https://github.com/googleapis/google-cloud-node/issues/1562)) ([1245ae0](https://github.com/googleapis/google-cloud-node/commit/1245ae04feeb50526b8917e818b74617f2e817d2))
* Correct project id on client side metrics by avoiding getProjectId calls with the metric service client ([#1757](https://github.com/googleapis/google-cloud-node/issues/1757)) ([d01599c](https://github.com/googleapis/google-cloud-node/commit/d01599ce641e5ea007b2774a7f75e13b6e7b4d21))
* **deps:** Gax to 2.27.1 ([#949](https://github.com/googleapis/google-cloud-node/issues/949)) ([5aa0a47](https://github.com/googleapis/google-cloud-node/commit/5aa0a47460af2683186cae0a6cab0170156beb62))
* **deps:** Google-gax v2.17.0 with mTLS ([#907](https://github.com/googleapis/google-cloud-node/issues/907)) ([d47a7ea](https://github.com/googleapis/google-cloud-node/commit/d47a7eaa5fa6031fdb786ab3d9c28f9550492de2))
* **deps:** Google-gax v2.17.1 ([#912](https://github.com/googleapis/google-cloud-node/issues/912)) ([187eea9](https://github.com/googleapis/google-cloud-node/commit/187eea9d9f1bfa8bfbb7b611e4e63bc7bdd9a97c))
* **deps:** Google-gax v2.24.1 ([#927](https://github.com/googleapis/google-cloud-node/issues/927)) ([74bd70f](https://github.com/googleapis/google-cloud-node/commit/74bd70ff698cc8781374b943f3ac7b6348da5c91))
* **deps:** Require google-gax v2.12.0 ([#873](https://github.com/googleapis/google-cloud-node/issues/873)) ([ab37079](https://github.com/googleapis/google-cloud-node/commit/ab37079bdb12b4d97f34296d7d6ab2b59d3d5908))
* **deps:** Update dependency @google-cloud/common to v3 and handle stream ending ([#704](https://github.com/googleapis/google-cloud-node/issues/704)) ([e49243b](https://github.com/googleapis/google-cloud-node/commit/e49243bfd358099676541df665767fa7bf5ae135))
* **deps:** Update dependency @google-cloud/paginator to v3 ([#674](https://github.com/googleapis/google-cloud-node/issues/674)) ([33c874a](https://github.com/googleapis/google-cloud-node/commit/33c874ae028552ef5bf76389d19e5c5a1d6d1c5c))
* **deps:** Update dependency @google-cloud/precise-date to v3 ([#1097](https://github.com/googleapis/google-cloud-node/issues/1097)) ([346cf28](https://github.com/googleapis/google-cloud-node/commit/346cf28b4ec97f3f0fd7068f6b08be4869912b02))
* **deps:** Update dependency @google-cloud/precise-date to v4 ([#1318](https://github.com/googleapis/google-cloud-node/issues/1318)) ([e8b45b1](https://github.com/googleapis/google-cloud-node/commit/e8b45b1ce9842f7f876ea8e838c27330c7aab067))
* **deps:** Update dependency @google-cloud/projectify to v2 ([#673](https://github.com/googleapis/google-cloud-node/issues/673)) ([97521cc](https://github.com/googleapis/google-cloud-node/commit/97521cc0e4a973a15ed632f1657d93be2c32ab9c))
* **deps:** Update dependency @google-cloud/projectify to v3 ([#1102](https://github.com/googleapis/google-cloud-node/issues/1102)) ([4ae0f18](https://github.com/googleapis/google-cloud-node/commit/4ae0f18353ab217405e5534df614e096bcc571f1))
* **deps:** Update dependency @google-cloud/promisify to v2 ([#672](https://github.com/googleapis/google-cloud-node/issues/672)) ([24ebbd6](https://github.com/googleapis/google-cloud-node/commit/24ebbd6b5dbea19b84ac1d25f6c87ed1b3a8a669))
* **deps:** Update dependency @google-cloud/promisify to v3 ([#1085](https://github.com/googleapis/google-cloud-node/issues/1085)) ([ec4afe4](https://github.com/googleapis/google-cloud-node/commit/ec4afe4b98eeb01ee03c9da2f03d26e660f5cfe1))
* **deps:** Update dependency arrify to v2.0.1 ([#1588](https://github.com/googleapis/google-cloud-node/issues/1588)) ([a23a7b6](https://github.com/googleapis/google-cloud-node/commit/a23a7b6de357b34292535511e00094b8a36fbc4f))
* **deps:** Update dependency dot-prop to v6 ([#806](https://github.com/googleapis/google-cloud-node/issues/806)) ([83cf66c](https://github.com/googleapis/google-cloud-node/commit/83cf66cc10924b128e46fb20ce9df020a971bfc9))
* **deps:** Update dependency escape-string-regexp to v3 ([#697](https://github.com/googleapis/google-cloud-node/issues/697)) ([45dbee3](https://github.com/googleapis/google-cloud-node/commit/45dbee3446f5183572c2ffee6c2a3852b1655f00))
* **deps:** Update dependency escape-string-regexp to v4 ([#719](https://github.com/googleapis/google-cloud-node/issues/719)) ([e32aa04](https://github.com/googleapis/google-cloud-node/commit/e32aa04e818c342b538d53683773b099c4ba79d0))
* **deps:** Update dependency grpc-gcp to v0.4.2 ([#1074](https://github.com/googleapis/google-cloud-node/issues/1074)) ([a029359](https://github.com/googleapis/google-cloud-node/commit/a029359bb887c4e380b8104b98f2e8cc3c21e0fb))
* **deps:** Update dependency uuid to v8 ([#723](https://github.com/googleapis/google-cloud-node/issues/723)) ([6952750](https://github.com/googleapis/google-cloud-node/commit/6952750f378f0c83a9174be7d6f94803cb0107ce))
* **deps:** Update dependency uuid to v9 ([#1152](https://github.com/googleapis/google-cloud-node/issues/1152)) ([e338067](https://github.com/googleapis/google-cloud-node/commit/e338067c0010b056e021a89c255b950515b451bb))
* **deps:** Use google-gax v3.5.2 ([#1186](https://github.com/googleapis/google-cloud-node/issues/1186)) ([8dab7e4](https://github.com/googleapis/google-cloud-node/commit/8dab7e4a89af425c1aac568710f98f234992aff7))
* **deps:** Use grpc-gcp v1.0.0 ([#1156](https://github.com/googleapis/google-cloud-node/issues/1156)) ([4ee3a6c](https://github.com/googleapis/google-cloud-node/commit/4ee3a6c88196b35e4f0aea8c803360dcb491e490))
* Directly import JS-native impl for crc32c on non-x64 platforms to avoid segfault ([#1715](https://github.com/googleapis/google-cloud-node/issues/1715)) ([c8caa27](https://github.com/googleapis/google-cloud-node/commit/c8caa279de1c29545889fa08c2e3bd082e9c98f8))
* Disable retry-request, add exponential backoff in mutateRows and readRows ([#1060](https://github.com/googleapis/google-cloud-node/issues/1060)) ([7b7f684](https://github.com/googleapis/google-cloud-node/commit/7b7f6841d7f47f8e3e73e398ab08ea9785f0db68))
* Do not cancel stream after server returned ok or cancelled status ([#1029](https://github.com/googleapis/google-cloud-node/issues/1029)) ([5aa818c](https://github.com/googleapis/google-cloud-node/commit/5aa818ccbff72f27773e28b798a1892ca2bcf7a9))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/google-cloud-node/issues/1553)) ([#1148](https://github.com/googleapis/google-cloud-node/issues/1148)) ([01f0915](https://github.com/googleapis/google-cloud-node/commit/01f0915abd5dae2fdceadd4f3603e5a2747357f9))
* Do not modify options object, use defaultScopes ([#819](https://github.com/googleapis/google-cloud-node/issues/819)) ([ff9033e](https://github.com/googleapis/google-cloud-node/commit/ff9033e054ed71cd46624c6b2882dcdcade43077))
* **docs:** Contigous to contiguous ([#637](https://github.com/googleapis/google-cloud-node/issues/637)) ([b9f5249](https://github.com/googleapis/google-cloud-node/commit/b9f5249f959f1edc07048d861e85d3c641d2b530))
* Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ([#1444](https://github.com/googleapis/google-cloud-node/issues/1444)) ([ebc29f0](https://github.com/googleapis/google-cloud-node/commit/ebc29f03b031addfa691bdea48542d773a2e5da3))
* Export all available types ([#691](https://github.com/googleapis/google-cloud-node/issues/691)) ([9604dde](https://github.com/googleapis/google-cloud-node/commit/9604ddeda0703a8e62aaf6854732a87023b88afd))
* Extend timeouts for deleting snapshots, backups and tables ([#1387](https://github.com/googleapis/google-cloud-node/issues/1387)) ([2618cb3](https://github.com/googleapis/google-cloud-node/commit/2618cb3a2f3d45183e4dc1d3e37cc7cdaae1207c))
* FirstResponseLatencies should only be collected for readRows calls ([#1658](https://github.com/googleapis/google-cloud-node/issues/1658)) ([5d074c8](https://github.com/googleapis/google-cloud-node/commit/5d074c8ad8c5bd03aef411649b076511a23cd308))
* Fix createReadStream retry from sending a full table scan ([#1026](https://github.com/googleapis/google-cloud-node/issues/1026)) ([e0f3057](https://github.com/googleapis/google-cloud-node/commit/e0f3057a50265e76f659e7bedf8946b658e8ab36))
* Fix flakey test by extending timeout ([#1350](https://github.com/googleapis/google-cloud-node/issues/1350)) ([47e8ce9](https://github.com/googleapis/google-cloud-node/commit/47e8ce9953c1e58e9bed04e94623a2ee9713595e))
* Fix plumbing errors for client side metrics collection ([#1583](https://github.com/googleapis/google-cloud-node/issues/1583)) ([b211b87](https://github.com/googleapis/google-cloud-node/commit/b211b8788b21ee465d0efdc4bd67fbd3e8781f0d))
* Fix retry logic in mutate and read ([#980](https://github.com/googleapis/google-cloud-node/issues/980)) ([d9f34b5](https://github.com/googleapis/google-cloud-node/commit/d9f34b5c4fa02e30383adfb47d68fae37b73c376))
* Fix TestReadRows_Generic_CloseClient conformance test by passing grpc status codes for closed client errors ([#1524](https://github.com/googleapis/google-cloud-node/issues/1524)) ([95e9397](https://github.com/googleapis/google-cloud-node/commit/95e939780144964081a9e5b1f10726e363830e73))
* Fixed the closed client test ([#1138](https://github.com/googleapis/google-cloud-node/issues/1138)) ([de772a1](https://github.com/googleapis/google-cloud-node/commit/de772a1b0cfd4ae6e35df28f8b8b9abd4d46c472))
* Fixes for dynamic routing and streaming descriptors ([#1088](https://github.com/googleapis/google-cloud-node/issues/1088)) ([5e2dc56](https://github.com/googleapis/google-cloud-node/commit/5e2dc56ae2b9ce444494262693d40c9f9a6c5d7e))
* Fixes for routing headers ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Handle fallback option properly ([dbe25e7](https://github.com/googleapis/google-cloud-node/commit/dbe25e71cd677d90c80317942a866ba385ee7914))
* Improve retry logic for streaming API calls ([#1372](https://github.com/googleapis/google-cloud-node/issues/1372)) ([4c2ce16](https://github.com/googleapis/google-cloud-node/commit/4c2ce1664ba7b206b879c0a16aa2c3035bfff08b))
* Improve types for instance ([#655](https://github.com/googleapis/google-cloud-node/issues/655)) ([68af01f](https://github.com/googleapis/google-cloud-node/commit/68af01f5c39b3546da2a05ee058f77bda2d2bfc7))
* Improve types for row ([#661](https://github.com/googleapis/google-cloud-node/issues/661)) ([e17d367](https://github.com/googleapis/google-cloud-node/commit/e17d367a5e2369741016f24252ad906c345feb38))
* Improve TypeScript types ([#646](https://github.com/googleapis/google-cloud-node/issues/646)) ([e7cd486](https://github.com/googleapis/google-cloud-node/commit/e7cd4868420ee83351826c1a802606ed2795928a))
* Improve TypeScript types ([#650](https://github.com/googleapis/google-cloud-node/issues/650)) ([698bdab](https://github.com/googleapis/google-cloud-node/commit/698bdab749afa02eac8c324589dfdd82f2169d34))
* Improve typescript types ([#663](https://github.com/googleapis/google-cloud-node/issues/663)) ([fc6b9df](https://github.com/googleapis/google-cloud-node/commit/fc6b9dfbcece08310a6d7165f9a9b1d70a560061))
* Improve typescript types for Table class ([#641](https://github.com/googleapis/google-cloud-node/issues/641)) ([48e659b](https://github.com/googleapis/google-cloud-node/commit/48e659b3603616df8e51856cf00c994240321b4c))
* In Client-side metrics makes sure that the right views get created for the right metrics ([#1590](https://github.com/googleapis/google-cloud-node/issues/1590)) ([496f522](https://github.com/googleapis/google-cloud-node/commit/496f5229f44cfc6cde69c86b40b67f3373e6eb4b))
* Integration test close function again ([#1103](https://github.com/googleapis/google-cloud-node/issues/1103)) ([48b565d](https://github.com/googleapis/google-cloud-node/commit/48b565d30a6e0fce05345b1c82be4d794a3fa7e7))
* Make request optional in all cases ([#901](https://github.com/googleapis/google-cloud-node/issues/901)) ([1636ce1](https://github.com/googleapis/google-cloud-node/commit/1636ce18c0c90c78a05073a834968bb7529366bc))
* Make sure generated protos.js have unique root name ([#690](https://github.com/googleapis/google-cloud-node/issues/690)) ([fb3d13c](https://github.com/googleapis/google-cloud-node/commit/fb3d13c28b8ca6baaa90f5c99421e538f3faddb6))
* Manual generate library for ongoing stream on closed client ([#1011](https://github.com/googleapis/google-cloud-node/issues/1011)) ([503bdea](https://github.com/googleapis/google-cloud-node/commit/503bdeafb18671fc7097044aea77307d904489fa))
* Out of order read rows fix ([#1231](https://github.com/googleapis/google-cloud-node/issues/1231)) ([011e675](https://github.com/googleapis/google-cloud-node/commit/011e675adf48dc44fb22b3e816209adf511c043b))
* Parsing for qualifiers with colon characters ([#1277](https://github.com/googleapis/google-cloud-node/issues/1277)) ([44b93fd](https://github.com/googleapis/google-cloud-node/commit/44b93fde3c18ab358a95f64549a9c32c0202bbad))
* Paused scan test is now fixed  ([#1539](https://github.com/googleapis/google-cloud-node/issues/1539)) ([138c7c6](https://github.com/googleapis/google-cloud-node/commit/138c7c6840957b8b883f20bb402b54c52bf89794))
* Pipe metadata along ([#1178](https://github.com/googleapis/google-cloud-node/issues/1178)) ([665c425](https://github.com/googleapis/google-cloud-node/commit/665c42592f36efff8e1e21782ebc88b4e8814496))
* Point to team in correct org ([#729](https://github.com/googleapis/google-cloud-node/issues/729)) ([ea18814](https://github.com/googleapis/google-cloud-node/commit/ea18814bd759e019b87481535035f37621763db4))
* Proper camel case for sequences of capital letters ([ab28acc](https://github.com/googleapis/google-cloud-node/commit/ab28acc74f79f988724e1755138d4b5fc87675fe))
* Properly handle asynchronous read from stream ([#1284](https://github.com/googleapis/google-cloud-node/issues/1284)) ([e57d056](https://github.com/googleapis/google-cloud-node/commit/e57d0560b18707d745ff5294d5c537274c6b5c64))
* Record grpc code string for client side metrics instead of grpc code number ([#1754](https://github.com/googleapis/google-cloud-node/issues/1754)) ([6887ef6](https://github.com/googleapis/google-cloud-node/commit/6887ef68287b3e756a30a27091a63029fa2f4947))
* Reduce through2 usage ([#711](https://github.com/googleapis/google-cloud-node/issues/711)) ([10d03b1](https://github.com/googleapis/google-cloud-node/commit/10d03b10b2b103a3a2ff304be22d24b9f05aa6f1))
* Remove bigtable instances left over when system tests run ([#1265](https://github.com/googleapis/google-cloud-node/issues/1265)) ([886e345](https://github.com/googleapis/google-cloud-node/commit/886e34570a27e901f5b834663ec3a264fa470389))
* Remove common protos ([#853](https://github.com/googleapis/google-cloud-node/issues/853)) ([2821c50](https://github.com/googleapis/google-cloud-node/commit/2821c50137cf6ec3ea2da55a513143cf7cb60797))
* Remove custom readrows retry logic and rely on gax for retries ([#1422](https://github.com/googleapis/google-cloud-node/issues/1422)) ([05069b5](https://github.com/googleapis/google-cloud-node/commit/05069b50209172aabed2654fc5081c1516f8d14a))
* Remove eslint, update gax, fix generated protos, run the generator ([#699](https://github.com/googleapis/google-cloud-node/issues/699)) ([6b1a0de](https://github.com/googleapis/google-cloud-node/commit/6b1a0de126cd8865cad76a144a727591a0398324))
* Remove pip install statements ([#1546](https://github.com/googleapis/google-cloud-node/issues/1546)) ([#1140](https://github.com/googleapis/google-cloud-node/issues/1140)) ([c6ca931](https://github.com/googleapis/google-cloud-node/commit/c6ca93116b7bc8ab3e9eda2c4671cd0a5fdf6e6f))
* Remove the watermarks ([#1313](https://github.com/googleapis/google-cloud-node/issues/1313)) ([1486e4c](https://github.com/googleapis/google-cloud-node/commit/1486e4c535571ed6a046e13b231889c314815631))
* Renaming region tags to not conflict with documentation snippets ([#834](https://github.com/googleapis/google-cloud-node/issues/834)) ([d5528ba](https://github.com/googleapis/google-cloud-node/commit/d5528ba6add115927204255c1068fb4ffafd9c20))
* Retry rst_stream errors ([#1059](https://github.com/googleapis/google-cloud-node/issues/1059)) ([3fd894b](https://github.com/googleapis/google-cloud-node/commit/3fd894b7b27e9849218a6167fd43647a697aba71))
* **retry:** Restore grpc_service_config for CreateBackup and RestoreTable ([#851](https://github.com/googleapis/google-cloud-node/issues/851)) ([2b9a19a](https://github.com/googleapis/google-cloud-node/commit/2b9a19a065ac09a39ed4e5496d7759a9d53d557b))
* Rollback to v3 release line ([#847](https://github.com/googleapis/google-cloud-node/issues/847)) ([2eed901](https://github.com/googleapis/google-cloud-node/commit/2eed90155dc6c406a79342f76fabdaaa8659173e))
* Row.exists out of memory errors ([#676](https://github.com/googleapis/google-cloud-node/issues/676)) ([439dec2](https://github.com/googleapis/google-cloud-node/commit/439dec27e3268f734298e131477726b7a1a32d7f))
* Sample rowkey generic header conformance test ([#1550](https://github.com/googleapis/google-cloud-node/issues/1550)) ([9767a9e](https://github.com/googleapis/google-cloud-node/commit/9767a9e2bb8fe354fe7ff6e5fe0d09a09d651a48))
* Set keepalive configuration ([#836](https://github.com/googleapis/google-cloud-node/issues/836)) ([a2681bf](https://github.com/googleapis/google-cloud-node/commit/a2681bf7006be434eb2e0ecccc140a0a1eb5a8ad))
* Test is less restrictive to allow changes ([#1160](https://github.com/googleapis/google-cloud-node/issues/1160)) ([610fdc3](https://github.com/googleapis/google-cloud-node/commit/610fdc343e3e776ced6bf9fbc321d6565cc3a970))
* TestMutateRow_Generic_Headers ([#1540](https://github.com/googleapis/google-cloud-node/issues/1540)) ([5db678f](https://github.com/googleapis/google-cloud-node/commit/5db678ffb72cf3d72f69c50a99fe51ba8bac55a4))
* Throw away excess data in order to avoid delivering duplicate data ([#1453](https://github.com/googleapis/google-cloud-node/issues/1453)) ([9105250](https://github.com/googleapis/google-cloud-node/commit/91052502cc5ce7b7f03494ff00f6a358de7c9a05))
* Typeo in nodejs .gitattribute ([#759](https://github.com/googleapis/google-cloud-node/issues/759)) ([0487d9b](https://github.com/googleapis/google-cloud-node/commit/0487d9b7f190ab5c2baa6ae2b6bff5d01799d1c0))
* **types:** Improve types in index.ts ([#720](https://github.com/googleapis/google-cloud-node/issues/720)) ([2341b9b](https://github.com/googleapis/google-cloud-node/commit/2341b9b49419400a1d164dac23d4776f61c1a1cc))
* **types:** Stricter types are now enforced ([#733](https://github.com/googleapis/google-cloud-node/issues/733)) ([686abed](https://github.com/googleapis/google-cloud-node/commit/686abedd20a7f076d0a481d50e55435351e89cbc))
* Update owlbot.py to exculde sync repo ([#1549](https://github.com/googleapis/google-cloud-node/issues/1549)) ([bd7fa8f](https://github.com/googleapis/google-cloud-node/commit/bd7fa8f004f6743341c19ca861966a106c814b7d))
* Update to latest generator with fix for regex bug ([#1000](https://github.com/googleapis/google-cloud-node/issues/1000)) ([e4189ed](https://github.com/googleapis/google-cloud-node/commit/e4189edc345899e283643758b56e443015eccddb))
* Update types for app profile ([#649](https://github.com/googleapis/google-cloud-node/issues/649)) ([c2b727e](https://github.com/googleapis/google-cloud-node/commit/c2b727e8e7be0ce531fda8cc2cfb602ccae68964))
* UpdateBackupRequest.backup is a resource, not a resource reference - remove annotation ([#725](https://github.com/googleapis/google-cloud-node/issues/725)) ([4d1a26a](https://github.com/googleapis/google-cloud-node/commit/4d1a26a4dbdd1f4b4db92bed78cedac5047d79e1))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#914](https://github.com/googleapis/google-cloud-node/issues/914)) ([36a61f1](https://github.com/googleapis/google-cloud-node/commit/36a61f156553007d7f20553c29202e108f8f2a9a))
* Use google-gax v3.3.0 ([01f0915](https://github.com/googleapis/google-cloud-node/commit/01f0915abd5dae2fdceadd4f3603e5a2747357f9))
* Use the universe domain if it is provided by the user ([#1563](https://github.com/googleapis/google-cloud-node/issues/1563)) ([3768ff0](https://github.com/googleapis/google-cloud-node/commit/3768ff04851fad2376a531398069d19afe9807c8))
* Wait for long running operation on flakey test ([#1141](https://github.com/googleapis/google-cloud-node/issues/1141)) ([a78e6c3](https://github.com/googleapis/google-cloud-node/commit/a78e6c37a812d582747a090df3ac00d08622429f))


### Reverts

* Remove failedLocation from getInstancesCallback/Response ([#755](https://github.com/googleapis/google-cloud-node/issues/755)) ([80d20bb](https://github.com/googleapis/google-cloud-node/commit/80d20bbc7938fef3db4e7fc018cb6bdb4cf8846a))


### Miscellaneous Chores

* Migrate to Node 18 ([#1582](https://github.com/googleapis/google-cloud-node/issues/1582)) ([5cf388c](https://github.com/googleapis/google-cloud-node/commit/5cf388cae4197ee3a44742ad373ecdf417d6c081))
* Upgrade to Node 14 ([#1311](https://github.com/googleapis/google-cloud-node/issues/1311)) ([c3216a3](https://github.com/googleapis/google-cloud-node/commit/c3216a370f76fffc0a8ed083bdbb28ff252dcaa3))


### Build System

* Update library to use Node 12 ([#1089](https://github.com/googleapis/google-cloud-node/issues/1089)) ([7295cf7](https://github.com/googleapis/google-cloud-node/commit/7295cf725ae26a8454860eb3deedcc4722ff64e6))

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
