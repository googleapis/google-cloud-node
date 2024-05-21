[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Key Management Service: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Autokey.create_key_handle](#autokey.create_key_handle)
  * [Autokey.get_key_handle](#autokey.get_key_handle)
  * [Autokey.list_key_handles](#autokey.list_key_handles)
  * [Autokey_admin.get_autokey_config](#autokey_admin.get_autokey_config)
  * [Autokey_admin.show_effective_autokey_config](#autokey_admin.show_effective_autokey_config)
  * [Autokey_admin.update_autokey_config](#autokey_admin.update_autokey_config)
  * [Ekm_service.create_ekm_connection](#ekm_service.create_ekm_connection)
  * [Ekm_service.get_ekm_config](#ekm_service.get_ekm_config)
  * [Ekm_service.get_ekm_connection](#ekm_service.get_ekm_connection)
  * [Ekm_service.list_ekm_connections](#ekm_service.list_ekm_connections)
  * [Ekm_service.update_ekm_config](#ekm_service.update_ekm_config)
  * [Ekm_service.update_ekm_connection](#ekm_service.update_ekm_connection)
  * [Ekm_service.verify_connectivity](#ekm_service.verify_connectivity)
  * [Key_management_service.asymmetric_decrypt](#key_management_service.asymmetric_decrypt)
  * [Key_management_service.asymmetric_sign](#key_management_service.asymmetric_sign)
  * [Key_management_service.create_crypto_key](#key_management_service.create_crypto_key)
  * [Key_management_service.create_crypto_key_version](#key_management_service.create_crypto_key_version)
  * [Key_management_service.create_import_job](#key_management_service.create_import_job)
  * [Key_management_service.create_key_ring](#key_management_service.create_key_ring)
  * [Key_management_service.decrypt](#key_management_service.decrypt)
  * [Key_management_service.destroy_crypto_key_version](#key_management_service.destroy_crypto_key_version)
  * [Key_management_service.encrypt](#key_management_service.encrypt)
  * [Key_management_service.generate_random_bytes](#key_management_service.generate_random_bytes)
  * [Key_management_service.get_crypto_key](#key_management_service.get_crypto_key)
  * [Key_management_service.get_crypto_key_version](#key_management_service.get_crypto_key_version)
  * [Key_management_service.get_import_job](#key_management_service.get_import_job)
  * [Key_management_service.get_key_ring](#key_management_service.get_key_ring)
  * [Key_management_service.get_public_key](#key_management_service.get_public_key)
  * [Key_management_service.import_crypto_key_version](#key_management_service.import_crypto_key_version)
  * [Key_management_service.list_crypto_key_versions](#key_management_service.list_crypto_key_versions)
  * [Key_management_service.list_crypto_keys](#key_management_service.list_crypto_keys)
  * [Key_management_service.list_import_jobs](#key_management_service.list_import_jobs)
  * [Key_management_service.list_key_rings](#key_management_service.list_key_rings)
  * [Key_management_service.mac_sign](#key_management_service.mac_sign)
  * [Key_management_service.mac_verify](#key_management_service.mac_verify)
  * [Key_management_service.raw_decrypt](#key_management_service.raw_decrypt)
  * [Key_management_service.raw_encrypt](#key_management_service.raw_encrypt)
  * [Key_management_service.restore_crypto_key_version](#key_management_service.restore_crypto_key_version)
  * [Key_management_service.update_crypto_key](#key_management_service.update_crypto_key)
  * [Key_management_service.update_crypto_key_primary_version](#key_management_service.update_crypto_key_primary_version)
  * [Key_management_service.update_crypto_key_version](#key_management_service.update_crypto_key_version)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Autokey.create_key_handle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey.create_key_handle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/autokey.create_key_handle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/autokey.create_key_handle.js`


-----




### Autokey.get_key_handle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey.get_key_handle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/autokey.get_key_handle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/autokey.get_key_handle.js`


-----




### Autokey.list_key_handles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey.list_key_handles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/autokey.list_key_handles.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/autokey.list_key_handles.js`


-----




### Autokey_admin.get_autokey_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey_admin.get_autokey_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/autokey_admin.get_autokey_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/autokey_admin.get_autokey_config.js`


-----




### Autokey_admin.show_effective_autokey_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey_admin.show_effective_autokey_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/autokey_admin.show_effective_autokey_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/autokey_admin.show_effective_autokey_config.js`


-----




### Autokey_admin.update_autokey_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey_admin.update_autokey_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/autokey_admin.update_autokey_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/autokey_admin.update_autokey_config.js`


-----




### Ekm_service.create_ekm_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js`


-----




### Ekm_service.get_ekm_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_config.js`


-----




### Ekm_service.get_ekm_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js`


-----




### Ekm_service.list_ekm_connections

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js`


-----




### Ekm_service.update_ekm_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_config.js`


-----




### Ekm_service.update_ekm_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js`


-----




### Ekm_service.verify_connectivity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.verify_connectivity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.verify_connectivity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/ekm_service.verify_connectivity.js`


-----




### Key_management_service.asymmetric_decrypt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js`


-----




### Key_management_service.asymmetric_sign

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js`


-----




### Key_management_service.create_crypto_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js`


-----




### Key_management_service.create_crypto_key_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js`


-----




### Key_management_service.create_import_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js`


-----




### Key_management_service.create_key_ring

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js`


-----




### Key_management_service.decrypt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js`


-----




### Key_management_service.destroy_crypto_key_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js`


-----




### Key_management_service.encrypt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js`


-----




### Key_management_service.generate_random_bytes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js`


-----




### Key_management_service.get_crypto_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js`


-----




### Key_management_service.get_crypto_key_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js`


-----




### Key_management_service.get_import_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js`


-----




### Key_management_service.get_key_ring

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js`


-----




### Key_management_service.get_public_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js`


-----




### Key_management_service.import_crypto_key_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js`


-----




### Key_management_service.list_crypto_key_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js`


-----




### Key_management_service.list_crypto_keys

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js`


-----




### Key_management_service.list_import_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js`


-----




### Key_management_service.list_key_rings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js`


-----




### Key_management_service.mac_sign

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js`


-----




### Key_management_service.mac_verify

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js`


-----




### Key_management_service.raw_decrypt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_decrypt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_decrypt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_decrypt.js`


-----




### Key_management_service.raw_encrypt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_encrypt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_encrypt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_encrypt.js`


-----




### Key_management_service.restore_crypto_key_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js`


-----




### Key_management_service.update_crypto_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js`


-----




### Key_management_service.update_crypto_key_primary_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js`


-----




### Key_management_service.update_crypto_key_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-kms/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/kms
