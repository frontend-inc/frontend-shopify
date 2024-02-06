import React, { useState, useContext } from 'react'
import { ShopContext } from '../context'
import { useLoadingWrapper } from '../hooks'

const useBlogs = () => {
	const { shopifyClient } = useContext(ShopContext)

	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [articles, setArticles] = useState()
	const [blog, setBlog] = useState()
	const [blogs, setBlogs] = useState()

	const findBlog = async (handle, perPage = 250) => {
		const response = await loadingWrapper(() =>
			shopifyClient.findBlog(handle, perPage)
		)
		setBlog(response?.data)
		setArticles(response?.data?.articles)
		return response?.data
	}

	const findBlogs = async (perPage = 250) => {
		const response = await loadingWrapper(() =>
			shopifyClient.findBlogs(perPage)
		)
		setBlogs(response?.data)
		return response?.data
	}

	return {
		articles,
		blog,
		blogs,
		findBlog,
		findBlogs,
		loading,
		errors,
	}
}

export default useBlogs
