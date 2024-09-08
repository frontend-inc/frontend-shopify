import React, { useState, useContext } from 'react'
import { ShopifyCustomerType } from '../types'
import { useLoadingWrapper } from '../hooks'
import { ShopifyContext } from '../context'

const useCustomers = () => {
	const { shopifyClient } = useContext(ShopifyContext)
	const { errors, loading, loadingWrapper } = useLoadingWrapper()

	const [customer, setCustomer] = useState<ShopifyCustomerType>(null)

	const findCustomer = async (customerAccessToken) => {
		const resp = await loadingWrapper(() =>
			shopifyClient.findCustomer(customerAccessToken)
		)
		setCustomer(resp?.data)
		return resp?.data
	}

	const createCustomer = async ({
		firstName,
		lastName,
		email,
		password,
		acceptsMarketing = false,
	}) => {
		let resp = await loadingWrapper(() =>
			shopifyClient.createCustomer({
				firstName,
				lastName,
				email,
				password,
				acceptsMarketing,
			})
		)
		setCustomer(resp?.data)
		return resp?.data
	}

	const updateCustomer = async (customerAccessToken, customer) => {
		let resp = await loadingWrapper(() =>
			shopifyClient.updateCustomer(customerAccessToken, customer)
		)
		setCustomer(resp?.data)
		return resp?.data
	}

	return {
		loading,
		errors,
		customer,
		findCustomer,
		createCustomer,
		updateCustomer,
	}
}

export default useCustomers
