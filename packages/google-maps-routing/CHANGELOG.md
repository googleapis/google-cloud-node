# Changelog

## [1.0.2](https://github.com/googleapis/google-cloud-node/compare/routing-v1.0.1...routing-v1.0.2) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4969](https://github.com/googleapis/google-cloud-node/issues/4969)) ([70fe30a](https://github.com/googleapis/google-cloud-node/commit/70fe30af077ab6042822d62d31ca740dd5df55dd))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/routing-v1.0.0...routing-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/routing-v0.6.0...routing-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4466](https://github.com/googleapis/google-cloud-node/issues/4466)) ([fa1520c](https://github.com/googleapis/google-cloud-node/commit/fa1520c3eb526efd3523d9cea349ed31683d5889))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/routing-v0.5.1...routing-v0.6.0) (2023-07-04)


### Features

* [routing] Add HTML Navigation Instructions feature to ComputeRoutes ([#4381](https://github.com/googleapis/google-cloud-node/issues/4381)) ([8414c84](https://github.com/googleapis/google-cloud-node/commit/8414c8458133ecc654d25eeb8b0b90c4dac9ff04))

## [0.5.1](https://github.com/googleapis/google-cloud-node/compare/routing-v0.5.0...routing-v0.5.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/routing-v0.4.0...routing-v0.5.0) (2023-03-28)


### Features

* [routing] adds support for specifying region_code in the ComputeRoutesRequest ([#4103](https://github.com/googleapis/google-cloud-node/issues/4103)) ([1106a82](https://github.com/googleapis/google-cloud-node/commit/1106a824dbddc7296f069a0a3e063b0ec9fc914f))
* [routing] moved speed in SpeedReadingInterval into a oneof speed_type, this is a breaking change for Go client libraries ([#4121](https://github.com/googleapis/google-cloud-node/issues/4121)) ([9878d72](https://github.com/googleapis/google-cloud-node/commit/9878d722f634f356590014ea8f2f035bb1b134db))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/routing-v0.3.1...routing-v0.4.0) (2023-03-13)


### Features

* [routing] added support for specifying waypoints as addresses ([#4065](https://github.com/googleapis/google-cloud-node/issues/4065)) ([e325ac5](https://github.com/googleapis/google-cloud-node/commit/e325ac51cf2550cc9d9dba6a8145d4affe766930))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/routing-v0.3.0...routing-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3991](https://github.com/googleapis/google-cloud-node/issues/3991)) ([c6326d9](https://github.com/googleapis/google-cloud-node/commit/c6326d90abb9b649b25052e4afe7b3eb0f65bcb4))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/routing-v0.2.1...routing-v0.3.0) (2023-01-28)


### Features

* Add ExtraComputations feature to ComputeRoutes and ComputeRouteMatrix ([#3868](https://github.com/googleapis/google-cloud-node/issues/3868)) ([3b646fa](https://github.com/googleapis/google-cloud-node/commit/3b646fabd5aa4f29a176817d5ed6a23de9583ccb))
* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/routing-v0.2.0...routing-v0.2.1) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/routing-v0.1.1...routing-v0.2.0) (2022-11-03)


### Features

* Add Eco Routes feature to ComputeRoutes ([#3467](https://github.com/googleapis/google-cloud-node/issues/3467)) ([44bfca5](https://github.com/googleapis/google-cloud-node/commit/44bfca543e2663c0bbc956dafbd5f9eaea61818f))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/routing-v0.1.0...routing-v0.1.1) (2022-09-30)


### Bug Fixes

* **docs:** Add pretty name for API ([#3382](https://github.com/googleapis/google-cloud-node/issues/3382)) ([84db53b](https://github.com/googleapis/google-cloud-node/commit/84db53b4843df2511fee9da794b5429bd40b214d))

## 0.1.0 (2022-09-30)


### Features

* add initial files for google.maps.routing.v2 ([1671258](https://github.com/googleapis/google-cloud-node/commit/1671258fe7d2ad326ed105107d788fb3c295fb3b))
