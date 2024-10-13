'use client'

import React, { useState } from 'react'
import ShopifyCollectionContext from './ShopifyCollectionContext'
import { ShopifyProductType, ShopifyCollectionType } from '../types'

type ShopifyCollectionProviderProps = {
	children: React.ReactNode
}

const ShopifyCollectionProvider = (props: ShopifyCollectionProviderProps) => {
	const { children } = props
	const [collection, setCollection] = useState<ShopifyCollectionType>(null)
	const [products, setProducts] = useState<ShopifyProductType[]>(null)
	const [query, setQuery] = useState<Record<any, string>>({})

	const value = {
		query,
		setQuery,
		collection,
		setCollection,
		products,
		setProducts,
	}

	return (
		<ShopifyCollectionContext.Provider value={value}>
			{children}
		</ShopifyCollectionContext.Provider>
	)
}

export default ShopifyCollectionProvider
