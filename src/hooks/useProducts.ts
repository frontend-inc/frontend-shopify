import React, { useContext, useState } from 'react'
import { ShopifyContext } from '../context'
import { MetafieldIdentifierType, ShopifyProductType } from '../types'
import { useLoadingWrapper } from '../hooks'

const useProducts = () => {
	const { shopifyClient } = useContext(ShopifyContext)

	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [cursor, setCursor] = useState()
	const [hasNextPage, setHasNextPage] = useState(false)
  const [product, setProduct] = useState<ShopifyProductType>()
	const [products, setProducts] = useState<ShopifyProductType[]>()
  const [filters, setFilters] = useState([])

  const filterInStock = () => {
		setFilters([
			...filters,
			{
				available: true,
			}
		])		
	}

	const filterOutOfStock = () => {
		setFilters([
			...filters,
			{
				available: false,
			},
		])		
	}

	const filterShopifyProductType = (productType: string) =>{
		setFilters([
			...filters,
			{
				productType: productType,
			},
		])		
	}

	const filterVendor = (productVendor: string) => {
		setFilters([
			...filters,
			{
				productVendor: productVendor,
			},
		])		
	}

	const filterVariantOption = (name: string, value: string) => {
		setFilters([
			...filters,
			{
				variantOption: {
					name: name,
					value: value,
				},
			},
		])		
	}

	const filterMetafield = (
		namespace: string,
		key: string,
		value: string
	) => {
		setFilters([
			...filters,
			{
				productMetafield: {
					namespace: namespace,
					key: key,
					value: value,
				},
			},
		])		
	}

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

  // https://shopify.dev/docs/api/storefront/2024-10/queries/search
	const searchProducts = async (searchParams) => {
		const { query, first, after, reverse=false, filters, sortKey='RELEVANCE' } = searchParams

		const resp = await loadingWrapper(() =>
			shopifyClient.searchProducts({
				first,
				query,
				sortKey,
				reverse,
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
