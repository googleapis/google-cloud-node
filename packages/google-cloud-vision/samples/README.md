[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Vision API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Image_annotator.async_batch_annotate_files](#image_annotator.async_batch_annotate_files)
  * [Image_annotator.async_batch_annotate_images](#image_annotator.async_batch_annotate_images)
  * [Image_annotator.batch_annotate_files](#image_annotator.batch_annotate_files)
  * [Image_annotator.batch_annotate_images](#image_annotator.batch_annotate_images)
  * [Product_search.add_product_to_product_set](#product_search.add_product_to_product_set)
  * [Product_search.create_product](#product_search.create_product)
  * [Product_search.create_product_set](#product_search.create_product_set)
  * [Product_search.create_reference_image](#product_search.create_reference_image)
  * [Product_search.delete_product](#product_search.delete_product)
  * [Product_search.delete_product_set](#product_search.delete_product_set)
  * [Product_search.delete_reference_image](#product_search.delete_reference_image)
  * [Product_search.get_product](#product_search.get_product)
  * [Product_search.get_product_set](#product_search.get_product_set)
  * [Product_search.get_reference_image](#product_search.get_reference_image)
  * [Product_search.import_product_sets](#product_search.import_product_sets)
  * [Product_search.list_product_sets](#product_search.list_product_sets)
  * [Product_search.list_products](#product_search.list_products)
  * [Product_search.list_products_in_product_set](#product_search.list_products_in_product_set)
  * [Product_search.list_reference_images](#product_search.list_reference_images)
  * [Product_search.purge_products](#product_search.purge_products)
  * [Product_search.remove_product_from_product_set](#product_search.remove_product_from_product_set)
  * [Product_search.update_product](#product_search.update_product)
  * [Product_search.update_product_set](#product_search.update_product_set)
  * [Image_annotator.batch_annotate_images](#image_annotator.batch_annotate_images)
  * [Image_annotator.async_batch_annotate_files](#image_annotator.async_batch_annotate_files)
  * [Image_annotator.batch_annotate_images](#image_annotator.batch_annotate_images)
  * [Image_annotator.async_batch_annotate_files](#image_annotator.async_batch_annotate_files)
  * [Image_annotator.batch_annotate_images](#image_annotator.batch_annotate_images)
  * [Product_search.add_product_to_product_set](#product_search.add_product_to_product_set)
  * [Product_search.create_product](#product_search.create_product)
  * [Product_search.create_product_set](#product_search.create_product_set)
  * [Product_search.create_reference_image](#product_search.create_reference_image)
  * [Product_search.delete_product](#product_search.delete_product)
  * [Product_search.delete_product_set](#product_search.delete_product_set)
  * [Product_search.delete_reference_image](#product_search.delete_reference_image)
  * [Product_search.get_product](#product_search.get_product)
  * [Product_search.get_product_set](#product_search.get_product_set)
  * [Product_search.get_reference_image](#product_search.get_reference_image)
  * [Product_search.import_product_sets](#product_search.import_product_sets)
  * [Product_search.list_product_sets](#product_search.list_product_sets)
  * [Product_search.list_products](#product_search.list_products)
  * [Product_search.list_products_in_product_set](#product_search.list_products_in_product_set)
  * [Product_search.list_reference_images](#product_search.list_reference_images)
  * [Product_search.remove_product_from_product_set](#product_search.remove_product_from_product_set)
  * [Product_search.update_product](#product_search.update_product)
  * [Product_search.update_product_set](#product_search.update_product_set)
  * [Image_annotator.async_batch_annotate_files](#image_annotator.async_batch_annotate_files)
  * [Image_annotator.async_batch_annotate_images](#image_annotator.async_batch_annotate_images)
  * [Image_annotator.batch_annotate_files](#image_annotator.batch_annotate_files)
  * [Image_annotator.batch_annotate_images](#image_annotator.batch_annotate_images)
  * [Product_search.add_product_to_product_set](#product_search.add_product_to_product_set)
  * [Product_search.create_product](#product_search.create_product)
  * [Product_search.create_product_set](#product_search.create_product_set)
  * [Product_search.create_reference_image](#product_search.create_reference_image)
  * [Product_search.delete_product](#product_search.delete_product)
  * [Product_search.delete_product_set](#product_search.delete_product_set)
  * [Product_search.delete_reference_image](#product_search.delete_reference_image)
  * [Product_search.get_product](#product_search.get_product)
  * [Product_search.get_product_set](#product_search.get_product_set)
  * [Product_search.get_reference_image](#product_search.get_reference_image)
  * [Product_search.import_product_sets](#product_search.import_product_sets)
  * [Product_search.list_product_sets](#product_search.list_product_sets)
  * [Product_search.list_products](#product_search.list_products)
  * [Product_search.list_products_in_product_set](#product_search.list_products_in_product_set)
  * [Product_search.list_reference_images](#product_search.list_reference_images)
  * [Product_search.purge_products](#product_search.purge_products)
  * [Product_search.remove_product_from_product_set](#product_search.remove_product_from_product_set)
  * [Product_search.update_product](#product_search.update_product)
  * [Product_search.update_product_set](#product_search.update_product_set)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Image_annotator.async_batch_annotate_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_files.js`


-----




### Image_annotator.async_batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_images.js`


-----




### Image_annotator.batch_annotate_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_files.js`


-----




### Image_annotator.batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_images.js`


-----




### Product_search.add_product_to_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.add_product_to_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.add_product_to_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.add_product_to_product_set.js`


-----




### Product_search.create_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.create_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.create_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.create_product.js`


-----




### Product_search.create_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.create_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.create_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.create_product_set.js`


-----




### Product_search.create_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.create_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.create_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.create_reference_image.js`


-----




### Product_search.delete_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.delete_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.delete_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.delete_product.js`


-----




### Product_search.delete_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.delete_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.delete_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.delete_product_set.js`


-----




### Product_search.delete_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.delete_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.delete_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.delete_reference_image.js`


-----




### Product_search.get_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.get_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.get_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.get_product.js`


-----




### Product_search.get_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.get_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.get_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.get_product_set.js`


-----




### Product_search.get_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.get_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.get_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.get_reference_image.js`


-----




### Product_search.import_product_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.import_product_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.import_product_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.import_product_sets.js`


-----




### Product_search.list_product_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_product_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.list_product_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.list_product_sets.js`


-----




### Product_search.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.list_products.js`


-----




### Product_search.list_products_in_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_products_in_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.list_products_in_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.list_products_in_product_set.js`


-----




### Product_search.list_reference_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_reference_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.list_reference_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.list_reference_images.js`


-----




### Product_search.purge_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.purge_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.purge_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.purge_products.js`


-----




### Product_search.remove_product_from_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.remove_product_from_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.remove_product_from_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.remove_product_from_product_set.js`


-----




### Product_search.update_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.update_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.update_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.update_product.js`


-----




### Product_search.update_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.update_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1/product_search.update_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1/product_search.update_product_set.js`


-----




### Image_annotator.batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p1beta1/image_annotator.batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p1beta1/image_annotator.batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p1beta1/image_annotator.batch_annotate_images.js`


-----




### Image_annotator.async_batch_annotate_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.async_batch_annotate_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.async_batch_annotate_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.async_batch_annotate_files.js`


-----




### Image_annotator.batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.batch_annotate_images.js`


-----




### Image_annotator.async_batch_annotate_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.async_batch_annotate_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.async_batch_annotate_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.async_batch_annotate_files.js`


-----




### Image_annotator.batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.batch_annotate_images.js`


-----




### Product_search.add_product_to_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.add_product_to_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.add_product_to_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.add_product_to_product_set.js`


-----




### Product_search.create_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product.js`


-----




### Product_search.create_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product_set.js`


-----




### Product_search.create_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_reference_image.js`


-----




### Product_search.delete_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product.js`


-----




### Product_search.delete_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product_set.js`


-----




### Product_search.delete_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_reference_image.js`


-----




### Product_search.get_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product.js`


-----




### Product_search.get_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product_set.js`


-----




### Product_search.get_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_reference_image.js`


-----




### Product_search.import_product_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.import_product_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.import_product_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.import_product_sets.js`


-----




### Product_search.list_product_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_product_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_product_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_product_sets.js`


-----




### Product_search.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products.js`


-----




### Product_search.list_products_in_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products_in_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products_in_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products_in_product_set.js`


-----




### Product_search.list_reference_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_reference_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_reference_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_reference_images.js`


-----




### Product_search.remove_product_from_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.remove_product_from_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.remove_product_from_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.remove_product_from_product_set.js`


-----




### Product_search.update_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product.js`


-----




### Product_search.update_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product_set.js`


-----




### Image_annotator.async_batch_annotate_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_files.js`


-----




### Image_annotator.async_batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_images.js`


-----




### Image_annotator.batch_annotate_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_files.js`


-----




### Image_annotator.batch_annotate_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_images.js`


-----




### Product_search.add_product_to_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.add_product_to_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.add_product_to_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.add_product_to_product_set.js`


-----




### Product_search.create_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product.js`


-----




### Product_search.create_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product_set.js`


-----




### Product_search.create_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_reference_image.js`


-----




### Product_search.delete_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product.js`


-----




### Product_search.delete_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product_set.js`


-----




### Product_search.delete_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_reference_image.js`


-----




### Product_search.get_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product.js`


-----




### Product_search.get_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product_set.js`


-----




### Product_search.get_reference_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_reference_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_reference_image.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_reference_image.js`


-----




### Product_search.import_product_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.import_product_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.import_product_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.import_product_sets.js`


-----




### Product_search.list_product_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_product_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_product_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_product_sets.js`


-----




### Product_search.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products.js`


-----




### Product_search.list_products_in_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products_in_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products_in_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products_in_product_set.js`


-----




### Product_search.list_reference_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_reference_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_reference_images.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_reference_images.js`


-----




### Product_search.purge_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.purge_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.purge_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.purge_products.js`


-----




### Product_search.remove_product_from_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.remove_product_from_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.remove_product_from_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.remove_product_from_product_set.js`


-----




### Product_search.update_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product.js`


-----




### Product_search.update_product_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product_set.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vision/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-vision/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/vision
