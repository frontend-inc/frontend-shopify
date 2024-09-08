import React, { useContext, useState } from 'react'
import { ShopifyContext } from '../context'
import { useLoadingWrapper } from '../hooks'
import {
	ShopifyImageType,
	ShopifyCollectionType,
	ShopifyProductType,
} from '../types'

const PER_PAGE = 20

const useCollections = () => {
	const { shopifyClient } = useContext(ShopifyContext)

	const { errors, loading, loadingWrapper } = useLoadingWrapper()

	const [image, setShopifyImageType] = useState<ShopifyImageType>(null)
	const [cursor, setCursor] = useState<string>(null)
	const [hasNextPage, setHasNextPage] = useState(false)
	const [products, setProducts] = useState<ShopifyProductType[]>(null)
	const [collection, setCollection] = useState<ShopifyCollectionType>(null)
	const [collections, setCollections] = useState<ShopifyCollectionType[]>(null)

	const findCollection = async (handle, query?: any) => {
		const {
			first = PER_PAGE,
			filters,
			reverse = false,
			sortKey = 'COLLECTION_DEFAULT',
			after,
		} = query || {}

		const resp = await loadingWrapper(() =>
			shopifyClient.findCollection(handle, {
				first,
				filters,
				reverse,
				sortKey,
				after,
			})
		)
		setCollection(resp?.data)
		setHasNextPage(resp?.meta?.hasNextPage)
		setCursor(resp?.meta?.endCursor)
		let collectionProducts = resp?.data?.products
		if (after) {
			setProducts([...products, ...collectionProducts])
		} else {
			setProducts(collectionProducts)
		}
		setShopifyImageType(resp?.data?.image?.url)
	}

	const findCollections = async (perPage = PER_PAGE) => {
		const resp = await loadingWrapper(() =>
			shopifyClient.findCollections(perPage)
		)
		setCollections(resp?.data)
		setCursor(resp?.meta.endCursor)
		setHasNextPage(resp?.meta?.hasNextPage)
	}

	return {
		cursor,
		hasNextPage,
		setHasNextPage,
		collection,
		collections,
		findCollection,
		findCollections,
		image,
		products,
		loading,
		errors,
	}
}

export default useCollections
