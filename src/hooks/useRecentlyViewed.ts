import React, { useState, useEffect, useContext } from 'react'
import { CookieValueTypes, getCookie, setCookie } from 'cookies-next'
import { ProductType } from '../types'
import { ShopContext } from '../context'


const useRecentlyViewed = () => {

  const { domain } = useContext(ShopContext)
  let cookie = `${domain}-recently-viewed`
  
  const [products, setProducts] = useState<ProductType[]>([])  

  const viewProduct = (product) => {
    let newProduct = {
      id: product?.id,
      handle: product?.handle,
      images: product?.images,
      title: product?.title,      
      priceRange: { 
        minVariantPrice: {
          amount: product?.priceRange?.minVariantPrice?.amount,
        },
        maxVariantPrice: {
          amount: product?.priceRange?.maxVariantPrice?.amount,
        }
      }      
    }
    let recentlyViewed = [...products]
    let index = products?.findIndex((p) => p?.handle === product?.handle)
    if(index > -1){
      recentlyViewed = products?.splice(index, 1)  
      recentlyViewed.unshift(newProduct)
    }else{
      recentlyViewed.unshift(newProduct)
    }
    // @ts-ignore
    setCookie(cookie, JSON.stringify(recentlyViewed))
  }

  const removeProduct = (product) => {
    let recentlyViewed = products?.filter((p) => p?.handle !== product?.handle)    
    // @ts-ignore
    setCookie(cookie, JSON.stringify(recentlyViewed))
  }

  useEffect(() => {
    let localCookie = getCookie(cookie)
    if(localCookie){
      // @ts-ignore
      let recentlyViewed = JSON.parse(localCookie) || []
      setProducts(recentlyViewed)
    }
  }, [])

  return {
    products,
    viewProduct,
    removeProduct,
  }
}

export default useRecentlyViewed