import React, { useState, useEffect, useContext } from 'react'
import { ShopifyProductContext } from '../context'
import { ShopifyImageType } from '../types'

const useProductContext = () => {
	const [image, setShopifyImageType] = useState<ShopifyImageType>(null)
	const [images, setShopifyImageTypes] = useState<ShopifyImageType[]>(null)

  const [sellingPlans, setSellingPlans] = useState(null)
	const [price, setPrice] = useState<number | null>()
	const [compareAtPrice, setCompareAtPrice] = useState<number | null>()

	const {
		product,
		setProduct,
		variant,
		setVariant,
		collection,
		setCollection,
		selectedOptions,
		setSelectedOptions,
	} = useContext(ShopifyProductContext)

	const handleImageClick = (image) => {
		setShopifyImageType(image)
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
		if (product) {
			setSelectedOptions({})
			setShopifyImageTypes(product?.images?.edges.map((e) => e.node))
			setShopifyImageType(product?.images?.edges[0]?.node)
		}
		if (product?.variants?.edges?.length == 1) {
			selectVariant(product, {})
		}
	}, [product])

	useEffect(() => {
		if (variant) {
			setShopifyImageType(variant?.image)
			setPrice(variant?.price?.amount)
			setCompareAtPrice(variant?.compareAtPrice?.amount)
		} else if (product) {
			setShopifyImageType(product?.images?.edges[0]?.node)
			setPrice(product?.priceRange?.minVariantPrice?.amount)
			setCompareAtPrice(null)
		}
	}, [variant, product])

  useEffect(() => {
    if(product){
      setSellingPlans(product
          ?.sellingPlanGroups
          ?.edges[0]?.node
          ?.sellingPlans
          ?.edges.map(({node}) => node)
      )
    }
  }, [product])

	return {
		price,
		setPrice,
		compareAtPrice,
		setCompareAtPrice,

		image,
		setShopifyImageType,
		images,
		setShopifyImageTypes,
		handleImageClick,

		product,
		setProduct,
		variant,
		setVariant,

    sellingPlans,

		selectedOptions,
		setSelectedOptions,
		handleOptionChange,

		collection,
		setCollection,
	}
}

export default useProductContext
