# Changelog

## [1.7.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.6.0...confidentialcomputing-v1.7.0) (2024-12-18)


### Features

* [confidentialcomputing] Add a token_type options proto to allow for customization of specific token types. Added the first token type option to hold principal tag token options ([#5839](https://github.com/googleapis/google-cloud-node/issues/5839)) ([338106a](https://github.com/googleapis/google-cloud-node/commit/338106af19815df0fdc95be0c38e689ded15f95d))

## [1.6.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.5.0...confidentialcomputing-v1.6.0) (2024-07-22)


### Features

* [confidentialcomputing] Add a new field `tee_attestation` to `VerifyAttestationRequest` message proto for SEV SNP and TDX attestations ([#5538](https://github.com/googleapis/google-cloud-node/issues/5538)) ([6368c02](https://github.com/googleapis/google-cloud-node/commit/6368c02be96b2cf6ad0e514a0c176374c38ba2f1))

## [1.5.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.4.0...confidentialcomputing-v1.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.3.0...confidentialcomputing-v1.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.2.0...confidentialcomputing-v1.3.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.1.0...confidentialcomputing-v1.2.0) (2023-11-16)


### Features

* [confidentialcomputing] Add a new field `token_type` to `TokenOptions` message proto ([#4808](https://github.com/googleapis/google-cloud-node/issues/4808)) ([f885b65](https://github.com/googleapis/google-cloud-node/commit/f885b6565848041517d71214874aa8fbce9d4fa2))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v1.0.0...confidentialcomputing-v1.1.0) (2023-09-06)


### Features

* [confidentialcomputing] Add a new field `partial_errors` to `VerifyAttestationResponse` proto ([#4527](https://github.com/googleapis/google-cloud-node/issues/4527)) ([e122185](https://github.com/googleapis/google-cloud-node/commit/e122185997c379f9db4be159c754b8ed16be4e7b))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/confidentialcomputing-v0.1.0...confidentialcomputing-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* [confidentialcomputing] Mark all fields `Optional` for `ContainerImageSignagure` proto ([#4491](https://github.com/googleapis/google-cloud-node/issues/4491)) ([74d46d5](https://github.com/googleapis/google-cloud-node/commit/74d46d5adfdbf9e685c5ebf8d5947f9342916868))


### Bug Fixes

* [confidentialcomputing] fix typings for IAM methods ([#4450](https://github.com/googleapis/google-cloud-node/issues/4450)) ([65ade21](https://github.com/googleapis/google-cloud-node/commit/65ade21c96a29033c18d32bc20c473661861d0e0))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## 0.1.0 (2023-04-24)


### Features

* Add initial files for google.cloud.confidentialcomputing.v1alpha1 ([#4193](https://github.com/googleapis/google-cloud-node/issues/4193)) ([a2e0b9e](https://github.com/googleapis/google-cloud-node/commit/a2e0b9ed07f58228386f8ebcf5c16fa7ac589cc3))
