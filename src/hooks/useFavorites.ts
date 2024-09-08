import React, { useContext, useState, useEffect } from 'react'
import { CookieValueTypes, getCookie, setCookie } from 'cookies-next'
import { ShopifyContext } from '../context'
import { ShopifyProductType } from '../types'

type FavoritesProps = {
  product?: ShopifyProductType
  cookie?: CookieValueTypes | string
}

const useFavorites = (props?: FavoritesProps) => {

  const { product } = props || {}
  const { domain } = useContext(ShopifyContext)
  let cookie = `${domain}-favorites`

  const [favorites, setFavorites] = useState<ShopifyProductType[]>([])
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    isFavorite ? unfavorite() : favorite()
  }

  const favorite = () => {
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
    let newFavorites = [newProduct, ...favorites]
    setIsFavorite(true)
    // @ts-ignore
    setCookie(cookie, JSON.stringify(newFavorites))
  }

  const unfavorite = () => {
    let newFavorites = favorites?.filter((favorite) => favorite?.handle !== product?.handle)
    setIsFavorite(false)
    // @ts-ignore
    setCookie(cookie, JSON.stringify(newFavorites))
  }

  useEffect(() => {
    if(product && favorites){
      // @ts-ignore
        if(favorites?.find((favorite) => favorite?.handle === product?.handle)){
          setIsFavorite(true)
        }else{
          setIsFavorite(false)
        }
      }else{
        setIsFavorite(false)
      }                
  }, [product, favorites])

  useEffect(() => {
    let localCookie = getCookie(cookie)
    if(localCookie){
      // @ts-ignore
      let favs = JSON.parse(localCookie) || []
      setFavorites(favs)
    }
  }, [])

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  }
}

export default useFavorites