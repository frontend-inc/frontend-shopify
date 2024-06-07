import React, { useState, useEffect, useContext } from 'react'
import { ShopifyContext } from '../context'
import { getCookie, setCookie } from 'cookies-next'
import { CartLineType } from '../types'
import { useLoadingWrapper } from '../hooks'

const useCart = () => {
	const { domain, shopifyClient, cart, setCart } = useContext(ShopifyContext)
	const { errors, loading, loadingWrapper } = useLoadingWrapper()  
  let cookie = `${domain}-cart-id`

	const cartBuyerIdentityUpdate = async (customerAccessToken, email) => {
		let response = await loadingWrapper(() =>
			shopifyClient.updateCartBuyerIdentity(
				cart?.id,
				customerAccessToken,
				email
			)
		)
		setCart(response?.data)
		return response?.data
	}

	const cartLineAdd = async (line: CartLineType) => {
		return await cartLinesAdd([line])
	}

	const cartLinesAdd = async (lines: CartLineType[]) => {
		const response = await loadingWrapper(() =>
			shopifyClient.cartLinesAdd(cart?.id, lines)
		)
		setCart(response?.data)
		return response?.data
	}

	const cartLineRemove = async (lineId) => {
		const response = await loadingWrapper(() =>
			shopifyClient.cartLineRemove(cart?.id, lineId)
		)
		setCart(response?.data)
		return response?.data
	}

	const cartLinesRemove = async (lineIds) => {
		const response = await loadingWrapper(() =>
			shopifyClient.removeCartLines(cart?.id, lineIds)
		)
		setCart(response?.data)
		return response?.data
	}

  const cartLineUpdate = async (line) => {
    return await cartLinesUpdate([line])
  }

	const cartLinesUpdate = async (lines) => {
		const response = await loadingWrapper(() =>
			shopifyClient.cartLinesUpdate(cart?.id, lines)
		)
		setCart(response?.data)
		return response?.data
	}

  const cartApplyDiscountCode = async (discountCode) => {
		return await cartDiscountCodesUpdate([discountCode])		
	}

	const cartDiscountCodesUpdate = async (discountCodes) => {
		const response = await loadingWrapper(() =>
			shopifyClient.cartDiscountCodesUpdate(cart?.id, discountCodes)
		)
		setCart(response?.data)
		return response?.data
	}

  const cartRemoveDiscountCode = async (code) => {
    let newCodes = []
    if(cart?.discountCodes?.length > 0){    
      newCodes = cart?.discountCodes?.filter((discountCode) => discountCode.code != code)
    }
    return await cartDiscountCodesUpdate(newCodes)
  }

	const findCart = async (cartId) => {
		const response = await loadingWrapper(() => shopifyClient.findCart(cartId))
    if(response?.data?.cart){
		  setCart(response?.data?.cart)
      setCookie(cookie, response?.data?.cart?.id)
    }
		return response?.data?.cart
	}

	const cartFindOrCreate = async () => {
    let response
		let cartId = await getCookie(cookie)
		if (cartId) {
			response = await findCart(cartId)
			if (!response) {
				response = await cartCreate()
			}
		} else {
			response = await cartCreate()
		}
		return response
	}

	const cartCreate = async () => {
		const response = await loadingWrapper(() => shopifyClient.cartCreate())
    if(response?.data){
      setCart(response?.data)
      setCookie(cookie, response?.data?.id)
    }		
		return response?.data
	}

	useEffect(() => {    
		if(!cart?.id) {		
      cartFindOrCreate()
    }
	}, [cart])

	return {
		loading,
		errors,
		cart,
		setCart,
    cartApplyDiscountCode,
    cartBuyerIdentityUpdate,
    cartRemoveDiscountCode,
    cartCreate,
    cartDiscountCodesUpdate,    
		cartFindOrCreate,    
		cartLineAdd,
		cartLinesAdd,
		cartLineRemove,
		cartLinesRemove,
    cartLineUpdate,
		cartLinesUpdate,
    findCart,    
	}
}

export default useCart
