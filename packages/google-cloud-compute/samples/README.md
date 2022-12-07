[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Compute Engine: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Accelerator_types.aggregated_list](#accelerator_types.aggregated_list)
  * [Accelerator_types.get](#accelerator_types.get)
  * [Accelerator_types.list](#accelerator_types.list)
  * [Addresses.aggregated_list](#addresses.aggregated_list)
  * [Addresses.delete](#addresses.delete)
  * [Addresses.get](#addresses.get)
  * [Addresses.insert](#addresses.insert)
  * [Addresses.list](#addresses.list)
  * [Addresses.set_labels](#addresses.set_labels)
  * [Autoscalers.aggregated_list](#autoscalers.aggregated_list)
  * [Autoscalers.delete](#autoscalers.delete)
  * [Autoscalers.get](#autoscalers.get)
  * [Autoscalers.insert](#autoscalers.insert)
  * [Autoscalers.list](#autoscalers.list)
  * [Autoscalers.patch](#autoscalers.patch)
  * [Autoscalers.update](#autoscalers.update)
  * [Backend_buckets.add_signed_url_key](#backend_buckets.add_signed_url_key)
  * [Backend_buckets.delete](#backend_buckets.delete)
  * [Backend_buckets.delete_signed_url_key](#backend_buckets.delete_signed_url_key)
  * [Backend_buckets.get](#backend_buckets.get)
  * [Backend_buckets.insert](#backend_buckets.insert)
  * [Backend_buckets.list](#backend_buckets.list)
  * [Backend_buckets.patch](#backend_buckets.patch)
  * [Backend_buckets.set_edge_security_policy](#backend_buckets.set_edge_security_policy)
  * [Backend_buckets.update](#backend_buckets.update)
  * [Backend_services.add_signed_url_key](#backend_services.add_signed_url_key)
  * [Backend_services.aggregated_list](#backend_services.aggregated_list)
  * [Backend_services.delete](#backend_services.delete)
  * [Backend_services.delete_signed_url_key](#backend_services.delete_signed_url_key)
  * [Backend_services.get](#backend_services.get)
  * [Backend_services.get_health](#backend_services.get_health)
  * [Backend_services.get_iam_policy](#backend_services.get_iam_policy)
  * [Backend_services.insert](#backend_services.insert)
  * [Backend_services.list](#backend_services.list)
  * [Backend_services.patch](#backend_services.patch)
  * [Backend_services.set_edge_security_policy](#backend_services.set_edge_security_policy)
  * [Backend_services.set_iam_policy](#backend_services.set_iam_policy)
  * [Backend_services.set_security_policy](#backend_services.set_security_policy)
  * [Backend_services.update](#backend_services.update)
  * [Disk_types.aggregated_list](#disk_types.aggregated_list)
  * [Disk_types.get](#disk_types.get)
  * [Disk_types.list](#disk_types.list)
  * [Disks.add_resource_policies](#disks.add_resource_policies)
  * [Disks.aggregated_list](#disks.aggregated_list)
  * [Disks.create_snapshot](#disks.create_snapshot)
  * [Disks.delete](#disks.delete)
  * [Disks.get](#disks.get)
  * [Disks.get_iam_policy](#disks.get_iam_policy)
  * [Disks.insert](#disks.insert)
  * [Disks.list](#disks.list)
  * [Disks.remove_resource_policies](#disks.remove_resource_policies)
  * [Disks.resize](#disks.resize)
  * [Disks.set_iam_policy](#disks.set_iam_policy)
  * [Disks.set_labels](#disks.set_labels)
  * [Disks.test_iam_permissions](#disks.test_iam_permissions)
  * [External_vpn_gateways.delete](#external_vpn_gateways.delete)
  * [External_vpn_gateways.get](#external_vpn_gateways.get)
  * [External_vpn_gateways.insert](#external_vpn_gateways.insert)
  * [External_vpn_gateways.list](#external_vpn_gateways.list)
  * [External_vpn_gateways.set_labels](#external_vpn_gateways.set_labels)
  * [External_vpn_gateways.test_iam_permissions](#external_vpn_gateways.test_iam_permissions)
  * [Firewall_policies.add_association](#firewall_policies.add_association)
  * [Firewall_policies.add_rule](#firewall_policies.add_rule)
  * [Firewall_policies.clone_rules](#firewall_policies.clone_rules)
  * [Firewall_policies.delete](#firewall_policies.delete)
  * [Firewall_policies.get](#firewall_policies.get)
  * [Firewall_policies.get_association](#firewall_policies.get_association)
  * [Firewall_policies.get_iam_policy](#firewall_policies.get_iam_policy)
  * [Firewall_policies.get_rule](#firewall_policies.get_rule)
  * [Firewall_policies.insert](#firewall_policies.insert)
  * [Firewall_policies.list](#firewall_policies.list)
  * [Firewall_policies.list_associations](#firewall_policies.list_associations)
  * [Firewall_policies.move](#firewall_policies.move)
  * [Firewall_policies.patch](#firewall_policies.patch)
  * [Firewall_policies.patch_rule](#firewall_policies.patch_rule)
  * [Firewall_policies.remove_association](#firewall_policies.remove_association)
  * [Firewall_policies.remove_rule](#firewall_policies.remove_rule)
  * [Firewall_policies.set_iam_policy](#firewall_policies.set_iam_policy)
  * [Firewall_policies.test_iam_permissions](#firewall_policies.test_iam_permissions)
  * [Firewalls.delete](#firewalls.delete)
  * [Firewalls.get](#firewalls.get)
  * [Firewalls.insert](#firewalls.insert)
  * [Firewalls.list](#firewalls.list)
  * [Firewalls.patch](#firewalls.patch)
  * [Firewalls.update](#firewalls.update)
  * [Forwarding_rules.aggregated_list](#forwarding_rules.aggregated_list)
  * [Forwarding_rules.delete](#forwarding_rules.delete)
  * [Forwarding_rules.get](#forwarding_rules.get)
  * [Forwarding_rules.insert](#forwarding_rules.insert)
  * [Forwarding_rules.list](#forwarding_rules.list)
  * [Forwarding_rules.patch](#forwarding_rules.patch)
  * [Forwarding_rules.set_labels](#forwarding_rules.set_labels)
  * [Forwarding_rules.set_target](#forwarding_rules.set_target)
  * [Global_addresses.delete](#global_addresses.delete)
  * [Global_addresses.get](#global_addresses.get)
  * [Global_addresses.insert](#global_addresses.insert)
  * [Global_addresses.list](#global_addresses.list)
  * [Global_addresses.set_labels](#global_addresses.set_labels)
  * [Global_forwarding_rules.delete](#global_forwarding_rules.delete)
  * [Global_forwarding_rules.get](#global_forwarding_rules.get)
  * [Global_forwarding_rules.insert](#global_forwarding_rules.insert)
  * [Global_forwarding_rules.list](#global_forwarding_rules.list)
  * [Global_forwarding_rules.patch](#global_forwarding_rules.patch)
  * [Global_forwarding_rules.set_labels](#global_forwarding_rules.set_labels)
  * [Global_forwarding_rules.set_target](#global_forwarding_rules.set_target)
  * [Global_network_endpoint_groups.attach_network_endpoints](#global_network_endpoint_groups.attach_network_endpoints)
  * [Global_network_endpoint_groups.delete](#global_network_endpoint_groups.delete)
  * [Global_network_endpoint_groups.detach_network_endpoints](#global_network_endpoint_groups.detach_network_endpoints)
  * [Global_network_endpoint_groups.get](#global_network_endpoint_groups.get)
  * [Global_network_endpoint_groups.insert](#global_network_endpoint_groups.insert)
  * [Global_network_endpoint_groups.list](#global_network_endpoint_groups.list)
  * [Global_network_endpoint_groups.list_network_endpoints](#global_network_endpoint_groups.list_network_endpoints)
  * [Global_operations.aggregated_list](#global_operations.aggregated_list)
  * [Global_operations.delete](#global_operations.delete)
  * [Global_operations.get](#global_operations.get)
  * [Global_operations.list](#global_operations.list)
  * [Global_operations.wait](#global_operations.wait)
  * [Global_organization_operations.delete](#global_organization_operations.delete)
  * [Global_organization_operations.get](#global_organization_operations.get)
  * [Global_organization_operations.list](#global_organization_operations.list)
  * [Global_public_delegated_prefixes.delete](#global_public_delegated_prefixes.delete)
  * [Global_public_delegated_prefixes.get](#global_public_delegated_prefixes.get)
  * [Global_public_delegated_prefixes.insert](#global_public_delegated_prefixes.insert)
  * [Global_public_delegated_prefixes.list](#global_public_delegated_prefixes.list)
  * [Global_public_delegated_prefixes.patch](#global_public_delegated_prefixes.patch)
  * [Health_checks.aggregated_list](#health_checks.aggregated_list)
  * [Health_checks.delete](#health_checks.delete)
  * [Health_checks.get](#health_checks.get)
  * [Health_checks.insert](#health_checks.insert)
  * [Health_checks.list](#health_checks.list)
  * [Health_checks.patch](#health_checks.patch)
  * [Health_checks.update](#health_checks.update)
  * [Image_family_views.get](#image_family_views.get)
  * [Images.delete](#images.delete)
  * [Images.deprecate](#images.deprecate)
  * [Images.get](#images.get)
  * [Images.get_from_family](#images.get_from_family)
  * [Images.get_iam_policy](#images.get_iam_policy)
  * [Images.insert](#images.insert)
  * [Images.list](#images.list)
  * [Images.patch](#images.patch)
  * [Images.set_iam_policy](#images.set_iam_policy)
  * [Images.set_labels](#images.set_labels)
  * [Images.test_iam_permissions](#images.test_iam_permissions)
  * [Instance_group_managers.abandon_instances](#instance_group_managers.abandon_instances)
  * [Instance_group_managers.aggregated_list](#instance_group_managers.aggregated_list)
  * [Instance_group_managers.apply_updates_to_instances](#instance_group_managers.apply_updates_to_instances)
  * [Instance_group_managers.create_instances](#instance_group_managers.create_instances)
  * [Instance_group_managers.delete](#instance_group_managers.delete)
  * [Instance_group_managers.delete_instances](#instance_group_managers.delete_instances)
  * [Instance_group_managers.delete_per_instance_configs](#instance_group_managers.delete_per_instance_configs)
  * [Instance_group_managers.get](#instance_group_managers.get)
  * [Instance_group_managers.insert](#instance_group_managers.insert)
  * [Instance_group_managers.list](#instance_group_managers.list)
  * [Instance_group_managers.list_errors](#instance_group_managers.list_errors)
  * [Instance_group_managers.list_managed_instances](#instance_group_managers.list_managed_instances)
  * [Instance_group_managers.list_per_instance_configs](#instance_group_managers.list_per_instance_configs)
  * [Instance_group_managers.patch](#instance_group_managers.patch)
  * [Instance_group_managers.patch_per_instance_configs](#instance_group_managers.patch_per_instance_configs)
  * [Instance_group_managers.recreate_instances](#instance_group_managers.recreate_instances)
  * [Instance_group_managers.resize](#instance_group_managers.resize)
  * [Instance_group_managers.set_instance_template](#instance_group_managers.set_instance_template)
  * [Instance_group_managers.set_target_pools](#instance_group_managers.set_target_pools)
  * [Instance_group_managers.update_per_instance_configs](#instance_group_managers.update_per_instance_configs)
  * [Instance_groups.add_instances](#instance_groups.add_instances)
  * [Instance_groups.aggregated_list](#instance_groups.aggregated_list)
  * [Instance_groups.delete](#instance_groups.delete)
  * [Instance_groups.get](#instance_groups.get)
  * [Instance_groups.insert](#instance_groups.insert)
  * [Instance_groups.list](#instance_groups.list)
  * [Instance_groups.list_instances](#instance_groups.list_instances)
  * [Instance_groups.remove_instances](#instance_groups.remove_instances)
  * [Instance_groups.set_named_ports](#instance_groups.set_named_ports)
  * [Instance_templates.delete](#instance_templates.delete)
  * [Instance_templates.get](#instance_templates.get)
  * [Instance_templates.get_iam_policy](#instance_templates.get_iam_policy)
  * [Instance_templates.insert](#instance_templates.insert)
  * [Instance_templates.list](#instance_templates.list)
  * [Instance_templates.set_iam_policy](#instance_templates.set_iam_policy)
  * [Instance_templates.test_iam_permissions](#instance_templates.test_iam_permissions)
  * [Instances.add_access_config](#instances.add_access_config)
  * [Instances.add_resource_policies](#instances.add_resource_policies)
  * [Instances.aggregated_list](#instances.aggregated_list)
  * [Instances.attach_disk](#instances.attach_disk)
  * [Instances.bulk_insert](#instances.bulk_insert)
  * [Instances.delete](#instances.delete)
  * [Instances.delete_access_config](#instances.delete_access_config)
  * [Instances.detach_disk](#instances.detach_disk)
  * [Instances.get](#instances.get)
  * [Instances.get_effective_firewalls](#instances.get_effective_firewalls)
  * [Instances.get_guest_attributes](#instances.get_guest_attributes)
  * [Instances.get_iam_policy](#instances.get_iam_policy)
  * [Instances.get_screenshot](#instances.get_screenshot)
  * [Instances.get_serial_port_output](#instances.get_serial_port_output)
  * [Instances.get_shielded_instance_identity](#instances.get_shielded_instance_identity)
  * [Instances.insert](#instances.insert)
  * [Instances.list](#instances.list)
  * [Instances.list_referrers](#instances.list_referrers)
  * [Instances.remove_resource_policies](#instances.remove_resource_policies)
  * [Instances.reset](#instances.reset)
  * [Instances.resume](#instances.resume)
  * [Instances.send_diagnostic_interrupt](#instances.send_diagnostic_interrupt)
  * [Instances.set_deletion_protection](#instances.set_deletion_protection)
  * [Instances.set_disk_auto_delete](#instances.set_disk_auto_delete)
  * [Instances.set_iam_policy](#instances.set_iam_policy)
  * [Instances.set_labels](#instances.set_labels)
  * [Instances.set_machine_resources](#instances.set_machine_resources)
  * [Instances.set_machine_type](#instances.set_machine_type)
  * [Instances.set_metadata](#instances.set_metadata)
  * [Instances.set_min_cpu_platform](#instances.set_min_cpu_platform)
  * [Instances.set_scheduling](#instances.set_scheduling)
  * [Instances.set_service_account](#instances.set_service_account)
  * [Instances.set_shielded_instance_integrity_policy](#instances.set_shielded_instance_integrity_policy)
  * [Instances.set_tags](#instances.set_tags)
  * [Instances.simulate_maintenance_event](#instances.simulate_maintenance_event)
  * [Instances.start](#instances.start)
  * [Instances.start_with_encryption_key](#instances.start_with_encryption_key)
  * [Instances.stop](#instances.stop)
  * [Instances.suspend](#instances.suspend)
  * [Instances.test_iam_permissions](#instances.test_iam_permissions)
  * [Instances.update](#instances.update)
  * [Instances.update_access_config](#instances.update_access_config)
  * [Instances.update_display_device](#instances.update_display_device)
  * [Instances.update_network_interface](#instances.update_network_interface)
  * [Instances.update_shielded_instance_config](#instances.update_shielded_instance_config)
  * [Interconnect_attachments.aggregated_list](#interconnect_attachments.aggregated_list)
  * [Interconnect_attachments.delete](#interconnect_attachments.delete)
  * [Interconnect_attachments.get](#interconnect_attachments.get)
  * [Interconnect_attachments.insert](#interconnect_attachments.insert)
  * [Interconnect_attachments.list](#interconnect_attachments.list)
  * [Interconnect_attachments.patch](#interconnect_attachments.patch)
  * [Interconnect_attachments.set_labels](#interconnect_attachments.set_labels)
  * [Interconnect_locations.get](#interconnect_locations.get)
  * [Interconnect_locations.list](#interconnect_locations.list)
  * [Interconnects.delete](#interconnects.delete)
  * [Interconnects.get](#interconnects.get)
  * [Interconnects.get_diagnostics](#interconnects.get_diagnostics)
  * [Interconnects.insert](#interconnects.insert)
  * [Interconnects.list](#interconnects.list)
  * [Interconnects.patch](#interconnects.patch)
  * [Interconnects.set_labels](#interconnects.set_labels)
  * [License_codes.get](#license_codes.get)
  * [License_codes.test_iam_permissions](#license_codes.test_iam_permissions)
  * [Licenses.delete](#licenses.delete)
  * [Licenses.get](#licenses.get)
  * [Licenses.get_iam_policy](#licenses.get_iam_policy)
  * [Licenses.insert](#licenses.insert)
  * [Licenses.list](#licenses.list)
  * [Licenses.set_iam_policy](#licenses.set_iam_policy)
  * [Licenses.test_iam_permissions](#licenses.test_iam_permissions)
  * [Machine_images.delete](#machine_images.delete)
  * [Machine_images.get](#machine_images.get)
  * [Machine_images.get_iam_policy](#machine_images.get_iam_policy)
  * [Machine_images.insert](#machine_images.insert)
  * [Machine_images.list](#machine_images.list)
  * [Machine_images.set_iam_policy](#machine_images.set_iam_policy)
  * [Machine_images.test_iam_permissions](#machine_images.test_iam_permissions)
  * [Machine_types.aggregated_list](#machine_types.aggregated_list)
  * [Machine_types.get](#machine_types.get)
  * [Machine_types.list](#machine_types.list)
  * [Network_attachments.aggregated_list](#network_attachments.aggregated_list)
  * [Network_attachments.delete](#network_attachments.delete)
  * [Network_attachments.get](#network_attachments.get)
  * [Network_attachments.get_iam_policy](#network_attachments.get_iam_policy)
  * [Network_attachments.insert](#network_attachments.insert)
  * [Network_attachments.list](#network_attachments.list)
  * [Network_attachments.set_iam_policy](#network_attachments.set_iam_policy)
  * [Network_attachments.test_iam_permissions](#network_attachments.test_iam_permissions)
  * [Network_edge_security_services.aggregated_list](#network_edge_security_services.aggregated_list)
  * [Network_edge_security_services.delete](#network_edge_security_services.delete)
  * [Network_edge_security_services.get](#network_edge_security_services.get)
  * [Network_edge_security_services.insert](#network_edge_security_services.insert)
  * [Network_edge_security_services.patch](#network_edge_security_services.patch)
  * [Network_endpoint_groups.aggregated_list](#network_endpoint_groups.aggregated_list)
  * [Network_endpoint_groups.attach_network_endpoints](#network_endpoint_groups.attach_network_endpoints)
  * [Network_endpoint_groups.delete](#network_endpoint_groups.delete)
  * [Network_endpoint_groups.detach_network_endpoints](#network_endpoint_groups.detach_network_endpoints)
  * [Network_endpoint_groups.get](#network_endpoint_groups.get)
  * [Network_endpoint_groups.insert](#network_endpoint_groups.insert)
  * [Network_endpoint_groups.list](#network_endpoint_groups.list)
  * [Network_endpoint_groups.list_network_endpoints](#network_endpoint_groups.list_network_endpoints)
  * [Network_endpoint_groups.test_iam_permissions](#network_endpoint_groups.test_iam_permissions)
  * [Network_firewall_policies.add_association](#network_firewall_policies.add_association)
  * [Network_firewall_policies.add_rule](#network_firewall_policies.add_rule)
  * [Network_firewall_policies.clone_rules](#network_firewall_policies.clone_rules)
  * [Network_firewall_policies.delete](#network_firewall_policies.delete)
  * [Network_firewall_policies.get](#network_firewall_policies.get)
  * [Network_firewall_policies.get_association](#network_firewall_policies.get_association)
  * [Network_firewall_policies.get_iam_policy](#network_firewall_policies.get_iam_policy)
  * [Network_firewall_policies.get_rule](#network_firewall_policies.get_rule)
  * [Network_firewall_policies.insert](#network_firewall_policies.insert)
  * [Network_firewall_policies.list](#network_firewall_policies.list)
  * [Network_firewall_policies.patch](#network_firewall_policies.patch)
  * [Network_firewall_policies.patch_rule](#network_firewall_policies.patch_rule)
  * [Network_firewall_policies.remove_association](#network_firewall_policies.remove_association)
  * [Network_firewall_policies.remove_rule](#network_firewall_policies.remove_rule)
  * [Network_firewall_policies.set_iam_policy](#network_firewall_policies.set_iam_policy)
  * [Network_firewall_policies.test_iam_permissions](#network_firewall_policies.test_iam_permissions)
  * [Networks.add_peering](#networks.add_peering)
  * [Networks.delete](#networks.delete)
  * [Networks.get](#networks.get)
  * [Networks.get_effective_firewalls](#networks.get_effective_firewalls)
  * [Networks.insert](#networks.insert)
  * [Networks.list](#networks.list)
  * [Networks.list_peering_routes](#networks.list_peering_routes)
  * [Networks.patch](#networks.patch)
  * [Networks.remove_peering](#networks.remove_peering)
  * [Networks.switch_to_custom_mode](#networks.switch_to_custom_mode)
  * [Networks.update_peering](#networks.update_peering)
  * [Node_groups.add_nodes](#node_groups.add_nodes)
  * [Node_groups.aggregated_list](#node_groups.aggregated_list)
  * [Node_groups.delete](#node_groups.delete)
  * [Node_groups.delete_nodes](#node_groups.delete_nodes)
  * [Node_groups.get](#node_groups.get)
  * [Node_groups.get_iam_policy](#node_groups.get_iam_policy)
  * [Node_groups.insert](#node_groups.insert)
  * [Node_groups.list](#node_groups.list)
  * [Node_groups.list_nodes](#node_groups.list_nodes)
  * [Node_groups.patch](#node_groups.patch)
  * [Node_groups.set_iam_policy](#node_groups.set_iam_policy)
  * [Node_groups.set_node_template](#node_groups.set_node_template)
  * [Node_groups.test_iam_permissions](#node_groups.test_iam_permissions)
  * [Node_templates.aggregated_list](#node_templates.aggregated_list)
  * [Node_templates.delete](#node_templates.delete)
  * [Node_templates.get](#node_templates.get)
  * [Node_templates.get_iam_policy](#node_templates.get_iam_policy)
  * [Node_templates.insert](#node_templates.insert)
  * [Node_templates.list](#node_templates.list)
  * [Node_templates.set_iam_policy](#node_templates.set_iam_policy)
  * [Node_templates.test_iam_permissions](#node_templates.test_iam_permissions)
  * [Node_types.aggregated_list](#node_types.aggregated_list)
  * [Node_types.get](#node_types.get)
  * [Node_types.list](#node_types.list)
  * [Packet_mirrorings.aggregated_list](#packet_mirrorings.aggregated_list)
  * [Packet_mirrorings.delete](#packet_mirrorings.delete)
  * [Packet_mirrorings.get](#packet_mirrorings.get)
  * [Packet_mirrorings.insert](#packet_mirrorings.insert)
  * [Packet_mirrorings.list](#packet_mirrorings.list)
  * [Packet_mirrorings.patch](#packet_mirrorings.patch)
  * [Packet_mirrorings.test_iam_permissions](#packet_mirrorings.test_iam_permissions)
  * [Projects.disable_xpn_host](#projects.disable_xpn_host)
  * [Projects.disable_xpn_resource](#projects.disable_xpn_resource)
  * [Projects.enable_xpn_host](#projects.enable_xpn_host)
  * [Projects.enable_xpn_resource](#projects.enable_xpn_resource)
  * [Projects.get](#projects.get)
  * [Projects.get_xpn_host](#projects.get_xpn_host)
  * [Projects.get_xpn_resources](#projects.get_xpn_resources)
  * [Projects.list_xpn_hosts](#projects.list_xpn_hosts)
  * [Projects.move_disk](#projects.move_disk)
  * [Projects.move_instance](#projects.move_instance)
  * [Projects.set_common_instance_metadata](#projects.set_common_instance_metadata)
  * [Projects.set_default_network_tier](#projects.set_default_network_tier)
  * [Projects.set_usage_export_bucket](#projects.set_usage_export_bucket)
  * [Public_advertised_prefixes.delete](#public_advertised_prefixes.delete)
  * [Public_advertised_prefixes.get](#public_advertised_prefixes.get)
  * [Public_advertised_prefixes.insert](#public_advertised_prefixes.insert)
  * [Public_advertised_prefixes.list](#public_advertised_prefixes.list)
  * [Public_advertised_prefixes.patch](#public_advertised_prefixes.patch)
  * [Public_delegated_prefixes.aggregated_list](#public_delegated_prefixes.aggregated_list)
  * [Public_delegated_prefixes.delete](#public_delegated_prefixes.delete)
  * [Public_delegated_prefixes.get](#public_delegated_prefixes.get)
  * [Public_delegated_prefixes.insert](#public_delegated_prefixes.insert)
  * [Public_delegated_prefixes.list](#public_delegated_prefixes.list)
  * [Public_delegated_prefixes.patch](#public_delegated_prefixes.patch)
  * [Region_autoscalers.delete](#region_autoscalers.delete)
  * [Region_autoscalers.get](#region_autoscalers.get)
  * [Region_autoscalers.insert](#region_autoscalers.insert)
  * [Region_autoscalers.list](#region_autoscalers.list)
  * [Region_autoscalers.patch](#region_autoscalers.patch)
  * [Region_autoscalers.update](#region_autoscalers.update)
  * [Region_backend_services.delete](#region_backend_services.delete)
  * [Region_backend_services.get](#region_backend_services.get)
  * [Region_backend_services.get_health](#region_backend_services.get_health)
  * [Region_backend_services.get_iam_policy](#region_backend_services.get_iam_policy)
  * [Region_backend_services.insert](#region_backend_services.insert)
  * [Region_backend_services.list](#region_backend_services.list)
  * [Region_backend_services.patch](#region_backend_services.patch)
  * [Region_backend_services.set_iam_policy](#region_backend_services.set_iam_policy)
  * [Region_backend_services.update](#region_backend_services.update)
  * [Region_commitments.aggregated_list](#region_commitments.aggregated_list)
  * [Region_commitments.get](#region_commitments.get)
  * [Region_commitments.insert](#region_commitments.insert)
  * [Region_commitments.list](#region_commitments.list)
  * [Region_commitments.update](#region_commitments.update)
  * [Region_disk_types.get](#region_disk_types.get)
  * [Region_disk_types.list](#region_disk_types.list)
  * [Region_disks.add_resource_policies](#region_disks.add_resource_policies)
  * [Region_disks.create_snapshot](#region_disks.create_snapshot)
  * [Region_disks.delete](#region_disks.delete)
  * [Region_disks.get](#region_disks.get)
  * [Region_disks.get_iam_policy](#region_disks.get_iam_policy)
  * [Region_disks.insert](#region_disks.insert)
  * [Region_disks.list](#region_disks.list)
  * [Region_disks.remove_resource_policies](#region_disks.remove_resource_policies)
  * [Region_disks.resize](#region_disks.resize)
  * [Region_disks.set_iam_policy](#region_disks.set_iam_policy)
  * [Region_disks.set_labels](#region_disks.set_labels)
  * [Region_disks.test_iam_permissions](#region_disks.test_iam_permissions)
  * [Region_health_check_services.delete](#region_health_check_services.delete)
  * [Region_health_check_services.get](#region_health_check_services.get)
  * [Region_health_check_services.insert](#region_health_check_services.insert)
  * [Region_health_check_services.list](#region_health_check_services.list)
  * [Region_health_check_services.patch](#region_health_check_services.patch)
  * [Region_health_checks.delete](#region_health_checks.delete)
  * [Region_health_checks.get](#region_health_checks.get)
  * [Region_health_checks.insert](#region_health_checks.insert)
  * [Region_health_checks.list](#region_health_checks.list)
  * [Region_health_checks.patch](#region_health_checks.patch)
  * [Region_health_checks.update](#region_health_checks.update)
  * [Region_instance_group_managers.abandon_instances](#region_instance_group_managers.abandon_instances)
  * [Region_instance_group_managers.apply_updates_to_instances](#region_instance_group_managers.apply_updates_to_instances)
  * [Region_instance_group_managers.create_instances](#region_instance_group_managers.create_instances)
  * [Region_instance_group_managers.delete](#region_instance_group_managers.delete)
  * [Region_instance_group_managers.delete_instances](#region_instance_group_managers.delete_instances)
  * [Region_instance_group_managers.delete_per_instance_configs](#region_instance_group_managers.delete_per_instance_configs)
  * [Region_instance_group_managers.get](#region_instance_group_managers.get)
  * [Region_instance_group_managers.insert](#region_instance_group_managers.insert)
  * [Region_instance_group_managers.list](#region_instance_group_managers.list)
  * [Region_instance_group_managers.list_errors](#region_instance_group_managers.list_errors)
  * [Region_instance_group_managers.list_managed_instances](#region_instance_group_managers.list_managed_instances)
  * [Region_instance_group_managers.list_per_instance_configs](#region_instance_group_managers.list_per_instance_configs)
  * [Region_instance_group_managers.patch](#region_instance_group_managers.patch)
  * [Region_instance_group_managers.patch_per_instance_configs](#region_instance_group_managers.patch_per_instance_configs)
  * [Region_instance_group_managers.recreate_instances](#region_instance_group_managers.recreate_instances)
  * [Region_instance_group_managers.resize](#region_instance_group_managers.resize)
  * [Region_instance_group_managers.set_instance_template](#region_instance_group_managers.set_instance_template)
  * [Region_instance_group_managers.set_target_pools](#region_instance_group_managers.set_target_pools)
  * [Region_instance_group_managers.update_per_instance_configs](#region_instance_group_managers.update_per_instance_configs)
  * [Region_instance_groups.get](#region_instance_groups.get)
  * [Region_instance_groups.list](#region_instance_groups.list)
  * [Region_instance_groups.list_instances](#region_instance_groups.list_instances)
  * [Region_instance_groups.set_named_ports](#region_instance_groups.set_named_ports)
  * [Region_instances.bulk_insert](#region_instances.bulk_insert)
  * [Region_network_endpoint_groups.delete](#region_network_endpoint_groups.delete)
  * [Region_network_endpoint_groups.get](#region_network_endpoint_groups.get)
  * [Region_network_endpoint_groups.insert](#region_network_endpoint_groups.insert)
  * [Region_network_endpoint_groups.list](#region_network_endpoint_groups.list)
  * [Region_network_firewall_policies.add_association](#region_network_firewall_policies.add_association)
  * [Region_network_firewall_policies.add_rule](#region_network_firewall_policies.add_rule)
  * [Region_network_firewall_policies.clone_rules](#region_network_firewall_policies.clone_rules)
  * [Region_network_firewall_policies.delete](#region_network_firewall_policies.delete)
  * [Region_network_firewall_policies.get](#region_network_firewall_policies.get)
  * [Region_network_firewall_policies.get_association](#region_network_firewall_policies.get_association)
  * [Region_network_firewall_policies.get_effective_firewalls](#region_network_firewall_policies.get_effective_firewalls)
  * [Region_network_firewall_policies.get_iam_policy](#region_network_firewall_policies.get_iam_policy)
  * [Region_network_firewall_policies.get_rule](#region_network_firewall_policies.get_rule)
  * [Region_network_firewall_policies.insert](#region_network_firewall_policies.insert)
  * [Region_network_firewall_policies.list](#region_network_firewall_policies.list)
  * [Region_network_firewall_policies.patch](#region_network_firewall_policies.patch)
  * [Region_network_firewall_policies.patch_rule](#region_network_firewall_policies.patch_rule)
  * [Region_network_firewall_policies.remove_association](#region_network_firewall_policies.remove_association)
  * [Region_network_firewall_policies.remove_rule](#region_network_firewall_policies.remove_rule)
  * [Region_network_firewall_policies.set_iam_policy](#region_network_firewall_policies.set_iam_policy)
  * [Region_network_firewall_policies.test_iam_permissions](#region_network_firewall_policies.test_iam_permissions)
  * [Region_notification_endpoints.delete](#region_notification_endpoints.delete)
  * [Region_notification_endpoints.get](#region_notification_endpoints.get)
  * [Region_notification_endpoints.insert](#region_notification_endpoints.insert)
  * [Region_notification_endpoints.list](#region_notification_endpoints.list)
  * [Region_operations.delete](#region_operations.delete)
  * [Region_operations.get](#region_operations.get)
  * [Region_operations.list](#region_operations.list)
  * [Region_operations.wait](#region_operations.wait)
  * [Region_security_policies.delete](#region_security_policies.delete)
  * [Region_security_policies.get](#region_security_policies.get)
  * [Region_security_policies.insert](#region_security_policies.insert)
  * [Region_security_policies.list](#region_security_policies.list)
  * [Region_security_policies.patch](#region_security_policies.patch)
  * [Region_ssl_certificates.delete](#region_ssl_certificates.delete)
  * [Region_ssl_certificates.get](#region_ssl_certificates.get)
  * [Region_ssl_certificates.insert](#region_ssl_certificates.insert)
  * [Region_ssl_certificates.list](#region_ssl_certificates.list)
  * [Region_ssl_policies.delete](#region_ssl_policies.delete)
  * [Region_ssl_policies.get](#region_ssl_policies.get)
  * [Region_ssl_policies.insert](#region_ssl_policies.insert)
  * [Region_ssl_policies.list](#region_ssl_policies.list)
  * [Region_ssl_policies.list_available_features](#region_ssl_policies.list_available_features)
  * [Region_ssl_policies.patch](#region_ssl_policies.patch)
  * [Region_target_http_proxies.delete](#region_target_http_proxies.delete)
  * [Region_target_http_proxies.get](#region_target_http_proxies.get)
  * [Region_target_http_proxies.insert](#region_target_http_proxies.insert)
  * [Region_target_http_proxies.list](#region_target_http_proxies.list)
  * [Region_target_http_proxies.set_url_map](#region_target_http_proxies.set_url_map)
  * [Region_target_https_proxies.delete](#region_target_https_proxies.delete)
  * [Region_target_https_proxies.get](#region_target_https_proxies.get)
  * [Region_target_https_proxies.insert](#region_target_https_proxies.insert)
  * [Region_target_https_proxies.list](#region_target_https_proxies.list)
  * [Region_target_https_proxies.patch](#region_target_https_proxies.patch)
  * [Region_target_https_proxies.set_ssl_certificates](#region_target_https_proxies.set_ssl_certificates)
  * [Region_target_https_proxies.set_url_map](#region_target_https_proxies.set_url_map)
  * [Region_target_tcp_proxies.delete](#region_target_tcp_proxies.delete)
  * [Region_target_tcp_proxies.get](#region_target_tcp_proxies.get)
  * [Region_target_tcp_proxies.insert](#region_target_tcp_proxies.insert)
  * [Region_target_tcp_proxies.list](#region_target_tcp_proxies.list)
  * [Region_url_maps.delete](#region_url_maps.delete)
  * [Region_url_maps.get](#region_url_maps.get)
  * [Region_url_maps.insert](#region_url_maps.insert)
  * [Region_url_maps.list](#region_url_maps.list)
  * [Region_url_maps.patch](#region_url_maps.patch)
  * [Region_url_maps.update](#region_url_maps.update)
  * [Region_url_maps.validate](#region_url_maps.validate)
  * [Regions.get](#regions.get)
  * [Regions.list](#regions.list)
  * [Reservations.aggregated_list](#reservations.aggregated_list)
  * [Reservations.delete](#reservations.delete)
  * [Reservations.get](#reservations.get)
  * [Reservations.get_iam_policy](#reservations.get_iam_policy)
  * [Reservations.insert](#reservations.insert)
  * [Reservations.list](#reservations.list)
  * [Reservations.resize](#reservations.resize)
  * [Reservations.set_iam_policy](#reservations.set_iam_policy)
  * [Reservations.test_iam_permissions](#reservations.test_iam_permissions)
  * [Reservations.update](#reservations.update)
  * [Resource_policies.aggregated_list](#resource_policies.aggregated_list)
  * [Resource_policies.delete](#resource_policies.delete)
  * [Resource_policies.get](#resource_policies.get)
  * [Resource_policies.get_iam_policy](#resource_policies.get_iam_policy)
  * [Resource_policies.insert](#resource_policies.insert)
  * [Resource_policies.list](#resource_policies.list)
  * [Resource_policies.set_iam_policy](#resource_policies.set_iam_policy)
  * [Resource_policies.test_iam_permissions](#resource_policies.test_iam_permissions)
  * [Routers.aggregated_list](#routers.aggregated_list)
  * [Routers.delete](#routers.delete)
  * [Routers.get](#routers.get)
  * [Routers.get_nat_mapping_info](#routers.get_nat_mapping_info)
  * [Routers.get_router_status](#routers.get_router_status)
  * [Routers.insert](#routers.insert)
  * [Routers.list](#routers.list)
  * [Routers.patch](#routers.patch)
  * [Routers.preview](#routers.preview)
  * [Routers.update](#routers.update)
  * [Routes.delete](#routes.delete)
  * [Routes.get](#routes.get)
  * [Routes.insert](#routes.insert)
  * [Routes.list](#routes.list)
  * [Security_policies.add_rule](#security_policies.add_rule)
  * [Security_policies.aggregated_list](#security_policies.aggregated_list)
  * [Security_policies.delete](#security_policies.delete)
  * [Security_policies.get](#security_policies.get)
  * [Security_policies.get_rule](#security_policies.get_rule)
  * [Security_policies.insert](#security_policies.insert)
  * [Security_policies.list](#security_policies.list)
  * [Security_policies.list_preconfigured_expression_sets](#security_policies.list_preconfigured_expression_sets)
  * [Security_policies.patch](#security_policies.patch)
  * [Security_policies.patch_rule](#security_policies.patch_rule)
  * [Security_policies.remove_rule](#security_policies.remove_rule)
  * [Security_policies.set_labels](#security_policies.set_labels)
  * [Service_attachments.aggregated_list](#service_attachments.aggregated_list)
  * [Service_attachments.delete](#service_attachments.delete)
  * [Service_attachments.get](#service_attachments.get)
  * [Service_attachments.get_iam_policy](#service_attachments.get_iam_policy)
  * [Service_attachments.insert](#service_attachments.insert)
  * [Service_attachments.list](#service_attachments.list)
  * [Service_attachments.patch](#service_attachments.patch)
  * [Service_attachments.set_iam_policy](#service_attachments.set_iam_policy)
  * [Service_attachments.test_iam_permissions](#service_attachments.test_iam_permissions)
  * [Snapshots.delete](#snapshots.delete)
  * [Snapshots.get](#snapshots.get)
  * [Snapshots.get_iam_policy](#snapshots.get_iam_policy)
  * [Snapshots.insert](#snapshots.insert)
  * [Snapshots.list](#snapshots.list)
  * [Snapshots.set_iam_policy](#snapshots.set_iam_policy)
  * [Snapshots.set_labels](#snapshots.set_labels)
  * [Snapshots.test_iam_permissions](#snapshots.test_iam_permissions)
  * [Ssl_certificates.aggregated_list](#ssl_certificates.aggregated_list)
  * [Ssl_certificates.delete](#ssl_certificates.delete)
  * [Ssl_certificates.get](#ssl_certificates.get)
  * [Ssl_certificates.insert](#ssl_certificates.insert)
  * [Ssl_certificates.list](#ssl_certificates.list)
  * [Ssl_policies.aggregated_list](#ssl_policies.aggregated_list)
  * [Ssl_policies.delete](#ssl_policies.delete)
  * [Ssl_policies.get](#ssl_policies.get)
  * [Ssl_policies.insert](#ssl_policies.insert)
  * [Ssl_policies.list](#ssl_policies.list)
  * [Ssl_policies.list_available_features](#ssl_policies.list_available_features)
  * [Ssl_policies.patch](#ssl_policies.patch)
  * [Subnetworks.aggregated_list](#subnetworks.aggregated_list)
  * [Subnetworks.delete](#subnetworks.delete)
  * [Subnetworks.expand_ip_cidr_range](#subnetworks.expand_ip_cidr_range)
  * [Subnetworks.get](#subnetworks.get)
  * [Subnetworks.get_iam_policy](#subnetworks.get_iam_policy)
  * [Subnetworks.insert](#subnetworks.insert)
  * [Subnetworks.list](#subnetworks.list)
  * [Subnetworks.list_usable](#subnetworks.list_usable)
  * [Subnetworks.patch](#subnetworks.patch)
  * [Subnetworks.set_iam_policy](#subnetworks.set_iam_policy)
  * [Subnetworks.set_private_ip_google_access](#subnetworks.set_private_ip_google_access)
  * [Subnetworks.test_iam_permissions](#subnetworks.test_iam_permissions)
  * [Target_grpc_proxies.delete](#target_grpc_proxies.delete)
  * [Target_grpc_proxies.get](#target_grpc_proxies.get)
  * [Target_grpc_proxies.insert](#target_grpc_proxies.insert)
  * [Target_grpc_proxies.list](#target_grpc_proxies.list)
  * [Target_grpc_proxies.patch](#target_grpc_proxies.patch)
  * [Target_http_proxies.aggregated_list](#target_http_proxies.aggregated_list)
  * [Target_http_proxies.delete](#target_http_proxies.delete)
  * [Target_http_proxies.get](#target_http_proxies.get)
  * [Target_http_proxies.insert](#target_http_proxies.insert)
  * [Target_http_proxies.list](#target_http_proxies.list)
  * [Target_http_proxies.patch](#target_http_proxies.patch)
  * [Target_http_proxies.set_url_map](#target_http_proxies.set_url_map)
  * [Target_https_proxies.aggregated_list](#target_https_proxies.aggregated_list)
  * [Target_https_proxies.delete](#target_https_proxies.delete)
  * [Target_https_proxies.get](#target_https_proxies.get)
  * [Target_https_proxies.insert](#target_https_proxies.insert)
  * [Target_https_proxies.list](#target_https_proxies.list)
  * [Target_https_proxies.patch](#target_https_proxies.patch)
  * [Target_https_proxies.set_certificate_map](#target_https_proxies.set_certificate_map)
  * [Target_https_proxies.set_quic_override](#target_https_proxies.set_quic_override)
  * [Target_https_proxies.set_ssl_certificates](#target_https_proxies.set_ssl_certificates)
  * [Target_https_proxies.set_ssl_policy](#target_https_proxies.set_ssl_policy)
  * [Target_https_proxies.set_url_map](#target_https_proxies.set_url_map)
  * [Target_instances.aggregated_list](#target_instances.aggregated_list)
  * [Target_instances.delete](#target_instances.delete)
  * [Target_instances.get](#target_instances.get)
  * [Target_instances.insert](#target_instances.insert)
  * [Target_instances.list](#target_instances.list)
  * [Target_pools.add_health_check](#target_pools.add_health_check)
  * [Target_pools.add_instance](#target_pools.add_instance)
  * [Target_pools.aggregated_list](#target_pools.aggregated_list)
  * [Target_pools.delete](#target_pools.delete)
  * [Target_pools.get](#target_pools.get)
  * [Target_pools.get_health](#target_pools.get_health)
  * [Target_pools.insert](#target_pools.insert)
  * [Target_pools.list](#target_pools.list)
  * [Target_pools.remove_health_check](#target_pools.remove_health_check)
  * [Target_pools.remove_instance](#target_pools.remove_instance)
  * [Target_pools.set_backup](#target_pools.set_backup)
  * [Target_ssl_proxies.delete](#target_ssl_proxies.delete)
  * [Target_ssl_proxies.get](#target_ssl_proxies.get)
  * [Target_ssl_proxies.insert](#target_ssl_proxies.insert)
  * [Target_ssl_proxies.list](#target_ssl_proxies.list)
  * [Target_ssl_proxies.set_backend_service](#target_ssl_proxies.set_backend_service)
  * [Target_ssl_proxies.set_certificate_map](#target_ssl_proxies.set_certificate_map)
  * [Target_ssl_proxies.set_proxy_header](#target_ssl_proxies.set_proxy_header)
  * [Target_ssl_proxies.set_ssl_certificates](#target_ssl_proxies.set_ssl_certificates)
  * [Target_ssl_proxies.set_ssl_policy](#target_ssl_proxies.set_ssl_policy)
  * [Target_tcp_proxies.aggregated_list](#target_tcp_proxies.aggregated_list)
  * [Target_tcp_proxies.delete](#target_tcp_proxies.delete)
  * [Target_tcp_proxies.get](#target_tcp_proxies.get)
  * [Target_tcp_proxies.insert](#target_tcp_proxies.insert)
  * [Target_tcp_proxies.list](#target_tcp_proxies.list)
  * [Target_tcp_proxies.set_backend_service](#target_tcp_proxies.set_backend_service)
  * [Target_tcp_proxies.set_proxy_header](#target_tcp_proxies.set_proxy_header)
  * [Target_vpn_gateways.aggregated_list](#target_vpn_gateways.aggregated_list)
  * [Target_vpn_gateways.delete](#target_vpn_gateways.delete)
  * [Target_vpn_gateways.get](#target_vpn_gateways.get)
  * [Target_vpn_gateways.insert](#target_vpn_gateways.insert)
  * [Target_vpn_gateways.list](#target_vpn_gateways.list)
  * [Target_vpn_gateways.set_labels](#target_vpn_gateways.set_labels)
  * [Url_maps.aggregated_list](#url_maps.aggregated_list)
  * [Url_maps.delete](#url_maps.delete)
  * [Url_maps.get](#url_maps.get)
  * [Url_maps.insert](#url_maps.insert)
  * [Url_maps.invalidate_cache](#url_maps.invalidate_cache)
  * [Url_maps.list](#url_maps.list)
  * [Url_maps.patch](#url_maps.patch)
  * [Url_maps.update](#url_maps.update)
  * [Url_maps.validate](#url_maps.validate)
  * [Vpn_gateways.aggregated_list](#vpn_gateways.aggregated_list)
  * [Vpn_gateways.delete](#vpn_gateways.delete)
  * [Vpn_gateways.get](#vpn_gateways.get)
  * [Vpn_gateways.get_status](#vpn_gateways.get_status)
  * [Vpn_gateways.insert](#vpn_gateways.insert)
  * [Vpn_gateways.list](#vpn_gateways.list)
  * [Vpn_gateways.set_labels](#vpn_gateways.set_labels)
  * [Vpn_gateways.test_iam_permissions](#vpn_gateways.test_iam_permissions)
  * [Vpn_tunnels.aggregated_list](#vpn_tunnels.aggregated_list)
  * [Vpn_tunnels.delete](#vpn_tunnels.delete)
  * [Vpn_tunnels.get](#vpn_tunnels.get)
  * [Vpn_tunnels.insert](#vpn_tunnels.insert)
  * [Vpn_tunnels.list](#vpn_tunnels.list)
  * [Vpn_tunnels.set_labels](#vpn_tunnels.set_labels)
  * [Zone_operations.delete](#zone_operations.delete)
  * [Zone_operations.get](#zone_operations.get)
  * [Zone_operations.list](#zone_operations.list)
  * [Zone_operations.wait](#zone_operations.wait)
  * [Zones.get](#zones.get)
  * [Zones.list](#zones.list)
  * [Addresses.aggregated_list](#addresses.aggregated_list)
  * [Addresses.delete](#addresses.delete)
  * [Addresses.insert](#addresses.insert)
  * [Addresses.list](#addresses.list)
  * [Region_operations.get](#region_operations.get)
  * [Region_operations.wait](#region_operations.wait)
  * [Quickstart](#quickstart)
  * [Quickstart.test](#quickstart.test)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Accelerator_types.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/accelerator_types.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/accelerator_types.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/accelerator_types.aggregated_list.js`


-----




### Accelerator_types.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/accelerator_types.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/accelerator_types.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/accelerator_types.get.js`


-----




### Accelerator_types.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/accelerator_types.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/accelerator_types.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/accelerator_types.list.js`


-----




### Addresses.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/addresses.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/addresses.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/addresses.aggregated_list.js`


-----




### Addresses.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/addresses.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/addresses.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/addresses.delete.js`


-----




### Addresses.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/addresses.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/addresses.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/addresses.get.js`


-----




### Addresses.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/addresses.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/addresses.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/addresses.insert.js`


-----




### Addresses.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/addresses.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/addresses.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/addresses.list.js`


-----




### Addresses.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/addresses.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/addresses.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/addresses.set_labels.js`


-----




### Autoscalers.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.aggregated_list.js`


-----




### Autoscalers.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.delete.js`


-----




### Autoscalers.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.get.js`


-----




### Autoscalers.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.insert.js`


-----




### Autoscalers.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.list.js`


-----




### Autoscalers.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.patch.js`


-----




### Autoscalers.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/autoscalers.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/autoscalers.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/autoscalers.update.js`


-----




### Backend_buckets.add_signed_url_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.add_signed_url_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.add_signed_url_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.add_signed_url_key.js`


-----




### Backend_buckets.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.delete.js`


-----




### Backend_buckets.delete_signed_url_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.delete_signed_url_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.delete_signed_url_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.delete_signed_url_key.js`


-----




### Backend_buckets.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.get.js`


-----




### Backend_buckets.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.insert.js`


-----




### Backend_buckets.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.list.js`


-----




### Backend_buckets.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.patch.js`


-----




### Backend_buckets.set_edge_security_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.set_edge_security_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.set_edge_security_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.set_edge_security_policy.js`


-----




### Backend_buckets.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_buckets.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_buckets.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_buckets.update.js`


-----




### Backend_services.add_signed_url_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.add_signed_url_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.add_signed_url_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.add_signed_url_key.js`


-----




### Backend_services.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.aggregated_list.js`


-----




### Backend_services.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.delete.js`


-----




### Backend_services.delete_signed_url_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.delete_signed_url_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.delete_signed_url_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.delete_signed_url_key.js`


-----




### Backend_services.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.get.js`


-----




### Backend_services.get_health

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.get_health.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.get_health.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.get_health.js`


-----




### Backend_services.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.get_iam_policy.js`


-----




### Backend_services.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.insert.js`


-----




### Backend_services.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.list.js`


-----




### Backend_services.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.patch.js`


-----




### Backend_services.set_edge_security_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.set_edge_security_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.set_edge_security_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.set_edge_security_policy.js`


-----




### Backend_services.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.set_iam_policy.js`


-----




### Backend_services.set_security_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.set_security_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.set_security_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.set_security_policy.js`


-----




### Backend_services.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/backend_services.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/backend_services.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/backend_services.update.js`


-----




### Disk_types.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disk_types.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disk_types.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disk_types.aggregated_list.js`


-----




### Disk_types.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disk_types.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disk_types.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disk_types.get.js`


-----




### Disk_types.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disk_types.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disk_types.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disk_types.list.js`


-----




### Disks.add_resource_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.add_resource_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.add_resource_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.add_resource_policies.js`


-----




### Disks.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.aggregated_list.js`


-----




### Disks.create_snapshot

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.create_snapshot.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.create_snapshot.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.create_snapshot.js`


-----




### Disks.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.delete.js`


-----




### Disks.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.get.js`


-----




### Disks.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.get_iam_policy.js`


-----




### Disks.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.insert.js`


-----




### Disks.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.list.js`


-----




### Disks.remove_resource_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.remove_resource_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.remove_resource_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.remove_resource_policies.js`


-----




### Disks.resize

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.resize.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.resize.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.resize.js`


-----




### Disks.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.set_iam_policy.js`


-----




### Disks.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.set_labels.js`


-----




### Disks.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/disks.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/disks.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/disks.test_iam_permissions.js`


-----




### External_vpn_gateways.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.delete.js`


-----




### External_vpn_gateways.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.get.js`


-----




### External_vpn_gateways.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.insert.js`


-----




### External_vpn_gateways.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.list.js`


-----




### External_vpn_gateways.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.set_labels.js`


-----




### External_vpn_gateways.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/external_vpn_gateways.test_iam_permissions.js`


-----




### Firewall_policies.add_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.add_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.add_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.add_association.js`


-----




### Firewall_policies.add_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.add_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.add_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.add_rule.js`


-----




### Firewall_policies.clone_rules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.clone_rules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.clone_rules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.clone_rules.js`


-----




### Firewall_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.delete.js`


-----




### Firewall_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.get.js`


-----




### Firewall_policies.get_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_association.js`


-----




### Firewall_policies.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_iam_policy.js`


-----




### Firewall_policies.get_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.get_rule.js`


-----




### Firewall_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.insert.js`


-----




### Firewall_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.list.js`


-----




### Firewall_policies.list_associations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.list_associations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.list_associations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.list_associations.js`


-----




### Firewall_policies.move

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.move.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.move.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.move.js`


-----




### Firewall_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.patch.js`


-----




### Firewall_policies.patch_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.patch_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.patch_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.patch_rule.js`


-----




### Firewall_policies.remove_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.remove_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.remove_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.remove_association.js`


-----




### Firewall_policies.remove_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.remove_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.remove_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.remove_rule.js`


-----




### Firewall_policies.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.set_iam_policy.js`


-----




### Firewall_policies.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewall_policies.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewall_policies.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewall_policies.test_iam_permissions.js`


-----




### Firewalls.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewalls.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewalls.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewalls.delete.js`


-----




### Firewalls.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewalls.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewalls.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewalls.get.js`


-----




### Firewalls.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewalls.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewalls.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewalls.insert.js`


-----




### Firewalls.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewalls.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewalls.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewalls.list.js`


-----




### Firewalls.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewalls.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewalls.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewalls.patch.js`


-----




### Firewalls.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/firewalls.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/firewalls.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/firewalls.update.js`


-----




### Forwarding_rules.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.aggregated_list.js`


-----




### Forwarding_rules.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.delete.js`


-----




### Forwarding_rules.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.get.js`


-----




### Forwarding_rules.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.insert.js`


-----




### Forwarding_rules.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.list.js`


-----




### Forwarding_rules.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.patch.js`


-----




### Forwarding_rules.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.set_labels.js`


-----




### Forwarding_rules.set_target

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/forwarding_rules.set_target.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/forwarding_rules.set_target.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/forwarding_rules.set_target.js`


-----




### Global_addresses.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_addresses.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_addresses.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_addresses.delete.js`


-----




### Global_addresses.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_addresses.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_addresses.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_addresses.get.js`


-----




### Global_addresses.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_addresses.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_addresses.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_addresses.insert.js`


-----




### Global_addresses.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_addresses.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_addresses.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_addresses.list.js`


-----




### Global_addresses.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_addresses.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_addresses.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_addresses.set_labels.js`


-----




### Global_forwarding_rules.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.delete.js`


-----




### Global_forwarding_rules.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.get.js`


-----




### Global_forwarding_rules.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.insert.js`


-----




### Global_forwarding_rules.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.list.js`


-----




### Global_forwarding_rules.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.patch.js`


-----




### Global_forwarding_rules.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.set_labels.js`


-----




### Global_forwarding_rules.set_target

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.set_target.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.set_target.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_forwarding_rules.set_target.js`


-----




### Global_network_endpoint_groups.attach_network_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.attach_network_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.attach_network_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.attach_network_endpoints.js`


-----




### Global_network_endpoint_groups.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.delete.js`


-----




### Global_network_endpoint_groups.detach_network_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.detach_network_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.detach_network_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.detach_network_endpoints.js`


-----




### Global_network_endpoint_groups.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.get.js`


-----




### Global_network_endpoint_groups.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.insert.js`


-----




### Global_network_endpoint_groups.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.list.js`


-----




### Global_network_endpoint_groups.list_network_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.list_network_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.list_network_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_network_endpoint_groups.list_network_endpoints.js`


-----




### Global_operations.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_operations.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_operations.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_operations.aggregated_list.js`


-----




### Global_operations.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_operations.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_operations.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_operations.delete.js`


-----




### Global_operations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_operations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_operations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_operations.get.js`


-----




### Global_operations.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_operations.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_operations.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_operations.list.js`


-----




### Global_operations.wait

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_operations.wait.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_operations.wait.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_operations.wait.js`


-----




### Global_organization_operations.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_organization_operations.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_organization_operations.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_organization_operations.delete.js`


-----




### Global_organization_operations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_organization_operations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_organization_operations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_organization_operations.get.js`


-----




### Global_organization_operations.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_organization_operations.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_organization_operations.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_organization_operations.list.js`


-----




### Global_public_delegated_prefixes.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.delete.js`


-----




### Global_public_delegated_prefixes.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.get.js`


-----




### Global_public_delegated_prefixes.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.insert.js`


-----




### Global_public_delegated_prefixes.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.list.js`


-----




### Global_public_delegated_prefixes.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/global_public_delegated_prefixes.patch.js`


-----




### Health_checks.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.aggregated_list.js`


-----




### Health_checks.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.delete.js`


-----




### Health_checks.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.get.js`


-----




### Health_checks.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.insert.js`


-----




### Health_checks.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.list.js`


-----




### Health_checks.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.patch.js`


-----




### Health_checks.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/health_checks.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/health_checks.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/health_checks.update.js`


-----




### Image_family_views.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/image_family_views.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/image_family_views.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/image_family_views.get.js`


-----




### Images.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.delete.js`


-----




### Images.deprecate

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.deprecate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.deprecate.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.deprecate.js`


-----




### Images.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.get.js`


-----




### Images.get_from_family

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.get_from_family.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.get_from_family.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.get_from_family.js`


-----




### Images.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.get_iam_policy.js`


-----




### Images.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.insert.js`


-----




### Images.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.list.js`


-----




### Images.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.patch.js`


-----




### Images.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.set_iam_policy.js`


-----




### Images.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.set_labels.js`


-----




### Images.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/images.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/images.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/images.test_iam_permissions.js`


-----




### Instance_group_managers.abandon_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.abandon_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.abandon_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.abandon_instances.js`


-----




### Instance_group_managers.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.aggregated_list.js`


-----




### Instance_group_managers.apply_updates_to_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.apply_updates_to_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.apply_updates_to_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.apply_updates_to_instances.js`


-----




### Instance_group_managers.create_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.create_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.create_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.create_instances.js`


-----




### Instance_group_managers.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete.js`


-----




### Instance_group_managers.delete_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete_instances.js`


-----




### Instance_group_managers.delete_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.delete_per_instance_configs.js`


-----




### Instance_group_managers.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.get.js`


-----




### Instance_group_managers.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.insert.js`


-----




### Instance_group_managers.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list.js`


-----




### Instance_group_managers.list_errors

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_errors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_errors.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_errors.js`


-----




### Instance_group_managers.list_managed_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_managed_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_managed_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_managed_instances.js`


-----




### Instance_group_managers.list_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.list_per_instance_configs.js`


-----




### Instance_group_managers.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.patch.js`


-----




### Instance_group_managers.patch_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.patch_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.patch_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.patch_per_instance_configs.js`


-----




### Instance_group_managers.recreate_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.recreate_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.recreate_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.recreate_instances.js`


-----




### Instance_group_managers.resize

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.resize.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.resize.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.resize.js`


-----




### Instance_group_managers.set_instance_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.set_instance_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.set_instance_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.set_instance_template.js`


-----




### Instance_group_managers.set_target_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.set_target_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.set_target_pools.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.set_target_pools.js`


-----




### Instance_group_managers.update_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_group_managers.update_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_group_managers.update_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_group_managers.update_per_instance_configs.js`


-----




### Instance_groups.add_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.add_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.add_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.add_instances.js`


-----




### Instance_groups.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.aggregated_list.js`


-----




### Instance_groups.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.delete.js`


-----




### Instance_groups.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.get.js`


-----




### Instance_groups.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.insert.js`


-----




### Instance_groups.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.list.js`


-----




### Instance_groups.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.list_instances.js`


-----




### Instance_groups.remove_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.remove_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.remove_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.remove_instances.js`


-----




### Instance_groups.set_named_ports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_groups.set_named_ports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_groups.set_named_ports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_groups.set_named_ports.js`


-----




### Instance_templates.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.delete.js`


-----




### Instance_templates.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.get.js`


-----




### Instance_templates.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.get_iam_policy.js`


-----




### Instance_templates.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.insert.js`


-----




### Instance_templates.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.list.js`


-----




### Instance_templates.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.set_iam_policy.js`


-----




### Instance_templates.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instance_templates.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instance_templates.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instance_templates.test_iam_permissions.js`


-----




### Instances.add_access_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.add_access_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.add_access_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.add_access_config.js`


-----




### Instances.add_resource_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.add_resource_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.add_resource_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.add_resource_policies.js`


-----




### Instances.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.aggregated_list.js`


-----




### Instances.attach_disk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.attach_disk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.attach_disk.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.attach_disk.js`


-----




### Instances.bulk_insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.bulk_insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.bulk_insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.bulk_insert.js`


-----




### Instances.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.delete.js`


-----




### Instances.delete_access_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.delete_access_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.delete_access_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.delete_access_config.js`


-----




### Instances.detach_disk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.detach_disk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.detach_disk.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.detach_disk.js`


-----




### Instances.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get.js`


-----




### Instances.get_effective_firewalls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get_effective_firewalls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get_effective_firewalls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get_effective_firewalls.js`


-----




### Instances.get_guest_attributes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get_guest_attributes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get_guest_attributes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get_guest_attributes.js`


-----




### Instances.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get_iam_policy.js`


-----




### Instances.get_screenshot

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get_screenshot.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get_screenshot.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get_screenshot.js`


-----




### Instances.get_serial_port_output

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get_serial_port_output.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get_serial_port_output.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get_serial_port_output.js`


-----




### Instances.get_shielded_instance_identity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.get_shielded_instance_identity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.get_shielded_instance_identity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.get_shielded_instance_identity.js`


-----




### Instances.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.insert.js`


-----




### Instances.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.list.js`


-----




### Instances.list_referrers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.list_referrers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.list_referrers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.list_referrers.js`


-----




### Instances.remove_resource_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.remove_resource_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.remove_resource_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.remove_resource_policies.js`


-----




### Instances.reset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.reset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.reset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.reset.js`


-----




### Instances.resume

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.resume.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.resume.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.resume.js`


-----




### Instances.send_diagnostic_interrupt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.send_diagnostic_interrupt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.send_diagnostic_interrupt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.send_diagnostic_interrupt.js`


-----




### Instances.set_deletion_protection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_deletion_protection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_deletion_protection.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_deletion_protection.js`


-----




### Instances.set_disk_auto_delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_disk_auto_delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_disk_auto_delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_disk_auto_delete.js`


-----




### Instances.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_iam_policy.js`


-----




### Instances.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_labels.js`


-----




### Instances.set_machine_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_machine_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_machine_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_machine_resources.js`


-----




### Instances.set_machine_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_machine_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_machine_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_machine_type.js`


-----




### Instances.set_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_metadata.js`


-----




### Instances.set_min_cpu_platform

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_min_cpu_platform.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_min_cpu_platform.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_min_cpu_platform.js`


-----




### Instances.set_scheduling

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_scheduling.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_scheduling.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_scheduling.js`


-----




### Instances.set_service_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_service_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_service_account.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_service_account.js`


-----




### Instances.set_shielded_instance_integrity_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_shielded_instance_integrity_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_shielded_instance_integrity_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_shielded_instance_integrity_policy.js`


-----




### Instances.set_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.set_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.set_tags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.set_tags.js`


-----




### Instances.simulate_maintenance_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.simulate_maintenance_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.simulate_maintenance_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.simulate_maintenance_event.js`


-----




### Instances.start

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.start.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.start.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.start.js`


-----




### Instances.start_with_encryption_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.start_with_encryption_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.start_with_encryption_key.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.start_with_encryption_key.js`


-----




### Instances.stop

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.stop.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.stop.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.stop.js`


-----




### Instances.suspend

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.suspend.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.suspend.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.suspend.js`


-----




### Instances.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.test_iam_permissions.js`


-----




### Instances.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.update.js`


-----




### Instances.update_access_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.update_access_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.update_access_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.update_access_config.js`


-----




### Instances.update_display_device

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.update_display_device.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.update_display_device.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.update_display_device.js`


-----




### Instances.update_network_interface

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.update_network_interface.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.update_network_interface.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.update_network_interface.js`


-----




### Instances.update_shielded_instance_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/instances.update_shielded_instance_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/instances.update_shielded_instance_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/instances.update_shielded_instance_config.js`


-----




### Interconnect_attachments.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.aggregated_list.js`


-----




### Interconnect_attachments.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.delete.js`


-----




### Interconnect_attachments.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.get.js`


-----




### Interconnect_attachments.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.insert.js`


-----




### Interconnect_attachments.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.list.js`


-----




### Interconnect_attachments.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.patch.js`


-----




### Interconnect_attachments.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_attachments.set_labels.js`


-----




### Interconnect_locations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_locations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_locations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_locations.get.js`


-----




### Interconnect_locations.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnect_locations.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnect_locations.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnect_locations.list.js`


-----




### Interconnects.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.delete.js`


-----




### Interconnects.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.get.js`


-----




### Interconnects.get_diagnostics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.get_diagnostics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.get_diagnostics.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.get_diagnostics.js`


-----




### Interconnects.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.insert.js`


-----




### Interconnects.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.list.js`


-----




### Interconnects.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.patch.js`


-----




### Interconnects.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/interconnects.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/interconnects.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/interconnects.set_labels.js`


-----




### License_codes.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/license_codes.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/license_codes.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/license_codes.get.js`


-----




### License_codes.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/license_codes.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/license_codes.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/license_codes.test_iam_permissions.js`


-----




### Licenses.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.delete.js`


-----




### Licenses.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.get.js`


-----




### Licenses.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.get_iam_policy.js`


-----




### Licenses.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.insert.js`


-----




### Licenses.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.list.js`


-----




### Licenses.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.set_iam_policy.js`


-----




### Licenses.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/licenses.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/licenses.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/licenses.test_iam_permissions.js`


-----




### Machine_images.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.delete.js`


-----




### Machine_images.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.get.js`


-----




### Machine_images.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.get_iam_policy.js`


-----




### Machine_images.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.insert.js`


-----




### Machine_images.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.list.js`


-----




### Machine_images.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.set_iam_policy.js`


-----




### Machine_images.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_images.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_images.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_images.test_iam_permissions.js`


-----




### Machine_types.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_types.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_types.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_types.aggregated_list.js`


-----




### Machine_types.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_types.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_types.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_types.get.js`


-----




### Machine_types.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/machine_types.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/machine_types.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/machine_types.list.js`


-----




### Network_attachments.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.aggregated_list.js`


-----




### Network_attachments.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.delete.js`


-----




### Network_attachments.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.get.js`


-----




### Network_attachments.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.get_iam_policy.js`


-----




### Network_attachments.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.insert.js`


-----




### Network_attachments.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.list.js`


-----




### Network_attachments.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.set_iam_policy.js`


-----




### Network_attachments.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_attachments.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_attachments.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_attachments.test_iam_permissions.js`


-----




### Network_edge_security_services.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.aggregated_list.js`


-----




### Network_edge_security_services.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.delete.js`


-----




### Network_edge_security_services.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.get.js`


-----




### Network_edge_security_services.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.insert.js`


-----




### Network_edge_security_services.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_edge_security_services.patch.js`


-----




### Network_endpoint_groups.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.aggregated_list.js`


-----




### Network_endpoint_groups.attach_network_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.attach_network_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.attach_network_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.attach_network_endpoints.js`


-----




### Network_endpoint_groups.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.delete.js`


-----




### Network_endpoint_groups.detach_network_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.detach_network_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.detach_network_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.detach_network_endpoints.js`


-----




### Network_endpoint_groups.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.get.js`


-----




### Network_endpoint_groups.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.insert.js`


-----




### Network_endpoint_groups.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.list.js`


-----




### Network_endpoint_groups.list_network_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.list_network_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.list_network_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.list_network_endpoints.js`


-----




### Network_endpoint_groups.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_endpoint_groups.test_iam_permissions.js`


-----




### Network_firewall_policies.add_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.add_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.add_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.add_association.js`


-----




### Network_firewall_policies.add_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.add_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.add_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.add_rule.js`


-----




### Network_firewall_policies.clone_rules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.clone_rules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.clone_rules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.clone_rules.js`


-----




### Network_firewall_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.delete.js`


-----




### Network_firewall_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get.js`


-----




### Network_firewall_policies.get_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_association.js`


-----




### Network_firewall_policies.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_iam_policy.js`


-----




### Network_firewall_policies.get_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.get_rule.js`


-----




### Network_firewall_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.insert.js`


-----




### Network_firewall_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.list.js`


-----




### Network_firewall_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.patch.js`


-----




### Network_firewall_policies.patch_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.patch_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.patch_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.patch_rule.js`


-----




### Network_firewall_policies.remove_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.remove_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.remove_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.remove_association.js`


-----




### Network_firewall_policies.remove_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.remove_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.remove_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.remove_rule.js`


-----




### Network_firewall_policies.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.set_iam_policy.js`


-----




### Network_firewall_policies.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/network_firewall_policies.test_iam_permissions.js`


-----




### Networks.add_peering

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.add_peering.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.add_peering.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.add_peering.js`


-----




### Networks.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.delete.js`


-----




### Networks.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.get.js`


-----




### Networks.get_effective_firewalls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.get_effective_firewalls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.get_effective_firewalls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.get_effective_firewalls.js`


-----




### Networks.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.insert.js`


-----




### Networks.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.list.js`


-----




### Networks.list_peering_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.list_peering_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.list_peering_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.list_peering_routes.js`


-----




### Networks.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.patch.js`


-----




### Networks.remove_peering

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.remove_peering.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.remove_peering.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.remove_peering.js`


-----




### Networks.switch_to_custom_mode

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.switch_to_custom_mode.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.switch_to_custom_mode.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.switch_to_custom_mode.js`


-----




### Networks.update_peering

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/networks.update_peering.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/networks.update_peering.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/networks.update_peering.js`


-----




### Node_groups.add_nodes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.add_nodes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.add_nodes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.add_nodes.js`


-----




### Node_groups.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.aggregated_list.js`


-----




### Node_groups.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.delete.js`


-----




### Node_groups.delete_nodes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.delete_nodes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.delete_nodes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.delete_nodes.js`


-----




### Node_groups.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.get.js`


-----




### Node_groups.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.get_iam_policy.js`


-----




### Node_groups.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.insert.js`


-----




### Node_groups.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.list.js`


-----




### Node_groups.list_nodes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.list_nodes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.list_nodes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.list_nodes.js`


-----




### Node_groups.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.patch.js`


-----




### Node_groups.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.set_iam_policy.js`


-----




### Node_groups.set_node_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.set_node_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.set_node_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.set_node_template.js`


-----




### Node_groups.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_groups.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_groups.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_groups.test_iam_permissions.js`


-----




### Node_templates.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.aggregated_list.js`


-----




### Node_templates.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.delete.js`


-----




### Node_templates.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.get.js`


-----




### Node_templates.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.get_iam_policy.js`


-----




### Node_templates.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.insert.js`


-----




### Node_templates.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.list.js`


-----




### Node_templates.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.set_iam_policy.js`


-----




### Node_templates.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_templates.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_templates.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_templates.test_iam_permissions.js`


-----




### Node_types.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_types.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_types.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_types.aggregated_list.js`


-----




### Node_types.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_types.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_types.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_types.get.js`


-----




### Node_types.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/node_types.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/node_types.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/node_types.list.js`


-----




### Packet_mirrorings.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.aggregated_list.js`


-----




### Packet_mirrorings.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.delete.js`


-----




### Packet_mirrorings.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.get.js`


-----




### Packet_mirrorings.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.insert.js`


-----




### Packet_mirrorings.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.list.js`


-----




### Packet_mirrorings.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.patch.js`


-----




### Packet_mirrorings.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/packet_mirrorings.test_iam_permissions.js`


-----




### Projects.disable_xpn_host

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.disable_xpn_host.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.disable_xpn_host.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.disable_xpn_host.js`


-----




### Projects.disable_xpn_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.disable_xpn_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.disable_xpn_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.disable_xpn_resource.js`


-----




### Projects.enable_xpn_host

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.enable_xpn_host.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.enable_xpn_host.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.enable_xpn_host.js`


-----




### Projects.enable_xpn_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.enable_xpn_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.enable_xpn_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.enable_xpn_resource.js`


-----




### Projects.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.get.js`


-----




### Projects.get_xpn_host

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.get_xpn_host.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.get_xpn_host.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.get_xpn_host.js`


-----




### Projects.get_xpn_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.get_xpn_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.get_xpn_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.get_xpn_resources.js`


-----




### Projects.list_xpn_hosts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.list_xpn_hosts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.list_xpn_hosts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.list_xpn_hosts.js`


-----




### Projects.move_disk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.move_disk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.move_disk.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.move_disk.js`


-----




### Projects.move_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.move_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.move_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.move_instance.js`


-----




### Projects.set_common_instance_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.set_common_instance_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.set_common_instance_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.set_common_instance_metadata.js`


-----




### Projects.set_default_network_tier

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.set_default_network_tier.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.set_default_network_tier.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.set_default_network_tier.js`


-----




### Projects.set_usage_export_bucket

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/projects.set_usage_export_bucket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/projects.set_usage_export_bucket.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/projects.set_usage_export_bucket.js`


-----




### Public_advertised_prefixes.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.delete.js`


-----




### Public_advertised_prefixes.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.get.js`


-----




### Public_advertised_prefixes.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.insert.js`


-----




### Public_advertised_prefixes.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.list.js`


-----




### Public_advertised_prefixes.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_advertised_prefixes.patch.js`


-----




### Public_delegated_prefixes.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.aggregated_list.js`


-----




### Public_delegated_prefixes.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.delete.js`


-----




### Public_delegated_prefixes.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.get.js`


-----




### Public_delegated_prefixes.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.insert.js`


-----




### Public_delegated_prefixes.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.list.js`


-----




### Public_delegated_prefixes.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/public_delegated_prefixes.patch.js`


-----




### Region_autoscalers.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_autoscalers.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_autoscalers.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_autoscalers.delete.js`


-----




### Region_autoscalers.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_autoscalers.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_autoscalers.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_autoscalers.get.js`


-----




### Region_autoscalers.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_autoscalers.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_autoscalers.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_autoscalers.insert.js`


-----




### Region_autoscalers.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_autoscalers.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_autoscalers.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_autoscalers.list.js`


-----




### Region_autoscalers.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_autoscalers.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_autoscalers.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_autoscalers.patch.js`


-----




### Region_autoscalers.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_autoscalers.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_autoscalers.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_autoscalers.update.js`


-----




### Region_backend_services.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.delete.js`


-----




### Region_backend_services.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.get.js`


-----




### Region_backend_services.get_health

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.get_health.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.get_health.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.get_health.js`


-----




### Region_backend_services.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.get_iam_policy.js`


-----




### Region_backend_services.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.insert.js`


-----




### Region_backend_services.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.list.js`


-----




### Region_backend_services.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.patch.js`


-----




### Region_backend_services.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.set_iam_policy.js`


-----




### Region_backend_services.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_backend_services.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_backend_services.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_backend_services.update.js`


-----




### Region_commitments.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_commitments.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_commitments.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_commitments.aggregated_list.js`


-----




### Region_commitments.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_commitments.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_commitments.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_commitments.get.js`


-----




### Region_commitments.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_commitments.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_commitments.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_commitments.insert.js`


-----




### Region_commitments.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_commitments.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_commitments.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_commitments.list.js`


-----




### Region_commitments.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_commitments.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_commitments.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_commitments.update.js`


-----




### Region_disk_types.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disk_types.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disk_types.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disk_types.get.js`


-----




### Region_disk_types.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disk_types.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disk_types.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disk_types.list.js`


-----




### Region_disks.add_resource_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.add_resource_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.add_resource_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.add_resource_policies.js`


-----




### Region_disks.create_snapshot

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.create_snapshot.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.create_snapshot.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.create_snapshot.js`


-----




### Region_disks.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.delete.js`


-----




### Region_disks.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.get.js`


-----




### Region_disks.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.get_iam_policy.js`


-----




### Region_disks.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.insert.js`


-----




### Region_disks.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.list.js`


-----




### Region_disks.remove_resource_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.remove_resource_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.remove_resource_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.remove_resource_policies.js`


-----




### Region_disks.resize

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.resize.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.resize.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.resize.js`


-----




### Region_disks.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.set_iam_policy.js`


-----




### Region_disks.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.set_labels.js`


-----




### Region_disks.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_disks.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_disks.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_disks.test_iam_permissions.js`


-----




### Region_health_check_services.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_check_services.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_check_services.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_check_services.delete.js`


-----




### Region_health_check_services.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_check_services.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_check_services.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_check_services.get.js`


-----




### Region_health_check_services.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_check_services.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_check_services.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_check_services.insert.js`


-----




### Region_health_check_services.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_check_services.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_check_services.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_check_services.list.js`


-----




### Region_health_check_services.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_check_services.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_check_services.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_check_services.patch.js`


-----




### Region_health_checks.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_checks.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_checks.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_checks.delete.js`


-----




### Region_health_checks.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_checks.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_checks.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_checks.get.js`


-----




### Region_health_checks.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_checks.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_checks.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_checks.insert.js`


-----




### Region_health_checks.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_checks.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_checks.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_checks.list.js`


-----




### Region_health_checks.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_checks.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_checks.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_checks.patch.js`


-----




### Region_health_checks.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_health_checks.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_health_checks.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_health_checks.update.js`


-----




### Region_instance_group_managers.abandon_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.abandon_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.abandon_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.abandon_instances.js`


-----




### Region_instance_group_managers.apply_updates_to_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.apply_updates_to_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.apply_updates_to_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.apply_updates_to_instances.js`


-----




### Region_instance_group_managers.create_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.create_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.create_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.create_instances.js`


-----




### Region_instance_group_managers.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete.js`


-----




### Region_instance_group_managers.delete_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete_instances.js`


-----




### Region_instance_group_managers.delete_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.delete_per_instance_configs.js`


-----




### Region_instance_group_managers.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.get.js`


-----




### Region_instance_group_managers.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.insert.js`


-----




### Region_instance_group_managers.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list.js`


-----




### Region_instance_group_managers.list_errors

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_errors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_errors.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_errors.js`


-----




### Region_instance_group_managers.list_managed_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_managed_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_managed_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_managed_instances.js`


-----




### Region_instance_group_managers.list_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.list_per_instance_configs.js`


-----




### Region_instance_group_managers.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.patch.js`


-----




### Region_instance_group_managers.patch_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.patch_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.patch_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.patch_per_instance_configs.js`


-----




### Region_instance_group_managers.recreate_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.recreate_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.recreate_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.recreate_instances.js`


-----




### Region_instance_group_managers.resize

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.resize.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.resize.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.resize.js`


-----




### Region_instance_group_managers.set_instance_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.set_instance_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.set_instance_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.set_instance_template.js`


-----




### Region_instance_group_managers.set_target_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.set_target_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.set_target_pools.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.set_target_pools.js`


-----




### Region_instance_group_managers.update_per_instance_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.update_per_instance_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.update_per_instance_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_group_managers.update_per_instance_configs.js`


-----




### Region_instance_groups.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_groups.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_groups.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_groups.get.js`


-----




### Region_instance_groups.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_groups.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_groups.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_groups.list.js`


-----




### Region_instance_groups.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_groups.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_groups.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_groups.list_instances.js`


-----




### Region_instance_groups.set_named_ports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instance_groups.set_named_ports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instance_groups.set_named_ports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instance_groups.set_named_ports.js`


-----




### Region_instances.bulk_insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_instances.bulk_insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_instances.bulk_insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_instances.bulk_insert.js`


-----




### Region_network_endpoint_groups.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.delete.js`


-----




### Region_network_endpoint_groups.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.get.js`


-----




### Region_network_endpoint_groups.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.insert.js`


-----




### Region_network_endpoint_groups.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_endpoint_groups.list.js`


-----




### Region_network_firewall_policies.add_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.add_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.add_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.add_association.js`


-----




### Region_network_firewall_policies.add_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.add_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.add_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.add_rule.js`


-----




### Region_network_firewall_policies.clone_rules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.clone_rules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.clone_rules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.clone_rules.js`


-----




### Region_network_firewall_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.delete.js`


-----




### Region_network_firewall_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get.js`


-----




### Region_network_firewall_policies.get_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_association.js`


-----




### Region_network_firewall_policies.get_effective_firewalls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_effective_firewalls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_effective_firewalls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_effective_firewalls.js`


-----




### Region_network_firewall_policies.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_iam_policy.js`


-----




### Region_network_firewall_policies.get_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.get_rule.js`


-----




### Region_network_firewall_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.insert.js`


-----




### Region_network_firewall_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.list.js`


-----




### Region_network_firewall_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.patch.js`


-----




### Region_network_firewall_policies.patch_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.patch_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.patch_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.patch_rule.js`


-----




### Region_network_firewall_policies.remove_association

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.remove_association.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.remove_association.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.remove_association.js`


-----




### Region_network_firewall_policies.remove_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.remove_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.remove_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.remove_rule.js`


-----




### Region_network_firewall_policies.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.set_iam_policy.js`


-----




### Region_network_firewall_policies.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_network_firewall_policies.test_iam_permissions.js`


-----




### Region_notification_endpoints.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.delete.js`


-----




### Region_notification_endpoints.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.get.js`


-----




### Region_notification_endpoints.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.insert.js`


-----




### Region_notification_endpoints.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_notification_endpoints.list.js`


-----




### Region_operations.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_operations.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_operations.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_operations.delete.js`


-----




### Region_operations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_operations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_operations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_operations.get.js`


-----




### Region_operations.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_operations.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_operations.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_operations.list.js`


-----




### Region_operations.wait

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_operations.wait.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_operations.wait.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_operations.wait.js`


-----




### Region_security_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_security_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_security_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_security_policies.delete.js`


-----




### Region_security_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_security_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_security_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_security_policies.get.js`


-----




### Region_security_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_security_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_security_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_security_policies.insert.js`


-----




### Region_security_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_security_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_security_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_security_policies.list.js`


-----




### Region_security_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_security_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_security_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_security_policies.patch.js`


-----




### Region_ssl_certificates.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.delete.js`


-----




### Region_ssl_certificates.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.get.js`


-----




### Region_ssl_certificates.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.insert.js`


-----




### Region_ssl_certificates.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_certificates.list.js`


-----




### Region_ssl_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.delete.js`


-----




### Region_ssl_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.get.js`


-----




### Region_ssl_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.insert.js`


-----




### Region_ssl_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.list.js`


-----




### Region_ssl_policies.list_available_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.list_available_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.list_available_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.list_available_features.js`


-----




### Region_ssl_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_ssl_policies.patch.js`


-----




### Region_target_http_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.delete.js`


-----




### Region_target_http_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.get.js`


-----




### Region_target_http_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.insert.js`


-----




### Region_target_http_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.list.js`


-----




### Region_target_http_proxies.set_url_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.set_url_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.set_url_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_http_proxies.set_url_map.js`


-----




### Region_target_https_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.delete.js`


-----




### Region_target_https_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.get.js`


-----




### Region_target_https_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.insert.js`


-----




### Region_target_https_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.list.js`


-----




### Region_target_https_proxies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.patch.js`


-----




### Region_target_https_proxies.set_ssl_certificates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.set_ssl_certificates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.set_ssl_certificates.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.set_ssl_certificates.js`


-----




### Region_target_https_proxies.set_url_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.set_url_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.set_url_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_https_proxies.set_url_map.js`


-----




### Region_target_tcp_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.delete.js`


-----




### Region_target_tcp_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.get.js`


-----




### Region_target_tcp_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.insert.js`


-----




### Region_target_tcp_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_target_tcp_proxies.list.js`


-----




### Region_url_maps.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.delete.js`


-----




### Region_url_maps.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.get.js`


-----




### Region_url_maps.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.insert.js`


-----




### Region_url_maps.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.list.js`


-----




### Region_url_maps.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.patch.js`


-----




### Region_url_maps.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.update.js`


-----




### Region_url_maps.validate

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/region_url_maps.validate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/region_url_maps.validate.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/region_url_maps.validate.js`


-----




### Regions.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/regions.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/regions.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/regions.get.js`


-----




### Regions.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/regions.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/regions.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/regions.list.js`


-----




### Reservations.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.aggregated_list.js`


-----




### Reservations.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.delete.js`


-----




### Reservations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.get.js`


-----




### Reservations.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.get_iam_policy.js`


-----




### Reservations.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.insert.js`


-----




### Reservations.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.list.js`


-----




### Reservations.resize

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.resize.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.resize.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.resize.js`


-----




### Reservations.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.set_iam_policy.js`


-----




### Reservations.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.test_iam_permissions.js`


-----




### Reservations.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/reservations.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/reservations.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/reservations.update.js`


-----




### Resource_policies.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.aggregated_list.js`


-----




### Resource_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.delete.js`


-----




### Resource_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.get.js`


-----




### Resource_policies.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.get_iam_policy.js`


-----




### Resource_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.insert.js`


-----




### Resource_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.list.js`


-----




### Resource_policies.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.set_iam_policy.js`


-----




### Resource_policies.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/resource_policies.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/resource_policies.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/resource_policies.test_iam_permissions.js`


-----




### Routers.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.aggregated_list.js`


-----




### Routers.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.delete.js`


-----




### Routers.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.get.js`


-----




### Routers.get_nat_mapping_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.get_nat_mapping_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.get_nat_mapping_info.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.get_nat_mapping_info.js`


-----




### Routers.get_router_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.get_router_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.get_router_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.get_router_status.js`


-----




### Routers.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.insert.js`


-----




### Routers.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.list.js`


-----




### Routers.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.patch.js`


-----




### Routers.preview

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.preview.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.preview.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.preview.js`


-----




### Routers.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routers.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routers.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routers.update.js`


-----




### Routes.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routes.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routes.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routes.delete.js`


-----




### Routes.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routes.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routes.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routes.get.js`


-----




### Routes.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routes.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routes.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routes.insert.js`


-----




### Routes.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/routes.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/routes.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/routes.list.js`


-----




### Security_policies.add_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.add_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.add_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.add_rule.js`


-----




### Security_policies.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.aggregated_list.js`


-----




### Security_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.delete.js`


-----




### Security_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.get.js`


-----




### Security_policies.get_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.get_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.get_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.get_rule.js`


-----




### Security_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.insert.js`


-----




### Security_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.list.js`


-----




### Security_policies.list_preconfigured_expression_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.list_preconfigured_expression_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.list_preconfigured_expression_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.list_preconfigured_expression_sets.js`


-----




### Security_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.patch.js`


-----




### Security_policies.patch_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.patch_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.patch_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.patch_rule.js`


-----




### Security_policies.remove_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.remove_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.remove_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.remove_rule.js`


-----




### Security_policies.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/security_policies.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/security_policies.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/security_policies.set_labels.js`


-----




### Service_attachments.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.aggregated_list.js`


-----




### Service_attachments.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.delete.js`


-----




### Service_attachments.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.get.js`


-----




### Service_attachments.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.get_iam_policy.js`


-----




### Service_attachments.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.insert.js`


-----




### Service_attachments.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.list.js`


-----




### Service_attachments.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.patch.js`


-----




### Service_attachments.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.set_iam_policy.js`


-----




### Service_attachments.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/service_attachments.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/service_attachments.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/service_attachments.test_iam_permissions.js`


-----




### Snapshots.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.delete.js`


-----




### Snapshots.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.get.js`


-----




### Snapshots.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.get_iam_policy.js`


-----




### Snapshots.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.insert.js`


-----




### Snapshots.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.list.js`


-----




### Snapshots.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.set_iam_policy.js`


-----




### Snapshots.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.set_labels.js`


-----




### Snapshots.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/snapshots.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/snapshots.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/snapshots.test_iam_permissions.js`


-----




### Ssl_certificates.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_certificates.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_certificates.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_certificates.aggregated_list.js`


-----




### Ssl_certificates.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_certificates.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_certificates.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_certificates.delete.js`


-----




### Ssl_certificates.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_certificates.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_certificates.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_certificates.get.js`


-----




### Ssl_certificates.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_certificates.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_certificates.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_certificates.insert.js`


-----




### Ssl_certificates.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_certificates.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_certificates.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_certificates.list.js`


-----




### Ssl_policies.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.aggregated_list.js`


-----




### Ssl_policies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.delete.js`


-----




### Ssl_policies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.get.js`


-----




### Ssl_policies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.insert.js`


-----




### Ssl_policies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.list.js`


-----




### Ssl_policies.list_available_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.list_available_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.list_available_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.list_available_features.js`


-----




### Ssl_policies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/ssl_policies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/ssl_policies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/ssl_policies.patch.js`


-----




### Subnetworks.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.aggregated_list.js`


-----




### Subnetworks.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.delete.js`


-----




### Subnetworks.expand_ip_cidr_range

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.expand_ip_cidr_range.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.expand_ip_cidr_range.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.expand_ip_cidr_range.js`


-----




### Subnetworks.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.get.js`


-----




### Subnetworks.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.get_iam_policy.js`


-----




### Subnetworks.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.insert.js`


-----




### Subnetworks.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.list.js`


-----




### Subnetworks.list_usable

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.list_usable.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.list_usable.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.list_usable.js`


-----




### Subnetworks.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.patch.js`


-----




### Subnetworks.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.set_iam_policy.js`


-----




### Subnetworks.set_private_ip_google_access

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.set_private_ip_google_access.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.set_private_ip_google_access.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.set_private_ip_google_access.js`


-----




### Subnetworks.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/subnetworks.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/subnetworks.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/subnetworks.test_iam_permissions.js`


-----




### Target_grpc_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.delete.js`


-----




### Target_grpc_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.get.js`


-----




### Target_grpc_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.insert.js`


-----




### Target_grpc_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.list.js`


-----




### Target_grpc_proxies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_grpc_proxies.patch.js`


-----




### Target_http_proxies.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.aggregated_list.js`


-----




### Target_http_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.delete.js`


-----




### Target_http_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.get.js`


-----




### Target_http_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.insert.js`


-----




### Target_http_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.list.js`


-----




### Target_http_proxies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.patch.js`


-----




### Target_http_proxies.set_url_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_http_proxies.set_url_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_http_proxies.set_url_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_http_proxies.set_url_map.js`


-----




### Target_https_proxies.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.aggregated_list.js`


-----




### Target_https_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.delete.js`


-----




### Target_https_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.get.js`


-----




### Target_https_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.insert.js`


-----




### Target_https_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.list.js`


-----




### Target_https_proxies.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.patch.js`


-----




### Target_https_proxies.set_certificate_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_certificate_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_certificate_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_certificate_map.js`


-----




### Target_https_proxies.set_quic_override

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_quic_override.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_quic_override.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_quic_override.js`


-----




### Target_https_proxies.set_ssl_certificates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_ssl_certificates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_ssl_certificates.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_ssl_certificates.js`


-----




### Target_https_proxies.set_ssl_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_ssl_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_ssl_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_ssl_policy.js`


-----




### Target_https_proxies.set_url_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_url_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_url_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_https_proxies.set_url_map.js`


-----




### Target_instances.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_instances.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_instances.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_instances.aggregated_list.js`


-----




### Target_instances.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_instances.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_instances.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_instances.delete.js`


-----




### Target_instances.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_instances.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_instances.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_instances.get.js`


-----




### Target_instances.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_instances.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_instances.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_instances.insert.js`


-----




### Target_instances.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_instances.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_instances.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_instances.list.js`


-----




### Target_pools.add_health_check

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.add_health_check.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.add_health_check.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.add_health_check.js`


-----




### Target_pools.add_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.add_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.add_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.add_instance.js`


-----




### Target_pools.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.aggregated_list.js`


-----




### Target_pools.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.delete.js`


-----




### Target_pools.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.get.js`


-----




### Target_pools.get_health

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.get_health.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.get_health.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.get_health.js`


-----




### Target_pools.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.insert.js`


-----




### Target_pools.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.list.js`


-----




### Target_pools.remove_health_check

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.remove_health_check.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.remove_health_check.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.remove_health_check.js`


-----




### Target_pools.remove_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.remove_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.remove_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.remove_instance.js`


-----




### Target_pools.set_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_pools.set_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_pools.set_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_pools.set_backup.js`


-----




### Target_ssl_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.delete.js`


-----




### Target_ssl_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.get.js`


-----




### Target_ssl_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.insert.js`


-----




### Target_ssl_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.list.js`


-----




### Target_ssl_proxies.set_backend_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_backend_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_backend_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_backend_service.js`


-----




### Target_ssl_proxies.set_certificate_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_certificate_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_certificate_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_certificate_map.js`


-----




### Target_ssl_proxies.set_proxy_header

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_proxy_header.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_proxy_header.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_proxy_header.js`


-----




### Target_ssl_proxies.set_ssl_certificates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_ssl_certificates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_ssl_certificates.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_ssl_certificates.js`


-----




### Target_ssl_proxies.set_ssl_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_ssl_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_ssl_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_ssl_proxies.set_ssl_policy.js`


-----




### Target_tcp_proxies.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.aggregated_list.js`


-----




### Target_tcp_proxies.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.delete.js`


-----




### Target_tcp_proxies.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.get.js`


-----




### Target_tcp_proxies.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.insert.js`


-----




### Target_tcp_proxies.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.list.js`


-----




### Target_tcp_proxies.set_backend_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.set_backend_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.set_backend_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.set_backend_service.js`


-----




### Target_tcp_proxies.set_proxy_header

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.set_proxy_header.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.set_proxy_header.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_tcp_proxies.set_proxy_header.js`


-----




### Target_vpn_gateways.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.aggregated_list.js`


-----




### Target_vpn_gateways.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.delete.js`


-----




### Target_vpn_gateways.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.get.js`


-----




### Target_vpn_gateways.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.insert.js`


-----




### Target_vpn_gateways.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.list.js`


-----




### Target_vpn_gateways.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/target_vpn_gateways.set_labels.js`


-----




### Url_maps.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.aggregated_list.js`


-----




### Url_maps.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.delete.js`


-----




### Url_maps.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.get.js`


-----




### Url_maps.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.insert.js`


-----




### Url_maps.invalidate_cache

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.invalidate_cache.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.invalidate_cache.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.invalidate_cache.js`


-----




### Url_maps.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.list.js`


-----




### Url_maps.patch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.patch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.patch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.patch.js`


-----




### Url_maps.update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.update.js`


-----




### Url_maps.validate

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/url_maps.validate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/url_maps.validate.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/url_maps.validate.js`


-----




### Vpn_gateways.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.aggregated_list.js`


-----




### Vpn_gateways.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.delete.js`


-----




### Vpn_gateways.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.get.js`


-----




### Vpn_gateways.get_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.get_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.get_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.get_status.js`


-----




### Vpn_gateways.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.insert.js`


-----




### Vpn_gateways.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.list.js`


-----




### Vpn_gateways.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.set_labels.js`


-----




### Vpn_gateways.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_gateways.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_gateways.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_gateways.test_iam_permissions.js`


-----




### Vpn_tunnels.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.aggregated_list.js`


-----




### Vpn_tunnels.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.delete.js`


-----




### Vpn_tunnels.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.get.js`


-----




### Vpn_tunnels.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.insert.js`


-----




### Vpn_tunnels.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.list.js`


-----




### Vpn_tunnels.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/vpn_tunnels.set_labels.js`


-----




### Zone_operations.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/zone_operations.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/zone_operations.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/zone_operations.delete.js`


-----




### Zone_operations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/zone_operations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/zone_operations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/zone_operations.get.js`


-----




### Zone_operations.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/zone_operations.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/zone_operations.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/zone_operations.list.js`


-----




### Zone_operations.wait

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/zone_operations.wait.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/zone_operations.wait.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/zone_operations.wait.js`


-----




### Zones.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/zones.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/zones.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/zones.get.js`


-----




### Zones.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1/zones.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1/zones.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1/zones.list.js`


-----




### Addresses.aggregated_list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1small/addresses.aggregated_list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1small/addresses.aggregated_list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1small/addresses.aggregated_list.js`


-----




### Addresses.delete

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1small/addresses.delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1small/addresses.delete.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1small/addresses.delete.js`


-----




### Addresses.insert

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1small/addresses.insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1small/addresses.insert.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1small/addresses.insert.js`


-----




### Addresses.list

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1small/addresses.list.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1small/addresses.list.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1small/addresses.list.js`


-----




### Region_operations.get

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1small/region_operations.get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1small/region_operations.get.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1small/region_operations.get.js`


-----




### Region_operations.wait

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/generated/v1small/region_operations.wait.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/generated/v1small/region_operations.wait.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/generated/v1small/region_operations.wait.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/quickstart.js`


-----




### Quickstart.test

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-compute/samples/test/quickstart.test.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-compute/samples/test/quickstart.test.js,samples/README.md)

__Usage:__


`node packages/google-cloud-compute/samples/test/quickstart.test.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/compute
