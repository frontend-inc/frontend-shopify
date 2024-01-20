import React, { useState, useEffect } from 'react'
import { Product, ProductVariant, Image } from '../types'

type ProductVariantsProps = {
  product: Product 
}

const useProductVariants = (props: ProductVariantsProps) => {

  const { product } = props

  const [variant, setVariant] = useState<ProductVariant>(null)
  const [images, setImages] = useState<Image[]>()
  const [image, setImage] = useState<Image>(null)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [sellingPlans, setSellingPlans] = useState(null)
	const [price, setPrice] = useState<number | null>()
	const [compareAtPrice, setCompareAtPrice] = useState<number | null>()
	
  const handleImageClick = (image) => {
		setImage(image)
	}

	const handleOptionChange = (name, value) => {
		let selected = {
			...selectedOptions,
			[name]: value,
		}
		setSelectedOptions(selected)
		selectVariant(product, selected)
	}

	const selectVariant = (product, selectedOptions = {}) => {
		if (product?.variants?.edges?.length == 1) {
			setVariant(product.variants.edges[0].node)
		} else {
			const selectedVariant = product.variants.edges.find(({ node: variant }) =>
				variant.selectedOptions.every((option) => {
					return selectedOptions[option.name] == option.value
				})
			)
			setVariant(selectedVariant?.node)
		}
	}

	useEffect(() => {
		if (product?.handle) {
			setSelectedOptions({})
      //@ts-ignore      
      setImage(product?.images?.edges[0]?.node)
      //@ts-ignore      
			setImages(product?.images?.edges.map((e) => e.node))
			setPrice(product?.priceRange?.minVariantPrice?.amount)
      setCompareAtPrice(null)      
      setSellingPlans(product
        ?.sellingPlanGroups        
        //@ts-ignore      
        ?.edges[0]?.node
        ?.sellingPlans
        ?.edges.map(({node}) => node)
      )			
      //@ts-ignore      
      if (product?.variants?.edges?.length == 1) {
        selectVariant(product, {})
      }
		}else{
      setVariant(null)
      setImages(null)
      setImage(null)
      setPrice(null)
      setCompareAtPrice(null)
      setSelectedOptions({})
    }		
	}, [product?.handle])

	useEffect(() => {
		if (variant) {
			setImage(variant?.image)
			setPrice(variant?.price?.amount)
			setCompareAtPrice(variant?.compareAtPrice?.amount)
		} 
	}, [variant])

	return {
    image,
    images,
    price,
    compareAtPrice,		
    sellingPlans,
    handleImageClick,
    selectedOptions,
    handleOptionChange,
    product,        
    variant,
    selectVariant,    
	}
}

export default useProductVariants
