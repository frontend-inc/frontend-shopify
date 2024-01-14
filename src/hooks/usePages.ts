import React, { useContext, useState } from 'react'
import { ShopContext } from '../context'
import { useLoadingWrapper } from '../hooks'

const usePages = () => {
	const { shopifyClient } = useContext(ShopContext)
	const { errors, loading, loadingWrapper } = useLoadingWrapper()

	const [page, setPage] = useState<Record<string, any>>(null)

	const fetchPage = async (handle) => {
		const response = await loadingWrapper(() => shopifyClient.findPage(handle))
		setPage(response?.data)
		return response?.data
	}

	return {
		loading,
		errors,
		page,
		fetchPage,
	}
}

export default usePages
