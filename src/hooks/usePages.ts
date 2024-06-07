import React, { useContext, useState } from 'react'
import { ShopifyContext } from '../context'
import { useLoadingWrapper } from '../hooks'

const usePages = () => {
	const { shopifyClient } = useContext(ShopifyContext)
	const { errors, loading, loadingWrapper } = useLoadingWrapper()

	const [page, setPage] = useState<Record<string, any>>(null)

	const findPage = async (handle) => {
		const response = await loadingWrapper(() => shopifyClient.findPage(handle))
		setPage(response?.data)
		return response?.data
	}

	return {
		loading,
		errors,
		page,
		findPage,
	}
}

export default usePages
