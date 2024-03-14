import React, { useState } from 'react'
import CollectionContext from './CollectionContext'
import { ProductType, CollectionType } from '../types'

type CollectionProviderProps = {
	children: React.ReactNode
}

const CollectionProvider = (props: CollectionProviderProps) => {
	const { children } = props
	const [collection, setCollection] = useState<CollectionType>(null)
	const [products, setProducts] = useState<ProductType[]>(null)
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
		<CollectionContext.Provider value={value}>
			{children}
		</CollectionContext.Provider>
	)
}

export default CollectionProvider
