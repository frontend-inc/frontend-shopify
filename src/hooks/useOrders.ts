import React, { useContext, useState } from 'react'
import { ShopContext } from '../context'
import { useLoadingWrapper } from '../hooks'
import { Order, ShopifyQueryParams } from '../types'

const useOrders = () => {
	const { shopifyClient } = useContext(ShopContext)
	const { loading, errors, loadingWrapper } = useLoadingWrapper()

	const [order, setOrder] = useState<any | Order>({})
	const [orders, setOrders] = useState<Order[]>(null)

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

	const findCustomerOrders = async (queryParams: ShopifyQueryParams) => {
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
