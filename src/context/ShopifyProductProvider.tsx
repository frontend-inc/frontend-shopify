'use client'

import React, { useState, useEffect } from 'react'
import ShopifyProductContext from './ShopifyProductContext'
import {
	ProductVariantType,
	ShopifyProductType,
	ShopifyCollectionType,
} from '../types'

type ShopifyProductProviderProps = {
	children: React.ReactNode
  product?: ShopifyProductType
}

const ShopifyProductProvider = (props: ShopifyProductProviderProps) => {
	const { children, product: _product } = props
	const [product, setProduct] = useState<ShopifyProductType>(null)
	const [variant, setVariant] = useState<ProductVariantType>(null)
	const [collection, setCollection] = useState<ShopifyCollectionType>(null)
	const [selectedOptions, setSelectedOptions] = useState<Record<any, string>>(
		{}
	)
	const [availableForSale, setAvailableForSale] = useState(true)

	useEffect(() => {
		if (product) {
			setAvailableForSale(product.availableForSale)
		}
	}, [product])
  
  useEffect(() => {
		if (_product) {
			setProduct(_product)
		}
	}, [_product])

	const value = {
		availableForSale,
		setAvailableForSale,
		product,
		setProduct,
		variant,
		setVariant,
		collection,
		setCollection,
		selectedOptions,
		setSelectedOptions,
	}

	return (
		<ShopifyProductContext.Provider value={value}>{children}</ShopifyProductContext.Provider>
	)
}

export default ShopifyProductProvider
