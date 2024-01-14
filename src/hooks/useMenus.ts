import React, { useContext, useState } from 'react'
import { ShopContext } from '../context'
import { useLoadingWrapper } from '../hooks'

const useMenus = () => {
	const { shopifyClient } = useContext(ShopContext)

	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [menu, setMenu] = useState()

	const fetchMenu = async (handle: String) => {
		const response = await loadingWrapper(() => shopifyClient.findMenu(handle))
		setMenu(response?.data)
		return response?.data
	}

	return {
		loading,
		errors,
		menu,
		fetchMenu,
	}
}

export default useMenus
