import React, { useState } from 'react'
import {
	ProductCollectionFilter,
} from '../types'

// Product filtering:
// https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/products-collections/filter-products
const useSearchFilters = () => {
	const [filters, setFilters] = useState<any | ProductCollectionFilter[]>([])

	const filterInStock = () => {
		if (filters.find((f) => f.available)) {
			removeFilter(filters.find((f) => f.available))
		} else {
			addFilter({ available: true })
		}
	}

	const filterProductType = (productType: string) => {
		if (filters.find((f) => f.productType === productType)) {
			removeFilter(filters.find((f) => f.productType === productType))
		} else {
			addFilter({ productType })
		}
	}

	const filterVendor = (productVendor: string) => {
		if (filters.find((f) => f.productVendor === productVendor)) {
			removeFilter(filters.find((f) => f.productVendor === productVendor))
		} else {
			addFilter({ productVendor })
		}
	}

	const filterVariantOption = (name: string, value: string | number) => {
		if (
			filters.find(
				(f) =>
					f.variantOption?.name === name && f.variantOption?.value === value
			)
		) {
			removeFilter(filters.find((f) => f.variantOption?.name === name))
		} else {
			addFilter({
				variantOption: {
					name: name,
          //@ts-ignore
					value: value,
				},
			})
		}
	}

	const filterTag = (tag: string) => {
		if (filters.find((f) => f.tag === tag)) {
			removeFilter(filters.find((f) => f.tag === tag))
		} else {
			addFilter({ tag })
		}
	}

	const filterPrice = (min: number, max: number) => {
		if (filters.find((f) => f.price)) {
			removeFilter(filters.find((f) => f.price))
		}
		addFilter({
			//@ts-ignore
			price: {
				min,
				max,
			},
		})
	}

	const addFilter = (filter: ProductCollectionFilter) => {
		setFilters([...filters, filter])
	}

	const removeFilter = (filter: ProductCollectionFilter) => {
		setFilters(filters.filter((f) => f !== filter))
	}

	const clearFilters = () => {
		setFilters([])
	}

	return {
		filters,
		setFilters,
		addFilter,
		removeFilter,
		clearFilters,
		filterInStock,
		filterProductType,
		filterVendor,
		filterVariantOption,
		filterTag,
		filterPrice		
	}
}

export default useSearchFilters
