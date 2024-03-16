import React, { useContext, useState } from 'react'
import { ShopContext } from '../context'
import { MetafieldIdentifierType, ProductType } from '../types'
import { useLoadingWrapper } from '../hooks'

const useProducts = () => {
	const { shopifyClient } = useContext(ShopContext)

	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [cursor, setCursor] = useState()
	const [hasNextPage, setHasNextPage] = useState(false)
  const [product, setProduct] = useState<ProductType>()
	const [products, setProducts] = useState<ProductType[]>()

	const findProduct = async (handle: string, metafields?: MetafieldIdentifierType[]) => {    
		setProduct(null)
		const resp = await loadingWrapper(() => shopifyClient.findProduct(handle, metafields))
		setProduct(resp?.data)
	}

	const findProductById = async (id) => {
		setProduct(null)
		const resp = await loadingWrapper(() => shopifyClient.findProductById(id))
		setProduct(resp?.data)
	}

	const findProducts = async (productsQuery) => {
		const {
			first,
			reverse,
			sortKey = 'RELEVANCE',
			query,
			after,
		} = productsQuery

		const resp = await loadingWrapper(() =>
			shopifyClient.findProducts({
				first,
				query,
				sortKey,
				reverse,
				after,
			})
		)
		setHasNextPage(resp?.meta?.hasNextPage)
		setCursor(resp?.meta?.endCursor)
		const results = resp?.data
		if (after) {
			setProducts([...products, ...results])
		} else {
			setProducts(results)
		}
		return resp?.data
	}

	const searchProducts = async (searchParams) => {
		const { query, first, after, filters } = searchParams

		const resp = await loadingWrapper(() =>
			shopifyClient.searchProducts({
				first,
				query,
				sortKey: 'RELEVANCE',
				reverse: false,
        filters,
				after,
			})
		)
		setHasNextPage(resp?.meta?.hasNextPage)
		setCursor(resp?.meta?.endCursor)
		const results = resp?.data
		if (after) {
			setProducts([...products, ...results])
		} else {
			setProducts(results)
		}
		return resp?.data
	}

	const findProductRecommendations = async (productId) => {
		const resp = await loadingWrapper(() =>
			shopifyClient.findProductRecommendations(productId)
		)
		setProducts(resp?.data)
	}

	return {
		product,
		products,
		setProduct,
		setProducts,
		findProduct,
		findProducts,
		findProductById,
		findProductRecommendations,
		searchProducts,
		hasNextPage,
		cursor,
		setCursor,
		loading,
		errors,
	}
}

export default useProducts
