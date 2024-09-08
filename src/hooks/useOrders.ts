import React, { useContext, useState } from 'react'
import { ShopifyContext } from '../context'
import { useLoadingWrapper } from '../hooks'
import { ShopifyOrderType, QueryParamsType } from '../types'

const useOrders = () => {
	const { shopifyClient } = useContext(ShopifyContext)
	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [order, setOrder] = useState<any | ShopifyOrderType>({})
	const [orders, setOrders] = useState<ShopifyOrderType[]>(null)

	const findCustomerOrder = async (orderId) => {
		const response = await loadingWrapper(() =>
			shopifyClient.findCustomerOrders({
				first: 1,
				query: `id:${orderId}`,
			})
		)
		if (response?.data) {
			setOrder(response?.data[0])
		}
		return response?.data
	}

	const findCustomerOrders = async (queryParams: QueryParamsType) => {
		const {
			first = 20,
			after,
			sortKey = 'CREATED_AT',
			reverse = false,
			query,
		} = queryParams || {}

		const response = await loadingWrapper(() =>
			shopifyClient.findCustomerOrders({
				first,
				after,
				sortKey,
				reverse,
				query,
			})
		)
		if (response?.data) {
			setOrders(response?.data)
		}
		return response?.data
	}

	return {
		loading,
		errors,
		order,
		orders,
		findCustomerOrder,
		findCustomerOrders,
	}
}

export default useOrders
