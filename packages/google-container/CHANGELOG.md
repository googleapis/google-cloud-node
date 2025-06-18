# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/container?activeTab=versions

## [6.1.0](https://github.com/googleapis/google-cloud-node/compare/container-v6.0.1...container-v6.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [6.0.1](https://github.com/googleapis/google-cloud-node/compare/container-v6.0.0...container-v6.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [6.0.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.19.0...container-v6.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [5.19.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.18.0...container-v5.19.0) (2024-11-14)


### Features

* [container] add LocalSsdEncryptionMode in NodeConfig ([#5796](https://github.com/googleapis/google-cloud-node/issues/5796)) ([35f689a](https://github.com/googleapis/google-cloud-node/commit/35f689a7c3e74135e3f5c1bae77e3e4fa07c17fc))

## [5.18.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.17.0...container-v5.18.0) (2024-10-10)


### Features

* [container] add an effective_cgroup_mode field in node config ([#5741](https://github.com/googleapis/google-cloud-node/issues/5741)) ([88083e4](https://github.com/googleapis/google-cloud-node/commit/88083e4a879ef6963eca9183c037ef84b861efed))

## [5.17.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.16.0...container-v5.17.0) (2024-08-29)


### Features

* [container] add `EXTENDED` enum value for `ReleaseChannel.Channel` ([#5641](https://github.com/googleapis/google-cloud-node/issues/5641)) ([b03f419](https://github.com/googleapis/google-cloud-node/commit/b03f419cab2ebf8385d2df7bf018863e63295624))

## [5.16.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.15.1...container-v5.16.0) (2024-07-22)


### Features

* [container] A new field `ray_operator_config` is added to message `.google.container.v1beta1.AddonsConfig` ([#5553](https://github.com/googleapis/google-cloud-node/issues/5553)) ([a884c76](https://github.com/googleapis/google-cloud-node/commit/a884c766ff86127abe6a8159f23158de4badf09f))


### Bug Fixes

* [container] Deprecate "EXPERIMENTAL" option for Gateway API (this value has never been supported) ([#5535](https://github.com/googleapis/google-cloud-node/issues/5535)) ([c06cdc7](https://github.com/googleapis/google-cloud-node/commit/c06cdc758d01ae296455757fba12eed47a8d5c06))

## [5.15.1](https://github.com/googleapis/google-cloud-node/compare/container-v5.15.0...container-v5.15.1) (2024-07-10)


### Bug Fixes

* [container] Deprecate "EXPERIMENTAL" option for Gateway API (this value has never been supported) ([#5519](https://github.com/googleapis/google-cloud-node/issues/5519)) ([8838289](https://github.com/googleapis/google-cloud-node/commit/88382897c1c0ba6f5f80ba72ab775808de301962))

## [5.15.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.14.0...container-v5.15.0) (2024-06-12)


### Features

* [container] A new message `HugepagesConfig` is added ([#5447](https://github.com/googleapis/google-cloud-node/issues/5447)) ([e62ec4d](https://github.com/googleapis/google-cloud-node/commit/e62ec4df1773c683cc60cbb1adafeffc98970a61))

## [5.14.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.13.0...container-v5.14.0) (2024-06-03)


### Features

* [container] A new message `HugepagesConfig` is added ([#5391](https://github.com/googleapis/google-cloud-node/issues/5391)) ([2c879f6](https://github.com/googleapis/google-cloud-node/commit/2c879f6acf259e280043a9e845b5e9af1435f188))

## [5.13.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.12.0...container-v5.13.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [5.12.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.11.0...container-v5.12.0) (2024-04-05)


### Features

* [container] add several fields to manage state of database encryption update ([#5184](https://github.com/googleapis/google-cloud-node/issues/5184)) ([632f7f4](https://github.com/googleapis/google-cloud-node/commit/632f7f4789bc8b05587b42ee986f5101ef003614))

## [5.11.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.10.0...container-v5.11.0) (2024-03-26)


### Features

* [container] add optional secondary_boot_disk_update_strategy field to NodePool API ([#5162](https://github.com/googleapis/google-cloud-node/issues/5162)) ([5e76444](https://github.com/googleapis/google-cloud-node/commit/5e7644431ce558ea6ce3be42a4038bd25cd224c3))

## [5.10.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.9.0...container-v5.10.0) (2024-03-07)


### Features

* [container] add API to enable/disable secret manager csi component on GKE clusters ([#5111](https://github.com/googleapis/google-cloud-node/issues/5111)) ([d7a3bb1](https://github.com/googleapis/google-cloud-node/commit/d7a3bb1217b5c22651c6f3af4e990a8c0cbca6e9))
* [container] add API to enable/disable secret manager csi component on GKE clusters ([#5113](https://github.com/googleapis/google-cloud-node/issues/5113)) ([f52aa85](https://github.com/googleapis/google-cloud-node/commit/f52aa85e5aaf2303e7fda468eeb280fd441884a7))

## [5.9.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.8.1...container-v5.9.0) (2024-02-28)


### Features

* [container] add secondary boot disks field to NodePool API ([#5094](https://github.com/googleapis/google-cloud-node/issues/5094)) ([208250e](https://github.com/googleapis/google-cloud-node/commit/208250ebe1508e4f2190e7233d8fb5ea5bfc7911))

## [5.8.1](https://github.com/googleapis/google-cloud-node/compare/container-v5.8.0...container-v5.8.1) (2024-02-27)


### Bug Fixes

* [container] Add client library version to headers ([#5076](https://github.com/googleapis/google-cloud-node/issues/5076)) ([a1b39d3](https://github.com/googleapis/google-cloud-node/commit/a1b39d399119d815282239638cde4903de4b2a76))

## [5.8.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.7.0...container-v5.8.0) (2024-02-22)


### Features

* [container] add API to enable Provisioning Request API on existing nodepools ([#5065](https://github.com/googleapis/google-cloud-node/issues/5065)) ([af0e580](https://github.com/googleapis/google-cloud-node/commit/af0e580dbdca83f5e9cebe0df1d9e752c88f4357))

## [5.7.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.6.0...container-v5.7.0) (2024-02-09)


### Features

* [container] Trusted Private Cloud support, use the universeDomain parameter  ([#5020](https://github.com/googleapis/google-cloud-node/issues/5020)) ([423e385](https://github.com/googleapis/google-cloud-node/commit/423e385e3b62077bc381c698e320769ccf6045b1))

## [5.6.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.5.0...container-v5.6.0) (2024-02-07)


### Features

* [container] new AddonsConfig field stateful_ha_config ([#5002](https://github.com/googleapis/google-cloud-node/issues/5002)) ([1bff942](https://github.com/googleapis/google-cloud-node/commit/1bff942214baba585f7adce35f948b71ece1673a))

## [5.5.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.4.1...container-v5.5.0) (2024-01-23)


### Features

* [container] add fields desired_in_transit_encryption_config and in_transit_encryption_config ([#4974](https://github.com/googleapis/google-cloud-node/issues/4974)) ([3ea1e29](https://github.com/googleapis/google-cloud-node/commit/3ea1e29659486d15bfc03811d6800b081f21f5e0))

## [5.4.1](https://github.com/googleapis/google-cloud-node/compare/container-v5.4.0...container-v5.4.1) (2024-01-05)


### Bug Fixes

* [container] correct long audio synthesis HTTP binding ([#4899](https://github.com/googleapis/google-cloud-node/issues/4899)) ([effadd9](https://github.com/googleapis/google-cloud-node/commit/effadd9e74c5d807c8c76a2d67f46e19df517a2d))

## [5.4.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.3.0...container-v5.4.0) (2023-11-03)


### Features

* [container] add ResourceManagerTags API to attach tags on the underlying Compute Engine VMs of GKE Nodes which can be used to selectively enforce Cloud Firewall network firewall policies ([0bccdc4](https://github.com/googleapis/google-cloud-node/commit/0bccdc4c9704a108cde379e8066965b016b91d2f))
* [container] add ResourceManagerTags API to attach tags on the underlying Compute Engine VMs of GKE Nodes which can be used to selectively enforce Cloud Firewall network firewall policies ([0bccdc4](https://github.com/googleapis/google-cloud-node/commit/0bccdc4c9704a108cde379e8066965b016b91d2f))
* [container] added EnterpriseConfig ([0bccdc4](https://github.com/googleapis/google-cloud-node/commit/0bccdc4c9704a108cde379e8066965b016b91d2f))
* [container] added EnterpriseConfig ([#4774](https://github.com/googleapis/google-cloud-node/issues/4774)) ([0bccdc4](https://github.com/googleapis/google-cloud-node/commit/0bccdc4c9704a108cde379e8066965b016b91d2f))
* Add a new cluster field for the cluster tier of GKE clusters ([0bccdc4](https://github.com/googleapis/google-cloud-node/commit/0bccdc4c9704a108cde379e8066965b016b91d2f))
* Add a new cluster field for the cluster tier of GKE clusters ([0bccdc4](https://github.com/googleapis/google-cloud-node/commit/0bccdc4c9704a108cde379e8066965b016b91d2f))

## [5.3.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.2.0...container-v5.3.0) (2023-09-19)


### Features

* [container] add SecurityPostureConfig Enterprise vuln mode to allow customers to enable Advanced Vulnerability Scanning for their clusters ([#4666](https://github.com/googleapis/google-cloud-node/issues/4666)) ([9876892](https://github.com/googleapis/google-cloud-node/commit/9876892176c305a67b64af4c8481563ee1633576))

## [5.2.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.1.0...container-v5.2.0) (2023-09-06)


### Features

* [container] Add preview support for monitoring a cluster's pods for compliance with a provided Binary Authorization platform policy via Binary Authorization Continuous Validation ([#4541](https://github.com/googleapis/google-cloud-node/issues/4541)) ([9a4f139](https://github.com/googleapis/google-cloud-node/commit/9a4f139fc9f6f1988774df8325432d24296e8764))
* [container] add UpdateNodePoolRequest.machine_type, disk_type, disk_size_gb ([#4591](https://github.com/googleapis/google-cloud-node/issues/4591)) ([b07e25f](https://github.com/googleapis/google-cloud-node/commit/b07e25fad34f0071d33baabeee9a9b971760971e))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/container-v5.0.0...container-v5.1.0) (2023-08-09)


### Features

* [container] add APIs for GKE OOTB metrics packages ([#4519](https://github.com/googleapis/google-cloud-node/issues/4519)) ([0f6b33d](https://github.com/googleapis/google-cloud-node/commit/0f6b33d95e501840c161a9447f7d3a8322b32303))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.16.0...container-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.16.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.15.0...container-v4.16.0) (2023-07-24)


### Features

* [container] add advanced_datapath_observability_config to monitoring_config ([#4414](https://github.com/googleapis/google-cloud-node/issues/4414)) ([cb92854](https://github.com/googleapis/google-cloud-node/commit/cb9285425846480beb111a5a13fd0dbfe215b6f5))
* [container] Add Multi-networking API ([#4426](https://github.com/googleapis/google-cloud-node/issues/4426)) ([bf2e891](https://github.com/googleapis/google-cloud-node/commit/bf2e891dfecafc8c1c145b2a2fd86997a314b535))
* [container] add policy_name to PlacementPolicy message within a node pool ([#4440](https://github.com/googleapis/google-cloud-node/issues/4440)) ([b3eabc8](https://github.com/googleapis/google-cloud-node/commit/b3eabc8b6cf0bd7086f814d5fd3c5f200b5bec04))

## [4.15.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.14.0...container-v4.15.0) (2023-07-11)


### Features

* [container] add a flag to toggle the Kubelet read only port ([#4387](https://github.com/googleapis/google-cloud-node/issues/4387)) ([1c86e27](https://github.com/googleapis/google-cloud-node/commit/1c86e278233c71b93d2478003f45c6d09e7f3344))

## [4.14.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.13.0...container-v4.14.0) (2023-07-04)


### Features

* [container] Add `KUBE_DNS` option to `DNSConfig.cluster_dns` ([#4383](https://github.com/googleapis/google-cloud-node/issues/4383)) ([833a1ae](https://github.com/googleapis/google-cloud-node/commit/833a1ae44bab92fbfef8a225947b6d1f482cf099))

## [4.13.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.12.0...container-v4.13.0) (2023-06-14)


### Features

* [container] add API for GPU driver installation config ([f5b1533](https://github.com/googleapis/google-cloud-node/commit/f5b153353788f4df4fee6d19a6cd013fe6bb29f5))
* [container] add API for GPU driver installation config ([#4330](https://github.com/googleapis/google-cloud-node/issues/4330)) ([f5b1533](https://github.com/googleapis/google-cloud-node/commit/f5b153353788f4df4fee6d19a6cd013fe6bb29f5))
* Add workloadPolicyConfig API field to allow customer enable NET_ADMIN capability for their autopilot clusters ([f5b1533](https://github.com/googleapis/google-cloud-node/commit/f5b153353788f4df4fee6d19a6cd013fe6bb29f5))
* Add workloadPolicyConfig API field to allow customer enable NET_ADMIN capability for their autopilot clusters ([f5b1533](https://github.com/googleapis/google-cloud-node/commit/f5b153353788f4df4fee6d19a6cd013fe6bb29f5))

## [4.12.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.11.0...container-v4.12.0) (2023-06-06)


### Features

* [container] add a API field to enable FQDN Network Policy on clusters ([d266f18](https://github.com/googleapis/google-cloud-node/commit/d266f1863a1fe9c58032e44cbc03aa51441442c5))
* [container] add a API field to enable FQDN Network Policy on clusters ([#4319](https://github.com/googleapis/google-cloud-node/issues/4319)) ([d266f18](https://github.com/googleapis/google-cloud-node/commit/d266f1863a1fe9c58032e44cbc03aa51441442c5))
* [container] add SoleTenantConfig API ([12cc0d9](https://github.com/googleapis/google-cloud-node/commit/12cc0d9c6d17614b5e1a9b5eb189258279f4cee2))
* [container] add SoleTenantConfig API ([#4306](https://github.com/googleapis/google-cloud-node/issues/4306)) ([12cc0d9](https://github.com/googleapis/google-cloud-node/commit/12cc0d9c6d17614b5e1a9b5eb189258279f4cee2))
* Add CheckAutopilotCompatibility API to get autopilot compatibility issues for a given standard cluster ([d266f18](https://github.com/googleapis/google-cloud-node/commit/d266f1863a1fe9c58032e44cbc03aa51441442c5))
* Add CheckAutopilotCompatibility API to get autopilot compatibility issues for a given standard cluster ([d266f18](https://github.com/googleapis/google-cloud-node/commit/d266f1863a1fe9c58032e44cbc03aa51441442c5))

## [4.11.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.10.0...container-v4.11.0) (2023-05-06)


### Features

* [container] add a new feature for fleet registration via cluster update in v1alpha1, v1beta1, v1 ([#4244](https://github.com/googleapis/google-cloud-node/issues/4244)) ([b0fee2b](https://github.com/googleapis/google-cloud-node/commit/b0fee2bb364c671cb70b62a81567cf3544587eed))

## [4.10.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.9.0...container-v4.10.0) (2023-05-04)


### Features

* [container] support fleet registration via cluster update ([#4235](https://github.com/googleapis/google-cloud-node/issues/4235)) ([869218f](https://github.com/googleapis/google-cloud-node/commit/869218ffb438d90c3d6cb5e4566d7ad2d201020e))

## [4.9.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.8.0...container-v4.9.0) (2023-04-24)


### Features

* [container] Add support for updating additional pod IPv4 ranges for Standard and Autopilot clusters ([#4177](https://github.com/googleapis/google-cloud-node/issues/4177)) ([2beee25](https://github.com/googleapis/google-cloud-node/commit/2beee255de109032828ffd5f9f8fb9d62574787b))

## [4.8.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.7.1...container-v4.8.0) (2023-04-13)


### Features

* [container] Add support for updating additional pod IPv4 ranges for Standard and Autopilot clusters ([#4154](https://github.com/googleapis/google-cloud-node/issues/4154)) ([65e1270](https://github.com/googleapis/google-cloud-node/commit/65e1270d823aa166a41889dc491cd97a43095825))


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.7.1](https://github.com/googleapis/google-cloud-node/compare/container-v4.7.0...container-v4.7.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [4.7.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.6.0...container-v4.7.0) (2023-01-28)


### Features

* Add field for enabled Beta K8s APIs in proto ([#3823](https://github.com/googleapis/google-cloud-node/issues/3823)) ([1a3497a](https://github.com/googleapis/google-cloud-node/commit/1a3497a49a09794a1636b3163335b307c1c18d87))
* Release GKE CloudDNS Cluster Scope ([#3820](https://github.com/googleapis/google-cloud-node/issues/3820)) ([076de4c](https://github.com/googleapis/google-cloud-node/commit/076de4c5fce49989efe5ca4465a411df030715f8))

## [4.6.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.5.0...container-v4.6.0) (2022-12-21)


### Features

* Add support for specifying stack type for clusters. This will allow clusters to be created as dual stack or toggled between IPV4 and dual stack ([#3781](https://github.com/googleapis/google-cloud-node/issues/3781)) ([175d9d1](https://github.com/googleapis/google-cloud-node/commit/175d9d1391f01902e4c6ec61817706d17a7b72a1))

## [4.5.0](https://github.com/googleapis/google-cloud-node/compare/container-v4.4.0...container-v4.5.0) (2022-12-16)


### Features

* Add a FastSocket API ([b907f45](https://github.com/googleapis/google-cloud-node/commit/b907f4559965bdfc7b38388671ab2cb32b48a35d))
* Add a FastSocket API ([b907f45](https://github.com/googleapis/google-cloud-node/commit/b907f4559965bdfc7b38388671ab2cb32b48a35d))
* Add compact placement feature for node pools ([b907f45](https://github.com/googleapis/google-cloud-node/commit/b907f4559965bdfc7b38388671ab2cb32b48a35d))
* Add compact placement feature for node pools  ([#3636](https://github.com/googleapis/google-cloud-node/issues/3636)) ([b907f45](https://github.com/googleapis/google-cloud-node/commit/b907f4559965bdfc7b38388671ab2cb32b48a35d))
* Add support for specifying stack type for clusters. This will allow clusters to be created as dual stack or toggled between IPV4 and dual stack ([#3754](https://github.com/googleapis/google-cloud-node/issues/3754)) ([283d098](https://github.com/googleapis/google-cloud-node/commit/283d098d0cc66663d19568f95ea8f35d8385cd3e))

## [4.4.0](https://github.com/googleapis/nodejs-cloud-container/compare/v4.3.0...v4.4.0) (2022-11-10)


### Features

* Add APIs for GKE Control Plane Logs ([#588](https://github.com/googleapis/nodejs-cloud-container/issues/588)) ([de62f0b](https://github.com/googleapis/nodejs-cloud-container/commit/de62f0bfc4d6972d1bbd48428ec2005ef2ccf890))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#582](https://github.com/googleapis/nodejs-cloud-container/issues/582)) ([3c62c1a](https://github.com/googleapis/nodejs-cloud-container/commit/3c62c1adbc913212097f50496e10c4ccfb6f2d86))
* Update proto definitions ([#586](https://github.com/googleapis/nodejs-cloud-container/issues/586)) ([dbee22e](https://github.com/googleapis/nodejs-cloud-container/commit/dbee22e4f5e793d1e1ebe5cec33edf2128963a60))

## [4.3.0](https://github.com/googleapis/nodejs-cloud-container/compare/v4.2.0...v4.3.0) (2022-10-14)


### Features

* Launch GKE Cost Allocations configuration to the v1 GKE API ([#577](https://github.com/googleapis/nodejs-cloud-container/issues/577)) ([b45ac9f](https://github.com/googleapis/nodejs-cloud-container/commit/b45ac9fb6cff9a634ea62b2c9e6998c57bf837ef))

## [4.2.0](https://github.com/googleapis/nodejs-cloud-container/compare/v4.1.3...v4.2.0) (2022-09-22)


### Features

* Added High Throughput Logging API for Google Kubernetes Engine ([#571](https://github.com/googleapis/nodejs-cloud-container/issues/571)) ([588b19a](https://github.com/googleapis/nodejs-cloud-container/commit/588b19a19daca6d994a28d04e8b9a8a2f081324b))


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#568](https://github.com/googleapis/nodejs-cloud-container/issues/568)) ([575531f](https://github.com/googleapis/nodejs-cloud-container/commit/575531f012d3448eb796f73fda6d62ef9ba425fd))

## [4.1.3](https://github.com/googleapis/nodejs-cloud-container/compare/v4.1.2...v4.1.3) (2022-09-13)


### Bug Fixes

* **deps:** Update dependency uuid to v9 ([#564](https://github.com/googleapis/nodejs-cloud-container/issues/564)) ([513d05b](https://github.com/googleapis/nodejs-cloud-container/commit/513d05b38918d0dfd239d4684ee2235a799e6ca5))

## [4.1.2](https://github.com/googleapis/nodejs-cloud-container/compare/v4.1.1...v4.1.2) (2022-09-08)


### Bug Fixes

* Allow passing gax instance to client constructor ([#557](https://github.com/googleapis/nodejs-cloud-container/issues/557)) ([e7a1a02](https://github.com/googleapis/nodejs-cloud-container/commit/e7a1a02e990e1eac2954538f444113c5211912ec))
* better support for fallback mode ([e7a1a02](https://github.com/googleapis/nodejs-cloud-container/commit/e7a1a02e990e1eac2954538f444113c5211912ec))

## [4.1.1](https://github.com/googleapis/nodejs-cloud-container/compare/v4.1.0...v4.1.1) (2022-08-27)


### Bug Fixes

* change import long to require ([#558](https://github.com/googleapis/nodejs-cloud-container/issues/558)) ([83df9aa](https://github.com/googleapis/nodejs-cloud-container/commit/83df9aa300b311b4a4928671a518d25a4b38300f))
* do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-cloud-container/issues/1553)) ([#562](https://github.com/googleapis/nodejs-cloud-container/issues/562)) ([50f317f](https://github.com/googleapis/nodejs-cloud-container/commit/50f317fff66003b40086b219a0e21a5fa1e7608a))
* use google-gax v3.3.0 ([50f317f](https://github.com/googleapis/nodejs-cloud-container/commit/50f317fff66003b40086b219a0e21a5fa1e7608a))

## [4.1.0](https://github.com/googleapis/nodejs-cloud-container/compare/v4.0.1...v4.1.0) (2022-07-04)


### Features

* add Binauthz Evaluation mode support to GKE Classic ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add Binauthz Evaluation mode support to GKE Classic ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add cgroup mode to node system config ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add GKE Identity Service ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add Location Policy API ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add Location Policy API ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add managed prometheus feature ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add network tags to autopilot cluster ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add network tags to autopilot cluster ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add protect config audit api ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add support to modify kubelet pod pid limit in node system configuration ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* add support to modify kubelet pod pid limit in node system configuration ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support enabling Confidential Nodes in the node pool ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support enabling Confidential Nodes in the node pool ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support GKE Cost Allocations ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support GPU timesharing ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support GPU timesharing ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support IPV6 Dual Stack (stack_type) ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support node pool blue-green upgrade ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support node pool blue-green upgrade ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support regapic LRO ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support spot VM ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support Tier 1 bandwidth ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* support Tier 1 bandwidth ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))
* update support for node pool labels, taints and network tags ([ebe6500](https://github.com/googleapis/nodejs-cloud-container/commit/ebe650079d2c0dd32780379616f20fe1eaf36ca7))

## [4.0.1](https://github.com/googleapis/nodejs-cloud-container/compare/v4.0.0...v4.0.1) (2022-06-10)


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#541](https://github.com/googleapis/nodejs-cloud-container/issues/541)) ([87d8c3f](https://github.com/googleapis/nodejs-cloud-container/commit/87d8c3f7488fa122ebefcdabaa597625e1d60d9c))

## [4.0.0](https://github.com/googleapis/nodejs-cloud-container/compare/v3.0.1...v4.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#539)

### Build System

* update library to use Node 12 ([#539](https://github.com/googleapis/nodejs-cloud-container/issues/539)) ([89ca157](https://github.com/googleapis/nodejs-cloud-container/commit/89ca157084eae2575cd2725149f6376fc810164e))

### [3.0.1](https://github.com/googleapis/nodejs-cloud-container/compare/v3.0.0...v3.0.1) (2022-05-06)


### Bug Fixes

* clarify the gax-nodejs usage in README ([#1352](https://github.com/googleapis/nodejs-cloud-container/issues/1352)) ([#528](https://github.com/googleapis/nodejs-cloud-container/issues/528)) ([aa9a2a9](https://github.com/googleapis/nodejs-cloud-container/commit/aa9a2a9d7ef253bb11b5d1813a9cb5127a5c5d3b))

## [3.0.0](https://github.com/googleapis/nodejs-cloud-container/compare/v2.6.0...v3.0.0) (2022-02-26)


### ⚠ BREAKING CHANGES

* revert bad publishing (#510)

### Bug Fixes

* revert bad publishing ([#510](https://github.com/googleapis/nodejs-cloud-container/issues/510)) ([541fc5b](https://github.com/googleapis/nodejs-cloud-container/commit/541fc5b3637b9dc3c1af722f1c931e6d63129f9f))
* reverting unintentional breaking change: GetOpenIdConfigRequest, GetOpenIdConfigResponse ([#512](https://github.com/googleapis/nodejs-cloud-container/issues/512)) ([8ed44d7](https://github.com/googleapis/nodejs-cloud-container/commit/8ed44d74d8ec61d49c8f46b78169f1585c02a862))

## [2.6.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.5.0...v2.6.0) (2021-12-09)


### Features

* add eslintignore for sameple generated code ([#1302](https://www.github.com/googleapis/nodejs-cloud-container/issues/1302)) ([#497](https://www.github.com/googleapis/nodejs-cloud-container/issues/497)) ([cea38ea](https://www.github.com/googleapis/nodejs-cloud-container/commit/cea38ea9c7b515d133853492ce48de22c843c985))

## [2.5.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.4.4...v2.5.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#480](https://www.github.com/googleapis/nodejs-cloud-container/issues/480)) ([f7a7887](https://www.github.com/googleapis/nodejs-cloud-container/commit/f7a7887be1168b8f15e6de556df5774d1da42b32))

### [2.4.4](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.4.3...v2.4.4) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#477](https://www.github.com/googleapis/nodejs-cloud-container/issues/477)) ([11bdd83](https://www.github.com/googleapis/nodejs-cloud-container/commit/11bdd83b4c676b9c10608c9f505a10261f2bb939))

### [2.4.3](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.4.2...v2.4.3) (2021-08-16)


### Bug Fixes

* **build:** migrate to using main branch ([#476](https://www.github.com/googleapis/nodejs-cloud-container/issues/476)) ([7440626](https://www.github.com/googleapis/nodejs-cloud-container/commit/7440626c34f9e7dcc16a6e19a71e5db6eee5b6bf))

### [2.4.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.4.1...v2.4.2) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#468](https://www.github.com/googleapis/nodejs-cloud-container/issues/468)) ([2257eff](https://www.github.com/googleapis/nodejs-cloud-container/commit/2257eff6c1d5a50728fecc2fa27881b2addaba68))

### [2.4.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.4.0...v2.4.1) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#466](https://www.github.com/googleapis/nodejs-cloud-container/issues/466)) ([a1b1e2a](https://www.github.com/googleapis/nodejs-cloud-container/commit/a1b1e2a9c38b103fe3caa804230d53a19b854cd4))

## [2.4.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.3.2...v2.4.0) (2021-07-09)


### Features

* allow updating security group on existing clusters ([#464](https://www.github.com/googleapis/nodejs-cloud-container/issues/464)) ([ed09e02](https://www.github.com/googleapis/nodejs-cloud-container/commit/ed09e028126d308cf131f26453fe6c73a73cec6d))

### [2.3.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.3.1...v2.3.2) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#459](https://www.github.com/googleapis/nodejs-cloud-container/issues/459)) ([d8ba534](https://www.github.com/googleapis/nodejs-cloud-container/commit/d8ba534408f9573f1da21d337081975fe80f68fa))

### [2.3.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.3.0...v2.3.1) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#454](https://www.github.com/googleapis/nodejs-cloud-container/issues/454)) ([65ac281](https://www.github.com/googleapis/nodejs-cloud-container/commit/65ac2813d05cf21d234e42a52b73dae2f723de0f))

## [2.3.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.2.2...v2.3.0) (2021-06-09)


### Features

* support for NodeAutoprovisioning ImageType ([#446](https://www.github.com/googleapis/nodejs-cloud-container/issues/446)) ([e826d24](https://www.github.com/googleapis/nodejs-cloud-container/commit/e826d242fdfbc6831c67eb6abf6c0fb0b12b707a))

### [2.2.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.2.1...v2.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#441](https://www.github.com/googleapis/nodejs-cloud-container/issues/441)) ([03134c0](https://www.github.com/googleapis/nodejs-cloud-container/commit/03134c09b67eaa9cf78b06b413169d5ef3f82f3c))

### [2.2.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.2.0...v2.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#431](https://www.github.com/googleapis/nodejs-cloud-container/issues/431)) ([cdcce07](https://www.github.com/googleapis/nodejs-cloud-container/commit/cdcce07da06d7ee53b2207b8d9dd2f8e0c59a6d7))
* use require() to load JSON protos ([#434](https://www.github.com/googleapis/nodejs-cloud-container/issues/434)) ([ce2dd09](https://www.github.com/googleapis/nodejs-cloud-container/commit/ce2dd092d84d165f905f2f912f1fdb382c8b69e5))

## [2.2.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.1.2...v2.2.0) (2020-11-25)


### Features

* update GKE v1 API ([#401](https://www.github.com/googleapis/nodejs-cloud-container/issues/401)) ([f72f121](https://www.github.com/googleapis/nodejs-cloud-container/commit/f72f1210f63e1fd9b3dd02e0791b1d024d1cbe07))


### Bug Fixes

* **browser:** check for fetch on window ([#403](https://www.github.com/googleapis/nodejs-cloud-container/issues/403)) ([40f207e](https://www.github.com/googleapis/nodejs-cloud-container/commit/40f207e3e1ae02f63b9b34c9e957c0caae89c7fb))

### [2.1.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.1.1...v2.1.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#398](https://www.github.com/googleapis/nodejs-cloud-container/issues/398)) ([e696b91](https://www.github.com/googleapis/nodejs-cloud-container/commit/e696b91a5cd57f213a0f2412f6f513ff44183d41))

### [2.1.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.1.0...v2.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#358](https://www.github.com/googleapis/nodejs-cloud-container/issues/358)) ([8d4b79a](https://www.github.com/googleapis/nodejs-cloud-container/commit/8d4b79aa731f06e7c31e86ec3f8d0190554f40be))

## [2.1.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.0.0...v2.1.0) (2020-06-15)


### Features

* move ts target to es2018 from es2016 ([#347](https://www.github.com/googleapis/nodejs-cloud-container/issues/347)) ([67b6724](https://www.github.com/googleapis/nodejs-cloud-container/commit/67b6724ebbb1e9587ccbb1e845e5ffce3144eab6))


### Bug Fixes

* proper fallback option handling ([c087af4](https://www.github.com/googleapis/nodejs-cloud-container/commit/c087af449cc24492b58f686f05bcef90a00deeca))

## [2.0.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.7.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#318](https://www.github.com/googleapis/nodejs-cloud-container/issues/318)) ([e6338eb](https://www.github.com/googleapis/nodejs-cloud-container/commit/e6338eb9e080a80e3b8361ae13b1c74039974f32))


### Bug Fixes

* **test:** don't assign unused variable ([#323](https://www.github.com/googleapis/nodejs-cloud-container/issues/323)) ([671a4b8](https://www.github.com/googleapis/nodejs-cloud-container/commit/671a4b8bc4e49ba6705af418f3bc427485f912ed))
* export explicit version from protos.js ([#324](https://www.github.com/googleapis/nodejs-cloud-container/issues/324)) ([896c658](https://www.github.com/googleapis/nodejs-cloud-container/commit/896c658e0c7c811c2e71909d138e2e38b431b9e8))
* regen protos and tests ([#340](https://www.github.com/googleapis/nodejs-cloud-container/issues/340)) ([edbc1c9](https://www.github.com/googleapis/nodejs-cloud-container/commit/edbc1c99e4f50665066ed61593d632201f60e2f5))
* remove eslint, update gax, fix generated protos, run the generator ([#329](https://www.github.com/googleapis/nodejs-cloud-container/issues/329)) ([c66f3ed](https://www.github.com/googleapis/nodejs-cloud-container/commit/c66f3ed896cd99108f980133205505aa0b49131e))
* remove unused files from package ([#333](https://www.github.com/googleapis/nodejs-cloud-container/issues/333)) ([ac4c07a](https://www.github.com/googleapis/nodejs-cloud-container/commit/ac4c07a6cb48423f2f3b35b485841e88aa189a22))
* support request params {key} with no =value ([#338](https://www.github.com/googleapis/nodejs-cloud-container/issues/338)) ([adf4a60](https://www.github.com/googleapis/nodejs-cloud-container/commit/adf4a601a870c0ce961f4011318606e4b29c266f))
* synth.py clean up for multiple version ([#341](https://www.github.com/googleapis/nodejs-cloud-container/issues/341)) ([29b309d](https://www.github.com/googleapis/nodejs-cloud-container/commit/29b309db935655a6ab5add27e111f72f7d053c07))

## [1.7.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.6.2...v1.7.0) (2020-03-06)


### Features

* deferred client initialization ([#304](https://www.github.com/googleapis/nodejs-cloud-container/issues/304)) ([b1b7080](https://www.github.com/googleapis/nodejs-cloud-container/commit/b1b70806289aea73a6e83d3d33983d05856f21f3))
* export protos in src/index.ts ([acaaeff](https://www.github.com/googleapis/nodejs-cloud-container/commit/acaaeff08ad5505accc15bb496bcd3a29086a5ac))

### [1.6.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.6.1...v1.6.2) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([ab62cfd](https://www.github.com/googleapis/nodejs-cloud-container/commit/ab62cfddac9ab594318d906b7ee6272131ddaae2))

### [1.6.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.6.0...v1.6.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([595810b](https://www.github.com/googleapis/nodejs-cloud-container/commit/595810b240be49dddf14a05d616b99b398a09efe))

## [1.6.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.5.0...v1.6.0) (2020-01-24)


### Features

* bump release level to GA ([#272](https://www.github.com/googleapis/nodejs-cloud-container/issues/272)) ([0d2d210](https://www.github.com/googleapis/nodejs-cloud-container/commit/0d2d21028e6323fd836e6a7ac166c65d39b7534a))

## [1.5.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.4.0...v1.5.0) (2020-01-06)


### Features

* move to typescript code micro-generator ([#260](https://www.github.com/googleapis/nodejs-cloud-container/issues/260)) ([e2b189a](https://www.github.com/googleapis/nodejs-cloud-container/commit/e2b189a57ce1df87f9ad2123f48f665469812ad9))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([bcc3eaa](https://www.github.com/googleapis/nodejs-cloud-container/commit/bcc3eaa20adc266db2a641834cc5f8561e03b825))
* better client close(), update .nycrc ([41c6125](https://www.github.com/googleapis/nodejs-cloud-container/commit/41c6125b56c61ebed870fdb0daa01c29dd71c832))

## [1.4.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.3.1...v1.4.0) (2019-11-14)


### Features

* support listUsableSubnetworks rpc and new node config ([#246](https://www.github.com/googleapis/nodejs-cloud-container/issues/246)) ([08f2e19](https://www.github.com/googleapis/nodejs-cloud-container/commit/08f2e19c9bc3eff01adf90b59405c73d0a4f190a))
* **docs:** bump release level to beta ([#249](https://www.github.com/googleapis/nodejs-cloud-container/issues/249)) ([3651e6a](https://www.github.com/googleapis/nodejs-cloud-container/commit/3651e6a2cd7bf28da94a6d3d5d57861a15d8e332))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#245](https://www.github.com/googleapis/nodejs-cloud-container/issues/245)) ([31fcb61](https://www.github.com/googleapis/nodejs-cloud-container/commit/31fcb616761b9f23f380be6fbe20f7a0d290a5a1))

### [1.3.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#240](https://www.github.com/googleapis/nodejs-cloud-container/issues/240)) ([fefaf21](https://www.github.com/googleapis/nodejs-cloud-container/commit/fefaf21f74c817f6b8b6b0ed7a19346c44878d96))

## [1.3.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([c39495e](https://www.github.com/googleapis/nodejs-cloud-container/commit/c39495e))


### Features

* .d.ts for protos ([#231](https://www.github.com/googleapis/nodejs-cloud-container/issues/231)) ([290fc8a](https://www.github.com/googleapis/nodejs-cloud-container/commit/290fc8a))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.4...v1.2.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([9d931ff](https://www.github.com/googleapis/nodejs-cloud-container/commit/9d931ff))

### [1.1.4](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.3...v1.1.4) (2019-08-28)


### Bug Fixes

* include node version with headers ([#221](https://www.github.com/googleapis/nodejs-cloud-container/issues/221)) ([28892af](https://www.github.com/googleapis/nodejs-cloud-container/commit/28892af))
* **docs:** stop linking reference documents to anchor ([2934b37](https://www.github.com/googleapis/nodejs-cloud-container/commit/2934b37))

### [1.1.3](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.2...v1.1.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#210](https://www.github.com/googleapis/nodejs-cloud-container/issues/210)) ([cd81c9c](https://www.github.com/googleapis/nodejs-cloud-container/commit/cd81c9c))

### [1.1.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.1...v1.1.2) (2019-06-21)


### Bug Fixes

* **docs:** provide clarification re: gke vs. Kubernetes ([#207](https://www.github.com/googleapis/nodejs-cloud-container/issues/207)) ([bc8e2cc](https://www.github.com/googleapis/nodejs-cloud-container/commit/bc8e2cc))

### [1.1.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#205](https://www.github.com/googleapis/nodejs-cloud-container/issues/205)) ([f35ee9a](https://www.github.com/googleapis/nodejs-cloud-container/commit/f35ee9a))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#203](https://www.github.com/googleapis/nodejs-cloud-container/issues/203)) ([92be0f8](https://www.github.com/googleapis/nodejs-cloud-container/commit/92be0f8))

## [1.0.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v0.3.1...v1.0.0) (2019-05-13)


### Bug Fixes

* DEADLINE_EXCEEDED retry code is idempotent ([#192](https://www.github.com/googleapis/nodejs-cloud-container/issues/192)) ([66082aa](https://www.github.com/googleapis/nodejs-cloud-container/commit/66082aa))
* **deps:** update dependency google-gax to v1 ([#191](https://www.github.com/googleapis/nodejs-cloud-container/issues/191)) ([e4470fa](https://www.github.com/googleapis/nodejs-cloud-container/commit/e4470fa))
* DEADLINE_EXCEEDED is no longer retried ([16453ff](https://www.github.com/googleapis/nodejs-cloud-container/commit/16453ff))
* **deps:** update dependency google-gax to ^0.26.0 ([#181](https://www.github.com/googleapis/nodejs-cloud-container/issues/181)) ([0ee0e98](https://www.github.com/googleapis/nodejs-cloud-container/commit/0ee0e98))
* include 'x-goog-request-params' header in requests ([#175](https://www.github.com/googleapis/nodejs-cloud-container/issues/175)) ([0d3ba60](https://www.github.com/googleapis/nodejs-cloud-container/commit/0d3ba60))


### Build System

* upgrade engines field to >=8.10.0 ([#183](https://www.github.com/googleapis/nodejs-cloud-container/issues/183)) ([7a6a24b](https://www.github.com/googleapis/nodejs-cloud-container/commit/7a6a24b))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#183)

## v0.3.1

03-12-2019 13:44 PDT

This patch release has a few bug fixes, dependency updates, and doc fixes.  Enjoy!

### Bug fixes
- fix: throw on invalid credentials ([#159](https://github.com/googleapis/nodejs-cloud-container/pull/159))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#152](https://github.com/googleapis/nodejs-cloud-container/pull/152))

### Documentation
- docs: update links in contrib guide ([#161](https://github.com/googleapis/nodejs-cloud-container/pull/161))
- docs: update contributing path in README ([#156](https://github.com/googleapis/nodejs-cloud-container/pull/156))
- docs: move CONTRIBUTING.md to root ([#155](https://github.com/googleapis/nodejs-cloud-container/pull/155))
- docs: add lint/fix example to contributing guide ([#153](https://github.com/googleapis/nodejs-cloud-container/pull/153))

### Internal / Testing Changes
- refactor: update json import paths ([#167](https://github.com/googleapis/nodejs-cloud-container/pull/167))
- build: Add docuploader credentials to node publish jobs ([#165](https://github.com/googleapis/nodejs-cloud-container/pull/165))
- build: update release config ([#163](https://github.com/googleapis/nodejs-cloud-container/pull/163))
- build: use node10 to run samples-test, system-test etc ([#164](https://github.com/googleapis/nodejs-cloud-container/pull/164))
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#160](https://github.com/googleapis/nodejs-cloud-container/pull/160))
- build: create docs test npm scripts ([#158](https://github.com/googleapis/nodejs-cloud-container/pull/158))
- build: test using @grpc/grpc-js in CI ([#157](https://github.com/googleapis/nodejs-cloud-container/pull/157))
- chore(deps): update dependency eslint-config-prettier to v4 ([#151](https://github.com/googleapis/nodejs-cloud-container/pull/151))
- chore: update the date in the copyright header ([#150](https://github.com/googleapis/nodejs-cloud-container/pull/150))
- build: check broken links in generated docs ([#144](https://github.com/googleapis/nodejs-cloud-container/pull/144))
- test: add sample tests ([#143](https://github.com/googleapis/nodejs-cloud-container/pull/143))
- chore(build): inject yoshi automation key ([#142](https://github.com/googleapis/nodejs-cloud-container/pull/142))

## v0.3.0

12-11-2018 10:08 PST

### Implementation Changes
**This library no longer support Node.js 4.x and 9.x, use of these out of LTS versions of Node.js with this library might not work in the future.**
- fix: drop support for node.js 4.x and 9.x ([#46](https://github.com/googleapis/nodejs-cloud-container/pull/46))

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#117](https://github.com/googleapis/nodejs-cloud-container/pull/117))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#113](https://github.com/googleapis/nodejs-cloud-container/pull/113))
- chore(deps): update dependency eslint-plugin-node to v8 ([#102](https://github.com/googleapis/nodejs-cloud-container/pull/102))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#86](https://github.com/googleapis/nodejs-cloud-container/pull/86))
- fix(deps): update dependency google-gax to ^0.20.0 ([#75](https://github.com/googleapis/nodejs-cloud-container/pull/75))
- Remove unused dependencies ([#72](https://github.com/googleapis/nodejs-cloud-container/pull/72))
- chore(deps): update dependency nyc to v13 ([#67](https://github.com/googleapis/nodejs-cloud-container/pull/67))
- fix(deps): update dependency google-gax to ^0.19.0 ([#66](https://github.com/googleapis/nodejs-cloud-container/pull/66))
- chore(deps): update dependency eslint-config-prettier to v3 ([#65](https://github.com/googleapis/nodejs-cloud-container/pull/65))
- chore(deps): lock file maintenance ([#62](https://github.com/googleapis/nodejs-cloud-container/pull/62))
- chore(deps): lock file maintenance ([#61](https://github.com/googleapis/nodejs-cloud-container/pull/61))
- fix(deps): update dependency google-gax to ^0.18.0 ([#58](https://github.com/googleapis/nodejs-cloud-container/pull/58))
- chore(deps): lock file maintenance ([#57](https://github.com/googleapis/nodejs-cloud-container/pull/57))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-cloud-container/pull/54))
- chore(deps): update dependency eslint-plugin-node to v7 ([#52](https://github.com/googleapis/nodejs-cloud-container/pull/52))
- chore(deps): lock file maintenance ([#51](https://github.com/googleapis/nodejs-cloud-container/pull/51))
- chore(deps): lock file maintenance ([#49](https://github.com/googleapis/nodejs-cloud-container/pull/49))
- chore(deps): lock file maintenance ([#48](https://github.com/googleapis/nodejs-cloud-container/pull/48))
- chore(deps): lock file maintenance ([#47](https://github.com/googleapis/nodejs-cloud-container/pull/47))
- chore(deps): lock file maintenance ([#45](https://github.com/googleapis/nodejs-cloud-container/pull/45))
- chore(deps): lock file maintenance ([#44](https://github.com/googleapis/nodejs-cloud-container/pull/44))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 ([#41](https://github.com/googleapis/nodejs-cloud-container/pull/41))

### Documentation
- docs: update readme badges ([#127](https://github.com/googleapis/nodejs-cloud-container/pull/127))
- docs(samples): updated samples code to use async await ([#122](https://github.com/googleapis/nodejs-cloud-container/pull/122))
- fix(docs): README.md using @google-cloud/cloud-container ([#114](https://github.com/googleapis/nodejs-cloud-container/pull/114))

### Internal / Testing Changes
- chore: fix publish.sh permission +x ([#138](https://github.com/googleapis/nodejs-cloud-container/pull/138))
- fix(build): fix Kokoro release script ([#137](https://github.com/googleapis/nodejs-cloud-container/pull/137))
- build: add Kokoro configs for autorelease ([#136](https://github.com/googleapis/nodejs-cloud-container/pull/136))
- chore: always nyc report before calling codecov ([#133](https://github.com/googleapis/nodejs-cloud-container/pull/133))
- chore: nyc ignore build/test by default ([#132](https://github.com/googleapis/nodejs-cloud-container/pull/132))
- chore: clean up usage of prettier and eslint ([#131](https://github.com/googleapis/nodejs-cloud-container/pull/131))
- chore: update license file ([#129](https://github.com/googleapis/nodejs-cloud-container/pull/129))
- fix(build): fix system key decryption ([#125](https://github.com/googleapis/nodejs-cloud-container/pull/125))
- chore: add synth.metadata
- chore: update eslintignore config ([#116](https://github.com/googleapis/nodejs-cloud-container/pull/116))
- Update synth.py yaml path ([#115](https://github.com/googleapis/nodejs-cloud-container/pull/115))
- chore: drop contributors from multiple places ([#112](https://github.com/googleapis/nodejs-cloud-container/pull/112))
- chore: use latest npm on Windows ([#111](https://github.com/googleapis/nodejs-cloud-container/pull/111))
- chore: update CircleCI config ([#109](https://github.com/googleapis/nodejs-cloud-container/pull/109))
- chore: include build in eslintignore ([#106](https://github.com/googleapis/nodejs-cloud-container/pull/106))
- chore: update issue templates ([#100](https://github.com/googleapis/nodejs-cloud-container/pull/100))
- chore: remove old issue template ([#98](https://github.com/googleapis/nodejs-cloud-container/pull/98))
- build: run tests on node11 ([#97](https://github.com/googleapis/nodejs-cloud-container/pull/97))
- chores(build): do not collect sponge.xml from windows builds ([#96](https://github.com/googleapis/nodejs-cloud-container/pull/96))
- chores(build): run codecov on continuous builds ([#95](https://github.com/googleapis/nodejs-cloud-container/pull/95))
- chore: update new issue template ([#94](https://github.com/googleapis/nodejs-cloud-container/pull/94))
- build: fix codecov uploading on Kokoro ([#89](https://github.com/googleapis/nodejs-cloud-container/pull/89))
- Update kokoro config ([#87](https://github.com/googleapis/nodejs-cloud-container/pull/87))
- Update kokoro config ([#83](https://github.com/googleapis/nodejs-cloud-container/pull/83))
- Update CI config ([#82](https://github.com/googleapis/nodejs-cloud-container/pull/82))
- test: remove appveyor config ([#81](https://github.com/googleapis/nodejs-cloud-container/pull/81))
- Update the CI config ([#80](https://github.com/googleapis/nodejs-cloud-container/pull/80))
- Enable prefer-const in the eslint config ([#78](https://github.com/googleapis/nodejs-cloud-container/pull/78))
- Enable no-var in eslint ([#77](https://github.com/googleapis/nodejs-cloud-container/pull/77))
- Switch to let/const ([#76](https://github.com/googleapis/nodejs-cloud-container/pull/76))
- Update CI config ([#74](https://github.com/googleapis/nodejs-cloud-container/pull/74))
- Update CI Config ([#73](https://github.com/googleapis/nodejs-cloud-container/pull/73))
- Retry npm install in CI ([#71](https://github.com/googleapis/nodejs-cloud-container/pull/71))
- add templates to synth.py ([#68](https://github.com/googleapis/nodejs-cloud-container/pull/68))
- chore: do not use npm ci ([#64](https://github.com/googleapis/nodejs-cloud-container/pull/64))
- chore: ignore package-lock.json ([#63](https://github.com/googleapis/nodejs-cloud-container/pull/63))
- chore: update renovate config ([#60](https://github.com/googleapis/nodejs-cloud-container/pull/60))
- remove that whitespace ([#59](https://github.com/googleapis/nodejs-cloud-container/pull/59))
- chore: move mocha options to mocha.opts ([#55](https://github.com/googleapis/nodejs-cloud-container/pull/55))
- chore: require node 8 for samples ([#56](https://github.com/googleapis/nodejs-cloud-container/pull/56))
- test: use strictEqual in tests ([#53](https://github.com/googleapis/nodejs-cloud-container/pull/53))
- Check in synth script and update gax dependency ([#43](https://github.com/googleapis/nodejs-cloud-container/pull/43))
- fix: update to the latest eslint ([#40](https://github.com/googleapis/nodejs-cloud-container/pull/40))
- Configure Renovate ([#33](https://github.com/googleapis/nodejs-cloud-container/pull/33))
- refactor: drop repo-tool as an exec wrapper ([#39](https://github.com/googleapis/nodejs-cloud-container/pull/39))
- fix: update linking for samples ([#36](https://github.com/googleapis/nodejs-cloud-container/pull/36))
- chore: update sample lockfiles ([#38](https://github.com/googleapis/nodejs-cloud-container/pull/38))
- Update nyc to the latest version 🚀 ([#30](https://github.com/googleapis/nodejs-cloud-container/pull/30))
- chore: lock files maintenance ([#29](https://github.com/googleapis/nodejs-cloud-container/pull/29))
- chore: the ultimate fix for repo-tools EPERM ([#28](https://github.com/googleapis/nodejs-cloud-container/pull/28))
- chore: timeout for system test ([#27](https://github.com/googleapis/nodejs-cloud-container/pull/27))
- chore: lock files maintenance ([#26](https://github.com/googleapis/nodejs-cloud-container/pull/26))
- chore: test on node10 ([#25](https://github.com/googleapis/nodejs-cloud-container/pull/25))
- chore: lock files maintenance ([#24](https://github.com/googleapis/nodejs-cloud-container/pull/24))
