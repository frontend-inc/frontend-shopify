export const formatCurrency = (money, digits = 2) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: digits,
		minimumFractionDigits: digits,
	}).format(money)
}

export const shopifyResizeImage = (url, { height, width }) => {
	if (!url) return
	let extension = url.split('.').pop()
	let filePath = url.split(`.${extension}`)[0]
	let resizedUrl = `${filePath}_${width}x${height}.${extension}?q=100`
	return resizedUrl
}

export const findVariantByColor = (product, color) => {
	let productVariant = product?.variants?.edges?.find(({ node: variant }) => {
		return variant?.selectedOptions?.find((selectedOption) => {
			return selectedOption?.name == 'Color' && selectedOption?.value == color
		})
	})
	return productVariant?.node
}

export const getSellingPlanDescription = (sellingPlan) => {
  let adjustment = (sellingPlan?.priceAdjustments && sellingPlan?.priceAdjustments[0]?.adjustmentValue) || {}
  let savingsDescription = 'Save'
  if (adjustment?.adjustmentPercentage) {    
    savingsDescription += ` ${adjustment.adjustmentPercentage}%`    
  } else if (adjustment?.price?.amount) {
    savingsDescription += ` $${adjustment.price.amount}`
  } else if (adjustment?.adjustmentAmount?.amount) {
    savingsDescription += ` ${adjustment.adjustmentAmount.amount}`
  }
  return savingsDescription
}

export const getSellingPlanPrice = (variant, sellingPlan) => {
  const originalPrice = variant?.price?.amount  
  let adjustment = (sellingPlan?.priceAdjustments && sellingPlan?.priceAdjustments[0]?.adjustmentValue) || {}
  let discountedPrice = originalPrice
  if (adjustment?.adjustmentPercentage) {
    discountedPrice = originalPrice - (originalPrice * adjustment.adjustmentPercentage) / 100
  } else if (adjustment?.price?.amount) {
    discountedPrice = adjustment.price.amount
  } else if (adjustment?.adjustmentAmount?.amount) {
    discountedPrice = originalPrice - adjustment.adjustmentAmount.amount
  }
  return discountedPrice
}

export const truncate = (str, n) => {
	return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

// Shopify will render single SKU products with title 'Default Title'
export const renderMerchandiseTitle = (merchandise) => {
	if (merchandise?.title != 'Default Title') {
		return merchandise?.title
	} else {
		return merchandise?.product?.title
	}
}

export const renderLineItemPrice = (line) => {
	if (line?.sellingPlanAllocation) {
		return formatCurrency(
			line?.sellingPlanAllocation?.priceAdjustments[0]?.price?.amount
		)
	} else {
		return formatCurrency(line?.merchandise?.price?.amount)
	}
}

export const renderLineItemCompareAtPrice = (line) => {
	if (line?.sellingPlanAllocation) {
		return formatCurrency(
			line?.sellingPlanAllocation?.priceAdjustments[0]?.compareAtPrice?.amount
		)
	} else {
		return formatCurrency(line?.merchandise?.price?.amount)
	}
}

// NextJS ShopifyImageType has trouble rendering SVG icons if file ext does not end in .svg
// such as ?variant=1234567890 so a fix here is to strip params from url
export function stripParams(src) {
	return src?.split('?')[0]
}


export const decodeBase64 = (data) => {
	return Buffer.from(data, 'base64').toString('ascii')
}

export const getBase64DecodedId = (id) => {
	let orderGid = decodeBase64(id)
	let orderId = orderGid.split('/')[-1]
	return orderId.split('?')[0]
}

export const getShopifyIdFromGid = (gid) => {
	const parsedURL = new URL(gid)
	const pathname = parsedURL.pathname
	var segments = pathname.split('/')
	var finalSegment = segments[segments.length - 1]
	return finalSegment
}
