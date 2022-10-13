# Changelog

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/certificate-manager-v0.6.0...certificate-manager-v1.0.0) (2022-10-13)


### ⚠ BREAKING CHANGES

* Removed resource definition of Compute API resources and incorrect resource references that used them (#41)
* Upgrade to stable (#32)
* Update library to use Node 12 (#29)
* Updated resource patterns to comply with https://google.aip.dev/123#annotating-resource-types (#13)

### Features

* Added support for Private Trust to Certificate Manager API ([#55](https://github.com/googleapis/google-cloud-node/issues/55)) ([0c9a967](https://github.com/googleapis/google-cloud-node/commit/0c9a967ca9f41bb817b0f61a4dbac0391ec3d0f7))
* Initial generation of library ([#3](https://github.com/googleapis/google-cloud-node/issues/3)) ([90bc6b0](https://github.com/googleapis/google-cloud-node/commit/90bc6b0722bb6950270b4f013037c555234ff559))
* Initial stub of library ([3638dd9](https://github.com/googleapis/google-cloud-node/commit/3638dd95655eaa143a1a416e5873ae3e8c3f9a46))
* Support regapic LRO ([#38](https://github.com/googleapis/google-cloud-node/issues/38)) ([50ddd46](https://github.com/googleapis/google-cloud-node/commit/50ddd467affd6996173efc33140b302a87555db3))
* Upgrade to stable ([#32](https://github.com/googleapis/google-cloud-node/issues/32)) ([09157b0](https://github.com/googleapis/google-cloud-node/commit/09157b01c6364ba4de53e7df0793a4a175cca728))


### Bug Fixes

* Allow passing gax instance to client constructor ([#49](https://github.com/googleapis/google-cloud-node/issues/49)) ([f1af3bf](https://github.com/googleapis/google-cloud-node/commit/f1af3bfbf408a2456ec81cfaa7e5f0caad6dc9b9))
* Better support for fallback mode ([#44](https://github.com/googleapis/google-cloud-node/issues/44)) ([ae4d79b](https://github.com/googleapis/google-cloud-node/commit/ae4d79bff2f1800c250887a3318cfce4deef378c))
* Change import long to require ([#45](https://github.com/googleapis/google-cloud-node/issues/45)) ([7d400b1](https://github.com/googleapis/google-cloud-node/commit/7d400b11aaefda3634f918efbbf8453d1bbfc9fc))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/google-cloud-node/issues/1553)) ([#48](https://github.com/googleapis/google-cloud-node/issues/48)) ([c42c54d](https://github.com/googleapis/google-cloud-node/commit/c42c54d4aac4b64c115a38bf4a83899fdf46bb3c))
* Preserve default values in x-goog-request-params header ([#51](https://github.com/googleapis/google-cloud-node/issues/51)) ([9a7df96](https://github.com/googleapis/google-cloud-node/commit/9a7df96bda0c1662af7fb64729b8e1d82a113aca))
* Removed resource definition of Compute API resources and incorrect resource references that used them ([#41](https://github.com/googleapis/google-cloud-node/issues/41)) ([bad3bd4](https://github.com/googleapis/google-cloud-node/commit/bad3bd431d821345d18d13c9487e75bd79cbea5a))
* Updated resource patterns to comply with https://google.aip.dev/123#annotating-resource-types ([#13](https://github.com/googleapis/google-cloud-node/issues/13)) ([29b2ef0](https://github.com/googleapis/google-cloud-node/commit/29b2ef08fd42fd7bd2beaba102b24a38e877a340))
* use google-gax v3.3.0 ([c42c54d](https://github.com/googleapis/google-cloud-node/commit/c42c54d4aac4b64c115a38bf4a83899fdf46bb3c))


### Build System

* Update library to use Node 12 ([#29](https://github.com/googleapis/google-cloud-node/issues/29)) ([dd4af95](https://github.com/googleapis/google-cloud-node/commit/dd4af953b799ce88bbcc82799d26c301ba62c081))

## [0.6.0](https://github.com/googleapis/nodejs-certificate-manager/compare/v0.5.0...v0.6.0) (2022-10-04)


### Features

* Added support for Private Trust to Certificate Manager API ([#55](https://github.com/googleapis/nodejs-certificate-manager/issues/55)) ([d9ff953](https://github.com/googleapis/nodejs-certificate-manager/commit/d9ff953cc5ea584970e831171a91b4320832fd3d))


### Bug Fixes

* Allow passing gax instance to client constructor ([#49](https://github.com/googleapis/nodejs-certificate-manager/issues/49)) ([f8f86e5](https://github.com/googleapis/nodejs-certificate-manager/commit/f8f86e5b29e5e7dc2896f8bd71c1de8804a0d92b))
* Better support for fallback mode ([#44](https://github.com/googleapis/nodejs-certificate-manager/issues/44)) ([75c72a9](https://github.com/googleapis/nodejs-certificate-manager/commit/75c72a92beb6890ec4429cb3ecdcf8d40238a175))
* Change import long to require ([#45](https://github.com/googleapis/nodejs-certificate-manager/issues/45)) ([1dc45d7](https://github.com/googleapis/nodejs-certificate-manager/commit/1dc45d71c836a8f87ed6b4f5fc0a3750034cb84f))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-certificate-manager/issues/1553)) ([#48](https://github.com/googleapis/nodejs-certificate-manager/issues/48)) ([96e4038](https://github.com/googleapis/nodejs-certificate-manager/commit/96e403827bf1ac75c6c4d38f100db9a6f9bd8b35))
* Preserve default values in x-goog-request-params header ([#51](https://github.com/googleapis/nodejs-certificate-manager/issues/51)) ([13c6ab0](https://github.com/googleapis/nodejs-certificate-manager/commit/13c6ab08318349e4061ff52e4fd6b62c9f3482dd))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-certificate-manager/issues/1546)) ([#47](https://github.com/googleapis/nodejs-certificate-manager/issues/47)) ([c5002fd](https://github.com/googleapis/nodejs-certificate-manager/commit/c5002fd71850233f5aac6daffb3fb09ace696229))
* use google-gax v3.3.0 ([96e4038](https://github.com/googleapis/nodejs-certificate-manager/commit/96e403827bf1ac75c6c4d38f100db9a6f9bd8b35))

## [0.5.0](https://github.com/googleapis/nodejs-certificate-manager/compare/v0.4.0...v0.5.0) (2022-07-08)


### ⚠ BREAKING CHANGES

* Removed resource definition of Compute API resources and incorrect resource references that used them

### Bug Fixes

* Removed resource definition of Compute API resources and incorrect resource references that used them ([4ee1fc4](https://github.com/googleapis/nodejs-certificate-manager/commit/4ee1fc45a5bee07edf888719dee13d600f5a9733))

## [0.4.0](https://github.com/googleapis/nodejs-certificate-manager/compare/v0.3.0...v0.4.0) (2022-06-30)


### Features

* support regapic LRO ([#38](https://github.com/googleapis/nodejs-certificate-manager/issues/38)) ([0d7b185](https://github.com/googleapis/nodejs-certificate-manager/commit/0d7b18581a8141caa1e9091450b1da603cb2bbe9))

## [0.3.0](https://github.com/googleapis/nodejs-certificate-manager/compare/v0.2.0...v0.3.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* upgrade to stable (#32)
* update library to use Node 12 (#29)

### Features

* upgrade to stable ([#32](https://github.com/googleapis/nodejs-certificate-manager/issues/32)) ([711b55e](https://github.com/googleapis/nodejs-certificate-manager/commit/711b55e0ae8103cf427e4b8de0da35dd10b1b229))


### Build System

* update library to use Node 12 ([#29](https://github.com/googleapis/nodejs-certificate-manager/issues/29)) ([9e101c9](https://github.com/googleapis/nodejs-certificate-manager/commit/9e101c96af3a9b58807cc7ee399cf6e71d5e4d97))


### Miscellaneous Chores

* release v0.3.0 ([#33](https://github.com/googleapis/nodejs-certificate-manager/issues/33)) ([eeb8d9b](https://github.com/googleapis/nodejs-certificate-manager/commit/eeb8d9bd45620039a3613fe813a9e9b27647358a))

## [0.2.0](https://github.com/googleapis/nodejs-certificate-manager/compare/v0.1.0...v0.2.0) (2022-04-12)


### ⚠ BREAKING CHANGES

* Updated resource patterns to comply with https://google.aip.dev/123#annotating-resource-types

### Bug Fixes

* Updated resource patterns to comply with https://google.aip.dev/123#annotating-resource-types ([32bfafc](https://github.com/googleapis/nodejs-certificate-manager/commit/32bfafc79bcfef7e0edaf00155ab71eaa2db0720))

## 0.1.0 (2022-03-22)


### Features

* initial generation of library ([6c2c450](https://github.com/googleapis/nodejs-certificate-manager/commit/6c2c4504ba839aa4ac568fad9b86603b6b8531b6))
* initial stub of library ([be43c7f](https://github.com/googleapis/nodejs-certificate-manager/commit/be43c7f481f39517f8593bec01d8087d8b4047af))
