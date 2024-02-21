
export const findPriceFilter = (filters) => {
	return filters
		.filter((filter) => filter?.priceRange)
		.map((filter) => filter?.priceRange)
}

export const findAvailableFilter = (filters) => {
	return filters.find(
		(filter) => filter?.available === true || filter?.available === false
	)?.available
}

export const findProductTypeFilters = (filters) => {
	return filters
		.filter((filter) => filter?.productType)
		.map((filter) => filter?.productType)
}

export const findVendorFilters = (filters) => {
	return filters
		.filter((filter) => filter?.productVendor)
		.map((filter) => filter?.productVendor)
}

export const findColorFilters = (filters) => {
	return findVariantFilters('color', filters)
}

export const findSizeFilters = (filters) => {
	return findVariantFilters('size', filters)
}

export const findMaterialFilters = (filters) => {
	return findVariantFilters('material', filters)
}

export const findStyleFilters = (filters) => {
	return findVariantFilters('style', filters)
}

export const findTagFilters = (filters) => {
	return filters.filter((filter) => filter?.tag).map((filter) => filter?.tag)
}

export const findVariantFilters = (name, filters) => {
	return filters
		.filter((filter) => filter?.variantOption?.name === name)
		.map((filter) => filter?.variantOption?.value)
}
