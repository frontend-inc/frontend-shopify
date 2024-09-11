import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import ShopifyContext from './ShopifyContext'
import { ShopifyCheckoutType, ShopifyCustomerType, ShopifyCartType } from '../types'
import { createClient, useApollo } from '../client'
import { getCookie } from 'cookies-next'

type ShopifyProviderProps = {
  enableShopify?: boolean
	domain: string
	storefrontAccessToken: string
	children: React.ReactNode
	logo?: string
	shopUrl: string
	apiVersion?: string
  customerPortalUrl?: string
}

const ShopifyProvider = (props: ShopifyProviderProps) => {
	const {
		children,
    enableShopify,
		logo,
		domain,
		shopUrl,
		storefrontAccessToken,
    customerPortalUrl,
		apiVersion = '2024-04',
	} = props
  
  
	const [accessToken, setAccessToken] = useState()
	const [alert, setAlert] = useState()

	const [cart, setCart] = useState<ShopifyCartType>(null)
	const [checkout, setCheckout] = useState<ShopifyCheckoutType>(null)
	const [customer, setCustomer] = useState<ShopifyCustomerType | any>({})

	const [expiresAt, setExpiresAt] = useState()
	const [loading, setLoading] = useState(false)
	const [lineItemTotal, setLineItemTotal] = useState(0)
	const [shop, setShop] = useState()

	const [authOpen, setAuthOpen] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)

	const toggleAuth = () => setAuthOpen(!authOpen)
	const toggleCart = () => setCartOpen(!cartOpen)
	const toggleMenu = () => setMenuOpen(!menuOpen)
	const toggleSearch = () => setSearchOpen(!searchOpen)

	let value = {
    enableShopify,    
    domain,
    storefrontAccessToken,
		accessToken,
		setAccessToken,
		alert,
		setAlert,
		expiresAt,
		setExpiresAt,
		cart,
		setCart,
		customer,
		setCustomer,
    customerPortalUrl,
		shopUrl,
		logo,
		loading,
		setLoading,
		shop,
		setShop,
		authOpen,
		setAuthOpen,
		toggleAuth,
		cartOpen,
		setCartOpen,
		toggleCart,
		searchOpen,
		setSearchOpen,
		toggleSearch,
		menuOpen,
		setMenuOpen,
		toggleMenu,
		checkout,
		setCheckout,
		lineItemTotal,
		setLineItemTotal,
    shopifyClient: null,
	}

  if(!enableShopify) {
    return(
      <ShopifyContext.Provider value={value}>
        {children}
      </ShopifyContext.Provider>
    )
  }


  let authCookie = `${domain}-shopify-access-token`
	const fetchAccessToken = () => String(getCookie(authCookie))

	const apolloClient = useApollo(domain, storefrontAccessToken, apiVersion)	
  const shopifyClient = createClient(
    domain,
    storefrontAccessToken,
    fetchAccessToken,
    apiVersion
  )

  value = {
    ...value,
    shopifyClient,
  }

	return (
		<ShopifyContext.Provider value={value}>
			<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
		</ShopifyContext.Provider>
	)
}

export default ShopifyProvider
