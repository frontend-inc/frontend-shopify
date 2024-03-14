import React, { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../context'
import { ImageType } from '../types'

const useProductContext = () => {
	const [image, setImageType] = useState<ImageType>(null)
	const [images, setImageTypes] = useState<ImageType[]>(null)

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
	} = useContext(ProductContext)

	const handleImageClick = (image) => {
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
		if (product) {
			setSelectedOptions({})
			setImageTypes(product?.images?.edges.map((e) => e.node))
			setImageType(product?.images?.edges[0]?.node)
		}
		if (product?.variants?.edges?.length == 1) {
			selectVariant(product, {})
		}
	}, [product])

	useEffect(() => {
		if (variant) {
			setImageType(variant?.image)
			setPrice(variant?.price?.amount)
			setCompareAtPrice(variant?.compareAtPrice?.amount)
		} else if (product) {
			setImageType(product?.images?.edges[0]?.node)
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
		setImageType,
		images,
		setImageTypes,
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
