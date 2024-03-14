import React, { useState, useEffect } from 'react'
import { ProductType, ProductVariantType, ImageType } from '../types'

type useProductDetailsProps = {
  product: ProductType 
}

const useProductDetails = (props: useProductDetailsProps) => {

  const { product } = props

  const [variant, setVariant] = useState<ProductVariantType>(null)
  const [images, setImageTypes] = useState<ImageType[]>()
  const [image, setImageType] = useState<ImageType>(null)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [sellingPlans, setSellingPlans] = useState(null)
	const [price, setPrice] = useState<number | null>()
	const [compareAtPrice, setCompareAtPrice] = useState<number | null>()
	
  const handleImageTypeClick = (image) => {
		setImageType(image)
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
      setImageType(product?.images?.edges[0]?.node)
      //@ts-ignore      
			setImageTypes(product?.images?.edges.map((e) => e.node))
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
      setImageTypes(null)
      setImageType(null)
      setPrice(null)
      setCompareAtPrice(null)
      setSelectedOptions({})
    }		
	}, [product?.handle])

	useEffect(() => {
		if (variant) {
			setImageType(variant?.image)
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
    handleImageTypeClick,
    selectedOptions,
    handleOptionChange,
    product,        
    variant,
    selectVariant,    
	}
}

export default useProductDetails
