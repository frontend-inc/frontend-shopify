import React, { useState, useContext } from 'react'
import { ShopifyContext } from '../context'
import { useLoadingWrapper } from '../hooks'

const useArticles = () => {
	const { shopifyClient } = useContext(ShopifyContext)
	const { errors, loading, loadingWrapper } = useLoadingWrapper()

	const [article, setArticle] = useState<Record<string, any>>()
	const [articles, setArticles] = useState<Record<string, any>[]>()

	const findArticle = async (blogHandle, articleHandle, perPage = 250) => {
		const response = await loadingWrapper(() =>
			shopifyClient.findArticle(blogHandle, articleHandle, perPage)
		)
		setArticle(response?.data)
		return response?.data
	}

	const findArticles = async (perPage = 250) => {
		const response = await loadingWrapper(() =>
			shopifyClient.findArticles(perPage)
		)
		setArticles(response?.data)
		return response?.data
	}

	return {
		article,
		articles,
		findArticle,
		findArticles,
		loading,
		errors,
	}
}

export default useArticles
