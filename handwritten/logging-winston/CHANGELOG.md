# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/logging-winston?activeTab=versions

## [6.0.1](https://github.com/googleapis/nodejs-logging-winston/compare/v6.0.0...v6.0.1) (2024-10-23)


### Bug Fixes

* Fix trace_sampled type to be consistent with API documentation ([#830](https://github.com/googleapis/nodejs-logging-winston/issues/830)) ([33103dc](https://github.com/googleapis/nodejs-logging-winston/commit/33103dc073968d5b919c030ef035c2b317074134))
* Skip writing RequestLogEntry for Cloud Run with flag enabled ([#821](https://github.com/googleapis/nodejs-logging-winston/issues/821)) ([7a0ec6f](https://github.com/googleapis/nodejs-logging-winston/commit/7a0ec6ffc1841487ab8f290de443f8a7465a2277))

## [6.0.0](https://github.com/googleapis/nodejs-logging-winston/compare/v5.3.0...v6.0.0) (2023-08-10)


### ⚠ BREAKING CHANGES

* upgrade to node 14 ([#807](https://github.com/googleapis/nodejs-logging-winston/issues/807))

### Miscellaneous Chores

* Upgrade to node 14 ([#807](https://github.com/googleapis/nodejs-logging-winston/issues/807)) ([2f4ea63](https://github.com/googleapis/nodejs-logging-winston/commit/2f4ea631a84d3d9da7a16f1f5922ceb95a4a62e4))

## [5.3.0](https://github.com/googleapis/nodejs-logging-winston/compare/v5.2.3...v5.3.0) (2023-01-04)


### Features

* Add support for TransportStream options ([#775](https://github.com/googleapis/nodejs-logging-winston/issues/775)) ([cf240dd](https://github.com/googleapis/nodejs-logging-winston/commit/cf240ddd1edc04f5485b62f94c78c28a1b5614b6))

## [5.2.3](https://github.com/googleapis/nodejs-logging-winston/compare/v5.2.2...v5.2.3) (2022-12-02)


### Bug Fixes

* Add a partner team as approvers for PRs ([#769](https://github.com/googleapis/nodejs-logging-winston/issues/769)) ([fbb96e0](https://github.com/googleapis/nodejs-logging-winston/commit/fbb96e0e6b54cd03774ed46e75cce6f52fb3c7a2))

## [5.2.2](https://github.com/googleapis/nodejs-logging-winston/compare/v5.2.1...v5.2.2) (2022-11-08)


### Bug Fixes

* Unknown log level : http ([#766](https://github.com/googleapis/nodejs-logging-winston/issues/766)) ([167b89c](https://github.com/googleapis/nodejs-logging-winston/commit/167b89cd8b9fb0a20a8fd14e0831a46d566a5bb9))

## [5.2.1](https://github.com/googleapis/nodejs-logging-winston/compare/v5.2.0...v5.2.1) (2022-11-07)


### Bug Fixes

* Switch instrumentation code to return version stored in NODEJS_WINSTON_DEFAULT_LIBRARY_VERSION ([#764](https://github.com/googleapis/nodejs-logging-winston/issues/764)) ([3e23e5a](https://github.com/googleapis/nodejs-logging-winston/commit/3e23e5aeef1ad8c1084e68d04fc2cf7b457fde34))

## [5.2.0](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.8...v5.2.0) (2022-11-04)


### Features

* Add support for instrumentation version annotations ([#760](https://github.com/googleapis/nodejs-logging-winston/issues/760)) ([8237001](https://github.com/googleapis/nodejs-logging-winston/commit/82370012f29c610b6d4853f415159f70ee81f5b9))

## [5.1.8](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.7...v5.1.8) (2022-11-01)


### Bug Fixes

* Prevent instrumentation crash and fix the system test ([#756](https://github.com/googleapis/nodejs-logging-winston/issues/756)) ([fdb6b26](https://github.com/googleapis/nodejs-logging-winston/commit/fdb6b26c2ed61158b0ee45f0419f788191047e1b))

## [5.1.7](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.6...v5.1.7) (2022-10-19)


### Bug Fixes

* Default callback is not called upon error ([#750](https://github.com/googleapis/nodejs-logging-winston/issues/750)) ([737dc6c](https://github.com/googleapis/nodejs-logging-winston/commit/737dc6c66c0fd51a37d9953d06fba9f4473d99f7))

## [5.1.6](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.5...v5.1.6) (2022-10-13)


### Bug Fixes

* Instrumentation performance ([#747](https://github.com/googleapis/nodejs-logging-winston/issues/747)) ([75daae8](https://github.com/googleapis/nodejs-logging-winston/commit/75daae87a1cc0589eca1044b218b777b551b9c18))

## [5.1.5](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.4...v5.1.5) (2022-09-02)


### Bug Fixes

* MaxRetries parameter is ignored ([#737](https://github.com/googleapis/nodejs-logging-winston/issues/737)) ([f806489](https://github.com/googleapis/nodejs-logging-winston/commit/f806489f9f372beb467ee1cf3c83ad7bd6c2a23d))

## [5.1.4](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.3...v5.1.4) (2022-08-25)


### Bug Fixes

* Update latest logging-nodejs to repaire google-gax vulnerability ([#733](https://github.com/googleapis/nodejs-logging-winston/issues/733)) ([5097ab5](https://github.com/googleapis/nodejs-logging-winston/commit/5097ab53e2a44aa09a164cd87c3ca424fdca682b))

## [5.1.3](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.2...v5.1.3) (2022-08-23)


### Bug Fixes

* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-logging-winston/issues/1546)) ([#730](https://github.com/googleapis/nodejs-logging-winston/issues/730)) ([750b207](https://github.com/googleapis/nodejs-logging-winston/commit/750b20747dace3da4807bf23b7c21212d42388c3))

## [5.1.2](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.1...v5.1.2) (2022-07-18)


### Bug Fixes

* Logging to stdout in Cloud Run creates a JSON object as "message" ([#724](https://github.com/googleapis/nodejs-logging-winston/issues/724)) ([705f90e](https://github.com/googleapis/nodejs-logging-winston/commit/705f90e701dc76d0e30cbe5f296fb3401742618c))

## [5.1.1](https://github.com/googleapis/nodejs-logging-winston/compare/v5.1.0...v5.1.1) (2022-07-12)


### Bug Fixes

* Remove Stackdriver references and add note regarding possible formatting issues ([#721](https://github.com/googleapis/nodejs-logging-winston/issues/721)) ([991ecb7](https://github.com/googleapis/nodejs-logging-winston/commit/991ecb7828a55a8fb55fc2e9b9e006c7419a5fd2))

## [5.1.0](https://github.com/googleapis/nodejs-logging-winston/compare/v5.0.0...v5.1.0) (2022-05-28)


### Features

* Add support for library instrumentation ([#713](https://github.com/googleapis/nodejs-logging-winston/issues/713)) ([04f99b7](https://github.com/googleapis/nodejs-logging-winston/commit/04f99b7dd24b63cb4859b5d2413788d12522e33b))

## [5.0.0](https://github.com/googleapis/nodejs-logging-winston/compare/v4.2.4...v5.0.0) (2022-05-24)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#706)

### Bug Fixes

* **deps:** update dependency @google-cloud/logging to v10 ([#709](https://github.com/googleapis/nodejs-logging-winston/issues/709)) ([1315964](https://github.com/googleapis/nodejs-logging-winston/commit/1315964fb1e93b9ca1ab41a407fed17ac34ad360))


### Build System

* update library to use Node 12 ([#706](https://github.com/googleapis/nodejs-logging-winston/issues/706)) ([63d6a93](https://github.com/googleapis/nodejs-logging-winston/commit/63d6a93d988f718acac2df507e4139b3b4ccf6b8))

### [4.2.4](https://github.com/googleapis/nodejs-logging-winston/compare/v4.2.3...v4.2.4) (2022-05-23)


### Bug Fixes

* LoggingWinston log test 'should work correctly with winston formats' failed ([#710](https://github.com/googleapis/nodejs-logging-winston/issues/710)) ([9549b41](https://github.com/googleapis/nodejs-logging-winston/commit/9549b41614f3a0795f623c03755213c90520fb0f))

### [4.2.3](https://github.com/googleapis/nodejs-logging-winston/compare/v4.2.2...v4.2.3) (2022-04-21)


### Bug Fixes

* Reenable staleness bot ([#691](https://github.com/googleapis/nodejs-logging-winston/issues/691)) ([2470dbc](https://github.com/googleapis/nodejs-logging-winston/commit/2470dbc2b225e77b78f8066477a2f63126e3b1cd))

### [4.2.2](https://github.com/googleapis/nodejs-logging-winston/compare/v4.2.1...v4.2.2) (2022-03-23)


### Bug Fixes

* Error: write after end when handling SIGINT ([#684](https://github.com/googleapis/nodejs-logging-winston/issues/684)) ([acc1933](https://github.com/googleapis/nodejs-logging-winston/commit/acc19334037fdf3d7ff07597dc39514713e7264f))

### [4.2.1](https://github.com/googleapis/nodejs-logging-winston/compare/v4.2.0...v4.2.1) (2022-03-21)


### Bug Fixes

* Add missing closure for code snippet in README ([#682](https://github.com/googleapis/nodejs-logging-winston/issues/682)) ([71158c8](https://github.com/googleapis/nodejs-logging-winston/commit/71158c8f2ef6a3fa2172db0728c8e07eb514abc5))

## [4.2.0](https://github.com/googleapis/nodejs-logging-winston/compare/v4.1.3...v4.2.0) (2022-03-18)


### Features

* Add support to print structured logging to STDOUT ([#676](https://github.com/googleapis/nodejs-logging-winston/issues/676)) ([76135ca](https://github.com/googleapis/nodejs-logging-winston/commit/76135ca81cf0a2e6e48bc34e4b982daa64ce2cd9))

### [4.1.3](https://github.com/googleapis/nodejs-logging-winston/compare/v4.1.2...v4.1.3) (2022-03-09)


### Bug Fixes

* Use defaultCallback in LoggingCommon class ([#672](https://github.com/googleapis/nodejs-logging-winston/issues/672)) ([4bc7baa](https://github.com/googleapis/nodejs-logging-winston/commit/4bc7baaa2dcc5d67e2c524f21bfe0c80ef99e8c4))

### [4.1.2](https://github.com/googleapis/nodejs-logging-winston/compare/v4.1.1...v4.1.2) (2022-02-16)


### Bug Fixes

* Update dependency @google-cloud/logging from 9.0.0 to 9.6.9 ([#667](https://github.com/googleapis/nodejs-logging-winston/issues/667)) ([6fcda1e](https://github.com/googleapis/nodejs-logging-winston/commit/6fcda1e641546fcf948b2fe1a0eb1ebc1f83e11c))

### [4.1.1](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.1.0...v4.1.1) (2021-09-08)


### Bug Fixes

* **build:** update branch to main ([#624](https://www.github.com/googleapis/nodejs-logging-winston/issues/624)) ([00771be](https://www.github.com/googleapis/nodejs-logging-winston/commit/00771beeeaaa99772455defa6aa92f47d9a5cba1))

## [4.1.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.0.5...v4.1.0) (2021-06-14)


### Features

* propagate spanIds  ([#599](https://www.github.com/googleapis/nodejs-logging-winston/issues/599)) ([6a34151](https://www.github.com/googleapis/nodejs-logging-winston/commit/6a341511ec195282d14bb05ccae7752c91bdd36c))

### [4.0.5](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.0.4...v4.0.5) (2021-05-10)


### Miscellaneous Chores

* release 4.0.5 ([#590](https://www.github.com/googleapis/nodejs-logging-winston/issues/590)) ([565684a](https://www.github.com/googleapis/nodejs-logging-winston/commit/565684a710b10402756b452fd6fd5fde1652b274))

### [4.0.4](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.0.3...v4.0.4) (2021-02-09)


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#561](https://www.github.com/googleapis/nodejs-logging-winston/issues/561)) ([e5ec00b](https://www.github.com/googleapis/nodejs-logging-winston/commit/e5ec00b536f0351abd32110fe8882a394fec55e7))

### [4.0.3](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.0.2...v4.0.3) (2021-01-21)


### Bug Fixes

* dedupe logs when using middleware ([#553](https://www.github.com/googleapis/nodejs-logging-winston/issues/553)) ([34c9a47](https://www.github.com/googleapis/nodejs-logging-winston/commit/34c9a47e19420b2163b86862732b75a1275e37c9))

### [4.0.2](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.0.1...v4.0.2) (2020-12-08)


### Bug Fixes

* **deps:** update dependency @google-cloud/logging to v9 ([#550](https://www.github.com/googleapis/nodejs-logging-winston/issues/550)) ([b9d9852](https://www.github.com/googleapis/nodejs-logging-winston/commit/b9d9852a80796ddf235900bca796a5909e74a7d1))

### [4.0.1](https://www.github.com/googleapis/nodejs-logging-winston/compare/v4.0.0...v4.0.1) (2020-11-03)


### Bug Fixes

* add user provided transport to the logger ([#543](https://www.github.com/googleapis/nodejs-logging-winston/issues/543)) ([b789429](https://www.github.com/googleapis/nodejs-logging-winston/commit/b789429b95c9d94ceeed57bf55e7f6cf8fab109a))

## [4.0.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.6...v4.0.0) (2020-07-10)


### ⚠ BREAKING CHANGES

* drop support for node.js 8.x (#495)

### Features

* **secrets:** begin migration to secret manager from keystore ([#509](https://www.github.com/googleapis/nodejs-logging-winston/issues/509)) ([df7240d](https://www.github.com/googleapis/nodejs-logging-winston/commit/df7240d89de8cc6d1e5b50238476b9e41d1da549))


### Bug Fixes

* apache license URL ([#468](https://www.github.com/googleapis/nodejs-logging-winston/issues/468)) ([#491](https://www.github.com/googleapis/nodejs-logging-winston/issues/491)) ([db70cc4](https://www.github.com/googleapis/nodejs-logging-winston/commit/db70cc4aa103aea292f16313b564f67d479b481d))
* **deps:** update dependency @google-cloud/logging to v8 ([#513](https://www.github.com/googleapis/nodejs-logging-winston/issues/513)) ([2dcb12d](https://www.github.com/googleapis/nodejs-logging-winston/commit/2dcb12d85d9b5abdf28a745f00e0e566ffb39d66))
* **deps:** update dependency google-auth-library to v6 ([#485](https://www.github.com/googleapis/nodejs-logging-winston/issues/485)) ([7b16a7b](https://www.github.com/googleapis/nodejs-logging-winston/commit/7b16a7b184ba9ec0ac8a1a103feac84c0374cfa6))


### Build System

* drop support for node.js 8.x ([#495](https://www.github.com/googleapis/nodejs-logging-winston/issues/495)) ([42fc0e5](https://www.github.com/googleapis/nodejs-logging-winston/commit/42fc0e5bccb68fe92c08678a6ea471073b1b7162))

### [3.0.6](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.5...v3.0.6) (2020-03-02)


### Bug Fixes

* correct a typo in a code comment ([#463](https://www.github.com/googleapis/nodejs-logging-winston/issues/463)) ([2b29d62](https://www.github.com/googleapis/nodejs-logging-winston/commit/2b29d62f98a6c29334ffa03ebadb7909fb027ca0))

### [3.0.5](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.4...v3.0.5) (2020-01-13)


### Bug Fixes

* **deps:** update dependency @google-cloud/logging to v7 ([#439](https://www.github.com/googleapis/nodejs-logging-winston/issues/439)) ([ac69ff4](https://www.github.com/googleapis/nodejs-logging-winston/commit/ac69ff488084a615a616582b1fcb450456653760))

### [3.0.4](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.3...v3.0.4) (2020-01-04)


### Bug Fixes

* **deps:** update dependency @google-cloud/logging to v6 ([#421](https://www.github.com/googleapis/nodejs-logging-winston/issues/421)) ([d43bf17](https://www.github.com/googleapis/nodejs-logging-winston/commit/d43bf1778b903f311ae49e6c5a6bad542e21c5da))

### [3.0.3](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.2...v3.0.3) (2020-01-02)


### Bug Fixes

* **docs:** bump release level to GA ([#416](https://www.github.com/googleapis/nodejs-logging-winston/issues/416)) ([4832f31](https://www.github.com/googleapis/nodejs-logging-winston/commit/4832f310c149119c2f4ece980015fd2f11d5cb08))

### [3.0.2](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.1...v3.0.2) (2019-12-12)


### Bug Fixes

* **docs:** link to Stackdriver Error Reporting ([#424](https://www.github.com/googleapis/nodejs-logging-winston/issues/424)) ([19ba68f](https://www.github.com/googleapis/nodejs-logging-winston/commit/19ba68f2b0cb3eb1ef314dd156ef3995a0a0faaa))

### [3.0.1](https://www.github.com/googleapis/nodejs-logging-winston/compare/v3.0.0...v3.0.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([cf58882](https://www.github.com/googleapis/nodejs-logging-winston/commit/cf58882c1345792b0b0309362769e6636342ceea))
* **docs:** add jsdoc-region-tag plugin ([#408](https://www.github.com/googleapis/nodejs-logging-winston/issues/408)) ([973ab56](https://www.github.com/googleapis/nodejs-logging-winston/commit/973ab56ddaadcdb76a930c9f6bd4662023b714e3))

## [3.0.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v2.1.0...v3.0.0) (2019-10-18)


### ⚠ BREAKING CHANGES

* logs now truncate to 256,000ish bytes by default (#404)

### Features

* logs now truncate to 256,000ish bytes by default ([#404](https://www.github.com/googleapis/nodejs-logging-winston/issues/404)) ([bea68ae](https://www.github.com/googleapis/nodejs-logging-winston/commit/bea68ae5fd22b2d1cf52b12832bb6288ac8d3570))

## [2.1.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v2.0.1...v2.1.0) (2019-09-19)


### Bug Fixes

* **deps:** explicit update to logging dependency see: [#392](https://www.github.com/googleapis/nodejs-logging-winston/issues/392) ([#394](https://www.github.com/googleapis/nodejs-logging-winston/issues/394)) ([134be02](https://www.github.com/googleapis/nodejs-logging-winston/commit/134be02))


### Features

* add getDefaultMetadataForTracing ([#388](https://www.github.com/googleapis/nodejs-logging-winston/issues/388)) ([f6bd9dd](https://www.github.com/googleapis/nodejs-logging-winston/commit/f6bd9dd))

### [2.0.1](https://www.github.com/googleapis/nodejs-logging-winston/compare/v2.0.0...v2.0.1) (2019-08-28)


### Bug Fixes

* **docs:** stop linking reference documents to anchor ([4bc78ab](https://www.github.com/googleapis/nodejs-logging-winston/commit/4bc78ab))

## [2.0.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v1.1.1...v2.0.0) (2019-08-21)


### ⚠ BREAKING CHANGES

* **middleware:** We now promote the `logEntry` metadata field in a
winston log info object to be the `logName` reported to Stackdriver. This means
that the logs will show up under the log name specified by the `logName`. In addition
there are several breaking changes to users of the express middleware:

* The middleware function has been replaced by makeMiddleware.
* makeMiddleware expects a winston logger to be passed in.
* Previously, we would append a `_applog` suffix to the user provided
  application log name. We no longer do that. We use the user provided
  log name for the application logs. The request logs now have a suffix.

Rationale:
Let the middleware users provide a winston logger that we annotate with a transport
rather than creating two winston loggers on user's behalf. We avoid the
need for having two transports by pomoting the `logName` field from the
winston metadata into the LogEntry. This allows a child logger to write
to a different stackdriver log stream - as needed for request bundling.

### Bug Fixes

* **deps:** update dependency google-auth-library to v5 ([#375](https://www.github.com/googleapis/nodejs-logging-winston/issues/375)) ([f0ec607](https://www.github.com/googleapis/nodejs-logging-winston/commit/f0ec607))
* **docs:** generate correct examples in README.md ([#376](https://www.github.com/googleapis/nodejs-logging-winston/issues/376)) ([7517462](https://www.github.com/googleapis/nodejs-logging-winston/commit/7517462))
* **middleware:** allow users to provide middleware ([#369](https://www.github.com/googleapis/nodejs-logging-winston/issues/369)) ([e61dad9](https://www.github.com/googleapis/nodejs-logging-winston/commit/e61dad9))
* **middleware:** use winston provided child logger api ([#359](https://www.github.com/googleapis/nodejs-logging-winston/issues/359)) ([5d83565](https://www.github.com/googleapis/nodejs-logging-winston/commit/5d83565))


### Features

* **middleware:** make API more ergonomic ([#364](https://www.github.com/googleapis/nodejs-logging-winston/issues/364)) ([5ecdeb4](https://www.github.com/googleapis/nodejs-logging-winston/commit/5ecdeb4))

### [1.1.1](https://www.github.com/googleapis/nodejs-logging-winston/compare/v1.1.0...v1.1.1) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#356](https://www.github.com/googleapis/nodejs-logging-winston/issues/356)) ([9deaea3](https://www.github.com/googleapis/nodejs-logging-winston/commit/9deaea3))

## [1.1.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v1.0.1...v1.1.0) (2019-06-21)


### Bug Fixes

* **docs:** pin to version of compodoc that renders JavaScript/tables ([#344](https://www.github.com/googleapis/nodejs-logging-winston/issues/344)) ([ea9ea9a](https://www.github.com/googleapis/nodejs-logging-winston/commit/ea9ea9a))
* properly import transport-stream ([#348](https://www.github.com/googleapis/nodejs-logging-winston/issues/348)) ([7eec9dc](https://www.github.com/googleapis/nodejs-logging-winston/commit/7eec9dc)), closes [#341](https://www.github.com/googleapis/nodejs-logging-winston/issues/341) [#342](https://www.github.com/googleapis/nodejs-logging-winston/issues/342)
* **middleware:** need message in request log message ([#349](https://www.github.com/googleapis/nodejs-logging-winston/issues/349)) ([cb11e4c](https://www.github.com/googleapis/nodejs-logging-winston/commit/cb11e4c))


### Features

* add support for apiEndpoint override ([#352](https://www.github.com/googleapis/nodejs-logging-winston/issues/352)) ([6666276](https://www.github.com/googleapis/nodejs-logging-winston/commit/6666276))

### [1.0.1](https://www.github.com/googleapis/nodejs-logging-winston/compare/v1.0.0...v1.0.1) (2019-06-15)


### Bug Fixes

* **docs:** move to new client docs URL ([#339](https://www.github.com/googleapis/nodejs-logging-winston/issues/339)) ([c9f8d13](https://www.github.com/googleapis/nodejs-logging-winston/commit/c9f8d13))

## [1.0.0](https://www.github.com/googleapis/nodejs-logging-winston/compare/v0.11.1...v1.0.0) (2019-06-11)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#308)
* Node 6 is no longer tested.
* only support winston3 (#297)

### Bug Fixes

* expose express middleware, add system-test ([#278](https://www.github.com/googleapis/nodejs-logging-winston/issues/278)) ([dc17ad7](https://www.github.com/googleapis/nodejs-logging-winston/commit/dc17ad7))
* use immutable winston level ([#319](https://www.github.com/googleapis/nodejs-logging-winston/issues/319)) ([450295f](https://www.github.com/googleapis/nodejs-logging-winston/commit/450295f))
* **deps:** bump minimum required dependencies ([#336](https://www.github.com/googleapis/nodejs-logging-winston/issues/336)) ([fc87d65](https://www.github.com/googleapis/nodejs-logging-winston/commit/fc87d65))
* **deps:** update dependency @google-cloud/logging to v5 ([#324](https://www.github.com/googleapis/nodejs-logging-winston/issues/324)) ([059c2a1](https://www.github.com/googleapis/nodejs-logging-winston/commit/059c2a1))
* **deps:** update dependency google-auth-library to v4 ([#317](https://www.github.com/googleapis/nodejs-logging-winston/issues/317)) ([6182968](https://www.github.com/googleapis/nodejs-logging-winston/commit/6182968))


### Build System

* upgrade engines field to >=8.10.0 ([#308](https://www.github.com/googleapis/nodejs-logging-winston/issues/308)) ([c777689](https://www.github.com/googleapis/nodejs-logging-winston/commit/c777689))


### Code Refactoring

* only support winston3 ([#297](https://www.github.com/googleapis/nodejs-logging-winston/issues/297)) ([9d3911b](https://www.github.com/googleapis/nodejs-logging-winston/commit/9d3911b))


### Miscellaneous Chores

* drop node 6 support ([#307](https://www.github.com/googleapis/nodejs-logging-winston/issues/307)) ([08631b7](https://www.github.com/googleapis/nodejs-logging-winston/commit/08631b7))

## v0.11.1

04-09-2019 17:34 PDT

### Bug Fixes

- fix: add missing dep on google-auth-library
- fix: only copy timestamp metadata if it is a date ([#295](https://github.com/googleapis/nodejs-logging-winston/pull/295))
- fix: assign timestamps from log metadata ([#294](https://github.com/googleapis/nodejs-logging-winston/pull/294))

### Dependencies

- chore(deps): update dependency @types/semver to v6
- fix(deps): update dependency semver to v6
- chore(deps): update dependency mocha to v6 ([#269](https://github.com/googleapis/nodejs-logging-winston/pull/269))

### Internal / Testing Changes

- refactor: use execSync for tests ([#292](https://github.com/googleapis/nodejs-logging-winston/pull/292))
- chore: publish to npm using wombat ([#283](https://github.com/googleapis/nodejs-logging-winston/pull/283))
- test: error-reporting system test improvement ([#282](https://github.com/googleapis/nodejs-logging-winston/pull/282))
- test: make error reporting system test more robust
- test: fix error reporting system test race
- build: Add docuploader credentials to node publish jobs ([#274](https://github.com/googleapis/nodejs-logging-winston/pull/274))
- refactor: wrap execSync with encoding: utf-8
- build: use per-repo npm publish token
- build: update release config ([#271](https://github.com/googleapis/nodejs-logging-winston/pull/271))
- build: use node10 to run samples-test, system-test etc ([#273](https://github.com/googleapis/nodejs-logging-winston/pull/273))

## v0.11.0

02-15-2019 10:42 PST

### Features
- feature: request logging middleware for express ([#182](https://github.com/googleapis/nodejs-logging-winston/pull/182))

### Bug Fixes
- fix: remove circular references ([#264](https://github.com/googleapis/nodejs-logging-winston/pull/264))

### Dependencies
- fix(deps): update dependency logform to v2 ([#247](https://github.com/googleapis/nodejs-logging-winston/pull/247))
- fix(deps): update dependency @sindresorhus/is to ^0.13.0 ([#213](https://github.com/googleapis/nodejs-logging-winston/pull/213))
- fix(deps): update dependency @sindresorhus/is to ^0.12.0 ([#126](https://github.com/googleapis/nodejs-logging-winston/pull/126))

### Documentation
- docs: update links in contrib guide ([#267](https://github.com/googleapis/nodejs-logging-winston/pull/267))
- docs: update contributing path in README ([#260](https://github.com/googleapis/nodejs-logging-winston/pull/260))
- docs: add lint/fix example to contributing guide ([#255](https://github.com/googleapis/nodejs-logging-winston/pull/255))
- docs: update readme badges ([#229](https://github.com/googleapis/nodejs-logging-winston/pull/229))

### Internal / Testing Changes
- build: use linkinator for docs test ([#266](https://github.com/googleapis/nodejs-logging-winston/pull/266))
- fix: de-flake system tests ([#265](https://github.com/googleapis/nodejs-logging-winston/pull/265))
- build: create docs test npm scripts ([#263](https://github.com/googleapis/nodejs-logging-winston/pull/263))
- build: test using @grpc/grpc-js in CI ([#261](https://github.com/googleapis/nodejs-logging-winston/pull/261))
- chore: move CONTRIBUTING.md to root ([#259](https://github.com/googleapis/nodejs-logging-winston/pull/259))
- chore(deps): update dependency @google-cloud/common to ^0.31.0 ([#256](https://github.com/googleapis/nodejs-logging-winston/pull/256))
- chore: update @google-cloud/common to 0.30.2 ([#254](https://github.com/googleapis/nodejs-logging-winston/pull/254))
- chore(deps): update dependency eslint-config-prettier to v4 ([#253](https://github.com/googleapis/nodejs-logging-winston/pull/253))
- build: ignore googleapis.com in doc link check ([#251](https://github.com/googleapis/nodejs-logging-winston/pull/251))
- chore(build): check for 404s when publishing docs ([#248](https://github.com/googleapis/nodejs-logging-winston/pull/248))
- refactor: update sample test dependencies ([#246](https://github.com/googleapis/nodejs-logging-winston/pull/246))
- chore(build): inject yoshi automation key ([#243](https://github.com/googleapis/nodejs-logging-winston/pull/243))
- chore: update nyc and eslint configs ([#242](https://github.com/googleapis/nodejs-logging-winston/pull/242))
- chore: fix publish.sh permission +x ([#240](https://github.com/googleapis/nodejs-logging-winston/pull/240))
- fix(build): fix Kokoro release script ([#239](https://github.com/googleapis/nodejs-logging-winston/pull/239))
- build: add Kokoro configs for autorelease ([#238](https://github.com/googleapis/nodejs-logging-winston/pull/238))
- chore: update system tests key ([#232](https://github.com/googleapis/nodejs-logging-winston/pull/232))
- chore: always nyc report before calling codecov ([#235](https://github.com/googleapis/nodejs-logging-winston/pull/235))
- chore: nyc ignore build/test by default ([#234](https://github.com/googleapis/nodejs-logging-winston/pull/234))
- chore: update license file ([#231](https://github.com/googleapis/nodejs-logging-winston/pull/231))
- fix(build): fix system key decryption ([#227](https://github.com/googleapis/nodejs-logging-winston/pull/227))
- chore: update key for system tests ([#226](https://github.com/googleapis/nodejs-logging-winston/pull/226))
- chore(deps): update dependency @google-cloud/common to ^0.27.0 ([#225](https://github.com/googleapis/nodejs-logging-winston/pull/225))
- refactor: reduce the number of dependencies ([#222](https://github.com/googleapis/nodejs-logging-winston/pull/222))
- chore: add a synth.metadata
- chore(deps): update dependency gts to ^0.9.0 ([#219](https://github.com/googleapis/nodejs-logging-winston/pull/219))
- chore: update eslintignore config ([#218](https://github.com/googleapis/nodejs-logging-winston/pull/218))
- docs(samples): convert samples test from ava to mocha ([#207](https://github.com/googleapis/nodejs-logging-winston/pull/207))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#217](https://github.com/googleapis/nodejs-logging-winston/pull/217))
- chore: drop contributors from multiple places ([#216](https://github.com/googleapis/nodejs-logging-winston/pull/216))
- chore(deps): update dependency @types/is to v0.0.21 ([#215](https://github.com/googleapis/nodejs-logging-winston/pull/215))
- chore: use latest npm on Windows ([#214](https://github.com/googleapis/nodejs-logging-winston/pull/214))
- chore: use unique UUID per system test ([#212](https://github.com/googleapis/nodejs-logging-winston/pull/212))
- chore: update CircleCI config ([#211](https://github.com/googleapis/nodejs-logging-winston/pull/211))
- chore: include build in eslintignore ([#208](https://github.com/googleapis/nodejs-logging-winston/pull/208))
- chore(deps): update dependency eslint-plugin-node to v8 ([#203](https://github.com/googleapis/nodejs-logging-winston/pull/203))
- chore: update issue templates ([#202](https://github.com/googleapis/nodejs-logging-winston/pull/202))
- chore: remove old issue template ([#200](https://github.com/googleapis/nodejs-logging-winston/pull/200))
- build: run tests on node11 ([#199](https://github.com/googleapis/nodejs-logging-winston/pull/199))
- chore(deps): update dependency @google-cloud/common to ^0.26.0 ([#198](https://github.com/googleapis/nodejs-logging-winston/pull/198))
- chores(build): do not collect sponge.xml from windows builds ([#197](https://github.com/googleapis/nodejs-logging-winston/pull/197))
- chores(build): run codecov on continuous builds ([#196](https://github.com/googleapis/nodejs-logging-winston/pull/196))
- chore: update new issue template ([#195](https://github.com/googleapis/nodejs-logging-winston/pull/195))
- build: fix codecov uploading on Kokoro ([#192](https://github.com/googleapis/nodejs-logging-winston/pull/192))

## v0.10.2

### Fixes
- fix: Doesnt set service context winston3 ([#180](https://github.com/googleapis/nodejs-logging-winston/pull/180))
- fix: Don't publish sourcemaps ([#178](https://github.com/googleapis/nodejs-logging-winston/pull/178))

### Internal / Testing Changes
- test: increasing error_reporting poll timeout for system tests ([#187](https://github.com/googleapis/nodejs-logging-winston/pull/187))
- Update kokoro config ([#185](https://github.com/googleapis/nodejs-logging-winston/pull/185))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#183](https://github.com/googleapis/nodejs-logging-winston/pull/183))

## v0.10.1

### Documentation
- Add missing @class docstring ([#176](https://github.com/googleapis/nodejs-logging-winston/pull/176))

## v0.10.0

**This release has breaking changes**.  Support for node.js 4.x and 9.x has ended.

### Breaking Changes
- fix: drop support for node.js 9.x ([#122](https://github.com/googleapis/nodejs-logging-winston/pull/122))
- chore: drop node 4 support ([#97](https://github.com/googleapis/nodejs-logging-winston/pull/97))

### New Features
- feat: Winston2 and 3 support. ([#161](https://github.com/googleapis/nodejs-logging-winston/pull/161))
- feat: use small HTTP dependency ([#153](https://github.com/googleapis/nodejs-logging-winston/pull/153))

### Bug Fixes
- fix: logged errors are reported to error reporting ([#148](https://github.com/googleapis/nodejs-logging-winston/pull/148))
- doc: fix link to HttpRequest message ([#99](https://github.com/googleapis/nodejs-logging-winston/pull/99))
- fix: prevent permanent  merging of labels ([#89](https://github.com/googleapis/nodejs-logging-winston/pull/89))
- fix: remove unnecessary runtime dependencies ([#73](https://github.com/googleapis/nodejs-logging-winston/pull/73))
- fix: Fix typo in readme ([#69](https://github.com/googleapis/nodejs-logging-winston/pull/69))

### Dependencies
- fix: Upgrade to @google-cloud/logging 4.x ([#168](https://github.com/googleapis/nodejs-logging-winston/pull/168))
- chore(deps): update dependency @google-cloud/common to ^0.25.0 ([#163](https://github.com/googleapis/nodejs-logging-winston/pull/163))
- chore(deps): update dependency delay to v4 ([#154](https://github.com/googleapis/nodejs-logging-winston/pull/154))
- chore(deps): update dependency @google-cloud/common to ^0.24.0 ([#158](https://github.com/googleapis/nodejs-logging-winston/pull/158))
- fix(deps): update dependency @google-cloud/common to ^0.23.0 and logging. ([#152](https://github.com/googleapis/nodejs-logging-winston/pull/152))
- fix(deps): update dependency @google-cloud/logging to v3 ([#149](https://github.com/googleapis/nodejs-logging-winston/pull/149))
- chore(deps): update dependency pify to v4 ([#145](https://github.com/googleapis/nodejs-logging-winston/pull/145))
- fix(deps): update dependency @google-cloud/logging to v2 ([#121](https://github.com/googleapis/nodejs-logging-winston/pull/121))

### Internal / Testing Changes
- Update CI config ([#171](https://github.com/googleapis/nodejs-logging-winston/pull/171))
- Enable prefer-const in the eslint config ([#166](https://github.com/googleapis/nodejs-logging-winston/pull/166))
- chore(deps): update dependency @types/glob to v7 ([#167](https://github.com/googleapis/nodejs-logging-winston/pull/167))
- fix: fixing samples test and guarding for no entries in system test ([#165](https://github.com/googleapis/nodejs-logging-winston/pull/165))
- Enable no-var in eslint ([#162](https://github.com/googleapis/nodejs-logging-winston/pull/162))
- fix: presystem-test should func pretest ([#164](https://github.com/googleapis/nodejs-logging-winston/pull/164))
- Update CI config ([#160](https://github.com/googleapis/nodejs-logging-winston/pull/160))
- Add synth script and update CI ([#156](https://github.com/googleapis/nodejs-logging-winston/pull/156))
- Retry npm install in CI ([#155](https://github.com/googleapis/nodejs-logging-winston/pull/155))
- chore(deps): update dependency eslint-config-prettier to v3 ([#146](https://github.com/googleapis/nodejs-logging-winston/pull/146))
- chore: ignore package-lock.json ([#144](https://github.com/googleapis/nodejs-logging-winston/pull/144))
- chore(deps): lock file maintenance ([#143](https://github.com/googleapis/nodejs-logging-winston/pull/143))
- chore(deps): lock file maintenance ([#142](https://github.com/googleapis/nodejs-logging-winston/pull/142))
- chore(deps): lock file maintenance ([#141](https://github.com/googleapis/nodejs-logging-winston/pull/141))
- chore: update renovate config ([#140](https://github.com/googleapis/nodejs-logging-winston/pull/140))
- chore: remove greenkeeper badge ([#139](https://github.com/googleapis/nodejs-logging-winston/pull/139))
- test: throw on deprecation ([#138](https://github.com/googleapis/nodejs-logging-winston/pull/138))
- chore(deps): lock file maintenance ([#137](https://github.com/googleapis/nodejs-logging-winston/pull/137))
- chore(deps): update dependency typescript to v3 ([#136](https://github.com/googleapis/nodejs-logging-winston/pull/136))
- chore: assert.deelEqual => assert.deepStrictEqual ([#135](https://github.com/googleapis/nodejs-logging-winston/pull/135))
- chore: move mocha options to mocha.opts ([#133](https://github.com/googleapis/nodejs-logging-winston/pull/133))
- chore: require node 8 for samples ([#134](https://github.com/googleapis/nodejs-logging-winston/pull/134))
- chore(deps): lock file maintenance ([#132](https://github.com/googleapis/nodejs-logging-winston/pull/132))
- chore(deps): lock file maintenance ([#131](https://github.com/googleapis/nodejs-logging-winston/pull/131))
- chore(deps): update dependency eslint-plugin-node to v7 ([#130](https://github.com/googleapis/nodejs-logging-winston/pull/130))
- chore(deps): lock file maintenance ([#128](https://github.com/googleapis/nodejs-logging-winston/pull/128))
- chore(deps): update dependency gts to ^0.8.0 ([#127](https://github.com/googleapis/nodejs-logging-winston/pull/127))
- chore(deps): lock file maintenance ([#125](https://github.com/googleapis/nodejs-logging-winston/pull/125))
- chore(deps): lock file maintenance ([#124](https://github.com/googleapis/nodejs-logging-winston/pull/124))
- chore(deps): lock file maintenance ([#123](https://github.com/googleapis/nodejs-logging-winston/pull/123))
- fix(deps): update dependency @sindresorhus/is to ^0.10.0 ([#120](https://github.com/googleapis/nodejs-logging-winston/pull/120))
- chore(deps): lock file maintenance ([#119](https://github.com/googleapis/nodejs-logging-winston/pull/119))
- chore(deps): lock file maintenance ([#118](https://github.com/googleapis/nodejs-logging-winston/pull/118))
- fix(deps): update dependency yargs to v12 ([#117](https://github.com/googleapis/nodejs-logging-winston/pull/117))
- chore: update packages ([#114](https://github.com/googleapis/nodejs-logging-winston/pull/114))
- chore(deps): update dependency ava to v0.25.0 ([#110](https://github.com/googleapis/nodejs-logging-winston/pull/110))
- Configure Renovate ([#102](https://github.com/googleapis/nodejs-logging-winston/pull/102))
- chore(package): update eslint to version 5.0.0 ([#103](https://github.com/googleapis/nodejs-logging-winston/pull/103))
- refactor: drop repo-tool as an exec wrapper ([#107](https://github.com/googleapis/nodejs-logging-winston/pull/107))
- chore: update sample lockfiles ([#106](https://github.com/googleapis/nodejs-logging-winston/pull/106))
- fix: update linking for samples ([#104](https://github.com/googleapis/nodejs-logging-winston/pull/104))
- cleanup: get rid of unncessary type casts ([#101](https://github.com/googleapis/nodejs-logging-winston/pull/101))
- chore(package): update cpy-cli to version 2.0.0 ([#86](https://github.com/googleapis/nodejs-logging-winston/pull/86))
- chore(package): update to the latest gts and typescript ([#100](https://github.com/googleapis/nodejs-logging-winston/pull/100))
- test: fix race between sample and system tests ([#98](https://github.com/googleapis/nodejs-logging-winston/pull/98))
- fix: fix broken install tests ([#96](https://github.com/googleapis/nodejs-logging-winston/pull/96))
- chore: remove `--bail` from system tests config ([#95](https://github.com/googleapis/nodejs-logging-winston/pull/95))
- chore: lock files maintenance ([#83](https://github.com/googleapis/nodejs-logging-winston/pull/83))
- chore: the ultimate fix for repo-tools EPERM ([#82](https://github.com/googleapis/nodejs-logging-winston/pull/82))
- chore: timeout for system test ([#81](https://github.com/googleapis/nodejs-logging-winston/pull/81))
- chore(package): update @types/node to version 10.0.9 ([#80](https://github.com/googleapis/nodejs-logging-winston/pull/80))
- chore: lock files maintenance ([#79](https://github.com/googleapis/nodejs-logging-winston/pull/79))
- chore: test on node10 ([#77](https://github.com/googleapis/nodejs-logging-winston/pull/77))
- chore: lock files maintenance ([#75](https://github.com/googleapis/nodejs-logging-winston/pull/75))
