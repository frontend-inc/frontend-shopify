import React, { useContext } from 'react'
import { ShopifyContext } from '../context'
import { useLoadingWrapper } from '../hooks'

const useShop = () => {
	const { shopifyClient, shop, setShop } = useContext(ShopifyContext)

	const { errors, loading, loadingWrapper } = useLoadingWrapper()

	const findShop = async () => {
		let response = await loadingWrapper(() => shopifyClient.findShop())
		setShop(response?.data)
		return response?.data
	}

	return {
		loading,
		errors,
		shop,
		findShop,
	}
}

export default useShop
