import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context'
import { Product } from '../types'
import { useLoadingWrapper } from '../hooks'

const useProducts = () => {
	const { shopifyClient } = useContext(ShopContext)

	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [cursor, setCursor] = useState()
	const [hasNextPage, setHasNextPage] = useState(false)
  const [product, setProduct] = useState<Product>()
	const [products, setProducts] = useState<Product[]>()

	const fetchProduct = async (handle) => {
		setProduct(null)
		const resp = await loadingWrapper(() => shopifyClient.findProduct(handle))
		setProduct(resp?.data)
	}

	const fetchProductById = async (id) => {
		setProduct(null)
		const resp = await loadingWrapper(() => shopifyClient.findProductById(id))
		setProduct(resp?.data)
	}

	const fetchProducts = async (productsQuery) => {
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
		const { query, first, after } = searchParams

		const resp = await loadingWrapper(() =>
			shopifyClient.searchProducts({
				first,
				query,
				sortKey: 'RELEVANCE',
				reverse: false,
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

	const fetchProductRecommendations = async (productId) => {
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
		fetchProduct,
		fetchProducts,
		fetchProductById,
		fetchProductRecommendations,
		searchProducts,
		hasNextPage,
		cursor,
		setCursor,
		loading,
		errors,
	}
}

export default useProducts
