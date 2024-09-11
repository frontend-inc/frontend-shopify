import React, { useContext } from 'react'
import { ShopifyContext } from '../context'

const useShopify = () => {

  const {   
    enableShopify,
    logo,
    domain,
    shopUrl,
    storefrontAccessToken,
    customerPortalUrl,
    apiVersion
  } = useContext(ShopifyContext)

  return {
    enableShopify,
    logo,
    domain,
    shopUrl,
    storefrontAccessToken,
    customerPortalUrl,
    apiVersion
  }
}

export default useShopify