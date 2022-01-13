// priority: 0

onEvent("jei.hide.items", event => {
	// Hide disabled Quark features.
	event.hide("#quark:stools");
	event.hide("quark:bamboo_mat");
	event.hide("quark:bamboo_mat_carpet");
	event.hide("quark:iron_rod");

	// Hide duplicate crop crates.
	event.hide("quark:beetroot_crate");
	event.hide("quark:carrot_crate");
	event.hide("quark:potato_crate");

	// Hide duplicate rope items.
	event.hide("farmersdelight:rope");
	event.hide("quark:rope");

	// Hide Quark stone types.
	event.hide("quark:chiseled_jasper_bricks");
	event.hide("quark:chiseled_limestone_bricks");
	event.hide("quark:chiseled_myalite_bricks");
	event.hide("quark:chiseled_shale_bricks");
	event.hide("quark:jasper");
	event.hide("quark:jasper_bricks");
	event.hide("quark:jasper_bricks_slab");
	event.hide("quark:jasper_bricks_stairs");
	event.hide("quark:jasper_bricks_vertical_slab");
	event.hide("quark:jasper_bricks_wall");
	event.hide("quark:jasper_pillar");
	event.hide("quark:jasper_slab");
	event.hide("quark:jasper_stairs");
	event.hide("quark:jasper_vertical_slab");
	event.hide("quark:jasper_wall");
	event.hide("quark:limestone");
	event.hide("quark:limestone_bricks");
	event.hide("quark:limestone_bricks_slab");
	event.hide("quark:limestone_bricks_stairs");
	event.hide("quark:limestone_bricks_vertical_slab");
	event.hide("quark:limestone_bricks_wall");
	event.hide("quark:limestone_pillar");
	event.hide("quark:limestone_slab");
	event.hide("quark:limestone_stairs");
	event.hide("quark:limestone_vertical_slab");
	event.hide("quark:limestone_wall");
	event.hide("quark:myalite_bricks");
	event.hide("quark:myalite_bricks_slab");
	event.hide("quark:myalite_bricks_stairs");
	event.hide("quark:myalite_bricks_vertical_slab");
	event.hide("quark:myalite_bricks_wall");
	event.hide("quark:myalite_pillar");
	event.hide("quark:polished_jasper");
	event.hide("quark:polished_jasper_slab");
	event.hide("quark:polished_jasper_stairs");
	event.hide("quark:polished_jasper_vertical_slab");
	event.hide("quark:polished_limestone");
	event.hide("quark:polished_limestone_slab");
	event.hide("quark:polished_limestone_stairs");
	event.hide("quark:polished_limestone_vertical_slab");
	event.hide("quark:polished_shale");
	event.hide("quark:polished_shale_slab");
	event.hide("quark:polished_shale_stairs");
	event.hide("quark:polished_shale_vertical_slab");
	event.hide("quark:shale");
	event.hide("quark:shale_bricks");
	event.hide("quark:shale_bricks_slab");
	event.hide("quark:shale_bricks_stairs");
	event.hide("quark:shale_bricks_vertical_slab");
	event.hide("quark:shale_bricks_wall");
	event.hide("quark:shale_pillar");
	event.hide("quark:shale_slab");
	event.hide("quark:shale_stairs");
	event.hide("quark:shale_vertical_slab");
	event.hide("quark:shale_wall");

	// Hide Quark stone variants.
	event.hide("quark:andesite_bricks");
	event.hide("quark:andesite_bricks_slab");
	event.hide("quark:andesite_bricks_stairs");
	event.hide("quark:andesite_bricks_vertical_slab");
	event.hide("quark:andesite_bricks_wall");
	event.hide("quark:andesite_pillar");
	event.hide("quark:calcite_bricks");
	event.hide("quark:calcite_bricks_slab");
	event.hide("quark:calcite_bricks_stairs");
	event.hide("quark:calcite_bricks_vertical_slab");
	event.hide("quark:calcite_bricks_wall");
	event.hide("quark:calcite_pillar");
	event.hide("quark:calcite_slab");
	event.hide("quark:calcite_stairs");
	event.hide("quark:calcite_vertical_slab");
	event.hide("quark:calcite_wall");
	event.hide("quark:chiseled_andesite_bricks");
	event.hide("quark:chiseled_calcite_bricks");
	event.hide("quark:chiseled_diorite_bricks");
	event.hide("quark:chiseled_dripstone_bricks");
	event.hide("quark:chiseled_granite_bricks");
	event.hide("quark:chiseled_tuff_bricks");
	event.hide("quark:diorite_bricks");
	event.hide("quark:diorite_bricks_slab");
	event.hide("quark:diorite_bricks_stairs");
	event.hide("quark:diorite_bricks_vertical_slab");
	event.hide("quark:diorite_bricks_wall");
	event.hide("quark:diorite_pillar");
	event.hide("quark:dripstone_block_slab");
	event.hide("quark:dripstone_block_stairs");
	event.hide("quark:dripstone_block_vertical_slab");
	event.hide("quark:dripstone_block_wall");
	event.hide("quark:dripstone_bricks");
	event.hide("quark:dripstone_bricks_slab");
	event.hide("quark:dripstone_bricks_stairs");
	event.hide("quark:dripstone_bricks_vertical_slab");
	event.hide("quark:dripstone_bricks_wall");
	event.hide("quark:dripstone_pillar");
	event.hide("quark:granite_bricks");
	event.hide("quark:granite_bricks_slab");
	event.hide("quark:granite_bricks_stairs");
	event.hide("quark:granite_bricks_vertical_slab");
	event.hide("quark:granite_bricks_wall");
	event.hide("quark:granite_pillar");
	event.hide("quark:polished_calcite");
	event.hide("quark:polished_calcite_slab");
	event.hide("quark:polished_calcite_stairs");
	event.hide("quark:polished_calcite_vertical_slab");
	event.hide("quark:polished_dripstone");
	event.hide("quark:polished_dripstone_slab");
	event.hide("quark:polished_dripstone_stairs");
	event.hide("quark:polished_dripstone_vertical_slab");
	event.hide("quark:polished_tuff");
	event.hide("quark:polished_tuff_slab");
	event.hide("quark:polished_tuff_stairs");
	event.hide("quark:polished_tuff_vertical_slab");
	event.hide("quark:tuff_bricks");
	event.hide("quark:tuff_bricks_slab");
	event.hide("quark:tuff_bricks_stairs");
	event.hide("quark:tuff_bricks_vertical_slab");
	event.hide("quark:tuff_bricks_wall");
	event.hide("quark:tuff_pillar");
	event.hide("quark:tuff_slab");
	event.hide("quark:tuff_stairs");
	event.hide("quark:tuff_vertical_slab");
	event.hide("quark:tuff_wall");
	
	// Hide Waystones items.
	event.hide("waystones:attuned_shard");
	event.hide("waystones:black_sharestone");
	event.hide("waystones:blue_sharestone");
	event.hide("waystones:bound_scroll");
	event.hide("waystones:brown_sharestone");
	event.hide("waystones:cyan_sharestone");
	event.hide("waystones:gray_sharestone");
	event.hide("waystones:green_sharestone");
	event.hide("waystones:light_blue_sharestone");
	event.hide("waystones:light_gray_sharestone");
	event.hide("waystones:lime_sharestone");
	event.hide("waystones:magenta_sharestone");
	event.hide("waystones:orange_sharestone");
	event.hide("waystones:pink_sharestone");
	event.hide("waystones:portstone");
	event.hide("waystones:purple_sharestone");
	event.hide("waystones:red_sharestone");
	event.hide("waystones:return_scroll");
	event.hide("waystones:sharestone");
	event.hide("waystones:warp_dust");
	event.hide("waystones:warp_plate");
	event.hide("waystones:warp_scroll");
	event.hide("waystones:warp_stone");
	event.hide("waystones:white_sharestone");
	event.hide("waystones:yellow_sharestone");
});
