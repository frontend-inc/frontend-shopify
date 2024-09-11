import React, { useContext } from 'react'
import { ShopifyContext } from '../context'

const useShopify = () => {

  const {   
    logo,
    domain,
    shopUrl,
    storefrontAccessToken,
    customerPortalUrl,
    apiVersion
  } = useContext(ShopifyContext)

  return {
    logo,
    domain,
    shopUrl,
    storefrontAccessToken,
    customerPortalUrl,
    apiVersion
  }
}

export default useShopify